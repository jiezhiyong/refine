import { LoaderFunctionArgs } from '@remix-run/node';

import { db } from '@/services/db.server';
import { TAny } from '@/types/any';

/**
 * 健康检查接口
 * https://dashboard.uptimerobot.com/monitors
 *
 * 该接口提供以下功能:
 * 1. 基本的服务可用性检查
 * 2. 数据库连接检查
 * 3. 可选的资源检查 (通过 ?resource=xxx 参数)
 *
 * UptimeRobot 可以通过以下方式使用:
 * - 基本监控: GET /api/health
 * - 特定资源监控: GET /api/health?resource=User
 */
export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const url = new URL(request.url);
    const resource = url.searchParams.get('resource');

    // 如果指定了资源，检查该资源的可用性
    if (resource) {
      await db.$queryRawUnsafe(`SELECT 1 FROM "${resource}"`);
    }

    // 否则执行简单查询验证数据库连接
    else {
      await db.$queryRaw`SELECT 1`;
    }

    return Response.json({ status: 'healthy', message: '服务正常' }, { status: 200 });
  } catch (error: TAny) {
    return Response.json({ status: 'unhealthy', message: error?.message || '服务异常' }, { status: 500 });
  }
}
