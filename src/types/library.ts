export type SavedItemType = 'case' | 'note' | 'chat';

export interface SavedItem {
  id: string;
  type: SavedItemType;
  title: string;
  sourceId?: string;
  summary?: string;
  tags: string[];
  updatedAt: string;
}
