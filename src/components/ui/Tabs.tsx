import React from 'react';
import { cn } from './Button';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTabId: string;
  onTabChange: (id: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTabId,
  onTabChange,
  className,
}) => {
  return (
    <div className={cn('flex border-b border-white/10', className)}>
      {tabs.map((tab) => {
        const isActive = activeTabId === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              'px-6 py-3 text-sm font-mono uppercase tracking-wider transition-all relative',
              isActive
                ? 'text-brand-gold'
                : 'text-stone-500 hover:text-stone-300 hover:bg-white/5'
            )}
          >
            {tab.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
            )}
          </button>
        );
      })}
    </div>
  );
};
