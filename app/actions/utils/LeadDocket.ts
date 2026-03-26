import type { ILeadDocketPayload } from "./types";

// Helper function to split full name
function splitFullName(fullName: string): {
  firstName: string;
  lastName: string;
} {
  const nameParts = fullName.trim().split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";
  return { firstName, lastName };
}

export default async function LeadDocket(data: ILeadDocketPayload) {
  const LEAD_DOCKET_ENDPOINT =
    "https://oakwoodlegal.leaddocket.com/opportunities/formjson/39";
  const LEAD_DOCKET_API_KEY = process.env.LEAD_DOCKET_API_KEY;

  if (!LEAD_DOCKET_API_KEY) {
    console.error("[LeadDocket] API Key not configured");
    return { success: false, error: "API Key not configured" };
  }

  const url = `${LEAD_DOCKET_ENDPOINT}?apikey=${LEAD_DOCKET_API_KEY}`;

  const { firstName, lastName } = splitFullName(data.fullName);

  // Lead Docket only accepts: First, Last, Phone, Email, Summary
  const payload = {
    First: firstName,
    Last: lastName,
    Phone: data.phone,
    Email: data.email,
    Summary: data.message || `Legal Area: ${data.legalArea || 'Not specified'}. Source: ${data.locationHref || 'Website'}`,
  };

  console.log("[LeadDocket] Sending data:", payload);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();

    if (!response.ok || !responseData.success) {
      console.error("[LeadDocket] API Error:", responseData);
      throw new Error(
        responseData.message || `HTTP error! status: ${response.status}`
      );
    }

    console.log("[LeadDocket] Success:", responseData);
    return responseData;
  } catch (error) {
    console.error("[LeadDocket] Failed to send lead:", error);
    // Don't throw error to prevent form submission failure
    // Just log the error and continue
    return { success: false, error: error };
  }
}
