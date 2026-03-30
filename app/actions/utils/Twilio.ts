import { FormSubmissionData } from "./types";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = require("twilio")(accountSid, authToken);

const OAKWOOD_LEGAL_PHONE_NUMBER_LIST = [
  "+18185106904",
  "+13102545013",
];

async function Twilio(data: FormSubmissionData) {
  const DATA_LABEL_MAP: {
    [prop in keyof FormSubmissionData]?: string;
  } = {
    fullName: "Full Name",
    email: "Email",
    phone: "Phone Number",
    message: "Message",
    legalArea: "Legal Area",
    newsletter: "Newsletter Subscription",
    eventId: "Event ID",
    ip: "IP Address",
    locationHref: "Page URL",
    score: "ReCaptcha Score",
    userAgent: "Browser Info",
  };

  let TEXT_MESSAGE =
    `***Oakwood Legal Group Lead***\n` +
    `${Object.entries(DATA_LABEL_MAP)
      .map(([key, label]) => {
        const keyName = key as keyof FormSubmissionData;
        const value = data[keyName];

        if (keyName === "message") {
          let description = value as string;
          if (!description) return "";
          return `${label}: TEXT_TO_BECOME_DESCRIPTION`;
        }

        if (keyName === "newsletter") {
          return `${label}: ${value ? "Yes" : "No"}`;
        }

        return `${label}: ${
          value
            ? value.toString()
            : // Check for 0s, specially on scores
            value === 0
            ? "0"
            : "N/A"
        }`;
      })
      .filter(Boolean)
      .join("\n")}\n`;

  if (TEXT_MESSAGE.includes("TEXT_TO_BECOME_DESCRIPTION") && data["message"]) {
    TEXT_MESSAGE = TEXT_MESSAGE.replace(
      "TEXT_TO_BECOME_DESCRIPTION",
      data["message"]
    );
  }

  if (!accountSid || !authToken) {
    console.log("Twilio credentials not set, skipping SMS...");
    return;
  }

  if (!OAKWOOD_LEGAL_PHONE_NUMBER_LIST || OAKWOOD_LEGAL_PHONE_NUMBER_LIST.length === 0) {
    console.warn("No phone numbers configured for Oakwood Legal Group notifications");
    return;
  }

  try {
    const promises = OAKWOOD_LEGAL_PHONE_NUMBER_LIST.map(async (phoneNumber) => {
      const message = await twilioClient.messages.create({
        body: TEXT_MESSAGE,
        from: process.env.TWILIO_MESSAGING_SERVICE_SID,
        to: phoneNumber,
      });
      console.log(`SMS sent to ${phoneNumber}:`, message.sid);
      return message;
    });

    await Promise.all(promises);
    console.log("All SMS messages sent successfully");
  } catch (error) {
    console.error("Failed to send SMS:", error);
    throw error;
  }
}

export default Twilio;
