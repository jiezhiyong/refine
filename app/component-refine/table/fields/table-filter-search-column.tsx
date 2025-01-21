import { useTranslate } from '@refinedev/core';
import { FilterIcon, FilterX, Search } from 'lucide-react';
import { Badge } from '~/components-shadcn/badge';
import { Button } from '~/components-shadcn/button';
import { Input } from '~/components-shadcn/input';
import { Popover, PopoverContent, PopoverTrigger } from '~/components-shadcn/popover';
import { Separator } from '~/components-shadcn/separator';
import { cn } from '~/utils';
import type { TableFilterProps } from '..';

export function TableFilterSearchColumn({ column, title, align = 'start' }: TableFilterProps) {
  const selectedValue = column?.getFilterValue() as string;
  const t = useTranslate();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="inline-flex flex-row items-center gap-x-0.5">
          <Button
            title={title}
            variant="ghost"
            className={cn('h-4 border-dashed px-1 py-2.5', selectedValue && 'text-green-500')}
            onClick={(e) => {
              if (!selectedValue) {
                return;
              }

              e.preventDefault();
              column?.setFilterValue(undefined);
            }}
          >
            {selectedValue ? <FilterX className={cn('h-3.5 w-3.5')} /> : <FilterIcon className={cn('h-3.5 w-3.5')} />}
          </Button>

          {selectedValue && (
            <>
              <Separator orientation="vertical" className="mr-1 h-4" />
              <Badge variant="secondary" className="cursor-pointer text-nowrap text-xs text-muted-foreground">
                {selectedValue}
              </Badge>
            </>
          )}
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] overflow-hidden p-0 ring-0" align={align}>
        <div className="relative">
          <div className="flex flex-row items-center bg-popover px-3 text-popover-foreground">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Input
              defaultValue={selectedValue ?? ''}
              onChange={(e) => {
                column?.setFilterValue(e.target.value);
              }}
              className={cn(
                'h-10 rounded-md border-0 bg-transparent py-3 pl-0 text-sm shadow-none outline-none ring-0 placeholder:text-muted-foreground focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50'
              )}
              placeholder={title}
            />
          </div>
          {selectedValue && (
            <>
              <Separator />
              <div className="flex flex-row items-center justify-center p-1">
                <Button
                  variant="ghost"
                  className="h-8 w-full border-dashed px-2"
                  onClick={() => {
                    column?.setFilterValue(undefined);
                  }}
                >
                  <FilterX size={16} />
                  {t('Clear filters')}
                </Button>
              </div>
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
