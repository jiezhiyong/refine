import { useTranslation } from '@refinedev/core';
import { LoaderFunctionArgs, type MetaFunction } from '@remix-run/node';
import i18next from 'i18next';
import PageError from '~/components/500';
import { syncServiceLocaleToClient } from '~/providers/i18n';
import { getSessionLocale } from '~/services/session.server';

// 元数据
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data?.title }, { name: 'description', content: data?.description }];
};

// 加载器
// 注意：如果需要切换语言时动态更新 meta，需要手动同步服务端与客户端的 locale
export async function loader({ request }: LoaderFunctionArgs) {
  await syncServiceLocaleToClient(await getSessionLocale(request));
  return { title: i18next.t('title'), description: i18next.t('description') };
}

// UI
export default function TechstackI18n() {
  const { translate: t } = useTranslation();

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-6xl text-[#3defe9]">{t('title')}</h1>
      <p className="my-10 text-3xl text-[#fecc1b]">{t('description')}</p>
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
