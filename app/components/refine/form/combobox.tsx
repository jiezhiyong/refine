import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { PopoverTrigger } from '@radix-ui/react-popover';
import { BaseOption, BaseRecord, UseSelectReturnType } from '@refinedev/core';
import { ComponentPropsWithoutRef, useState } from 'react';

import { Button } from '~/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '~/components/ui/command';
import { FormControl } from '~/components/ui/form';
import { Popover, PopoverContent } from '~/components/ui/popover';
import { ScrollArea } from '~/components/ui/scroll-area';
import { cn } from '~/lib/utils';
import { TAny } from '~/types/any';

type ComboboxProps = ComponentPropsWithoutRef<typeof Command> &
  Pick<UseSelectReturnType<BaseOption, TAny>, 'options'> & {
    placeholder?: string;
    emptyMessage?: string;
    onChange?: (value: string | number) => void;
    value?: string | number | BaseRecord;
    disabled?: boolean;
    className?: string;
    popoverProps?: { modal?: boolean };
  };

export const Combobox = ({ popoverProps, className, ...props }: ComboboxProps) => {
  const [open, setOpen] = useState(false);

  const getValue = () => {
    if (props.value && typeof props.value === 'object' && 'id' in props.value) {
      return (props.value as BaseRecord).id;
    }

    return props.value;
  };

  const value = getValue();
  return (
    <Popover open={open} onOpenChange={setOpen} {...popoverProps}>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            disabled={props.disabled}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              'flex h-9 w-full justify-between hover:bg-transparent sm:w-[500px]',
              !value && 'text-muted-foreground',
              className
            )}
          >
            {value ? props.options?.find((option) => option.value === value)?.label : (props.placeholder ?? 'Select')}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-full p-0 sm:w-[400px]">
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {props.options?.length > 0 && (
              <CommandGroup heading="Suggestions">
                <ScrollArea className="max-h-52 overflow-y-auto">
                  {props.options?.map((option) => (
                    <CommandItem
                      value={option.label}
                      key={option.value}
                      onSelect={() => {
                        props.onChange?.(option.value);
                        setOpen(false);
                      }}
                    >
                      {option.label}
                      <CheckIcon
                        className={cn('ml-auto h-4 w-4', option.value === value ? 'opacity-100' : 'opacity-0')}
                      />
                    </CommandItem>
                  ))}
                </ScrollArea>
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

Combobox.displayName = 'Combobox';
