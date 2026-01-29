import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { BaseRecord, useTranslate } from '@refinedev/core';
import { type UseTableReturnType } from '@refinedev/react-table';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DEFAULT_PAGE_SIZE } from '@/config/pagination';

interface DataTablePaginationProps<TData extends BaseRecord = BaseRecord> {
  table: UseTableReturnType<TData>;
}

export const Pagination = <TData extends BaseRecord = BaseRecord>({ table }: DataTablePaginationProps<TData>) => {
  const t = useTranslate();
  const { reactTable, refineCore } = table;

  return (
    <>
      <div className="sm-gap-y-0 bg-background sticky bottom-4 mt-0! flex flex-col items-center justify-between gap-y-4 pt-4 sm:flex-row">
        <div className="text-muted-foreground flex-1 text-sm">
          {reactTable.getFilteredSelectedRowModel().rows.length} of {reactTable.getFilteredRowModel().rows.length}{' '}
          row(s) selected.
        </div>
        <div className="relative flex flex-col-reverse items-center gap-y-4 space-x-6 sm:flex-row sm:gap-y-0 lg:space-x-8">
          <p className="text-sm font-medium">Total: {refineCore?.tableQuery?.data?.total ?? 0}</p>
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
              value={`${reactTable.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                reactTable.setPageSize(Number(value));
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={reactTable.getState().pagination.pageSize} />
              </SelectTrigger>
              <SelectContent>
                {[DEFAULT_PAGE_SIZE, 30, 40, 50, 100].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-fit items-center justify-center text-sm font-medium">
            Page {reactTable.getState().pagination.pageIndex + 1} of {reactTable.getPageCount()}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => reactTable.setPageIndex(0)}
              disabled={!reactTable.getCanPreviousPage()}
            >
              <span className="sr-only">Go to first page</span>
              <DoubleArrowLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => reactTable.previousPage()}
              disabled={!reactTable.getCanPreviousPage()}
            >
              <span className="sr-only">{t('Go to previous page')}</span>
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => reactTable.nextPage()}
              disabled={!reactTable.getCanNextPage()}
            >
              <span className="sr-only">{t('Go to next page')}</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => reactTable.setPageIndex(reactTable.getPageCount() - 1)}
              disabled={!reactTable.getCanNextPage()}
            >
              <span className="sr-only">{t('Go to last page')}</span>
              <DoubleArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-background fixed bottom-0 m-0! h-4 w-full" />
    </>
  );
};

Pagination.displayName = 'Pagination';
