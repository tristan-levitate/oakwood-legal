import { FormSubmissionData } from "./types";
import EmailTemplate from "./Email_Template";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";

// Lead-notification email for the Oakwood PPC landing page.
// Sent via Brevo's SMTP relay (free tier). Requires these env vars in Vercel:
//   BREVO_SMTP_USER  - the Brevo SMTP login (looks like a4ce37001@smtp-brevo.com)
//   BREVO_SMTP_KEY   - the Brevo SMTP key (from Brevo > SMTP & API > SMTP)
//   MAIL_FROM        - a Brevo-verified sender, e.g. seo@outliercreativeagency.com
// The function name/export are unchanged so forms.ts needs no edits.
async function Sendgrid(data: FormSubmissionData) {
  console.log("[MAIL] Brevo sender starting…");

  const user = process.env.BREVO_SMTP_USER;
  const pass = process.env.BREVO_SMTP_KEY;
  const from = process.env.MAIL_FROM || "seo@outliercreativeagency.com";

  console.log("[MAIL] env present?", {
    hasUser: !!user,
    hasPass: !!pass,
    from,
  });

  if (!user || !pass) {
    throw new Error("BREVO_SMTP_USER / BREVO_SMTP_KEY not set");
  }

  const emailHTML = await render(EmailTemplate(data), { pretty: true });

  const recipients = [
    "ashe@outliercreativeagency.com",
    "dustin@outliercreativeagency.com",
    "elan@oakwoodlegal.com",
    "seo@outliercreativeagency.com",
  ];

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false, // STARTTLS on 587
    auth: { user, pass },
  });

  try {
    // Proves the SMTP credentials + connection are valid before sending.
    await transporter.verify();
    console.log("[MAIL] Brevo SMTP connection verified");

    const info = await transporter.sendMail({
      from: `"Oakwood Legal Group" <${from}>`,
      to: recipients.join(", "),
      subject: `Oakwood Legal Group Lead | ${data.fullName}`,
      html: emailHTML,
      replyTo: data.email || undefined,
    });
    console.log("[MAIL] Sent via Brevo. messageId:", info.messageId, "accepted:", info.accepted);
  } catch (error) {
    console.error("[MAIL] Failed to send via Brevo:", error);
    throw error;
  }
}

export default Sendgrid;
