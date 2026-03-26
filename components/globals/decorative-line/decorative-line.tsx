import React, { useState, useEffect } from 'react';

interface DecorativeLineProps {
  /**
   * Width of the main (longest) line in pixels
   * @default 260
   */
  mainLineWidth?: number;
  /**
   * Whether to rotate the entire component 180 degrees
   * @default false
   */
  isRotated?: boolean;
  /**
   * Whether to show only the main line (no medium and small lines)
   * @default false
   */
  oneLine?: boolean;
  /**
   * Additional CSS classes for styling
   */
  className?: string;
  /**
   * Accessible description for screen readers
   * @default "Decorative line element"
   */
  ariaLabel?: string;
}

export default function DecorativeLine({
  mainLineWidth = 260,
  isRotated = false,
  oneLine = false,
  className = '',
  ariaLabel = 'Decorative line element'
}: DecorativeLineProps) {
  // State for responsive line sizes
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    // Check on mount
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Generate deterministic ID based on component props to avoid hydration mismatch
  const uniqueId = React.useMemo(() => {
    const baseString = `${mainLineWidth}-${isRotated}-${oneLine}-${ariaLabel}`;
    let hash = 0;
    for (let i = 0; i < baseString.length; i++) {
      const char = baseString.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(36);
  }, [mainLineWidth, isRotated, oneLine, ariaLabel]);
  
  // Remove negative margins when oneLine is true
  const cleanedClassName = oneLine 
    ? className.replace(/ml-\[-?\d+px\]/g, '').trim()
    : className;
  
  // Responsive sizes for medium and small lines
  const mediumLineWidth = isSmallScreen ? 31 : 74;
  const smallLineWidth = isSmallScreen ? 14 : 27;
  
  const gap = 16;
  const totalWidth = oneLine 
    ? mainLineWidth + 20 // Only main line + padding when oneLine is true
    : mainLineWidth + gap + mediumLineWidth + gap + smallLineWidth + 20; // Full width when oneLine is false
  
  // Line positions
  const mainLineStart = 0;
  const mainLineEnd = mainLineStart + mainLineWidth;
  
  const mediumLineStart = mainLineEnd + gap;
  const mediumLineEnd = mediumLineStart + mediumLineWidth;
  
  const smallLineStart = mediumLineEnd + gap;
  const smallLineEnd = smallLineStart + smallLineWidth;

  return (
    <div 
      className={`flex-shrink-0 ${cleanedClassName}`}
      style={{ 
        transform: isRotated ? 'rotate(180deg)' : 'none',
        display: 'inline-block'
      }}
      role="img"
      aria-label={ariaLabel}
    >
      <svg 
        width={totalWidth} 
        height="42" 
        viewBox={`0 0 ${totalWidth} 42`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-auto"
      >
        {/* Main line with blur effect */}
        <g filter={`url(#filter0_main_${uniqueId})`}>
          <line 
            x1={mainLineStart} 
            y1="21" 
            x2={mainLineEnd} 
            y2="21" 
            stroke="#C02B27"
            strokeWidth="1"
          />
        </g>
        
        {/* Medium and Small lines - only show when oneLine is false */}
        {!oneLine && (
          <>
            {/* Medium line with blur effect */}
            <g filter={`url(#filter1_medium_${uniqueId})`}>
              <line 
                x1={mediumLineStart} 
                y1="21" 
                x2={mediumLineEnd} 
                y2="21" 
                stroke="#C02B27"
                strokeWidth="1"
              />
            </g>
            
            {/* Small line with blur effect */}
            <g filter={`url(#filter2_small_${uniqueId})`}>
              <line 
                x1={smallLineStart} 
                y1="21" 
                x2={smallLineEnd} 
                y2="21" 
                stroke="#C02B27"
                strokeWidth="1"
              />
            </g>
          </>
        )}
        
        <defs>
          {/* Main line filter */}
          <filter 
            id={`filter0_main_${uniqueId}`}
            x={mainLineStart - 20} 
            y="0.5" 
            width={mainLineWidth + 40} 
            height="41" 
            filterUnits="userSpaceOnUse" 
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="10"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.8 0 0 0 0 0.15 0 0 0 0 0.12 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result={`effect1_dropShadow_main_${uniqueId}`}/>
            <feBlend mode="normal" in="SourceGraphic" in2={`effect1_dropShadow_main_${uniqueId}`} result="shape"/>
          </filter>
          
          {/* Medium and Small line filters - only when oneLine is false */}
          {!oneLine && (
            <>
              {/* Medium line filter */}
              <filter 
                id={`filter1_medium_${uniqueId}`}
                x={mediumLineStart - 10} 
                y="0.5" 
                width={mediumLineWidth + 40} 
                height="41" 
                filterUnits="userSpaceOnUse" 
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.8 0 0 0 0 0.15 0 0 0 0 0.12 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result={`effect1_dropShadow_medium_${uniqueId}`}/>
                <feBlend mode="normal" in="SourceGraphic" in2={`effect1_dropShadow_medium_${uniqueId}`} result="shape"/>
              </filter>
              
              {/* Small line filter */}
              <filter 
                id={`filter2_small_${uniqueId}`}
                x={smallLineStart - 10} 
                y="0.5" 
                width={smallLineWidth + 40} 
                height="41" 
                filterUnits="userSpaceOnUse" 
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.8 0 0 0 0 0.15 0 0 0 0 0.12 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result={`effect1_dropShadow_small_${uniqueId}`}/>
                <feBlend mode="normal" in="SourceGraphic" in2={`effect1_dropShadow_small_${uniqueId}`} result="shape"/>
              </filter>
            </>
          )}
        </defs>
      </svg>
    </div>
  );
}
