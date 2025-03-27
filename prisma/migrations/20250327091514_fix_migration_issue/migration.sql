-- 如果_prisma_migrations表中存在失败记录，删除它
DELETE FROM _prisma_migrations WHERE migration_name = '20250327090521_init' AND applied_steps_count = 0;

-- 如果需要，插入成功迁移记录
INSERT INTO _prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count)
SELECT 
  gen_random_uuid(), 
  '', 
  NOW(), 
  '20250327090521_init', 
  '', 
  null, 
  NOW(), 
  1
WHERE NOT EXISTS (
  SELECT 1 FROM _prisma_migrations WHERE migration_name = '20250327090521_init' AND applied_steps_count > 0
);