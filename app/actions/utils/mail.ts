import { FormSubmissionData } from "./types";
import EmailTemplate from "./Email_Template";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";

// Form lead notifications via SMTP2Go SMTP.
// Env vars (Vercel + .env.local):
//   SMTP2GO_USER       - SMTP2Go SMTP username
//   SMTP2GO_PASS       - SMTP2Go SMTP password (or SMTP2GO_PASSWORD)
//   MAIL_FROM          - verified sender email
//   SMTP_HOST          - optional, defaults to mail-eu.smtp2go.com
export async function sendLeadEmail(data: FormSubmissionData) {
  console.log("[MAIL] SMTP2Go sender starting…");

  const user = process.env.SMTP2GO_USER;
  const pass = process.env.SMTP2GO_PASS || process.env.SMTP2GO_PASSWORD;
  const from = process.env.MAIL_FROM || "no-reply@wordpressemail.co.uk";
  const host = process.env.SMTP_HOST || "mail-eu.smtp2go.com";

  console.log("[MAIL] env present?", {
    hasUser: !!user,
    hasPass: !!pass,
    from,
    host,
  });

  if (!user || !pass) {
    throw new Error("SMTP2GO_USER / SMTP2GO_PASS not set");
  }

  const emailHTML = await render(EmailTemplate(data), { pretty: true });

  const recipients = [
    "ashe@outliercreativeagency.com",
    "dustin@outliercreativeagency.com",
    "elan@oakwoodlegal.com",
    "seo@outliercreativeagency.com",
    "olivia@levitate.digital",
  ];

  const transporter = nodemailer.createTransport({
    host,
    port: 587,
    secure: false,
    auth: { user, pass },
  });

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
      "[MAIL] Sent via SMTP2Go. messageId:",
      info.messageId,
      "accepted:",
      info.accepted
    );
  } catch (error) {
    console.error("[MAIL] Failed to send via SMTP2Go:", error);
    throw error;
  }
}
