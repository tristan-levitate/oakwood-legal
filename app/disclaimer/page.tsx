import React from "react";
import type { Metadata } from "next";
import DisclaimerHero from "@/components/screens/disclaimer/disclaimer-hero";
import DisclaimerContent from "@/components/screens/disclaimer/disclaimer-content";

export const metadata: Metadata = {
  title: "Disclaimer - Oakwood Legal Group",
  description: "Legal disclaimer for Oakwood Legal Group. Important information about attorney advertising, legal advice, and attorney-client relationships.",
};

export default function DisclaimerPage() {
  return (
    <main>
      <DisclaimerHero />
      <DisclaimerContent />
    </main>
  );
}
