import { useLoaderData } from 'react-router';
import { createRoutesStub } from 'react-router';
import { render, screen, waitFor } from '@testing-library/react';

test('renders loader data', async () => {
  // ⚠️ This would usually be a component you import from your app code
  function MyComponent() {
    const data = useLoaderData() as { message: string };

    return <p>Message: {data.message}</p>;
  }

  const RemixStub = createRoutesStub([
    {
      path: '/',
      Component: MyComponent,
      loader() {
        return { message: 'hello' };
      },
    },
  ]);

  render(<RemixStub />);

  await waitFor(() => screen.findByText('Message: hello'));
});
