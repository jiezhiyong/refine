/* eslint-disable react/prop-types */
import { cloneElement, ReactElement } from 'react';
import { ControllerRenderProps, FieldPath, FieldValues, UseControllerProps } from 'react-hook-form';

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '~/components-shadcn/form';
import { TAny } from '~/types';
import { cn } from '~/utils';

export type FieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = UseControllerProps<TFieldValues, TName> & {
  label?: string;
  description?: string;
  className?: string;
  isCheckbox?: boolean;
  children: ReactElement<{
    field: ControllerRenderProps<TFieldValues, TName>;
  }>;
};

export const Field = (props: FieldProps) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }: { field: TAny }) => {
        return (
          <FormItem
            className={cn(props.className, props.isCheckbox ? 'flex flex-row items-center space-y-0 space-x-3' : '')}
          >
            {!props.isCheckbox && <FormLabel>{props.label}</FormLabel>}
            <FormControl>
              {cloneElement(props.children, {
                ...field,
                ...props.children.props,
              })}
            </FormControl>
            {props.isCheckbox && <FormLabel className="text-sm font-normal">{props.label}</FormLabel>}
            {props.description && <FormDescription>{props.description}</FormDescription>}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
