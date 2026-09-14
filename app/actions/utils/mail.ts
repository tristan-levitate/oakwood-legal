import { FormSubmissionData } from "./types";
import EmailTemplate from "./Email_Template";
import ClientConfirmationTemplate from "./Client_Confirmation_Template";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";

// Form emails via SMTP2Go SMTP.
// Env vars (Vercel + .env.local):
//   SMTP2GO_USER       - SMTP2Go SMTP username
//   SMTP2GO_PASS       - SMTP2Go SMTP password (or SMTP2GO_PASSWORD)
//   MAIL_FROM          - verified sender email
//   SMTP_HOST          - optional, defaults to mail-eu.smtp2go.com

function getSmtpConfig() {
  const user = process.env.SMTP2GO_USER;
  const pass = process.env.SMTP2GO_PASS || process.env.SMTP2GO_PASSWORD;
  const from = process.env.MAIL_FROM || "no-reply@wordpressemail.co.uk";
  const host = process.env.SMTP_HOST || "mail-eu.smtp2go.com";

  if (!user || !pass) {
    throw new Error("SMTP2GO_USER / SMTP2GO_PASS not set");
  }

  return { user, pass, from, host };
}

function createTransporter() {
  const { user, pass, host } = getSmtpConfig();

  return nodemailer.createTransport({
    host,
    port: 587,
    secure: false,
    auth: { user, pass },
  });
}

export async function sendLeadEmail(data: FormSubmissionData) {
  console.log("[MAIL] SMTP2Go team lead email starting…");

  const { from, host } = getSmtpConfig();
  console.log("[MAIL] env present?", {
    hasUser: true,
    hasPass: true,
    from,
    host,
  });

  const emailHTML = await render(EmailTemplate(data), { pretty: true });

  const recipients = [
    "ashe@outliercreativeagency.com",
    "dustin@outliercreativeagency.com",
    "elan@oakwoodlegal.com",
    "seo@outliercreativeagency.com",
    "mike@oakwoodlegal.com",
  ];

  const transporter = createTransporter();

  try {
    await transporter.verify();
    console.log("[MAIL] SMTP2Go connection verified");

    const info = await transporter.sendMail({
      from: `"Oakwood Legal Group" <${from}>`,
      to: recipients.join(", "),
      subject: `Oakwood Legal Group Lead | ${data.fullName}`,
      html: emailHTML,
      replyTo: data.email || undefined,
    });
    console.log(
      "[MAIL] Team lead email sent. messageId:",
      info.messageId,
      "accepted:",
      info.accepted
    );
  } catch (error) {
    console.error("[MAIL] Failed to send team lead email:", error);
    throw error;
  }
}

/** Confirmation email to the person who submitted the contact form. */
export async function sendClientConfirmationEmail(data: FormSubmissionData) {
  if (!data.email) {
    throw new Error("Client email missing; cannot send confirmation");
  }

  console.log("[MAIL] SMTP2Go client confirmation starting…");

  const { from } = getSmtpConfig();
  const emailHTML = await render(ClientConfirmationTemplate(), {
    pretty: true,
  });
  const transporter = createTransporter();

  try {
    await transporter.verify();
    console.log("[MAIL] SMTP2Go connection verified (client confirmation)");

    const info = await transporter.sendMail({
      from: `"Oakwood Legal Group" <${from}>`,
      to: data.email,
      subject: "We received your message | Oakwood Legal Group",
      html: emailHTML,
      replyTo: "info@oakwoodlegal.com",
    });
    console.log(
      "[MAIL] Client confirmation sent. messageId:",
      info.messageId,
      "accepted:",
      info.accepted
    );
  } catch (error) {
    console.error("[MAIL] Failed to send client confirmation:", error);
    throw error;
  }
}
