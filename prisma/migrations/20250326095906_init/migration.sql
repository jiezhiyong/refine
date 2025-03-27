-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('USER_PASS', 'TC_SHUKE');

-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'REJECTED');

-- CreateEnum
CREATE TYPE "AuditStatus" AS ENUM ('PENDING', 'RESOLVED', 'REJECTED', 'FAILED');

-- CreateEnum
CREATE TYPE "AuditChannel" AS ENUM ('TIAN_YUAN', 'SELF');

-- CreateEnum
CREATE TYPE "LogAction" AS ENUM ('create', 'createMany', 'delete', 'deleteMany', 'update', 'updateMany');

-- CreateEnum
CREATE TYPE "FormType" AS ENUM ('text', 'textarea', 'select', 'selectMany', 'checkbox', 'checkboxMany', 'date', 'dateRange', 'number', 'slider', 'radio', 'switch', 'file', 'code', 'video');

-- CreateEnum
CREATE TYPE "OptionsType" AS ENUM ('static', 'database', 'api');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "deleted" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "operatedById" TEXT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "provider" "AuthProvider" NOT NULL DEFAULT 'USER_PASS',
    "role" TEXT,
    "password" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "deleted" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "operatedById" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRole" (
    "id" TEXT NOT NULL,
    "deleted" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "operatedById" TEXT,
    "userId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "deleted" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "operatedById" TEXT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "hit" INTEGER NOT NULL DEFAULT 0,
    "like" INTEGER NOT NULL DEFAULT 0,
    "image" TEXT,
    "status" "PostStatus" NOT NULL DEFAULT 'DRAFT',
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "deleted" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "operatedById" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "casbin_rule" (
    "id" TEXT NOT NULL,
    "deleted" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "operatedById" TEXT,
    "ptype" TEXT NOT NULL,
    "v0" TEXT NOT NULL,
    "v1" TEXT NOT NULL,
    "v2" TEXT NOT NULL,
    "v3" TEXT,
    "v4" TEXT,

    CONSTRAINT "casbin_rule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FrontRouteProject" (
    "id" TEXT NOT NULL,
    "deleted" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "operatedById" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "global" JSONB NOT NULL,

    CONSTRAINT "FrontRouteProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FrontRouteModule" (
    "id" TEXT NOT NULL,
    "deleted" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "operatedById" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "pathReplaceProject" TEXT,
    "pathReplaceModule" TEXT,
    "global" JSONB,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "FrontRouteModule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditRecord" (
    "id" TEXT NOT NULL,
    "deleted" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "operatedById" TEXT,
    "title" TEXT NOT NULL,
    "dataPrevious" JSONB,
    "data" JSONB,
    "meta" JSONB NOT NULL,
    "resource" TEXT NOT NULL,
    "error" TEXT,
    "status" "AuditStatus" NOT NULL DEFAULT 'PENDING',
    "channel" "AuditChannel" NOT NULL DEFAULT 'SELF',
    "action" "LogAction" NOT NULL,

    CONSTRAINT "AuditRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Log" (
    "id" TEXT NOT NULL,
    "deleted" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "operatedById" TEXT,
    "resource" TEXT NOT NULL,
    "action" "LogAction" NOT NULL,
    "data" JSONB,
    "dataPrevious" JSONB,
    "meta" JSONB,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" TEXT NOT NULL,
    "deleted" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "operatedById" TEXT,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "order" INTEGER DEFAULT 0,
    "isActive" BOOLEAN DEFAULT true,
    "list" TEXT,
    "create" TEXT,
    "edit" TEXT,
    "show" TEXT,
    "clone" TEXT,
    "meta" JSONB,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DynamicPage" (
    "id" TEXT NOT NULL,
    "deleted" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "operatedById" TEXT,
    "path" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "isActive" BOOLEAN DEFAULT true,
    "enableCreate" BOOLEAN,
    "enableDelete" BOOLEAN,
    "enableEdit" BOOLEAN,
    "enableClone" BOOLEAN,
    "tableSql" TEXT NOT NULL,
    "tableRecordLink" JSONB,
    "formField" JSONB,
    "meta" JSONB,

    CONSTRAINT "DynamicPage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_name_idx" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Role_title_key" ON "Role"("title");

-- CreateIndex
CREATE INDEX "Role_operatedById_idx" ON "Role"("operatedById");

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_userId_roleId_key" ON "UserRole"("userId", "roleId");

-- CreateIndex
CREATE INDEX "Post_operatedById_idx" ON "Post"("operatedById");

-- CreateIndex
CREATE INDEX "Post_categoryId_idx" ON "Post"("categoryId");

-- CreateIndex
CREATE INDEX "Post_status_idx" ON "Post"("status");

-- CreateIndex
CREATE INDEX "Post_title_idx" ON "Post"("title");

-- CreateIndex
CREATE INDEX "Post_createdAt_idx" ON "Post"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Category_title_key" ON "Category"("title");

-- CreateIndex
CREATE INDEX "Category_operatedById_idx" ON "Category"("operatedById");

-- CreateIndex
CREATE INDEX "Category_title_idx" ON "Category"("title");

-- CreateIndex
CREATE INDEX "casbin_rule_operatedById_idx" ON "casbin_rule"("operatedById");

-- CreateIndex
CREATE INDEX "casbin_rule_ptype_v0_v1_v2_idx" ON "casbin_rule"("ptype", "v0", "v1", "v2");

-- CreateIndex
CREATE UNIQUE INDEX "FrontRouteProject_title_key" ON "FrontRouteProject"("title");

-- CreateIndex
CREATE INDEX "FrontRouteProject_title_idx" ON "FrontRouteProject"("title");

-- CreateIndex
CREATE UNIQUE INDEX "FrontRouteModule_title_key" ON "FrontRouteModule"("title");

-- CreateIndex
CREATE INDEX "FrontRouteModule_title_idx" ON "FrontRouteModule"("title");

-- CreateIndex
CREATE INDEX "AuditRecord_title_idx" ON "AuditRecord"("title");

-- CreateIndex
CREATE INDEX "AuditRecord_status_idx" ON "AuditRecord"("status");

-- CreateIndex
CREATE INDEX "AuditRecord_resource_idx" ON "AuditRecord"("resource");

-- CreateIndex
CREATE INDEX "AuditRecord_operatedById_idx" ON "AuditRecord"("operatedById");

-- CreateIndex
CREATE INDEX "Log_operatedById_idx" ON "Log"("operatedById");

-- CreateIndex
CREATE INDEX "Log_resource_idx" ON "Log"("resource");

-- CreateIndex
CREATE INDEX "Log_action_idx" ON "Log"("action");

-- CreateIndex
CREATE INDEX "Menu_name_idx" ON "Menu"("name");

-- CreateIndex
CREATE INDEX "Menu_operatedById_idx" ON "Menu"("operatedById");

-- CreateIndex
CREATE UNIQUE INDEX "DynamicPage_path_key" ON "DynamicPage"("path");

-- CreateIndex
CREATE INDEX "DynamicPage_path_idx" ON "DynamicPage"("path");

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_operatedById_fkey" FOREIGN KEY ("operatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FrontRouteProject" ADD CONSTRAINT "FrontRouteProject_operatedById_fkey" FOREIGN KEY ("operatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FrontRouteModule" ADD CONSTRAINT "FrontRouteModule_operatedById_fkey" FOREIGN KEY ("operatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FrontRouteModule" ADD CONSTRAINT "FrontRouteModule_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "FrontRouteProject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditRecord" ADD CONSTRAINT "AuditRecord_operatedById_fkey" FOREIGN KEY ("operatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_operatedById_fkey" FOREIGN KEY ("operatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
