import { redirect } from 'react-router';

import { getDashboardResource } from '@/config/resources';

export async function loader() {
  const dashboardResource = getDashboardResource();
  return redirect(dashboardResource);
}

export default function Index() {
  return null;
}
