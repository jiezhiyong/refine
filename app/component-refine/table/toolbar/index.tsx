import { Table } from '@tanstack/react-table';
import { DataTableViewOptions } from './table-view-options-dropdown';
import { ReactNode } from 'react';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  toolbar?: ReactNode;
}

export function DataTableToolbar<TData>({ table, toolbar }: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">{toolbar}</div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
