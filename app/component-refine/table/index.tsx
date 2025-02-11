import { PopoverContentProps } from '@radix-ui/react-popover';
import { BaseOption, BaseRecord, HttpError, useTranslate } from '@refinedev/core';
import {
  CellContext,
  Column,
  ColumnDef,
  ColumnDefTemplate,
  ColumnMeta,
  flexRender,
  TableOptionsResolved,
} from '@tanstack/react-table';
import React, { FC, ReactElement, useCallback, useMemo } from 'react';

import { TableBody, TableCell, TableHead, TableHeader, TableRow, Table as TableUi } from '~/components-shadcn/table';
import { DEFAULT_PAGE_SIZE } from '~/config';
import { useTable, UseTableProps, UseTableReturnType } from '~/lib/refinedev-react-table';
import { TAny } from '~/types';

import { Loader } from '../components/loader';
import { DeleteProvider } from '../providers';

import { RowAction, RowActions } from './actions';
import { CloneAction } from './actions/clone';
import { DeleteAction } from './actions/delete';
import { EditAction } from './actions/edit';
import { ShowAction } from './actions/show';
import { TableFilterDateRangePickerFilter, TableFilterDropdown, TableFilterSearchColumn } from './fields';
import { CheckAll } from './fields/checkall';
import { Pagination } from './fields/pagination';
import { SortAction } from './fields/sort';
import { TableFilterRadio } from './fields/table-filter-radio';
import { DataTableToolbar } from './toolbar';

export type TableListFilterOption = BaseOption & {
  icon?: React.ComponentType<{ className?: string }>;
};

export type TableFilterProps<TData extends BaseRecord = BaseRecord> = {
  column: Column<TData>;
  title?: string;
  numberOfMonths?: number;
  align?: PopoverContentProps['align'];
  options?: TableListFilterOption[];
};

export type ColumnProps<
  TData extends BaseRecord = BaseRecord,
  TValue = unknown,
  TError extends HttpError = HttpError,
> = {
  id: string;
  accessorKey: string;
  enableSorting?: boolean;
  enableHiding?: boolean;
  header?:
    | string
    | FC<{
        table: UseTableReturnType<TData, TError>;
      }>;
  cell?: ColumnDefTemplate<CellContext<TData, TValue>>;
  children?: ReactElement;
  filter?: FC<TableFilterProps<TData>>;
  meta?: ColumnMeta<TData, TValue>;
};

type CustomColumnDef<TData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError> = ColumnDef<
  TData,
  TError
> &
  Pick<ColumnProps<TData, TError>, 'filter'>;

export type TableProps<TData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError> = Partial<
  UseTableProps<TData, TError, TData>
> & {
  children?: ReactElement<ColumnProps<TData, TError>>[];
  showHeader?: boolean;
  toolbar?: React.ReactNode;
};

export function Table<
  TQueryFnData extends BaseRecord = BaseRecord,
  TData extends BaseRecord = TQueryFnData,
  TError extends HttpError = HttpError,
>({ children, showHeader = true, columns = [], refineCoreProps, toolbar, ...props }: TableProps<TData, TError>) {
  const t = useTranslate();
  const mapColumn = useCallback(
    ({
      id,
      accessorKey,
      header,
      enableSorting,
      enableHiding,
      filter,
      cell,
      meta,
    }: ColumnProps<TData, TError>): ColumnDef<TData> => {
      const column: TAny = {
        id,
        header,
        accessorKey,
        enableSorting: enableSorting ?? false,
        enableHiding: enableHiding ?? false,
        enableColumnFilter: true,
        enableResizing: true,
        filter,
        meta,
      };

      if (cell) {
        column['cell'] = cell;
      }

      return column;
    },
    []
  );

  columns = useMemo<ColumnDef<TData>[]>(() => {
    if (Array.isArray(children)) {
      return (children as ReactElement[]).map((value: ReactElement) => value.props).map(mapColumn);
    }

    return [];
  }, [children, mapColumn]);

  const table = useTable({
    columns,
    refineCoreProps: {
      initialPageSize: DEFAULT_PAGE_SIZE,
      ...refineCoreProps,
    },
    ...props,
  });

  const tableOptions = useMemo<TableOptionsResolved<TData>>(() => table.options, [table]);

  const isFilterable = useMemo<boolean>(
    () => Boolean(tableOptions.enableColumnFilters || tableOptions?.enableFilters),
    [tableOptions]
  );

  return (
    <DeleteProvider>
      <div className="mt-1 space-y-4">
        <DataTableToolbar table={table} toolbar={toolbar} />
        <div className="border-border rounded-md border">
          <TableUi>
            {showHeader && (
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      const columnDef = header.column.columnDef as CustomColumnDef<TData, TError>;
                      return (
                        <TableHead key={header.id}>
                          <div className="inline-flex flex-row items-center gap-x-2.5">
                            {header.isPlaceholder
                              ? null
                              : flexRender(header.column.columnDef.header, header.getContext())}
                            {tableOptions.enableSorting && columnDef.enableSorting && (
                              <SortAction column={header.column} />
                            )}
                            {isFilterable &&
                              columnDef?.filter &&
                              columnDef.filter({
                                column: header.column,
                                title: `${columnDef.header} Filter`,
                              })}
                          </div>
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
            )}
            <TableBody>
              {table.refineCore.tableQuery.isLoading ? (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center text-nowrap">
                    <div className="flex flex-row items-center justify-center">
                      <Loader className="text-primary h-4" />
                    </div>
                  </TableCell>
                </TableRow>
              ) : table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row: TAny) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                    {row.getVisibleCells().map((cell: TAny) => (
                      <TableCell key={cell.id} className="text-nowrap">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    {t('No results')}.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </TableUi>
        </div>
        <Pagination table={table} />
      </div>
    </DeleteProvider>
  );
}

function TableColumn<TData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError>(
  props: ColumnProps<TData, TError>
): ReactElement {
  return props.children as ReactElement;
}

Table.Column = TableColumn;
Table.CheckAll = CheckAll;
Table.Actions = RowActions;
Table.Action = RowAction;
Table.EditAction = EditAction;
Table.ShowAction = ShowAction;
Table.CloneAction = CloneAction;
Table.DeleteAction = DeleteAction;
Table.Filter = {
  DateRangePicker: TableFilterDateRangePickerFilter,
  Dropdown: TableFilterDropdown,
  Search: TableFilterSearchColumn,
  Radio: TableFilterRadio,
};

Table.displayName = 'Table';
