import React, { forwardRef } from 'react';
import { cn } from './Button';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  className,
  label,
  error,
  id,
  ...props
}, ref) => {
  const areaId = id || React.useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={areaId} className="block text-sm font-mono text-stone-400 mb-1.5 uppercase tracking-wider text-xs">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={areaId}
        className={cn(
          'block w-full rounded-none border border-white/10 bg-brand-dark/50 text-stone-100 placeholder-stone-600 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors p-3 font-mono text-sm',
          error ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : '',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs font-mono text-red-500">{error}</p>}
    </div>
  );
});

TextArea.displayName = 'TextArea';
