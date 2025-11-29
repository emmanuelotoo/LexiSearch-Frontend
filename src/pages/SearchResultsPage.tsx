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
                  <span>{total} Results found</span>
                </div>
                <Button variant="outline" size="sm" className="border-white/10 hover:border-brand-gold/50 text-stone-400 hover:text-brand-gold font-mono text-xs uppercase tracking-wider">
                  Export Results
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
                  <p className="text-xs font-mono text-brand-gold animate-pulse">Searching case law...</p>
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
                  <p className="text-stone-500 font-mono text-sm">No cases found</p>
                  <p className="text-stone-600 text-xs mt-2">Try adjusting your search terms.</p>
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
                    AI Research Assistant
                  </h3>
                  <div className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse" />
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-xs text-stone-400 leading-relaxed">
                    I've analyzed these {total} results. How can I help you refine your research?
                  </p>
                  
                  <div className="bg-brand-dark/30 border border-white/5 p-4 rounded-sm">
                    <div className="flex gap-3 mb-3">
                      <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[10px] text-brand-gold">AI</span>
                      </div>
                      <div className="text-xs text-stone-300 leading-relaxed">
                        I found {results.length} key cases matching your query. The most relevant precedent appears to be <span className="text-brand-gold/80 italic">{results[0]?.title || 'the top result'}</span>.
                      </div>
                    </div>
                    <div className="pl-9">
                      <p className="text-[10px] text-stone-500 uppercase tracking-wider mb-2">Suggested Actions:</p>
                      <div className="space-y-2">
                        <button className="block text-left text-xs text-stone-400 hover:text-brand-gold transition-colors">
                          → Summarize the holding
                        </button>
                        <button className="block text-left text-xs text-stone-400 hover:text-brand-gold transition-colors">
                          → Find dissenting opinions
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <ChatInput 
                  onSend={() => {}} 
                  placeholder="Ask a question about these results..." 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
