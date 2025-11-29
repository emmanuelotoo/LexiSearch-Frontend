import React, { useEffect, useRef } from 'react';
import { ChatMessage } from '../../types/chat';
import { ChatMessageBubble } from './ChatMessageBubble';
import { Spinner } from '../ui/Spinner';

interface ChatThreadProps {
  messages: ChatMessage[];
  isLoading?: boolean;
  onRetry?: (messageId: string) => void;
}

export const ChatThread: React.FC<ChatThreadProps> = ({
  messages,
  isLoading,
  onRetry,
}) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg, index) => (
        <ChatMessageBubble
          key={msg.id}
          message={msg}
          isLast={index === messages.length - 1}
        />
      ))}
      
      {isLoading && (
        <div className="flex justify-start mb-4">
          <div className="bg-brand-surface rounded-sm rounded-bl-none px-4 py-3 border border-white/5 flex items-center gap-2 shadow-lg">
            <Spinner className="h-4 w-4 text-brand-gold" />
            <span className="text-xs text-stone-400 font-sans">AI is thinking...</span>
          </div>
        </div>
      )}
      
      <div ref={bottomRef} />
    </div>
  );
};
