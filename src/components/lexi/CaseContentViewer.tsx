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
    return <div className="text-stone-500 italic p-4 font-mono text-sm">No content vectors available.</div>;
  }

  return (
    <div className="relative">
      {/* Document Header */}
      <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
        <span className="font-mono text-xs text-brand-gold uppercase tracking-widest">/Full_Text_Opinion</span>
        <div className="flex gap-2">
           <span className="w-2 h-2 rounded-full bg-stone-700" />
           <span className="w-2 h-2 rounded-full bg-stone-700" />
           <span className="w-2 h-2 rounded-full bg-stone-700" />
        </div>
      </div>

      <div className="bg-brand-surface/5 border-l border-white/10 pl-8 md:pl-12 pr-4 py-2 space-y-8 font-serif text-lg leading-loose text-stone-300">
        {contentBlocks.map((block) => {
          if (block.type === 'heading') {
            return (
              <h3 key={block.id} className="text-xl font-bold text-stone-100 font-sans mt-10 mb-4 flex items-center gap-3">
                <span className="text-brand-gold/50 text-sm">§</span>
                {block.text}
              </h3>
            );
          }
          if (block.type === 'highlight') {
            return (
              <p
                key={block.id}
                className="relative bg-brand-gold/10 border-l-2 border-brand-gold pl-4 py-2 my-6 cursor-pointer hover:bg-brand-gold/20 transition-colors group"
                onClick={() => onHighlightClick?.(block.id)}
              >
                <span className="absolute -left-[21px] top-2 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity text-xs">▶</span>
                {block.text}
              </p>
            );
          }
          return <p key={block.id} className="text-stone-400">{block.text}</p>;
        })}
      </div>
    </div>
  );
};
