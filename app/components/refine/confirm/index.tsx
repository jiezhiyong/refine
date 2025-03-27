import { t } from 'i18next';
import { CheckIcon, XIcon } from 'lucide-react';
import { FC, isValidElement, useMemo } from 'react';

import { ConfirmDialogProps } from '~/components/refine/types/confirm-dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/components/ui/alert-dialog';
import { LoadingIcon } from '~/components/ui/loading';

export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  children,
  title = 'Are you sure?',
  description = t('deleteAlert'),
  okText = 'Ok',
  cancelText = 'Cancel',
  okButtonVariant = 'default',
  cancelButtonVariant = 'outline',
  loading = false,
  okIconSide = 'left',
  cancelIconSide = 'left',
  onConfirm,
  okIcon,
  cancelIcon,
  open,
  onOpenChange,
  defaultOpen,
}) => {
  const CancelIcon = useMemo(() => {
    if (isValidElement(cancelIcon)) {
      return cancelIcon;
    }

    return <XIcon />;
  }, [cancelIcon]);

  const OkIcon = useMemo(() => {
    if (loading) {
      return <LoadingIcon />;
    }
    if (isValidElement(okIcon)) {
      return okIcon;
    }

    return <CheckIcon />;
  }, [okIcon, loading]);

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant={cancelButtonVariant} disabled={loading}>
            {cancelIconSide === 'left' && CancelIcon}
            {cancelText}
            {cancelIconSide === 'right' && CancelIcon}
          </AlertDialogCancel>
          <AlertDialogAction variant={okButtonVariant} disabled={loading} onClick={onConfirm}>
            {okIconSide === 'left' && OkIcon}
            {okText}
            {okIconSide === 'right' && OkIcon}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

ConfirmDialog.displayName = 'ConfirmDialog';
