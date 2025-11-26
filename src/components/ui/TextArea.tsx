import React from 'react';
import { cn } from './Button';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  className,
  label,
  error,
  id,
  ...props
}) => {
  const areaId = id || React.useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={areaId} className="block text-sm font-medium text-slate-300 mb-1.5">
          {label}
        </label>
      )}
      <textarea
        id={areaId}
        className={cn(
          'block w-full rounded-lg border border-slate-700 bg-slate-900/50 text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors p-3',
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
