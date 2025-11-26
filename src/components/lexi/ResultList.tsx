import React from 'react';
import { SearchResult } from '../../types/search';
import { ResultCard } from './ResultCard';

interface ResultListProps {
  results: SearchResult[];
  onSelectResult?: (result: SearchResult) => void;
}

export const ResultList: React.FC<ResultListProps> = ({
  results,
  onSelectResult,
}) => {
  return (
    <div className="space-y-4">
      {results.map((result) => (
        <ResultCard
          key={result.id}
          result={result}
          onClick={() => onSelectResult?.(result)}
        />
      ))}
    </div>
  );
};
