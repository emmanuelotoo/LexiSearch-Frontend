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
import { Card } from '../components/ui/Card';
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
      <div className="max-w-[1600px] mx-auto w-full px-4 py-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Search', href: '/search' },
            { label: caseData.title },
          ]}
        />

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_350px] gap-6">
          {/* Main Content Column */}
          <div className="space-y-6">
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
          <div className="space-y-6 xl:sticky xl:top-24 h-fit">
            <Card className="flex flex-col h-[500px] p-0 overflow-hidden border-white/5">
              <div className="p-3 bg-brand-surface border-b border-white/5 font-semibold text-brand-gold text-sm font-serif tracking-wide">
                AI Case Assistant
              </div>
              <ChatThread messages={messages} isLoading={isChatLoading} />
              <div className="p-3 border-t border-white/5 bg-brand-surface/50">
                <ChatInput
                  onSend={sendMessage}
                  isLoading={isChatLoading}
                  placeholder="Ask about this case..."
                />
              </div>
            </Card>

            <CaseMetadata caseData={caseData} />
            
            <CaseCitationsPanel
              citations={citations}
              onSelectCitation={(c) => navigate(`/cases/${c.id}`)}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
