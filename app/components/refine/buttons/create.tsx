import { useCreateButton } from '@refinedev/core';
import { CirclePlus } from 'lucide-react';
import type { FC } from 'react';

import { CreateButtonProps } from '~/components/refine/types/buttons';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export const CreateButton: FC<CreateButtonProps> = ({
  resource,
  hideText = false,
  accessControl,
  meta,
  onClick,
  children,
  disabled: disabledFromProp,
  ...props
}) => {
  const { hidden, disabled, label, title, LinkComponent, to, canAccess } = useCreateButton({
    resource,
    accessControl,
    meta,
  });

  if (hidden) return null;

  const disabledNew = disabledFromProp || disabled || !canAccess?.can;
  const domCore = (
    <Button disabled={disabledNew} title={title} icon={<CirclePlus />} {...props}>
      {!hideText && (children ?? label)}
    </Button>
  );

  if (props.type === 'submit') {
    return domCore;
  }

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
      {domCore}
    </LinkComponent>
  );
};

CreateButton.displayName = 'CreateButton';
