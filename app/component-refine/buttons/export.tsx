import { Button, ButtonProps } from '~/components-shadcn/button';
import { useCan, useExport, useExportButton } from '@refinedev/core';
import { Download } from 'lucide-react';

import type { FC } from 'react';

export const ExportButton: FC<ButtonProps> = ({ children, ...props }) => {
  const { label } = useExportButton();
  const { triggerExport } = useExport();
  const { data: canAccess } = useCan({ action: 'export' });

  const disabled = !canAccess?.can;
  return (
    <Button icon={<Download />} onClick={triggerExport} disabled={disabled} {...props}>
      {label}
    </Button>
  );
};

ExportButton.displayName = 'ExportButton';
