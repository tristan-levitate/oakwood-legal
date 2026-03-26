"use client";

import React from 'react';
import HeroButtons from '@/components/globals/hero-buttons/hero-buttons';
import HeroTitle from '@/components/globals/hero/hero-title';
import HeroMessage from '@/components/globals/hero/hero-message';
import HeroBackground from '@/components/globals/hero/hero-background';
import { 
  getHeroSectionClasses, 
  getHeroBackgroundStyle, 
  getHeroSectionTitle,
  getHeroButtonsClasses
} from './dual-hero-config';

interface DualHeroProps {
  titleWhite: string;
  titleRed?: string;
  titleWhite2?: string;
  message: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  page?: string;
}

export default function DualHero({
  titleWhite,
  titleRed,
  titleWhite2,
  message,
  backgroundImage,
  backgroundVideo,
  page
}: DualHeroProps) {
  // Special layout for squeeze-page: title and buttons in same container
  if (page === 'squeeze-page') {
    return (
      <section
        className={`${getHeroSectionClasses(page)} ${page === 'squeeze-page' ? 'max-[500px]:!h-[500px]' : ''}`}
        style={getHeroBackgroundStyle(page, backgroundImage)}
        aria-label={getHeroSectionTitle(page)}
      >
        {/* Background Elements */}
        <HeroBackground page={page} backgroundVideo={backgroundVideo} />

        <div className="w-full mx-auto px-8 max-[500px]:px-4 relative z-20">
          <div className="relative w-full h-full max-[1290px]:flex max-[1290px]:flex-col max-[1290px]:justify-between max-[1290px]:min-h-[400px]">
            {/* Message Section */}
            <HeroMessage 
              message={message}
              page={page}
              titleRed={titleRed}
            />
          </div>
        </div>

        {/* Container with Title and Buttons together for squeeze-page */}
        <div className="absolute left-0 z-40 ml-2 bottom-8 max-[768px]:bottom-8 max-[560px]:left-0 max-[560px]:ml-0 max-[500px]:bottom-4 max-[500px]:left-0 w-[1000px] max-[1500px]:w-[60%] max-[1155px]:w-[50%] max-[1080px]:w-[90%] max-[950px]:w-[100%] flex flex-col gap-[38px] pl-[38px] max-[660px]:pl-[28px] max-[620px]:pl-[15px] max-[605px]:pl-[0px] max-[560px]:pl-[10px] max-w-full overflow-hidden pr-2">
          {/* Main Title Section */}
          <HeroTitle 
            titleWhite={titleWhite}
            titleRed={titleRed}
            titleWhite2={titleWhite2}
            page={page}
          />

          {/* Call-to-Action Buttons */}
          <nav className="relative">
            <HeroButtons page={page} />
          </nav>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`${getHeroSectionClasses(page)} ${page === 'squeeze-page' ? 'max-[500px]:!h-[500px]' : ''}`}
      style={getHeroBackgroundStyle(page, backgroundImage)}
      aria-label={getHeroSectionTitle(page)}
    >
      {/* Background Elements */}
      <HeroBackground page={page} backgroundVideo={backgroundVideo} />

      <div className="w-full mx-auto px-8 max-[500px]:px-4 relative z-20">
        <div className="relative w-full h-full max-[1290px]:flex max-[1290px]:flex-col max-[1290px]:justify-between max-[1290px]:min-h-[400px]">
          {/* Main Title Section */}
          <HeroTitle 
            titleWhite={titleWhite}
            titleRed={titleRed}
            titleWhite2={titleWhite2}
            page={page}
          />

          {/* Message Section */}
          <HeroMessage 
            message={message}
            page={page}
            titleRed={titleRed}
          />
        </div>
      </div>

      {/* Call-to-Action Buttons - Positioned relative to section container */}
      <nav className={getHeroButtonsClasses(page)}>
        <HeroButtons page={page} />
      </nav>
    </section>
  );
}
