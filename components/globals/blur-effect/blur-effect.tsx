import React from 'react';

interface BlurEffectProps {
  variant?: 'default' | 'card' | 'practice-areas' | 'testimonials' | 'historic-wins' | 'practice-areas-home' | 'home-hero' | 'home-hero-two' | 'home-hero-mobile' | 'our-team' | 'cases-involving';
}

export default function BlurEffect({ variant = 'default' }: BlurEffectProps) {
  const getPositionClasses = () => {
    switch (variant) {
      case 'card':
        return 'right-[-600px] top-[50px] transform -translate-y-1/2 rotate-180';
      case 'practice-areas':
        return 'left-[-500px] top-[130px]';
      case 'testimonials':
        return 'right-[-650px] top-[50%] transform -translate-y-1/2 rotate-150';
      case 'historic-wins':
        return 'left-[-670px] top-[55%] transform -translate-y-1/2 rotate-120';
      case 'practice-areas-home':
        return 'right-[-750px] top-[40%] transform -translate-y-1/2 rotate-150';
      case 'home-hero':
        return 'left-[-500px] top-[-400px] transform rotate-150';
      case 'home-hero-two':
        return 'right-[-500px] top-[13%] transform -translate-y-1/2 rotate-130';
      case 'cases-involving':
        return 'left-[-800px] top-[16%] transform -translate-y-1/2 rotate-150';
      case 'home-hero-mobile':
        return 'left-0 top-[10%] transform -translate-y-1/2 rotate-150';
      default:
        return 'left-[-450px] top-[110px]';
    }
  };

  return (
    <div className={`absolute ${getPositionClasses()} z-10 pointer-events-none`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="1408" 
        height="1251" 
        viewBox="0 0 1408 1251" 
        fill="none"
        className="w-auto h-auto"
      >
        <g filter="url(#filter0_f_10729_642)">
          <path 
            d="M273.919 417.284C250.019 458.968 394.551 586.735 596.74 702.661C798.928 818.586 982.208 878.772 1006.11 837.088C1030.01 795.405 627.212 640.595 425.024 524.67C222.835 408.744 297.818 375.601 273.919 417.284Z" 
            fill="#C02B27"
          />
        </g>
        <defs>
          <filter 
            id="filter0_f_10729_642" 
            x="-128.665" 
            y="0.0370483" 
            width="1535.79" 
            height="1250.27" 
            filterUnits="userSpaceOnUse" 
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_10729_642"/>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
