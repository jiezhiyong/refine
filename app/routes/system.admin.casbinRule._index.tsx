import { CasbinRule, Prisma } from '@prisma/client';
import { BaseRecord, HttpError, useCan, useDeleteMany, useUserFriendlyName } from '@refinedev/core';
import { parseTableParams } from '@refinedev/remix-router';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import dayjs from 'dayjs';

import { PageError } from '~/components/500';
import { CreateButton } from '~/components/refine/buttons/create';
import { DeleteButton } from '~/components/refine/buttons/delete';
import { EditButton } from '~/components/refine/buttons/edit';
import { ExportButton } from '~/components/refine/buttons/export';
import { TableEasy, TableFilterProps } from '~/components/refine/table';
import { Checkbox } from '~/components/ui/checkbox';
import { EnumAction } from '~/constants/action';
import { EnumResource } from '~/constants/resource';
import { EnumRole } from '~/constants/roles';
import { type UseTableReturnType } from '~/lib/refinedev-react-table';
import { dataService } from '~/services/data.server';
import { getDefaultTitle } from '~/utils/get-default-title';
import { buildTableParams } from '~/utils/request';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const tableParams = parseTableParams(new URL(request.url).search);

  const args: Prisma.CasbinRuleFindManyArgs = {
    ...buildTableParams(tableParams),
    orderBy: { v0: 'asc' },
  };

  const res = await dataService.findMany<CasbinRule>('casbinRule', args, { request });

  return { initialData: res };
}

export default function CasbinRuleIndex() {
  const { initialData } = useLoaderData<typeof loader>();

  const friendly = useUserFriendlyName();
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: EnumResource.casbinRule, action: EnumAction.delete });

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
            resource: EnumResource.casbinRule,
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
      toolbar={[<CreateButton key="create" />, <ExportButton key="export" />]}
      initialState={{
        columnVisibility: {
          ptype: false,
          createdAt: false,
          operatedBy: false,
        },
        sorting: [
          {
            id: 'v0',
            desc: false,
          },
        ],
      }}
      refineCoreProps={{
        queryOptions: { initialData },
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
        header="Subject、Role"
        accessorKey="v0"
        id="v0"
        enableSorting
        enableHiding
        filter={(props: TableFilterProps) => <TableEasy.Filter.Search {...props} title="Search Subject、Role" />}
      />

      <TableEasy.Column
        header="Object、User"
        accessorKey="v1"
        id="v1"
        enableSorting
        enableHiding
        filter={(props: TableFilterProps) => <TableEasy.Filter.Search {...props} title="Search Object、User" />}
      />

      <TableEasy.Column
        header="Action"
        accessorKey="v2"
        id="v2"
        enableSorting
        enableHiding
        filter={(props: TableFilterProps) => <TableEasy.Filter.Search {...props} title="Search Action" />}
        cell={({ row: { original } }) => <span className="tracking-wide">{original.v2}</span>}
      />

      <TableEasy.Column
        header="Effect"
        accessorKey="v3"
        id="v3"
        enableSorting
        enableHiding
        filter={(props: TableFilterProps) => <TableEasy.Filter.Search {...props} title="Search Effect" />}
        cell={({ row: { original } }) => original.v3 || '-'}
      />

      <TableEasy.Column enableHiding header="Policy Type" accessorKey="ptype" id="ptype" />

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
        header="Actions"
        accessorKey="id"
        id="actions"
        cell={({ row: { original } }: { row: { original: BaseRecord } }) => (
          <>
            <EditButton recordItemId={original.id} size="icon" variant="ghost" />
            <DeleteButton
              disabled={original.v0 === EnumRole.administrator}
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
