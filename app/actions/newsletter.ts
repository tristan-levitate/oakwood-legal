"use server";

import MongoDB from "./utils/MongoDB";
import { INewsletterData } from "./utils/types";
import { logNewsletterConsent } from "./consent";

export async function submitNewsletter(data: {
  name: string;
  email: string;
}) {
  const now = new Date();

  const newsletterData: INewsletterData = {
    campaign_id: "website-newsletter",
    title: "Oakwood Legal Group Newsletter",
    slug: "oakwood-legal-group-newsletter",
    html: "",
    from_email: process.env.MAIL_FROM || "noreply@oakwoodlegal.com",
    from_name: "Oakwood Legal Group",
    preheader: "",
    created_at: now,
    updated_at: now,
    subscriberName: data.name,
    subscriberEmail: data.email,
  };

  await MongoDB(newsletterData, "constant-contact-newsletters");

  await logNewsletterConsent({
    subscribed: true,
    formName: "footer",
    email: data.email,
    name: data.name,
    pageUrl: "",
  });

  return { success: true };
}

