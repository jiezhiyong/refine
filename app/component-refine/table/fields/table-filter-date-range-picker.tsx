import { BaseRecord, useTranslate } from '@refinedev/core';
import { format } from 'date-fns';
import { FilterIcon, FilterX } from 'lucide-react';
import { useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';

import { Badge } from '~/components-shadcn/badge';
import { Button } from '~/components-shadcn/button';
import { Calendar } from '~/components-shadcn/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '~/components-shadcn/popover';
import { Separator } from '~/components-shadcn/separator';
import { cn } from '~/utils';

import type { TableFilterProps } from '..';

export function TableFilterDateRangePickerFilter<T extends BaseRecord = BaseRecord>({
  column,
  title,
  numberOfMonths = 2,
  align = 'start',
}: Pick<TableFilterProps<T>, 'column' | 'title' | 'numberOfMonths' | 'align'>) {
  const t = useTranslate();

  const [date, setDate] = useState<DateRange | undefined>(() => {
    const values = column?.getFilterValue() as Date[];
    if (values?.length >= 1) {
      return {
        from: values[0],
        to: values[1],
      };
    }
    return {
      from: undefined,
      to: undefined,
    };
  });

  const selectedValues = new Set(column?.getFilterValue() as string[]);

  useEffect(() => {
    if (date) {
      const dates = Object.values(date).filter(Boolean);
      if (dates.length) {
        column?.setFilterValue(dates.map((date: Date | undefined) => (date ? date : '')));
      }
    }
  }, [column, date]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="inline-flex flex-row items-center gap-x-0.5">
          <Button
            title={title}
            variant="ghost"
            className={cn('h-5 px-1 py-2.5', selectedValues.size > 0 && 'text-green-500!')}
            onClick={(e) => {
              if (!selectedValues.size) {
                return;
              }

              e.preventDefault();
              column?.setFilterValue(undefined);
              setDate({ from: undefined, to: undefined });
            }}
          >
            {selectedValues.size > 0 ? (
              <FilterX className={cn('h-3.5 w-3.5')} />
            ) : (
              <FilterIcon className={cn('h-3.5 w-3.5')} />
            )}
          </Button>

          {date?.from ? (
            <>
              <Separator orientation="vertical" className="mr-1 h-4" />
              <Badge variant="secondary" className="text-muted-foreground cursor-pointer text-xs text-nowrap">
                {date.to ? (
                  <>{[format(date.from, 'LLL dd, y'), format(date.to, 'LLL dd, y')].join(' - ')}</>
                ) : (
                  format(date.from, 'LLL dd, y')
                )}
              </Badge>
            </>
          ) : null}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align={align}>
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={new Date()}
          selected={date}
          onSelect={setDate}
          numberOfMonths={numberOfMonths}
        />
        {selectedValues.size > 0 && (
          <>
            <Separator />
            <div className="flex flex-row items-center justify-center p-1">
              <Button
                variant="ghost"
                className="h-8 w-full border-dashed px-2"
                onClick={() => {
                  column?.setFilterValue(undefined);
                  setDate({ from: undefined, to: undefined });
                }}
              >
                <FilterX size={16} />
                {t('Clear filters')}
              </Button>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
