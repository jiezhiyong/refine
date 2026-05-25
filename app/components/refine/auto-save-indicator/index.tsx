import { AutoSaveIndicatorElements, BaseRecord, HttpError, useTranslate } from '@refinedev/core';
import dayjs from 'dayjs';
import React from 'react';

import { cn } from '@/lib/utils';

export type AutoSaveIndicatorProps<TData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError> = {
  data?: TData;
  error?: TError | null;
  status: 'pending' | 'error' | 'idle' | 'success';
  elements?: AutoSaveIndicatorElements;
};

export const AutoSaveIndicator: React.FC<AutoSaveIndicatorProps> = ({
  status,
  elements: {
    success = <Message translationKey="autoSave.success" defaultMessage="saved" />,
    error = <Message translationKey="autoSave.error" defaultMessage="auto save failed" />,
    loading = <Message translationKey="autoSave.loading" defaultMessage="saving ..." />,
    idle = <Message translationKey="autoSave.idle" defaultMessage="waiting for changes ..." />,
  } = {},
}) => {
  switch (status) {
    case 'success':
      return <>{success}</>;
    case 'error':
      return <>{error}</>;
    case 'pending':
      return <>{loading}</>;
    default:
      return <>{idle}</>;
  }
};

const Message = ({ translationKey, defaultMessage }: { translationKey: string; defaultMessage: string }) => {
  const translate = useTranslate();

  return (
    <span
      className={cn('text-muted-foreground text-sm', {
        'text-destructive': translationKey === 'autoSave.error',
        'text-green-500': translationKey === 'autoSave.success',
      })}
    >
      {translate(translationKey, defaultMessage)}
      {translationKey === 'autoSave.success' && ` - ${dayjs().format('HH:mm:ss')}`}
    </span>
  );
};
