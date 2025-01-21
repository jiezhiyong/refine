import { AutoSaveIndicatorElements, BaseRecord, HttpError, useTranslate, UseUpdateReturnType } from '@refinedev/core';
import dayjs from 'dayjs';
import React from 'react';

export type AutoSaveIndicatorProps<
  TData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables = {},
> = {
  data?: UseUpdateReturnType<TData, TError, TVariables>['data'];
  error?: UseUpdateReturnType<TData, TError, TVariables>['error'];
  status: UseUpdateReturnType<TData, TError, TVariables>['status'];
  elements?: AutoSaveIndicatorElements;
};

export const AutoSaveIndicator: React.FC<AutoSaveIndicatorProps> = ({
  status,
  elements: {
    success = <Message translationKey="autoSave.success" defaultMessage="saved" />,
    error = <Message translationKey="autoSave.error" defaultMessage="auto save failure" />,
    loading = <Message translationKey="autoSave.loading" defaultMessage="saving..." />,
    idle = <Message translationKey="autoSave.idle" defaultMessage="waiting for changes" />,
  } = {},
}) => {
  switch (status) {
    case 'success':
      return (
        <>
          {success}
          {dayjs().format('HH:mm:ss')}
        </>
      );
    case 'error':
      return <span className="text-destructive">{error}</span>;
    case 'loading':
      return <>{loading}</>;
    default:
      return <>{idle}</>;
  }
};

const Message = ({ translationKey, defaultMessage }: { translationKey: string; defaultMessage: string }) => {
  const translate = useTranslate();

  return <span>{translate(translationKey, defaultMessage)}</span>;
};
