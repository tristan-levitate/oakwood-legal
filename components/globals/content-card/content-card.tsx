import React from 'react';
import type { ArticleProps } from '@/types/types';
import { getCardConfig } from './card-config';
import ContentCardItem from './content-card-item';
import { getSectionTitle } from './content-card-utils';

// Type for content cards - only the properties actually used
type ContentCardItem = Pick<ArticleProps, 'slug' | 'imageUrl' | 'title' | 'description'>;

interface ContentCardProps {
  items: ContentCardItem[];
  page?: string;
}

export default function ContentCard({ items, page }: ContentCardProps) {
  const config = getCardConfig(page);

  // Calculate items for different layouts
  const totalItems = items.length;
  
  // Desktop (3 columns) - above 1245px
  const desktopFullRows = Math.floor(totalItems / 3);
  const desktopRemainingItems = totalItems % 3;
  
  // Tablet (2 columns) - below 1245px
  const tabletFullRows = Math.floor(totalItems / 2);
  const tabletRemainingItems = totalItems % 2;

  return (
    <section className="w-full">
      <div className="w-full mx-auto px-8">
        <h2 className="sr-only">{getSectionTitle(page)}</h2>
        
        {/* Desktop Layout - 3 columns (above 1245px) */}
        <div className="hidden min-[1245px]:block">
          {/* Full rows in grid - 3 columns */}
          {desktopFullRows > 0 && (
            <ul className="grid grid-cols-3 gap-[34px] mb-[34px]" role="list">
              {items.slice(0, desktopFullRows * 3).map((item, index) => (
                <ContentCardItem
                  key={`desktop-${item.slug}-${index}`}
                  item={item}
                  index={index}
                  page={page}
                  config={config}
                  isLastRow={false}
                />
              ))}
            </ul>
          )}

          {/* Last incomplete row - centered with proper spacing */}
          {desktopRemainingItems > 0 && (
            <div className="flex justify-center">
              <div className="grid gap-[34px]" style={{ gridTemplateColumns: `repeat(${desktopRemainingItems}, 1fr)`, width: `calc(${desktopRemainingItems} * (100% / 3) + ${desktopRemainingItems - 1} * 34px)` }}>
                {items.slice(desktopFullRows * 3).map((item, index) => (
                  <ContentCardItem
                    key={`desktop-last-${item.slug}-${desktopFullRows * 3 + index}`}
                    item={item}
                    index={desktopFullRows * 3 + index}
                    page={page}
                    config={config}
                    isLastRow={true}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tablet Layout - 2 columns (800px - 1245px) */}
        <div className="hidden min-[800px]:block min-[1245px]:hidden">
          {/* Full rows in grid - 2 columns */}
          {tabletFullRows > 0 && (
            <ul className="grid grid-cols-2 gap-[34px] mb-[34px]" role="list">
              {items.slice(0, tabletFullRows * 2).map((item, index) => (
                <ContentCardItem
                  key={`tablet-${item.slug}-${index}`}
                  item={item}
                  index={index}
                  page={page}
                  config={config}
                  isLastRow={false}
                />
              ))}
            </ul>
          )}

          {/* Last incomplete row - centered with proper spacing */}
          {tabletRemainingItems > 0 && (
            <div className="flex justify-center">
              <div className="grid gap-[34px]" style={{ gridTemplateColumns: `repeat(${tabletRemainingItems}, 1fr)`, width: `calc(${tabletRemainingItems} * (100% / 2) + ${tabletRemainingItems - 1} * 34px)` }}>
                {items.slice(tabletFullRows * 2).map((item, index) => (
                  <ContentCardItem
                    key={`tablet-last-${item.slug}-${tabletFullRows * 2 + index}`}
                    item={item}
                    index={tabletFullRows * 2 + index}
                    page={page}
                    config={config}
                    isLastRow={true}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Layout - 1 column (below 800px) */}
        <div className="block min-[800px]:hidden">
          <ul className="flex flex-col gap-[34px]" role="list">
            {items.map((item, index) => (
              <ContentCardItem
                key={`mobile-${item.slug}-${index}`}
                item={item}
                index={index}
                page={page}
                config={config}
                isLastRow={false}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
