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
    <div className={cn('flex space-x-1 rounded-lg bg-slate-900/50 p-1 border border-slate-800', className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            'flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-all',
            activeTabId === tab.id
              ? 'bg-slate-800 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
