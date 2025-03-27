import { FrontRouteProject, Prisma } from '@prisma/client';
import { BaseRecord, HttpError, useCan, useModal, useUserFriendlyName } from '@refinedev/core';
import { parseTableParams } from '@refinedev/remix-router';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData, useNavigate } from '@remix-run/react';
import dayjs from 'dayjs';
import { Clock, EyeIcon } from 'lucide-react';
import { useCallback, useRef } from 'react';

import { PageError } from '~/components/500';
import { CreateButton } from '~/components/refine/buttons/create';
import { DeleteButton } from '~/components/refine/buttons/delete';
import { EditButton } from '~/components/refine/buttons/edit';
import { ExportButton } from '~/components/refine/buttons/export';
import { ListButton } from '~/components/refine/buttons/list';
import { TableEasy, TableFilterProps } from '~/components/refine/table';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { EnumAction } from '~/constants/action';
import { EnumResource } from '~/constants/resource';
import { EnumRole } from '~/constants/roles';
import { type UseTableReturnType } from '~/lib/refinedev-react-table';
import { FrontRouteProjectDeleteFormModal, TRecord } from '~/routes/playground.frontRoute.frontRouteProject.edit.$id';
import { dataService } from '~/services/data.server';
import { getDefaultTitle } from '~/utils/get-default-title';
import { buildTableParams } from '~/utils/request';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

type TFrontRouteProject = FrontRouteProject & {
  operatedBy: { name: string; avatar: string };
};

export async function loader({ request }: LoaderFunctionArgs) {
  const tableParams = parseTableParams(new URL(request.url).search);

  const include: Prisma.FrontRouteProjectInclude = {
    operatedBy: { select: { name: true, avatar: true } },
  };
  const data = await dataService.findMany<TFrontRouteProject>(
    'frontRouteProject',
    {
      ...buildTableParams(tableParams),
      orderBy: { updatedAt: 'desc' },
      include,
    },
    { request }
  );

  return { initialData: data, include };
}

export default function FrontRouteProjectIndex() {
  const { initialData, include } = useLoaderData<typeof loader>();

  const tableRef = useRef<UseTableReturnType<BaseRecord, HttpError>>(null);
  const recordsRef = useRef<TRecord[]>([]);
  const useModalReturn = useModal();
  const navigate = useNavigate();
  const friendly = useUserFriendlyName();

  const { data: deletePermission } = useCan({ resource: EnumResource.frontRouteProject, action: EnumAction.delete });

  const bulkDeleteAction = (table: UseTableReturnType<BaseRecord, HttpError>) => {
    const rows = table.getSelectedRowModel().rows;
    const label = `Delete Selected (${rows.length}) ${friendly('Row', rows.length > 1 ? 'plural' : 'singular')}`;

    return {
      className: 'text-destructive!',
      label,
      disabled: !deletePermission?.can,
      onClick: () => {
        recordsRef.current = rows.map((row) => ({ id: row.original.id!, title: row.original.title }));
        tableRef.current = table;
        useModalReturn.show();
      },
    };
  };

  return (
    <>
      <FrontRouteProjectDeleteFormModal
        {...useModalReturn}
        records={recordsRef.current}
        tableResetRowSelection={tableRef.current?.resetRowSelection}
      />
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
              <EditButton recordItemId={original.id} asChild>
                <span className="text-muted-foreground inline-block min-w-6">
                  {pageIndex * pageSize + index + 1}.&nbsp;
                </span>
                <span className="py-3 underline-offset-2 visited:text-red-600 hover:text-green-600 hover:underline">
                  {original.title}
                </span>
              </EditButton>
            );
          }}
        />

        <TableEasy.Column
          header="Description"
          accessorKey="description"
          id="description"
          enableHiding
          cell={({ row: { original } }) => original.description || '-'}
        />

        <TableEasy.Column
          header="Global"
          accessorKey="global"
          id="global"
          enableHiding
          cell={({ row: { original } }) => (
            <Popover>
              <PopoverTrigger className="text-link cursor-pointer" asChild>
                <Button variant="ghost" size="icon">
                  <EyeIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto">
                <pre className="text-sm">{JSON.stringify(original.global, null, 2)}</pre>
              </PopoverContent>
            </Popover>
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
          header="OperatedBy"
          accessorKey="operatedBy"
          id="operatedBy"
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
          cell={({ row: { original } }: { row: { original: FrontRouteProject } }) => (
            <>
              <ListButton
                resource={EnumResource.frontRouteModule}
                size="icon"
                variant="ghost"
                meta={{
                  query: {
                    'filters[0][field]': 'project.title',
                    'filters[0][operator]': 'contains',
                    'filters[0][value]': original.title,
                  },
                }}
              />
              <ListButton
                resource={EnumResource.frontRouteModule}
                size="icon"
                variant="ghost"
                icon={<Clock />}
                onClick={() => {
                  navigate(`./history/${original.id}?name=${original.title}`);
                }}
              />
              <EditButton recordItemId={original.id} size="icon" variant="ghost" />
              <DeleteButton
                disabled={original.title === EnumRole.administrator}
                recordItemId={original.id}
                size="icon"
                variant="ghost"
                className="text-destructive!"
                onClick={() => {
                  recordsRef.current = [{ id: original.id, title: original.title }];
                  useModalReturn.show();
                }}
              />
            </>
          )}
        />
      </TableEasy>
    </>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
