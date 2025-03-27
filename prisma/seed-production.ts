// 导入 Prisma 相关依赖
import { Post, PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcryptjs';

// 导入业务数据
import { categories } from 'mock/db/sql-categories';
import { dynamicPages } from 'mock/db/sql-dynamic-page';
import { frontRouteModules, frontRouteProjects } from 'mock/db/sql-front-routes';
import { menus } from 'mock/db/sql-menus';
import { CASBIN_POLICIES } from 'mock/db/sql-pemission';
import { posts } from 'mock/db/sql-posts';
import { roles } from 'mock/db/sql-roles';
import { userAdministrator } from 'mock/db/sql-users';
import { EnumAuthProvider } from '~/constants/user';

const db = new PrismaClient();

async function checkIfInitialized(): Promise<boolean> {
  try {
    const adminExists = await db.user.findFirst({
      where: { email: userAdministrator.email },
    });
    return adminExists != null;
  } catch (error) {
    console.error('检查初始化状态时出错:', error);
    throw error;
  }
}

async function createAdminUser(): Promise<User> {
  try {
    const adminUser = await db.user.create({
      data: {
        provider: EnumAuthProvider.USER_PASS,
        name: userAdministrator.name,
        email: userAdministrator.email,
        avatar: userAdministrator.avatar,
        password: bcrypt.hashSync(userAdministrator.password!, 10),
      },
    });
    console.log('已创建管理员用户');
    return adminUser;
  } catch (error) {
    console.error('创建管理员用户时出错:', error);
    throw error;
  }
}

async function createCasbinRules(adminUserId: string): Promise<void> {
  try {
    const existingRules = await db.casbinRule.findMany();
    if (existingRules.length > 0) {
      console.log('Casbin 规则已存在，跳过创建');
      return;
    }

    const rules = CASBIN_POLICIES.map(([ptype, v0, v1, v2, v3 = null]) => ({
      ptype,
      v0,
      v1,
      v2,
      v3,
      v4: null,
      operatedById: adminUserId,
    }));

    await db.casbinRule.createMany({
      data: rules,
    });
    console.log('已创建 Casbin 规则');
  } catch (error) {
    console.error('创建 Casbin 规则时出错:', error);
    throw error;
  }
}

async function createRolesAndAssign(adminUserId: string): Promise<void> {
  try {
    // 创建角色
    await db.role.createMany({
      data: roles.map((role) => ({ ...role, operatedById: adminUserId })),
    });
    console.log('已创建角色');

    // 获取创建的角色
    const allRoles = await db.role.findMany();

    // 为管理员用户分配所有角色
    await db.userRole.createMany({
      data: allRoles.map((role) => ({ userId: adminUserId, roleId: role.id })),
    });
    console.log('已为管理员分配角色');
  } catch (error) {
    console.error('创建角色或分配角色时出错:', error);
    throw error;
  }
}

async function createCategoriesAndPosts(adminUserId: string): Promise<void> {
  try {
    // 创建分类
    await db.category.createMany({
      data: categories.map((category) => ({ ...category, operatedById: adminUserId })),
    });
    console.log('已创建分类');

    // 创建文章
    await db.post.createMany({
      data: posts.map((post) => {
        const { category, status, ...rest } = post;
        return { ...rest, categoryId: category.id, operatedById: adminUserId, status: status as Post['status'] };
      }),
    });
    console.log('已创建文章');
  } catch (error) {
    console.error('创建分类或文章时出错:', error);
    throw error;
  }
}

async function createFrontRoutes(adminUserId: string): Promise<void> {
  try {
    // 创建前端路由项目
    await db.frontRouteProject.createMany({
      data: frontRouteProjects.map((item) => ({ ...item, operatedById: adminUserId })),
    });
    console.log('已创建 FrontRouteProject');

    // 创建前端路由模块
    await db.frontRouteModule.createMany({
      data: frontRouteModules.map((item) => {
        const { projectId, ...rest } = item;
        return { ...rest, projectId, operatedById: adminUserId };
      }),
    });
    console.log('已创建 FrontRouteModule');
  } catch (error) {
    console.error('创建 frontRouteProject 或 frontRouteModule 时出错:', error);
    throw error;
  }
}

async function createMenus(adminUserId: string): Promise<void> {
  try {
    // 创建菜单
    await db.menu.createMany({
      data: menus.map((menu, index) => ({ ...menu, operatedById: adminUserId, order: index })),
    });
    console.log('已创建 Menu');
  } catch (error) {
    console.error('创建 Menu 时出错:', error);
    throw error;
  }
}

async function createDynamicPages(adminUserId: string): Promise<void> {
  try {
    // 创建动态页面
    await db.dynamicPage.createMany({
      data: dynamicPages.map((page) => ({ ...page, operatedById: adminUserId })),
    });
    console.log('已创建 DynamicPage');
  } catch (error) {
    console.error('创建 DynamicPage 时出错:', error);
    throw error;
  }
}

export async function seedProduction(): Promise<void> {
  console.log('检查生产环境数据初始化状态...');

  try {
    // 检查是否已经初始化
    if (await checkIfInitialized()) {
      console.log('生产环境数据已经初始化，跳过初始化过程');
      return;
    }

    console.log('开始初始化生产环境数据...');

    // 创建管理员用户
    const adminUser = await createAdminUser();

    // 创建 Casbin 规则
    await createCasbinRules(adminUser.id);

    // 创建角色并分配给管理员
    await createRolesAndAssign(adminUser.id);

    // 创建分类和文章
    await createCategoriesAndPosts(adminUser.id);

    // 创建前端路由
    await createFrontRoutes(adminUser.id);

    // 创建菜单
    await createMenus(adminUser.id);

    // 创建动态页面
    await createDynamicPages(adminUser.id);

    console.log('生产环境数据初始化完成');
  } catch (error) {
    console.error('生产环境数据初始化失败:', error);
    process.exit(1);
  }
}

async function main(): Promise<void> {
  try {
    await seedProduction();
  } catch (error) {
    console.error('执行生产环境 seed 脚本失败:', error);
    process.exit(1);
  } finally {
    await db.$disconnect();
  }
}

main();
