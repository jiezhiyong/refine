/**
 * 数据库
 */
export const prisma = {
  user: {
    findMany: () => {
      return [
        { id: '1', name: 'Alice' },
        { id: '2', name: 'Bob' },
      ];
    },
    findOne: (id: string) => {
      return { id, name: 'Alice' };
    },
  },
};
