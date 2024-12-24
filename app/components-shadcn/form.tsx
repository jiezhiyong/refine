import { cn } from '~/utils/cn';

const FormItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('space-y-2', className)} {...props} />;
};
FormItem.displayName = 'FormItem';

const FormDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={cn('text-[0.8rem] text-muted-foreground', className)} {...props} />;
};
FormDescription.displayName = 'FormDescription';

const FormMessage = ({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={cn('text-[0.8rem] font-medium text-destructive', className)} {...props}>
      {children}
    </p>
  );
};
FormMessage.displayName = 'FormMessage';

export { FormItem, FormDescription, FormMessage };
