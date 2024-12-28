import { http, HttpResponse } from 'msw';

export const handlersAuthGithub = [
  http.get('https://api.github.com/auth', () => {
    return HttpResponse.json({
      abc: '123',
    });
  }),
];
