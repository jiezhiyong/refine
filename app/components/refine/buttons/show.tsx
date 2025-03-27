import { useShowButton } from '@refinedev/core';
import { EyeIcon } from 'lucide-react';
import type { FC } from 'react';

import { ShowButtonProps } from '~/components/refine/types/buttons';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export const ShowButton: FC<ShowButtonProps> = ({
  resource: resourceNameFromProps,
  recordItemId,
  hideText = false,
  accessControl,
  meta,
  children,
  onClick,
  ...props
}) => {
  const { to, label, title, hidden, disabled, LinkComponent, canAccess } = useShowButton({
    resource: resourceNameFromProps,
    id: recordItemId,
    accessControl,
    meta,
  });

  if (hidden) return null;

  const disabledNew = disabled || !canAccess?.can;
  return (
    <LinkComponent
      prefetch="intent"
      viewTransition
      className={cn('visited:text-blue-700!', disabledNew && 'pointer-events-none')}
      to={to}
      replace={false}
      onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
        if (disabledNew) {
          e.preventDefault();
          return;
        }
        if (onClick) {
          e.preventDefault();
          onClick(e);
        }
      }}
    >
      <Button disabled={disabledNew} icon={!props.asChild ? <EyeIcon /> : undefined} title={title} {...props}>
        {!hideText && (children ?? label)}
      </Button>
    </LinkComponent>
  );
};

ShowButton.displayName = 'ShowButton';
