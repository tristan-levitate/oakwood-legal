import type { IClientInfo } from "../../../utils/useGetClientInfo";
import { IContactForm } from "@/components/globals/contact-us/form/contact-form";

export type FormSubmissionData = IContactForm &
  IClientInfo & {
    score?: number | null;
  };

export interface INewsletterData {
  campaign_id: string;
  title: string;
  slug: string;
  html: string;
  from_email: string;
  from_name: string;
  preheader: string;
  created_at: Date;
  updated_at: Date;
}

export interface ILeadDocketPayload {
  fullName: string;
  email: string;
  phone: string;
  message?: string;
  legalArea?: string;
  marketingSource?: string;
  contactSource?: string;
  marketingSourceDetails?: string;
  referredBy?: string;
  locationHref?: string;
  ip?: string;
  userAgent?: string;
  score?: number;
}
