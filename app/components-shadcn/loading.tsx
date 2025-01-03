import { LucideProps, Loader2 } from 'lucide-react';
import React from 'react';
import { cn } from '~/utils/cn';

export const LoadingIcon = React.forwardRef<SVGSVGElement, LucideProps>(({ className, ...props }, ref) => {
  return <Loader2 ref={ref} className={cn('h-4 w-4 animate-spin', className)} {...props} />;
});

LoadingIcon.displayName = 'LoadingIcon';
