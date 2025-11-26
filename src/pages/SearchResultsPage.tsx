import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { SearchBar } from '../components/lexi/SearchBar';
import { FilterBar } from '../components/lexi/FilterBar';
import { ResultSummaryBar } from '../components/lexi/ResultSummaryBar';
import { ResultList } from '../components/lexi/ResultList';
import { PaginationControls } from '../components/lexi/PaginationControls';
import { ChatInput } from '../components/lexi/ChatInput';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Spinner } from '../components/ui/Spinner';
import { useSearch } from '../hooks/useSearch';
import { SearchFilters } from '../types/search';

export const SearchResultsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const query = searchParams.get('query') || '';
  const [filters, setFilters] = useState<SearchFilters>({});
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { results, total, isLoading } = useSearch({ query, filters, page, pageSize });

  // Reset page when query changes
  useEffect(() => {
    setPage(1);
  }, [query]);

  const handleSearch = (newQuery: string) => {
    setSearchParams({ query: newQuery });
  };

  const handleResultClick = (resultId: string) => {
    navigate(`/cases/${resultId}`);
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto w-full px-4 py-6 space-y-6">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="w-full md:w-1/2">
            <SearchBar initialQuery={query} onSubmit={handleSearch} />
          </div>
          <div className="hidden md:block">
            <Button variant="outline" size="sm">Export Results</Button>
          </div>
        </div>

        <ResultSummaryBar
          query={query}
          totalResults={total}
          durationMs={450} // Mock duration
          filters={filters}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] gap-6 items-start">
          {/* Left: Filters */}
          <div className="hidden lg:block sticky top-24">
            <FilterBar filters={filters} onChange={setFilters} />
          </div>

          {/* Middle: Results */}
          <div className="space-y-6 min-h-[500px]">
            {isLoading ? (
              <div className="flex justify-center py-20">
                <Spinner className="h-10 w-10" />
              </div>
            ) : results.length > 0 ? (
              <>
                <ResultList
                  results={results}
                  onSelectResult={(r) => handleResultClick(r.id)}
                />
                <PaginationControls
                  page={page}
                  pageSize={pageSize}
                  total={total}
                  onPageChange={setPage}
                />
              </>
            ) : (
              <div className="text-center py-20 text-slate-500">
                No results found. Try adjusting your search terms.
              </div>
            )}
          </div>

          {/* Right: AI Assistant Context */}
          <div className="hidden xl:block sticky top-24">
            <Card className="bg-brand-surface/40 border-white/5">
              <h3 className="font-semibold text-brand-gold mb-2 font-serif">Ask AI about these results</h3>
              <p className="text-xs text-stone-400 mb-4">
                Get a summary or ask specific questions about the cases in this list.
              </p>
              <div className="h-48 mb-4 bg-brand-dark/50 rounded-sm p-3 text-xs text-stone-400 overflow-y-auto border border-white/5 font-mono">
                AI: I can help you analyze these {total} results. What would you like to know?
              </div>
              <ChatInput onSend={() => {}} placeholder="e.g. Summarize the common holding..." />
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
