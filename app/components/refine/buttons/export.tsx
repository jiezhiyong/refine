import { useCan, useExport, useExportButton } from '@refinedev/core';
import { Download } from 'lucide-react';
import type { FC } from 'react';

import { Button, ButtonProps } from '~/components/ui/button';
import { EnumAction } from '~/constants/action';

export const ExportButton: FC<ButtonProps> = ({ children, ...props }) => {
  const { label } = useExportButton();
  const { triggerExport } = useExport();
  const { data: canAccess } = useCan({ action: EnumAction.export });

  const disabledNew = !canAccess?.can;
  return (
    <Button disabled={disabledNew} icon={<Download />} onClick={triggerExport} {...props}>
      {label}
    </Button>
  );
};

ExportButton.displayName = 'ExportButton';
