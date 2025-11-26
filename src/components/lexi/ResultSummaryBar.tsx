import React from 'react';
import { SearchFilters } from '../../types/search';
import { Badge } from '../ui/Badge';

interface ResultSummaryBarProps {
  query: string;
  totalResults: number;
  durationMs?: number;
  filters: SearchFilters;
}

export const ResultSummaryBar: React.FC<ResultSummaryBarProps> = ({
  query,
  totalResults,
  durationMs,
  filters,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
      <div>
        Found <span className="font-semibold text-slate-200">{totalResults}</span> results for{' '}
        <span className="font-semibold text-slate-200">"{query}"</span>
        {durationMs && <span> ({durationMs}ms)</span>}
      </div>
      <div className="flex gap-2">
        {filters.jurisdiction && (
          <Badge variant="outline">Jurisdiction: {filters.jurisdiction}</Badge>
        )}
        {filters.documentType && filters.documentType !== 'all' && (
          <Badge variant="outline">Type: {filters.documentType}</Badge>
        )}
      </div>
    </div>
  );
};
