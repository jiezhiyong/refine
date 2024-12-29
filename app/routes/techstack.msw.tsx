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
  const res = await response.json();

  return { res };
};

// UI
export default function TechstackMsw() {
  const { res } = useLoaderData<typeof loader>();
  const [favoriteMovies, setFavoriteMovies] = useState<{
    data: { movies: Array<{ id: string; title: string }> };
  } | null>(null);

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
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-6xl text-[#3defe9]">Hi, {res.name} 👋</h1>
      <div className="my-10 text-3xl text-[#fecc1b]">
        {favoriteMovies?.data ? (
          <ul id="movies-list">
            {favoriteMovies.data.movies.map((movie) => (
              <span key={movie.id}>{movie.title}、</span>
            ))}
          </ul>
        ) : (
          <span>...</span>
        )}
      </div>

      <Button id="fetch-movies-button" onClick={handleClick}>
        Make a runtime reques
      </Button>
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
