import React from 'react';
import Image from 'next/image';
import { 
  getDualTitleConfig, 
  getContainerClasses, 
  getSectionClasses, 
  getAsideClasses, 
  getAsideCaseResultsClasses, 
  getDivCaseResultsClasses,
  getTitleClasses,
  getTitleSpacerClasses,
  getTitleRedClasses,
  getTitleGridClasses,
  getTitleSpacerVisibility,
  getMessageClasses,
  getMessageCaseResultsClasses,
  getVerticalBorderClasses,
  getContainerHeightClasses
} from './dual-title-config';
import ResponsiveVerticalBorder from '@/components/globals/vertical-border/responsive-vertical-border';

interface DualTitleProps {
  titleWhite: string;
  titleRed: string;
  message: string;
  page?: string;
}

export default function DualTitle({ titleWhite, titleRed, message, page }: DualTitleProps) {
  const config = getDualTitleConfig(page);

  return (
    <section className={getSectionClasses(page)} aria-labelledby="page-title">
      {/* Background Image - Only for specific pages */}
      {config.showBackgroundImage && config.backgroundImagePath && (
        <div className={`absolute ${config.backgroundImagePosition} z-10`}>
          <Image
            src={config.backgroundImagePath}
            alt="Decorative background element"
            width={200}
            height={200}
            className={config.backgroundImageSize}
          />
        </div>
      )}

      <div className="w-full mx-auto px-8 relative z-20 mb-6 xl:mb-0">
        <div className={getContainerClasses(page)}>
          {/* Left Side - Titles */}
          <header className="flex flex-col justify-between min-h-[280px] max-[1300px]:min-h-[80px]">
            <hgroup>
              {/* Main Title - Combined white and red parts */}
              <h1 id="page-title" className={getTitleClasses(page)}>
                {titleWhite}
                <span className={getTitleGridClasses(page)}>
                  {/* Invisible spacer that matches white title width */}
                  <span className={`${getTitleSpacerClasses(page)} ${getTitleSpacerVisibility(page)}`}>
                    {titleWhite}
                  </span>
                  {/* Red Title - Starts a bit before where white title ends */}
                  <span className={getTitleRedClasses(page)}>
                    {titleRed}
                  </span>
                </span>
              </h1>
            </hgroup>
            <p className="text-[#C7C7C7] text-[18px] leading-[1.1] max-w-[322px] hidden xl:block">
              <span className="font-medium">Attorney advertisement:</span> Past results are not a guarantee of future outcomes.
            </p>
          </header>

          {/* Right Side - Message */}
          {page === "case-results" ? (
            <aside className={getAsideCaseResultsClasses(page)}>
              <div className={`${getDivCaseResultsClasses(page)} ${getContainerHeightClasses(page)}`}>
                <div className={`absolute left-[-15px] top-0 ${getVerticalBorderClasses(page)}`}>
                   <ResponsiveVerticalBorder
                     page={page}
                     height={200}
                     ariaLabel="Background border"
                   />
                </div>

                {/* Message Content - Positioned from center of SVG */}
                <div className="absolute inset-0 flex items-center justify-center p-4 max-[580px]:p-0">
                  <p className={getMessageCaseResultsClasses(page)}>
                    {message}
                  </p>
                </div>
              </div>

            </aside>
          ) : (
            <aside className={getAsideClasses(page)}>
              <div className={`relative w-[560px] max-[560px]:w-full max-[560px]:overflow-hidden ${getContainerHeightClasses(page)}`}>
                <div className={`absolute left-[-10px] top-0 ${getVerticalBorderClasses(page)}`}>
                   <ResponsiveVerticalBorder
                     page={page}
                     height={130}
                     ariaLabel="Background border"
                   />
                </div>
                {/* Message Content - Positioned from center of SVG */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className={getMessageClasses(page)}>
                    {message}
                  </p>
                </div>
              </div>
            </aside>
          )}
          <p className="font-neue-montreal text-[16px] leading-[1.1] text-[#C7C7C7] text-left max-w-[322px] block xl:hidden mb-4">
              <span className="font-medium">Attorney advertisement:</span> Past results are not a guarantee of future outcomes.
            </p>
        </div>
      </div>
    </section>
  );
}
