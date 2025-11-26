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
    <Card className="space-y-4">
      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Citations</h3>
      <div className="space-y-3">
        {citations.map((citation) => (
          <div
            key={citation.id}
            className="flex items-start justify-between p-3 rounded-lg bg-slate-900/50 hover:bg-slate-800/50 cursor-pointer transition-colors border border-slate-800 hover:border-slate-700"
            onClick={() => onSelectCitation?.(citation)}
          >
            <div>
              <div className="font-medium text-sky-400 text-sm">{citation.title}</div>
              <div className="text-xs text-slate-500 mt-1">{citation.citation}</div>
            </div>
            <Badge variant={citation.relation === 'cites' ? 'default' : 'info'}>
              {citation.relation === 'cites' ? 'Cites' : 'Cited By'}
            </Badge>
          </div>
        ))}
        {citations.length === 0 && (
          <div className="text-sm text-slate-500 italic">No citations found.</div>
        )}
      </div>
    </Card>
  );
};
