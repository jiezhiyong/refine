import { Prisma } from '@prisma/client';
import { LoaderFunctionArgs } from '@remix-run/node';

import { checkPermission } from '~/services/casbin-permission.server';
import { db } from '~/services/db.server';
import { requireUser } from '~/services/session.server';
import { TAny } from '~/types/any';
import { validateRequestSignature } from '~/utils/signature';

// 处理图表数据聚合查询
export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const signatureValid = await validateRequestSignature(request);
    if (!signatureValid) {
      return Response.json({ message: '请求签名无效' }, { status: 401 });
    }

    const { user } = await requireUser(request);
    const url = new URL(request.url);

    // 获取查询参数
    const resource = url.searchParams.get('resource');
    const startDate = url.searchParams.get('startDate');
    const endDate = url.searchParams.get('endDate');
    const fields = url.searchParams.get('fields')?.split(',') || [];
    const aggregationType = url.searchParams.get('aggregationType') || 'sum';

    if (!resource) {
      throw new Error('resource is required');
    }

    if (!startDate || !endDate) {
      throw new Error('startDate and endDate are required');
    }

    if (fields.length === 0) {
      throw new Error('fields is required');
    }

    // 检查读取权限
    const subject = user.role || 'unknown';
    const object = resource;
    const action = 'list';
    const hasPermission = await checkPermission(subject, object, action);
    if (!hasPermission) {
      return Response.json({ message: `你没有权限访问 ${resource}`, subject, object, action }, { status: 403 });
    }

    // 获取按天聚合的数据
    const data = await getAggregatedDataByDay({
      resource,
      startDate,
      endDate,
      fields,
      aggregationType,
    });

    return Response.json({ data });
  } catch (error: TAny) {
    return Response.json({ ...error, message: error?.message }, { status: 500 });
  }
}

// 按天聚合数据
async function getAggregatedDataByDay({
  resource,
  startDate,
  endDate,
  fields,
  aggregationType,
}: {
  resource: string;
  startDate: string;
  endDate: string;
  fields: string[];
  aggregationType: string;
}) {
  // 定义结果项的接口，包含日期和动态字段
  interface ResultItem {
    date: string;
    [key: string]: string | number; // 添加索引签名，允许动态字段
  }

  // 创建日期范围数组（从开始日期到结束日期的每一天）
  const dateRange = generateDateRange(new Date(startDate), new Date(endDate));
  const formattedDateRange = dateRange.map((date) => date.toISOString().split('T')[0]);

  // 初始化结果数组
  const result: ResultItem[] = formattedDateRange.map((date) => ({
    date,
    ...fields.reduce((acc, field) => ({ ...acc, [field]: 0 }), {}),
  }));

  // 根据不同的资源类型和字段执行不同的查询
  try {
    // 构建 Prisma 查询
    const rawResults = await executeAggregationQuery(resource, startDate, endDate, fields, aggregationType);

    // 将查询结果映射到结果数组
    rawResults.forEach((item: TAny) => {
      const dateStr = item.date.toISOString().split('T')[0];
      const resultIndex = result.findIndex((r) => r.date === dateStr);

      if (resultIndex !== -1) {
        fields.forEach((field) => {
          if (item[field] !== undefined) {
            result[resultIndex][field] = Number(item[field]) || 0;
          }
        });
      }
    });

    return result;
  } catch (error) {
    console.error('Error aggregating data:', error);
    throw error;
  }
}

// 生成日期范围数组
function generateDateRange(startDate: Date, endDate: Date): Date[] {
  const dates = [];
  const currentDate = new Date(startDate);

  // 设置时间为当天的开始
  currentDate.setHours(0, 0, 0, 0);

  // 结束日期设置为当天的结束
  const end = new Date(endDate);
  end.setHours(23, 59, 59, 999);

  while (currentDate <= end) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

// 执行聚合查询
// 构建 Prisma 原始 SQL 查询
// 使用 Prisma.$queryRaw 执行原始 SQL 查询，按天分组并聚合数据
async function executeAggregationQuery(
  resource: string,
  startDate: string,
  endDate: string,
  fields: string[],
  aggregationType: string
): Promise<TAny[]> {
  // 构建选择字段
  const selectFields = fields.map((field) => {
    switch (aggregationType) {
      case 'sum':
        return Prisma.sql`SUM("${Prisma.raw(field)}") as "${Prisma.raw(field)}"`;
      case 'avg':
        return Prisma.sql`AVG("${Prisma.raw(field)}") as "${Prisma.raw(field)}"`;
      case 'max':
        return Prisma.sql`MAX("${Prisma.raw(field)}") as "${Prisma.raw(field)}"`;
      case 'min':
        return Prisma.sql`MIN("${Prisma.raw(field)}") as "${Prisma.raw(field)}"`;
      case 'count':
        return Prisma.sql`COUNT("${Prisma.raw(field)}") as "${Prisma.raw(field)}"`;
      default:
        return Prisma.sql`SUM("${Prisma.raw(field)}") as "${Prisma.raw(field)}"`;
    }
  });

  // 执行查询
  const results = await db.$queryRaw`
    SELECT 
      DATE("createdAt") as date,
      ${Prisma.join(selectFields, ', ')}
    FROM "${Prisma.raw(resource)}"
    WHERE "createdAt" >= ${startDate}::timestamp
    AND "createdAt" <= ${endDate}::timestamp
    AND "deleted" IS NOT TRUE
    GROUP BY DATE("createdAt")
    ORDER BY DATE("createdAt")
  `;

  return results as TAny[];
}
