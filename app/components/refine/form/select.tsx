import type { Content as SelectContentType, SelectProps as SelectCoreProps } from '@radix-ui/react-select';
import { BaseOption } from '@refinedev/core';
import React from 'react';

import { FormControl } from '~/components/ui/form';
import { SelectContent, SelectItem, SelectTrigger, Select as SelectUI, SelectValue } from '~/components/ui/select';

type SelectProps = React.ComponentProps<typeof SelectContentType> &
  SelectCoreProps & {
    placeholder?: string;
    emptyMessage?: string;
    onChange?: (value: string) => void;
    options?: BaseOption[];
  };

export const SelectEasy = ({ ...props }: SelectProps) => {
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  return (
    <SelectUI
      disabled={props.disabled || props.options?.length === 0}
      onValueChange={props.onChange}
      defaultValue={props.value}
      value={props.value}
    >
      <FormControl>
        <SelectTrigger ref={triggerRef} className="sm:w-[500px]">
          <SelectValue placeholder={props.placeholder ?? 'Select'} />
        </SelectTrigger>
      </FormControl>
      <SelectContent
        style={{
          width: triggerRef.current?.offsetWidth,
        }}
      >
        {props.options?.map((option, key: number) => (
          <SelectItem key={key} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectUI>
  );
};

SelectEasy.displayName = 'SelectEasy';
