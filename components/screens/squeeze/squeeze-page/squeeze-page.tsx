import React from 'react';
import DualHero from '@/components/globals/dual-hero/dual-hero';
import LogosCarousel from '@/components/globals/carousel-slider/carousel-slider';
import { ASSETS } from '@/utils/assets';

interface SqueezePageProps {
  titleWhite?: string;
  titleRed?: string;
  titleWhite2?: string;
  message?: string;
  backgroundVideo?: string;
}

export default function SqueezePage({
  titleWhite = "California's",
  titleRed = "Record-Breaking",
  titleWhite2 = "Injury Law Firm",
  message = "We fight for people whose lives have been turned upside down, protecting families, restoring dignity, and demanding justice.",
  backgroundVideo = ASSETS.HERO_VIDEO
}: SqueezePageProps) {
  return (
    <main className="relative z-20">
      <DualHero
        titleWhite={titleWhite}
        titleRed={titleRed}
        titleWhite2={titleWhite2}
        message={message}
        backgroundVideo={backgroundVideo}
        page="squeeze-page"
      />
      
      {/* News Carousel - Moving Right (Forward) */}
      <div className="w-full max-w-[1600px] mx-auto px-8 pt-2 mb-[-10px]">
        <LogosCarousel key="news-forward" variant="news" direction="forward" />
      </div>
      
      {/* Awards Carousel - Moving Left (Backward) */}
      <div className="w-full max-w-[1600px] mx-auto px-8 pb-6">
        <div style={{ transform: 'scaleX(-1)' }}>
          <LogosCarousel key="awards-reversed" variant="awards" direction="forward" />
        </div>
      </div>
    </main>
  );
}
