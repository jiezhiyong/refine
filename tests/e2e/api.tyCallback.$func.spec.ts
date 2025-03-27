import { expect, test } from '../e2e-lib';

test.describe('天元前端路由配置发布', () => {
  test('项目、模块发布回调 - 查询', async ({ request }) => {
    const res = await request.post('/api/tyCallback/queryOldData', {
      data: {
        param: 'frontRoute:abc',
        contentJson: JSON.stringify({ action: 'create', auditRecordId: '05585efb-602f-4c20-85de-ac3f19f4ae21' }),
      },
    });
    expect(res.ok(), await res.json()).toBeTruthy();
  });

  test('项目、模块发布回调 - 创建', async ({ request }) => {
    const res = await request.post('/api/tyCallback/execute', {
      data: {
        param: 'frontRoute:abc',
        contentJson: JSON.stringify({ action: 'create', auditRecordId: '05585efb-602f-4c20-85de-ac3f19f4ae21' }),
      },
    });
    expect(res.ok(), await res.json()).toBeTruthy();
  });

  test('项目、模块发布回调 - 更新', async ({ request }) => {
    const res = await request.post('/api/tyCallback/execute', {
      data: {
        param: 'frontRoute:abc',
        contentJson: JSON.stringify({ action: 'update', auditRecordId: 'a3a03c64-e129-4206-8a8d-7dacd43f974c' }),
      },
    });
    expect(res.ok(), await res.json()).toBeTruthy();
  });

  test('项目、模块发布回调 - 删除', async ({ request }) => {
    const res = await request.post('/api/tyCallback/execute', {
      data: {
        param: 'frontRoute:cxx',
        contentJson: JSON.stringify({ action: 'delete', auditRecordId: '0096a2e2-3fee-4316-a1f8-410a69621dad' }),
      },
    });
    expect(res.ok(), await res.json()).toBeTruthy();
  });
});
