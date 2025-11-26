import React from 'react';
import { cn } from '../ui/Button';

interface ContentBlock {
  id: string;
  type: 'heading' | 'paragraph' | 'highlight';
  text: string;
}

interface CaseContentViewerProps {
  contentBlocks?: ContentBlock[];
  onHighlightClick?: (id: string) => void;
}

export const CaseContentViewer: React.FC<CaseContentViewerProps> = ({
  contentBlocks,
  onHighlightClick,
}) => {
  if (!contentBlocks) {
    return <div className="text-slate-500 italic p-4">No content available.</div>;
  }

  return (
    <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 md:p-8 space-y-6 font-serif text-lg leading-relaxed text-slate-200">
      {contentBlocks.map((block) => {
        if (block.type === 'heading') {
          return (
            <h3 key={block.id} className="text-xl font-bold text-slate-50 font-sans mt-6 mb-2">
              {block.text}
            </h3>
          );
        }
        if (block.type === 'highlight') {
          return (
            <p
              key={block.id}
              className="bg-yellow-900/30 border-l-4 border-yellow-600 pl-4 py-2 my-4 cursor-pointer hover:bg-yellow-900/40 transition-colors"
              onClick={() => onHighlightClick?.(block.id)}
              title="AI Highlighted Key Passage"
            >
              {block.text}
            </p>
          );
        }
        return <p key={block.id}>{block.text}</p>;
      })}
    </div>
  );
};
