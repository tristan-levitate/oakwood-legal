import { FormSubmissionData } from "./types";
import EmailTemplate from "./Email_Template";
import { render } from "@react-email/render";
import sgMail from "@sendgrid/mail";

async function Sendgrid(data: FormSubmissionData) {
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error("SENDGRID_API_KEY not set");
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const emailHTML = await render(EmailTemplate(data), {
    pretty: true,
  });

  const msg = {
    to: [
      "mario@oakwoodlegal.com",
      "mckoy@oakwoodlegal.com",
      "joemar@oakwoodlegal.com",
      "mike@oakwoodlegal.com",
    ],
    from: process.env.SENDGRID_FROM_EMAIL || "no-reply@oakwoodlegal.com",
    subject: `Oakwood Legal Group Lead | ${data.fullName}`,
    html: emailHTML,
  };

  if (!msg.to || msg.to.length === 0) {
    throw new Error(
      "No email recipients configured for Oakwood Legal Group notifications"
    );
  }

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}

export default Sendgrid;
