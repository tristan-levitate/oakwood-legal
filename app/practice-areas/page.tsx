import React from 'react'
import type { Metadata } from 'next';
import DualHero from '@/components/globals/dual-hero/dual-hero'
import BlurEffect from '@/components/globals/blur-effect/blur-effect'
import ContentCard from '@/components/globals/content-card/content-card'
import ContactUs from '@/components/globals/contact-us/contact-us'
import { getAllPracticeAreas } from '@/sanity/lib/api'

export const metadata: Metadata = {
  title: "Practice areas - Oakwood Legal Group",
  description: "AREAS OF PRACTICE Oakwood Legal Group transforms your experience from one of personal injury to personal attention. Call Our Team Today Our Case Results learn about about oakwood…",
};

export default async function PracticeAreas() {
  // Fetch practice areas from Sanity
  const practiceAreasData = await getAllPracticeAreas();

  // Fallback message if no practice areas are available
  if (!practiceAreasData || practiceAreasData.length === 0) {
    return (
      <main className="relative z-20">
        <DualHero
          titleWhite="OUR PRACTICE"
          titleRed="AREAS"
          message="At Oakwood Legal Group, we handle the toughest personal injury and employment cases with skill, compassion, and proven results; our Harvard-trained attorneys and record-setting litigators fight tirelessly for clients across California. Explore our practice areas to see how we can protect your rights, hold wrongdoers accountable, and secure the justice you deserve."
          backgroundImage="/images/bg-practice-areas.svg"
        />
        <BlurEffect variant="practice-areas" />
        <section className="mt-20 relative z-30 text-center" aria-labelledby="no-practice-areas">
          <h2 id="no-practice-areas" className="text-white text-2xl">No practice areas available at this time.</h2>
        </section>
        <ContactUs />
      </main>
    );
  }

  return (
    <main className="relative z-20">
      <DualHero
        titleWhite="OUR PRACTICE"
        titleRed="AREAS"
        message="At Oakwood Legal Group, we handle the toughest personal injury and employment cases with skill, compassion, and proven results; our Harvard-trained attorneys and record-setting litigators fight tirelessly for clients across California. Explore our practice areas to see how we can protect your rights, hold wrongdoers accountable, and secure the justice you deserve."
        backgroundImage="/images/bg-practice-areas.svg"
      />

      <BlurEffect variant="practice-areas" />

      <section className="mt-20 relative z-30" aria-labelledby="practice-areas-list">
        <h2 id="practice-areas-list" className="sr-only">Our Practice Areas</h2>
        <ContentCard items={practiceAreasData} page="practice-areas" />
      </section>

      <ContactUs />
    </main>
  )
}
