import { data } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader = async () => {
  const res = await fetch('https://my-mock-api.com').then((response) => response.json());

  if (!res || typeof res.message !== 'string') {
    throw data({ message: 'Server error' }, { status: 500 });
  }

  return res;
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>{data.message}</h1>
    </div>
  );
}
