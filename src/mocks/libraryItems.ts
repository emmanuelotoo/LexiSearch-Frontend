import { SavedItem } from '../types/library';

export const MOCK_LIBRARY_ITEMS: SavedItem[] = [
  {
    id: 'l1',
    type: 'case',
    title: 'Smith v. Jones',
    sourceId: '1',
    tags: ['Contract', 'Important'],
    updatedAt: '2023-11-01'
  },
  {
    id: 'l2',
    type: 'note',
    title: 'Research on Parol Evidence',
    summary: 'Need to check recent exceptions to the rule in the 9th Circuit.',
    tags: ['Research', 'Evidence'],
    updatedAt: '2023-11-05'
  },
  {
    id: 'l3',
    type: 'chat',
    title: 'Chat about Summary Judgment',
    sourceId: 'thread-123',
    tags: ['Procedure'],
    updatedAt: '2023-10-27'
  }
];
