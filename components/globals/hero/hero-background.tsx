import React from 'react';
import Image from 'next/image';
import { ASSETS } from '@/utils/assets';

interface HeroBackgroundProps {
  page?: string;
  backgroundVideo?: string;
}

export default function HeroBackground({ page, backgroundVideo }: HeroBackgroundProps) {
  if (page === 'squeeze-page') {
    return (
      <>
        {/* Video Background */}
        <figure className="absolute inset-0 w-full h-full rounded-[20px] z-10 max-[1219px]:flex max-[1219px]:items-center max-[1219px]:justify-center max-[1219px]:overflow-hidden max-[500px]:top-0">
          <video
            src={backgroundVideo || ASSETS.HERO_VIDEO}
            autoPlay
            muted
            playsInline
            loop
            poster={ASSETS.VIDEO_POSTER}
            width={1200}
            height={450}
            className="rounded-[20px] object-cover min-[1220px]:w-full min-[1220px]:h-full max-[1219px]:min-w-[1200px] max-[1219px]:h-[450px] bg-gray-900"
            style={{ backgroundColor: '#1a1a1a' }}
            aria-label="Oakwood Legal Group promotional video"
          />
        </figure>
        
        {/* Dark overlay with gradient */}
        <div 
          className="absolute inset-0 rounded-[20px] z-20" 
          style={{
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%)'
          }}
          aria-hidden="true"
        />
        
        {/* Harvard Logo - Top Right Corner */}
        <figure className="absolute top-4 right-4 z-40 max-[500px]:top-2 max-[500px]:right-2">
          <Image
            src="/images/harvard-logo.svg"
            alt="Harvard Law School Logo"
            width={150}
            height={150}
            className="w-[150px] h-[150px] max-[500px]:w-[80px] max-[500px]:h-[80px]"
          />
        </figure>
      </>
    );
  }

  // Default background for other pages
  const hideClass = page === 'article-slug' ? 'max-[580px]:hidden' : 'max-[480px]:hidden';
  
  return (
    <figure className={`absolute top-8 right-8 z-10 ${hideClass}`}>
      <Image
        src="/images/logos/olg-bg-red.svg"
        alt="Oakwood Legal Group background decoration"
        width={200}
        height={200}
        className="w-auto h-auto"
      />
    </figure>
  );
}
