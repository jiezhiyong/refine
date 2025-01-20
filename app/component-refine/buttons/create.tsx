import { CreateButtonProps } from '../types';
import { Button } from '~/components-shadcn/button';
import { useCreateButton } from '@refinedev/core';
import { CirclePlus } from 'lucide-react';
import type { FC } from 'react';
import { cn } from '~/utils/cn';

export const CreateButton: FC<CreateButtonProps> = ({
  resource,
  hideText = false,
  accessControl,
  meta,
  onClick,
  children,
  ...props
}) => {
  const { hidden, disabled, label, title, LinkComponent, to, canAccess } = useCreateButton({
    resource,
    accessControl,
    meta,
  });

  if (hidden) return null;

  const disabledNew = disabled || !canAccess?.can;
  return (
    <LinkComponent
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
      <Button disabled={disabledNew} title={title} icon={<CirclePlus />} {...props}>
        {!hideText && (children ?? label)}
      </Button>
    </LinkComponent>
  );
};

CreateButton.displayName = 'CreateButton';
