import { FrontRouteProject } from '@prisma/client';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { PageError } from '@/components/500';
import { FrontRouteModuleForm } from '@/routes/playground.frontRoute.frontRouteModule.edit.$id';
import { dataService } from '@/services/data.server';
import { getDefaultTitle } from '@/utils/get-default-title';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const [{ data: projectList }] = await Promise.all([
    dataService.findMany<FrontRouteProject>('frontRouteProject', { select: { id: true, title: true } }, { request }),
  ]);
  return {
    projectList,
  };
}

// UI
export default function FrontRouteModuleCreate() {
  const { projectList } = useLoaderData<typeof loader>();
  return <FrontRouteModuleForm projectList={projectList} />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
