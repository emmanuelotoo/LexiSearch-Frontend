import { useState } from 'react';
import { SavedItem, SavedItemType } from '../types/library';
import { MOCK_LIBRARY_ITEMS } from '../mocks/libraryItems';

export const useLibrary = () => {
  const [items, setItems] = useState<SavedItem[]>(MOCK_LIBRARY_ITEMS);

  const addItem = (item: Omit<SavedItem, 'id' | 'updatedAt'>) => {
    const newItem: SavedItem = {
      ...item,
      id: Date.now().toString(),
      updatedAt: new Date().toISOString().split('T')[0],
    };
    setItems((prev) => [newItem, ...prev]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const filterByType = (type: SavedItemType | 'all') => {
    if (type === 'all') return items;
    return items.filter((item) => item.type === type);
  };

  return { items, addItem, removeItem, filterByType };
};
