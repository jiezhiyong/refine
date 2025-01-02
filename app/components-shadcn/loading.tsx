import { LucideProps, RefreshCwIcon } from 'lucide-react';
import React from 'react';
import { cn } from '~/utils/cn';

export const LoadingIcon = React.forwardRef<SVGSVGElement, LucideProps>(({ className, ...props }, ref) => {
  return <RefreshCwIcon ref={ref} className={cn('h-4 w-4 animate-spin', className)} {...props} />;
});

LoadingIcon.displayName = 'LoadingIcon';
