import { cn } from '~/utils/cn';
import { FormField, FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '~/components-shadcn/form';
import { ReactElement, cloneElement } from 'react';
import { ControllerRenderProps, FieldPath, FieldValues, UseControllerProps } from 'react-hook-form';
import { TAny } from '~/types/any';

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
            className={cn(props.className, props.isCheckbox ? 'flex flex-row items-center space-x-3 space-y-0' : '')}
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
