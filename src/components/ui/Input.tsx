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
        <label htmlFor={inputId} className="block text-sm font-medium text-slate-300 mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {iconLeft && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            {iconLeft}
          </div>
        )}
        <input
          id={inputId}
          className={cn(
            'block w-full rounded-sm border border-white/10 bg-brand-dark/50 text-stone-100 placeholder-stone-500 focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 transition-all duration-200 font-sans',
            iconLeft ? 'pl-10' : 'pl-3',
            iconRight ? 'pr-10' : 'pr-3',
            error ? 'border-brand-accent/50 focus:border-brand-accent focus:ring-brand-accent/20' : '',
            'py-2.5 text-sm',
            className
          )}
          {...props}
        />
        {iconRight && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
            {iconRight}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
