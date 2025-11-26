import React from 'react';
import { cn } from './Button';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  elevated = false,
  interactive = false,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-lg border border-white/5 bg-brand-surface/40 backdrop-blur-sm p-4 md:p-6 transition-all duration-300',
        elevated && 'shadow-xl shadow-black/40 border-brand-gold/10 bg-brand-surface/60',
        interactive && 'cursor-pointer hover:bg-brand-surface/80 hover:border-brand-gold/30 hover:shadow-lg hover:shadow-brand-gold/5 hover:-translate-y-0.5',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
