import { Post } from '@prisma/client';
import { BaseRecord, HttpError, useCan, useDeleteMany, useUserFriendlyName } from '@refinedev/core';
import { parseTableParams } from '@refinedev/remix-router';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import dayjs from 'dayjs';
import { useCallback } from 'react';
import { ExportButton, ShowButton, Table, TableFilterProps } from '~/component-refine';
import { Avatar, AvatarFallback, AvatarImage } from '~/components-shadcn/avatar';
import { Badge } from '~/components-shadcn/badge';
import { Checkbox } from '~/components-shadcn/checkbox';
import { PageError } from '~/components/500';
import { type UseTableReturnType } from '~/lib/refinedev-react-table';
import { dataService } from '~/services/data.server';
import { HandleFunction, LOG_STATUS, LOG_STATUS_MAP, LogStatus, TAny } from '~/types';
import { getDefaultTitle } from '~/utils/get-default-title';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export const handle: HandleFunction = {
  uiTools: () => {
    return <UiTools />;
  },
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const tableParams = parseTableParams(url.search);

  const data = await dataService.getList<Post>({
    ...tableParams,
    resource: 'log',
    meta: {
      include: {
        user: { select: { name: true, avatar: true } },
      },
    },
  });

  return { initialData: data };
}

export default function LogIndex() {
  const { initialData } = useLoaderData<typeof loader>();

  const friendly = useUserFriendlyName();
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: 'log', action: 'delete' });

  const bulkDeleteAction = (table: UseTableReturnType<BaseRecord, HttpError>) => {
    const rows = table.getSelectedRowModel().rows;
    const label = `Delete Selected (${rows.length}) ${friendly('Row', rows.length > 1 ? 'plural' : 'singular')}`;

    return {
      className: '!text-destructive',
      label,
      disabled: !deletePermission?.can,
      onClick: () => {
        deleteMany(
          {
            resource: 'log',
            ids: rows.map((row) => row.original.id!),
          },
          {
            onSuccess: () => {
              table.resetRowSelection();
            },
          }
        );
      },
    };
  };

  return (
    <Table
      enableSorting
      enableFilters
      enableHiding
      initialState={{
        sorting: [
          {
            id: 'createdAt',
            desc: true,
          },
        ],
      }}
      refineCoreProps={{
        queryOptions: { initialData },
        meta: {
          join: [
            {
              field: 'user',
              select: ['name', 'avatar'],
            },
          ],
        },
      }}
    >
      <Table.Column
        accessorKey="id"
        id="id"
        header={({ table }) => <Table.CheckAll table={table} options={[bulkDeleteAction(table)]} />}
        cell={({ row }) => (
          <Checkbox
            className="ml-2"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            key={`checkbox-${row.original.id}`}
          />
        )}
      />

      <Table.Column
        header="Resource"
        accessorKey="resource"
        id="resource"
        meta={{
          filterOperator: 'contains',
        }}
        filter={(props: TableFilterProps) => <Table.Filter.Search {...props} title="Search Resource" />}
        cell={({ row: { index, original }, table }) => {
          const pageIndex = table.getState().pagination.pageIndex;
          const pageSize = table.getState().pagination.pageSize;

          return (
            <ShowButton recordItemId={original.id} asChild>
              <span className="inline-block min-w-8 text-muted-foreground">
                {pageIndex * pageSize + index + 1}.&nbsp;
              </span>
              <span className="py-3 capitalize underline-offset-2 hover:text-green-600 hover:underline">
                {JSON.parse(original.meta).parent}.{original.resource}
              </span>
            </ShowButton>
          );
        }}
      />

      <Table.Column
        header="Type"
        accessorKey="action"
        id="action"
        enableSorting
        enableHiding
        cell={({ row: { original } }) => {
          const ids = JSON.parse(original.meta || '{}').ids;
          return (
            <Badge variant={LOG_STATUS_MAP[original.action as LogStatus]?.badge as TAny}>
              {original.action?.charAt(0)?.toUpperCase() + original.action?.slice(1)}
              {ids?.length > 1 ? ` x${ids.length}` : ''}
            </Badge>
          );
        }}
        filter={(props: TableFilterProps) => (
          <Table.Filter.Radio
            {...props}
            options={Object.entries(LOG_STATUS).map(([key, value]) => ({
              label: key?.charAt(0)?.toUpperCase() + key?.slice(1),
              value,
            }))}
          />
        )}
      />

      <Table.Column
        header="CreatedAt"
        accessorKey="createdAt"
        id="createdAt"
        enableSorting
        enableHiding
        filter={(props: TableFilterProps) => <Table.Filter.DateRangePicker {...props} align="end" />}
        cell={({ row: { original } }) => dayjs(original.createdAt).format('YYYY-MM-DD HH:mm:ss')}
      />

      <Table.Column
        header="Author"
        accessorKey="user.name"
        id="user.name"
        enableHiding
        meta={{
          filterOperator: 'contains',
        }}
        filter={(props: TableFilterProps) => <Table.Filter.Search {...props} title="Search Author" />}
        cell={useCallback(
          ({ row: { original } }: { row: { original: BaseRecord } }) => (
            <div className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage src={original.user?.avatar || ''} alt={original.user?.name || ''} />
                <AvatarFallback>{original.user?.name?.slice(0, 1).toUpperCase()}</AvatarFallback>
              </Avatar>
              <span>{original.user?.name}</span>
            </div>
          ),
          []
        )}
      />

      <Table.Column
        header="Actions"
        accessorKey="id"
        id="actions"
        cell={({ row: { original } }: { row: { original: BaseRecord } }) => (
          <ShowButton recordItemId={original.id} size="icon" variant="ghost" />
        )}
      />
    </Table>
  );
}

function UiTools() {
  return (
    <div className="flex items-center gap-1 text-sm">
      <ExportButton variant="ghost" size="icon" />
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
