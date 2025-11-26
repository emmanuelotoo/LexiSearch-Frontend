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
    default: 'bg-brand-surface text-stone-300 border border-white/10',
    outline: 'bg-transparent border border-stone-700 text-stone-400',
    success: 'bg-emerald-950/30 text-emerald-400 border border-emerald-500/20',
    warning: 'bg-brand-gold/10 text-brand-gold border border-brand-gold/20',
    danger: 'bg-red-950/30 text-red-400 border border-red-500/20',
    info: 'bg-sky-950/30 text-sky-400 border border-sky-500/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-none text-[10px] font-mono uppercase tracking-wider',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
