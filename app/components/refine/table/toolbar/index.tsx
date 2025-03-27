import { Table } from '@tanstack/react-table';
import { cloneElement, ReactNode, useCallback } from 'react';

import { TAny } from '~/types/any';

import { DataTableViewOptions } from './table-view-options-dropdown';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  toolbar?: ReactNode;
}

export function DataTableToolbar<TData>({ table, toolbar }: DataTableToolbarProps<TData>) {
  const appendProps = useCallback((child: ReactNode, index?: number) => {
    if (!child || typeof child !== 'object' || !('props' in child)) {
      return child;
    }
    return cloneElement(child as React.ReactElement<TAny>, {
      key: index,
      variant: (child.props as TAny)?.variant || 'outline',
    });
  }, []);

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {Array.isArray(toolbar) ? toolbar.map((child, index) => appendProps(child, index)) : appendProps(toolbar)}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
