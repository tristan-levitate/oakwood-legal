import React from 'react'
import type { Metadata } from 'next';
import CaseResultsClient from '../../components/screens/case-results/case-results-client'
import { getAllResults } from '@/sanity/lib/api'

export const metadata: Metadata = {
  title: "Case results - Oakwood Legal Group",
  description: "HISTORIC CASE RESULTS Our CASE RESULTS Speak for themselves Oakwood Legal Group transforms your experience from one of personal injury to personal attention. Call Our Team Today Learn More About…",
};

export default async function CaseResults() {
  const results = await getAllResults();

  return <CaseResultsClient results={results} />;
}