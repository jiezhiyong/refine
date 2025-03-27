import { DynamicPage } from '@prisma/client';
import { BaseRecord, HttpError, useCan, useDeleteMany, useModal, useUserFriendlyName } from '@refinedev/core';
import { parseTableParams } from '@refinedev/remix-router';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData, useNavigate } from '@remix-run/react';
import dayjs from 'dayjs';
import { EyeIcon } from 'lucide-react';
import { useRef } from 'react';

import { PageError } from '~/components/500';
import { CloneButton } from '~/components/refine/buttons/clone';
import { CreateButton } from '~/components/refine/buttons/create';
import { DeleteButton } from '~/components/refine/buttons/delete';
import { EditButton } from '~/components/refine/buttons/edit';
import { ExportButton } from '~/components/refine/buttons/export';
import { ShowButton } from '~/components/refine/buttons/show';
import { TableEasy, TableFilterProps } from '~/components/refine/table';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { EnumAction } from '~/constants/action';
import { EnumResource } from '~/constants/resource';
import { type UseTableReturnType } from '~/lib/refinedev-react-table';
import { dataService } from '~/services/data.server';
import { getDefaultTitle } from '~/utils/get-default-title';
import { buildTableParams } from '~/utils/request';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const tableParams = parseTableParams(new URL(request.url).search);

  const data = await dataService.findMany<DynamicPage>(
    'dynamicPage',
    { ...buildTableParams(tableParams), orderBy: { updatedAt: 'desc' } },
    { request }
  );

  return { initialData: data };
}

export default function DynamicPageIndex() {
  const { initialData } = useLoaderData<typeof loader>();

  const { mutate: deleteMany } = useDeleteMany();
  const recordsRef = useRef<Partial<DynamicPage>>(undefined);
  const useModalReturn = useModal();
  const friendly = useUserFriendlyName();
  const navigate = useNavigate();

  const { data: deletePermission } = useCan({ resource: EnumResource.dynamicPage, action: EnumAction.delete });

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
            resource: EnumResource.dynamicPage,
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
        header="Path"
        accessorKey="path"
        id="path"
        meta={{
          filterOperator: 'contains',
        }}
        filter={(props: TableFilterProps) => <TableEasy.Filter.Search {...props} title="Search Path" />}
        cell={({ row: { index, original }, table }) => {
          const pageIndex = table.getState().pagination.pageIndex;
          const pageSize = table.getState().pagination.pageSize;

          return (
            <EditButton recordItemId={original.id} asChild>
              <span className="text-muted-foreground inline-block min-w-6">
                {pageIndex * pageSize + index + 1}.&nbsp;
              </span>
              <span className="py-3 underline-offset-2 visited:text-red-600 hover:text-green-600 hover:underline">
                {original.path}
              </span>
            </EditButton>
          );
        }}
      />

      <TableEasy.Column
        header="tableSql"
        accessorKey="tableSql"
        id="tableSql"
        enableHiding
        enableSorting
        cell={({ row: { original } }) => (
          <Popover>
            <PopoverTrigger className="text-link cursor-pointer" asChild>
              <Button variant="ghost" size="icon">
                <EyeIcon className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto">
              <pre className="text-sm">{original.tableSql}</pre>
            </PopoverContent>
          </Popover>
        )}
      />

      <TableEasy.Column
        header="isActive"
        accessorKey="isActive"
        id="isActive"
        enableHiding
        enableSorting
        cell={({ row: { original } }) =>
          original.isActive ? (
            <Badge variant="default" className="bg-green-500">
              Active
            </Badge>
          ) : (
            <Badge variant="outline">Inactive</Badge>
          )
        }
      />

      {/* 汇总展示 enableCreate, enableEdit, enableDelete, enableClone */}
      <TableEasy.Column
        header="Support Actions"
        accessorKey="enableCreate"
        id="enableCreate"
        enableHiding
        cell={({ row: { original } }) => (
          <div className="flex flex-wrap gap-1">
            {original.enableCreate && <Badge>Create</Badge>}
            {original.enableEdit && <Badge>Edit</Badge>}
            {original.enableDelete && <Badge>Delete</Badge>}
            {original.enableClone && <Badge>Clone</Badge>}
          </div>
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
        header="Actions"
        accessorKey="id"
        id="actions"
        cell={({ row: { original } }: { row: { original: DynamicPage } }) => (
          <>
            <ShowButton
              resource={EnumResource.dynamicPage}
              size="icon"
              variant="ghost"
              onClick={() => {
                navigate(`${original.path}`);
              }}
            />
            <EditButton recordItemId={original.id} size="icon" variant="ghost" />
            <CloneButton recordItemId={original.id} size="icon" variant="ghost" />
            <DeleteButton
              recordItemId={original.id}
              size="icon"
              variant="ghost"
              className="text-destructive!"
              onClick={() => {
                recordsRef.current = { id: original.id };
                useModalReturn.show();
              }}
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
