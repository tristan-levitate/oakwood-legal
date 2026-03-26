import React from 'react';
import { ResultProps } from '@/types/types';

interface CaseResultItemProps {
  result: ResultProps;
  index: number;
  isHighlighted?: boolean;
}

export default function CaseResultItem({ result, index, isHighlighted = false }: CaseResultItemProps) {
  return (
    <li>
      <article
        className={`flex items-center gap-8 py-8 px-[18px] border-b border-[#4E4E4E] max-[900px]:py-6 max-[900px]:px-4 ${
          isHighlighted ? 'bg-gradient-to-b from-[rgba(192,43,39,0.00)] to-[rgba(192,43,39,0.20)]' : ''
        }`}
      >
        {/* Left Column - Case Result Indicator */}
        <div className="flex items-center justify-center flex-shrink-0 max-[530px]:hidden">
          <div 
            className="w-2 h-2 rounded-full bg-[#C02B27]" 
            role="presentation"
            aria-hidden="true"
          />
        </div>

        {/* Middle Column - Settlement/Verdict Amount (Desktop 3 colunas) */}
        <header className="w-[315px] max-[1050px]:hidden">
          <h3 
            className="text-white text-[38px] leading-none max-[900px]:text-[32px] max-[480px]:text-[28px] font-inter"
            style={{ 
              fontWeight: isHighlighted ? 400 : 200 
            }}
          >
            {result.verdict}
          </h3>
        </header>
        
        {/* Right Column - Case Description (Desktop 3 colunas) */}
        <div className="flex-1 max-[1050px]:hidden">
          <p 
            className="text-[#C7C7C7] text-[16px] max-[900px]:text-[15px] max-[480px]:text-[14px]"
            style={{
              lineHeight: '160%',
            }}
          >
            {result.resultDetails}
          </p>
        </div>

        {/* Right Column - Content Vertical (Tablet/Mobile 2 colunas) */}
        <div className="flex-1 flex flex-col gap-2 min-[1051px]:hidden">
          {/* Settlement/Verdict Amount */}
          <header className="w-[270px] max-[900px]:w-auto">
            <h3 
              className="text-white text-[38px] leading-none max-[900px]:text-[32px] max-[480px]:text-[28px] font-inter"
              style={{ 
                fontWeight: isHighlighted ? 400 : 200 
              }}
            >
              {result.verdict}
            </h3>
          </header>
          
          {/* Case Description */}
          <div>
            <p 
              className="text-[#C7C7C7] text-[16px] max-[900px]:text-[15px] max-[480px]:text-[14px]"
              style={{
                lineHeight: '160%',
              }}
            >
              {result.resultDetails}
            </p>
          </div>
        </div>
      </article>
    </li>
  );
}
