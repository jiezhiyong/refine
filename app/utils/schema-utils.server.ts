// import fs from 'fs';
// import path from 'path';

// /**
//  * 获取Prisma模型的Int类型字段
//  *
//  * 此函数通过解析Prisma schema文件来获取指定模型的所有Int类型字段
//  * @param modelName - Prisma模型名称
//  * @returns 包含字段名和显示标签的对象数组
//  */
// export async function getIntFieldsByModel(modelName: string) {
//   try {
//     // 获取所有模型的Int字段
//     const allModelFields = await parseSchemaForIntFields();

//     // 获取指定模型的Int字段
//     const fields = allModelFields[modelName.toLowerCase()] || [];

//     // 转换为前端需要的格式
//     return fields.map((field) => ({
//       value: field.name,
//       label: field.name,
//     }));
//   } catch (error) {
//     console.error('解析Schema文件时出错:', error);
//     return [];
//   }
// }

// /**
//  * 解析Prisma schema文件，提取所有模型的Int类型字段
//  */
// async function parseSchemaForIntFields(): Promise<Record<string, Array<{ name: string }>>> {
//   // 读取schema文件
//   const schemaPath = path.resolve(process.cwd(), 'prisma', 'schema.prisma');
//   const schemaContent = fs.readFileSync(schemaPath, 'utf-8');

//   // 定义正则表达式来匹配模型定义
//   const modelRegex = /model\s+(\w+)\s+{([^}]*)}/g;

//   const result: Record<string, Array<{ name: string }>> = {};
//   let modelMatch;

//   // 遍历所有模型定义
//   while ((modelMatch = modelRegex.exec(schemaContent)) !== null) {
//     const modelName = modelMatch[1].toLowerCase();
//     const modelBody = modelMatch[2];

//     // 定义正则表达式来匹配Int类型的字段
//     const fieldRegex = /\s*(\w+)\s+Int\s+(?:@[^\n]*)?(?:\n|$)/g;

//     const intFields: Array<{ name: string }> = [];
//     let fieldMatch;

//     // 遍历所有Int类型的字段
//     while ((fieldMatch = fieldRegex.exec(modelBody)) !== null) {
//       const fieldName = fieldMatch[1];
//       // 排除id字段和外键字段
//       if (!fieldName.endsWith('Id') && fieldName !== 'id') {
//         intFields.push({ name: fieldName });
//       }
//     }

//     result[modelName] = intFields;
//   }

//   return result;
// }
