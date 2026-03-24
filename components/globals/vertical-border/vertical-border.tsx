"use client";

import React from 'react';

interface VerticalBorderProps {
  /**
   * Height of the vertical border in pixels or responsive config
   * @default 194
   */
  height?: number | { default: number; breakpoints?: { [key: string]: number } };
  /**
   * Whether to rotate the entire component 180 degrees
   * @default false
   */
  isRotated?: boolean;
  /**
   * Additional CSS classes for styling
   */
  className?: string;
  /**
   * CSS classes for responsive height using CSS custom properties
   */
  heightClasses?: string;
  /**
   * Accessible description for screen readers
   * @default "Vertical border decoration"
   */
  ariaLabel?: string;
}

export default function VerticalBorder({
  height = 194,
  isRotated = false,
  className = '',
  heightClasses = '',
  ariaLabel = 'Vertical border decoration'
}: VerticalBorderProps) {
  // Generate deterministic ID based on component props to avoid hydration mismatch
  const uniqueId = React.useMemo(() => {
    const baseString = `${height}-${isRotated}-${ariaLabel}`;
    let hash = 0;
    for (let i = 0; i < baseString.length; i++) {
      const char = baseString.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(36);
  }, [height, isRotated, ariaLabel]);
  
  // Calculate responsive height using JavaScript
  const getResponsiveHeight = React.useCallback(() => {
    // Always return the height value directly - let parent component handle responsiveness
    return typeof height === 'number' ? height : (typeof height === 'object' ? height.default : 194);
  }, [height]);

  const [currentHeight, setCurrentHeight] = React.useState(() => getResponsiveHeight());

  React.useEffect(() => {
    setCurrentHeight(getResponsiveHeight());
  }, [getResponsiveHeight]);

  // Fixed width and padding
  const borderWidth = 58; // 78 - 20 = 58px width
  const padding = 20;
  const totalWidth = borderWidth + (padding * 2); // 98px total
  const totalHeight = currentHeight + (padding * 2);
  
  // Border positions
  const borderLeft = padding;
  const borderRight = borderLeft + borderWidth;
  const borderTop = padding;
  const borderBottom = borderTop + currentHeight;

  return (
    <div 
      className={`flex-shrink-0 ${className}`}
      style={{ 
        transform: isRotated ? 'rotate(180deg)' : 'none',
        display: 'inline-block'
      }}
      role="img"
      aria-label={ariaLabel}
    >
      <svg 
        width={totalWidth} 
        height={totalHeight} 
        viewBox={`0 0 ${totalWidth} ${totalHeight}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          width: `${totalWidth}px`, 
          height: `${totalHeight}px` 
        }}
      >
        {/* Vertical border with blur effect */}
        <g filter={`url(#filter0_border_${uniqueId})`}>
          <mask id={`path-1-inside-1_${uniqueId}`} fill="white">
            <path d={`M${borderLeft} ${borderTop}H${borderRight}V${borderBottom}H${borderLeft}V${borderTop}Z`}/>
          </mask>
          <path 
            d={`M${borderLeft} ${borderTop}V${borderTop - 1}H${borderLeft - 1}V${borderTop}H${borderLeft}ZM${borderLeft} ${borderBottom}H${borderLeft - 1}V${borderBottom + 1}H${borderLeft}V${borderBottom}ZM${borderLeft} ${borderTop}V${borderTop + 1}H${borderRight}V${borderTop}V${borderTop - 1}H${borderLeft}V${borderTop}ZM${borderRight} ${borderBottom}V${borderBottom - 1}H${borderLeft}V${borderBottom}V${borderBottom + 1}H${borderRight}V${borderBottom}ZM${borderLeft} ${borderBottom}H${borderLeft + 1}V${borderTop}H${borderLeft}H${borderLeft - 1}V${borderBottom}H${borderLeft}Z`}
            fill="#C02B27" 
            mask={`url(#path-1-inside-1_${uniqueId})`}
          />
        </g>
        
        <defs>
          {/* Border filter with subtle blur */}
          <filter 
            id={`filter0_border_${uniqueId}`}
            x="0" 
            y="0" 
            width={totalWidth} 
            height={totalHeight} 
            filterUnits="userSpaceOnUse" 
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="3"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.8 0 0 0 0 0.15 0 0 0 0 0.12 0 0 0 0.2 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result={`effect1_dropShadow_border_${uniqueId}`}/>
            <feBlend mode="normal" in="SourceGraphic" in2={`effect1_dropShadow_border_${uniqueId}`} result="shape"/>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
