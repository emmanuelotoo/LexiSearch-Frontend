import React from 'react';
import { Case } from '../../types/case';
import { Card } from '../ui/Card';

interface CaseMetadataProps {
  caseData: Case;
}

export const CaseMetadata: React.FC<CaseMetadataProps> = ({ caseData }) => {
  return (
    <div className="space-y-8 p-6 border border-white/5 bg-brand-surface/5">
      <div className="flex items-center gap-2 mb-6">
        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
        <h3 className="font-sans text-xs text-brand-gold font-bold uppercase tracking-widest">
          Case Metadata
        </h3>
      </div>

      <div>
        <h4 className="text-[10px] font-sans font-bold text-stone-500 uppercase tracking-widest mb-3">Presiding Judges</h4>
        <div className="flex flex-wrap gap-2">
          {caseData.judges?.map((judge) => (
            <span key={judge} className="text-xs font-sans text-stone-300 border border-white/10 px-2 py-1 bg-brand-dark">
              {judge}
            </span>
          )) || <span className="text-xs text-stone-600 font-sans italic">Data unavailable</span>}
        </div>
      </div>

      <div>
        <h4 className="text-[10px] font-sans font-bold text-stone-500 uppercase tracking-widest mb-3">Parties Involved</h4>
        <ul className="space-y-2">
          {caseData.parties?.map((party, idx) => (
            <li key={idx} className="text-sm text-stone-400 font-sans border-l border-white/10 pl-3">
              {party}
            </li>
          )) || <span className="text-xs text-stone-600 font-sans italic">Data unavailable</span>}
        </ul>
      </div>

      <div>
        <h4 className="text-[10px] font-sans font-bold text-stone-500 uppercase tracking-widest mb-3">Procedural Posture</h4>
        <p className="text-sm text-stone-400 leading-relaxed font-sans">
          {caseData.proceduralPosture || 'Data unavailable'}
        </p>
      </div>
    </div>
  );
};
