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

export const ChatInput: React.FC<ChatInputProps> = ({
  value,
  onChange,
  onSend,
  isLoading,
  placeholder = 'Ask a follow-up question...',
  disabled,
}) => {
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
    <div className="relative">
      <TextArea
        value={currentValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled || isLoading}
        className="pr-12 min-h-[80px] resize-none"
      />
      <div className="absolute bottom-3 right-3">
        <Button
          size="sm"
          onClick={handleSend}
          disabled={!currentValue.trim() || disabled || isLoading}
          isLoading={isLoading}
          className="h-8 w-8 p-0 rounded-full"
        >
          ↑
        </Button>
      </div>
    </div>
  );
};
