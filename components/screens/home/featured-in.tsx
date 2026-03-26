"use client";

import React, { useState, useEffect } from 'react';
import LogosCarousel from '@/components/globals/carousel-slider/carousel-slider';
import DecorativeLine from '@/components/globals/decorative-line/decorative-line';

export default function FeaturedIn() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    // Check on mount
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section className="w-full mx-auto px-0 mb-8 max-[500px]:mt-12">
      <div className="flex flex-col">
        {/* First Line - Normal with text */}
        <div className="flex items-center">
          <h2 className="text-[#D9D9D9] text-[16px] font-normal font-helvetica mr-6">OUR CASES HAVE BEEN FEATURED IN</h2>
          <DecorativeLine 
            mainLineWidth={isDesktop ? 260 : 69} // Desktop: 260px, Mobile: 69px
            isRotated={false}
            ariaLabel="Featured in decorative line"
          />
        </div>

        {/* Carousel - News */}
        <div>
          <LogosCarousel variant="news" />
        </div>
      </div>
    </section>
  );
}
