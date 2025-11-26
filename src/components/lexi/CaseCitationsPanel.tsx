import React from 'react';
import { Citation } from '../../types/case';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface CaseCitationsPanelProps {
  citations: Citation[];
  onSelectCitation?: (citation: Citation) => void;
}

export const CaseCitationsPanel: React.FC<CaseCitationsPanelProps> = ({
  citations,
  onSelectCitation,
}) => {
  return (
    <div className="space-y-6 p-6 border border-white/5 bg-brand-surface/5 mt-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
        <h3 className="font-mono text-xs text-brand-gold uppercase tracking-widest">
          /Citation_Network
        </h3>
      </div>

      <div className="space-y-1">
        {citations.map((citation) => (
          <div
            key={citation.id}
            className="group flex items-center justify-between p-3 border-b border-white/5 hover:bg-white/[0.02] cursor-pointer transition-all duration-300"
            onClick={() => onSelectCitation?.(citation)}
          >
            <div className="space-y-1">
              <div className="font-serif text-sm text-stone-300 group-hover:text-brand-gold transition-colors">
                {citation.title}
              </div>
              <div className="text-[10px] font-mono text-stone-600 group-hover:text-stone-500">
                {citation.citation}
              </div>
            </div>
            
            <span className={`text-[10px] uppercase tracking-widest px-2 py-1 border ${
              citation.relation === 'cites' 
                ? 'border-stone-700 text-stone-500' 
                : 'border-brand-gold/30 text-brand-gold/70'
            }`}>
              {citation.relation === 'cites' ? 'OUT' : 'IN'}
            </span>
          </div>
        ))}
        {citations.length === 0 && (
          <div className="text-xs font-mono text-stone-600 text-center py-8">NO_LINKS_FOUND</div>
        )}
      </div>
    </div>
  );
};
