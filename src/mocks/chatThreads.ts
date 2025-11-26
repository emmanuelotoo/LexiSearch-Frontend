import { ChatMessage } from '../types/chat';

export const MOCK_MESSAGES: ChatMessage[] = [
  {
    id: 'm1',
    role: 'system',
    content: 'You are a helpful legal research assistant.',
    createdAt: '2023-01-01T00:00:00Z'
  },
  {
    id: 'm2',
    role: 'user',
    content: 'What is the standard for summary judgment in California?',
    createdAt: '2023-10-27T10:00:00Z'
  },
  {
    id: 'm3',
    role: 'assistant',
    content: 'In California, summary judgment is governed by Code of Civil Procedure section 437c. The standard requires that the moving party show there is no triable issue as to any material fact and that the moving party is entitled to judgment as a matter of law.',
    createdAt: '2023-10-27T10:00:05Z'
  }
];
