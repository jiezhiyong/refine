import { zodResolver } from '@hookform/resolvers/zod';
import { FrontRouteProject } from '@prisma/client';
import { BaseKey, FormAction, RedirectAction, useModalReturnType, useResourceParams } from '@refinedev/core';
import { useForm } from '@refinedev/react-hook-form';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { pick } from 'es-toolkit';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

import { PageError } from '~/components/500';
import { CodeEditor } from '~/components/refine/form/code';
import { Combobox } from '~/components/refine/form/combobox';
import { Field } from '~/components/refine/form/field';
import { FormEasy } from '~/components/refine/form/form';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '~/components/ui/dialog';
import { Input } from '~/components/ui/input';
import { EnumAction } from '~/constants/action';
import { useMountEffect } from '~/hooks/use-mount-effect';
import { dataService } from '~/services/data.server';
import { tyServer } from '~/services/ty.server';
import { TAny } from '~/types/any';
import { OperateTypeEnum, TAuditRecord, TDeployServiceBuild, TyIssues } from '~/types/ty';
import { easyAxios } from '~/utils/axios';
import { dropEmptyKey } from '~/utils/drop-empty-key';
import { getRefineQueryOptions } from '~/utils/form';
import { getChangedValues } from '~/utils/get-changed-values';
import { getDefaultTitle } from '~/utils/get-default-title';
import { schemaFrontRouteProject, schemaJson } from '~/zod';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export async function loader({ request, params }: LoaderFunctionArgs) {
  const [myIssues, initialData] = await Promise.all([
    tyServer.getMyIssues<TyIssues[]>(request),
    dataService.findUniqueOrThrow<FrontRouteProject>(
      'frontRouteProject',
      {
        where: { id: params?.id || '' },
      },
      { request }
    ),
  ]);

  return {
    myIssues,
    initialData,
  };
}

// UI
export default function FrontRouteProjectEdit() {
  const { initialData, myIssues } = useLoaderData<typeof loader>();
  return <FrontRouteProjectForm initialData={initialData} myIssues={myIssues} />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}

// 过滤数据，只保留 formSchema 中定义的字段
const filterFormData = (data: Partial<FrontRouteProject> | undefined) => {
  return {
    title: data?.title || '',
    description: data?.description || '',
    global: JSON.stringify(data?.global || {}, null, 2),
    issueId: '',
  };
};

/**
 * 编辑、新增
 */
const schemaFrontRouteProjectNew = schemaFrontRouteProject.extend({
  issueId: z.string().nonempty({ message: 'Issue is required' }),
  global: schemaJson,
});
type TSchemaFrontRouteProjectNew = z.infer<typeof schemaFrontRouteProjectNew>;

