import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { TextArea } from '../ui/TextArea';

interface ChatInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onSend: (message: string) => void;
  isLoading?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

export const ChatInput = React.forwardRef<HTMLTextAreaElement, ChatInputProps>(({
  value,
  onChange,
  onSend,
  isLoading,
  placeholder = 'Ask a follow-up question...',
  disabled,
}, ref) => {
  const [internalValue, setInternalValue] = useState('');
  
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (isControlled) {
      onChange?.(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const handleSend = () => {
    if (currentValue.trim()) {
      onSend(currentValue);
      if (!isControlled) {
        setInternalValue('');
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative group">
      {/* Input Container */}
      <div className="relative bg-black/20 border border-white/10 focus-within:border-brand-gold/50 transition-colors duration-300">
        {/* Terminal Prompt */}
        <div className="absolute top-4 left-4 font-mono text-brand-gold/50 select-none pointer-events-none">
          &gt;
        </div>

        <TextArea
          ref={ref}
          value={currentValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled || isLoading}
          className="pl-8 pr-14 py-4 min-h-[60px] max-h-[200px] resize-none bg-transparent border-none focus:ring-0 text-stone-200 placeholder:text-stone-600 font-mono text-sm leading-relaxed"
        />

        {/* Action Button */}
        <div className="absolute bottom-2 right-2">
          <Button
            size="sm"
            onClick={handleSend}
            disabled={!currentValue.trim() || disabled || isLoading}
            isLoading={isLoading}
            className="h-8 w-8 p-0 rounded-sm bg-brand-gold/10 text-brand-gold hover:bg-brand-gold hover:text-brand-dark border border-brand-gold/20 transition-all duration-300"
          >
            {isLoading ? '' : '↵'}
          </Button>
        </div>
      </div>
      
      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold group-focus-within:w-full transition-all duration-500 ease-out" />
    </div>
  );
});

ChatInput.displayName = 'ChatInput';
