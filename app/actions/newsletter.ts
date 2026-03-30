"use server";

import MongoDB from "./utils/MongoDB";
import { INewsletterData } from "./utils/types";

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
    from_email: process.env.SENDGRID_FROM_EMAIL || "noreply@oakwoodlegal.com",
    from_name: "Oakwood Legal Group",
    preheader: "",
    created_at: now,
    updated_at: now,
    subscriberName: data.name,
    subscriberEmail: data.email,
  };

  await MongoDB(newsletterData, "constant-contact-newsletters");

  return { success: true };
}

