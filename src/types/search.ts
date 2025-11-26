export interface SearchFilters {
  jurisdiction?: string;
  courtLevel?: string;
  dateFrom?: string;
  dateTo?: string;
  documentType?: 'case' | 'statute' | 'regulation' | 'all';
}

export interface SearchResult {
  id: string;
  title: string;
  snippet: string;
  court: string;
  jurisdiction: string;
  date: string;
  tags: string[];
}
