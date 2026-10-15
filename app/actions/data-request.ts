"use server";

import { headers } from "next/headers";

import { sendDataRequestEmail } from "./utils/mail";
import MongoDB from "./utils/MongoDB";

const requestTypes = ["access", "delete", "correct"] as const;

type RequestType = (typeof requestTypes)[number];

export async function submitDataRequest(input: {
    fullName: string;
    email: string;
    requestType: RequestType;
    message: string;
    pageUrl: string;
}) {

    const fullName = input.fullName.trim();
    const email = input.email.trim();
    const message = input.message.trim();

    if (!fullName || !email || !message || !requestTypes.includes(input.requestType)) {

        return { success: false, error: "Please complete every field." };

    }

    const headerList = await headers();
    const forwardedFor = headerList.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || headerList.get("x-real-ip") || "";
    const userAgent = headerList.get("user-agent") || "";
    const pageUrl = input.pageUrl || headerList.get("referer") || "";

    try {

        await MongoDB({
            fullName,
            email,
            requestType: input.requestType,
            message,
            pageUrl,
            ip,
            userAgent,
            requestedAt: new Date(),
        }, "data-requests");

    } catch (error) {

        console.error("[data-request] Failed to log request:", error);

    }

    try {

        await sendDataRequestEmail({
            fullName,
            email,
            requestType: input.requestType,
            message,
            pageUrl,
        });

    } catch (error) {

        console.error("[data-request] Failed to send email:", error);

        return {
            success: false,
            error: "We could not send your request. Email info@oakwoodlegal.com and we will respond within one month.",
        };

    }

    return { success: true };

}
