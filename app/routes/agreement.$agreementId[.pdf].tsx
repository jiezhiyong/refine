import { LoaderFunctionArgs } from '@remix-run/node';

/**
 # 没有 UI 的资源路由 & Webhook
 * 注意：链接到资源路由时必须使用 reloadDocument, eg: <Link reloadDocument>
 */
export async function loader({ params }: LoaderFunctionArgs) {
  const report = await getReport(params.id);
  const pdf = await generateReportPDF(report);

  return new Response(pdf, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
    },
  });
}
