"use server";

import { IContactForm } from "@/components/globals/contact-us/form/contact-form";
import { IClientInfo } from "../../utils/useGetClientInfo";
import Conversions_API_Meta from "./utils/Conversions_API_Meta";
import LeadDocket from "./utils/LeadDocket";
import MongoDB from "./utils/MongoDB";
import Sendgrid from "./utils/Sendgrid";
import { ILeadDocketPayload } from "./utils/types";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  try {
    return JSON.stringify(error);
  } catch {
    return "Unknown error";
  }
}

async function getReCaptchaScore(token: string) {
  if (!token) {
    return { score: null };
  }

  // Development token for localhost
  if (token === "dev-token-localhost") {
    return { score: 0.9 };
  }

  if (!process.env.RECAPTCHA_SECRET_KEY) {
    return { score: null };
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: "POST",
      }
    );

    const captcha = await response.json() as { 
      success: boolean; 
      score?: number; 
      'error-codes'?: string[];
      action?: string;
    };

    if (!captcha.success) {
      console.error("[CAPTCHA] Verification failed:", captcha['error-codes']);
      return { score: null };
    }

    return { score: captcha.score || null };
  } catch (err) {
    console.error("[CAPTCHA] Error:", err);
    return { score: null };
  }
}

export async function submitForm(
  data: IContactForm,
  event_name: string,
  token: string,
  clientInfo: IClientInfo
) {
  const { score } = await getReCaptchaScore(token);

  const formData = {
    ...data,
    ...clientInfo,
    score,
  };


  const { fullName, phone, email, message, legalArea, ...otherDetails } =
    data;

  let utmDetails: string | undefined = undefined;
  try {
    const url = new URL(clientInfo.locationHref);
    if (url.search) {
      utmDetails = url.search.substring(1);
    }
  } catch (e) {
    console.warn(
      "[forms.ts] Could not parse locationHref for UTM details:",
      clientInfo.locationHref,
      e
    );
  }

  // Prepare LeadDocket payload
  const leadDocketPayload: ILeadDocketPayload = {
    fullName,
    email,
    phone,
    message,
    legalArea,
    locationHref: clientInfo.locationHref,
    ip: clientInfo.ip,
    userAgent: clientInfo.userAgent,
    score: score ?? undefined,
    marketingSource: utmDetails ? "Website Form" : undefined,
    contactSource: "Website",
    marketingSourceDetails: utmDetails,
  };

  const conversionsPromise =
    event_name === "Oakwood Legal Group - Form Submission" ||
    event_name === "Oakwood Legal Group - Squeeze Page Form"
      ? Promise.resolve()
      : Conversions_API_Meta(formData, event_name);

  try {
    const settled = await Promise.allSettled([
      Sendgrid(formData),
      conversionsPromise,
      LeadDocket(leadDocketPayload),
    ]);

    const sendgridResult = settled[0];
    const conversionsResult = settled[1];
    const leadDocketResult = settled[2];

    const sendgrid =
      sendgridResult.status === "fulfilled"
        ? { status: "sent" as const }
        : {
            status: "failed" as const,
            error: getErrorMessage(sendgridResult.reason),
          };

    let mongoDbErrorMessage: string | undefined = undefined;
    try {
      await MongoDB(formData, "form-submissions");
    } catch (mongoError) {
      mongoDbErrorMessage = getErrorMessage(mongoError);
    }

    const allSucceeded =
      sendgridResult.status === "fulfilled" &&
      conversionsResult.status === "fulfilled" &&
      leadDocketResult.status === "fulfilled" &&
      !mongoDbErrorMessage;

    const error =
      !allSucceeded && sendgrid.status === "failed"
        ? sendgrid.error
        : !allSucceeded && conversionsResult.status === "rejected"
          ? getErrorMessage(conversionsResult.reason)
          : !allSucceeded && leadDocketResult.status === "rejected"
            ? getErrorMessage(leadDocketResult.reason)
            : !allSucceeded && mongoDbErrorMessage
              ? mongoDbErrorMessage
              : undefined;

    return { success: allSucceeded, error, sendgrid };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      error: getErrorMessage(error),
      sendgrid: { status: "failed" as const, error: getErrorMessage(error) },
    };
  }
}
