import React from "react";
import type { Metadata } from "next";
import PrivacyPolicyHero from "../../components/screens/privacy-policy/privacy-policy-hero";
import PrivacyPolicyContent from "../../components/screens/privacy-policy/privacy-policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy - Oakwood Legal Group",
  description: "Privacy Policy for Oakwood Legal Group. Learn about how we collect, use, and protect your personal information when you visit our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicyHero />
      <PrivacyPolicyContent />
    </main>
  );
}
