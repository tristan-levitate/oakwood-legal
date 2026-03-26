"use client";

import React, { useEffect } from 'react';
import DualTitle from '@/components/globals/dual-title/dual-title';
import ContactUs from '@/components/globals/contact-us/contact-us';
import CaseResultsAwards from '@/components/screens/case-results/case-results-awards';
import CaseResultsList from '@/components/screens/case-results/case-results-list';

interface CaseResult {
  _id: string;
  verdict: string;
  resultDetails: string;
}

interface CaseResultsClientProps {
  results: CaseResult[];
}

export default function CaseResultsClient({ results }: CaseResultsClientProps) {
  useEffect(() => {
    // Check if URL has hash for title scroll
    if (window.location.hash === '#title') {
      setTimeout(() => {
        const element = document.querySelector('[aria-labelledby="page-title"]');
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 80; // 80px offset from top
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300); // Increased delay to ensure page is fully loaded
    }
  }, []);

  return (
    <main className="relative z-20">
      {/* Hero Section */}
      <DualTitle
        titleWhite="CASE"
        titleRed="RESULTS"
        message="At Oakwood Legal Group, results aren't just numbers — they're life-changing victories for our clients. We have led two of California's largest litigations, including a record-setting $852 million settlement, and have recovered hundreds of millions more across personal injury and abuse cases. Explore our case results to see the proven history, relentless advocacy, and groundbreaking outcomes that set our firm apart."
        page="case-results"
      />

      {/* Awards Section */}
      <CaseResultsAwards />

      {/* Case Results Section */}
      <CaseResultsList results={results} />

      {/* Contact Section */}
      <ContactUs />
    </main>
  );
}
