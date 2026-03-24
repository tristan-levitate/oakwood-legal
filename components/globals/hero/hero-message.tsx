import React from 'react';
import VerticalBorder from '@/components/globals/vertical-border/vertical-border';
import { 
  getHeroMessageAsideClasses,
  getHeroMessageClasses, 
  getHeroVerticalBorderClasses,
  getHeroVerticalBorderPosition,
  getHeroMessageTextClasses,
  getHeroMessageContentClasses,
  getHeroPageConfig
} from '@/components/globals/dual-hero/dual-hero-config';

interface HeroMessageProps {
  message: string;
  page?: string;
  titleRed?: string;
}

export default function HeroMessage({ message, page, titleRed }: HeroMessageProps) {
  // Don't render for squeeze-page
  if (page === 'squeeze-page') {
    return null;
  }

  const config = getHeroPageConfig(page);
  const asideClasses = getHeroMessageAsideClasses(page);
  const messageClasses = getHeroMessageClasses(page, titleRed);
  const borderClasses = getHeroVerticalBorderClasses(page);
  const borderPosition = getHeroVerticalBorderPosition(page);
  const textClasses = getHeroMessageTextClasses(page);
  const contentClasses = getHeroMessageContentClasses(page);

  return (
    <aside className={asideClasses}>
      <div className={`${messageClasses}`}>
        {/* Vertical Border Background */}
        <div className={`${borderPosition} ${borderClasses}`}>
          <VerticalBorder 
            height={config.verticalBorderHeight}
            heightClasses={config.verticalBorderHeightClasses}
            isRotated={false}
            ariaLabel={config.verticalBorderAriaLabel}
          />
        </div>

        {/* Message Content */}
        <div className={contentClasses}>
          <p className={textClasses}>
            {message}
          </p>
        </div>
      </div>
    </aside>
  );
}
