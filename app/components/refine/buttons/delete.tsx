import { useBack, useDeleteButton, useResourceParams } from '@refinedev/core';
import { Trash2Icon } from 'lucide-react';
import { type FC } from 'react';

import { DeleteButtonProps } from '~/components/refine/types/buttons';
import { Button } from '~/components/ui/button';

import { ConfirmDialog } from '../confirm';

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
  disabled: disabledCustom,
  ...props
}) => {
  const back = useBack();

  const { id } = useResourceParams();
  const defaultOnSuccess = () => {
    if (id) {
      setTimeout(() => {
        back();
      }, 300);
    }
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

  const disabledNew = disabledCustom || disabled || !canAccess?.can;
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
        disabled={disabledNew}
        variant="destructive"
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
