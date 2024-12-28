import { useState } from 'react';
import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Button } from '~/components-shadcn/button';
import { getDefaultTitle } from '~/utils/get-default-title';
import PageError from '~/components/500';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// 加载器 - 初始化 && 处理表单`GET`请求
export const loader: LoaderFunction = async () => {
  const response = await fetch('https://api.example.com/user');
  const serverSideData = await response.json();

  return { serverSideData };
};

// UI
export default function Index() {
  const { serverSideData } = useLoaderData<typeof loader>();
  const [favoriteMovies, setFavoriteMovies] = useState<{
    data: { movies: Array<{ id: string; title: string }> };
  } | null>(null);

  // FIXME: TypeError: argument name is invalid
  const handleClick = () => {
    fetch('/api/runtime', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query ListMovies {
            movie {
              title
            }
          }
        `,
      }),
    })
      .then((response) => response.json())
      .then(setFavoriteMovies);
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <p id="server-side-greeting">Hello, {serverSideData.name}!</p>
      {favoriteMovies?.data ? (
        <div>
          <h2>My favorite movies ({favoriteMovies.data.movies.length})</h2>
          <ul id="movies-list">
            {favoriteMovies.data.movies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <Button id="fetch-movies-button" onClick={handleClick}>
        Make a runtime request
      </Button>
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
