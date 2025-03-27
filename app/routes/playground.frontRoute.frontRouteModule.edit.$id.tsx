import { zodResolver } from '@hookform/resolvers/zod';
import { FrontRouteModule, FrontRouteProject } from '@prisma/client';
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
import { schemaFrontRouteModule, schemaJson } from '~/zod';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

type TLoaderData = FrontRouteModule & { project: { title: string } };

export async function loader({ request, params }: LoaderFunctionArgs) {
  const [myIssues, { data: projectList }, initialData] = await Promise.all([
    tyServer.getMyIssues<TyIssues[]>(request),
    dataService.findMany<FrontRouteProject>('frontRouteProject', { select: { id: true, title: true } }, { request }),
    dataService.findUniqueOrThrow<TLoaderData>(
      'frontRouteModule',
      {
        where: { id: params?.id || '' },
        include: {
          project: {
            select: {
              title: true,
            },
          },
        },
      },
      { request }
    ),
  ]);

  return {
    myIssues,
    projectList,
    initialData,
  };
}

// UI
export default function FrontRouteModuleEdit() {
  const { initialData, myIssues, projectList } = useLoaderData<typeof loader>();
  return <FrontRouteModuleForm initialData={initialData} myIssues={myIssues} projectList={projectList} />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}

// 过滤数据，只保留 formSchema 中定义的字段
const filterFormData = (data: Partial<FrontRouteModule> | undefined) => {
  return {
    projectId: data?.projectId || '',
    title: data?.title || '',
    description: data?.description || '',
    global: data?.global ? JSON.stringify(data?.global, null, 2) : '',
    pathReplaceModule: data?.pathReplaceModule || '',
    pathReplaceProject: data?.pathReplaceProject || '',
    issueId: '',
  };
};

/**
 * 编辑、新增
 */
const schemaFrontRouteModuleNew = schemaFrontRouteModule.extend({
  issueId: z.string().nonempty({ message: 'Issue is required' }),
  global: schemaJson.optional().nullable(),
});
type TSchemaFrontRouteModuleNew = z.infer<typeof schemaFrontRouteModuleNew>;

export const FrontRouteModuleForm = ({
  className,
  redirect = EnumAction.list,
  initialData,
  action,
  myIssues = [],
  projectList,
}: {
  className?: string;
  redirect?: RedirectAction;
  initialData?: TLoaderData;
  action?: FormAction;
  myIssues?: TyIssues[];
  projectList: FrontRouteProject[];
}) => {
  const { formAction, id = initialData?.id, identifier } = useResourceParams({ action });
  const defaultValues = filterFormData(initialData);
  const form = useForm<TSchemaFrontRouteModuleNew>({
    resolver: zodResolver(schemaFrontRouteModuleNew),
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
  async function deployApply<T>(values: Partial<TSchemaFrontRouteModuleNew> & { param: string }): Promise<T> {
    const { issueId, param, ...rest } = values || {};

    const operateTypeMap: Record<string, OperateTypeEnum> = {
      [EnumAction.create]: OperateTypeEnum.ADD,
      [EnumAction.edit]: OperateTypeEnum.MODIFY,
    };

    const dataPrevious = pick(defaultValues, Object.keys(rest) as (keyof TSchemaFrontRouteModuleNew)[]);
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

  const beforeSubmit = useCallback(async (val: TSchemaFrontRouteModuleNew) => {
    const changedValues = getChangedValues(val, defaultValues);
    if (changedValues.global) {
      changedValues.global = JSON.parse(changedValues.global);
    }
    const values = dropEmptyKey(changedValues);

    try {
      const res = await deployApply<string>({
        ...values,
        param: `frontRoute:${initialData?.project?.title}:${val.title}`,
      });
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
      <Field {...form} name="projectId" label="Project">
        <Combobox
          options={projectList.map((project) => ({
            label: project.title,
            value: project.id,
          }))}
        />
      </Field>

      <Field {...form} name="title" label="Title">
        <Input />
      </Field>

      <Field {...form} name="pathReplaceModule" label="Path Replace Module">
        <Input className="xl:w-1/2" />
      </Field>

      <Field {...form} name="pathReplaceProject" label="Virtual Path">
        <Input placeholder={initialData?.project?.title} />
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
const schemaFrontRouteModuleDelete = z.object({
  issueId: z.string().nonempty({ message: 'Issue is required' }),
});
type TSchemaFrontRouteModuleDelete = z.infer<typeof schemaFrontRouteModuleDelete>;

const FrontRouteModuleDeleteForm = ({
  records,
  formModalClose,
  className,
  tableResetRowSelection,
}: {
  records: TFrontRouteModuleDeleteRecord[];
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
  const form = useForm<TSchemaFrontRouteModuleDelete>({
    resolver: zodResolver(schemaFrontRouteModuleDelete),
    mode: 'onChange',
    warnWhenUnsavedChanges: false,
    refineCoreProps: {
      resource: identifier,
      action: EnumAction.edit,
      id,
    },
  });

  // 配置发布申请
  async function deployApply<T>(values: TSchemaFrontRouteModuleDelete & { param: string; id: BaseKey }): Promise<T> {
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

  // 提交前修改数据
  const beforeSubmit = useCallback(async (values: TSchemaFrontRouteModuleDelete) => {
    try {
      const bulkPromise: Promise<string>[] = [];
      records.forEach((record) => {
        bulkPromise.push(
          deployApply<string>({ ...values, param: `frontRoute:${record.projectTitle}:${record.title}`, id: record.id })
        );
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
export type TFrontRouteModuleDeleteRecord = { id: BaseKey; title: string; projectTitle: string };
export function FrontRouteModuleDeleteFormModal(
  props: useModalReturnType & { records: TFrontRouteModuleDeleteRecord[]; tableResetRowSelection?: () => void }
) {
  const { visible, close, records, tableResetRowSelection } = props;
  return (
    <Dialog open={visible} onOpenChange={close}>
      <DialogContent>
        <DialogHeader className="text-destructive border-b pb-4">
          <DialogTitle>删除项目</DialogTitle>
          <DialogDescription>请选择关联需求，推送配置发布申请</DialogDescription>
        </DialogHeader>

        <FrontRouteModuleDeleteForm
          className="p-0"
          formModalClose={close}
          records={records}
          tableResetRowSelection={tableResetRowSelection}
        />
      </DialogContent>
    </Dialog>
  );
}
