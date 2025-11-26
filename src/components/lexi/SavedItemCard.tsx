import React from 'react';
import { SavedItem } from '../../types/library';
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
  const typeConfig = {
    case: { label: 'CASE_LAW', color: 'text-blue-400', icon: '⚖️' },
    note: { label: 'RESEARCH_NOTE', color: 'text-amber-400', icon: '📝' },
    chat: { label: 'AI_SESSION', color: 'text-purple-400', icon: '🤖' },
  };

  const config = typeConfig[item.type];

  return (
    <div 
      onClick={onOpen}
      className="group relative bg-brand-surface/20 border border-white/5 hover:border-brand-gold/30 transition-all duration-300 p-6 cursor-pointer overflow-hidden"
    >
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-brand-gold/50 transition-colors" />
      
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest">
          <span className={config.color}>{config.icon}</span>
          <span className="text-stone-500">{config.label}</span>
        </div>
        
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300">
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-stone-500 hover:text-brand-gold"
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
            className="h-6 w-6 p-0 text-stone-500 hover:text-red-400"
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.();
            }}
          >
            ✕
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3 mb-6">
        <h3 className="font-serif text-lg text-stone-200 group-hover:text-brand-gold transition-colors line-clamp-2 leading-tight">
          {item.title}
        </h3>
        
        {item.summary && (
          <p className="text-xs text-stone-500 font-sans line-clamp-3 leading-relaxed border-l border-white/10 pl-3">
            {item.summary}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-end border-t border-white/5 pt-4">
        <span className="text-[10px] font-mono text-stone-600 uppercase">
          Last_Mod: {item.updatedAt}
        </span>
        <div className="flex gap-2">
          {item.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[10px] text-stone-500 bg-white/5 px-2 py-1 rounded-sm">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Hover Line */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-gold group-hover:w-full transition-all duration-500 ease-out" />
    </div>
  );
};
