import { PopoverContentProps } from '@radix-ui/react-popover';
import { BaseOption, BaseRecord, HttpError, useTranslate } from '@refinedev/core';
import { useTable, UseTableProps } from '@refinedev/react-table';
import {
  CellContext,
  Column,
  ColumnDef,
  ColumnDefTemplate,
  ColumnMeta,
  flexRender,
  Table,
  TableOptionsResolved,
} from '@tanstack/react-table';
import React, { FC, ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { DeleteProvider } from '@/components/refine/providers/deleteProvider';
import { getCommonStyles } from '@/components/refine-ui/data-table/data-table';
import { TableBody, TableCell, TableHead, TableHeader, TableRow, Table as TableUi } from '@/components/ui/table';
import { DEFAULT_PAGE_SIZE } from '@/config/pagination';
import { TAny } from '@/types/any';

import { Loader } from '../loader';

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

export type ColumnProps<TData extends BaseRecord = BaseRecord, TValue = unknown> = {
  id: string;
  accessorKey: string;
  enableSorting?: boolean;
  enableHiding?: boolean;
  header?:
    | string
    | FC<{
        table: Table<TData>;
      }>;
  cell?: ColumnDefTemplate<CellContext<TData, TValue>>;
  children?: ReactElement<TAny>;
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

export function TableEasy<
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

      if (id === 'actions') {
        column.enablePinning = true;
        column.size = 100;
        column.minSize = 80;
      }

      return column;
    },
    []
  );

  columns = useMemo<ColumnDef<TData>[]>(() => {
    if (Array.isArray(children)) {
      return (children as ReactElement<TAny>[]).map((value: ReactElement<TAny>) => value.props).map(mapColumn);
    }

    return [];
  }, [children, mapColumn]);

  const tableResult = useTable({
    columns,
    enablePinning: true,
    refineCoreProps: {
      pagination: {
        pageSize: DEFAULT_PAGE_SIZE,
      },
      ...refineCoreProps,
    },
    ...props,
    initialState: {
      ...props.initialState,
      columnPinning: {
        ...props.initialState?.columnPinning,
        right: ['actions', ...(props.initialState?.columnPinning?.right ?? [])],
      },
    },
  });

  const { reactTable, refineCore } = tableResult;
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const [isOverflowing, setIsOverflowing] = useState({ horizontal: false, vertical: false });

  useEffect(() => {
    const checkOverflow = () => {
      if (!tableRef.current || !tableContainerRef.current) return;

      setIsOverflowing({
        horizontal: tableRef.current.offsetWidth > tableContainerRef.current.clientWidth,
        vertical: tableRef.current.offsetHeight > tableContainerRef.current.clientHeight,
      });
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    const timeoutId = setTimeout(checkOverflow, 100);

    return () => {
      window.removeEventListener('resize', checkOverflow);
      clearTimeout(timeoutId);
    };
  }, [refineCore.tableQuery.data?.data, reactTable.getState().pagination.pageSize]);
  const tableOptions = useMemo<TableOptionsResolved<TData>>(() => reactTable.options, [reactTable]);

  const isFilterable = useMemo<boolean>(
    () => Boolean(tableOptions.enableColumnFilters || tableOptions?.enableFilters),
    [tableOptions]
  );

  const getColumnStyles = useCallback(
    (column: Column<TData>) => {
      const styles = getCommonStyles({ column, isOverflowing });

      if (!column.getIsPinned()) {
        const { width: _width, ...rest } = styles;
        return rest;
      }

      return styles;
    },
    [isOverflowing]
  );

  return (
    <DeleteProvider>
      <div className="mt-1 space-y-4">
        <DataTableToolbar table={reactTable} toolbar={toolbar} />
        <div className="border-border rounded-md border">
          <TableUi ref={tableRef} containerRef={tableContainerRef}>
            {showHeader && (
              <TableHeader>
                {reactTable.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      const columnDef = header.column.columnDef as CustomColumnDef<TData, TError>;
                      return (
                        <TableHead
                          key={header.id}
                          style={getColumnStyles(header.column)}
                        >
                          <div className="inline-flex flex-row items-center gap-x-2.5">
                            {header.isPlaceholder
                              ? null
                              : flexRender(header.column.columnDef.header, header.getContext())}
                            {tableOptions.enableSorting && columnDef.enableSorting && (
                              <SortAction column={header.column} />
                            )}
                            {isFilterable &&
                              columnDef.filter &&
                              (columnDef?.filter({
                                column: header.column,
                                title: `${columnDef.header} Filter`,
                              }) as TAny)}
                          </div>
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
            )}
            <TableBody>
              {refineCore.tableQuery.isLoading ? (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center text-nowrap">
                    <div className="flex flex-row items-center justify-center">
                      <Loader className="text-primary h-4" />
                    </div>
                  </TableCell>
                </TableRow>
              ) : reactTable.getRowModel().rows?.length ? (
                reactTable.getRowModel().rows.map((row: TAny) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                    {row.getVisibleCells().map((cell: TAny) => (
                      <TableCell
                        key={cell.id}
                        className="text-nowrap"
                        style={getColumnStyles(cell.column)}
                      >
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
        <Pagination table={tableResult} />
      </div>
    </DeleteProvider>
  );
}

function TableColumn<TData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError>(
  props: ColumnProps<TData, TError>
): ReactElement<TAny> {
  return props.children as ReactElement<TAny>;
}

TableEasy.Column = TableColumn;
TableEasy.CheckAll = CheckAll;
TableEasy.Actions = RowActions;
TableEasy.Action = RowAction;
TableEasy.EditAction = EditAction;
TableEasy.ShowAction = ShowAction;
TableEasy.CloneAction = CloneAction;
TableEasy.DeleteAction = DeleteAction;
TableEasy.Filter = {
  DateRangePicker: TableFilterDateRangePickerFilter,
  Dropdown: TableFilterDropdown,
  Search: TableFilterSearchColumn,
  Radio: TableFilterRadio,
};

TableEasy.displayName = 'TableEasy';
