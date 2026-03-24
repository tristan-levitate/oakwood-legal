import React from 'react';
import VerticalBorder from './vertical-border';
import { getVerticalBorderHeight } from '../dual-title/dual-title-config';

interface ResponsiveVerticalBorderProps {
  page?: string;
  height: number;
  ariaLabel: string;
}

export default function ResponsiveVerticalBorder({ page, height, ariaLabel }: ResponsiveVerticalBorderProps) {
  const borderHeight = getVerticalBorderHeight(page);
  
  return (
    <>
      {/* Desktop VerticalBorder */}
      <div className="block max-[578px]:hidden">
        <VerticalBorder
          height={borderHeight.desktop}
          isRotated={false}
          ariaLabel={ariaLabel}
        />
      </div>
      {/* Mobile VerticalBorder (578px and below) */}
      <div className="hidden max-[578px]:block">
        <VerticalBorder
          height={borderHeight.mobile}
          isRotated={false}
          ariaLabel={ariaLabel}
        />
      </div>
    </>
  );
}
