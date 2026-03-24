import React from 'react';
import type { Metadata } from 'next';
import HomeHero from '@/components/screens/home/home-hero';
import Testimonials from '@/components/globals/testimonials/testimonials';
import HistoricWins from '@/components/screens/home/historic-wins';
import PracticeAreasHome from '@/components/screens/home/practice-areas-home';
import ContactUs from '@/components/globals/contact-us/contact-us';
import { getAllTestimonials, getAllResults, getAllPracticeAreas } from '@/sanity/lib/api';
import type { TestimonialCard } from '@/components/globals/testimonials/testimonials';
import type { ResultProps } from '@/types/types';

export const metadata: Metadata = {
  title: "Home - Oakwood Legal Group",
  description: "PERSONAL INJURY LAWYERS CA oakwood legal group Oakwood Legal Group, is California's premier personal injury law firm. Our lawyers are armed with sophisticated legal training from some of the nation's…",
};

export default async function Home() {
  // Fetch testimonials data from Sanity
  const testimonialsData = await getAllTestimonials();
  
  // Transform Sanity data to include fields needed for carousel functionality
  const testimonials: TestimonialCard[] = testimonialsData.map((testimonial, index) => ({
    ...testimonial,
    id: index + 1,
    name: testimonial.author, // Use author as name
    title: "Client", // Default title for all testimonials
    content: testimonial.testimony, // Use testimony as content
    profileImage: "" // Empty string for fallback to black circle
  }));

  // Fetch case results from Sanity
  const allResults = await getAllResults();
  
  // Filter out the $852,000,000 case since it's already shown as featured
  const filteredResults: ResultProps[] = allResults.filter(result => 
    !result.verdict.includes('852,000,000') && 
    !result.verdict.includes('852000000') &&
    !result.verdict.includes('$852')
  );

  // Fetch practice areas from Sanity
  const practiceAreas = await getAllPracticeAreas();

  return (
    <main id="main-content" role="main" className="relative z-20">
      <HomeHero />
      <Testimonials testimonials={testimonials} page="home" />
      <HistoricWins results={filteredResults} />
      <PracticeAreasHome practiceAreas={practiceAreas} />
      <ContactUs />
    </main>
  );
}
