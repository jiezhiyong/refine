import Layout from '~/components/layout';
import { HandleFunction } from '~/types/handle';

// 创建应用程序约定
export const handle: HandleFunction = {
  from: 'dashboard',
};

// UI
export default function Dashboard() {
  return <Layout />;
}
