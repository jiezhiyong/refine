import { AuditRecord, Prisma } from '@prisma/client';
import { BaseRecord, HttpError, useCan, useDeleteMany, useUserFriendlyName } from '@refinedev/core';
import { parseTableParams } from '@refinedev/remix-router';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import dayjs from 'dayjs';
import { useCallback } from 'react';

import { PageError } from '~/components/500';
import { DeleteButton } from '~/components/refine/buttons/delete';
import { ExportButton } from '~/components/refine/buttons/export';
import { ShowButton } from '~/components/refine/buttons/show';
import { TableEasy, TableFilterProps } from '~/components/refine/table';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Badge } from '~/components/ui/badge';
import { Checkbox } from '~/components/ui/checkbox';
import { EnumAction } from '~/constants/action';
import { AUDIT_CHANNEL_LIST } from '~/constants/audit-channel';
import { AUDIT_STATUS_LIST, AUDIT_STATUS_MAP, EnumAuditStatus } from '~/constants/audit-status';
import { LOG_STATUS_LIST } from '~/constants/log';
import { EnumResource } from '~/constants/resource';
import { type UseTableReturnType } from '~/lib/refinedev-react-table';
import { dataService } from '~/services/data.server';
import { getUser } from '~/services/session.server';
import { TAny } from '~/types/any';
import { getDefaultTitle } from '~/utils/get-default-title';
import { buildTableParams } from '~/utils/request';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await getUser(request);
  const tableParams = parseTableParams(new URL(request.url).search);

  const include: Prisma.AuditRecordInclude = {
    operatedBy: { select: { name: true, avatar: true } },
  };
  const args: Prisma.AuditRecordFindManyArgs = {
    ...buildTableParams(tableParams),
    orderBy: { updatedAt: 'desc' },
    include,
    // where: {
    //   operatedById: user?.role === EnumRole.administrator ? undefined : user?.id,
    // },
  };

  const data = await dataService.findMany<AuditRecord>('auditRecord', args, { request });

  return { initialData: data, user, include };
}

export default function AuditRecordIndex() {
  const { initialData, include } = useLoaderData<typeof loader>();
  // const isAdmin = user?.role === EnumRole.administrator;

  const friendly = useUserFriendlyName();
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: EnumResource.auditRecord, action: EnumAction.delete });

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
            resource: EnumResource.auditRecord,
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
        columnVisibility: {
          action: false,
        },
        sorting: [
          {
            id: 'updatedAt',
            desc: true,
          },
        ],
      }}
      refineCoreProps={{
        queryOptions: { initialData },
        // filters: isAdmin ? undefined : { initial: [{ field: 'operatedById', operator: 'eq', value: user?.id }] },
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
        header="Title"
        accessorKey="title"
        id="title"
        meta={{
          filterOperator: 'contains',
        }}
        filter={(props: TableFilterProps) => <TableEasy.Filter.Search {...props} title="Search Title" />}
        cell={({ row: { index, original }, table }) => {
          const pageIndex = table.getState().pagination.pageIndex;
          const pageSize = table.getState().pagination.pageSize;

          return (
            <ShowButton recordItemId={original.id} asChild>
              <span className="text-muted-foreground inline-block min-w-6">
                {pageIndex * pageSize + index + 1}.&nbsp;
              </span>
              <span className="py-3 underline-offset-2 hover:text-green-600 hover:underline">{original.title}</span>
            </ShowButton>
          );
        }}
      />

      <TableEasy.Column
        header="Status"
        accessorKey="status"
        id="status"
        enableSorting
        enableHiding
        cell={({ row: { original } }) => (
          <Badge variant={AUDIT_STATUS_MAP[original.status as EnumAuditStatus]?.badge as TAny}>{original.status}</Badge>
        )}
        filter={(props: TableFilterProps) => (
          <TableEasy.Filter.Dropdown
            {...props}
            options={AUDIT_STATUS_LIST.map((key) => ({
              label: key,
              value: key,
            }))}
          />
        )}
      />

      <TableEasy.Column
        header="Error"
        accessorKey="error"
        id="error"
        cell={({ row: { original } }) => <span className="text-destructive">{original.error || '-'}</span>}
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
            <>
              {original.action}
              {ids?.length > 1 ? ` x${ids.length}` : ''}
            </>
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
        header="Channel"
        accessorKey="channel"
        id="channel"
        enableSorting
        enableHiding
        cell={({ row: { original } }) => original.channel || '-'}
        filter={(props: TableFilterProps) => (
          <TableEasy.Filter.Radio
            {...props}
            options={AUDIT_CHANNEL_LIST.map((key) => ({
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
          <>
            <ShowButton recordItemId={original.id} size="icon" variant="ghost" />
            <DeleteButton recordItemId={original.id} size="icon" variant="ghost" className="text-destructive!" />
          </>
        )}
      />
    </TableEasy>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
