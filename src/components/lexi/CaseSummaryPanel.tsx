import React from 'react';
import { Case } from '../../types/case';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

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
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-50">{caseData.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span className="font-mono bg-slate-800 px-2 py-0.5 rounded">{caseData.citation}</span>
            <span>•</span>
            <span>{caseData.court}</span>
            <span>•</span>
            <span>{caseData.date}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={onSave} iconLeft="🔖">
            Save
          </Button>
          <Button onClick={onAskAI} iconLeft="✨">
            Ask AI
          </Button>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-slate-300 mb-2">Summary</h3>
        <p className="text-slate-300 leading-relaxed">{caseData.summary}</p>
      </div>
    </div>
  );
};
