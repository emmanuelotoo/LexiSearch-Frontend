import React from 'react';
import { cn } from './Button'; // Reusing cn utility

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  className,
  label,
  error,
  iconLeft,
  iconRight,
  id,
  ...props
}) => {
  const inputId = id || React.useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-mono text-stone-400 mb-1.5 uppercase tracking-wider text-xs">
          {label}
        </label>
      )}
      <div className="relative">
        {iconLeft && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-500">
            {iconLeft}
          </div>
        )}
        <input
          id={inputId}
          className={cn(
            'block w-full rounded-none border border-white/10 bg-brand-dark/50 text-stone-100 placeholder-stone-600 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-200 font-mono',
            iconLeft ? 'pl-10' : 'pl-3',
            iconRight ? 'pr-10' : 'pr-3',
            error ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : '',
            'py-2.5 text-sm',
            className
          )}
          {...props}
        />
        {iconRight && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-stone-500">
            {iconRight}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-xs font-mono text-red-500">{error}</p>}
    </div>
  );
};
