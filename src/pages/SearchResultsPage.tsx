import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { SearchBar } from '../components/lexi/SearchBar';
import { FilterBar } from '../components/lexi/FilterBar';
import { ResultList } from '../components/lexi/ResultList';
import { PaginationControls } from '../components/lexi/PaginationControls';
import { ChatInput } from '../components/lexi/ChatInput';
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
      <div className="flex flex-col min-h-screen bg-brand-dark">
        {/* Command Center Header */}
        <div className="sticky top-16 z-30 bg-brand-dark/95 backdrop-blur-md border-b border-white/10">
          <div className="max-w-[1800px] mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="w-full md:w-1/2 lg:w-1/3">
                <SearchBar 
                  initialQuery={query} 
                  onSubmit={handleSearch} 
                  className="w-full"
                  placeholder="Refine query..."
                />
              </div>
              
              <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                  <span className="text-brand-gold">●</span>
                  <span>{total} RESULTS FOUND</span>
                  <span className="text-stone-700">|</span>
                  <span>0.45s</span>
                </div>
                <Button variant="outline" size="sm" className="border-white/10 hover:border-brand-gold/50 text-stone-400 hover:text-brand-gold font-mono text-xs uppercase tracking-wider">
                  Export Data
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-[1800px] mx-auto w-full px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_350px] gap-12 items-start">
            
            {/* Left: Filters Panel */}
            <div className="hidden lg:block sticky top-40">
              <FilterBar filters={filters} onChange={setFilters} />
            </div>

            {/* Middle: Results Stream */}
            <div className="min-h-[500px]">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-32 space-y-4">
                  <Spinner className="h-8 w-8 text-brand-gold" />
                  <p className="text-xs font-mono text-brand-gold animate-pulse">PROCESSING QUERY...</p>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-8">
                  <ResultList
                    results={results}
                    onSelectResult={(r) => handleResultClick(r.id)}
                  />
                  <div className="pt-8 border-t border-white/5">
                    <PaginationControls
                      page={page}
                      pageSize={pageSize}
                      total={total}
                      onPageChange={setPage}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-32 border border-dashed border-white/10 rounded-sm">
                  <span className="text-4xl mb-4 opacity-20">∅</span>
                  <p className="text-stone-500 font-mono text-sm">NO VECTORS FOUND</p>
                  <p className="text-stone-600 text-xs mt-2">Try adjusting your search parameters.</p>
                </div>
              )}
            </div>

            {/* Right: Intelligence Unit (AI Context) */}
            <div className="hidden xl:block sticky top-40">
              <div className="border border-white/10 bg-brand-surface/5 p-6 relative group">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-gold/30" />
                
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-mono text-xs text-brand-gold uppercase tracking-widest">
                    /Intelligence_Unit
                  </h3>
                  <div className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse" />
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-xs text-stone-400 leading-relaxed">
                    AI analysis active. Contextualizing {total} results for relevance and precedent.
                  </p>
                  
                  <div className="h-64 bg-black/40 border border-white/5 p-4 font-mono text-[10px] text-stone-500 overflow-y-auto custom-scrollbar">
                    <div className="mb-2 text-brand-gold/50">&gt; SYSTEM_READY</div>
                    <div className="mb-2">&gt; ANALYZING_PRECEDENTS...</div>
                    <div className="mb-2">&gt; IDENTIFIED {results.length} KEY CASES</div>
                    <div className="mb-2 text-stone-600">
                      Most relevant: {results[0]?.title || 'N/A'}
                    </div>
                    <div className="mt-4 text-stone-300">
                      How can I assist with these results?
                    </div>
                  </div>
                </div>

                <ChatInput 
                  onSend={() => {}} 
                  placeholder="Query the intelligence unit..." 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
