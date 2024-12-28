import { delay, http } from 'msw';

export const handlersBase = [
  http.all('*', async () => {
    await delay(300);
  }),
];
