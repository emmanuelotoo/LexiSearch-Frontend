import React from 'react';
import { SearchResult } from '../../types/search';
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
    <div 
      onClick={onClick}
      className="group relative border-t border-white/10 py-8 transition-all duration-500 hover:bg-white/[0.02] cursor-pointer"
    >
      {/* Hover Background Reveal */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />
      
      {/* The "Laser" Line */}
      <div className="absolute top-0 left-0 w-0 h-[1px] bg-brand-gold group-hover:w-full transition-all duration-700 ease-in-out" />

      <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-6">
        <div className="space-y-3">
          {/* Header: Citation & Date */}
          <div className="flex items-center gap-3 text-xs font-mono tracking-wider">
             <span className="text-brand-gold/70">{result.citation || 'No citation available'}</span>
             <span className="text-stone-600">•</span>
             <span className="text-stone-500">{result.date}</span>
             <span className="text-stone-600">•</span>
             <span className="text-stone-500 uppercase">{result.court}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-serif font-medium text-stone-300 group-hover:text-brand-gold transition-colors duration-300">
            {result.title}
          </h3>
          
          {/* Snippet */}
          <p className="text-sm text-stone-500 leading-relaxed font-sans max-w-3xl group-hover:text-stone-400 transition-colors">
            {result.snippet}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {result.tags.map((tag) => (
              <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 border border-white/10 text-stone-500 rounded-sm group-hover:border-brand-gold/20 group-hover:text-brand-gold/70 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Column */}
        <div className="flex flex-col items-end justify-between gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
           <Button
            variant="ghost"
            size="sm"
            className="text-stone-500 hover:text-brand-gold"
            onClick={(e) => {
              e.stopPropagation();
              onSave?.(e);
            }}
          >
            🔖 Save Case
          </Button>
          
          <div className="text-brand-gold text-xs uppercase tracking-widest font-bold flex items-center gap-2">
            Analyze <span className="text-lg">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};
