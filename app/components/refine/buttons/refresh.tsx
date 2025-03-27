import { useRefreshButton } from '@refinedev/core';
import { RefreshCwIcon } from 'lucide-react';
import type { FC } from 'react';

import { RefreshButtonProps } from '~/components/refine/types/buttons';
import { Button } from '~/components/ui/button';

export const RefreshButton: FC<RefreshButtonProps> = ({
  resource,
  recordItemId,
  hideText = false,
  dataProviderName,
  children,
  ...props
}) => {
  const { onClick, label, loading } = useRefreshButton({
    resource,
    id: recordItemId,
    dataProviderName,
  });

  return (
    <Button onClick={onClick} loading={loading} icon={<RefreshCwIcon />} {...props}>
      {!hideText && (children ?? label)}
    </Button>
  );
};

RefreshButton.displayName = 'RefreshButton';
