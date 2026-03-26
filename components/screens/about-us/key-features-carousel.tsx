"use client";

import React, { useMemo, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

// Key Features Carousel Component for screens < 640px
export default function KeyFeaturesCarousel() {
  // Create AutoScroll plugin
  const autoScrollPlugin = useMemo(() => {
    return AutoScroll({
      speed: 1.0,
      direction: "forward",
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      playOnInit: true,
    });
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: false,
      dragFree: true,
    },
    [autoScrollPlugin]
  );

  // Force reinitialize when component mounts
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  const keyFeaturesItems = [
    {
      text: "Harvard-Trained \nLeadership",
      imageSrc: "/images/border-component.png",
      alt: "Harvard-Trained Leadership feature background"
    },
    {
      text: "Award-Winning \nLaw Firm",
      imageSrc: "/images/border-component.png",
      alt: "Award-Winning Law Firm feature background"
    },
    {
      text: "40+ Years of \nCombined Experience",
      imageSrc: "/images/border-component-red.png", // Red background for middle item
      alt: "40+ Years of Combined Experience feature background"
    },
    {
      text: "No Fee Unless \nWe Win",
      imageSrc: "/images/border-component.png",
      alt: "No Fee Unless We Win feature background"
    },
    {
      text: "Free Consultations \n24/7",
      imageSrc: "/images/border-component.png",
      alt: "Free Consultations 24/7 feature background"
    },
    // Duplicate for continuous scroll
    {
      text: "Harvard-Trained \nLeadership",
      imageSrc: "/images/border-component.png",
      alt: "Harvard-Trained Leadership feature background"
    },
    {
      text: "Award-Winning \nLaw Firm",
      imageSrc: "/images/border-component.png",
      alt: "Award-Winning Law Firm feature background"
    },
    {
      text: "40+ Years of \nCombined Experience",
      imageSrc: "/images/border-component-red.png",
      alt: "40+ Years of Combined Experience feature background"
    },
    {
      text: "No Fee Unless \nWe Win",
      imageSrc: "/images/border-component.png",
      alt: "No Fee Unless We Win feature background"
    },
    {
      text: "Free Consultations \n24/7",
      imageSrc: "/images/border-component.png",
      alt: "Free Consultations 24/7 feature background"
    },
  ];

  return (
    <div className="hidden max-[640px]:block">
      <div 
        data-carousel="true" 
        className="w-full overflow-hidden relative max-[560px]:overflow-visible max-[560px]:w-full max-[560px]:ml-0 h-[200px] flex items-center"
      >
        {/* Left fade effect */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-[100px] lg:w-[200px] z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, var(--background), rgba(20, 12, 12, 0.8), transparent)'
          }}
        />
        
        {/* Right fade effect */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-[100px] lg:w-[200px] z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, var(--background), rgba(20, 12, 12, 0.8), transparent)'
          }}
        />
        
        <div 
          data-carousel="true" 
          className="overflow-hidden max-[560px]:overflow-visible h-full w-full" 
          ref={emblaRef}
        >
          <div data-carousel="true" className="flex items-center h-full">
            {keyFeaturesItems.map((item, index) => (
              <div
                key={index}
                data-carousel="true"
                className="flex-shrink-0 mx-0 flex flex-col items-center justify-center text-center h-[200px]"
              >
                <article className="flex flex-col items-center max-w-[280px]">
                  <figure className="relative">
                    <Image
                      src={item.imageSrc}
                      alt={item.alt}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[280px] h-auto mb-4"
                    />

                    <div className="absolute inset-0 flex items-center justify-center mt-10">
                      <Image
                        src="/images/logos/olg-bg-red.svg"
                        alt="Oakwood Legal Group logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto h-auto max-w-[60px] max-h-[60px]"
                      />
                    </div>
                  </figure>

                  <h3 className="mt-3 text-center text-white text-[16px] uppercase whitespace-pre-line font-helvetica font-light">
                    {item.text}
                  </h3>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
