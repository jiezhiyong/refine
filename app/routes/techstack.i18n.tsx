import { type LoaderFunctionArgs, type MetaFunction } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import PageError from '~/components/500';
import i18nServer from '~/services/i18n.server';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data?.title }, { name: 'description', content: data?.description }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18nServer.getFixedT(request);
  return { title: t('title'), description: t('description') };
}

export default function Index() {
  const { t } = useTranslation();
  const { description } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>{t('title')}</h1>
      <p>{description}</p>

      <Form>
        <button type="submit" name="lng" value="zh">
          简体中文
        </button>
        <button type="submit" name="lng" value="en">
          English
        </button>
      </Form>
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
