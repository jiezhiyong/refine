import { useTranslation } from '@refinedev/core';
import { LoaderFunctionArgs, type MetaFunction } from '@remix-run/node';
import i18next from 'i18next';
import PageError from '~/components/500';
import { syncServiceLocaleToClient } from '~/providers/i18n';
import { getCookie } from '~/services/cookie.server';

// 元数据
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data?.title }, { name: 'description', content: data?.description }];
};

// 加载器
export async function loader({ request }: LoaderFunctionArgs) {
  // 注意：如果要使用 SSR 进行翻译，需要手动同步服务端与客户端的 locale
  await syncServiceLocaleToClient((await getCookie(request)).locale);

  return { title: i18next.t('title'), description: i18next.t('description') };
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
