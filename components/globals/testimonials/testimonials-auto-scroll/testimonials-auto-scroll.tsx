"use client";

import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export default function TestimonialsAutoScroll() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: false,
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 0.8,
        direction: "forward",
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        playOnInit: true,
      }),
    ]
  );

  // Repeat the text multiple times for continuous scroll
  const repeatedText = Array(10).fill("OAKWOOD LEGAL GROUP");

  return (
    <div className="w-full overflow-hidden" data-carousel>
      <div className="overflow-hidden" ref={emblaRef} data-carousel>
        <div className="flex" data-carousel>
          {repeatedText.map((text, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-5 flex items-center justify-center gap-10"
              data-carousel
            >
              {/* OLG Mini Logo */}
              <Image
                src="/images/logos/olg-mini-awards.svg"
                alt="OLG Mini Logo"
                width={62}
                height={62}
                className="w-auto h-auto"
              />
              
              {/* Oakwood Legal Group Logo */}
              <Image
                src="/images/logos/oakwood-legal-group.svg"
                alt="Oakwood Legal Group"
                width={400}
                height={62}
                className="w-auto h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
