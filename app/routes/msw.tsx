import { useState } from 'react';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async () => {
  // 使用 node-fetch 或确保在服务端环境中正确初始化 fetch
  const response = await fetch('https://api.example.com/user', {
    // 添加必要的请求头
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const serverSideData = await response.json();
  console.log('Server side data:', serverSideData); // 添加日志

  return {
    serverSideData,
  };
};

export default function Index() {
  const { serverSideData } = useLoaderData();
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
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <p id="server-side-greeting">Hello, {serverSideData.firstName}!</p>
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
      <button id="fetch-movies-button" onClick={handleClick}>
        Make a runtime request
      </button>
    </div>
  );
}
