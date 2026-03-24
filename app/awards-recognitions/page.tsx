import React from 'react';
import type { Metadata } from 'next';
import DualTitle from '@/components/globals/dual-title/dual-title';
import LogosCarousel from '@/components/globals/carousel-slider/carousel-slider';
import AwardsCarousel from '@/components/screens/awards-recognitions/awards-carousel';
import Testimonials from '@/components/globals/testimonials/testimonials';
import ContactUs from '@/components/globals/contact-us/contact-us';
import { getAllAwards, getAllTestimonials } from '@/sanity/lib/api';
import type { AwardCard } from '@/components/globals/award-card/award-card';
import type { TestimonialCard } from '@/components/globals/testimonials/testimonials';

export const metadata: Metadata = {
    title: "Awards - Oakwood Legal Group",
    description: "NOTABLE AWARDS AWARDS & RECOGNITIONS Oakwood Legal Group transforms your experience from one of personal injury to personal attention. Call Our Team Today Our Case Results learn about oakwood legal…",
};

export default async function AwardsRecognitions() {
    // Fetch awards data from Sanity
    const awardsData = await getAllAwards();
    
    // Transform Sanity data to include numeric id for carousel functionality
    const awards: AwardCard[] = awardsData.map((award, index) => ({
        ...award,
        id: index + 1 // Use index-based id for carousel functionality
    }));

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


    return (
        <main className="relative z-20">
            <DualTitle
                titleWhite="OUR ATTORNEY'S"
                titleRed="AWARDS"
                message="Oakwood Legal Group transforms your experience from one of personal injury to personal attention."
                page="awards-recognitions"
            />

            <section className="w-full max-w-[1600px] mx-auto px-8 mt-12" aria-labelledby="awards-logos">
                <LogosCarousel variant="news" />
            </section>

            <section className="mt-20" aria-labelledby="client-testimonials">
                <h2 id="client-testimonials" className="sr-only">Client Testimonials</h2>
                {testimonials.length > 0 ? (
                    <Testimonials testimonials={testimonials} />
                ) : (
                    <div className="w-full max-w-[1600px] mx-auto px-8 py-16 text-center">
                        <p className="text-[#C7C7C7] text-lg font-neue-montreal">
                            No testimonials available at the moment.
                        </p>
                    </div>
                )}
            </section>

            <ContactUs />
        </main>
    );
}
