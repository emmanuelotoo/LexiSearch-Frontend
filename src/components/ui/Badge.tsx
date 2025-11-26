import React from 'react';
import { cn } from './Button';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'success' | 'warning' | 'danger' | 'info';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const variants = {
    default: 'bg-slate-800 text-slate-300',
    outline: 'bg-transparent border border-slate-700 text-slate-400',
    success: 'bg-emerald-950/50 text-emerald-400 border border-emerald-900/50',
    warning: 'bg-amber-950/50 text-amber-400 border border-amber-900/50',
    danger: 'bg-red-950/50 text-red-400 border border-red-900/50',
    info: 'bg-sky-950/50 text-sky-400 border border-sky-900/50',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
