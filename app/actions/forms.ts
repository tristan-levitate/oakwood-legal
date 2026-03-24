"use server";

import { IContactForm } from "@/components/globals/contact-us/form/contact-form";
import { leadIntelligence } from "@/utils/cgIntelligence";
import { IClientInfo } from "../../utils/useGetClientInfo";
import Conversions_API_Meta from "./utils/Conversions_API_Meta";
import LeadDocket from "./utils/LeadDocket";
import MongoDB from "./utils/MongoDB";
import Sendgrid from "./utils/Sendgrid";
import Twilio from "./utils/Twilio";
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

  try{
    const intelligence = await leadIntelligence(data);
    data.leadIntelligenceScore = intelligence.scoreText;
    data.leadIntelligenceSummary = intelligence.reasoningText;
    console.log(`[LEAD INTELLIGENCE] Score: ${intelligence.scoreText} - Summary: ${intelligence.reasoningText}`);
  }catch (error) {
    console.error(`[LEAD INTELLIGENCE] Error getting lead intelligence: ${error}`);
    data.leadIntelligenceScore = "0.5";
    data.leadIntelligenceSummary = "Lead intelligence processing failed - manual review required";
  }

  const intelligenceScore = parseFloat(data.leadIntelligenceScore || "0");
  if (intelligenceScore === 0 && !data.email.includes("@thecaselygroup.com")) {
    console.log(`[LEAD INTELLIGENCE] Score is 0 and email is not from thecaselygroup.com - is obviously spam`);
    return {success: true}
  }

  if (data.email.endsWith("-optimal@thecaselygroup.com")) {
    console.log(`[LEAD INTELLIGENCE] Email ends with -optimal@thecaselygroup.com - optimal lead test email`);
    data.leadIntelligenceScore = "0.9";
  }

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
      Twilio(formData),
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
