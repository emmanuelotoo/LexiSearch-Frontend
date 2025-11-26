import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { CaseSummaryPanel } from '../components/lexi/CaseSummaryPanel';
import { CaseMetadata } from '../components/lexi/CaseMetadata';
import { CaseContentViewer } from '../components/lexi/CaseContentViewer';
import { CaseCitationsPanel } from '../components/lexi/CaseCitationsPanel';
import { ChatThread } from '../components/lexi/ChatThread';
import { ChatInput } from '../components/lexi/ChatInput';
import { Spinner } from '../components/ui/Spinner';
import { useCase } from '../hooks/useCase';
import { useChat } from '../hooks/useChat';

export const CaseViewerPage: React.FC = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const navigate = useNavigate();
  const { caseData, citations, isLoading } = useCase(caseId);
  const { messages, isLoading: isChatLoading, sendMessage } = useChat([
    { id: 'init', role: 'assistant', content: 'I have analyzed this case. Ask me anything about the holding, facts, or reasoning.', createdAt: new Date().toISOString() }
  ]);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex-1 flex items-center justify-center">
          <Spinner className="h-12 w-12" />
        </div>
      </MainLayout>
    );
  }

  if (!caseData) {
    return (
      <MainLayout>
        <div className="flex-1 flex items-center justify-center text-slate-500">
          Case not found.
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="flex flex-col min-h-screen bg-brand-dark">
        {/* Top Navigation Bar */}
        <div className="border-b border-white/10 bg-brand-dark/95 backdrop-blur-md sticky top-16 z-20">
          <div className="max-w-[1800px] mx-auto px-6 py-4">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Search', href: '/search' },
                { label: caseData.title },
              ]}
            />
          </div>
        </div>

        <div className="flex-1 max-w-[1800px] mx-auto w-full px-6 py-8">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-12">
            {/* Main Content Column */}
            <div className="space-y-12">
              <CaseSummaryPanel
                caseData={caseData}
                onSave={() => console.log('Saved case')}
                onAskAI={() => document.getElementById('case-chat-input')?.focus()}
              />
              
              <CaseContentViewer
                contentBlocks={caseData.contentBlocks}
                onHighlightClick={(id) => console.log('Clicked highlight', id)}
              />
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6 xl:sticky xl:top-40 h-fit">
              {/* AI Assistant Panel */}
              <div className="border border-white/10 bg-brand-surface/5 flex flex-col h-[600px]">
                <div className="p-4 border-b border-white/10 flex items-center justify-between bg-brand-dark">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-mono text-xs text-stone-300 uppercase tracking-widest">
                      /Context_Assistant
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 overflow-hidden relative">
                   <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
                   <ChatThread messages={messages} isLoading={isChatLoading} />
                </div>

                <div className="p-4 border-t border-white/10 bg-brand-dark">
                  <ChatInput
                    onSend={sendMessage}
                    isLoading={isChatLoading}
                    placeholder="Query case context..."
                  />
                </div>
              </div>

              <CaseMetadata caseData={caseData} />
              
              <CaseCitationsPanel
                citations={citations}
                onSelectCitation={(c) => navigate(`/cases/${c.id}`)}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