export const FrontRouteProjectForm = ({
  className,
  redirect = EnumAction.list,
  initialData,
  action,
  myIssues = [],
}: {
  className?: string;
  redirect?: RedirectAction;
  initialData?: FrontRouteProject;
  action?: FormAction;
  myIssues?: TyIssues[];
}) => {
  const { formAction, id = initialData?.id, identifier } = useResourceParams({ action });
  const defaultValues = filterFormData(initialData);
  const form = useForm<TSchemaFrontRouteProjectNew>({
    resolver: zodResolver(schemaFrontRouteProjectNew),
    defaultValues,
    warnWhenUnsavedChanges: true,
    mode: 'onChange',
    refineCoreProps: {
      resource: identifier,
      action: formAction,
      id,
      queryOptions: getRefineQueryOptions(defaultValues),
      redirect,
    },
  });

  // 配置发布申请
  async function deployApply<T>(values: Partial<TSchemaFrontRouteProjectNew> & { param: string }): Promise<T> {
    const { issueId, param, ...rest } = values || {};

    const operateTypeMap: Record<string, OperateTypeEnum> = {
      [EnumAction.create]: OperateTypeEnum.ADD,
      [EnumAction.edit]: OperateTypeEnum.MODIFY,
    };

    const dataPrevious = pick(defaultValues, Object.keys(rest) as (keyof TSchemaFrontRouteProjectNew)[]);
    if (dataPrevious.global) {
      dataPrevious.global = JSON.parse(dataPrevious.global);
    }

    const params: TDeployServiceBuild & TAuditRecord = {
      operateType: operateTypeMap[formAction],
      issueId: issueId!,
      contentJsonObject: rest,
      configType: 'frontRoute',
      param,
      resource: identifier,
      id: initialData?.id,
      data: rest,
      dataPrevious,
    };

    const { data: res } = await easyAxios.post(`/api/ty/deployServiceBuild`, params);
    return res.data;
  }

  // 提交前修改数据
  const beforeSubmit = useCallback(async (val: TSchemaFrontRouteProjectNew) => {
    const changedValues = getChangedValues(val, defaultValues);
    if (changedValues.global) {
      changedValues.global = JSON.parse(changedValues.global);
    }
    const values = dropEmptyKey(changedValues);

    try {
      const res = await deployApply<string>({ ...values, param: `frontRoute:${val.title}` });
      toast.success('配置发布申请推送成功', { description: res || '...' });
      return null;
    } catch (error: TAny) {
      toast.error('配置发布申请执行错误', { description: error?.message || 'unknwon' });
      throw error;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormEasy {...form} beforeSubmit={beforeSubmit} className={className} recordItemId={initialData?.id}>
      <Field {...form} name="title" label="Title">
        <Input />
      </Field>

      <Field {...form} name="description" label="Description">
        <Input className="xl:w-1/2" />
      </Field>

      <Field {...form} name="global" label="Global">
        <CodeEditor language="json" />
      </Field>

      <Field {...form} name="issueId" label="IssueId">
        <Combobox
          options={myIssues.map((issue) => ({
            label: `${issue.issueId} - ${issue.title}`,
            value: String(issue.issueId),
          }))}
        />
      </Field>
    </FormEasy>
  );
};

/**
 * 删除
 */
const schemaFrontRouteProjectDelete = z.object({
  issueId: z.string().nonempty({ message: 'Issue is required' }),
});
type TSchemaFrontRouteProjectDelete = z.infer<typeof schemaFrontRouteProjectDelete>;

const FrontRouteProjectDeleteForm = ({
  records,
  formModalClose,
  className,
  tableResetRowSelection,
}: {
  records: TRecord[];
  formModalClose: () => void;
  className?: string;
  tableResetRowSelection?: () => void;
}) => {
  const [myIssues, setMyIssues] = useState<TyIssues[]>([]);
  useMountEffect(async () => {
    const { data: res } = await easyAxios.post(`/api/ty/getMyIssues`);
    setMyIssues(res.data);
  });

  const { id = records?.[0]?.id, identifier } = useResourceParams();
  const form = useForm<TSchemaFrontRouteProjectDelete>({
    resolver: zodResolver(schemaFrontRouteProjectDelete),
    warnWhenUnsavedChanges: false,
    mode: 'onChange',
    refineCoreProps: {
      resource: identifier,
      action: EnumAction.edit,
      id,
    },
  });

  // 配置发布申请
  async function deployApply<T>(values: TSchemaFrontRouteProjectDelete & { param: string; id: BaseKey }): Promise<T> {
    const { issueId, param, id } = values || {};

    const params: TDeployServiceBuild & TAuditRecord = {
      operateType: OperateTypeEnum.DELETE,
      issueId,
      contentJsonObject: {},
      configType: 'frontRoute',
      param,
      resource: identifier,
      id,
    };

    const { data: res } = await easyAxios.post(`/api/ty/deployServiceBuild`, params);
    return res.data;
  }

  const beforeSubmit = useCallback(async (values: TSchemaFrontRouteProjectDelete) => {
    try {
      const bulkPromise: Promise<string>[] = [];
      records.forEach((record) => {
        bulkPromise.push(deployApply<string>({ ...values, param: `frontRoute:${record.title}`, id: record.id }));
      });
      const res = await Promise.all(bulkPromise);
      toast.success('配置发布申请推送成功', { description: res[0] || '...' });
      tableResetRowSelection?.();
    } catch (error: TAny) {
      toast.error('配置发布申请执行错误', { description: error?.message || 'unknwon' });
    }

    return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormEasy
      {...form}
      beforeSubmit={beforeSubmit}
      className={className}
      recordItemId={records?.[0]?.id}
      formModalClose={formModalClose}
    >
      <Field {...form} name="issueId" label="IssueId">
        <Combobox
          popoverProps={{ modal: Boolean(formModalClose) }}
          options={myIssues?.map((issue) => ({
            label: `${issue.issueId} - ${issue.title}`,
            value: String(issue.issueId),
          }))}
        />
      </Field>
    </FormEasy>
  );
};
export type TRecord = { id: BaseKey; title: string };
export function FrontRouteProjectDeleteFormModal(
  props: useModalReturnType & { records: TRecord[]; tableResetRowSelection?: () => void }
) {
  const { visible, close, records, tableResetRowSelection } = props;
  return (
    <Dialog open={visible} onOpenChange={close}>
      <DialogContent>
        <DialogHeader className="text-destructive border-b pb-4">
          <DialogTitle>删除项目</DialogTitle>
          <DialogDescription>请选择关联需求，推送配置发布申请</DialogDescription>
        </DialogHeader>

        <FrontRouteProjectDeleteForm
          className="p-0"
          formModalClose={close}
          records={records}
          tableResetRowSelection={tableResetRowSelection}
        />
      </DialogContent>
    </Dialog>
  );
}
