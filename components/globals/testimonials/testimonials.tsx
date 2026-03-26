"use client";

import React from 'react';
import TestimonialsCarousel from './testimonials-carousel/testimonials-carousel';
import TestimonialsAutoScroll from './testimonials-auto-scroll/testimonials-auto-scroll';
import BlurEffect from '@/components/globals/blur-effect/blur-effect';
import type { TestimonialProps } from '@/types/types';

// Extend TestimonialProps to include fields needed for carousel functionality
export interface TestimonialCard extends TestimonialProps {
  id: number;
  name: string; // Will use author from Sanity
  title: string; // Will be a default title
  content: string; // Will use testimony from Sanity
  profileImage: string; // Will be empty/fallback
}

interface TestimonialsProps {
  testimonials: TestimonialCard[];
  page?: string;
}

export default function Testimonials({ testimonials, page }: TestimonialsProps) {
  return (
    <section className="w-full pt-5 relative">
      {/* Blur Background */}
      {page === 'home' ? null : (
        <BlurEffect variant="testimonials" />
      )}
      
      <div className="w-full max-w-[1600px] mx-auto px-8 max-[500px]:px-4 relative z-10">
        
        {/* Header Section */}
        <header className="flex items-center gap-6 mb-16 max-[500px]:mb-6 max-[1160px]:flex-col max-[1160px]:items-start max-[1160px]:gap-4">
          <div className="flex justify-center items-center rounded-md px-[12px] py-[5px] bg-gradient-to-r from-[#C02B27] to-[#C02B27]">
            <span className="uppercase text-[16px] font-normal leading-none text-white font-helvetica">
              TESTIMONIALS
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-white text-[42px] max-[500px]:text-[31px] ml-2 max-[1160px]:ml-0 font-helvetica uppercase">
            WHAT OUR FORMER CLIENTS SAY
          </h2>
        </header>

        {/* Testimonials Content */}
        <main className="mb-20">
          <TestimonialsCarousel testimonials={testimonials} />
        </main>

        {/* Auto Scroll Section */}
        <aside data-carousel>
          <TestimonialsAutoScroll />
        </aside>

      </div>
    </section>
  );
}
