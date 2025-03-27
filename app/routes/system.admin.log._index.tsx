import { Log, Prisma } from '@prisma/client';
import { BaseRecord, HttpError, useCan, useDeleteMany, useUserFriendlyName } from '@refinedev/core';
import { parseTableParams } from '@refinedev/remix-router';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import dayjs from 'dayjs';
import { useCallback } from 'react';

import { PageError } from '~/components/500';
import { ExportButton } from '~/components/refine/buttons/export';
import { ShowButton } from '~/components/refine/buttons/show';
import { TableEasy, TableFilterProps } from '~/components/refine/table';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Badge } from '~/components/ui/badge';
import { Checkbox } from '~/components/ui/checkbox';
import { EnumAction } from '~/constants/action';
import { EnumLogType, LOG_STATUS_LIST, LOG_STATUS_MAP } from '~/constants/log';
import { EnumResource } from '~/constants/resource';
import { type UseTableReturnType } from '~/lib/refinedev-react-table';
import { dataService } from '~/services/data.server';
import { TAny } from '~/types/any';
import { getDefaultTitle } from '~/utils/get-default-title';
import { buildTableParams } from '~/utils/request';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const tableParams = parseTableParams(new URL(request.url).search);

  const include: Prisma.LogInclude = {
    operatedBy: { select: { name: true, avatar: true } },
  };
  const args: Prisma.LogFindManyArgs = {
    ...buildTableParams(tableParams),
    orderBy: { updatedAt: 'desc' },
    include,
  };

  const res = await dataService.findMany<Log>('log', args, { request });

  return { initialData: res, include };
}

export default function LogIndex() {
  const { initialData, include } = useLoaderData<typeof loader>();

  const friendly = useUserFriendlyName();
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: EnumResource.log, action: EnumAction.delete });

  const bulkDeleteAction = (table: UseTableReturnType<BaseRecord, HttpError>) => {
    const rows = table.getSelectedRowModel().rows;
    const label = `Delete Selected (${rows.length}) ${friendly('Row', rows.length > 1 ? 'plural' : 'singular')}`;

    return {
      className: 'text-destructive!',
      label,
      disabled: !deletePermission?.can,
      onClick: () => {
        deleteMany(
          {
            resource: EnumResource.log,
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
    <TableEasy
      enableSorting
      enableFilters
      enableHiding
      toolbar={[<ExportButton key="export" />]}
      initialState={{
        sorting: [
          {
            id: 'updatedAt',
            desc: true,
          },
        ],
      }}
      refineCoreProps={{
        queryOptions: { initialData },
        meta: {
          include,
        },
      }}
    >
      <TableEasy.Column
        accessorKey="id"
        id="id"
        header={({ table }) => <TableEasy.CheckAll table={table} options={[bulkDeleteAction(table)]} />}
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

      <TableEasy.Column
        header="Resource"
        accessorKey="resource"
        id="resource"
        meta={{
          filterOperator: 'contains',
        }}
        filter={(props: TableFilterProps) => <TableEasy.Filter.Search {...props} title="Search Resource" />}
        cell={({ row: { index, original }, table }) => {
          const pageIndex = table.getState().pagination.pageIndex;
          const pageSize = table.getState().pagination.pageSize;

          return (
            <ShowButton recordItemId={original.id} asChild>
              <span className="text-muted-foreground inline-block min-w-6">
                {pageIndex * pageSize + index + 1}.&nbsp;
              </span>
              <span className="py-3 capitalize underline-offset-2 hover:text-green-600 hover:underline">
                {original.meta?.parent}.{original.resource}
              </span>
            </ShowButton>
          );
        }}
      />

      <TableEasy.Column
        header="Type"
        accessorKey="action"
        id="action"
        enableSorting
        enableHiding
        cell={({ row: { original } }) => {
          const ids = original.meta?.ids;
          return (
            <Badge variant={LOG_STATUS_MAP[original.action as EnumLogType]?.badge as TAny}>
              {original.action}
              {ids?.length > 1 ? ` x${ids.length}` : ''}
            </Badge>
          );
        }}
        filter={(props: TableFilterProps) => (
          <TableEasy.Filter.Radio
            {...props}
            options={LOG_STATUS_LIST.map((key) => ({
              label: key,
              value: key,
            }))}
          />
        )}
      />

      <TableEasy.Column
        header="CreatedAt"
        accessorKey="createdAt"
        id="createdAt"
        enableSorting
        enableHiding
        filter={(props: TableFilterProps) => <TableEasy.Filter.DateRangePicker {...props} align="end" />}
        cell={({ row: { original } }) => dayjs(original.createdAt).format('YYYY-MM-DD HH:mm:ss')}
      />

      <TableEasy.Column
        header="OperatedBy"
        accessorKey="operatedBy.name"
        id="operatedBy.name"
        enableHiding
        meta={{
          filterOperator: 'contains',
        }}
        filter={(props: TableFilterProps) => <TableEasy.Filter.Search {...props} title="Search OperatedBy" />}
        cell={useCallback(
          ({ row: { original } }: { row: { original: BaseRecord } }) => (
            <div className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage src={original.operatedBy?.avatar} alt={original.operatedBy?.name || ''} />
                <AvatarFallback>{original.operatedBy?.name?.slice(0, 1).toUpperCase()}</AvatarFallback>
              </Avatar>
              <span>{original.operatedBy?.name}</span>
            </div>
          ),
          []
        )}
      />

      <TableEasy.Column
        header="Actions"
        accessorKey="id"
        id="actions"
        cell={({ row: { original } }: { row: { original: BaseRecord } }) => (
          <ShowButton recordItemId={original.id} size="icon" variant="ghost" />
        )}
      />
    </TableEasy>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
