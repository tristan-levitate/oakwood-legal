import React from 'react';
import DecorativeLine from '../decorative-line/decorative-line';
import type { AwardsProps } from '@/types/types';

// Extend AwardsProps to include id for carousel functionality
export interface AwardCard extends AwardsProps {
  id: number;
}

interface AwardCardProps {
  card: AwardCard;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function AwardCard({ 
  card, 
  className = "",
  titleClassName = "",
  descriptionClassName = ""
}: AwardCardProps) {
  return (
    <article
      className={`w-full h-[297px] flex-shrink-0 ${className}`}
    >
      <div
        className="w-full h-full p-8 rounded-lg"
        style={{
          background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="h-full flex flex-col">
          {/* Award Title */}
          <header>
            <h3 className={`text-white text-[32px] max-[768px]:text-[28px] max-[495px]:text-[24px] max-[410px]:text-[20px] font-light font-helvetica uppercase leading-normal ${titleClassName}`}>
              {card.title}
            </h3>
          </header>

          {/* Decorative Line */}
          <div className="-mb-3 -mt-3" role="separator" aria-hidden="true">
            <DecorativeLine 
              mainLineWidth={106}
              oneLine={true}
              isRotated={false}
              ariaLabel={`Decorative line for ${card.title} award`}
              className="ml-[-16px]"
            />
          </div>

          {/* Award Description */}
          <div className="flex-1">
            <p className={`text-[#C7C7C7] text-[14px] max-[480px]:text-[13px] leading-[1.5] font-neue-montreal ${descriptionClassName}`}>
              {card.awardDetails}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

