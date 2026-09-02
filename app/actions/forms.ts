"use server";

import { IContactForm } from "@/components/globals/contact-us/form/contact-form";
import { IClientInfo } from "../../utils/useGetClientInfo";
import Conversions_API_Meta from "./utils/Conversions_API_Meta";
import LeadDocket from "./utils/LeadDocket";
import MongoDB from "./utils/MongoDB";
import { sendLeadEmail } from "./utils/mail";
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
      sendLeadEmail(formData),
      conversionsPromise,
      LeadDocket(leadDocketPayload),
    ]);

    const emailResult = settled[0];
    const conversionsResult = settled[1];
    const leadDocketResult = settled[2];

    const email =
      emailResult.status === "fulfilled"
        ? { status: "sent" as const }
        : {
            status: "failed" as const,
            error: getErrorMessage(emailResult.reason),
          };

    let mongoDbErrorMessage: string | undefined = undefined;
    try {
      await MongoDB(formData, "form-submissions");
    } catch (mongoError) {
      mongoDbErrorMessage = getErrorMessage(mongoError);
    }

    // LeadDocket swallows its own errors and resolves with { success: false }
    // on failure, so a "fulfilled" status does not mean the lead was accepted.
    // Inspect the returned value to know if the CRM actually took the lead.
    const leadDocketAccepted =
      leadDocketResult.status === "fulfilled" &&
      (leadDocketResult.value as { success?: boolean })?.success !== false;

    const emailSent = emailResult.status === "fulfilled";

    // The lead is "captured" if it reached at least one destination that the
    // firm actually monitors: the LeadDocket CRM or the email notification.
    // MongoDB and Meta Conversions are best-effort side-channels and must not
    // block the user-facing success state.
    const leadCaptured = leadDocketAccepted || emailSent;

    // Log any side-channel failures so they can be fixed, without failing UX.
    if (!emailSent) {
      console.error("[forms.ts] Lead email failed:", email.error);
    }
    if (!leadDocketAccepted) {
      console.error(
        "[forms.ts] LeadDocket did not accept the lead:",
        leadDocketResult.status === "fulfilled"
          ? leadDocketResult.value
          : getErrorMessage(leadDocketResult.reason)
      );
    }
    if (conversionsResult.status === "rejected") {
      console.error(
        "[forms.ts] Meta Conversions failed:",
        getErrorMessage(conversionsResult.reason)
      );
    }
    if (mongoDbErrorMessage) {
      console.error("[forms.ts] MongoDB failed:", mongoDbErrorMessage);
    }

    const error = leadCaptured
      ? undefined
      : email.status === "failed"
        ? email.error
        : leadDocketResult.status === "rejected"
          ? getErrorMessage(leadDocketResult.reason)
          : "Lead could not be delivered to any destination.";

    return { success: leadCaptured, error, email };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      error: getErrorMessage(error),
      email: { status: "failed" as const, error: getErrorMessage(error) },
    };
  }
}
