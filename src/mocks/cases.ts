import { Case, Citation } from '../types/case';

export const MOCK_CASE: Case = {
  id: '1',
  title: 'Smith v. Jones',
  citation: '123 Cal. 4th 456',
  court: 'Supreme Court of California',
  jurisdiction: 'California',
  date: '2023-05-12',
  summary: 'This case establishes that written contract terms generally supersede prior oral agreements in commercial disputes, reinforcing the parol evidence rule.',
  judges: ['Garcia, J.', 'Miller, J.', 'Chen, J.'],
  parties: ['John Smith (Plaintiff)', 'Robert Jones (Defendant)'],
  proceduralPosture: 'Appeal from the Superior Court of Los Angeles County.',
  contentBlocks: [
    { id: 'b1', type: 'heading', text: 'Opinion of the Court' },
    { id: 'b2', type: 'paragraph', text: 'We granted review to decide whether a commercial party may introduce evidence of a prior oral agreement to contradict the plain terms of a fully integrated written contract.' },
    { id: 'b3', type: 'highlight', text: 'We hold that under the parol evidence rule, such evidence is inadmissible when the written agreement is intended to be a complete and final expression of the parties\' agreement.' },
    { id: 'b4', type: 'paragraph', text: 'The facts are as follows. Plaintiff Smith and Defendant Jones entered into a written contract for the sale of widgets...' }
  ]
};

export const MOCK_CITATIONS: Citation[] = [
  { id: 'c1', title: 'Masterson v. Sine', citation: '68 Cal. 2d 222', relation: 'cites' },
  { id: 'c2', title: 'Pacific Gas & Elec. Co. v. G.W. Thomas Drayage', citation: '69 Cal. 2d 33', relation: 'cites' },
  { id: 'c3', title: 'Doe v. Smith', citation: '2024 Cal. App. Unpub.', relation: 'citedBy' }
];
