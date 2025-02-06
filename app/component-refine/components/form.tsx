import { useBack, useParsed, type BaseRecord, type HttpError } from '@refinedev/core';
import type { UseFormReturnType } from '@refinedev/react-hook-form';
import { Undo2 } from 'lucide-react';
import { useRef, type DetailedHTMLProps, type FormHTMLAttributes, type PropsWithChildren } from 'react';
import { type FieldValues } from 'react-hook-form';
import { AutoSaveIndicator } from '~/component-refine';
import { Button } from '~/components-shadcn/button';
import { Card, CardContent, CardFooter } from '~/components-shadcn/card';
import { Form as FormUI } from '~/components-shadcn/form';
import { EnumAction } from '~/constants';
import { TAny } from '~/types';
import { cn } from '~/utils';
import { SaveButton } from '../buttons';

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
    modifyingDataBeforeSubmission?: (values: TAny) => TAny;
    className?: string;
    useFormModalClose?: () => void;
    recordItemId?: string;
  };

export const Form = <
  TQueryFnData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables extends FieldValues = FieldValues,
  TContext extends object = Record<string, unknown>,
  TData extends BaseRecord = TQueryFnData,
  TResponse extends BaseRecord = TData,
  TResponseError extends HttpError = TError,
>({
  autoSave,
  modifyingDataBeforeSubmission,
  formProps,
  isWatchable,
  saveButtonProps,
  className,
  useFormModalClose,
  recordItemId,
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

  const onSubmit = props.handleSubmit((_data: TVariables) => {
    const values = props.getValues();
    const data = modifyingDataBeforeSubmission ? modifyingDataBeforeSubmission(values) : values;
    props.refineCore.onFinish(data);

    useFormModalClose?.();
  });

  const { disabled } = saveButtonProps || {};
  return (
    <FormUI {...props}>
      <form {...formProps} onSubmit={onSubmit}>
        <Card className={cn('mx-auto space-y-4 border-none p-8 shadow-none', className)}>
          <CardContent className="space-y-4 p-0">{props.children}</CardContent>

          <CardFooter className="flex gap-x-2 p-0">
            <SaveButton
              type="submit"
              recordItemId={recordItemId}
              loading={props.refineCore.formLoading}
              disabled={disabled || !props.formState.isDirty}
            />

            {!props.hideCancel && (
              <Button
                icon={<Undo2 />}
                type="button"
                onClick={useFormModalClose || onBack}
                disabled={props.refineCore.formLoading}
                variant="outline"
              >
                Cancel
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
