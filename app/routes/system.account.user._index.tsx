import { Prisma, User } from '@prisma/client';
import { BaseRecord, HttpError, useCan, useDeleteMany, useUserFriendlyName } from '@refinedev/core';
import { parseTableParams } from '@refinedev/remix-router';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import dayjs from 'dayjs';
import { useCallback } from 'react';

import { PageError } from '~/components/500';
import { DeleteButton } from '~/components/refine/buttons/delete';
import { EditButton } from '~/components/refine/buttons/edit';
import { ExportButton } from '~/components/refine/buttons/export';
import { TableEasy, TableFilterProps } from '~/components/refine/table';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Badge } from '~/components/ui/badge';
import { Checkbox } from '~/components/ui/checkbox';
import { EnumAction } from '~/constants/action';
import { EnumResource } from '~/constants/resource';
import { EnumRole, rolePriority } from '~/constants/roles';
import { PROVIDER_LIST } from '~/constants/user';
import { type UseTableReturnType } from '~/lib/refinedev-react-table';
import { dataService } from '~/services/data.server';
import { getDefaultTitle } from '~/utils/get-default-title';
import { buildTableParams } from '~/utils/request';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const tableParams = parseTableParams(new URL(request.url).search);

  const include: Prisma.UserInclude = {
    roles: {
      select: {
        role: {
          select: {
            title: true,
          },
        },
      },
    },
    _count: {
      select: {
        posts: true,
      },
    },
  };

  const data = await dataService.findMany<User>(
    'user',
    {
      ...buildTableParams(tableParams),
      orderBy: { updatedAt: 'desc' },
      include,
    },
    { request }
  );

  return { initialData: data, include };
}

export default function UserIndex() {
  const { initialData, include } = useLoaderData<typeof loader>();

  const friendly = useUserFriendlyName();
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: EnumResource.user, action: EnumAction.delete });

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
            resource: EnumResource.user,
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
          createdAt: false,
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
        header="Name"
        accessorKey="name"
        id="name"
        enableHiding
        meta={{
          filterOperator: 'contains',
        }}
        filter={(props: TableFilterProps) => <TableEasy.Filter.Search {...props} title="Search user name" />}
        cell={useCallback(({ row: { original } }: { row: { original: BaseRecord } }) => {
          return (
            <EditButton recordItemId={original.id} asChild>
              <div className="flex items-center gap-2">
                <Avatar className="size-6">
                  <AvatarImage src={original.avatar} alt={original.name || ''} />
                  <AvatarFallback className="border-foreground/10 border">
                    {original.name?.slice(0, 1).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="underline-offset-2 hover:text-green-600 hover:underline">{original.name}</span>
              </div>
            </EditButton>
          );
        }, [])}
      />

      <TableEasy.Column
        header="Roles"
        accessorKey="roles"
        id="roles"
        enableHiding
        cell={({ row: { original } }) => {
          const roles: string[] = original.roles?.map((item: { role: { title: string } }) => item.role.title);
          return <Badge>{roles.sort((a, b) => rolePriority[a] - rolePriority[b]).join(', ')}</Badge>;
        }}
      />

      <TableEasy.Column
        header="Email"
        accessorKey="email"
        id="email"
        enableSorting
        enableHiding
        cell={({ row: { original } }) => original.email}
      />

      <TableEasy.Column
        header="Provider"
        accessorKey="provider"
        id="provider"
        enableSorting
        enableHiding
        cell={({ row: { original } }) => {
          return <Badge variant="outline">{original.provider}</Badge>;
        }}
        filter={(props: TableFilterProps) => (
          <TableEasy.Filter.Radio
            {...props}
            options={PROVIDER_LIST.map((value) => ({
              label: value,
              value,
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
        header="UpdatedAt"
        accessorKey="updatedAt"
        id="updatedAt"
        enableSorting
        enableHiding
        filter={(props: TableFilterProps) => <TableEasy.Filter.DateRangePicker {...props} align="end" />}
        cell={({ row: { original } }) => dayjs(original.updatedAt).format('YYYY-MM-DD HH:mm:ss')}
      />

      <TableEasy.Column
        header="Post Count"
        accessorKey="postCount"
        id="postCount"
        enableHiding
        cell={({ row: { original } }) => original?._count?.posts || '0'}
      />

      <TableEasy.Column
        header="Actions"
        accessorKey="id"
        id="actions"
        cell={({ row: { original } }: { row: { original: BaseRecord } }) => (
          <>
            <EditButton recordItemId={original.id} size="icon" variant="ghost" />
            <DeleteButton
              disabled={original.roles?.some(
                (item: { role: { title: string } }) => item.role.title === EnumRole.administrator
              )}
              recordItemId={original.id}
              size="icon"
              variant="ghost"
              className="text-destructive!"
            />
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
