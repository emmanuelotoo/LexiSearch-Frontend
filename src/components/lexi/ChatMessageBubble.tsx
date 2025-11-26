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
        'flex w-full mb-6 group',
        isUser ? 'justify-end' : 'justify-start'
      )}
    >
      <div
        className={cn(
          'max-w-[85%] md:max-w-[75%] relative',
          isUser ? 'text-right' : 'text-left'
        )}
      >
        {/* Metadata Header */}
        <div className={cn(
          "flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest mb-2",
          isUser ? "justify-end text-brand-gold opacity-70" : "justify-start text-stone-400 opacity-100"
        )}>
          {isUser ? (
            <>
              <span>User_Input</span>
              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
            </>
          ) : (
            <>
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              <span className="text-brand-gold/80">Lexi_Intelligence</span>
            </>
          )}
        </div>

        {/* Message Content */}
        <div
          className={cn(
            'rounded-sm px-6 py-5 text-sm leading-relaxed border backdrop-blur-sm transition-all duration-300',
            isUser
              ? 'bg-brand-gold/10 border-brand-gold/20 text-stone-200 hover:border-brand-gold/40'
              : 'bg-brand-surface/40 border-white/5 text-stone-300 hover:border-white/10'
          )}
        >
          {/* Decorative Corner for AI messages */}
          {!isUser && (
            <div className="absolute -left-[1px] -top-[1px] w-2 h-2 border-t border-l border-brand-gold/50" />
          )}
          
          <div className="whitespace-pre-wrap font-sans">{message.content}</div>
        </div>
      </div>
    </div>
  );
};
