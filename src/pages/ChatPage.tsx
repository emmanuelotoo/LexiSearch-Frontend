import React, { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { ChatThread } from '../components/lexi/ChatThread';
import { ChatInput } from '../components/lexi/ChatInput';
import { Select } from '../components/ui/Select';
import { Card } from '../components/ui/Card';
import { useChat } from '../hooks/useChat';

export const ChatPage: React.FC = () => {
  const { messages, isLoading, sendMessage } = useChat();
  const [jurisdiction, setJurisdiction] = useState('');

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto w-full px-4 py-6 flex-1 flex flex-col h-[calc(100vh-4rem)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div>
            <h1 className="text-2xl font-bold text-stone-100 font-serif">Legal Assistant</h1>
            <p className="text-sm text-stone-400">Ask complex legal questions and get cited answers.</p>
          </div>
          <div className="w-full md:w-64">
            <Select
              value={jurisdiction}
              onChange={(e) => setJurisdiction(e.target.value)}
              options={[
                { label: 'All Jurisdictions', value: '' },
                { label: 'Federal', value: 'federal' },
                { label: 'California', value: 'california' },
              ]}
            />
          </div>
        </div>

        <div className="flex-1 flex gap-6 overflow-hidden">
          {/* Main Chat Area */}
          <Card className="flex-1 flex flex-col p-0 overflow-hidden bg-brand-surface/20 border-white/5">
            <ChatThread messages={messages} isLoading={isLoading} />
            <div className="p-4 border-t border-white/5 bg-brand-surface/40">
              <ChatInput
                onSend={sendMessage}
                isLoading={isLoading}
                placeholder="Ask a legal question..."
              />
            </div>
          </Card>

          {/* Right Context Panel (Desktop) */}
          <div className="hidden lg:flex flex-col w-80 gap-4">
            <Card className="flex-1 bg-brand-surface/20 border-white/5">
              <h3 className="font-semibold text-stone-300 mb-3 font-serif">Suggested Prompts</h3>
              <div className="space-y-2">
                {[
                  'What are the elements of negligence in CA?',
                  'Summarize the latest ruling on data privacy.',
                  'Draft a motion to dismiss template.',
                ].map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className="w-full text-left text-sm p-2 rounded-sm hover:bg-brand-surface text-stone-400 hover:text-brand-gold transition-colors border border-transparent hover:border-white/5"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </Card>
            
            <Card className="flex-1 bg-brand-surface/20 border-white/5">
              <h3 className="font-semibold text-stone-300 mb-3 font-serif">Sources</h3>
              <p className="text-sm text-stone-500 italic font-serif">
                Sources will appear here when the AI cites cases.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
