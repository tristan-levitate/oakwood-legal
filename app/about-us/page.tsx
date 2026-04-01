import React from 'react'
import type { Metadata } from 'next';
import DualHero from '@/components/globals/dual-hero/dual-hero'
import ContactUs from '@/components/globals/contact-us/contact-us'
import CasesInvolving from '@/components/screens/about-us/cases-involving'
import AboutOlg from '@/components/screens/about-us/about-olg'
import OurTeam from '@/components/screens/about-us/our-team'
import { getAllMembers } from '@/sanity/lib/api';
import type { TeamMember } from '@/components/screens/about-us/about-us-card';

export const metadata: Metadata = {
  title: "About us - Oakwood Legal Group",
  description: "ABOUT OAKWOOD LEGAL ABOUT US Oakwood Legal Group transforms your experience from one of personal injury to personal attention. learn oakwood legal group california’s premier personal injury firm We’ve…",
};

export default async function AboutUsPage() {
  // Fetch members data from Sanity
  const membersData = await getAllMembers();
  
  // Transform Sanity data to include fields needed for component functionality
  const members: TeamMember[] = membersData.map((member, index) => ({
    ...member,
    id: index + 1,
    position: member.role, // Use role as position
    description: member.content ? JSON.stringify(member.content) : undefined // Convert content to string for now
  }));
  return (
    <main className="relative z-20">
      <DualHero
        titleWhite="ABOUT"
        titleRed="OAKWOOD LEGAL GROUP"
        message="At Oakwood Legal Group, our mission is simple: fight relentlessly for our clients, deliver record-setting results, and treat every client with the dignity and care they deserve."
        backgroundImage="/images/bg-practice-areas.svg"
        page="about-us"
      />

      <CasesInvolving />

      <AboutOlg />

      <OurTeam 
        titleWhite="MEET"
        titleRed="OUR TEAM"
        members={members}
      />

      <ContactUs />
    </main>
  )
}
