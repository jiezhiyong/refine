import { CheckIcon } from '@radix-ui/react-icons';
import { useTranslate } from '@refinedev/core';
import { FilterIcon, FilterX } from 'lucide-react';
import { Badge } from '~/components-shadcn/badge';
import { Button } from '~/components-shadcn/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '~/components-shadcn/command';
import { Popover, PopoverContent, PopoverTrigger } from '~/components-shadcn/popover';
import { Separator } from '~/components-shadcn/separator';
import { cn } from '~/utils/cn';
import type { TableFilterProps } from '..';

export function TableFilterDropdown({ column, title, options, align = 'start' }: TableFilterProps) {
  const t = useTranslate();
  const facets = column?.getFacetedUniqueValues();
  const selectedValues = new Set(column?.getFilterValue() as string[]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="inline-flex flex-row items-center gap-x-0.5">
          <Button
            title={title}
            variant="ghost"
            className={cn('h-5 border-dashed px-1 py-2.5', selectedValues.size > 0 && '!text-green-500')}
            onClick={(e) => {
              if (!selectedValues.size) {
                return;
              }

              e.preventDefault();
              column?.setFilterValue(undefined);
            }}
          >
            {selectedValues.size > 0 ? (
              <FilterX className={cn('h-3.5 w-3.5')} />
            ) : (
              <FilterIcon className={cn('h-3.5 w-3.5')} />
            )}
          </Button>

          {selectedValues?.size > 0 && (
            <>
              <Separator orientation="vertical" className="mr-1 h-4" />
              <Badge variant="secondary" className="cursor-pointer text-nowrap text-xs text-muted-foreground lg:hidden">
                {selectedValues.size}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.size > 2 ? (
                  <Badge variant="secondary" className="cursor-pointer text-nowrap text-xs text-muted-foreground">
                    {selectedValues.size} {t('selected')}
                  </Badge>
                ) : (
                  options
                    ?.filter((option) => selectedValues.has(option.value))
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.value}
                        className="cursor-pointer text-xs text-muted-foreground"
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align={align}>
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>{t('No results found')}.</CommandEmpty>
            <CommandGroup>
              {options?.map((option) => {
                const isSelected = selectedValues.has(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value);
                      } else {
                        selectedValues.add(option.value);
                      }
                      const filterValues = Array.from(selectedValues);
                      column?.setFilterValue(filterValues.length ? filterValues : undefined);
                    }}
                  >
                    <div
                      className={cn(
                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                        isSelected ? 'bg-primary text-primary-foreground' : 'opacity-50 [&_svg]:invisible'
                      )}
                    >
                      <CheckIcon className={cn('h-4 w-4')} />
                    </div>
                    {option.icon && <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
                    <span>{option.label}</span>
                    {facets?.get(option.value) && (
                      <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                        {facets.get(option.value)}
                      </span>
                    )}
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => column?.setFilterValue(undefined)}
                    className="justify-center text-center"
                  >
                    <FilterX size={16} />
                    {t('Clear filters')}
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
