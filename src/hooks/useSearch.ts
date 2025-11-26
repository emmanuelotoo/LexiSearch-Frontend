import { useState, useEffect } from 'react';
import { SearchResult, SearchFilters } from '../types/search';
import { MOCK_SEARCH_RESULTS } from '../mocks/searchResults';

interface UseSearchProps {
  query: string;
  filters: SearchFilters;
  page: number;
  pageSize: number;
}

export const useSearch = ({ query, filters, page, pageSize }: UseSearchProps) => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setResults([]);
        setTotal(0);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        // Simulate API latency
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Simple client-side filtering for mock
        let filtered = MOCK_SEARCH_RESULTS.filter((r) =>
          r.title.toLowerCase().includes(query.toLowerCase()) ||
          r.snippet.toLowerCase().includes(query.toLowerCase())
        );

        if (filters.jurisdiction) {
          filtered = filtered.filter(r => r.jurisdiction.toLowerCase() === filters.jurisdiction?.toLowerCase());
        }

        setTotal(filtered.length);
        
        // Pagination
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        setResults(filtered.slice(start, end));
      } catch (err) {
        setError('Failed to fetch search results.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [query, JSON.stringify(filters), page, pageSize]);

  return { results, total, isLoading, error };
};
