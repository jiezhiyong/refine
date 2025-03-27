import { type BaseRecord, type HttpError, useBack, useParsed } from '@refinedev/core';
import type { UseFormReturnType } from '@refinedev/react-hook-form';
import { t } from 'i18next';
import { Undo2 } from 'lucide-react';
import { type DetailedHTMLProps, type FormHTMLAttributes, type PropsWithChildren, useRef } from 'react';
import { type FieldValues } from 'react-hook-form';

import { AutoSaveIndicator } from '~/components/refine/auto-save-indicator';
import { CreateButton } from '~/components/refine/buttons/create';
import { SaveButton } from '~/components/refine/buttons/save';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardFooter } from '~/components/ui/card';
import { Form as FormUI } from '~/components/ui/form';
import { EnumAction } from '~/constants/action';
import { cn } from '~/lib/utils';
import { TAny } from '~/types/any';

type NativeFormProps = Omit<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'onSubmit'>;

export type FormProps<
  TQueryFnData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables extends FieldValues = FieldValues,
  TContext extends object = Record<string, unknown>,
  TData extends BaseRecord = TQueryFnData,
  TResponse extends BaseRecord = TData,
  TResponseError extends HttpError = TError,
> = PropsWithChildren &
  UseFormReturnType<TQueryFnData, TError, TVariables, TContext, TData, TResponse, TResponseError> & {
    formProps?: NativeFormProps;
    isWatchable?: boolean;
    hideCancel?: boolean;
    autoSave?: boolean;
    beforeSubmit?: (values: TAny) => TAny;
    className?: string;
    formModalClose?: () => void;
    recordItemId?: string | number;
    classNameCardContent?: string;
  };

export const FormEasy = <
  TQueryFnData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables extends FieldValues = FieldValues,
  TContext extends object = Record<string, unknown>,
  TData extends BaseRecord = TQueryFnData,
  TResponse extends BaseRecord = TData,
  TResponseError extends HttpError = TError,
>({
  autoSave,
  beforeSubmit,
  formProps,
  isWatchable,
  saveButtonProps,
  formModalClose,
  recordItemId,
  className,
  classNameCardContent,
  ...props
}: FormProps<TQueryFnData, TError, TVariables, TContext, TData, TResponse, TResponseError>) => {
  const watchable = useRef<boolean>(false);
  const { resource: _resource, action } = useParsed();
  const back = useBack();

  const onBack = action !== EnumAction.list || typeof action !== 'undefined' ? back : undefined;

  if (isWatchable && !watchable.current) {
    watchable.current = true;
    props.watch();
  }

  const onSubmit = props.handleSubmit(async (_data: TVariables) => {
    let values = props.getValues();

    if (beforeSubmit) {
      try {
        values = await beforeSubmit(values);
      } catch (error) {
        return;
      }
    }

    if (values !== null) {
      await props.refineCore.onFinish(values);
    } else {
      (props.refineCore?.redirect as TAny)();
    }

    formModalClose?.();
  });

  const { disabled } = saveButtonProps || {};
  return (
    <FormUI {...props}>
      <form {...formProps} onSubmit={onSubmit}>
        <Card className={cn('space-y-8 border-none p-8 shadow-none', className)}>
          <CardContent className={cn('space-y-4 p-0', classNameCardContent)}>{props.children}</CardContent>

          <CardFooter className="flex gap-x-2 p-0">
            {action === EnumAction.edit ? (
              <SaveButton
                type="submit"
                recordItemId={recordItemId}
                loading={props.refineCore.formLoading}
                disabled={disabled || !props.formState.isDirty}
              />
            ) : (
              <CreateButton
                type="submit"
                loading={props.refineCore.formLoading}
                disabled={disabled || !props.formState.isDirty}
              />
            )}

            {!props.hideCancel && (
              <Button
                icon={<Undo2 />}
                type="button"
                onClick={formModalClose || onBack}
                disabled={props.refineCore.formLoading}
                variant="outline"
              >
                {t('buttons.cancel')}
              </Button>
            )}

            {autoSave && (
              <div className="ml-auto">
                <AutoSaveIndicator {...props.refineCore.autoSaveProps} />
              </div>
            )}
          </CardFooter>
        </Card>
      </form>
    </FormUI>
  );
};
