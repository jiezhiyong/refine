import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { PageError } from '~/components/500';
import { DynamicPageForm, TDynamicPage } from '~/routes/playground.dashboard.dynamicPage.edit.$id';
import { dataService } from '~/services/data.server';
import { getDefaultTitle } from '~/utils/get-default-title';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export async function loader({ request, params }: LoaderFunctionArgs) {
  const [initialData] = await Promise.all([
    dataService.findUniqueOrThrow<TDynamicPage>('dynamicPage', { where: { id: params?.id || '' } }, { request }),
  ]);

  return {
    initialData,
  };
}

// UI
export default function DynamicPageClone() {
  const { initialData } = useLoaderData<typeof loader>();
  return <DynamicPageForm initialData={initialData} />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
