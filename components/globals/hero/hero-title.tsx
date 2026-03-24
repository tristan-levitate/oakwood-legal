import React from 'react';
import { 
  getHeroHeaderClasses, 
  getHeroTitleClasses, 
  getHeroTitleSpacerClasses, 
  getHeroTitleRedClasses,
  getHeroTitleGridClasses,
  getHeroTitleSpacerVisibility
} from '@/components/globals/dual-hero/dual-hero-config';

interface HeroTitleProps {
  titleWhite: string;
  titleRed?: string;
  titleWhite2?: string;
  page?: string;
}

export default function HeroTitle({ titleWhite, titleRed, titleWhite2, page }: HeroTitleProps) {
  const headerClasses = getHeroHeaderClasses(page, titleRed);
  const titleClasses = getHeroTitleClasses(page);
  const spacerClasses = getHeroTitleSpacerClasses(page);
  const redTitleClasses = getHeroTitleRedClasses(page);
  const gridClasses = getHeroTitleGridClasses(page);
  const spacerVisibility = getHeroTitleSpacerVisibility(page);

  if (page === 'squeeze-page') {
    return (
      <header className="relative w-full">
        <hgroup className="flex flex-col gap-2 w-full">
          <h1 className={`${titleClasses} font-helvetica break-words`}>
            {titleWhite}
            {titleRed && (
              <span className="flex justify-start">
                <span className={`${redTitleClasses} break-words`}>
                  {titleRed}
                </span>
              </span>
            )}
            {titleWhite2 && (
              <span className="flex justify-start">
                <span className="text-white leading-none max-[827px]:text-[43px] max-[580px]:text-[36px] uppercase whitespace-pre-line break-words">
                  {titleWhite2}
                </span>
              </span>
            )}
          </h1>
        </hgroup>
      </header>
    );
  }

  return (
    <header className={headerClasses}>
      <hgroup>
        <h1 className={titleClasses}>
          {titleWhite}
          {titleRed && (
            <span className={gridClasses}>
              {/* Invisible spacer that matches white title width */}
              <span className={`${spacerClasses} ${spacerVisibility}`}>
                {titleWhite}
              </span>
              {/* Red Title - Starts a bit before where white title ends */}
              <span className={redTitleClasses}>
                {titleRed}
              </span>
            </span>
          )}
        </h1>
      </hgroup>
    </header>
  );
}
