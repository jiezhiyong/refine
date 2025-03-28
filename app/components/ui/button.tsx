import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import * as React from 'react';

import { cn } from '~/lib/utils';

import { LoadingIcon } from './loading';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90',
        outline: 'border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-8 px-3 py-2 has-[>svg]:px-3',
        sm: 'h-6 rounded-md px-2 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
    icon?: React.ReactElement<SVGSVGElement>;
  };

function Button({
  className,
  variant,
  size,
  icon,
  loading = false,
  asChild = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const Icon = React.useMemo(() => {
    return loading ? <LoadingIcon /> : React.isValidElement(icon) ? icon : null;
  }, [icon, loading]);

  const Comp = asChild ? Slot : 'button';

  const buttonProps = !asChild && {
    ...props,
    'data-slot': 'button',
    disabled,
    className: cn(buttonVariants({ variant, size, className })),
  };

  return (
    <Comp {...buttonProps}>
      {size === 'icon' ? (
        loading ? (
          <Loader2 />
        ) : (
          Icon || children
        )
      ) : (
        <>
          {Icon}
          {children}
        </>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
