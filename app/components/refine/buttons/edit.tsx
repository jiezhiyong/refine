import { useEditButton } from '@refinedev/core';
import { Pencil } from 'lucide-react';
import type { FC } from 'react';

import { EditButtonProps } from '~/components/refine/types/buttons';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export const EditButton: FC<EditButtonProps> = ({
  resource,
  recordItemId,
  hideText = false,
  accessControl,
  meta,
  onClick,
  children,
  ...props
}) => {
  const { hidden, disabled, label, title, LinkComponent, to, canAccess } = useEditButton({
    resource,
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
      className={cn(disabledNew && 'pointer-events-none')}
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
      <Button disabled={disabledNew} icon={!props.asChild ? <Pencil /> : undefined} title={title} {...props}>
        {!hideText && (children ?? label)}
      </Button>
    </LinkComponent>
  );
};

EditButton.displayName = 'EditButton';
