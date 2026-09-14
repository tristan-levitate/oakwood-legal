import React from "react";
import { ASSETS } from "@/utils/assets";
import {
  Html,
  Head,
  Tailwind,
  Container,
  Text,
  Hr,
  Img,
  Link,
} from "@react-email/components";

const Client_Confirmation_Template = () => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>We received your message | Oakwood Legal Group</title>
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
        <Container className="text-left text-black border border-solid border-slate-200 mt-10 shadow-sm max-w-[600px] p-5 bg-white rounded-md">
          <Img
            className="block mx-auto mt-5 max-w-[250px] max-h-[100px] object-contain p-3 rounded-lg"
            src={ASSETS.OAKWOOD_LOGO}
          />
          <Hr className="my-3 max-w-[70%] mx-auto" />
          <Text className="font-sans font-bold mt-0 mb-4 text-center">
            Oakwood Legal Group
          </Text>

          <Text className="font-sans text-gray-800 mt-0 mb-4 px-2 leading-relaxed">
            Hi there,
          </Text>
          <Text className="font-sans text-gray-800 mt-0 mb-4 px-2 leading-relaxed">
            Thank you for contacting Oakwood Legal Group. We&apos;ve received
            your request for a free consultation, and a member of our team will
            contact you shortly.
          </Text>
          <Text className="font-sans text-gray-800 mt-0 mb-4 px-2 leading-relaxed">
            If you&apos;d like to speak with someone right away, call us now at{" "}
            <Link href="tel:+18888047858" className="text-brand font-bold">
              888-804-7858
            </Link>
            .
          </Text>
          <Text className="font-sans text-gray-800 mt-0 mb-2 px-2 leading-relaxed">
            We look forward to speaking with you.
          </Text>
        </Container>
      </Tailwind>
    </Html>
  );
};

export default Client_Confirmation_Template;
