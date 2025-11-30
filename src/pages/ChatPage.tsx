import React, { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { ChatThread } from '../components/lexi/ChatThread';
import { ChatInput } from '../components/lexi/ChatInput';
import { Select } from '../components/ui/Select';
import { useChat } from '../hooks/useChat';

export const ChatPage: React.FC = () => {
  const { messages, isLoading, sendMessage } = useChat();
  const [jurisdiction, setJurisdiction] = useState('');

  return (
    <MainLayout>
      <div className="fixed top-16 left-0 right-0 bottom-16 md:bottom-0 bg-brand-dark z-30 flex flex-col">
        {/* Header Bar */}
        <div className="border-b border-white/10 bg-brand-dark/95 backdrop-blur-md z-10">
          <div className="max-w-[1800px] mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <h1 className="font-sans text-sm text-stone-300 font-medium tracking-wide">
                AI Legal Counsel
              </h1>
            </div>
            
            <div className="w-64">
              <Select
                value={jurisdiction}
                onChange={(e) => setJurisdiction(e.target.value)}
                options={[
                  { label: 'All Jurisdictions', value: '' },
                  { label: 'Federal', value: 'federal' },
                  { label: 'California', value: 'california' },
                ]}
                className="h-8 text-xs bg-brand-surface/20 border-white/10"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden max-w-[1800px] mx-auto w-full">
          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col relative border-r border-white/10">
            {/* Chat Thread */}
            <div className="flex-1 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
              <ChatThread messages={messages} isLoading={isLoading} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-brand-dark border-t border-white/10">
              <div className="max-w-4xl mx-auto">
                <ChatInput
                  onSend={sendMessage}
                  isLoading={isLoading}
                  placeholder="Ask a legal question or describe your case..."
                />
                <div className="mt-2 flex justify-between text-[10px] text-stone-500 font-medium tracking-wide">
                  <span>Powered by Lexi AI</span>
                  <span>Secure Connection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Context Panel (Desktop) */}
          <div className="hidden xl:flex flex-col w-[400px] bg-brand-surface/5">
            {/* Suggested Prompts Section */}
            <div className="p-6 border-b border-white/10">
              <h3 className="font-sans text-xs text-brand-gold font-bold uppercase tracking-widest mb-6">
                Suggested Inquiries
              </h3>
              <div className="space-y-3">
                {[
                  'What are the elements of negligence in CA?',
                  'Summarize the latest ruling on data privacy.',
                  'Draft a motion to dismiss template.',
                ].map((prompt, idx) => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className="w-full text-left group relative p-4 border border-white/5 hover:border-brand-gold/30 bg-brand-dark/50 transition-all duration-300"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-brand-gold transition-colors" />
                    <span className="text-sm text-stone-400 group-hover:text-stone-200 font-sans transition-colors">
                      {prompt}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Sources Section */}
            {/* Sources Section */}
            <div className="flex-1 p-6">
              <h3 className="font-sans text-xs text-brand-gold font-bold uppercase tracking-widest mb-6">
                Active Citations
              </h3>
              <div className="h-full border border-dashed border-white/10 rounded-sm flex flex-col items-center justify-center text-stone-600 p-8 text-center">
                <span className="text-2xl mb-2 opacity-20">⚖️</span>
                <p className="text-sm text-stone-500 font-medium">No citations loaded</p>
                <p className="text-xs text-stone-600 mt-2 max-w-[200px]">
                  Relevant case law and statutes will appear here during analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
