import React from 'react';
import { cn } from './Button';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { label: string; value: string }[];
}

export const Select: React.FC<SelectProps> = ({
  className,
  label,
  options,
  id,
  ...props
}) => {
  const selectId = id || React.useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={selectId} className="block text-sm font-medium text-slate-300 mb-1.5">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={cn(
          'block w-full rounded-none border border-white/10 bg-brand-dark text-stone-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold py-2 pl-3 pr-10 font-mono text-sm',
          className
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-brand-dark text-stone-200">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
