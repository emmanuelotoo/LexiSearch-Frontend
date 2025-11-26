import React from 'react';
import { SavedItem } from '../../types/library';
import { SavedItemCard } from './SavedItemCard';

interface SavedItemListProps {
  items: SavedItem[];
  onSelectItem?: (item: SavedItem) => void;
  onDeleteItem?: (id: string) => void;
}

export const SavedItemList: React.FC<SavedItemListProps> = ({
  items,
  onSelectItem,
  onDeleteItem,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {items.map((item) => (
        <SavedItemCard
          key={item.id}
          item={item}
          onOpen={() => onSelectItem?.(item)}
          onDelete={() => onDeleteItem?.(item.id)}
        />
      ))}
    </div>
  );
};
