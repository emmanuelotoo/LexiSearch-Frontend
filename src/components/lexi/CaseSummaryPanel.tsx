import React from 'react';
import { Case } from '../../types/case';
import { Button } from '../ui/Button';

interface CaseSummaryPanelProps {
  caseData: Case;
  onSave?: () => void;
  onAskAI?: () => void;
}

export const CaseSummaryPanel: React.FC<CaseSummaryPanelProps> = ({
  caseData,
  onSave,
  onAskAI,
}) => {
  return (
    <div className="space-y-8 border-b border-white/10 pb-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono tracking-wider">
             <span className="text-brand-gold bg-brand-gold/10 px-2 py-1 rounded-sm border border-brand-gold/20">
               {caseData.citation}
             </span>
             <span className="text-stone-600">|</span>
             <span className="text-stone-400 uppercase">{caseData.court}</span>
             <span className="text-stone-600">|</span>
             <span className="text-stone-500">{caseData.date}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-100 leading-tight max-w-4xl">
            {caseData.title}
          </h1>
        </div>

        <div className="flex gap-3">
          <Button 
            variant="outline" 
            onClick={onSave} 
            className="border-white/10 hover:border-brand-gold/50 text-stone-400 hover:text-brand-gold font-sans font-bold text-xs uppercase tracking-wider"
          >
            🔖 Save Case
          </Button>
          <Button 
            onClick={onAskAI} 
            className="bg-brand-gold text-brand-dark hover:bg-white font-bold font-sans text-xs uppercase tracking-wider"
          >
            ✨ Analyze
          </Button>
        </div>
      </div>

      {/* Abstract / Summary Block */}
      <div className="relative bg-brand-surface/5 border-l-2 border-brand-gold/50 p-6 md:p-8">
        <div className="absolute top-0 right-0 p-2">
          <span className="text-[10px] font-mono text-stone-600 uppercase tracking-widest">/Abstract</span>
        </div>
        <p className="text-stone-300 leading-relaxed font-sans text-lg">
          {caseData.summary}
        </p>
      </div>
    </div>
  );
};
