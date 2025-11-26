import React from 'react';
import { SearchResult } from '../../types/search';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface ResultCardProps {
  result: SearchResult;
  onClick?: () => void;
  onSave?: (e: React.MouseEvent) => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  result,
  onClick,
  onSave,
}) => {
  return (
    <Card interactive onClick={onClick} className="group relative border-white/5 hover:border-brand-gold/30 bg-brand-surface/40">
      <div className="flex justify-between items-start gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-lg font-serif font-semibold text-brand-gold group-hover:text-brand-gold/80 transition-colors">
              {result.title}
            </h3>
            <Badge variant="outline" className="text-xs border-stone-600 text-stone-400">
              {result.court}
            </Badge>
            <span className="text-xs text-stone-500 font-mono">{result.date}</span>
          </div>
          
          <p className="text-sm text-stone-300 line-clamp-3 leading-relaxed font-sans">
            {result.snippet}
          </p>

          <div className="flex gap-2 mt-3">
            {result.tags.map((tag) => (
              <Badge key={tag} variant="default" className="bg-brand-dark/50 text-stone-400 border border-white/5">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="opacity-0 group-hover:opacity-100 transition-opacity text-stone-500 hover:text-brand-gold"
          onClick={(e) => {
            e.stopPropagation();
            onSave?.(e);
          }}
        >
          🔖
        </Button>
      </div>
    </Card>
  );
};
