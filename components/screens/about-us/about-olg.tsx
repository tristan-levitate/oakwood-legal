"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DecorativeLine from '@/components/globals/decorative-line/decorative-line';
import KeyFeaturesCarousel from './key-features-carousel';

export default function AboutOlg() {
  const [lineWidth, setLineWidth] = useState(561);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 486) {
        setLineWidth(168); // 30% of 561 = 168
      } else if (width < 700) {
        setLineWidth(236); // 42% of 561 = 236
      } else if (width < 915) {
        setLineWidth(393); // 70% of 561 = 393
      } else if (width < 1015) {
        setLineWidth(477); // 85% of 561 = 477
      } else {
        setLineWidth(561); // Original size
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Decorative Line - Top Right (Edge of screen) */}
      <div className="w-full flex justify-end mb-6 max-[1450px]:mb-4 mt-24">
        <DecorativeLine
          mainLineWidth={lineWidth}
          isRotated={true}
          ariaLabel="About us line decoration"
        />
      </div>

      <section className="w-full max-w-[1600px] mx-auto px-8">
        

        {/* Key Features Section */}
        <section className="mt-8">
          {/* Desktop Layout (≥1570px) - Single Row */}
          <ul className="flex justify-center max-[1570px]:hidden">
            {Array.from({ length: 5 }).map((_, index) => {
              const isMiddle = index === 2;
              const imageSrc = isMiddle ? "/images/border-component-red.png" : "/images/border-component.png";

              const texts = [
                "Harvard-Trained \nLeadership",
                "Award-Winning \nLaw Firm",
                "40+ Years of \nCombined \nExperience",
                "No Fee Unless \nWe Win",
                "Free Consultations \n24/7"
              ];

              const featureLabels = [
                "Harvard-Trained Leadership",
                "Award-Winning Law Firm",
                "40+ Years of Combined Experience",
                "No Fee Unless We Win",
                "Free Consultations 24/7"
              ];

              return (
                <li key={index} className={`flex-shrink-0 max-w-[350px] flex flex-col items-center ${index > 0 ? 'ml-[-19px]' : ''}`}>
                  <article className="flex flex-col items-center">
                    <figure className="relative">
                      <Image
                        src={imageSrc}
                        alt={`${featureLabels[index]} feature background`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[330px] h-auto"
                      />

                      <div className="absolute inset-0 flex items-center justify-center mt-12">
                        <Image
                          src="/images/logos/olg-bg-red.svg"
                          alt="Oakwood Legal Group logo"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-auto h-auto max-w-[80px] max-h-[80px]"
                        />
                      </div>
                    </figure>

                    <h3 className="mt-4 text-center text-white text-[22px] uppercase whitespace-pre-line font-helvetica font-light">
                      {texts[index]}
                    </h3>
                  </article>
                </li>
              );
            })}
          </ul>

          {/* Tablet Layout (945px-1569px) - Two Rows: 3+2 */}
          <div className="hidden max-[1570px]:block max-[945px]:hidden">
            {/* First Row - 3 items */}
            <ul className="flex justify-center mb-8">
              {Array.from({ length: 3 }).map((_, index) => {
                const isMiddle = index === 1; // Middle of first 3
                const imageSrc = isMiddle ? "/images/border-component-red.png" : "/images/border-component.png";

                const texts = [
                  "Harvard-Trained \nLeadership",
                  "Award-Winning \nLaw Firm",
                  "40+ Years of \nCombined \nExperience"
                ];

                const featureLabels = [
                  "Harvard-Trained Leadership",
                  "Award-Winning Law Firm",
                  "40+ Years of Combined Experience"
                ];

                return (
                  <li key={index} className={`flex-shrink-0 max-w-[350px] flex flex-col items-center ${index > 0 ? 'ml-[-19px]' : ''}`}>
                    <article className="flex flex-col items-center">
                      <figure className="relative">
                        <Image
                          src={imageSrc}
                          alt={`${featureLabels[index]} feature background`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-[330px] h-auto"
                        />

                        <div className="absolute inset-0 flex items-center justify-center mt-12">
                          <Image
                            src="/images/logos/olg-bg-red.svg"
                            alt="Oakwood Legal Group logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-auto h-auto max-w-[80px] max-h-[80px]"
                          />
                        </div>
                      </figure>

                      <h3 className="mt-4 text-center text-white text-[22px] uppercase whitespace-pre-line font-helvetica font-light">
                        {texts[index]}
                      </h3>
                    </article>
                  </li>
                );
              })}
            </ul>

            {/* Second Row - 2 items */}
            <ul className="flex justify-center">
              {Array.from({ length: 2 }).map((_, index) => {
                const actualIndex = index + 3; // Items 4 and 5
                const imageSrc = "/images/border-component.png"; // Neither is middle

                const texts = [
                  "No Fee Unless \nWe Win",
                  "Free Consultations \n24/7"
                ];

                const featureLabels = [
                  "No Fee Unless We Win",
                  "Free Consultations 24/7"
                ];

                return (
                  <li key={actualIndex} className={`flex-shrink-0 max-w-[350px] flex flex-col items-center ${index > 0 ? 'ml-[-19px]' : ''}`}>
                    <article className="flex flex-col items-center">
                      <figure className="relative">
                        <Image
                          src={imageSrc}
                          alt={`${featureLabels[index]} feature background`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-[330px] h-auto"
                        />

                        <div className="absolute inset-0 flex items-center justify-center mt-12">
                          <Image
                            src="/images/logos/olg-bg-red.svg"
                            alt="Oakwood Legal Group logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-auto h-auto max-w-[80px] max-h-[80px]"
                          />
                        </div>
                      </figure>

                      <h3 className="mt-4 text-center text-white text-[22px] uppercase whitespace-pre-line font-helvetica" style={{ fontWeight: 200 }}>
                        {texts[index]}
                      </h3>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile Layout (640px-944px) - 2 per row */}
          <div className="hidden max-[945px]:block max-[640px]:hidden">
            {/* First Row - Items 1 and 2 */}
            <ul className="flex justify-center mb-8">
              {Array.from({ length: 2 }).map((_, index) => {
                const imageSrc = "/images/border-component.png";

                const texts = [
                  "Harvard-Trained \nLeadership",
                  "Award-Winning \nLaw Firm"
                ];

                const featureLabels = [
                  "Harvard-Trained Leadership",
                  "Award-Winning Law Firm"
                ];

                return (
                  <li key={index} className={`flex-shrink-0 max-w-[350px] flex flex-col items-center ${index > 0 ? 'ml-[-19px]' : ''}`}>
                    <article className="flex flex-col items-center">
                      <figure className="relative">
                        <Image
                          src={imageSrc}
                          alt={`${featureLabels[index]} feature background`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-[330px] h-auto"
                        />

                        <div className="absolute inset-0 flex items-center justify-center mt-12">
                          <Image
                            src="/images/logos/olg-bg-red.svg"
                            alt="Oakwood Legal Group logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-auto h-auto max-w-[80px] max-h-[80px]"
                          />
                        </div>
                      </figure>

                      <h3 className="mt-4 text-center text-white text-[22px] uppercase whitespace-pre-line font-helvetica" style={{ fontWeight: 200 }}>
                        {texts[index]}
                      </h3>
                    </article>
                  </li>
                );
              })}
            </ul>

            {/* Second Row - Items 3 and 4 */}
            <ul className="flex justify-center mb-8">
              {Array.from({ length: 2 }).map((_, index) => {
                const actualIndex = index + 2;
                const isMiddle = actualIndex === 2; // Item 3 is the middle (red)
                const imageSrc = isMiddle ? "/images/border-component-red.png" : "/images/border-component.png";

                const texts = [
                  "40+ Years of \nCombined \nExperience",
                  "No Fee Unless \nWe Win"
                ];

                const featureLabels = [
                  "40+ Years of Combined Experience",
                  "No Fee Unless We Win"
                ];

                return (
                  <li key={actualIndex} className={`flex-shrink-0 max-w-[350px] flex flex-col items-center ${index > 0 ? 'ml-[-19px]' : ''}`}>
                    <article className="flex flex-col items-center">
                      <figure className="relative">
                        <Image
                          src={imageSrc}
                          alt={`${featureLabels[index]} feature background`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-[330px] h-auto"
                        />

                        <div className="absolute inset-0 flex items-center justify-center mt-12">
                          <Image
                            src="/images/logos/olg-bg-red.svg"
                            alt="Oakwood Legal Group logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-auto h-auto max-w-[80px] max-h-[80px]"
                          />
                        </div>
                      </figure>

                      <h3 className="mt-4 text-center text-white text-[22px] uppercase whitespace-pre-line font-helvetica font-light">
                        {texts[index]}
                      </h3>
                    </article>
                  </li>
                );
              })}
            </ul>

            {/* Third Row - Item 5 (centered) */}
            <ul className="flex justify-center">
              <li className="flex-shrink-0 max-w-[350px] flex flex-col items-center">
                <article className="flex flex-col items-center">
                  <figure className="relative">
                    <Image
                      src="/images/border-component.png"
                      alt="Free Consultations 24/7 feature background"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[330px] h-auto"
                    />

                    <div className="absolute inset-0 flex items-center justify-center mt-12">
                      <Image
                        src="/images/logos/olg-bg-red.svg"
                        alt="Oakwood Legal Group logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto h-auto max-w-[80px] max-h-[80px]"
                      />
                    </div>
                  </figure>

                  <h3 className="mt-4 text-center text-white text-[22px] uppercase whitespace-pre-line font-helvetica" style={{ fontWeight: 200 }}>
                    Free Consultations {'\n'}24/7
                  </h3>
                </article>
              </li>
            </ul>
          </div>

          {/* Small Mobile Layout (<640px) - Auto Scroll Carousel */}
          <KeyFeaturesCarousel />
        </section>

      </section>

      {/* Bottom Decorative Line (Edge of screen) */}
      <div className="w-full flex justify-start mt-13">
        <DecorativeLine
          mainLineWidth={lineWidth}
          isRotated={false}
          ariaLabel="About us line decoration"
        />
      </div>
    </>
  );
}
