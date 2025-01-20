import { Table } from '@tanstack/react-table';
import { DataTableViewOptions } from './table-view-options-dropdown';
import { cloneElement, ReactNode, useCallback } from 'react';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  toolbar?: ReactNode;
}

export function DataTableToolbar<TData>({ table, toolbar }: DataTableToolbarProps<TData>) {
  const appendProps = useCallback(
    (child: ReactNode, index?: number) => {
      if (!child || typeof child !== 'object' || !('props' in child)) {
        return child;
      }
      return cloneElement(child as React.ReactElement, { key: index, variant: child.props?.variant || 'outline' });
    },
    [table, toolbar]
  );

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {Array.isArray(toolbar) ? toolbar.map((child, index) => appendProps(child, index)) : appendProps(toolbar)}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
