import { CaretSortIcon } from '@radix-ui/react-icons';
import { BaseOption } from '@refinedev/core';
import { Check } from 'lucide-react';
import { useState } from 'react';

import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '~/components/ui/command';
import { FormControl } from '~/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { cn } from '~/lib/utils';
import { TAny } from '~/types/any';

type SelectMultiProps = {
  options: BaseOption[];
  onChange?: (value: BaseOption[]) => void;
  value?: BaseOption[];
  valueFormatInput?: (value: TAny) => BaseOption[];
  valueFormatOutput?: (value: BaseOption[]) => TAny;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  popoverProps?: { modal?: boolean };
};

export const SelectMulti = ({
  options = [],
  onChange,
  disabled,
  placeholder = 'Select...',
  className,
  popoverProps,
  value = [],
  valueFormatInput,
  valueFormatOutput = (v) => v,
}: SelectMultiProps) => {
  const [open, setOpen] = useState(false);

  const formattedValueInput = valueFormatInput ? valueFormatInput(value) : value;
  return (
    <Popover open={open} onOpenChange={setOpen} {...popoverProps}>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            disabled={disabled}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              'flex h-auto min-h-9 w-full justify-between px-3 py-1.5 hover:bg-transparent sm:w-[500px] md:w-[800px]',
              !formattedValueInput.length && 'text-muted-foreground',
              className
            )}
          >
            <div className="flex flex-wrap gap-1">
              {formattedValueInput.length > 0 ? (
                formattedValueInput.map((selected) => (
                  <Badge variant="secondary" key={selected.value}>
                    {options.find((opt) => opt.value === selected.value)?.label}
                  </Badge>
                ))
              ) : (
                <span className="text-muted-foreground">{placeholder}</span>
              )}
            </div>
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>

      <PopoverContent className="w-full max-w-full p-0 sm:w-[400px]">
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => {
              const isSelected = formattedValueInput.find((v) => v.value === option.value);
              return (
                <CommandItem
                  value={option.label || ''}
                  key={option.value}
                  onSelect={() => {
                    const newValue = isSelected
                      ? formattedValueInput.filter((v) => v.value !== option.value)
                      : [...formattedValueInput, option];

                    onChange?.(valueFormatOutput(newValue));
                  }}
                >
                  <Check className={cn('h-4 w-4', isSelected ? 'opacity-100' : 'opacity-0')} />
                  {option.label}
                </CommandItem>
              );
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
