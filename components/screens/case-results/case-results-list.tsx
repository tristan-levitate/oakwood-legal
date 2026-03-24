import React from 'react';
import CaseResultItem from './case-result-item';
import { ResultProps } from '@/types/types';

interface CaseResultsListProps {
  results: ResultProps[];
}

export default function CaseResultsList({ results }: CaseResultsListProps) {
  // Show loading state or empty state if no results
  if (!results || results.length === 0) {
    return (
      <section className="w-full max-w-[1050px] mx-auto px-8 py-16 max-[900px]:px-4 max-[900px]:py-12">
        <div className="text-center text-white">
          <p>No case results available at this time.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-[1050px] mx-auto px-8 py-16 max-[900px]:px-4 max-[900px]:py-12">
      <ul className="space-y-0" role="list">
        {results.map((result, index) => (
          <CaseResultItem
            key={result._id}
            result={result}
            index={index}
            isHighlighted={index === 0} // Highlight the largest settlement
          />
        ))}
      </ul>
    </section>
  );
}
