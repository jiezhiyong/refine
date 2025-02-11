import { useBack, useDeleteButton } from '@refinedev/core';
import { Trash2Icon } from 'lucide-react';
import { type FC } from 'react';

import { Button } from '~/components-shadcn/button';

import { ConfirmDialog } from '../components';
import { DeleteButtonProps } from '../types';

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
  const back = useBack();

  const defaultOnSuccess = () => {
    setTimeout(() => {
      back();
    }, 300);
  };

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
    onSuccess: onSuccess || defaultOnSuccess,
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
        icon={<Trash2Icon />}
        {...props}
      >
        {!hideText && (children ?? label)}
      </Button>
    </ConfirmDialog>
  );
};

DeleteButton.displayName = 'DeleteButton';
