import { AlertDialogProps } from '@radix-ui/react-alert-dialog';
import { DeleteButtonValues } from '@refinedev/core';
import { VariantProps } from 'class-variance-authority';
import type { ReactElement } from 'react';

import type { buttonVariants } from '~/components/ui/button';

export type ConfirmDialogProps = AlertDialogProps & {
  title?: string;
  description?: string;
  okIcon?: ReactElement<SVGSVGElement>;
  okIconSide?: 'left' | 'right';
  cancelIconSide?: 'left' | 'right';
  cancelIcon?: ReactElement<SVGSVGElement>;
  okText?: string;
  cancelText?: string;
  loading?: boolean;
  onConfirm: DeleteButtonValues['onConfirm'];
  children?: ReactElement<SVGSVGElement>;
  okButtonVariant?: VariantProps<typeof buttonVariants>['variant'];
  cancelButtonVariant?: VariantProps<typeof buttonVariants>['variant'];
  okButtonSize?: VariantProps<typeof buttonVariants>['size'];
  cancelButtonSize?: VariantProps<typeof buttonVariants>['size'];
};
