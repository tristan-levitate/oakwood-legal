import { FormSubmissionData } from "./types";
import EmailTemplate from "./Email_Template";
import { render } from "@react-email/render";
import sgMail from "@sendgrid/mail";

async function Sendgrid(data: FormSubmissionData) {
  if (!process.env.SENDGRID_API_KEY)
    return console.log(`SENDGRID_API_KEY not set, skipping email...`);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const emailHTML = await render(EmailTemplate(data), {
    pretty: true,
  });

  const leadScoreColor =
    Number(data.leadIntelligenceScore) >= 0.7
      ? "🟢"
      : Number(data.leadIntelligenceScore) >= 0.4
        ? "🟡"
        : "🔴";

  const msg = {
    to: [
      "mario@oakwoodlegal.com",
      "mckoy@oakwoodlegal.com",
      "joemar@oakwoodlegal.com",
      "mike@oakwoodlegal.com",
    ],
    from: "notifications@thecaselygroup.com",
    subject: `${leadScoreColor} Oakwood Legal Group Lead | ${data.fullName}`,
    html: emailHTML,
  };

  if (!msg.to || msg.to.length === 0) {
    console.warn(
      "No email recipients configured for Oakwood Legal Group notifications",
    );
    return;
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
