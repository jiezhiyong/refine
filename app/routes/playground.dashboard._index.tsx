import { useTranslation } from '@refinedev/core';
import { MetaFunction } from '@remix-run/react';
import { PageError } from '~/components/500';
import { getDefaultTitle } from '~/utils/get-default-title';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// 加载器
export async function loader() {
  return {};
}

// UI
export default function DashboardIndex() {
  const { translate: t } = useTranslation();
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-6xl text-[#3defe9]">{t('title', '')}</h1>
      <p className="my-10 text-3xl text-[#fecc1b]">{t('description', '')}</p>
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
