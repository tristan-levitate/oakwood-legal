"use server";

import { IContactForm } from "@/components/globals/contact-us/form/contact-form";
import { IClientInfo } from "../../utils/useGetClientInfo";
import Conversions_API_Meta from "./utils/Conversions_API_Meta";
import LeadDocket from "./utils/LeadDocket";
import MongoDB from "./utils/MongoDB";
import Sendgrid from "./utils/Sendgrid";
import { ILeadDocketPayload } from "./utils/types";

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

  try {
    await Promise.all([
      Sendgrid(formData),
      Conversions_API_Meta(formData, event_name),
      LeadDocket(leadDocketPayload),
    ]);

    await MongoDB(formData, "form-submissions");

    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, error: "Failed to submit form" };
  }
}
