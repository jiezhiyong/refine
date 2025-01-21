import { CaretDownIcon, CaretUpIcon } from '@radix-ui/react-icons';
import type { BaseRecord } from '@refinedev/core';
import { cn } from '~/utils';
import type { TableFilterProps } from '..';

export const SortAction = <TData extends BaseRecord = BaseRecord>({
  column,
}: Pick<TableFilterProps<TData>, 'column'>) => {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        column?.toggleSorting(column?.getIsSorted() === 'asc');
      }}
    >
      <div className="inline-flex flex-col">
        <CaretUpIcon className={cn('-mb-1.5 h-5 w-5', column?.getIsSorted() === 'asc' ? '!text-green-500' : '')} />
        <CaretDownIcon className={cn('-mt-1.5 h-5 w-5', column?.getIsSorted() === 'desc' ? '!text-green-500' : '')} />
      </div>
    </div>
  );
};
