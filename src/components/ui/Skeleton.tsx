import React from 'react';
import { cn } from './Button';

export const Skeleton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('animate-pulse rounded-none bg-white/5', className)}
      {...props}
    />
  );
};
