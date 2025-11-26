import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  isLoading,
  iconLeft,
  iconRight,
  children,
  disabled,
  ...props
}) => {
  const variants = {
    primary: 'bg-brand-gold text-brand-dark hover:bg-brand-gold/90 border-transparent shadow-lg shadow-brand-gold/10 font-semibold',
    secondary: 'bg-brand-surface text-stone-200 hover:bg-stone-700 border border-white/5 hover:border-white/10',
    ghost: 'bg-transparent text-stone-400 hover:text-brand-gold hover:bg-brand-gold/5 border-transparent',
    outline: 'bg-transparent text-brand-gold border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/5',
    danger: 'bg-brand-accent/10 text-brand-accent hover:bg-brand-accent/20 border border-brand-accent/20',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs font-medium tracking-wide uppercase',
    md: 'px-5 py-2.5 text-sm font-medium tracking-wide uppercase',
    lg: 'px-8 py-3.5 text-base font-bold tracking-wide uppercase',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 disabled:opacity-50 disabled:cursor-not-allowed border active:scale-95 font-sans',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {!isLoading && iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};
