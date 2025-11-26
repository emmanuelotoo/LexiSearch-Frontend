import { SearchResult } from '../types/search';

export const MOCK_SEARCH_RESULTS: SearchResult[] = [
  {
    id: '1',
    title: 'Smith v. Jones',
    snippet: '...in the matter of the contract dispute, the court held that the explicit terms of the agreement superseded any prior oral understandings...',
    court: 'Supreme Court of California',
    jurisdiction: 'California',
    date: '2023-05-12',
    tags: ['Contract', 'Breach', 'Evidence']
  },
  {
    id: '2',
    title: 'State v. Doe',
    snippet: '...the defendant argued that the search was unreasonable under the Fourth Amendment. We agree and reverse the lower court decision...',
    court: 'US Court of Appeals, 9th Circuit',
    jurisdiction: 'Federal',
    date: '2022-11-08',
    tags: ['Criminal', 'Constitutional', 'Search & Seizure']
  },
  {
    id: '3',
    title: 'TechCorp Inc. v. StartUp LLC',
    snippet: '...intellectual property rights regarding the software algorithm were not sufficiently defined in the employment contract...',
    court: 'US District Court, N.D. Cal.',
    jurisdiction: 'Federal',
    date: '2024-01-15',
    tags: ['IP', 'Copyright', 'Software']
  }
];
