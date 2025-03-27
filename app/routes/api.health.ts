import { LoaderFunctionArgs } from '@remix-run/node';

import { Resources } from '~/constants/resource';
import { dataService } from '~/services/data.server';
import { db } from '~/services/db.server';
import { TAny } from '~/types/any';

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
 * - 特定资源监控: GET /api/health?resource=user
 */
export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const url = new URL(request.url);
    const resource = url.searchParams.get('resource');

    // 数据库连接检查 - 执行简单查询验证数据库连接
    await db.$queryRaw`SELECT 1`;

    // 如果指定了资源，检查该资源的可用性
    if (resource) {
      await dataService.findMany(resource as Resources, { skip: 0, take: 1 }, { request });
    }

    return Response.json({ status: 'healthy', message: '服务正常' }, { status: 200 });
  } catch (error: TAny) {
    return Response.json({ status: 'unhealthy', message: error?.message || '服务异常' }, { status: 500 });
  }
}
