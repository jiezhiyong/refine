import { ActionFunctionArgs } from '@remix-run/node';

import { getEnhancedDb } from '~/services/db.server';
import { requireUser } from '~/services/session.server';
import { TAny } from '~/types/any';
import { validateRequestSignature } from '~/utils/signature';
import { buildCountSql, buildSql, parseSql } from '~/utils/sql';

// 查询参数类型
interface QueryParams {
  sql: string;
  filters?: Array<{
    field: string;
    operator: string;
    value: TAny;
  }>;
  pagination?: {
    current?: number;
    pageSize?: number;
    mode?: string;
  };
  sorters?: Array<{
    field: string;
    order: string;
  }>;
}

/**
 * 自定义 SQL 查询 API
 * 支持 filters、pagination、sorters 参数
 * 如果提供 sql 参数，在用户提供的 SQL 基础上应用额外筛选和分页
 */
export async function action({ request }: ActionFunctionArgs) {
  try {
    // 验证请求签名
    const signatureValid = await validateRequestSignature(request);
    if (!signatureValid) {
      return new Response(JSON.stringify({ message: '请求签名无效' }), { status: 401 });
    }

    // 身份验证
    await requireUser(request);

    // 解析请求体参数
    const requestBody = (await request.json()) as QueryParams;
    const { sql, filters, pagination, sorters } = requestBody;

    // 获取数据库连接
    const db = await getEnhancedDb({ request });

    // 解析用户提供的 SQL
    const parsedSql = parseSql(sql);

    // 处理筛选条件
    const whereConditions: string[] = [];
    if (filters && filters.length > 0) {
      // 获取条件并确保过滤掉 null 值
      const conditions = getWhereConditions(filters, parsedSql.mainTableAlias);
      whereConditions.push(...conditions);
    }

    // 合并 WHERE 条件
    if (whereConditions.length > 0) {
      const filterClause = whereConditions.join(' AND ');
      if (parsedSql.hasWhere) {
        // 如果原始 SQL 已有 WHERE 子句，添加 AND
        parsedSql.where = `(${parsedSql.where}) AND (${filterClause})`;
      } else {
        // 如果原始 SQL 没有 WHERE 子句，添加新的
        parsedSql.where = filterClause;
      }
    }

    // 处理排序
    if (sorters && sorters.length > 0) {
      const orderBy = sorters
        .map((sorter) => {
          const { field, order } = sorter;

          // 添加主表别名处理多表歧义问题
          let fieldWithAlias = field;
          if (parsedSql.mainTableAlias && !field.includes('.')) {
            fieldWithAlias = `${parsedSql.mainTableAlias}."${field}"`;
          } else {
            fieldWithAlias = `"${field}"`;
          }
          return `${fieldWithAlias} ${order === 'desc' ? 'DESC' : 'ASC'}`;
        })
        .join(', ');

      // 覆盖或添加排序
      parsedSql.orderBy = orderBy;
      parsedSql.hasOrderBy = true;
    }

    // 处理分页
    if (pagination && pagination.mode !== 'off') {
      const { current = 1, pageSize = 10 } = pagination;
      const offset = (current - 1) * pageSize;

      parsedSql.limit = String(pageSize);
      parsedSql.offset = String(offset);
    }

    // 重建 SQL 和计数 SQL
    const listSql = buildSql(parsedSql);
    const countSql = buildCountSql(parsedSql);

    // 执行查询
    const [data, totalResult] = await Promise.all([db.$queryRawUnsafe(listSql), db.$queryRawUnsafe(countSql)]);

    // 处理总数
    const total = Array.isArray(totalResult) && totalResult.length > 0 ? Number(totalResult[0].count) : 0;

    // 返回结果
    return new Response(JSON.stringify({ data, total }), { status: 200 });
  } catch (error: TAny) {
    return new Response(JSON.stringify({ message: error?.message || '执行自定义 SQL 查询失败', error }), {
      status: 500,
    });
  }
}

// 获取筛选条件
function getWhereConditions(filters: QueryParams['filters'], mainTableAlias = ''): string[] {
  if (!filters) {
    return [];
  }

  const conditions: string[] = [];

  for (const filter of filters) {
    const { field, operator, value } = filter;

    // 空值检查
    if (value === null || value === undefined) {
      continue;
    }

    // 根据不同的操作符处理条件
    // 对于contains、startswith、endswith，需要将字段转换为文本类型，以避免与枚举类型不匹配的问题
    let condition: string | null = null;

    // 处理字段名，添加主表别名以解决多表歧义问题
    let fieldWithAlias = field;
    if (mainTableAlias && !field.includes('.')) {
      fieldWithAlias = `${mainTableAlias}."${field}"`;
    } else {
      fieldWithAlias = `"${field}"`;
    }

    switch (operator) {
      case 'contains':
        condition = `${fieldWithAlias}::text ILIKE '%${value}%'`;
        break;
      case 'eq':
        condition = `${fieldWithAlias} = '${value}'`;
        break;
      case 'ne':
        condition = `${fieldWithAlias} != '${value}'`;
        break;
      case 'gt':
        condition = `${fieldWithAlias} > '${value}'`;
        break;
      case 'lt':
        condition = `${fieldWithAlias} < '${value}'`;
        break;
      case 'gte':
        condition = `${fieldWithAlias} >= '${value}'`;
        break;
      case 'lte':
        condition = `${fieldWithAlias} <= '${value}'`;
        break;
      case 'startswith':
        condition = `${fieldWithAlias}::text ILIKE '${value}%'`;
        break;
      case 'endswith':
        condition = `${fieldWithAlias}::text ILIKE '%${value}'`;
        break;
      case 'in':
        if (Array.isArray(value)) {
          // 日期范围处理
          if (
            value.length === 2 &&
            typeof value[0] === 'string' &&
            typeof value[1] === 'string' &&
            value[0].includes('T') &&
            value[1].includes('T')
          ) {
            condition = `${fieldWithAlias} BETWEEN '${value[0]}' AND '${value[1]}'`;
          } else {
            // 常规 IN 查询
            const valueList = value.map((v) => `'${v}'`).join(', ');
            condition = `${fieldWithAlias} IN (${valueList})`;
          }
        }
        break;
      case 'null':
        condition = `${fieldWithAlias} IS NULL`;
        break;
      case 'nnull':
        condition = `${fieldWithAlias} IS NOT NULL`;
        break;
    }

    if (condition) {
      conditions.push(condition);
    }
  }

  return conditions;
}
