import { useCan, useSaveButton } from '@refinedev/core';
import { CheckCheck } from 'lucide-react';
import type { FC } from 'react';

import { SaveButtonProps } from '~/components/refine/types/buttons';
import { Button } from '~/components/ui/button';

export const SaveButton: FC<SaveButtonProps> = ({
  hideText = false,
  children,
  accessControl,
  access,
  resource,
  recordItemId,
  disabled,
  ...props
}) => {
  const { label } = useSaveButton();
  const { data } = useCan({ resource, action: 'edit', params: { id: recordItemId } });

  const disableNew = !data?.can || disabled;
  return (
    <Button icon={<CheckCheck />} disabled={disableNew} {...props}>
      {!hideText && (children ?? label)}
    </Button>
  );
};

SaveButton.displayName = 'SaveButton';
