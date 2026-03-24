import React from 'react';
import LogosCarousel from '@/components/globals/carousel-slider/carousel-slider';

export default function CaseResultsAwards() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-8 mt-[-40px] mb-[-45px]">
      <div role="region" aria-label="News carousel">
        <LogosCarousel variant="news" />
      </div>
    </section>
  );
}
