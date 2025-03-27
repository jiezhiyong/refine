import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { PageError } from '~/components/500';
import { FrontRouteProjectForm } from '~/routes/playground.frontRoute.frontRouteProject.edit.$id';
import { tyServer } from '~/services/ty.server';
import { TyIssues } from '~/types/ty';
import { getDefaultTitle } from '~/utils/get-default-title';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const [myIssues] = await Promise.all([tyServer.getMyIssues<TyIssues[]>(request)]);
  return {
    myIssues,
  };
}

// UI
export default function FrontRouteProjectCreate() {
  const { myIssues } = useLoaderData<typeof loader>();
  return <FrontRouteProjectForm myIssues={myIssues} />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
