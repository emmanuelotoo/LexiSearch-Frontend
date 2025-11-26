import React from 'react';
import { SavedItem } from '../../types/library';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface SavedItemCardProps {
  item: SavedItem;
  onOpen?: () => void;
  onDelete?: () => void;
  onShare?: () => void;
}

export const SavedItemCard: React.FC<SavedItemCardProps> = ({
  item,
  onOpen,
  onDelete,
  onShare,
}) => {
  const typeColors = {
    case: 'bg-blue-900/30 text-blue-400 border-blue-800/50',
    note: 'bg-amber-900/30 text-amber-400 border-amber-800/50',
    chat: 'bg-purple-900/30 text-purple-400 border-purple-800/50',
  };

  return (
    <Card interactive onClick={onOpen} className="group flex flex-col h-full">
      <div className="flex justify-between items-start mb-3">
        <Badge className={typeColors[item.type]}>
          {item.type.toUpperCase()}
        </Badge>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0"
            onClick={(e) => {
              e.stopPropagation();
              onShare?.();
            }}
          >
            📤
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-red-400 hover:text-red-300"
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.();
            }}
          >
            🗑️
          </Button>
        </div>
      </div>

      <h3 className="font-semibold text-slate-200 mb-2 line-clamp-2">{item.title}</h3>
      
      {item.summary && (
        <p className="text-sm text-slate-400 line-clamp-3 mb-4 flex-1">
          {item.summary}
        </p>
      )}

      <div className="mt-auto pt-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
        <span>{item.updatedAt}</span>
        <div className="flex gap-1">
          {item.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="bg-slate-800 px-1.5 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};
