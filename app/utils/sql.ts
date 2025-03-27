// SQL工具函数

/**
 * 从SQL中提取表名
 * @param sql SQL语句
 * @returns 表名
 */
export function parseTablenameFromSql(sql: string) {
  if (!sql) return '';

  // 规范化SQL
  const normalizedSql = sql.replace(/\s+/g, ' ').trim();

  // 提取FROM子句
  const fromMatch = normalizedSql.match(/FROM\s+([^\s,]+)(?:\s+([^\s,]+))?/i);
  if (!fromMatch) return '';

  // 返回表名（去掉引号）
  return fromMatch[1].replace(/["`]/g, '');
}

/**
 * 解析SQL语句，提取各个部分
 * @param sql SQL语句
 * @returns 解析后的SQL各部分
 */
export function parseSql(sql: string) {
  // 处理空格和换行，确保可以正确匹配
  const normalizedSql = sql.replace(/\s+/g, ' ').trim();

  // 使用正则表达式提取SQL的各个部分
  const selectMatch = normalizedSql.match(/^SELECT\s+(.*?)\s+FROM/i);
  const fromMatch = normalizedSql.match(/FROM\s+(.*?)(?:\s+WHERE|\s+ORDER\s+BY|\s+GROUP\s+BY|\s+LIMIT|\s*$)/i);
  const whereMatch = normalizedSql.match(/WHERE\s+(.*?)(?:\s+ORDER\s+BY|\s+GROUP\s+BY|\s+LIMIT|\s*$)/i);
  const orderByMatch = normalizedSql.match(/ORDER\s+BY\s+(.*?)(?:\s+LIMIT|\s*$)/i);
  const limitMatch = normalizedSql.match(/LIMIT\s+(.*?)(?:\s+OFFSET|\s*$)/i);
  const offsetMatch = normalizedSql.match(/OFFSET\s+(.*?)(?:\s*$)/i);

  // 提取主表别名
  let mainTableAlias = '';
  if (fromMatch) {
    const fromClause = fromMatch[1].trim();
    // 匹配第一个表和其别名，如 "Post" p 或 "Post" AS p
    const tableAliasMatch = fromClause.match(/["']?(\w+)["']?\s+(?:AS\s+)?(\w+)/i);
    if (tableAliasMatch) {
      mainTableAlias = tableAliasMatch[2]; // 提取别名，如 p
    }
  }

  return {
    select: selectMatch ? selectMatch[1].trim() : '*',
    from: fromMatch ? fromMatch[1].trim() : '',
    where: whereMatch ? whereMatch[1].trim().replace(/;/g, '') : '',
    orderBy: orderByMatch ? orderByMatch[1].trim().replace(/;/g, '') : '',
    limit: limitMatch ? limitMatch[1].trim().replace(/;/g, '') : '',
    offset: offsetMatch ? offsetMatch[1].trim().replace(/;/g, '') : '',

    // 基础部分
    hasWhere: !!whereMatch,
    hasOrderBy: !!orderByMatch,
    hasLimit: !!limitMatch,

    // 表信息
    mainTableAlias,
  };
}

/**
 * 根据解析结果重建SQL语句
 * @param parts SQL各部分
 * @returns 重建的SQL语句
 */
export function buildSql(parts: ReturnType<typeof parseSql>) {
  let sql = `SELECT ${parts.select} FROM ${parts.from}`;

  if (parts.where) {
    sql += ` WHERE ${parts.where}`;
  }

  if (parts.orderBy) {
    sql += ` ORDER BY ${parts.orderBy}`;
  }

  if (parts.limit) {
    sql += ` LIMIT ${parts.limit}`;
  }

  if (parts.offset) {
    sql += ` OFFSET ${parts.offset}`;
  }

  return sql;
}

/**
 * 构建计数SQL
 * @param parts SQL各部分
 * @returns 用于计数的SQL
 */
export function buildCountSql(parts: ReturnType<typeof parseSql>) {
  // 使用主表别名构建COUNT查询
  const mainTableAlias = parts.mainTableAlias;

  let countSql;

  // 如果有表别名，使用表别名.id来计数，避免连接查询时的重复计数
  if (mainTableAlias) {
    countSql = `SELECT COUNT(${mainTableAlias}."id") FROM ${parts.from}`;
  } else {
    // 无表别名时使用简单的COUNT(*)
    countSql = `SELECT COUNT(*) FROM ${parts.from}`;
  }

  if (parts.where) {
    countSql += ` WHERE ${parts.where}`;
  }

  return countSql;
}

// 解析 SQL 语句，提取 select 部分，组装为字段数组
// 如：SELECT p."id", c."title" AS "category" => [ {name: 'id'}, {name: 'category'} ]
export function parseTableFieldArrayFromSql(sql: string) {
  const { select } = parseSql(sql);
  if (!select || select === '*') {
    return [];
  }

  // 按逗号分隔，处理每个字段表达式
  return select.split(',').map((field) => {
    const trimmedField = field.trim();

    // 处理包含 AS 的情况：field AS alias
    const asMatch = trimmedField.match(/.*\s+AS\s+(?:"([^"]+)"|'([^']+)'|(\w+))/i);
    if (asMatch) {
      // 提取别名，可能在引号中或不在引号中
      return asMatch[1] || asMatch[2] || asMatch[3];
    }

    // 处理不含 AS 的情况，但可能有表前缀：table.field 或 "table"."field"
    // 先尝试匹配带引号的格式
    const quotedFieldMatch = trimmedField.match(/(?:\w+\.)?"([^"]+)"$/);
    if (quotedFieldMatch) {
      return quotedFieldMatch[1];
    }

    // 再尝试匹配不带引号的格式，使用最后一个点号后面的部分
    const lastDotIndex = trimmedField.lastIndexOf('.');
    if (lastDotIndex >= 0) {
      const fieldName = trimmedField.substring(lastDotIndex + 1);
      // 去除可能的引号
      return fieldName.replace(/["`']/g, '');
    }

    // 最简单的情况：就是一个字段名
    return trimmedField.replace(/["`']/g, '');
  });
}
