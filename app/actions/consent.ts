"use server";

import { headers } from "next/headers";

import MongoDB from "./utils/MongoDB";

import type { ConsentAction, CookiePreferences } from "@/utils/cookie-consent";

import type { INewsletterConsentLog } from "./utils/types";

export async function logCookieConsent(
    preferences: CookiePreferences,
    action: ConsentAction,
    pageUrl: string
) {

    const headerList = await headers();
    const forwardedFor = headerList.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || headerList.get("x-real-ip") || "";
    const userAgent = headerList.get("user-agent") || "";

    try {

        await MongoDB({
            necessary: true,
            measurement: Boolean(preferences.measurement),
            marketing: Boolean(preferences.marketing),
            action,
            pageUrl,
            ip,
            userAgent,
            consentedAt: new Date(),
        }, "cookie-consent");

    } catch (error) {

        console.error("[consent] Failed to log consent:", error);

    }

}

export async function logNewsletterConsent(input: {
    subscribed: boolean;
    formName: INewsletterConsentLog["formName"];
    email: string;
    name: string;
    pageUrl: string;
}) {

    const headerList = await headers();
    const forwardedFor = headerList.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || headerList.get("x-real-ip") || "";
    const userAgent = headerList.get("user-agent") || "";
    const pageUrl = input.pageUrl || headerList.get("referer") || "";

    try {

        await MongoDB({
            subscribed: Boolean(input.subscribed),
            formName: input.formName,
            email: input.email,
            name: input.name,
            pageUrl,
            ip,
            userAgent,
            consentedAt: new Date(),
        }, "newsletter-consent");

    } catch (error) {

        console.error("[consent] Failed to log newsletter consent:", error);

    }

}
