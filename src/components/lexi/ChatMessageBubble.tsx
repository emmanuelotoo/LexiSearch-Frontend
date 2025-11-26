import React from 'react';
import { ChatMessage } from '../../types/chat';
import { cn } from '../ui/Button';

interface ChatMessageBubbleProps {
  message: ChatMessage;
  isLast?: boolean;
}

export const ChatMessageBubble: React.FC<ChatMessageBubbleProps> = ({
  message,
  isLast,
}) => {
  const isUser = message.role === 'user';
  const isSystem = message.role === 'system';

  if (isSystem) {
    return (
      <div className="flex justify-center my-4">
        <span className="text-xs text-stone-500 bg-brand-surface/50 px-3 py-1 rounded-full border border-white/5 font-mono uppercase tracking-wider">
          {message.content}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex w-full mb-4',
        isUser ? 'justify-end' : 'justify-start'
      )}
    >
      <div
        className={cn(
          'max-w-[85%] md:max-w-[75%] rounded-sm px-5 py-4 text-sm leading-relaxed shadow-md',
          isUser
            ? 'bg-brand-gold text-brand-dark font-medium rounded-br-none shadow-brand-gold/10'
            : 'bg-brand-surface text-stone-200 rounded-bl-none border border-white/5 shadow-black/20'
        )}
      >
        <div className="whitespace-pre-wrap font-sans">{message.content}</div>
      </div>
    </div>
  );
};
