import { cn } from '~/lib/utils';

export const Empty = ({ message, className }: { message?: string; className?: string }) => {
  return <div className={cn(className)}>{message || '目前没有记录 ...'}</div>;
};
