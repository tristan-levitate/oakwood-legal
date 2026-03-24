"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { ArticleProps } from '@/types/types';
import { getAriaLabel, getCtaText, getHrefForPage, getSectionTitle } from './content-card-utils';
import { useLoading } from '@/components/globals/loading-context/loading-context';

// Type for content card items - only the properties actually used
type ContentCardItemType = Pick<ArticleProps, 'slug' | 'imageUrl' | 'title' | 'description'>;

interface ContentCardItemProps {
  item: ContentCardItemType;
  index: number;
  page?: string;
  config: {
    cardWidth: string;
    cardHeight: string;
    imageHeight: string;
  };
  isLastRow?: boolean;
}

const handleNavigation = (href: string, router: any, setCardDisabledWithTimeout: (cardId: string, timeout?: number) => void, cardId: string, isAnyCardDisabled: boolean) => {
  // Prevent navigation if any card is already disabled
  if (isAnyCardDisabled) return;
  
  // Set disabled with automatic timeout
  setCardDisabledWithTimeout(cardId, 1000);
  
  // Navigate to the page
  router.push(href);
};

export default function ContentCardItem({ 
  item, 
  index, 
  page, 
  config, 
  isLastRow = false
}: ContentCardItemProps) {
  const router = useRouter();
  const { isAnyCardDisabled, disabledCardId, setCardDisabledWithTimeout } = useLoading();
  
  // Create unique card ID
  const cardId = `${page}-${item.slug}-${index}`;
  const isThisCardDisabled = disabledCardId === cardId;
  
  return (
    <li
      key={`${item.slug}-${index}`}
      className=""
    >
      <article>
        <button
          onClick={() => handleNavigation(getHrefForPage(page, item.slug), router, setCardDisabledWithTimeout, cardId, isAnyCardDisabled)}
          className={`${config.cardWidth} ${config.cardHeight} px-4 pt-4 pb-6 max-[530px]:px-3 max-[530px]:pt-3 max-[530px]:pb-4 bg-transparent border-b border-[#4E4E4E] transition-all duration-300 block w-full text-left relative ${
            isAnyCardDisabled 
              ? 'pointer-events-none opacity-50 cursor-not-allowed' 
              : 'cursor-pointer hover:bg-[rgba(255,255,255,0.05)] hover:border-b-[#FF6460]'
          }`}
          aria-label={getAriaLabel(page, item.title)}
          type="button"
          disabled={isAnyCardDisabled}
        >
          {/* Card Content */}
          <div className="h-full flex flex-col justify-between">
            <div>
              {/* Featured Image */}
              <figure className="mb-6 max-[530px]:mb-4">
                <Image
                  src={item.imageUrl}
                  alt={`${item.title} - ${getSectionTitle(page)}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={`w-full ${config.imageHeight} max-[530px]:h-[120px] object-cover rounded-md`}
                />
              </figure>

              {/* Article Title */}
              <header className="mb-3 max-[530px]:mb-2">
                <h3 className="text-white text-[24px] max-[530px]:text-[18px] font-normal uppercase text-left font-helvetica">
                  {item.title}
                </h3>
              </header>

              {/* Article Description */}
              <div className="flex justify-end">
                <p className="text-[#C7C7C7] text-[18px] max-[530px]:text-[14px] w-[80%] text-left font-neue-montreal">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Call-to-Action */}
            <footer className="flex justify-start mb-1">
              <span 
                className="bg-transparent cursor-pointer text-white font-normal font-helvetica text-[14px] max-[530px]:text-[12px] py-1 px-3 max-[530px]:py-1 max-[530px]:px-2 rounded-[6px] border border-[#FF503C] hover:bg-[rgba(255,80,60,0.1)] transition-colors duration-200 flex items-center gap-2"
                role="button"
                aria-hidden="true"
              >
                {getCtaText(page)}
              </span>
            </footer>
          </div>
        </button>
      </article>
    </li>
  );
}
