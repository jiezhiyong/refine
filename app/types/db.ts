import { TAny } from './any';

export type PrismaFunc = {
  count: (args: TAny) => Promise<number>;
  findUnique: (args: TAny) => Promise<TAny>;
  findMany: (args: TAny) => Promise<TAny[]>;
  create: (args: TAny) => Promise<TAny>;
  createMany: (args: TAny) => Promise<TAny>;
  delete: (args: TAny) => Promise<TAny>;
  deleteMany: (args: TAny) => Promise<TAny>;
  update: (args: TAny) => Promise<TAny>;
  updateMany: (args: TAny) => Promise<TAny>;
};
