import React from 'react';
import { Case } from '../../types/case';
import { Card } from '../ui/Card';

interface CaseMetadataProps {
  caseData: Case;
}

export const CaseMetadata: React.FC<CaseMetadataProps> = ({ caseData }) => {
  return (
    <Card className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Judges</h3>
        <div className="flex flex-wrap gap-2">
          {caseData.judges?.map((judge) => (
            <span key={judge} className="text-sm text-slate-200 bg-slate-800 px-2 py-1 rounded">
              {judge}
            </span>
          )) || <span className="text-sm text-slate-500">Not available</span>}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Parties</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          {caseData.parties?.map((party, idx) => (
            <li key={idx}>{party}</li>
          )) || <span className="text-slate-500">Not available</span>}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Procedural Posture</h3>
        <p className="text-sm text-slate-300">
          {caseData.proceduralPosture || 'Not available'}
        </p>
      </div>
    </Card>
  );
};
