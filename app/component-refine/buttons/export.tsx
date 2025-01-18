import { ExportButtonProps } from '../types';
import { Button } from '~/components-shadcn/button';
import { Slot } from '@radix-ui/react-slot';
import { CanAccess, useExport, useExportButton } from '@refinedev/core';
import { Download } from 'lucide-react';

import type { FC } from 'react';

export const ExportButton: FC<ExportButtonProps> = ({
  hideText = false,
  resource,
  recordItemId,
  accessControl,
  access,
  children,
  ...props
}) => {
  const { label } = useExportButton();
  const { triggerExport } = useExport();

  const Com = !accessControl?.enabled ? Slot : CanAccess;

  if (accessControl?.hideIfUnauthorized && accessControl.enabled) {
    return null;
  }

  return (
    <Com
      params={{
        id: recordItemId,
      }}
      resource={resource}
      action="export"
      {...access}
    >
      <Button icon={<Download />} onClick={triggerExport} {...props}>
        {!hideText && (children ?? label)}
      </Button>
    </Com>
  );
};

ExportButton.displayName = 'ExportButton';
