import { type LoaderFunctionArgs, type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import PageError from '~/components/500';
import i18nServer from '~/services/i18n.server';

// 元数据
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data?.title }, { name: 'description', content: data?.description }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18nServer.getFixedT(request);
  return { title: t('title'), description: t('description') };
}

// UI
export default function TechstackI18n() {
  const { t } = useTranslation();
  const { description } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-6xl text-[#3defe9]">{t('title')}</h1>
      <p className="my-10 text-3xl text-[#fecc1b]">{description}</p>
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
