import { DeleteButtonProps } from '../types';
import { Button } from '~/components-shadcn/button';
import { useDeleteButton } from '@refinedev/core';
import { Trash2Icon } from 'lucide-react';
import type { FC } from 'react';
import { ConfirmDialog } from '../components';

export const DeleteButton: FC<DeleteButtonProps> = ({
  resource,
  recordItemId,
  onSuccess,
  mutationMode: mutationModeProp,
  confirmTitle,
  confirmDescription,
  successNotification,
  errorNotification,
  hideText = false,
  accessControl,
  meta,
  dataProviderName,
  confirmOkText,
  confirmCancelText,
  invalidates,
  children,
  ...props
}) => {
  const {
    title,
    label,
    hidden,
    disabled,
    loading,
    confirmTitle: defaultConfirmTitle,
    confirmOkLabel: defaultConfirmOkLabel,
    cancelLabel: defaultCancelLabel,
    onConfirm,
    canAccess,
  } = useDeleteButton({
    resource,
    id: recordItemId,
    dataProviderName,
    invalidates,
    meta,
    onSuccess,
    mutationMode: mutationModeProp,
    errorNotification,
    successNotification,
    accessControl,
  });

  if (hidden) return null;

  const disabledNew = disabled || !canAccess?.can;
  return (
    <ConfirmDialog
      okText={confirmOkText ?? defaultConfirmOkLabel}
      cancelText={confirmCancelText ?? defaultCancelLabel}
      okButtonVariant={'destructive'}
      cancelButtonVariant={'outline'}
      title={confirmTitle ?? defaultConfirmTitle}
      description={confirmDescription}
      loading={loading}
      onConfirm={onConfirm}
    >
      <Button
        variant="destructive"
        disabled={disabledNew}
        title={title}
        loading={loading}
        icon={<Trash2Icon className="mr-2 h-4 w-4" />}
        {...props}
      >
        {!hideText && (children ?? label)}
      </Button>
    </ConfirmDialog>
  );
};

DeleteButton.displayName = 'DeleteButton';
