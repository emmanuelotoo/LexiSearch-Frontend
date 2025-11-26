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
      <div className="max-w-6xl mx-auto w-full px-4 py-6 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-stone-100 font-serif">My Library</h1>
            <p className="text-sm text-stone-400">Manage your saved cases, research notes, and chat history.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" iconLeft="📤">Export All</Button>
            <Button iconLeft="➕">New Note</Button>
          </div>
        </div>

        <Tabs
          activeTabId={activeTab}
          onTabChange={setActiveTab}
          tabs={[
            { id: 'all', label: 'All Items' },
            { id: 'case', label: 'Cases' },
            { id: 'note', label: 'Notes' },
            { id: 'chat', label: 'Chats' },
          ]}
          className="w-full md:w-auto"
        />

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
          <EmptyState
            title="No items found"
            description={activeTab === 'all' ? "You haven't saved anything yet." : `You have no saved ${activeTab}s.`}
            primaryAction={{
              label: 'Search Cases',
              onClick: () => navigate('/search'),
            }}
          />
        )}
      </div>
    </MainLayout>
  );
};
