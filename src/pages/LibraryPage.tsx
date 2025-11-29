import React, { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { SavedItemList } from '../components/lexi/SavedItemList';
import { EmptyState } from '../components/lexi/EmptyState';
import { Tabs } from '../components/ui/Tabs';
import { Button } from '../components/ui/Button';
import { useLibrary } from '../hooks/useLibrary';
import { SavedItemType } from '../types/library';
import { useNavigate } from 'react-router-dom';

export const LibraryPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, removeItem, filterByType } = useLibrary();
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredItems = filterByType(activeTab as SavedItemType | 'all');

  return (
    <MainLayout>
      <div className="flex flex-col min-h-screen bg-brand-dark">
        {/* Header */}
        <div className="border-b border-white/10 bg-brand-dark/95 backdrop-blur-md sticky top-16 z-20">
          <div className="max-w-[1800px] mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 bg-brand-gold rounded-full" />
                  <h1 className="font-sans text-sm text-brand-gold font-bold uppercase tracking-widest">
                    Knowledge Base
                  </h1>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-100">
                  Library & Archives
                </h2>
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" className="border-white/10 hover:border-brand-gold/50 text-stone-400 hover:text-brand-gold font-sans text-xs uppercase tracking-wider font-bold">
                  Export All
                </Button>
                <Button className="bg-brand-gold text-brand-dark hover:bg-white font-bold font-sans text-xs uppercase tracking-wider">
                  + New Entry
                </Button>
              </div>
            </div>

            <div className="mt-8">
              <Tabs
                activeTabId={activeTab}
                onTabChange={setActiveTab}
                tabs={[
                  { id: 'all', label: 'All Items' },
                  { id: 'case', label: 'Case Law' },
                  { id: 'note', label: 'Research Notes' },
                  { id: 'chat', label: 'AI Sessions' },
                ]}
                className="w-full md:w-auto border-b-0"
              />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 max-w-[1800px] mx-auto w-full px-6 py-8">
          {filteredItems.length > 0 ? (
            <SavedItemList
              items={filteredItems}
              onDeleteItem={removeItem}
              onSelectItem={(item) => {
                if (item.type === 'case') navigate(`/cases/${item.sourceId}`);
                else console.log('Open item', item);
              }}
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-32 border border-dashed border-white/10 rounded-sm bg-brand-surface/5">
              <EmptyState
                title="Library Empty"
                description={activeTab === 'all' ? "No items saved yet." : `No ${activeTab} items found.`}
                primaryAction={{
                  label: 'Start Research',
                  onClick: () => navigate('/search'),
                }}
              />
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};
