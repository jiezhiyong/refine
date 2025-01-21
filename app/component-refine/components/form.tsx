import { AutoSaveIndicator, useBack, useParsed, type BaseRecord, type HttpError } from '@refinedev/core';
import type { UseFormReturnType } from '@refinedev/react-hook-form';
import { Undo2 } from 'lucide-react';
import { useRef, type DetailedHTMLProps, type FormHTMLAttributes, type PropsWithChildren } from 'react';
import { type FieldValues } from 'react-hook-form';
import { Button } from '~/components-shadcn/button';
import { Card, CardContent, CardFooter } from '~/components-shadcn/card';
import { Form as FormUI } from '~/components-shadcn/form';
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
  formProps,
  isWatchable,
  saveButtonProps,
  ...props
}: FormProps<TQueryFnData, TError, TVariables, TContext, TData, TResponse, TResponseError>) => {
  const watchable = useRef<boolean>(false);
  const { resource: _resource, action } = useParsed();
  const back = useBack();

  const onBack = action !== 'list' || typeof action !== 'undefined' ? back : undefined;

  if (isWatchable && !watchable.current) {
    watchable.current = true;
    props.watch();
  }

  const onSubmit = props.handleSubmit((_data: TVariables) => {
    props.refineCore.onFinish(props.getValues()).then();
  });

  const { disabled, ...rest } = saveButtonProps || {};
  return (
    <FormUI {...props}>
      <form {...formProps} onSubmit={onSubmit}>
        <Card className="mx-auto border-none px-2 pb-4 pt-8 shadow-none">
          <CardContent className="space-y-4">{props.children}</CardContent>

          <CardFooter className="flex justify-end gap-x-4">
            <SaveButton
              type="submit"
              loading={props.refineCore.formLoading}
              disabled={disabled || !props.formState.isDirty}
              {...rest}
            >
              <AutoSaveIndicator {...props.refineCore.autoSaveProps} />
            </SaveButton>

            {!props.hideCancel && (
              <Button
                icon={<Undo2 />}
                type="button"
                onClick={onBack}
                disabled={props.refineCore.formLoading}
                variant="outline"
              >
                Cancel
              </Button>
            )}
          </CardFooter>
        </Card>
      </form>
    </FormUI>
  );
};
