import React from "react";
import { ASSETS } from '@/utils/assets';

import {
  Html,
  Head,
  Tailwind,
  Container,
  Text,
  Hr,
  Img,
} from "@react-email/components";
import { FormSubmissionData } from "./types";

const Email_Template = (data: FormSubmissionData) => {
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
    leadIntelligenceScore: "CG Intelligence Score",
    leadIntelligenceSummary: "CG Intelligence Summary",
  };

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Oakwood Legal Group Lead</title>
      </Head>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#C02B27",
              },
            },
          },
        }}
      >
        <Container className="text-center text-black border border-solid border-slate-200 mt-10 shadow-sm max-w-[600px] p-5 bg-white rounded-md">
          <Img
            className="block mx-auto mt-5 max-w-[250px] max-h-[100px] object-contain p-3 rounded-lg"
            src={ASSETS.OAKWOOD_LOGO}
          />
          <Hr className="my-3 max-w-[70%] mx-auto" />
          <Text className="font-sans font-bold mt-0 mb-1">
            Oakwood Legal Group
          </Text>

          <Hr className="my-3 max-w-[70%] mx-auto" />

          {Object.entries(DATA_LABEL_MAP).map(([key, label], i) => {
            const keyName = key as keyof FormSubmissionData;
            let displayValue = data[keyName];

            // Handle boolean values for newsletter
            if (keyName === "newsletter") {
              displayValue = displayValue ? "Yes" : "No";
            }

            return (
              <Text
                key={i}
                className={`font-sans ${
                  i % 2 == 0 ? "bg-gray-200" : "bg-gray-50"
                } font-bold text-gray-600 mt-0 mb-1 text-left py-2.5 px-3 w-[90%] mx-auto`}
              >
                {label}:{" "}
                {displayValue
                  ? displayValue.toString()
                  : // Check for 0s, specially on scores
                  displayValue === 0
                  ? "0"
                  : "N/A"}
              </Text>
            );
          })}
        </Container>
      </Tailwind>
    </Html>
  );
};

export default Email_Template;
