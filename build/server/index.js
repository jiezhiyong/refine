var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable, createCookieSessionStorage, redirect as redirect$1, data as data$1 } from "@remix-run/node";
import { RemixServer, useNavigate, useSearchParams, useFetcher, Link as Link$1, useRouteError, isRouteErrorResponse, useActionData, useNavigation as useNavigation$1, Form as Form$2, useRouteLoaderData, useMatches as useMatches$1, Outlet, data, useLoaderData, Meta, Links, ScrollRestoration, Scripts, useViewTransitionState } from "@remix-run/react";
import * as Sentry from "@sentry/remix";
import { withSentry, captureRemixErrorBoundaryError } from "@sentry/remix";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import * as SentryProfiling from "@sentry/profiling-node";
import { useTranslate, useRouterContext, useRouterType, useLink, useBreadcrumb, useRefineContext, useResource, matchResourceFromRoute, useCloneButton, useCreateButton, useParsed, useBack, useDeleteButton, useEditButton, useExportButton, useExport, useCan, useImport, useImportButton, useSaveButton, CanAccess, useShowButton, useGetToPath, useGo, useDelete, useNavigation, useUserFriendlyName, useCanWithoutCache, AccessControlContext, useResourceParams, useMutationMode, useWarnAboutChange, pickNotDeprecated, useMenu, useTable as useTable$1, useTranslation, useLogout, Refine, useSelect, useDeleteMany, useModal, useNotification, useUpdate } from "@refinedev/core";
import { DevtoolsProvider, DevtoolsPanel } from "@refinedev/devtools";
import routerProvider, { UnsavedChangesNotifier, parseTableParams } from "@refinedev/remix-router";
import { BicepsFlexed, AudioLines, Baby, PieChart, Brain, UsersRound, Bot, ChevronRight, HomeIcon, Loader2, CopyCheck, CirclePlus, X, Search, XIcon, CheckIcon as CheckIcon$1, Undo2, ChevronDown, ChevronUp, Check, Trash2Icon, Pencil, Download, Upload, CheckCheck, EyeIcon, ArrowLeftToLine, ListIcon, PanelLeft, Circle, Trash2, Eye, ChevronLeft, FilterX, FilterIcon, GalleryVerticalEnd, Fullscreen, Languages, Filter, Sun, Moon, Bug, Activity, ChevronsUpDown, BadgeCheck, CreditCard, Bell, LogOut, Plus, Loader as Loader$1, LeafyGreen, CalendarIcon, ClockIcon, MailIcon, Paperclip, Star, MoreHorizontal, Settings2, FileText, Link as Link$2, Copy, CornerUpRight, CornerUpLeft, LineChart, Trash, ArrowUp, ArrowDown } from "lucide-react";
import nProgress from "nprogress";
import * as React from "react";
import React__default, { forwardRef, Fragment as Fragment$1, useState, useMemo, isValidElement, cloneElement, useRef, useContext, useEffect, createContext, useCallback, memo } from "react";
import { Theme, useTheme, ThemeProvider, PreventFlashOnWrongTheme } from "remix-themes";
import { useMatches, KBarResults, KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, KBarContext, VisualState, useRegisterActions, createAction, KBarProvider, Priority, useKBar } from "kbar";
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from "@tanstack/react-table";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { hmac } from "@noble/hashes/hmac";
import { sha256 } from "@noble/hashes/sha256";
import { bytesToHex } from "@noble/hashes/utils";
import invariant from "tiny-invariant";
import isEqual from "lodash/isEqual.js";
import { CaretSortIcon, CheckIcon, DotsHorizontalIcon, DotsVerticalIcon, DoubleArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, DoubleArrowRightIcon, CaretUpIcon, CaretDownIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownMenuTrigger as DropdownMenuTrigger$1 } from "@radix-ui/react-dropdown-menu";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Command as Command$1 } from "cmdk";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { PopoverTrigger as PopoverTrigger$1 } from "@radix-ui/react-popover";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { Toaster as Toaster$1, toast } from "sonner";
import { CondOperator, RequestQueryBuilder } from "@nestjsx/crud-request";
import queryString from "query-string";
import axios from "axios";
import i18next, { use, changeLanguage, t } from "i18next";
import Cookies from "js-cookie";
import { initReactI18next } from "react-i18next";
import { newModelFromString, newEnforcer } from "casbin";
import { PrismaAdapter } from "casbin-prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useModalForm, useStepsForm } from "@refinedev/react-hook-form";
import { z } from "zod";
import { useFormContext, FormProvider, Controller } from "react-hook-form";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import dayjs from "dayjs";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { StyleSheet, PDFViewer, Document as Document$1, Page, View, Image as Image$1, Text } from "@react-pdf/renderer";
import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { ObjectParser } from "@edgefirst-dev/data/parser";
import { OAuth2Client, OAuth2RequestError, generateState, generateCodeVerifier, CodeChallengeMethod } from "arctic";
import createDebug from "debug";
import { Strategy } from "remix-auth/strategy";
import { SetCookie, Cookie } from "@mjackson/headers";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { useDebounceFn } from "ahooks";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { statSync, createReadStream } from "fs";
import path from "path";
import { PassThrough as PassThrough$1 } from "stream";
import sharp from "sharp";
let isInitialized = false;
function initSentry() {
  if (isInitialized) {
    return;
  }
  Sentry.init({
    dsn: process.env.VITE_SENTRY_DSN,
    environment: process.env.NODE_ENV,
    release: "oss@" + process.env.npm_package_version,
    tracesSampleRate: 1,
    autoInstrumentRemix: true,
    integrations: [
      Sentry.prismaIntegration(),
      Sentry.anrIntegration({ captureStackTrace: true }),
      Sentry.extraErrorDataIntegration(),
      SentryProfiling.nodeProfilingIntegration()
    ]
  });
  isInitialized = true;
}
initSentry();
const ABORT_DELAY = 5e3;
async function handleRequest(request2, responseStatusCode, responseHeaders, remixContext) {
  return isbot(request2.headers.get("user-agent") || "") ? handleBotRequest(request2, responseStatusCode, responseHeaders, remixContext) : handleBrowserRequest(request2, responseStatusCode, responseHeaders, remixContext);
}
function handleBotRequest(request2, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request2.url, abortDelay: ABORT_DELAY }),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error("@handleBotRequest", error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request2, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request2.url, abortDelay: ABORT_DELAY }),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error("@handleBrowserRequest", error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const handleError$1 = Sentry.wrapHandleErrorWithSentry((_error, { request: request2 }) => {
  if (!request2.signal.aborted) ;
});
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  handleError: handleError$1
}, Symbol.toStringTag, { value: "Module" }));
const nProgressStyles = "/assets/nprogress-BgDCIyLK.css";
function canUseDOM() {
  return typeof document !== "undefined";
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
async function getAllParams(request2, params = {}) {
  const url = new URL(request2.url);
  const searchParams = Object.fromEntries(url.searchParams.entries());
  let formDataParams = {};
  if (request2.method === "POST" || request2.method === "PUT") {
    const formData = await request2.formData();
    formDataParams = Object.fromEntries(formData.entries());
  }
  return {
    ...searchParams,
    ...formDataParams,
    ...params
  };
}
const isServer = !canUseDOM();
const baseUrl = "http://localhost:3000";
const apiBase = `${baseUrl}/api`;
const enTranslation = {
  title: "Full-stack WEB framework (en)",
  description: "Focus on building data-intensive web applications more quickly and easily, while providing a fast, smooth user experience.",
  pages: {
    login: {
      title: "Sign in to your account",
      signin: "Sign in",
      signup: "Sign up",
      divider: "or",
      fields: {
        email: "Email",
        password: "Password"
      },
      errors: {
        validEmail: "Invalid email address",
        requiredEmail: "Email is required",
        requiredPassword: "Password is required"
      },
      buttons: {
        submit: "Login",
        forgotPassword: "Forgot password?",
        noAccount: "Don’t have an account?",
        rememberMe: "Remember me"
      }
    },
    forgotPassword: {
      title: "Forgot your password?",
      fields: {
        email: "Email"
      },
      errors: {
        validEmail: "Invalid email address",
        requiredEmail: "Email is required"
      },
      buttons: {
        submit: "Send reset instructions"
      }
    },
    register: {
      title: "Sign up for your account",
      fields: {
        email: "Email",
        password: "Password"
      },
      errors: {
        validEmail: "Invalid email address",
        requiredEmail: "Email is required",
        requiredPassword: "Password is required"
      },
      buttons: {
        submit: "Register",
        haveAccount: "Have an account?"
      }
    },
    updatePassword: {
      title: "Update password",
      fields: {
        password: "New Password",
        confirmPassword: "Confirm new password"
      },
      errors: {
        confirmPasswordNotMatch: "Passwords do not match",
        requiredPassword: "Password required",
        requiredConfirmPassword: "Confirm password is required"
      },
      buttons: {
        submit: "Update"
      }
    },
    error: {
      info: "You may have forgotten to add the {{action}} component to {{resource}} resource.",
      "404": "Sorry, the page you visited does not exist.",
      resource404: "Are you sure you have created the {{resource}} resource.",
      backHome: "Back Home"
    }
  },
  actions: {
    list: "List",
    create: "Create",
    edit: "Edit",
    show: "Show"
  },
  buttons: {
    create: "Create",
    save: "Save",
    logout: "Logout",
    delete: "Delete",
    edit: "Edit",
    cancel: "Cancel",
    confirm: "Are you sure?",
    filter: "Filter",
    clear: "Clear",
    refresh: "Refresh",
    show: "Show",
    undo: "Undo",
    import: "Import",
    clone: "Clone",
    notAccessTitle: "You don't have permission to access"
  },
  warnWhenUnsavedChanges: "Are you sure you want to leave? You have unsaved changes.",
  notifications: {
    success: "Successful",
    error: "Error (status code: {{statusCode}})",
    undoable: "You have {{seconds}} seconds to undo",
    createSuccess: "Successfully created {{resource}}",
    createError: "There was an error creating {{resource}} (status code: {{statusCode}})",
    deleteSuccess: "Successfully deleted {{resource}}",
    deleteError: "Error when deleting {{resource}} (status code: {{statusCode}})",
    editSuccess: "Successfully edited {{resource}}",
    editError: "Error when editing {{resource}} (status code: {{statusCode}})",
    importProgress: "Importing: {{processed}}/{{total}}"
  },
  loading: "Loading",
  tags: {
    clone: "Clone"
  },
  dashboard: {
    title: "Dashboard"
  },
  post: {
    posts: "Posts",
    fields: {
      id: "Id",
      title: "Title",
      category: "Category",
      status: {
        title: "Status",
        published: "Published",
        draft: "Draft",
        rejected: "Rejected"
      },
      content: "Content",
      createdAt: "Created At"
    },
    titles: {
      create: "Create Post",
      edit: "Edit Post",
      list: "Posts",
      show: "Show Post"
    }
  },
  table: {
    actions: "Actions"
  },
  documentTitle: {
    default: "refine",
    suffix: " | Refine",
    post: {
      list: "Posts | Refine",
      show: "#{{id}} Show Post | Refine",
      edit: "#{{id}} Edit Post | Refine",
      create: "Create new Post | Refine",
      clone: "#{{id}} Clone Post | Refine"
    }
  },
  autoSave: {
    success: "saved",
    error: "auto save failed",
    loading: "saving ...",
    idle: "waiting for changes ..."
  }
};
const zhTranslation = {
  title: "全栈式 WEB 框架 (zh)",
  description: "专注于更快速、轻松的构建数据密集型 Web 应用程序，同时提供快速、流畅的用户体验。",
  pages: {
    login: {
      title: "登录您的账户",
      signin: "登录",
      signup: "注册",
      divider: "或",
      fields: {
        email: "邮箱",
        password: "密码"
      },
      errors: {
        validEmail: "无效的邮箱地址",
        requiredEmail: "邮箱是必填项",
        requiredPassword: "密码是必填项"
      },
      buttons: {
        submit: "登录",
        forgotPassword: "忘记密码？",
        noAccount: "没有账户？",
        rememberMe: "记住我"
      }
    },
    forgotPassword: {
      title: "忘记密码？",
      fields: {
        email: "邮箱"
      },
      errors: {
        validEmail: "无效的邮箱地址",
        requiredEmail: "邮箱是必填项"
      },
      buttons: {
        submit: "发送重置说明"
      }
    },
    register: {
      title: "注册账户",
      fields: {
        email: "邮箱",
        password: "密码"
      },
      errors: {
        validEmail: "无效的邮箱地址",
        requiredEmail: "邮箱是必填项",
        requiredPassword: "密码是必填项"
      },
      buttons: {
        submit: "注册",
        haveAccount: "已有账户？"
      }
    },
    updatePassword: {
      title: "更新密码",
      fields: {
        password: "新密码",
        confirmPassword: "确认新密码"
      },
      errors: {
        confirmPasswordNotMatch: "密码不匹配",
        requiredPassword: "密码是必填项",
        requiredConfirmPassword: "确认密码是必填项"
      },
      buttons: {
        submit: "更新"
      }
    },
    error: {
      info: "您可能忘记将 {{action}} 组件添加到 {{resource}} 资源中。",
      "404": "抱歉，您访问的页面不存在。",
      resource404: "请确认您是否已创建 {{resource}} 资源。",
      backHome: "返回首页"
    }
  },
  actions: {
    list: "列表",
    create: "创建",
    edit: "编辑",
    show: "查看"
  },
  buttons: {
    create: "创建",
    save: "保存",
    logout: "退出登录",
    delete: "删除",
    edit: "编辑",
    cancel: "取消",
    confirm: "确定吗？",
    filter: "筛选",
    clear: "清除",
    refresh: "刷新",
    show: "显示",
    undo: "撤销",
    import: "导入",
    clone: "克隆",
    notAccessTitle: "您没有访问权限"
  },
  warnWhenUnsavedChanges: "确定要离开吗？您有未保存的更改。",
  notifications: {
    success: "操作成功",
    error: "错误（状态码：{{statusCode}}）",
    undoable: "您有 {{seconds}} 秒可以撤销",
    createSuccess: "成功创建 {{resource}}",
    createError: "创建 {{resource}} 时出错（状态码：{{statusCode}}）",
    deleteSuccess: "成功删除 {{resource}}",
    deleteError: "删除 {{resource}} 时出错（状态码：{{statusCode}}）",
    editSuccess: "成功编辑 {{resource}}",
    editError: "编辑 {{resource}} 时出错（状态码：{{statusCode}}）",
    importProgress: "导入进度：{{processed}}/{{total}}"
  },
  loading: "加载中",
  tags: {
    clone: "克隆"
  },
  dashboard: {
    title: "仪表盘"
  },
  post: {
    posts: "文章",
    fields: {
      id: "编号",
      title: "标题",
      category: "分类",
      status: {
        title: "状态",
        published: "已发布",
        draft: "草稿",
        rejected: "已拒绝"
      },
      content: "内容",
      createdAt: "创建时间"
    },
    titles: {
      create: "创建文章",
      edit: "编辑文章",
      list: "文章列表",
      show: "查看文章"
    }
  },
  table: {
    actions: "操作"
  },
  documentTitle: {
    default: "refine",
    suffix: " | Refine",
    post: {
      list: "文章列表 | Refine",
      show: "#{{id}} 查看文章 | Refine",
      edit: "#{{id}} 编辑文章 | Refine",
      create: "创建新文章 | Refine",
      clone: "#{{id}} 克隆文章 | Refine"
    }
  },
  autoSave: {
    success: "已保存",
    error: "自动保存失败",
    loading: "保存中...",
    idle: "等待更改"
  }
};
const supportedLanguages = ["en", "zh"];
const fallbackLanguage = "en";
const defaultNS = "translation";
const resourcesLanguages = {
  en: { [defaultNS]: enTranslation },
  zh: { [defaultNS]: zhTranslation }
};
const DEFAULT_PAGE_SIZE = 20;
var EnumAction = /* @__PURE__ */ ((EnumAction2) => {
  EnumAction2["list"] = "list";
  EnumAction2["show"] = "show";
  EnumAction2["create"] = "create";
  EnumAction2["edit"] = "edit";
  EnumAction2["delete"] = "delete";
  EnumAction2["field"] = "field";
  EnumAction2["import"] = "import";
  EnumAction2["export"] = "export";
  EnumAction2["clone"] = "clone";
  return EnumAction2;
})(EnumAction || {});
var EnumAuthProvider = /* @__PURE__ */ ((EnumAuthProvider2) => {
  EnumAuthProvider2["userpass"] = "userpass";
  EnumAuthProvider2["tcshuke"] = "tcshuke";
  return EnumAuthProvider2;
})(EnumAuthProvider || {});
var EnumResource = /* @__PURE__ */ ((EnumResource2) => {
  EnumResource2["user"] = "user";
  EnumResource2["role"] = "role";
  EnumResource2["log"] = "log";
  EnumResource2["post"] = "post";
  EnumResource2["category"] = "category";
  return EnumResource2;
})(EnumResource || {});
var EnumRole = /* @__PURE__ */ ((EnumRole2) => {
  EnumRole2["administrator"] = "administrator";
  EnumRole2["editor"] = "editor";
  EnumRole2["guest"] = "guest";
  return EnumRole2;
})(EnumRole || {});
const rolesAll = [
  { label: "Administrator", value: "administrator", icon: BicepsFlexed },
  { label: "Editor", value: "editor", icon: AudioLines },
  { label: "Guest", value: "guest", icon: Baby }
];
var EnumRoleId = /* @__PURE__ */ ((EnumRoleId2) => {
  EnumRoleId2["administrator"] = "1";
  EnumRoleId2["editor"] = "2";
  EnumRoleId2["guest"] = "3";
  return EnumRoleId2;
})(EnumRoleId || {});
const dataResources = [
  // 一级菜单 playground
  {
    name: "playground",
    meta: {}
  },
  // 二级菜单 playground/dashboard
  {
    name: "dashboard",
    meta: { parent: "playground", icon: PieChart }
  },
  // 三级菜单 playground/dashboard/About、Techstack
  {
    name: "about",
    list: "/playground/dashboard/about",
    meta: { parent: "dashboard" }
  },
  {
    name: "demo",
    list: "/playground/dashboard/demo",
    meta: { parent: "dashboard" }
  },
  {
    name: "viewTransition",
    list: "/playground/dashboard/viewTransition",
    meta: { parent: "dashboard", label: "viewTransition" }
  },
  {
    name: "health",
    list: "/playground/dashboard/health",
    meta: { parent: "dashboard" }
  },
  // 二级菜单 playground/document
  {
    name: "article",
    meta: { parent: "playground", icon: Brain }
  },
  // 三级菜单 playground/dashboard/Post、Category
  {
    name: EnumResource.post,
    list: `/playground/article/${EnumResource.post}`,
    create: `/playground/article/${EnumResource.post}/create`,
    edit: `/playground/article/${EnumResource.post}/edit/:id`,
    show: `/playground/article/${EnumResource.post}/show/:id`,
    clone: `/playground/article/${EnumResource.post}/clone/:id`,
    meta: { parent: "article" }
  },
  {
    name: EnumResource.category,
    meta: { parent: "article" }
  },
  // 一级菜单 system
  {
    name: "system",
    meta: {}
  },
  // 二级菜单 system/account
  {
    name: "account",
    meta: { parent: "system", icon: UsersRound }
  },
  // 三级菜单 system/account/Role、User
  {
    name: EnumResource.user,
    list: `/system/account/${EnumResource.user}`,
    create: `/system/account/${EnumResource.user}/create`,
    edit: `/system/account/${EnumResource.user}/edit/:id`,
    show: `/system/account/${EnumResource.user}/show/:id`,
    meta: { parent: "account" }
  },
  {
    name: EnumResource.role,
    list: `/system/account/${EnumResource.role}`,
    create: `/system/account/${EnumResource.role}/create`,
    edit: `/system/account/${EnumResource.role}/edit/:id`,
    show: `/system/account/${EnumResource.role}/show/:id`,
    meta: { parent: "account" }
  },
  // 二级菜单 system/admin
  {
    name: "admin",
    meta: { parent: "system", icon: Bot }
  },
  // 三级菜单 system/admin/Log
  {
    name: EnumResource.log,
    list: `/system/admin/${EnumResource.log}`,
    show: `/system/admin/${EnumResource.log}/show/:id`,
    meta: { parent: "admin" }
  }
];
function getDefaultTitle(matches) {
  const { pathname } = matches[matches.length - 1];
  const matchedResource = dataResources.find((r) => pathname.startsWith(r.list));
  const { name, meta: meta2 } = matchedResource || {};
  let title = (meta2 == null ? void 0 : meta2.title) || name || "OSS Inc.";
  title = title.charAt(0).toUpperCase() + title.slice(1);
  let action2 = pathname.replace(`${matchedResource == null ? void 0 : matchedResource.list}/`, "").split("/").shift();
  action2 = action2.charAt(0).toUpperCase() + action2.slice(1);
  return action2 ? `${title} · ${action2}` : title;
}
const getRequestData = async (request2) => {
  const contentType = request2.headers.get("content-type");
  let data2;
  if (contentType == null ? void 0 : contentType.includes("application/json")) {
    data2 = await request2.json();
  } else if ((contentType == null ? void 0 : contentType.includes("application/x-www-form-urlencoded")) || (contentType == null ? void 0 : contentType.includes("multipart/form-data"))) {
    const formData = await request2.formData();
    data2 = Object.fromEntries(formData);
  } else {
    const text = await request2.text();
    try {
      data2 = JSON.parse(text);
    } catch {
      data2 = { value: text };
    }
  }
  return data2;
};
function getPaginationFromUrl(url) {
  const limit = Number(url.searchParams.get("limit")) || DEFAULT_PAGE_SIZE;
  const page = Number(url.searchParams.get("page")) || 1;
  return {
    current: page,
    pageSize: limit
  };
}
function getSortersFromUrl(url) {
  const sortParam = url.searchParams.get("sort[0]");
  if (!sortParam) return [];
  const [field, order] = sortParam.split(",");
  return [
    {
      field,
      order: order.toLowerCase()
    }
  ];
}
function getFiltersFromUrl(url) {
  const searchParam = url.searchParams.get("s");
  if (!searchParam) {
    return [];
  }
  try {
    const searchObj = JSON.parse(decodeURIComponent(searchParam));
    if (!searchObj.$and) {
      return [];
    }
    return searchObj.$and.map((condition) => {
      const [field] = Object.keys(condition);
      const operatorMap = {
        $eq: "eq",
        $contL: "contains",
        $in: "in"
      };
      const operator = Object.keys(condition[field])[0];
      const mappedOperator = operatorMap[operator] || "contains";
      const value = condition[field][operator];
      return {
        field,
        operator: mappedOperator,
        value
      };
    });
  } catch (error) {
    console.error("解析过滤参数错误:", error);
    return [];
  }
}
function getJoinFromUrl(url) {
  const joinParams = [];
  for (let i = 0; ; i++) {
    const param = url.searchParams.get(`join[${i}]`);
    if (!param) break;
    joinParams.push(param);
  }
  if (joinParams.length === 0) return void 0;
  const include = {};
  joinParams.forEach((param) => {
    const [relation, fields] = param.split("||");
    if (!relation || !fields) return;
    include[relation] = {
      select: fields.split(",").reduce(
        (acc, field) => ({
          ...acc,
          [field]: true
        }),
        {}
      )
    };
  });
  return Object.keys(include).length > 0 ? include : void 0;
}
const isISODateString = (value) => {
  if (!value || typeof value !== "string") return false;
  try {
    const date = new Date(value);
    return !isNaN(date.getTime()) && value.includes("T");
  } catch {
    return false;
  }
};
const processDateValue = (value, operator) => {
  if (Array.isArray(value)) {
    const dates = value.map((v) => {
      if (typeof v === "string" && isISODateString(v)) {
        return new Date(v);
      }
      return v;
    });
    const allDates = dates.every((d) => d instanceof Date);
    if (allDates && dates.length) {
      if (operator === "gte") {
        return { gte: dates[0] };
      }
      if (operator === "lte") {
        return { lte: dates[1] };
      }
      const condition = { gte: dates[0] };
      if (dates[1]) {
        condition.lte = dates[1];
      }
      return condition;
    }
    return dates;
  }
  if (typeof value === "string" && isISODateString(value)) {
    return new Date(value);
  }
  return value;
};
const processDateFields = (obj) => {
  if (!obj) return obj;
  return Object.entries(obj).reduce(
    (acc, [key, value]) => {
      if (value && typeof value === "object") {
        if (value.in && Array.isArray(value.in)) {
          const processed = processDateValue(value.in);
          if (processed && typeof processed === "object" && "gte" in processed) {
            acc[key] = processed;
          } else {
            acc[key] = value;
          }
        } else {
          acc[key] = Object.entries(value).reduce((subAcc, [subKey, subValue]) => {
            const processed = processDateValue(subValue, subKey);
            return { ...subAcc, [subKey]: processed };
          }, {});
        }
      } else {
        acc[key] = processDateValue(value);
      }
      return acc;
    },
    {}
  );
};
function buildWhereClause(filters = []) {
  return filters.reduce((acc, filter) => {
    const meta2 = filter.meta;
    const operator = (meta2 == null ? void 0 : meta2.filterOperator) || filter.operator;
    switch (operator) {
      case "eq":
        return { ...acc, [filter.field]: filter.value };
      case "contains":
        return { ...acc, [filter.field]: { contains: filter.value } };
      case "gt":
        return { ...acc, [filter.field]: { gt: filter.value } };
      case "lt":
        return { ...acc, [filter.field]: { lt: filter.value } };
      case "gte":
        return { ...acc, [filter.field]: { gte: filter.value } };
      case "lte":
        return { ...acc, [filter.field]: { lte: filter.value } };
      case "in": {
        const values = Array.isArray(filter.value) ? filter.value : filter.value.toString().split(",");
        const parsedValues = filter.field === "id" ? values : values.map((v) => {
          const num = Number(v);
          return isNaN(num) ? v : num;
        });
        return { ...acc, [filter.field]: { in: parsedValues } };
      }
      default:
        return acc;
    }
  }, {});
}
function buildOrderByClause(sorters = []) {
  return sorters.reduce(
    (acc, sorter) => ({
      ...acc,
      [sorter.field]: sorter.order
    }),
    {}
  );
}
function parseRefineFilters(filters) {
  return filters.map((filter) => {
    if (filter.field.startsWith("filter[")) {
      const [field, operator, value] = filter.value.split("||");
      return {
        field,
        operator: operator.replace("$", ""),
        value
      };
    }
    return filter;
  });
}
const SECRET = canUseDOM() ? "super-duper-s3cret" : process.env.VITE_SECRET;
invariant(SECRET, "VITE_SECRET must be set.");
const SIGNATURE_EXPIRATION = 5 * 60 * 1e3;
function generateSignatureSync(payload) {
  const data2 = JSON.stringify(payload);
  const signature = hmac(sha256, SECRET, data2);
  return bytesToHex(signature);
}
async function generateSignature(payload, timestamp) {
  const timestampedPayload = {
    data: payload,
    timestamp: timestamp || Date.now()
  };
  return generateSignatureSync(timestampedPayload);
}
async function verifySignature(timestampedPayload, signature) {
  if (timestampedPayload.timestamp) {
    const now = Date.now();
    if (now - timestampedPayload.timestamp > SIGNATURE_EXPIRATION) {
      return false;
    }
  }
  const expectedSignature = generateSignatureSync(timestampedPayload);
  return signature === expectedSignature;
}
const moduleCache = {};
const singleton = (name, valueFactory) => {
  var _a;
  if (process.env.NODE_ENV === "production") {
    moduleCache[name] ?? (moduleCache[name] = valueFactory());
    return moduleCache[name];
  }
  const g = global;
  g.__singletons ?? (g.__singletons = {});
  (_a = g.__singletons)[name] ?? (_a[name] = valueFactory());
  return g.__singletons[name];
};
const tryParse = (jsonString) => {
  let jsonObject = {};
  let status = false;
  if (typeof jsonString === "string" && jsonString.includes("{") && jsonString.includes("}")) {
    try {
      jsonObject = JSON.parse(jsonString);
      status = true;
    } catch (error) {
    }
  }
  return {
    status,
    data: status ? jsonObject : void 0,
    original: jsonString
  };
};
async function makeRequest(requestUrl, options = {}) {
  const headers2 = {
    "Content-Type": "application/x-www-form-urlencoded",
    ...options.headers
  };
  return fetch(requestUrl, {
    ...options,
    headers: headers2
  });
}
const convertToFormData = (data2) => {
  if (isServer) {
    const params = new URLSearchParams();
    Object.entries(data2).forEach(([key, value]) => {
      if (value != null) {
        params.append(key, String(value));
      }
    });
    return params;
  }
  const formData = new FormData();
  Object.entries(data2).forEach(([key, value]) => {
    if (value != null) {
      formData.append(key, String(value));
    }
  });
  return formData;
};
const request = async (method, path2, data2, options = {}) => {
  const url = `${apiBase}${path2}`;
  const body = data2 ? convertToFormData(data2) : void 0;
  const requestOptions = {
    ...options,
    method,
    credentials: "include",
    body: body instanceof URLSearchParams ? body.toString() : body
  };
  if (data2) {
    const timestamp = Date.now();
    const headers2 = {
      ...requestOptions.headers || {},
      "X-Timestamp": timestamp.toString(),
      "X-Signature": await generateSignature(data2, timestamp)
    };
    requestOptions.headers = headers2;
  }
  return makeRequest(url, requestOptions);
};
const webapi = {
  get: (path2, options) => {
    return request("GET", path2, void 0, options);
  },
  post: (path2, data2, options) => {
    return request("POST", path2, data2, options);
  },
  put: (path2, data2, options) => {
    return request("PUT", path2, data2, options);
  },
  delete: (path2, options) => {
    return request("DELETE", path2, void 0, options);
  }
};
const AutoSaveIndicator = ({
  status,
  elements: {
    success = /* @__PURE__ */ jsx(Message, { translationKey: "autoSave.success", defaultMessage: "saved" }),
    error = /* @__PURE__ */ jsx(Message, { translationKey: "autoSave.error", defaultMessage: "auto save failed" }),
    loading = /* @__PURE__ */ jsx(Message, { translationKey: "autoSave.loading", defaultMessage: "saving ..." }),
    idle = /* @__PURE__ */ jsx(Message, { translationKey: "autoSave.idle", defaultMessage: "waiting for changes ..." })
  } = {}
}) => {
  switch (status) {
    case "success":
      return /* @__PURE__ */ jsx(Fragment, { children: success });
    case "error":
      return /* @__PURE__ */ jsx(Fragment, { children: error });
    case "loading":
      return /* @__PURE__ */ jsx(Fragment, { children: loading });
    default:
      return /* @__PURE__ */ jsx(Fragment, { children: idle });
  }
};
const Message = ({ translationKey, defaultMessage }) => {
  const translate = useTranslate();
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: cn("text-muted-foreground text-sm", {
        "text-destructive": translationKey === "autoSave.error",
        "text-green-500": translationKey === "autoSave.success"
      }),
      children: [
        translate(translationKey, defaultMessage),
        translationKey === "autoSave.success" && ` at ${dayjs().format("HH:mm:ss")}`
      ]
    }
  );
};
const Breadcrumb = React.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx("nav", { ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "ol",
    {
      ref,
      className: cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      ),
      ...props
    }
  )
);
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("li", { ref, className: cn("inline-flex items-center gap-1.5", className), ...props })
);
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = React.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(Comp, { ref, className: cn("hover:text-foreground transition-colors", className), ...props });
});
BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbPage = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "span",
    {
      ref,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("text-foreground font-normal", className),
      ...props
    }
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";
const BreadcrumbSeparator = ({ children, className, ...props }) => /* @__PURE__ */ jsx("li", { role: "presentation", "aria-hidden": "true", className: cn("[&>svg]:h-3.5 [&>svg]:w-3.5", className), ...props, children: children ?? /* @__PURE__ */ jsx(ChevronRight, {}) });
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
const Link = forwardRef(({ children, href, title, className, asChild }, ref) => {
  const { Link: LegacyLink } = useRouterContext();
  const routerType = useRouterType();
  const Link2 = useLink();
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link2;
  const Comp = asChild ? Slot : ActiveLink;
  return /* @__PURE__ */ jsx(
    Comp,
    {
      prefetch: "intent",
      viewTransition: true,
      ref,
      to: href,
      className: cn("hover:bg-accent", className),
      title,
      children
    }
  );
});
Link.displayName = "Link";
const Breadcrumbs = ({ showHome = true, meta: meta2 }) => {
  var _a, _b, _c, _d, _e;
  const { breadcrumbs } = useBreadcrumb({
    meta: meta2
  });
  const { hasDashboard } = useRefineContext();
  const { resources } = useResource();
  const dashboardResource = resources[0];
  const rootRouteResource = matchResourceFromRoute("/", resources);
  const BreadCrumbItems = breadcrumbs.map(({ label, href }, key) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: href ? /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, className: "text-link hover:bg-transparent", children: /* @__PURE__ */ jsx(Link, { href, children: label }) }) : /* @__PURE__ */ jsx(BreadcrumbPage, { children: label }) }),
    key < breadcrumbs.length - 1 && /* @__PURE__ */ jsx(BreadcrumbSeparator, {})
  ] }, key));
  return /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
    showHome || hasDashboard || rootRouteResource.found ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(
        BreadcrumbLink,
        {
          href: (_a = dashboardResource.list) == null ? void 0 : _a.toString(),
          asChild: true,
          title: ((_b = dashboardResource == null ? void 0 : dashboardResource.meta) == null ? void 0 : _b.title) ?? dashboardResource.name ?? "Dashboard",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              className: "hover:bg-transparent",
              href: (_c = dashboardResource.list) == null ? void 0 : _c.toString(),
              title: ((_d = dashboardResource == null ? void 0 : dashboardResource.meta) == null ? void 0 : _d.title) ?? dashboardResource.name ?? "Dashboard",
              children: ((_e = dashboardResource == null ? void 0 : dashboardResource.meta) == null ? void 0 : _e.icon) ?? /* @__PURE__ */ jsx(HomeIcon, { className: "h-4 w-4" })
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsx(BreadcrumbSeparator, {})
    ] }) : null,
    BreadCrumbItems
  ] }) });
};
const LoadingIcon = React__default.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(Loader2, { ref, className: cn("h-4 w-4 animate-spin", className), ...props });
});
LoadingIcon.displayName = "LoadingIcon";
const clsOutline = "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-all ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
        outline: clsOutline,
        dashed: `${clsOutline} border-dashed`,
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        sm: "h-6 px-2 text-xs",
        default: "h-8 px-3 text-xs",
        md: "h-9 px-4 py-2",
        lg: "h-10 px-8",
        icon: "h-8 w-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, icon = null, loading = false, asChild = false, children, disabled, ...props }, ref) => {
    disabled = disabled || loading;
    const Icon = React.useMemo(() => {
      return loading ? /* @__PURE__ */ jsx(LoadingIcon, {}) : React.isValidElement(icon) ? icon : null;
    }, [icon, loading]);
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className }), disabled && "cursor-not-allowed"),
        ref,
        disabled,
        ...props,
        children: size === "icon" ? loading ? /* @__PURE__ */ jsx(Loader2, {}) : Icon || children : /* @__PURE__ */ jsxs(Fragment, { children: [
          Icon,
          children
        ] })
      }
    );
  }
);
Button.displayName = "Button";
const CloneButton = ({
  resource,
  recordItemId,
  hideText = false,
  accessControl,
  meta: meta2,
  onClick,
  children,
  ...props
}) => {
  const { to, LinkComponent, label, disabled, hidden, title, canAccess } = useCloneButton({
    id: recordItemId,
    resource,
    accessControl,
    meta: meta2
  });
  if (hidden) return null;
  const disabledNew = disabled || !(canAccess == null ? void 0 : canAccess.can);
  return /* @__PURE__ */ jsx(
    LinkComponent,
    {
      prefetch: "intent",
      viewTransition: true,
      className: cn(disabledNew && "pointer-events-none"),
      to,
      replace: false,
      onClick: (e) => {
        if (disabledNew) {
          e.preventDefault();
          return;
        }
        if (onClick) {
          e.preventDefault();
          onClick(e);
        }
      },
      children: /* @__PURE__ */ jsx(Button, { disabled: disabledNew, title, icon: /* @__PURE__ */ jsx(CopyCheck, {}), ...props, children: !hideText && (children ?? label) })
    }
  );
};
CloneButton.displayName = "CloneButton";
const CreateButton = ({
  resource,
  hideText = false,
  accessControl,
  meta: meta2,
  onClick,
  children,
  ...props
}) => {
  const { hidden, disabled, label, title, LinkComponent, to, canAccess } = useCreateButton({
    resource,
    accessControl,
    meta: meta2
  });
  if (hidden) return null;
  const disabledNew = disabled || !(canAccess == null ? void 0 : canAccess.can);
  return /* @__PURE__ */ jsx(
    LinkComponent,
    {
      prefetch: "intent",
      viewTransition: true,
      className: cn(disabledNew && "pointer-events-none"),
      to,
      replace: false,
      onClick: (e) => {
        if (disabledNew) {
          e.preventDefault();
          return;
        }
        if (onClick) {
          e.preventDefault();
          onClick(e);
        }
      },
      children: /* @__PURE__ */ jsx(Button, { disabled: disabledNew, title, icon: /* @__PURE__ */ jsx(CirclePlus, {}), ...props, children: !hideText && (children ?? label) })
    }
  );
};
CreateButton.displayName = "CreateButton";
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-[50%] left-[50%] z-50 grid max-h-[85vh] w-full max-w-xl translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-scroll border p-6 shadow-lg duration-200 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
          /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg leading-none font-semibold tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, { ref, className: cn("text-muted-foreground text-sm", className), ...props }));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const Command = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1,
  {
    ref,
    className: cn(
      "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
      className
    ),
    ...props
  }
));
Command.displayName = Command$1.displayName;
const CommandInput = React.forwardRef(({ className, ...props }, ref) => (
  // eslint-disable-next-line react/no-unknown-property
  /* @__PURE__ */ jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
    /* @__PURE__ */ jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ jsx(
      Command$1.Input,
      {
        ref,
        className: cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ...props
      }
    )
  ] })
));
CommandInput.displayName = Command$1.Input.displayName;
const CommandList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-x-hidden overflow-y-auto", className),
    ...props
  }
));
CommandList.displayName = Command$1.List.displayName;
const CommandEmpty = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(Command$1.Empty, { ref, className: "py-6 text-center text-sm", ...props }));
CommandEmpty.displayName = Command$1.Empty.displayName;
const CommandGroup = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Group,
  {
    ref,
    className: cn(
      "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = Command$1.Group.displayName;
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Command$1.Separator, { ref, className: cn("bg-border -mx-1 h-px", className), ...props }));
CommandSeparator.displayName = Command$1.Separator.displayName;
const CommandItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Item,
  {
    ref,
    className: cn(
      "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    ),
    ...props
  }
));
CommandItem.displayName = Command$1.Item.displayName;
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;
const Form$1 = FormProvider;
const FormFieldContext = React.createContext({});
const FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx(Controller, { ...props }) });
};
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
const FormItemContext = React.createContext({});
const FormItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    const id = React.useId();
    return /* @__PURE__ */ jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx("div", { ref, className: cn("space-y-2", className), ...props }) });
  }
);
FormItem.displayName = "FormItem";
const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx(Label, { ref, className: cn(error && "", className), htmlFor: formItemId, ...props });
});
FormLabel.displayName = "FormLabel";
const FormControl = React.forwardRef(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /* @__PURE__ */ jsx(
      Slot,
      {
        ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
      }
    );
  }
);
FormControl.displayName = "FormControl";
const FormDescription = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();
    return /* @__PURE__ */ jsx("p", { ref, id: formDescriptionId, className: cn("text-muted-foreground text-[0.8rem]", className), ...props });
  }
);
FormDescription.displayName = "FormDescription";
const FormMessage = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error == null ? void 0 : error.message) : children;
    if (!body) {
      return null;
    }
    return /* @__PURE__ */ jsx(
      "p",
      {
        ref,
        id: formMessageId,
        className: cn("text-destructive text-[0.8rem] font-medium", className),
        ...props,
        children: body
      }
    );
  }
);
FormMessage.displayName = "FormMessage";
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(ScrollAreaPrimitive.Root, { ref, className: cn("relative overflow-hidden", className), ...props, children: [
  /* @__PURE__ */ jsx(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
  /* @__PURE__ */ jsx(ScrollBar, {}),
  /* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {})
] }));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none transition-colors select-none",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(ScrollAreaPrimitive.ScrollAreaThumb, { className: "bg-border relative flex-1 rounded-full" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
const Combobox = forwardRef(({ popoverProps, ...props }, ref) => {
  var _a, _b, _c;
  const [open, setOpen] = useState(false);
  const value = () => {
    if (typeof props.value === "object" && "id" in props.value) {
      return props.value.id;
    }
    return props.value;
  };
  return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, ...popoverProps, children: [
    /* @__PURE__ */ jsx(PopoverTrigger$1, { asChild: true, children: /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsxs(
      Button,
      {
        disabled: props.disabled,
        variant: "outline",
        role: "combobox",
        "aria-expanded": open,
        className: cn("flex w-full justify-between sm:w-[500px]", !value() && "text-muted-foreground"),
        children: [
          value() ? (_b = (_a = props.options) == null ? void 0 : _a.find((option) => option.value === value())) == null ? void 0 : _b.label : props.placeholder ?? "Select",
          /* @__PURE__ */ jsx(CaretSortIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-full max-w-full p-0 sm:w-[400px]", children: /* @__PURE__ */ jsxs(Command, { className: "rounded-lg border shadow-md", ref, children: [
      /* @__PURE__ */ jsx(CommandInput, { placeholder: "Type a command or search..." }),
      /* @__PURE__ */ jsxs(CommandList, { children: [
        /* @__PURE__ */ jsx(CommandEmpty, { children: "No results found." }),
        /* @__PURE__ */ jsx(CommandGroup, { heading: "Suggestions", children: /* @__PURE__ */ jsx(ScrollArea, { className: "max-h-52 overflow-y-auto", children: (_c = props.options) == null ? void 0 : _c.map((option) => /* @__PURE__ */ jsxs(
          CommandItem,
          {
            value: option.label,
            onSelect: () => {
              var _a2;
              (_a2 = props.onChange) == null ? void 0 : _a2.call(props, option.value);
              setOpen(false);
            },
            children: [
              option.label,
              /* @__PURE__ */ jsx(
                CheckIcon,
                {
                  className: cn("ml-auto h-4 w-4", option.value === value() ? "opacity-100" : "opacity-0")
                }
              )
            ]
          },
          option.value
        )) }) })
      ] })
    ] }) })
  ] });
});
Combobox.displayName = "Combobox";
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-[5%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg dark:border-white/20 dark:bg-slate-950",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Title, { ref, className: cn("text-lg font-semibold", className), ...props }));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Description, { ref, className: cn("text-muted-foreground text-sm", className), ...props }));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
const AlertDialogAction = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Action,
  {
    ref,
    autoFocus: true,
    className: cn(
      buttonVariants({
        variant,
        size
      }),
      className
    ),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React.forwardRef(({ className, variant = "outline", size = "default", ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(buttonVariants({ variant, size }), "mt-2 sm:mt-0", className),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
const ConfirmDialog = ({
  children,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  okText = "Ok",
  cancelText = "Cancel",
  okButtonSize = "default",
  cancelButtonSize = "default",
  okButtonVariant = "default",
  cancelButtonVariant = "outline",
  loading = false,
  okIconSide = "left",
  cancelIconSide = "left",
  onConfirm,
  okIcon,
  cancelIcon,
  open,
  onOpenChange,
  defaultOpen
}) => {
  const CancelIcon = useMemo(() => {
    if (isValidElement(cancelIcon)) {
      return cancelIcon;
    }
    return /* @__PURE__ */ jsx(XIcon, {});
  }, [cancelIcon]);
  const OkIcon = useMemo(() => {
    if (loading) {
      return /* @__PURE__ */ jsx(LoadingIcon, {});
    }
    if (isValidElement(okIcon)) {
      return okIcon;
    }
    return /* @__PURE__ */ jsx(CheckIcon$1, {});
  }, [okIcon, loading]);
  return /* @__PURE__ */ jsxs(AlertDialog, { open, onOpenChange, defaultOpen, children: [
    /* @__PURE__ */ jsx(AlertDialogTrigger, { asChild: true, children }),
    /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsx(AlertDialogTitle, { children: title }),
        /* @__PURE__ */ jsx(AlertDialogDescription, { children: description })
      ] }),
      /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxs(AlertDialogCancel, { variant: cancelButtonVariant, size: cancelButtonSize, disabled: loading, children: [
          cancelIconSide === "left" && CancelIcon,
          cancelText,
          cancelIconSide === "right" && CancelIcon
        ] }),
        /* @__PURE__ */ jsxs(AlertDialogAction, { variant: okButtonVariant, size: okButtonSize, disabled: loading, onClick: onConfirm, children: [
          okIconSide === "left" && OkIcon,
          okText,
          okIconSide === "right" && OkIcon
        ] })
      ] })
    ] })
  ] });
};
ConfirmDialog.displayName = "ConfirmDialog";
const Field = (props) => {
  return /* @__PURE__ */ jsx(
    FormField,
    {
      control: props.control,
      name: props.name,
      render: ({ field }) => {
        return /* @__PURE__ */ jsxs(
          FormItem,
          {
            className: cn(props.className, props.isCheckbox ? "flex flex-row items-center space-y-0 space-x-3" : ""),
            children: [
              !props.isCheckbox && /* @__PURE__ */ jsx(FormLabel, { children: props.label }),
              /* @__PURE__ */ jsx(FormControl, { children: cloneElement(props.children, {
                ...field,
                ...props.children.props
              }) }),
              props.isCheckbox && /* @__PURE__ */ jsx(FormLabel, { className: "text-sm font-normal", children: props.label }),
              props.description && /* @__PURE__ */ jsx(FormDescription, { children: props.description }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ]
          }
        );
      }
    }
  );
};
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("bg-card text-card-foreground rounded-xl border shadow-sm", className), ...props }));
Card.displayName = "Card";
const CardHeader = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("leading-none font-semibold tracking-tight", className), ...props })
);
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("text-muted-foreground text-sm", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
const Form = ({
  autoSave,
  modifyingDataBeforeSubmission,
  formProps,
  isWatchable,
  saveButtonProps,
  className,
  formModalClose,
  recordItemId,
  ...props
}) => {
  const watchable = useRef(false);
  const { resource: _resource, action: action2 } = useParsed();
  const back = useBack();
  const onBack = action2 !== EnumAction.list || typeof action2 !== "undefined" ? back : void 0;
  if (isWatchable && !watchable.current) {
    watchable.current = true;
    props.watch();
  }
  const onSubmit = props.handleSubmit((_data) => {
    const values = props.getValues();
    const data2 = modifyingDataBeforeSubmission ? modifyingDataBeforeSubmission(values) : values;
    props.refineCore.onFinish(data2);
    formModalClose == null ? void 0 : formModalClose();
  });
  const { disabled } = saveButtonProps || {};
  return /* @__PURE__ */ jsx(Form$1, { ...props, children: /* @__PURE__ */ jsx("form", { ...formProps, onSubmit, children: /* @__PURE__ */ jsxs(Card, { className: cn("mx-auto space-y-4 border-none p-8 shadow-none", className), children: [
    /* @__PURE__ */ jsx(CardContent, { className: "space-y-4 p-0", children: props.children }),
    /* @__PURE__ */ jsxs(CardFooter, { className: "flex gap-x-2 p-0", children: [
      /* @__PURE__ */ jsx(
        SaveButton,
        {
          type: "submit",
          recordItemId,
          loading: props.refineCore.formLoading,
          disabled: disabled || !props.formState.isDirty
        }
      ),
      !props.hideCancel && /* @__PURE__ */ jsx(
        Button,
        {
          icon: /* @__PURE__ */ jsx(Undo2, {}),
          type: "button",
          onClick: formModalClose || onBack,
          disabled: props.refineCore.formLoading,
          variant: "outline",
          children: "Cancel"
        }
      ),
      autoSave && /* @__PURE__ */ jsx("div", { className: "ml-auto", children: /* @__PURE__ */ jsx(AutoSaveIndicator, { ...props.refineCore.autoSaveProps }) })
    ] })
  ] }) }) });
};
const Loader = forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      "svg",
      {
        ref,
        xmlns: "http://www.w3.org/2000/svg",
        className: cn("mx-auto inline", className),
        viewBox: "0 0 120 30",
        fill: "currentColor",
        ...props,
        children: [
          /* @__PURE__ */ jsxs("circle", { cx: "15", cy: "15", r: "15", children: [
            /* @__PURE__ */ jsx(
              "animate",
              {
                attributeName: "r",
                begin: "0s",
                calcMode: "linear",
                dur: "0.8s",
                from: "15",
                repeatCount: "indefinite",
                to: "15",
                values: "15;9;15"
              }
            ),
            /* @__PURE__ */ jsx(
              "animate",
              {
                attributeName: "fill-opacity",
                begin: "0s",
                calcMode: "linear",
                dur: "0.8s",
                from: "1",
                repeatCount: "indefinite",
                to: "1",
                values: "1;.5;1"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("circle", { cx: "60", cy: "15", r: "9", fillOpacity: "0.3", children: [
            /* @__PURE__ */ jsx(
              "animate",
              {
                attributeName: "r",
                begin: "0s",
                calcMode: "linear",
                dur: "0.8s",
                from: "9",
                repeatCount: "indefinite",
                to: "9",
                values: "9;15;9"
              }
            ),
            /* @__PURE__ */ jsx(
              "animate",
              {
                attributeName: "fill-opacity",
                begin: "0s",
                calcMode: "linear",
                dur: "0.8s",
                from: "0.5",
                repeatCount: "indefinite",
                to: "0.5",
                values: ".5;1;.5"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("circle", { cx: "105", cy: "15", r: "15", children: [
            /* @__PURE__ */ jsx(
              "animate",
              {
                attributeName: "r",
                begin: "0s",
                calcMode: "linear",
                dur: "0.8s",
                from: "15",
                repeatCount: "indefinite",
                to: "15",
                values: "15;9;15"
              }
            ),
            /* @__PURE__ */ jsx(
              "animate",
              {
                attributeName: "fill-opacity",
                begin: "0s",
                calcMode: "linear",
                dur: "0.8s",
                from: "1",
                repeatCount: "indefinite",
                to: "1",
                values: "1;.5;1"
              }
            )
          ] })
        ]
      }
    );
  }
);
Loader.displayName = "Loader";
const Select$1 = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Label, { ref, className: cn("px-2 py-1.5 text-sm font-semibold", className), ...props }));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Separator, { ref, className: cn("bg-muted -mx-1 my-1 h-px", className), ...props }));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const Select = forwardRef(({ ...props }, ref) => {
  var _a, _b, _c;
  const triggerRef = React__default.useRef(null);
  return /* @__PURE__ */ jsxs(
    Select$1,
    {
      disabled: props.disabled || ((_a = props.options) == null ? void 0 : _a.length) === 0,
      onValueChange: props.onChange,
      defaultValue: props.value,
      value: props.value,
      children: [
        /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(SelectTrigger, { ref: triggerRef, className: "sm:w-[500px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: props.placeholder ?? "Select" }) }) }),
        /* @__PURE__ */ jsx(
          SelectContent,
          {
            style: {
              width: (_b = triggerRef.current) == null ? void 0 : _b.offsetWidth
            },
            ref,
            children: (_c = props.options) == null ? void 0 : _c.map((option, key) => /* @__PURE__ */ jsx(SelectItem, { value: option.value, children: option.label }, key))
          }
        )
      ]
    }
  );
});
Select.displayName = "Select";
const DeleteButton = ({
  resource,
  recordItemId,
  onSuccess,
  mutationMode: mutationModeProp,
  confirmTitle,
  confirmDescription,
  successNotification,
  errorNotification,
  hideText = false,
  accessControl,
  meta: meta2,
  dataProviderName,
  confirmOkText,
  confirmCancelText,
  invalidates,
  children,
  ...props
}) => {
  const back = useBack();
  const defaultOnSuccess = () => {
    setTimeout(() => {
      back();
    }, 300);
  };
  const {
    title,
    label,
    hidden,
    disabled,
    loading,
    confirmTitle: defaultConfirmTitle,
    confirmOkLabel: defaultConfirmOkLabel,
    cancelLabel: defaultCancelLabel,
    onConfirm,
    canAccess
  } = useDeleteButton({
    resource,
    id: recordItemId,
    dataProviderName,
    invalidates,
    meta: meta2,
    onSuccess: onSuccess || defaultOnSuccess,
    mutationMode: mutationModeProp,
    errorNotification,
    successNotification,
    accessControl
  });
  if (hidden) return null;
  const disabledNew = disabled || !(canAccess == null ? void 0 : canAccess.can);
  return /* @__PURE__ */ jsx(
    ConfirmDialog,
    {
      okText: confirmOkText ?? defaultConfirmOkLabel,
      cancelText: confirmCancelText ?? defaultCancelLabel,
      okButtonVariant: "destructive",
      cancelButtonVariant: "outline",
      title: confirmTitle ?? defaultConfirmTitle,
      description: confirmDescription,
      loading,
      onConfirm,
      children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "destructive",
          disabled: disabledNew,
          title,
          loading,
          icon: /* @__PURE__ */ jsx(Trash2Icon, {}),
          ...props,
          children: !hideText && (children ?? label)
        }
      )
    }
  );
};
DeleteButton.displayName = "DeleteButton";
const EditButton = ({
  resource,
  recordItemId,
  hideText = false,
  accessControl,
  meta: meta2,
  onClick,
  children,
  ...props
}) => {
  const { hidden, disabled, label, title, LinkComponent, to, canAccess } = useEditButton({
    resource,
    id: recordItemId,
    accessControl,
    meta: meta2
  });
  if (hidden) return null;
  const disabledNew = disabled || !(canAccess == null ? void 0 : canAccess.can);
  return /* @__PURE__ */ jsx(
    LinkComponent,
    {
      prefetch: "intent",
      viewTransition: true,
      className: cn(disabledNew && "pointer-events-none"),
      to,
      replace: false,
      onClick: (e) => {
        if (disabledNew) {
          e.preventDefault();
          return;
        }
        if (onClick) {
          e.preventDefault();
          onClick(e);
        }
      },
      children: /* @__PURE__ */ jsx(Button, { disabled: disabledNew, title, icon: /* @__PURE__ */ jsx(Pencil, {}), ...props, children: !hideText && (children ?? label) })
    }
  );
};
EditButton.displayName = "EditButton";
const ExportButton = ({ children, ...props }) => {
  const { label } = useExportButton();
  const { triggerExport } = useExport();
  const { data: canAccess } = useCan({ action: EnumAction.export });
  const disabled = !(canAccess == null ? void 0 : canAccess.can);
  return /* @__PURE__ */ jsx(Button, { icon: /* @__PURE__ */ jsx(Download, {}), onClick: triggerExport, disabled, ...props, children: label });
};
ExportButton.displayName = "ExportButton";
const ImportButton = (props) => {
  const { inputProps } = useImport({
    onFinish: (data2) => {
      console.log("ImportButton useImport", data2);
    }
  });
  const { label } = useImportButton();
  const { data: canAccess } = useCan({ action: EnumAction.import });
  const onClick = () => {
    const el = document.createElement("input");
    el.type = inputProps.type;
    el.accept = inputProps.accept;
    el.onchange = (e) => {
      inputProps.onChange(e);
      el.remove();
    };
    el.click();
  };
  const disabled = !(canAccess == null ? void 0 : canAccess.can);
  return /* @__PURE__ */ jsx(
    Button,
    {
      icon: /* @__PURE__ */ jsx(Upload, {}),
      disabled,
      ...props,
      onClick: (e) => {
        if (disabled) {
          e.preventDefault();
          return;
        }
        onClick();
      },
      children: label
    }
  );
};
ImportButton.displayName = "ImportButton";
const SaveButton = ({
  hideText = false,
  children,
  accessControl,
  access,
  resource,
  recordItemId,
  ...props
}) => {
  const { label } = useSaveButton();
  const Com = !(accessControl == null ? void 0 : accessControl.enabled) ? Slot : CanAccess;
  if ((accessControl == null ? void 0 : accessControl.hideIfUnauthorized) && accessControl.enabled) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    Com,
    {
      params: {
        id: recordItemId
      },
      resource,
      action: "save",
      ...access,
      children: /* @__PURE__ */ jsx(Button, { icon: /* @__PURE__ */ jsx(CheckCheck, {}), ...props, children: !hideText && (children ?? label) })
    }
  );
};
SaveButton.displayName = "SaveButton";
const ShowButton = ({
  resource: resourceNameFromProps,
  recordItemId,
  hideText = false,
  accessControl,
  meta: meta2,
  children,
  onClick,
  ...props
}) => {
  const { to, label, title, hidden, disabled, LinkComponent, canAccess } = useShowButton({
    resource: resourceNameFromProps,
    id: recordItemId,
    accessControl,
    meta: meta2
  });
  if (hidden) return null;
  const disabledNew = disabled || !(canAccess == null ? void 0 : canAccess.can);
  return /* @__PURE__ */ jsx(
    LinkComponent,
    {
      prefetch: "intent",
      viewTransition: true,
      className: cn("visited:text-blue-700!", disabledNew && "pointer-events-none"),
      to,
      replace: false,
      onClick: (e) => {
        if (disabledNew) {
          e.preventDefault();
          return;
        }
        if (onClick) {
          e.preventDefault();
          onClick(e);
        }
      },
      children: /* @__PURE__ */ jsx(Button, { icon: !props.asChild ? /* @__PURE__ */ jsx(EyeIcon, {}) : void 0, title, disabled: disabledNew, ...props, children: !hideText && (children ?? label) })
    }
  );
};
ShowButton.displayName = "ShowButton";
const BackButton = ({ ...props }) => {
  const back = useBack();
  return /* @__PURE__ */ jsx(Button, { icon: /* @__PURE__ */ jsx(ArrowLeftToLine, {}), onClick: () => back(), ...props, children: "Go Back" });
};
BackButton.displayName = "BackButton";
const ResultItem = React__default.forwardRef(
  ({ action: action2, active, currentRootActionId }, ref) => {
    var _a;
    const ancestors = React__default.useMemo(() => {
      if (!currentRootActionId) return action2.ancestors;
      const index = action2.ancestors.findIndex((ancestor) => ancestor.id === currentRootActionId);
      return action2.ancestors.slice(index + 1);
    }, [action2.ancestors, currentRootActionId]);
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        style: {
          padding: "12px 16px",
          background: active ? "rgba(0 0 0 / 0.05)" : "transparent",
          borderLeft: `2px solid ${active ? "rgb(28 28 29)" : "transparent"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer"
        },
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                display: "flex",
                gap: "8px",
                alignItems: "center",
                fontSize: 14
              },
              children: [
                action2.icon && action2.icon,
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    ancestors.length > 0 && ancestors.map((ancestor) => /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          style: {
                            opacity: 0.5,
                            marginRight: 8
                          },
                          children: ancestor.name
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          style: {
                            marginRight: 8
                          },
                          children: "›"
                        }
                      )
                    ] }, ancestor.id)),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        style: {
                          color: action2.name.toLocaleUpperCase() === "DELETE" ? "red" : "black"
                        },
                        children: action2.name
                      }
                    )
                  ] }),
                  action2.subtitle && /* @__PURE__ */ jsx("span", { style: { fontSize: 12 }, children: action2.subtitle })
                ] })
              ]
            }
          ),
          ((_a = action2.shortcut) == null ? void 0 : _a.length) ? /* @__PURE__ */ jsx(
            "div",
            {
              "aria-hidden": true,
              style: {
                display: "grid",
                gridAutoFlow: "column",
                gap: "4px"
              },
              children: action2.shortcut.map((sc) => /* @__PURE__ */ jsx(
                "kbd",
                {
                  style: {
                    padding: "4px 6px",
                    background: "rgba(0 0 0 / .1)",
                    borderRadius: "4px",
                    fontSize: 14
                  },
                  children: sc
                },
                sc
              ))
            }
          ) : null
        ]
      }
    );
  }
);
ResultItem.displayName = "ResultItem";
const groupNameStyle = {
  padding: "8px 16px",
  fontSize: "14px",
  textTransform: "uppercase",
  fontWeight: "bold",
  opacity: 0.5
};
const RenderResults = () => {
  const { results, rootActionId } = useMatches();
  return /* @__PURE__ */ jsx(
    KBarResults,
    {
      items: results,
      onRender: ({ item, active }) => {
        return typeof item === "string" ? /* @__PURE__ */ jsx("div", { style: groupNameStyle, children: item }) : /* @__PURE__ */ jsx(ResultItem, { action: item, active, currentRootActionId: rootActionId });
      }
    }
  );
};
const CommandBar = () => {
  const searchStyle = {
    padding: "12px 16px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    border: "none",
    background: "rgb(252 252 252)",
    color: "black"
  };
  const animatorStyle = {
    maxWidth: "600px",
    width: "100%",
    background: "white",
    color: "black",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  };
  const positionerStyle = {
    opacity: 1,
    transition: "background 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s",
    backdropFilter: "saturate(180%) blur(1px)",
    background: "rgba(0, 0, 0, 0.1)",
    zIndex: "9999"
  };
  return /* @__PURE__ */ jsx(KBarPortal, { children: /* @__PURE__ */ jsx(KBarPositioner, { style: positionerStyle, children: /* @__PURE__ */ jsxs(KBarAnimator, { style: animatorStyle, children: [
    /* @__PURE__ */ jsx(KBarSearch, { style: searchStyle }),
    /* @__PURE__ */ jsx(RenderResults, {})
  ] }) }) });
};
const capitalize = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
const useRefineKbar = () => {
  const t2 = useTranslate();
  const { resource: resourceFromParams, resources, id: idFromParams, action: actionFromParams } = useResource();
  const routerType = useRouterType();
  const getToPath = useGetToPath();
  const go = useGo();
  const { mutate } = useDelete();
  const { push, list: _goToList, create: _goToCreate, show: _goToShow, edit: _goToEdit } = useNavigation();
  const getUserFriendlyName = useUserFriendlyName();
  const kbarContext = useContext(KBarContext);
  const { can } = useCanWithoutCache();
  const [actions, setActions] = useState([]);
  useEffect(() => {
    const preaparedActions = async () => {
      return await Promise.all(
        moveActionToFirst().flatMap((resource) => {
          return createActionWithResource(resource);
        })
      );
    };
    preaparedActions().then((actions2) => {
      return setActions(actions2.flatMap((action2) => action2));
    });
  }, [resources, idFromParams, resourceFromParams, actionFromParams]);
  useEffect(() => {
    if (actions.length === 0) {
      kbarContext.query.setVisualState(VisualState.hidden);
    }
  }, [actions]);
  const moveActionToFirst = () => {
    const orderedResources = [...resources];
    const fromIndex = orderedResources == null ? void 0 : orderedResources.findIndex(
      (resource) => (resource.identifier ?? (resource == null ? void 0 : resource.name)) === ((resourceFromParams == null ? void 0 : resourceFromParams.identifier) ?? (resourceFromParams == null ? void 0 : resourceFromParams.name))
    );
    if (fromIndex > 0) {
      const element = orderedResources[fromIndex];
      orderedResources.splice(fromIndex, 1);
      orderedResources.splice(0, 0, element);
    }
    return orderedResources;
  };
  const createActionWithResource = async (resource) => {
    var _a, _b, _c, _d, _e, _f;
    const {
      name,
      label: deprecatedLabel,
      list,
      create,
      canCreate,
      canEdit,
      canShow,
      icon: deprecatedIcon,
      show,
      canDelete: deprecatedCanDelete,
      edit
    } = resource;
    const label = ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.label) ?? ((_b = resource == null ? void 0 : resource.options) == null ? void 0 : _b.label) ?? deprecatedLabel;
    const icon = ((_c = resource == null ? void 0 : resource.meta) == null ? void 0 : _c.icon) ?? ((_d = resource == null ? void 0 : resource.options) == null ? void 0 : _d.icon) ?? deprecatedIcon;
    const canDelete = ((_e = resource == null ? void 0 : resource.meta) == null ? void 0 : _e.canDelete) ?? ((_f = resource == null ? void 0 : resource.options) == null ? void 0 : _f.canDelete) ?? deprecatedCanDelete;
    const section = label ?? t2(`${resource.name}.${resource.name}`, getUserFriendlyName(resource.name, "plural"));
    const tempActions = [];
    if (list && (resourceFromParams !== void 0 && (resourceFromParams == null ? void 0 : resourceFromParams.name) !== name || actionFromParams !== void 0 && (resourceFromParams == null ? void 0 : resourceFromParams.name) === name)) {
      const { can: canList } = await (can == null ? void 0 : can({
        resource: name,
        action: "list",
        params: { id: idFromParams, resource }
      })) || { can: true };
      if (canList) {
        tempActions.push(
          createAction({
            name: t2("actions.list", capitalize(
              "list"
              /* List */
            )),
            section,
            icon: icon || /* @__PURE__ */ jsx(ListIcon, { size: 16 }),
            perform: () => {
              const p = getToPath({
                resource,
                action: "list",
                legacy: routerType === "legacy"
              });
              if (p) {
                if (routerType === "legacy") {
                  push(p);
                } else {
                  go({ to: p });
                }
              }
            }
          })
        );
      }
    }
    if ((canCreate || !!create) && create && ("create" !== actionFromParams || (resourceFromParams == null ? void 0 : resourceFromParams.name) !== name)) {
      const { can: canAccessCreate } = await (can == null ? void 0 : can({
        resource: name,
        action: "create",
        params: { resource }
      })) || { can: true };
      if (canAccessCreate) {
        tempActions.push(
          createAction({
            name: t2("actions.create", capitalize(
              "create"
              /* Create */
            )),
            section,
            icon: icon || /* @__PURE__ */ jsx(CirclePlus, { size: 16 }),
            keywords: "new",
            perform: () => {
              const p = getToPath({
                resource,
                action: "create",
                legacy: routerType === "legacy"
              });
              if (p) {
                if (routerType === "legacy") {
                  push(p);
                } else {
                  go({ to: p });
                }
              }
            }
          })
        );
      }
    }
    if ((resourceFromParams == null ? void 0 : resourceFromParams.name) === name && idFromParams) {
      if ((canShow || !!show) && show && "show" !== actionFromParams) {
        const { can: canAccessShow } = await (can == null ? void 0 : can({
          resource: name,
          action: "show",
          params: { id: idFromParams, resource }
        })) || { can: true };
        if (canAccessShow) {
          tempActions.push(
            createAction({
              name: t2("actions.show", capitalize(
                "show"
                /* Show */
              )),
              section,
              icon: icon || /* @__PURE__ */ jsx(EyeIcon, { size: 16 }),
              perform: () => {
                const p = getToPath({
                  resource,
                  action: "show",
                  legacy: routerType === "legacy",
                  meta: {
                    id: idFromParams
                  }
                });
                if (p) {
                  if (routerType === "legacy") {
                    push(p);
                  } else {
                    go({ to: p });
                  }
                }
              }
            })
          );
        }
      }
      if ((canEdit || !!edit) && edit && "edit" !== actionFromParams) {
        const { can: canAccessEdit } = await (can == null ? void 0 : can({
          resource: name,
          action: "edit",
          params: { id: idFromParams, resource }
        })) || { can: true };
        if (canAccessEdit) {
          tempActions.push(
            createAction({
              name: t2("actions.edit", capitalize(
                "edit"
                /* Edit */
              )),
              section,
              icon: icon || /* @__PURE__ */ jsx(Pencil, { size: 16 }),
              perform: () => {
                const p = getToPath({
                  resource,
                  action: "edit",
                  legacy: routerType === "legacy",
                  meta: {
                    id: idFromParams
                  }
                });
                if (p) {
                  if (routerType === "legacy") {
                    push(p);
                  } else {
                    go({ to: p });
                  }
                }
              }
            })
          );
        }
      }
      if (canDelete) {
        const { can: canAccessDelete } = await (can == null ? void 0 : can({
          resource: name,
          action: "delete",
          params: { id: idFromParams, resource }
        })) || { can: true };
        if (canAccessDelete) {
          tempActions.push(
            {
              id: "delete",
              name: t2("actions.delete", capitalize(
                "delete"
                /* Delete */
              )),
              section,
              icon: icon || /* @__PURE__ */ jsx(Trash2Icon, { size: 16 })
            },
            createAction({
              name: t2("buttons.delete", capitalize(
                "delete"
                /* Delete */
              )),
              section: t2("buttons.confirm", "Are you sure?"),
              parent: "delete",
              perform: () => {
                mutate(
                  {
                    resource: resource.name,
                    id: idFromParams
                  },
                  {
                    onSuccess: () => {
                      const p = getToPath({
                        resource,
                        action: "list",
                        legacy: routerType === "legacy"
                      });
                      if (p) {
                        if (routerType === "legacy") {
                          push(p);
                        } else {
                          go({ to: p });
                        }
                      }
                    }
                  }
                );
              }
            }),
            createAction({
              name: t2("buttons.cancel", "Cancel"),
              parent: "delete",
              perform: () => null
            })
          );
        }
      }
    }
    return tempActions;
  };
  useRegisterActions(actions, [actions]);
};
const RefineKbar$1 = ({ commandBarProps }) => {
  const context = useContext(RefineKbarPropsContext);
  useRefineKbar();
  const props = { ...context, ...commandBarProps };
  return /* @__PURE__ */ jsx(CommandBar, { ...props });
};
const RefineKbarPropsContext = createContext({});
const RefineKbarProvider = ({
  children,
  commandBarProps
}) => {
  return /* @__PURE__ */ jsx(RefineKbarPropsContext.Provider, { value: commandBarProps ?? {}, children: /* @__PURE__ */ jsx(KBarProvider, { children }) });
};
const useBackToHomeKbarActions = () => {
  const navigate = useNavigate();
  const backToHomeAction = createAction({
    section: "suggestions",
    name: "Back to home",
    icon: /* @__PURE__ */ jsx(HomeIcon, { size: 16 }),
    priority: Priority.HIGH,
    perform: () => {
      navigate("/");
    }
  });
  useRegisterActions([backToHomeAction]);
};
const useDeleteHelper = (resource, recordItemId, meta2) => {
  const accessControlContext = useContext(AccessControlContext);
  const accessControlEnabled = accessControlContext.options.buttons.enableAccessControl;
  const translate = useTranslate();
  const id = useResourceParams();
  const { resource: _resource, identifier } = useResource(resource);
  const { mutationMode } = useMutationMode();
  const { mutate, isLoading } = useDelete();
  const { data: data2 } = useCan({
    resource: _resource == null ? void 0 : _resource.name,
    action: EnumAction.delete,
    params: { id: recordItemId ?? id, resource: _resource },
    queryOptions: {
      enabled: accessControlEnabled
    }
  });
  const reason = () => {
    if (data2 == null ? void 0 : data2.can) return "";
    else if (data2 == null ? void 0 : data2.reason) return data2.reason;
    else return translate("You don't have permission to access");
  };
  const { setWarnWhen } = useWarnAboutChange();
  const onDeleteMutate = (options) => {
    if (accessControlEnabled && !(data2 == null ? void 0 : data2.can)) {
      return;
    }
    if ((recordItemId ?? id) && identifier) {
      setWarnWhen(false);
      return mutate(
        {
          id: recordItemId ?? id ?? "",
          resource: identifier,
          mutationMode,
          meta: pickNotDeprecated(meta2),
          metaData: pickNotDeprecated(meta2)
        },
        options
      );
    }
    return void 0;
  };
  return {
    can: !(accessControlEnabled && !(data2 == null ? void 0 : data2.can)),
    reason: reason(),
    mutate: onDeleteMutate,
    isLoading
  };
};
const useGetCloneUrl = (resource, recordItemId, meta2) => {
  const accessControlContext = useContext(AccessControlContext);
  const accessControlEnabled = accessControlContext.options.buttons.enableAccessControl;
  const { cloneUrl: generateCloneUrl } = useNavigation();
  const { resource: _resource } = useResource(resource);
  const { id } = useResourceParams();
  const { data: data2 } = useCan({
    resource,
    action: EnumAction.clone,
    params: { id: recordItemId, resource: _resource },
    queryOptions: {
      enabled: accessControlEnabled
    }
  });
  const translate = useTranslate();
  const reason = () => {
    if (data2 == null ? void 0 : data2.can) return "";
    else if (data2 == null ? void 0 : data2.reason) return data2.reason;
    else return translate("buttons.notAccessTitle", "You don't have permission to access");
  };
  const editUrl = resource && (recordItemId ?? id) ? generateCloneUrl(resource, recordItemId ?? id, meta2) : "";
  return {
    can: !(accessControlEnabled && !(data2 == null ? void 0 : data2.can)),
    reason: reason(),
    url: editUrl
  };
};
const useGetEditUrl = (resource, recordItemId, meta2) => {
  const accessControlContext = useContext(AccessControlContext);
  const accessControlEnabled = accessControlContext.options.buttons.enableAccessControl;
  const { editUrl: generateEditUrl } = useNavigation();
  const { resource: _resource } = useResource(resource);
  const { id } = useResourceParams();
  const { data: data2 } = useCan({
    resource,
    action: EnumAction.edit,
    params: { id: recordItemId, resource: _resource },
    queryOptions: {
      enabled: accessControlEnabled
    }
  });
  const translate = useTranslate();
  const reason = () => {
    if (data2 == null ? void 0 : data2.can) return "";
    else if (data2 == null ? void 0 : data2.reason) return data2.reason;
    else return translate("buttons.notAccessTitle", "You don't have permission to access");
  };
  const editUrl = resource && (recordItemId ?? id) ? generateEditUrl(resource, recordItemId ?? id, meta2) : "";
  return {
    can: !(accessControlEnabled && !(data2 == null ? void 0 : data2.can)),
    reason: reason(),
    url: editUrl
  };
};
const useGetShowUrl = (resource, recordItemId, meta2) => {
  const accessControlContext = useContext(AccessControlContext);
  const accessControlEnabled = accessControlContext.options.buttons.enableAccessControl;
  const { showUrl: generateShowUrl } = useNavigation();
  const { resource: _resource } = useResource(resource);
  const { id } = useResourceParams();
  const { data: data2 } = useCan({
    resource,
    action: EnumAction.show,
    params: { id: recordItemId, resource: _resource },
    queryOptions: {
      enabled: accessControlEnabled
    }
  });
  const translate = useTranslate();
  const reason = () => {
    if (data2 == null ? void 0 : data2.can) return "";
    else if (data2 == null ? void 0 : data2.reason) return data2.reason;
    else return translate("buttons.notAccessTitle", "You don't have permission to access");
  };
  const showUrl = resource && (recordItemId || id) ? generateShowUrl(resource, recordItemId ?? id, meta2) : "";
  return {
    can: !(accessControlEnabled && !(data2 == null ? void 0 : data2.can)),
    reason: reason(),
    url: showUrl
  };
};
const useOnBack = () => {
  const back = useBack();
  const { action: action2 } = useResourceParams();
  const onBack = action2 !== EnumAction.list || typeof action2 !== "undefined" ? back : void 0;
  return onBack;
};
const RefineKbar = () => {
  useBackToHomeKbarActions();
  return /* @__PURE__ */ jsx(RefineKbar$1, {});
};
function DeleteActionModal(props) {
  var _a, _b, _c, _d;
  const back = useOnBack();
  const { can, isLoading, mutate } = useDeleteHelper((_a = props.data) == null ? void 0 : _a.resource, (_c = (_b = props.data) == null ? void 0 : _b.row) == null ? void 0 : _c.id);
  const translate = useTranslate();
  const onDelete = useCallback(() => {
    if (can) {
      return mutate({
        onSuccess() {
          var _a2, _b2;
          const isRedirectBack = ((_a2 = props == null ? void 0 : props.data) == null ? void 0 : _a2.redirectBack) ?? false;
          const onAfterHandle = (_b2 = props == null ? void 0 : props.data) == null ? void 0 : _b2.onAfterHandle;
          props == null ? void 0 : props.updateData({
            toogle: false,
            row: void 0,
            resource: "",
            redirectBack: false,
            onAfterHandle: void 0
          });
          if (isRedirectBack) {
            back == null ? void 0 : back();
          }
          if (onAfterHandle) {
            onAfterHandle();
          }
        }
      });
    }
    return void 0;
  }, [can, props, back, mutate]);
  return /* @__PURE__ */ jsx(
    ConfirmDialog,
    {
      open: can && ((_d = props == null ? void 0 : props.data) == null ? void 0 : _d.toogle),
      loading: isLoading,
      title: translate("Are you sure?"),
      description: translate("This action cannot be undone."),
      okText: translate("Delete"),
      cancelText: translate("Cancel"),
      okButtonVariant: "destructive",
      onOpenChange: () => {
        if (!isLoading) {
          props == null ? void 0 : props.updateData({
            toogle: false,
            row: void 0,
            resource: ""
          });
        }
      },
      onConfirm: onDelete
    }
  );
}
const DeleteContext = createContext(void 0);
const DeleteProvider = ({ children }) => {
  const [data2, setData] = useState({
    row: void 0,
    resource: "",
    toogle: false,
    onAfterHandle: void 0
  });
  const updateData = (data22) => {
    setData(data22);
  };
  return /* @__PURE__ */ jsxs(DeleteContext.Provider, { value: { data: data2, updateData }, children: [
    children,
    /* @__PURE__ */ jsx(DeleteActionModal, { data: data2, updateData })
  ] });
};
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      className: cn(
        "border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    }
  );
});
Input.displayName = "Input";
const Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
  SeparatorPrimitive.Root,
  {
    ref,
    decorative,
    orientation,
    className: cn("bg-border shrink-0", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
    ...props
  }
));
Separator.displayName = SeparatorPrimitive.Root.displayName;
const Sheet = DialogPrimitive.Root;
const SheetPortal = DialogPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    className: cn(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(
  ({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(DialogPrimitive.Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
      /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
        /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
      ] }),
      children
    ] })
  ] })
);
SheetContent.displayName = DialogPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Title, { ref, className: cn("text-foreground text-lg font-semibold", className), ...props }));
SheetTitle.displayName = DialogPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, { ref, className: cn("text-muted-foreground text-sm", className), ...props }));
SheetDescription.displayName = DialogPrimitive.Description.displayName;
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("bg-primary/10 animate-pulse rounded-md", className), ...props });
}
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md px-3 py-1.5 text-xs",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
function useDebounceSubmit() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { run: debounceSubmit } = useDebounceFn(
    (searchParamsNew) => setSearchParams(searchParamsNew, { replace: true }),
    { wait: 300 }
  );
  return (event) => {
    const formData = new FormData(event.currentTarget);
    const searchParamsNew = new URLSearchParams(searchParams);
    const formKeys = new Set(Array.from(formData.keys()));
    formKeys.forEach((key) => {
      searchParamsNew.delete(key);
    });
    formData.forEach((value, key) => {
      if (value) {
        searchParamsNew.append(key, value.toString());
      }
    });
    debounceSubmit(searchParamsNew);
  };
}
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(void 0);
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
function useMountEffect(fn) {
  const mountedRef = useRef(false);
  useEffect(() => {
    if (mountedRef.current) {
      return;
    }
    mountedRef.current = true;
    return fn();
  }, [fn]);
}
function useUpdateSearchParams() {
  const [, setSearchParams] = useSearchParams();
  return (params) => {
    setSearchParams(
      (prev) => {
        for (const [key, value] of Object.entries(params)) {
          if (value) {
            prev.set(key, value.toString());
          } else {
            prev.delete(key);
          }
        }
        return prev;
      },
      { replace: true }
    );
  };
}
const SIDEBAR_COOKIE_NAME = "sidebarIsClose";
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = React.createContext(null);
function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
const SidebarProvider = React.forwardRef(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);
  const fetcher = useFetcher();
  const [_open, _setOpen] = React.useState(openProp ?? defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      const formData = new FormData();
      formData.append(SIDEBAR_COOKIE_NAME, String(!openState));
      fetcher.submit(formData, {
        method: "post",
        action: "/api/set-preferences"
      });
    },
    [setOpenProp, open, fetcher]
  );
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );
  return /* @__PURE__ */ jsx(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style
      },
      className: cn("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", className),
      ref,
      ...props,
      children
    }
  ) }) });
});
SidebarProvider.displayName = "SidebarProvider";
const Sidebar$1 = React.forwardRef(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: cn("bg-sidebar text-sidebar-foreground z-10 flex h-full w-(--sidebar-width) flex-col", className),
        ref,
        ...props,
        children
      }
    );
  }
  if (isMobile) {
    return /* @__PURE__ */ jsx(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsx(
      SheetContent,
      {
        "data-sidebar": "sidebar",
        "data-mobile": "true",
        className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side,
        children: /* @__PURE__ */ jsx("div", { className: "flex h-full w-full flex-col", children })
      }
    ) });
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: "group peer text-sidebar-foreground z-10 hidden md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "fixed inset-y-0 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              className
            ),
            ...props,
            children: /* @__PURE__ */ jsx(
              "div",
              {
                "data-sidebar": "sidebar",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children
              }
            )
          }
        )
      ]
    }
  );
});
Sidebar$1.displayName = "Sidebar";
const SidebarTrigger = React.forwardRef(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        className: cn("h-7 w-7", className),
        onClick: (event) => {
          onClick == null ? void 0 : onClick(event);
          toggleSidebar();
        },
        ...props,
        children: [
          /* @__PURE__ */ jsx(PanelLeft, {}),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
        ]
      }
    );
  }
);
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: cn(
          "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
          "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className
        ),
        ...props
      }
    );
  }
);
SidebarRail.displayName = "SidebarRail";
const SidebarInset = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "main",
    {
      ref,
      className: cn(
        "bg-background relative flex min-h-svh flex-1 flex-col",
        "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      ),
      ...props
    }
  );
});
SidebarInset.displayName = "SidebarInset";
const SidebarInput = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      Input,
      {
        ref,
        "data-sidebar": "input",
        className: cn(
          "bg-background focus-visible:ring-sidebar-ring h-8 w-full shadow-none focus-visible:ring-2",
          className
        ),
        ...props
      }
    );
  }
);
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx("div", { ref, "data-sidebar": "header", className: cn("flex flex-col gap-2 p-2", className), ...props });
});
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx("div", { ref, "data-sidebar": "footer", className: cn("flex flex-col gap-2 p-2", className), ...props });
});
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      Separator,
      {
        ref,
        "data-sidebar": "separator",
        className: cn("bg-sidebar-border mx-2 w-auto", className),
        ...props
      }
    );
  }
);
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    }
  );
});
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className),
      ...props
    }
  );
});
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = React.forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        ref,
        "data-sidebar": "group-label",
        className: cn(
          "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          className
        ),
        ...props
      }
    );
  }
);
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = React.forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        ref,
        "data-sidebar": "group-action",
        className: cn(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          className
        ),
        ...props
      }
    );
  }
);
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, "data-sidebar": "group-content", className: cn("w-full text-sm", className), ...props })
);
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("ul", { ref, "data-sidebar": "menu", className: cn("flex w-full min-w-0 flex-col gap-1", className), ...props }));
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("li", { ref, "data-sidebar": "menu-item", className: cn("group/menu-item relative", className), ...props }));
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const SidebarMenuButton = React.forwardRef(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(sidebarMenuButtonVariants({ variant, size }), className),
      ...props
    }
  );
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ jsx(TooltipContent, { side: "right", align: "center", hidden: state !== "collapsed" || isMobile, ...tooltip })
  ] });
});
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = React.forwardRef(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-action",
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      ),
      ...props
    }
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";
const SidebarMenuBadge = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-sidebar": "menu-badge",
      className: cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  )
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = React.forwardRef(({ className, showIcon = false, ...props }, ref) => {
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsx(Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ jsx(
          Skeleton,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          }
        )
      ]
    }
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "ul",
    {
      ref,
      "data-sidebar": "menu-sub",
      className: cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  )
);
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = React.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx("li", { ref, ...props }));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = React.forwardRef(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
function Sidebar() {
  const { menuItems, selectedKey, defaultOpenKeys } = useMenu();
  const resourceParams = useResourceParams();
  const getCrudPaths = (item) => {
    var _a, _b, _c, _d, _e, _f;
    const crudPaths = [(_a = item.list) == null ? void 0 : _a.toString(), (_b = item.create) == null ? void 0 : _b.toString()];
    if (resourceParams.id) {
      crudPaths.push(
        (_d = (_c = item.edit) == null ? void 0 : _c.toString()) == null ? void 0 : _d.replace(":id", resourceParams.id),
        (_f = (_e = item.show) == null ? void 0 : _e.toString()) == null ? void 0 : _f.replace(":id", resourceParams.id)
      );
    }
    return crudPaths.filter(Boolean);
  };
  return menuItems.map((menus_1, index) => /* @__PURE__ */ jsx(CanAccess, { resource: menus_1.name, action: "list", children: /* @__PURE__ */ jsxs(SidebarGroup, { children: [
    /* @__PURE__ */ jsx(SidebarGroupLabel, { children: menus_1.name }),
    /* @__PURE__ */ jsx(SidebarMenu, { children: menus_1.children.map((menus_2, idx) => {
      var _a, _b;
      const isCollapsibleOpen = defaultOpenKeys.includes(menus_2.key);
      const Icon = (_a = menus_2 == null ? void 0 : menus_2.meta) == null ? void 0 : _a.icon;
      return /* @__PURE__ */ jsx(CanAccess, { resource: menus_2.name, action: "list", children: /* @__PURE__ */ jsx(Collapsible, { asChild: true, defaultOpen: isCollapsibleOpen, className: "group/collapsible", children: /* @__PURE__ */ jsxs(SidebarMenuItem, { children: [
        /* @__PURE__ */ jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(SidebarMenuButton, { tooltip: menus_2.name, children: [
          Icon && /* @__PURE__ */ jsx(Icon, {}),
          /* @__PURE__ */ jsx("span", { className: "capitalize", children: menus_2.name }),
          /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
        ] }) }),
        /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsx(SidebarMenuSub, { children: (_b = menus_2.children) == null ? void 0 : _b.map((item) => {
          var _a2;
          const { meta: meta2 } = item;
          const paths = getCrudPaths(item);
          const isActive = paths.includes(selectedKey) || paths.some((s) => (s == null ? void 0 : s.endsWith(selectedKey)) || (selectedKey == null ? void 0 : selectedKey.endsWith(s)));
          return /* @__PURE__ */ jsx(CanAccess, { resource: item.name, action: "list", children: /* @__PURE__ */ jsx(SidebarMenuSubItem, { children: /* @__PURE__ */ jsx(
            SidebarMenuSubButton,
            {
              asChild: true,
              isActive,
              className: cn(isActive && "bg-primary! text-primary-foreground!"),
              children: /* @__PURE__ */ jsx(Link$1, { prefetch: "intent", viewTransition: true, to: ((_a2 = item.list) == null ? void 0 : _a2.toString()) ?? "/#", children: /* @__PURE__ */ jsx("span", { className: "capitalize", children: (meta2 == null ? void 0 : meta2.label) || item.name }) })
            }
          ) }) }, item.key);
        }) }) })
      ] }) }, idx) }, menus_2.key);
    }) })
  ] }, index) }, menus_1.key));
}
const Table$1 = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }) })
);
Table$1.displayName = "Table";
const TableHeader = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props })
);
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props })
);
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("tfoot", { ref, className: cn("bg-muted/50 border-t font-medium last:[&>tr]:border-b-0", className), ...props })
);
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "tr",
    {
      ref,
      className: cn("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "th",
    {
      ref,
      className: cn(
        "text-muted-foreground h-10 px-2 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  )
);
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "td",
    {
      ref,
      className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
      ...props
    }
  )
);
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("caption", { ref, className: cn("text-muted-foreground mt-4 text-sm", className), ...props })
);
TableCaption.displayName = "TableCaption";
const useIsFirstRender = () => {
  const firstRender = useRef(true);
  useEffect(() => {
    firstRender.current = false;
  }, []);
  return firstRender.current;
};
const columnFiltersToCrudFilters = ({ columns, columnFilters }) => {
  return (columnFilters == null ? void 0 : columnFilters.map((filter) => {
    var _a, _b, _c, _d;
    const operator = filter.operator ?? ((_b = (_a = columns.find((col) => col.id === filter.id)) == null ? void 0 : _a.meta) == null ? void 0 : _b.filterOperator);
    const isConditional = operator === "and" || operator === "or";
    if (isConditional && Array.isArray(filter.value)) {
      const filterKey = ((_d = (_c = columns.find((c) => c.id === filter.id)) == null ? void 0 : _c.meta) == null ? void 0 : _d.filterKey) ?? filter.id;
      return {
        key: filterKey,
        operator,
        value: filter.value
      };
    }
    const defaultOperator = Array.isArray(filter.value) ? "in" : "eq";
    return {
      field: filter.id,
      operator: operator ?? defaultOperator,
      value: filter.value
    };
  })) ?? [];
};
const getRemovedFilters = ({ nextFilters, coreFilters }) => {
  const removedFilters = coreFilters.filter(
    (filter) => !nextFilters.some((nextFilter) => {
      const isFilterConditional = filter.operator === "and" || filter.operator === "or";
      const isCrudFilterConditional = nextFilter.operator === "and" || nextFilter.operator === "or";
      const hasSameOperator = filter.operator === nextFilter.operator;
      const hasSameKey = isFilterConditional && isCrudFilterConditional && filter.key === nextFilter.key;
      const hasSameField = !isFilterConditional && !isCrudFilterConditional && filter.field === nextFilter.field;
      return hasSameOperator && (hasSameKey || hasSameField);
    })
  );
  return removedFilters.map((filter) => {
    if (filter.operator === "and" || filter.operator === "or") {
      return {
        key: filter.key,
        operator: filter.operator,
        value: []
      };
    }
    return {
      field: filter.field,
      operator: filter.operator,
      value: void 0
    };
  });
};
const crudFiltersToColumnFilters = ({ columns, crudFilters }) => {
  return crudFilters.map((filter) => {
    var _a;
    if (filter.operator === "and" || filter.operator === "or") {
      if (filter.key) {
        const filterId = ((_a = columns.find((col) => {
          var _a2;
          return ((_a2 = col.meta) == null ? void 0 : _a2.filterKey) === filter.key;
        })) == null ? void 0 : _a.id) ?? filter.key;
        return {
          id: filterId,
          operator: filter.operator,
          value: filter.value
        };
      }
      return void 0;
    }
    return {
      id: filter.field,
      operator: filter.operator,
      value: filter.value
    };
  }).filter(Boolean);
};
function useTable({
  refineCoreProps: { hasPagination = true, ...refineCoreProps } = {},
  initialState: reactTableInitialState = {},
  ...rest
}) {
  var _a, _b, _c;
  const isFirstRender = useIsFirstRender();
  const useTableResult = useTable$1({
    ...refineCoreProps,
    hasPagination
  });
  const isServerSideFilteringEnabled = (((_a = refineCoreProps.filters) == null ? void 0 : _a.mode) || "server") === "server";
  const isServerSideSortingEnabled = (((_b = refineCoreProps.sorters) == null ? void 0 : _b.mode) || "server") === "server";
  const hasPaginationString = hasPagination === false ? "off" : "server";
  const isPaginationEnabled = (((_c = refineCoreProps.pagination) == null ? void 0 : _c.mode) ?? hasPaginationString) !== "off";
  const {
    tableQuery: { data: data2 },
    current,
    setCurrent,
    pageSize: pageSizeCore,
    setPageSize: setPageSizeCore,
    sorters,
    setSorters,
    filters: filtersCore,
    setFilters,
    pageCount
  } = useTableResult;
  const reactTableResult = useReactTable({
    data: (data2 == null ? void 0 : data2.data) ?? [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: isServerSideSortingEnabled ? void 0 : getSortedRowModel(),
    getFilteredRowModel: isServerSideFilteringEnabled ? void 0 : getFilteredRowModel(),
    initialState: {
      pagination: {
        pageIndex: current - 1,
        pageSize: pageSizeCore
      },
      sorting: sorters.map((sorting2) => ({
        id: sorting2.field,
        desc: sorting2.order === "desc"
      })),
      columnFilters: crudFiltersToColumnFilters({
        columns: rest.columns,
        crudFilters: filtersCore
      }),
      ...reactTableInitialState
    },
    pageCount,
    manualPagination: true,
    manualSorting: isServerSideSortingEnabled,
    manualFiltering: isServerSideFilteringEnabled,
    ...rest
  });
  const { state, columns } = reactTableResult.options;
  const { pagination, sorting, columnFilters } = state;
  const { pageIndex, pageSize } = pagination ?? {};
  useEffect(() => {
    if (pageIndex !== void 0) {
      setCurrent(pageIndex + 1);
    }
  }, [pageIndex]);
  useEffect(() => {
    if (pageSize !== void 0) {
      setPageSizeCore(pageSize);
    }
  }, [pageSize]);
  useEffect(() => {
    if (sorting !== void 0) {
      const newSorters = sorting.map((sorting2) => ({
        field: sorting2.id,
        order: sorting2.desc ? "desc" : "asc"
      }));
      if (!isEqual(sorters, newSorters)) {
        setSorters(newSorters);
      }
      if (sorting.length > 0 && isPaginationEnabled && !isFirstRender) {
        setCurrent(1);
      }
    }
  }, [sorting]);
  useEffect(() => {
    const crudFilters = columnFiltersToCrudFilters({
      columns,
      columnFilters
    });
    crudFilters.push(
      ...getRemovedFilters({
        nextFilters: crudFilters,
        coreFilters: filtersCore
      })
    );
    if (!isEqual(crudFilters, filtersCore)) {
      setFilters(crudFilters);
    }
    if (crudFilters.length > 0 && isPaginationEnabled && !isFirstRender) {
      setCurrent(1);
    }
  }, [columnFilters, columns]);
  return {
    ...reactTableResult,
    refineCore: useTableResult
  };
}
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "focus:bg-accent data-[state=open]:bg-accent flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden transition-colors select-none data-disabled:pointer-events-none data-disabled:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden transition-colors select-none data-disabled:pointer-events-none data-disabled:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Separator, { ref, className: cn("bg-muted -mx-1 my-1 h-px", className), ...props }));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const DropdownMenuShortcut = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx("span", { className: cn("ml-auto text-xs tracking-widest opacity-60", className), ...props });
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
const RowAction = (props) => {
  const isLink = Boolean(props.to && !props.disabled && !props.onClick);
  return /* @__PURE__ */ jsx(
    DropdownMenuItem,
    {
      className: props.className,
      disabled: props.disabled,
      asChild: props.asChild || isLink,
      onClick: props.onClick,
      children: props.asChild ? props.children : isLink ? /* @__PURE__ */ jsxs(Link, { href: props.to, title: props.title, children: [
        props.icon ? /* @__PURE__ */ jsx("span", { className: "mr-2", children: props.icon }) : null,
        props.title
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        props.icon ? /* @__PURE__ */ jsx("span", { className: "mr-2", children: props.icon }) : null,
        props.title
      ] })
    }
  );
};
RowAction.displayName = "RowAction";
const RowActions = memo(function RowActions2({ row, resource, children }) {
  const appendProps = useCallback(
    (child, index) => {
      return cloneElement(child, { row, resource, key: index });
    },
    [row, resource]
  );
  const memoizedContent = useMemo(() => {
    return Array.isArray(children) ? children.map((child, index) => appendProps(child, index)) : appendProps(children);
  }, [children, appendProps]);
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "icon", children: [
      /* @__PURE__ */ jsx(DotsHorizontalIcon, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" })
    ] }) }),
    /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", children: memoizedContent })
  ] });
});
function CloneAction({ row, resource, title, disabled, ...props }) {
  const { can, url } = useGetCloneUrl(resource, row.id);
  return /* @__PURE__ */ jsx(
    RowAction,
    {
      icon: /* @__PURE__ */ jsx(CopyCheck, { size: 16 }),
      disabled: !can || disabled,
      title: title || "Clone",
      to: url,
      ...props
    }
  );
}
CloneAction.displayName = "CloneAction";
function DeleteAction({
  row,
  resource,
  title,
  disabled,
  onAfterHandle,
  className,
  ...props
}) {
  const { can } = useDeleteHelper(resource, row.id);
  const deleteContext = useContext(DeleteContext);
  return /* @__PURE__ */ jsx(
    RowAction,
    {
      icon: /* @__PURE__ */ jsx(Trash2, { size: 16 }),
      disabled: !can || disabled,
      title: title || "Delete",
      className: cn("text-destructive!", className),
      onClick: () => deleteContext == null ? void 0 : deleteContext.updateData({
        row,
        resource,
        toogle: true,
        onAfterHandle
      }),
      ...props
    }
  );
}
DeleteAction.displayName = "DeleteAction";
function EditAction({ row, resource, title, disabled, ...props }) {
  const { can, url } = useGetEditUrl(resource, row.id);
  return /* @__PURE__ */ jsx(RowAction, { icon: /* @__PURE__ */ jsx(Pencil, { size: 16 }), disabled: !can || disabled, title: title || "Edit", to: url, ...props });
}
EditAction.displayName = "EditAction";
function ShowAction({ row, resource, title, disabled, ...props }) {
  const { can, url } = useGetShowUrl(resource, row.id);
  return /* @__PURE__ */ jsx(
    RowAction,
    {
      icon: /* @__PURE__ */ jsx(Eye, { size: 16 }),
      disabled: !can || disabled,
      title: title || "View Detail",
      to: url,
      ...props
    }
  );
}
ShowAction.displayName = "ShowAction";
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return /* @__PURE__ */ jsx(
    DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(buttonVariants({ variant: "ghost" }), "h-8 w-8 p-0 font-normal aria-selected:opacity-100"),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground border border-foreground/50",
        day_outside: "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ className: className2, ...props2 }) => /* @__PURE__ */ jsx(ChevronLeft, { className: cn("h-4 w-4", className2), ...props2 }),
        IconRight: ({ className: className2, ...props2 }) => /* @__PURE__ */ jsx(ChevronRight, { className: cn("h-4 w-4", className2), ...props2 })
      },
      ...props
    }
  );
}
Calendar.displayName = "Calendar";
function TableFilterDateRangePickerFilter({
  column,
  title,
  numberOfMonths = 2,
  align = "start"
}) {
  const t2 = useTranslate();
  const [date, setDate] = useState(() => {
    const values = column == null ? void 0 : column.getFilterValue();
    if ((values == null ? void 0 : values.length) >= 1) {
      return {
        from: values[0],
        to: values[1]
      };
    }
    return {
      from: void 0,
      to: void 0
    };
  });
  const selectedValues = new Set(column == null ? void 0 : column.getFilterValue());
  useEffect(() => {
    if (date) {
      const dates = Object.values(date).filter(Boolean);
      if (dates.length) {
        column == null ? void 0 : column.setFilterValue(dates.map((date2) => date2 ? date2 : ""));
      }
    }
  }, [column, date]);
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("div", { className: "inline-flex flex-row items-center gap-x-0.5", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          title,
          variant: "ghost",
          className: cn("h-5 px-1 py-2.5", selectedValues.size > 0 && "text-green-500!"),
          onClick: (e) => {
            if (!selectedValues.size) {
              return;
            }
            e.preventDefault();
            column == null ? void 0 : column.setFilterValue(void 0);
            setDate({ from: void 0, to: void 0 });
          },
          children: selectedValues.size > 0 ? /* @__PURE__ */ jsx(FilterX, { className: cn("h-3.5 w-3.5") }) : /* @__PURE__ */ jsx(FilterIcon, { className: cn("h-3.5 w-3.5") })
        }
      ),
      (date == null ? void 0 : date.from) ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mr-1 h-4" }),
        /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-muted-foreground cursor-pointer text-xs text-nowrap", children: date.to ? /* @__PURE__ */ jsx(Fragment, { children: [format(date.from, "LLL dd, y"), format(date.to, "LLL dd, y")].join(" - ") }) : format(date.from, "LLL dd, y") })
      ] }) : null
    ] }) }),
    /* @__PURE__ */ jsxs(PopoverContent, { className: "w-auto p-0", align, children: [
      /* @__PURE__ */ jsx(
        Calendar,
        {
          initialFocus: true,
          mode: "range",
          defaultMonth: /* @__PURE__ */ new Date(),
          selected: date,
          onSelect: setDate,
          numberOfMonths
        }
      ),
      selectedValues.size > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Separator, {}),
        /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-center p-1", children: /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            className: "h-8 w-full border-dashed px-2",
            onClick: () => {
              column == null ? void 0 : column.setFilterValue(void 0);
              setDate({ from: void 0, to: void 0 });
            },
            children: [
              /* @__PURE__ */ jsx(FilterX, { size: 16 }),
              t2("Clear filters")
            ]
          }
        ) })
      ] })
    ] })
  ] });
}
function TableFilterDropdown({ column, title, options, align = "start" }) {
  const t2 = useTranslate();
  const facets = column == null ? void 0 : column.getFacetedUniqueValues();
  const selectedValues = new Set(column == null ? void 0 : column.getFilterValue());
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("div", { className: "inline-flex flex-row items-center gap-x-0.5", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          title,
          variant: "ghost",
          className: cn("h-5 border-dashed px-1 py-2.5", selectedValues.size > 0 && "text-green-500!"),
          onClick: (e) => {
            if (!selectedValues.size) {
              return;
            }
            e.preventDefault();
            column == null ? void 0 : column.setFilterValue(void 0);
          },
          children: selectedValues.size > 0 ? /* @__PURE__ */ jsx(FilterX, { className: cn("h-3.5 w-3.5") }) : /* @__PURE__ */ jsx(FilterIcon, { className: cn("h-3.5 w-3.5") })
        }
      ),
      (selectedValues == null ? void 0 : selectedValues.size) > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mr-1 h-4" }),
        /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-muted-foreground cursor-pointer text-xs text-nowrap lg:hidden", children: selectedValues.size }),
        /* @__PURE__ */ jsx("div", { className: "hidden space-x-1 lg:flex", children: selectedValues.size > 2 ? /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "text-muted-foreground cursor-pointer text-xs text-nowrap", children: [
          selectedValues.size,
          " ",
          t2("selected")
        ] }) : options == null ? void 0 : options.filter((option) => selectedValues.has(option.value)).map((option) => /* @__PURE__ */ jsx(
          Badge,
          {
            variant: "secondary",
            className: "text-muted-foreground cursor-pointer text-xs",
            children: option.label
          },
          option.value
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-[200px] p-0", align, children: /* @__PURE__ */ jsxs(Command, { children: [
      /* @__PURE__ */ jsx(CommandInput, { placeholder: title }),
      /* @__PURE__ */ jsxs(CommandList, { children: [
        /* @__PURE__ */ jsxs(CommandEmpty, { children: [
          t2("No results found"),
          "."
        ] }),
        /* @__PURE__ */ jsx(CommandGroup, { children: options == null ? void 0 : options.map((option) => {
          const isSelected = selectedValues.has(option.value);
          return /* @__PURE__ */ jsxs(
            CommandItem,
            {
              onSelect: () => {
                if (isSelected) {
                  selectedValues.delete(option.value);
                } else {
                  selectedValues.add(option.value);
                }
                const filterValues = Array.from(selectedValues);
                column == null ? void 0 : column.setFilterValue(filterValues.length ? filterValues : void 0);
              },
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      "border-primary mr-2 flex h-4 w-4 items-center justify-center rounded-sm border",
                      isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                    ),
                    children: /* @__PURE__ */ jsx(CheckIcon, { className: cn("h-4 w-4") })
                  }
                ),
                option.icon && /* @__PURE__ */ jsx(option.icon, { className: "text-muted-foreground mr-2 h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { children: option.label }),
                (facets == null ? void 0 : facets.get(option.value)) && /* @__PURE__ */ jsx("span", { className: "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs", children: facets.get(option.value) })
              ]
            },
            option.value
          );
        }) }),
        selectedValues.size > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(CommandSeparator, {}),
          /* @__PURE__ */ jsx(CommandGroup, { children: /* @__PURE__ */ jsxs(
            CommandItem,
            {
              onSelect: () => column == null ? void 0 : column.setFilterValue(void 0),
              className: "justify-center text-center",
              children: [
                /* @__PURE__ */ jsx(FilterX, { size: 16 }),
                t2("Clear filters")
              ]
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
}
function TableFilterSearchColumn({ column, title, align = "start" }) {
  const selectedValue = column == null ? void 0 : column.getFilterValue();
  const t2 = useTranslate();
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("div", { className: "inline-flex flex-row items-center gap-x-0.5", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          title,
          variant: "ghost",
          className: cn("h-4 border-dashed px-1 py-2.5", selectedValue && "text-green-500"),
          onClick: (e) => {
            if (!selectedValue) {
              return;
            }
            e.preventDefault();
            column == null ? void 0 : column.setFilterValue(void 0);
          },
          children: selectedValue ? /* @__PURE__ */ jsx(FilterX, { className: cn("h-3.5 w-3.5") }) : /* @__PURE__ */ jsx(FilterIcon, { className: cn("h-3.5 w-3.5") })
        }
      ),
      selectedValue && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mr-1 h-4" }),
        /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-muted-foreground cursor-pointer text-xs text-nowrap", children: selectedValue })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-[200px] overflow-hidden p-0 ring-0", align, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-popover text-popover-foreground flex flex-row items-center px-3", children: [
        /* @__PURE__ */ jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            defaultValue: selectedValue ?? "",
            onChange: (e) => {
              column == null ? void 0 : column.setFilterValue(e.target.value);
            },
            className: cn(
              "placeholder:text-muted-foreground h-10 rounded-md border-0 bg-transparent py-3 pl-0 text-sm ring-0 shadow-none outline-hidden focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
            ),
            placeholder: title
          }
        )
      ] }),
      selectedValue && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Separator, {}),
        /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-center p-1", children: /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            className: "h-8 w-full border-dashed px-2",
            onClick: () => {
              column == null ? void 0 : column.setFilterValue(void 0);
            },
            children: [
              /* @__PURE__ */ jsx(FilterX, { size: 16 }),
              t2("Clear filters")
            ]
          }
        ) })
      ] })
    ] }) })
  ] });
}
const Checkbox = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer border-primary focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground h-4 w-4 shrink-0 rounded-sm border shadow-sm focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" }) })
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
const CheckAll = forwardRef(
  ({ table, children, options }, ref) => {
    const t2 = useTranslate();
    const isSomeSelected = table.getIsSomeRowsSelected();
    const isAllSelected = table.getIsAllPageRowsSelected();
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Checkbox,
        {
          ref,
          checked: isSomeSelected ? "indeterminate" : isAllSelected,
          onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
          className: "ml-2",
          "aria-label": t2("Select all")
        }
      ),
      children || Array.isArray(options) && options.length && /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { disabled: !(isSomeSelected || isAllSelected), size: "icon", variant: "ghost", children: /* @__PURE__ */ jsx(DotsVerticalIcon, { className: cn("h-4 w-4", (isSomeSelected || isAllSelected) && "text-green-500") }) }) }),
        /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "start", children: [
          /* @__PURE__ */ jsx(DropdownMenuLabel, { children: t2("Bulk Actions") }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          !children && Array.isArray(options) && (options == null ? void 0 : options.length) > 0 ? options.map((option, key) => /* @__PURE__ */ jsx(
            DropdownMenuItem,
            {
              onSelect: option.onClick,
              className: cn(option == null ? void 0 : option.className),
              disabled: option == null ? void 0 : option.disabled,
              children: option.label
            },
            key
          )) : children
        ] })
      ] })
    ] });
  }
);
CheckAll.displayName = "CheckAll";
const Pagination = ({ table }) => {
  var _a, _b, _c;
  const t2 = useTranslate();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "sm-gap-y-0 bg-background sticky bottom-4 mt-0! flex flex-col items-center justify-between gap-y-4 pt-4 sm:flex-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground flex-1 text-sm", children: [
        table.getFilteredSelectedRowModel().rows.length,
        " of ",
        table.getFilteredRowModel().rows.length,
        " row(s) selected."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col-reverse items-center gap-y-4 space-x-6 sm:flex-row sm:gap-y-0 lg:space-x-8", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium", children: [
          "Total: ",
          ((_c = (_b = (_a = table == null ? void 0 : table.refineCore) == null ? void 0 : _a.tableQuery) == null ? void 0 : _b.data) == null ? void 0 : _c.total) ?? 0
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Rows per page" }),
          /* @__PURE__ */ jsxs(
            Select$1,
            {
              value: `${table.getState().pagination.pageSize}`,
              onValueChange: (value) => {
                table.setPageSize(Number(value));
              },
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: "h-8 w-[70px]", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: table.getState().pagination.pageSize }) }),
                /* @__PURE__ */ jsx(SelectContent, { children: [DEFAULT_PAGE_SIZE, 30, 40, 50, 100].map((pageSize) => /* @__PURE__ */ jsx(SelectItem, { value: `${pageSize}`, children: pageSize }, pageSize)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex w-fit items-center justify-center text-sm font-medium", children: [
          "Page ",
          table.getState().pagination.pageIndex + 1,
          " of ",
          table.getPageCount()
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              className: "hidden h-8 w-8 p-0 lg:flex",
              onClick: () => table.setPageIndex(0),
              disabled: !table.getCanPreviousPage(),
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Go to first page" }),
                /* @__PURE__ */ jsx(DoubleArrowLeftIcon, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              className: "h-8 w-8 p-0",
              onClick: () => table.previousPage(),
              disabled: !table.getCanPreviousPage(),
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: t2("Go to previous page") }),
                /* @__PURE__ */ jsx(ChevronLeftIcon, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              className: "h-8 w-8 p-0",
              onClick: () => table.nextPage(),
              disabled: !table.getCanNextPage(),
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: t2("Go to next page") }),
                /* @__PURE__ */ jsx(ChevronRightIcon, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              className: "hidden h-8 w-8 p-0 lg:flex",
              onClick: () => table.setPageIndex(table.getPageCount() - 1),
              disabled: !table.getCanNextPage(),
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: t2("Go to last page") }),
                /* @__PURE__ */ jsx(DoubleArrowRightIcon, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-background fixed bottom-0 m-0! h-4 w-full" })
  ] });
};
Pagination.displayName = "Pagination";
const SortAction = ({
  column
}) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "cursor-pointer",
      onClick: () => {
        column == null ? void 0 : column.toggleSorting((column == null ? void 0 : column.getIsSorted()) === "asc");
      },
      children: /* @__PURE__ */ jsxs("div", { className: "inline-flex flex-col", children: [
        /* @__PURE__ */ jsx(CaretUpIcon, { className: cn("-mb-1.5 h-5 w-5", (column == null ? void 0 : column.getIsSorted()) === "asc" ? "text-green-500!" : "") }),
        /* @__PURE__ */ jsx(CaretDownIcon, { className: cn("-mt-1.5 h-5 w-5", (column == null ? void 0 : column.getIsSorted()) === "desc" ? "text-green-500!" : "") })
      ] })
    }
  );
};
function TableFilterRadio({ column, title, options, align = "start" }) {
  const t2 = useTranslate();
  const selectedValue = column == null ? void 0 : column.getFilterValue();
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("div", { className: "inline-flex flex-row items-center gap-x-0.5", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          title,
          variant: "ghost",
          className: cn("h-5 border-dashed px-1 py-2.5", selectedValue && "text-green-500!"),
          onClick: (e) => {
            if (!selectedValue) {
              return;
            }
            e.preventDefault();
            column == null ? void 0 : column.setFilterValue(void 0);
          },
          children: selectedValue ? /* @__PURE__ */ jsx(FilterX, { className: cn("h-3.5 w-3.5") }) : /* @__PURE__ */ jsx(FilterIcon, { className: cn("h-3.5 w-3.5") })
        }
      ),
      selectedValue && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mr-1 h-4" }),
        /* @__PURE__ */ jsx(
          Badge,
          {
            variant: "secondary",
            className: "text-muted-foreground cursor-pointer text-xs text-nowrap capitalize",
            children: selectedValue
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-[200px] p-0", align, children: /* @__PURE__ */ jsxs(Command, { children: [
      /* @__PURE__ */ jsx(CommandInput, { placeholder: title }),
      /* @__PURE__ */ jsxs(CommandList, { children: [
        /* @__PURE__ */ jsxs(CommandEmpty, { children: [
          t2("No results found"),
          "."
        ] }),
        /* @__PURE__ */ jsx(CommandGroup, { children: options == null ? void 0 : options.map((option) => {
          const isSelected = selectedValue === option.value;
          return /* @__PURE__ */ jsxs(
            CommandItem,
            {
              onSelect: () => {
                column == null ? void 0 : column.setFilterValue(option.value);
              },
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      "border-primary mr-2 flex h-4 w-4 items-center justify-center rounded-sm border",
                      isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                    ),
                    children: /* @__PURE__ */ jsx(CheckIcon, { className: cn("h-4 w-4") })
                  }
                ),
                option.icon && /* @__PURE__ */ jsx(option.icon, { className: "text-muted-foreground mr-2 h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { children: option.label })
              ]
            },
            option.value
          );
        }) }),
        selectedValue && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(CommandSeparator, {}),
          /* @__PURE__ */ jsx(CommandGroup, { children: /* @__PURE__ */ jsxs(
            CommandItem,
            {
              onSelect: () => column == null ? void 0 : column.setFilterValue(void 0),
              className: "justify-center text-center",
              children: [
                /* @__PURE__ */ jsx(FilterX, { size: 16 }),
                t2("Clear filters")
              ]
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
}
const DataTableViewOptions = ({
  table
}) => {
  const t2 = useTranslate();
  const columns = useMemo(() => {
    return table.getAllColumns().filter((column) => typeof column.accessorFn !== "undefined" && column.getCanHide());
  }, [table]);
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger$1, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "dashed", className: "ml-auto hidden h-8 lg:flex", children: [
      /* @__PURE__ */ jsx(MixerHorizontalIcon, { className: "mr-2 h-4 w-4" }),
      t2("Columns")
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-[150px]", children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { children: t2("Toggle columns") }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      columns.map((column) => {
        var _a, _b;
        return /* @__PURE__ */ jsx(
          DropdownMenuCheckboxItem,
          {
            className: "capitalize",
            checked: column.getIsVisible(),
            onCheckedChange: (value) => column.toggleVisibility(value),
            onSelect: (event) => event.preventDefault(),
            children: ((_b = (_a = column == null ? void 0 : column.columnDef) == null ? void 0 : _a.header) == null ? void 0 : _b.toString()) || t2(column.id)
          },
          column.id
        );
      })
    ] })
  ] });
};
DataTableViewOptions.displayName = "DataTableViewOptions";
function DataTableToolbar({ table, toolbar }) {
  const appendProps = useCallback((child, index) => {
    var _a;
    if (!child || typeof child !== "object" || !("props" in child)) {
      return child;
    }
    return cloneElement(child, { key: index, variant: ((_a = child.props) == null ? void 0 : _a.variant) || "outline" });
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-1 items-center space-x-2", children: Array.isArray(toolbar) ? toolbar.map((child, index) => appendProps(child, index)) : appendProps(toolbar) }),
    /* @__PURE__ */ jsx(DataTableViewOptions, { table })
  ] });
}
function Table({ children, showHeader = true, columns = [], refineCoreProps, toolbar, ...props }) {
  var _a;
  const t2 = useTranslate();
  const mapColumn = useCallback(
    ({
      id,
      accessorKey,
      header,
      enableSorting,
      enableHiding,
      filter,
      cell,
      meta: meta2
    }) => {
      const column = {
        id,
        header,
        accessorKey,
        enableSorting: enableSorting ?? false,
        enableHiding: enableHiding ?? false,
        enableColumnFilter: true,
        enableResizing: true,
        filter,
        meta: meta2
      };
      if (cell) {
        column["cell"] = cell;
      }
      return column;
    },
    []
  );
  columns = useMemo(() => {
    if (Array.isArray(children)) {
      return children.map((value) => value.props).map(mapColumn);
    }
    return [];
  }, [children, mapColumn]);
  const table = useTable({
    columns,
    refineCoreProps: {
      initialPageSize: DEFAULT_PAGE_SIZE,
      ...refineCoreProps
    },
    ...props
  });
  const tableOptions = useMemo(() => table.options, [table]);
  const isFilterable = useMemo(
    () => Boolean(tableOptions.enableColumnFilters || (tableOptions == null ? void 0 : tableOptions.enableFilters)),
    [tableOptions]
  );
  return /* @__PURE__ */ jsx(DeleteProvider, { children: /* @__PURE__ */ jsxs("div", { className: "mt-1 space-y-4", children: [
    /* @__PURE__ */ jsx(DataTableToolbar, { table, toolbar }),
    /* @__PURE__ */ jsx("div", { className: "border-border rounded-md border", children: /* @__PURE__ */ jsxs(Table$1, { children: [
      showHeader && /* @__PURE__ */ jsx(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx(TableRow, { children: headerGroup.headers.map((header) => {
        const columnDef = header.column.columnDef;
        return /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsxs("div", { className: "inline-flex flex-row items-center gap-x-2.5", children: [
          header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext()),
          tableOptions.enableSorting && columnDef.enableSorting && /* @__PURE__ */ jsx(SortAction, { column: header.column }),
          isFilterable && (columnDef == null ? void 0 : columnDef.filter) && columnDef.filter({
            column: header.column,
            title: `${columnDef.header} Filter`
          })
        ] }) }, header.id);
      }) }, headerGroup.id)) }),
      /* @__PURE__ */ jsx(TableBody, { children: table.refineCore.tableQuery.isLoading ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: columns.length, className: "h-24 text-center text-nowrap", children: /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-center", children: /* @__PURE__ */ jsx(Loader, { className: "text-primary h-4" }) }) }) }) : ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { className: "text-nowrap", children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsxs(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: [
        t2("No results"),
        "."
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(Pagination, { table })
  ] }) });
}
function TableColumn(props) {
  return props.children;
}
Table.Column = TableColumn;
Table.CheckAll = CheckAll;
Table.Actions = RowActions;
Table.Action = RowAction;
Table.EditAction = EditAction;
Table.ShowAction = ShowAction;
Table.CloneAction = CloneAction;
Table.DeleteAction = DeleteAction;
Table.Filter = {
  DateRangePicker: TableFilterDateRangePickerFilter,
  Dropdown: TableFilterDropdown,
  Search: TableFilterSearchColumn,
  Radio: TableFilterRadio
};
Table.displayName = "Table";
function PermissionDenied() {
  return /* @__PURE__ */ jsx("div", { className: "relative h-screen font-['sans-serif']", children: /* @__PURE__ */ jsxs("div", { className: "absolute top-1/2 left-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-center leading-[1.4]", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-[-1] mx-auto mt-0 mb-5 h-[200px]", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-forceground absolute top-1/2 left-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase", children: "Oops!" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-forceground bg-background absolute inset-x-0 bottom-0 m-auto inline-block px-[5px] pt-5 text-[28px] font-normal capitalize", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-background absolute -top-1 -right-1 -bottom-1 -left-1 z-10 blur-xl" }),
        "403 - Permission Denied"
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mb-8 text-xl text-red-500", children: "Sorry, You don't have permission to access this page." }),
    /* @__PURE__ */ jsx(Link$1, { prefetch: "intent", viewTransition: true, to: "/api/auth/logout", children: /* @__PURE__ */ jsx(Button, { children: "Back To Login" }) })
  ] }) });
}
function NotFound() {
  return /* @__PURE__ */ jsx("div", { className: "relative h-screen font-['sans-serif']", children: /* @__PURE__ */ jsxs("div", { className: "absolute top-1/2 left-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-center leading-[1.4]", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-[-1] mx-auto mt-0 mb-5 h-[200px]", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-forceground absolute top-1/2 left-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase", children: "Oops!" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-forceground bg-background absolute inset-x-0 bottom-0 m-auto inline-block px-[5px] pt-5 text-[28px] font-normal capitalize", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-background absolute -top-1 -right-1 -bottom-1 -left-1 z-10 blur-xl" }),
        "404 - The Page can't be found"
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mb-8 text-xl text-red-500", children: "Sorry, You are looking for something that isn't here." }),
    /* @__PURE__ */ jsx(Link$1, { prefetch: "intent", viewTransition: true, to: "/", children: /* @__PURE__ */ jsx(Button, { children: "Back To Home" }) })
  ] }) });
}
function PageError({ error }) {
  const routeError = useRouteError();
  const back = useBack();
  if (!error) {
    error = routeError;
  }
  useMountEffect(() => {
    console.error("@PageError", error);
  });
  return /* @__PURE__ */ jsx("div", { className: "relative h-screen flex-1 font-['sans-serif']", children: /* @__PURE__ */ jsxs("div", { className: "absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-10 text-center leading-[1.4]", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-[-1] mx-auto mt-0 mb-5 h-[200px]", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-forceground absolute top-1/2 left-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase", children: "Oops!" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-forceground bg-background absolute inset-x-0 bottom-0 m-auto inline-block max-w-[520px] px-[5px] pt-5 text-[28px] font-normal capitalize", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-background absolute -top-1 -right-1 -bottom-1 -left-1 z-10 blur-xl" }),
        isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : "Something went wrong"
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mb-8 text-xl text-red-500", children: error.message || "unknown error" }),
    /* @__PURE__ */ jsx(Button, { onClick: back, className: "mr-3", children: "Go Back" }),
    /* @__PURE__ */ jsx(Button, { onClick: () => location.reload(), children: "Try Again" })
  ] }) });
}
function ComingSoon() {
  const back = useBack();
  return /* @__PURE__ */ jsx("div", { className: "relative h-full font-['sans-serif']", children: /* @__PURE__ */ jsxs("div", { className: "absolute top-1/2 left-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-center leading-[1.4]", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-[-1] mx-auto mt-0 mb-5 h-[200px]", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-forceground absolute top-1/2 left-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase", children: "Oops!" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-forceground bg-background absolute inset-x-0 bottom-0 m-auto inline-block px-[5px] pt-5 text-[28px] font-normal capitalize", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-background absolute -top-1 -right-1 -bottom-1 -left-1 z-10 blur-xl" }),
        "Coming Soon ..."
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mb-8 text-xl", children: "Sorry, This page is under construction." }),
    /* @__PURE__ */ jsx(Button, { onClick: back, className: "mr-3", children: "Go Back" })
  ] }) });
}
function ErrorMessage({ error }) {
  if (!error) {
    return null;
  }
  let message = "";
  if (typeof error === "string") {
    message = error;
  } else if (error instanceof Error) {
    message = error.message;
  }
  return /* @__PURE__ */ jsx("p", { className: "text-destructive text-sm", children: message });
}
function PrivacyPolicy() {
  return /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground [&_a]:hover:text-primary text-center text-xs text-balance [&_a]:underline [&_a]:underline-offset-4", children: [
    "By clicking continue, you agree to our ",
    /* @__PURE__ */ jsx(Link$1, { prefetch: "intent", viewTransition: true, to: "#", children: "Privacy Policy" }),
    "."
  ] });
}
const TcskOAuth2 = ({ redirectTo }) => {
  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";
  const handleLogin = () => {
    fetcher.submit({ redirectTo }, { method: "POST", action: `/api/auth/${EnumAuthProvider.tcshuke}` });
  };
  return /* @__PURE__ */ jsx(
    Button,
    {
      type: "button",
      variant: "outline",
      className: "w-full border-green-500 text-green-500!",
      onClick: handleLogin,
      loading,
      children: "Continue with TCSK"
    }
  );
};
function LoginForm() {
  var _a, _b, _c;
  const { errors } = useActionData() || {};
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";
  const navigation = useNavigation$1();
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsxs(CardContent, { className: "grid p-0 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(Form$2, { method: "post", className: "p-6 md:p-8", children: [
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "redirectTo", value: redirectTo }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("h1", { className: "flex items-center text-2xl font-bold", children: "Welcome back" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-balance", children: "Login to your OSS Inc. account" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "email",
                id: "email",
                type: "email",
                placeholder: "Goodman@example.com",
                defaultValue: searchParams.get("email") || "administrator@goodman.com",
                required: true,
                autoFocus: true,
                autoComplete: "email"
              }
            ),
            /* @__PURE__ */ jsx(ErrorMessage, { error: (_a = errors == null ? void 0 : errors.email) == null ? void 0 : _a[0] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
              /* @__PURE__ */ jsx(
                Link$1,
                {
                  prefetch: "intent",
                  viewTransition: true,
                  to: "#",
                  className: "ml-auto text-sm underline-offset-2 hover:underline",
                  children: "Forgot your password?"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "password",
                id: "password",
                type: "password",
                required: true,
                autoComplete: "current-password",
                minLength: 6,
                maxLength: 50,
                defaultValue: "Abc@12345678"
              }
            ),
            /* @__PURE__ */ jsx(ErrorMessage, { error: (_b = errors == null ? void 0 : errors.password) == null ? void 0 : _b[0] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", disabled: navigation.state === "submitting", children: "Login" }),
            /* @__PURE__ */ jsx(ErrorMessage, { error: (_c = errors == null ? void 0 : errors.default) == null ? void 0 : _c[0] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t", children: /* @__PURE__ */ jsx("span", { className: "bg-background text-muted-foreground relative z-10 px-2", children: "or" }) }),
          /* @__PURE__ */ jsx(TcskOAuth2, { redirectTo }),
          /* @__PURE__ */ jsxs("div", { className: "text-center text-sm", children: [
            `Don't have an account? `,
            /* @__PURE__ */ jsx(Link$1, { prefetch: "intent", viewTransition: true, to: "/register", replace: true, className: "underline underline-offset-4", children: "Sign up" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-muted relative hidden md:block", children: /* @__PURE__ */ jsx("img", { src: "/logo.png", alt: "", className: "absolute inset-0 h-full w-full object-cover dark:brightness-[0.3]" }) })
    ] }) }),
    /* @__PURE__ */ jsx(PrivacyPolicy, {})
  ] });
}
function RegisterForm() {
  var _a, _b, _c, _d;
  const { errors } = useActionData() || {};
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";
  const navigation = useNavigation$1();
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsxs(Form$2, { method: "post", children: [
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "redirectTo", value: redirectTo }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsxs(Link$1, { prefetch: "intent", viewTransition: true, to: "/", className: "flex flex-col items-center gap-2 font-medium", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-md", children: /* @__PURE__ */ jsx(GalleryVerticalEnd, { className: "size-6" }) }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Remix Inc." })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: "Welcome to Signup OSS Inc." }),
          /* @__PURE__ */ jsxs("div", { className: "text-center text-sm", children: [
            `Already has an account? `,
            /* @__PURE__ */ jsx(Link$1, { prefetch: "intent", viewTransition: true, to: "/login", replace: true, className: "underline underline-offset-4", children: "Sign in" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsx(
              Input,
              {
                name: "email",
                id: "email",
                type: "email",
                placeholder: "Goodman@example.com",
                required: true,
                autoFocus: true,
                autoComplete: "email",
                defaultValue: "administrator@goodman.com"
              }
            ) }),
            /* @__PURE__ */ jsx(ErrorMessage, { error: (_a = errors == null ? void 0 : errors.email) == null ? void 0 : _a[0] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "code", children: "Validate Code" }),
            /* @__PURE__ */ jsx(Input, { name: "code", id: "code", type: "code", required: true, minLength: 6, maxLength: 6 }),
            /* @__PURE__ */ jsx(ErrorMessage, { error: (_b = errors == null ? void 0 : errors.code) == null ? void 0 : _b[0] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "password",
                id: "password",
                type: "password",
                required: true,
                autoComplete: "new-password",
                minLength: 6,
                maxLength: 50,
                defaultValue: "Abc@12345678"
              }
            ),
            /* @__PURE__ */ jsx(ErrorMessage, { error: (_c = errors == null ? void 0 : errors.password) == null ? void 0 : _c[0] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", disabled: navigation.state === "submitting", children: "Register" }),
            /* @__PURE__ */ jsx(ErrorMessage, { error: (_d = errors == null ? void 0 : errors.default) == null ? void 0 : _d[0] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t", children: /* @__PURE__ */ jsx("span", { className: "bg-background text-muted-foreground relative z-10 px-2", children: "or" }) }),
        /* @__PURE__ */ jsx(TcskOAuth2, { redirectTo })
      ] })
    ] }),
    /* @__PURE__ */ jsx(PrivacyPolicy, {})
  ] });
}
function H1({ children, className, ...props }) {
  return /* @__PURE__ */ jsx("h1", { className: cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className), ...props, children });
}
function H2({ children, className, ...props }) {
  return /* @__PURE__ */ jsx(
    "h2",
    {
      className: cn("mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className),
      ...props,
      children
    }
  );
}
function P({ children, className, ...props }) {
  return /* @__PURE__ */ jsx("p", { className: cn("leading-7 not-first:mt-6", className), ...props, children });
}
function Image({ src, alt, className, ...props }) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: src || "/placeholder.svg",
      alt,
      className: cn("w-full rounded-lg object-cover", className),
      ...props
    }
  );
}
const FullscreenSwitcher = () => {
  return /* @__PURE__ */ jsx(
    Button,
    {
      variant: "ghost",
      size: "icon",
      onClick: () => {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          document.documentElement.requestFullscreen();
        }
      },
      children: /* @__PURE__ */ jsx(Fullscreen, {})
    }
  );
};
function LanguageSwitcher() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { locale } = useRouteLoaderData("root");
  const { changeLocale, getLocale } = useTranslation();
  const currentLocale = canUseDOM() ? getLocale() : locale;
  return /* @__PURE__ */ jsx(
    Button,
    {
      variant: "ghost",
      size: "icon",
      type: "submit",
      onClick: async () => {
        const nextLocale = currentLocale === "zh" ? "en" : "zh";
        await changeLocale(nextLocale);
        searchParams.set("locale", nextLocale);
        setSearchParams(searchParams, { replace: true });
      },
      children: /* @__PURE__ */ jsx(Languages, { className: cn("transition-all", currentLocale === "en" && "scale-x-[-1]") })
    }
  );
}
function NavTools() {
  const [searchParams, setSearchParams] = useSearchParams();
  const matches = useMatches$1();
  const { query } = useKBar();
  const lastMatch = matches[matches.length - 1];
  const handle2 = lastMatch.handle;
  const defaultTools = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex h-8 cursor-pointer items-center gap-2 rounded-full border px-2 text-sm opacity-50",
        onClick: () => query.toggle(),
        children: [
          /* @__PURE__ */ jsx(Search, { className: "size-4" }),
          /* @__PURE__ */ jsx("span", { children: "Search..." }),
          /* @__PURE__ */ jsx(Badge, { className: "size-4 w-auto rounded-full px-1", children: "⌘K" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(BackButton, { variant: "ghost", size: "icon" }),
    /* @__PURE__ */ jsx(LanguageSwitcher, {}),
    /* @__PURE__ */ jsx(FullscreenSwitcher, {})
  ] });
  const { uiTools, uiFilter } = handle2 || {};
  if (!uiTools && !uiFilter) {
    return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: defaultTools });
  }
  function changeParams(key, value) {
    if (value) {
      searchParams.set(key, "1");
    } else {
      searchParams.delete(key);
    }
    setSearchParams(searchParams, { replace: true });
  }
  const domUiTools = typeof uiTools === "function" ? uiTools(lastMatch, matches) : uiTools;
  const filter = Boolean(searchParams.get("filter"));
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
    defaultTools,
    uiFilter && /* @__PURE__ */ jsx(
      Button,
      {
        variant: "ghost",
        size: "icon",
        className: cn(filter && "text-green-500"),
        onClick: () => changeParams("filter", !filter),
        children: filter ? /* @__PURE__ */ jsx(FilterX, {}) : /* @__PURE__ */ jsx(Filter, {})
      }
    ),
    /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "h-4" }),
    domUiTools
  ] });
}
function SidebarRight({ ...props }) {
  const [searchParams] = useSearchParams();
  const matches = useMatches$1();
  const lastMatch = matches[matches.length - 1];
  const handle2 = lastMatch.handle;
  const { uiFilter } = handle2 || {};
  if (!uiFilter) {
    return null;
  }
  const isActive = Boolean(searchParams.get("filter"));
  return /* @__PURE__ */ jsx(
    Sidebar$1,
    {
      collapsible: "none",
      className: cn("sticky top-0 flex h-svh w-0 border-l transition-all", isActive && "w-(--sidebar-width)"),
      ...props,
      children: typeof uiFilter === "function" ? uiFilter(lastMatch, matches) : uiFilter
    }
  );
}
function Layout() {
  const { sidebarIsClose } = useRouteLoaderData("root");
  return /* @__PURE__ */ jsxs(SidebarProvider, { open: !sidebarIsClose || sidebarIsClose !== "true", children: [
    /* @__PURE__ */ jsx(SidebarLeft, {}),
    /* @__PURE__ */ jsxs(SidebarInset, { children: [
      /* @__PURE__ */ jsxs("header", { className: "bg-background sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4", children: [
          /* @__PURE__ */ jsx(SidebarTrigger, { className: "-ml-1" }),
          /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mr-2 h-4" }),
          /* @__PURE__ */ jsx(Breadcrumbs, {})
        ] }),
        /* @__PURE__ */ jsx("div", { className: "ml-auto px-3", children: /* @__PURE__ */ jsx(NavTools, {}) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex max-w-[calc(100vw-var(--sidebar-width))] flex-1 flex-col gap-4 p-4 pt-0 transition-[max-width] duration-200 ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:max-w-[calc(100vw-var(--sidebar-width-icon))] group-data-[collapsible=offcanvas]/sidebar-wrapper:max-w-[100vw]", children: /* @__PURE__ */ jsx(Outlet, {}) })
    ] }),
    /* @__PURE__ */ jsx(SidebarRight, {})
  ] });
}
function ThemeSwitcher({
  theme,
  setTheme
}) {
  const toggleTheme = () => {
    const themeNext = theme && theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(themeNext);
    document.documentElement.classList.remove(theme || Theme.LIGHT);
    document.documentElement.classList.add(themeNext);
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full cursor-pointer px-0 py-2 select-none", onClick: toggleTheme, children: [
    /* @__PURE__ */ jsx(Sun, { size: 16, className: "absolute scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" }),
    /* @__PURE__ */ jsx(Moon, { size: 16, className: "absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" }),
    /* @__PURE__ */ jsx("span", { children: " " })
  ] });
}
const items = [{ title: "Service Health Check", url: "/playground/dashboard/health", icon: Activity }];
function NavSecondary() {
  const [theme, setTheme] = useTheme();
  const buttonRef = useRef(null);
  useMountEffect(() => {
    if (!buttonRef.current) {
      return;
    }
    const feedback = Sentry.feedbackIntegration({ autoInject: false, colorScheme: theme });
    feedback.attachTo(buttonRef.current);
  });
  return /* @__PURE__ */ jsx(SidebarGroup, { className: "mt-auto opacity-80", children: /* @__PURE__ */ jsx(SidebarGroupContent, { children: /* @__PURE__ */ jsxs(SidebarMenu, { children: [
    items.map((item) => /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(SidebarMenuButton, { asChild: true, size: "sm", children: /* @__PURE__ */ jsxs("a", { href: item.url, children: [
      /* @__PURE__ */ jsx(item.icon, { className: cn(item.title === "Service Health Check" && "animate-pulse text-green-500") }),
      /* @__PURE__ */ jsx("span", { children: item.title })
    ] }) }) }, item.title)),
    /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(SidebarMenuButton, { asChild: true, size: "sm", children: /* @__PURE__ */ jsxs("div", { ref: buttonRef, className: "cursor-pointer", children: [
      /* @__PURE__ */ jsx(Bug, { className: "text-yellow-500" }),
      /* @__PURE__ */ jsx("span", { children: "Report a Bug" })
    ] }) }) }, "sentry-feedback"),
    /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(SidebarMenuButton, { asChild: true, size: "sm", children: /* @__PURE__ */ jsx("div", { className: "cursor-pointer", children: /* @__PURE__ */ jsx(ThemeSwitcher, { theme, setTheme }) }) }) }, "theme-switch")
  ] }) }) });
}
const Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Image, { ref, className: cn("aspect-square h-full w-full", className), ...props }));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn("bg-muted flex h-full w-full items-center justify-center rounded-full", className),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
function NavUser() {
  var _a, _b;
  const { user } = useRouteLoaderData("root") || {};
  const { mutate: logout } = useLogout();
  const { isMobile } = useSidebar();
  function onLoginout() {
    logout();
  }
  return /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      SidebarMenuButton,
      {
        size: "lg",
        className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
        children: [
          /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8 rounded-lg", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: (user == null ? void 0 : user.avatar) || "/avatar.jpg", alt: (user == null ? void 0 : user.name) || "" }),
            /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-lg", children: ((_a = user == null ? void 0 : user.name) == null ? void 0 : _a.charAt(0)) || "?" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
            /* @__PURE__ */ jsx("span", { className: "truncate font-semibold capitalize", children: (user == null ? void 0 : user.name) || "unknown user" }),
            /* @__PURE__ */ jsx("span", { className: "truncate text-xs", children: (user == null ? void 0 : user.email) || "..." })
          ] }),
          /* @__PURE__ */ jsx(ChevronsUpDown, { className: "ml-auto size-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(
      DropdownMenuContent,
      {
        className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
        side: isMobile ? "bottom" : "right",
        align: "end",
        sideOffset: 4,
        children: [
          /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "p-0 font-normal", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: [
            /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8 rounded-lg", children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: (user == null ? void 0 : user.avatar) || "/avatar.jpg", alt: (user == null ? void 0 : user.name) || "" }),
              /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-lg", children: ((_b = user == null ? void 0 : user.name) == null ? void 0 : _b.charAt(0)) || "?" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ jsx("span", { className: "truncate font-semibold capitalize", children: (user == null ? void 0 : user.name) || "unknown user" }),
              /* @__PURE__ */ jsx("span", { className: "truncate text-xs", children: (user == null ? void 0 : user.email) || "..." })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs(DropdownMenuGroup, { children: [
            /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
              /* @__PURE__ */ jsx(BadgeCheck, {}),
              "Account"
            ] }),
            /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
              /* @__PURE__ */ jsx(CreditCard, {}),
              "Billing"
            ] }),
            /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
              /* @__PURE__ */ jsx(Bell, {}),
              "Notifications"
            ] })
          ] }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: onLoginout, children: [
            /* @__PURE__ */ jsx(LogOut, {}),
            /* @__PURE__ */ jsx("span", { children: "Log out" })
          ] })
        ]
      }
    )
  ] }) }) });
}
function SidebarLeft({ ...props }) {
  return /* @__PURE__ */ jsxs(Sidebar$1, { collapsible: "icon", ...props, children: [
    /* @__PURE__ */ jsx(SidebarHeader, { children: /* @__PURE__ */ jsx(RoleSwitcher, {}) }),
    /* @__PURE__ */ jsxs(SidebarContent, { children: [
      /* @__PURE__ */ jsx(Sidebar, {}),
      /* @__PURE__ */ jsx(NavSecondary, {})
    ] }),
    /* @__PURE__ */ jsx(SidebarFooter, { children: /* @__PURE__ */ jsx(NavUser, {}) }),
    /* @__PURE__ */ jsx(SidebarRail, {})
  ] });
}
function RoleSwitcher() {
  const { isMobile } = useSidebar();
  const { user } = useRouteLoaderData("root") || {};
  const { role, roles = [] } = user || {};
  const userRoles = rolesAll.filter((item) => roles.includes(item.value));
  const [activeRole, setActiveRole] = React.useState(
    rolesAll.find((item) => {
      return item.value === role;
    })
  );
  const switchRole = React.useCallback(async (selectedRole) => {
    try {
      await webapi.post("/permissions/switch", {
        role: selectedRole == null ? void 0 : selectedRole.value
      });
      setActiveRole(selectedRole);
      location.reload();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      SidebarMenuButton,
      {
        size: "lg",
        className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
        children: [
          /* @__PURE__ */ jsx("div", { className: "bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg", children: /* @__PURE__ */ jsx(GalleryVerticalEnd, { className: "size-4" }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
            /* @__PURE__ */ jsx("span", { className: "truncate font-semibold", children: "OSS Inc." }),
            /* @__PURE__ */ jsx("span", { className: "truncate text-xs", children: (activeRole == null ? void 0 : activeRole.label) || "unknown" })
          ] }),
          /* @__PURE__ */ jsx(ChevronsUpDown, { className: "ml-auto" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(
      DropdownMenuContent,
      {
        className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
        align: "start",
        side: isMobile ? "bottom" : "right",
        sideOffset: 4,
        children: [
          /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "text-muted-foreground text-xs", children: "roles" }),
          userRoles.map((role2, index) => /* @__PURE__ */ jsxs(
            DropdownMenuItem,
            {
              onClick: () => switchRole(role2),
              className: "gap-2 p-2",
              disabled: role2.value === (activeRole == null ? void 0 : activeRole.value),
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex size-6 items-center justify-center rounded-sm border", children: /* @__PURE__ */ jsx(role2.icon, { className: "size-4 shrink-0" }) }),
                role2.label,
                /* @__PURE__ */ jsxs(DropdownMenuShortcut, { children: [
                  "⌘",
                  index + 1
                ] })
              ]
            },
            role2.value
          )),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs(DropdownMenuItem, { className: "gap-2 p-2", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-background flex size-6 items-center justify-center rounded-md border", children: /* @__PURE__ */ jsx(Plus, { className: "size-4" }) }),
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground font-medium", children: "Apply Role" })
          ] })
        ]
      }
    )
  ] }) }) });
}
const Toaster = ({ ...props }) => {
  const [theme = "system"] = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground whitespace-pre-line select-text",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          icon: "self-start mt-0.5"
        }
      },
      ...props
    }
  );
};
let permissionsCache = null;
let identityCache = null;
const authProvider = {
  login: async ({ providerName, email, password, redirectTo = "/" }) => {
    try {
      const response = await webapi.post(`/auth/${providerName}`, {
        email,
        password
      });
      const res = await response.json();
      if (response.ok && res.id) {
        return {
          success: true,
          redirectTo,
          user: res
        };
      }
      return {
        success: false,
        error: {
          message: res.message || "登录失败",
          name: "Invalid credentials"
        }
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: error.message || "登录失败，请检查用户名和密码",
          name: "Invalid credentials"
        }
      };
    }
  },
  logout: async () => {
    Sentry.setUser(null);
    const redirectTo = encodeURIComponent(window.location.href);
    window.location.href = `/api/auth/logout?redirectTo=${redirectTo}`;
    return {
      success: true,
      redirectTo: `/login?redirectTo=${redirectTo}`
    };
  },
  check: async () => {
    const redirectTo = `/login?redirectTo=${window.location.href}`;
    try {
      const response = await webapi.get(`/auth/me`);
      const { data: data2 } = await response.json();
      if (data2 && data2.id) {
        return {
          authenticated: true
        };
      }
      return {
        authenticated: false,
        error: {
          message: "未登录",
          name: "Not authenticated"
        },
        logout: true,
        redirectTo
      };
    } catch (error) {
      return {
        authenticated: false,
        error: {
          message: "未登录",
          name: "Not authenticated"
        },
        logout: true,
        redirectTo
      };
    }
  },
  getIdentity: async () => {
    try {
      if (identityCache) {
        return identityCache;
      }
      const response = await webapi.get(`/auth/me`);
      const { data: data2 } = await response.json();
      if (data2 && data2.id) {
        identityCache = data2;
        return data2;
      }
      return null;
    } catch (error) {
      console.error("@authProvider.getIdentity", error);
      return null;
    }
  },
  onError: async (error) => {
    if (error.status === 401 || error.status === 403) {
      return {
        logout: true,
        redirectTo: "/login",
        error
      };
    }
    return { error };
  },
  setPermissions: async (permissions) => {
    permissionsCache = permissions;
  },
  getPermissions: async () => {
    if (permissionsCache == null ? void 0 : permissionsCache.length) {
      return permissionsCache;
    }
    if (canUseDOM() && window.__PERMISSIONS_DATA__) {
      const { permissions, signature } = window.__PERMISSIONS_DATA__;
      if (!(permissions == null ? void 0 : permissions.length)) {
        return [];
      }
      if (await verifySignature({ data: permissions }, signature)) {
        permissionsCache = permissions;
        return permissionsCache;
      } else {
        console.error("@authProvider.getPermissions - 权限数据验证失败，可能被篡改");
      }
    }
    return [];
  }
};
const accessControlProvider = {
  can: async ({ resource = "", action: action2, params }) => {
    try {
      const permissions = await authProvider.getPermissions();
      if (!(permissions == null ? void 0 : permissions.length)) {
        return {
          can: false,
          reason: "No permission rules found"
        };
      }
      if (action2 === EnumAction.delete || action2 === EnumAction.edit || action2 === EnumAction.show) {
        resource = `${resource}/${params == null ? void 0 : params.id}`;
      } else if (action2 === EnumAction.field) {
        resource = `${resource}/${params == null ? void 0 : params.field}`;
      }
      const matchedRules = permissions.filter((rule) => {
        return (rule.object === "*" || keyMatch(resource, rule.object)) && (rule.action === "*" || regexMatch(action2, rule.action));
      });
      if (matchedRules.length === 0) {
        return {
          can: false,
          reason: "Permission denied"
        };
      }
      const sortedRules = matchedRules.sort((a, b) => {
        const aSpecificity = (a.object.match(/\*/g) || []).length;
        const bSpecificity = (b.object.match(/\*/g) || []).length;
        return aSpecificity - bSpecificity;
      });
      const mostSpecificRule = sortedRules[0];
      const permitted = mostSpecificRule.effect !== "deny";
      return {
        can: permitted,
        reason: !permitted ? "You are not allowed to perform this action" : void 0
      };
    } catch (error) {
      console.error("@accessControlProvider - Permission check failed:", error);
      return {
        can: false,
        reason: "Permission check failed"
      };
    }
  },
  options: {
    buttons: { enableAccessControl: true, hideIfUnauthorized: false },
    queryOptions: { cacheTime: 5 * 60 * 1e3, staleTime: 0 }
  }
};
function keyMatch(key1, key2) {
  const key2Parts = key2.split("/*");
  if (key2Parts.length === 1) {
    return key1 === key2;
  }
  const basePath = key2Parts[0];
  return key1.startsWith(basePath);
}
function regexMatch(pattern1, pattern2) {
  try {
    const regex = new RegExp("^" + pattern2 + "$");
    return regex.test(pattern1);
  } catch {
    return pattern1 === pattern2;
  }
}
const axiosInstance = axios.create();
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    var _a, _b, _c;
    const customError = {
      ...error,
      message: ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || error.message,
      statusCode: (_c = error.response) == null ? void 0 : _c.status
    };
    return Promise.reject(customError);
  }
);
const mapOperator = (operator) => {
  switch (operator) {
    case "and":
      return "$and";
    case "or":
      return "$or";
    case "eq":
      return CondOperator.EQUALS;
    case "ne":
      return CondOperator.NOT_EQUALS;
    case "lt":
      return CondOperator.LOWER_THAN;
    case "gt":
      return CondOperator.GREATER_THAN;
    case "lte":
      return CondOperator.LOWER_THAN_EQUALS;
    case "gte":
      return CondOperator.GREATER_THAN_EQUALS;
    case "in":
      return CondOperator.IN;
    case "nin":
      return CondOperator.NOT_IN;
    case "contains":
      return CondOperator.CONTAINS_LOW;
    case "ncontains":
      return CondOperator.EXCLUDES_LOW;
    case "containss":
      return CondOperator.CONTAINS;
    case "ncontainss":
      return CondOperator.EXCLUDES;
    case "null":
      return CondOperator.IS_NULL;
    case "nnull":
      return CondOperator.NOT_NULL;
    case "startswith":
      return CondOperator.STARTS_LOW;
    case "startswiths":
      return CondOperator.STARTS;
    case "endswith":
      return CondOperator.ENDS_LOW;
    case "endswiths":
      return CondOperator.ENDS;
    case "between":
      return CondOperator.BETWEEN;
  }
  return CondOperator.EQUALS;
};
const generateSearchFilter = (filters) => {
  return createSearchQuery({
    operator: "and",
    value: filters
  });
};
const createSearchQuery = (filter) => {
  if (filter.operator !== "and" && filter.operator !== "or" && "field" in filter) {
    return {
      [filter.field]: {
        [mapOperator(filter.operator)]: filter.value
      }
    };
  }
  const { operator } = filter;
  return {
    [mapOperator(operator)]: filter.value.map((filter2) => createSearchQuery(filter2))
  };
};
const handleFilter = (query, filters) => {
  if (Array.isArray(filters) && filters.length > 0) {
    query.search(generateSearchFilter(filters));
  }
  return query;
};
const handleJoin = (query, join) => {
  if (join) {
    query.setJoin(join);
  }
  return query;
};
const handlePagination = (query, pagination) => {
  const { current = 1, pageSize = DEFAULT_PAGE_SIZE, mode: mode2 = "server" } = pagination ?? {};
  if (mode2 === "server") {
    query.setLimit(pageSize).setPage(current).setOffset((current - 1) * pageSize);
  }
  return query;
};
const generateSort = (sort) => {
  if (sort && sort.length > 0) {
    const multipleSort = [];
    sort.map(({ field, order }) => {
      if (field && order) {
        multipleSort.push({
          field,
          order: order.toUpperCase()
        });
      }
    });
    return multipleSort;
  }
  return;
};
const handleSort = (query, sorters) => {
  const sortBy = generateSort(sorters);
  if (sortBy) {
    query.sortBy(sortBy);
  }
  return query;
};
function transformPrismaError(errorMessage) {
  if (!errorMessage.includes("prisma")) {
    return errorMessage;
  }
  const errorType = errorMessage.split("invocation")[0];
  const errorDetails = errorMessage.split("\n").pop() || "";
  return `${errorType}, ${errorDetails}`.trim();
}
const transformHttpError = (error) => {
  var _a, _b;
  const { status, data: data2, original } = tryParse(error == null ? void 0 : error.message);
  const tryTransformPrismaError = transformPrismaError(!status ? String(original) : "");
  const message = tryTransformPrismaError || ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.name) || error.response.statusText;
  const statusCode = error.status || error.response.status;
  const httpError = {
    message,
    statusCode,
    errors: status ? data2 : void 0
  };
  return httpError;
};
const dataProvider$1 = (apiUrl, httpClient = axiosInstance) => ({
  getList: async ({ resource, pagination, filters, sorters, meta: meta2 }) => {
    try {
      const url = `${apiUrl}/${resource}`;
      let query = RequestQueryBuilder.create();
      query = handleFilter(query, filters);
      query = handleJoin(query, meta2 == null ? void 0 : meta2.join);
      query = handlePagination(query, pagination);
      query = handleSort(query, sorters);
      const { data: data2 } = await httpClient.get(`${url}?${query.query()}`);
      if (Array.isArray(data2)) {
        return {
          data: data2,
          total: data2.length
        };
      }
      return data2;
    } catch (error) {
      const httpError = transformHttpError(error);
      throw httpError;
    }
  },
  getMany: async ({ resource, ids, meta: meta2 }) => {
    try {
      const url = `${apiUrl}/${resource}`;
      let query = RequestQueryBuilder.create().setFilter({
        field: "id",
        operator: CondOperator.IN,
        value: ids
      });
      query = handleJoin(query, meta2 == null ? void 0 : meta2.join);
      const { data: data2 } = await httpClient.get(`${url}?${query.query()}`);
      return {
        data: data2
      };
    } catch (error) {
      const httpError = transformHttpError(error);
      throw httpError;
    }
  },
  create: async ({ resource, variables }) => {
    try {
      const url = `${apiUrl}/${resource}`;
      const { data: data2 } = await httpClient.post(url, variables);
      return data2;
    } catch (error) {
      const httpError = transformHttpError(error);
      throw httpError;
    }
  },
  update: async ({ resource, id, variables }) => {
    try {
      const url = `${apiUrl}/${resource}/${id}`;
      const { data: data2 } = await httpClient.patch(url, variables);
      return data2;
    } catch (error) {
      const httpError = transformHttpError(error);
      throw httpError;
    }
  },
  updateMany: async ({ resource, ids, variables }) => {
    try {
      const url = `${apiUrl}/${resource}/bulk`;
      const { data: data2 } = await httpClient.put(url, { ids, variables });
      return data2;
    } catch (error) {
      const httpError = transformHttpError(error);
      throw httpError;
    }
  },
  createMany: async ({ resource, variables }) => {
    try {
      const url = `${apiUrl}/${resource}/bulk`;
      const { data: data2 } = await httpClient.post(url, { variables });
      return data2;
    } catch (error) {
      const httpError = transformHttpError(error);
      throw httpError;
    }
  },
  getOne: async ({ resource, id, meta: meta2 }) => {
    try {
      const url = `${apiUrl}/${resource}/${id}`;
      let query = RequestQueryBuilder.create();
      query = handleJoin(query, meta2 == null ? void 0 : meta2.join);
      const { data: data2 } = await httpClient.get(`${url}?${query.query()}`);
      return data2;
    } catch (error) {
      const httpError = transformHttpError(error);
      throw httpError;
    }
  },
  deleteOne: async ({ resource, id }) => {
    try {
      const url = `${apiUrl}/${resource}/${id}`;
      const { data: data2 } = await httpClient.delete(url);
      return data2;
    } catch (error) {
      const httpError = transformHttpError(error);
      throw httpError;
    }
  },
  deleteMany: async ({ resource, ids }) => {
    try {
      const url = `${apiUrl}/${resource}/bulk`;
      const { data: data2 } = await httpClient.delete(url, {
        data: { ids }
      });
      return data2;
    } catch (error) {
      const httpError = transformHttpError(error);
      throw httpError;
    }
  },
  getApiUrl: () => {
    return apiUrl;
  },
  custom: async ({ url, method, meta: meta2, filters, sorters, payload, query, headers: headers2 }) => {
    try {
      let requestQueryBuilder = RequestQueryBuilder.create();
      requestQueryBuilder = handleFilter(requestQueryBuilder, filters);
      requestQueryBuilder = handleJoin(requestQueryBuilder, meta2 == null ? void 0 : meta2.join);
      requestQueryBuilder = handleSort(requestQueryBuilder, sorters);
      let requestUrl = `${url}?${requestQueryBuilder.query()}`;
      if (query) {
        requestUrl = `${requestUrl}&${queryString.stringify(query)}`;
      }
      let axiosResponse;
      switch (method) {
        case "put":
        case "post":
        case "patch":
          axiosResponse = await httpClient[method](url, payload, {
            headers: headers2
          });
          break;
        case "delete":
          axiosResponse = await httpClient.delete(url, {
            data: payload,
            headers: headers2
          });
          break;
        default:
          axiosResponse = await httpClient.get(requestUrl, { headers: headers2 });
          break;
      }
      const { data: data2 } = axiosResponse;
      return Promise.resolve({ data: data2 });
    } catch (error) {
      const httpError = transformHttpError(error);
      throw httpError;
    }
  }
});
const dataProvider = dataProvider$1(apiBase);
const auditLogProvider = {
  get: async (params) => {
    const { resource, action: action2, meta: meta2, author, metaData } = params;
    const filters = [
      {
        field: "resource",
        operator: "eq",
        value: resource
      }
    ];
    if (action2) {
      filters.push({
        field: "action",
        operator: "eq",
        value: action2
      });
    }
    if (meta2 == null ? void 0 : meta2.id) {
      filters.push({
        field: "meta.id",
        operator: "eq",
        value: meta2.id
      });
    }
    if (author == null ? void 0 : author.id) {
      filters.push({
        field: "userId",
        operator: "eq",
        value: author.id
      });
    }
    const { data: data2 } = await dataProvider.getList({
      resource: EnumResource.log,
      filters,
      pagination: metaData == null ? void 0 : metaData.pagination,
      sort: metaData == null ? void 0 : metaData.sort
    });
    return data2;
  },
  create: async (params) => {
    const { resource, action: action2, data: data2, previousData, meta: meta2 } = params;
    const logEntry = {
      resource,
      action: action2,
      data: JSON.stringify(data2),
      previousData: JSON.stringify(previousData),
      meta: JSON.stringify(meta2)
    };
    const response = await dataProvider.create({
      resource: EnumResource.log,
      variables: logEntry
    });
    return response.data;
  },
  update: async (params) => {
    const { id, name } = params;
    const response = await dataProvider.update({
      resource: EnumResource.log,
      id,
      variables: {
        name,
        updatedAt: Date.now()
      }
    });
    return response.data;
  }
};
const getCookieLocale = () => {
  var _a;
  try {
    const preferences = Cookies.get("preferences");
    if (!preferences) return null;
    return (_a = JSON.parse(preferences)) == null ? void 0 : _a.locale;
  } catch (error) {
    console.error("@getCookieLocale", error);
    return null;
  }
};
const initialLocale = canUseDOM() ? getCookieLocale() || fallbackLanguage : fallbackLanguage;
if (!i18next.isInitialized) {
  use(initReactI18next).init({
    resources: resourcesLanguages,
    supportedLngs: supportedLanguages,
    lng: initialLocale,
    ns: [defaultNS],
    react: { useSuspense: false }
  });
} else if (i18next.language !== initialLocale) {
  changeLanguage(initialLocale);
}
async function syncServiceLocaleToClient(locale) {
  var _a;
  if (i18next.isInitialized && locale !== ((_a = i18next) == null ? void 0 : _a.language)) {
    try {
      await changeLanguage(locale);
    } catch (error) {
      console.error("@syncServiceLocaleToClient", error);
    }
  }
}
const i18nProvider = {
  translate: (key, defaultMessage) => {
    return t(key, defaultMessage || key);
  },
  changeLocale: async (locale) => {
    await changeLanguage(locale);
    const res = await webapi.post(`/set-preferences`, {
      locale
    });
    const { data: data2 } = await res.json();
    return Promise.resolve(data2);
  },
  getLocale: () => {
    return i18next.language;
  }
};
let lastNotificationKey = void 0;
const notificationProvider = {
  open: ({ key, message, description, type }) => {
    lastNotificationKey = key;
    const id = key === lastNotificationKey ? key : void 0;
    if (type === "success") {
      toast.success(message, { description, id });
    } else if (type === "error") {
      toast.error(message, { description, id });
    } else if (type === "progress") {
      toast.loading(message, { description, id });
    }
  },
  close: (key) => {
    toast.dismiss(key);
    lastNotificationKey = void 0;
  }
};
function redirect(url, init = 302) {
  let responseInit = init;
  if (typeof responseInit === "number") {
    responseInit = { status: responseInit };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }
  const headers2 = new Headers(responseInit.headers);
  headers2.set("Location", url);
  return new Response(null, { ...responseInit, headers: headers2 });
}
class StateStore {
  constructor(params = new URLSearchParams()) {
    __publicField(this, "states", /* @__PURE__ */ new Set());
    __publicField(this, "codeVerifiers", /* @__PURE__ */ new Map());
    __publicField(this, "state");
    __publicField(this, "codeVerifier");
    for (const [state, verifier] of params) {
      if (state === "state") continue;
      this.states.add(state);
      this.codeVerifiers.set(state, verifier);
    }
  }
  /**
   * Append a new state and code verifier to the store
   */
  set(state, verifier) {
    this.state = state;
    this.codeVerifier = verifier;
    this.states.add(state);
    if (verifier) this.codeVerifiers.set(state, verifier);
  }
  /**
   * Check if the store has the given state
   */
  has(state) {
    if (state) return this.states.has(state);
    return this.states.size > 0;
  }
  /**
   * Get the code verifier for the given state
   */
  get(state) {
    return this.codeVerifiers.get(state);
  }
  /**
   * Convert the store to a string
   *
   * This is useful when we need to store the store in a cookie
   */
  toString() {
    if (!this.state) return "";
    if (!this.codeVerifier) return "";
    const params = new URLSearchParams();
    params.set("state", this.state);
    params.set(this.state, this.codeVerifier);
    return params.toString();
  }
  toSetCookie(cookieName = "oauth2", options = {}) {
    const id = crypto.randomUUID();
    return new SetCookie({
      value: this.toString(),
      httpOnly: true,
      // Prevents JavaScript from accessing the cookie
      maxAge: 60 * 5,
      // 5 minutes
      path: "/",
      // Allow the cookie to be sent to any path
      sameSite: "Lax",
      // Prevents it from being sent in cross-site requests
      ...options,
      name: `${cookieName}:${id}`
    });
  }
  /**
   * Create a new instance from a Request object by getting the store from a
   * cookie with the given name.
   */
  static fromRequest(request2, cookieName = "oauth2") {
    const cookie = new Cookie(request2.headers.get("cookie") ?? "");
    const params = new URLSearchParams();
    for (const name of cookie.names()) {
      if (name.startsWith(cookieName)) {
        for (const [key, value] of new URLSearchParams(cookie.get(name))) {
          params.append(key, value);
        }
      }
    }
    return new StateStore(params);
  }
}
const debug = createDebug("OAuth2Strategy");
const WELL_KNOWN = ".well-known/openid-configuration";
class OAuth2Strategy extends Strategy {
  constructor(options, verify) {
    var _a;
    super(verify);
    __publicField(this, "name", "oauth2");
    __publicField(this, "client");
    this.options = options;
    this.client = new OAuth2Client(options.clientId, options.clientSecret, ((_a = options.redirectURI) == null ? void 0 : _a.toString()) ?? null);
  }
  get cookieName() {
    var _a;
    if (typeof this.options.cookie === "string") {
      return this.options.cookie || "oauth2";
    }
    return ((_a = this.options.cookie) == null ? void 0 : _a.name) ?? "oauth2";
  }
  get cookieOptions() {
    if (typeof this.options.cookie !== "object") return {};
    return this.options.cookie ?? {};
  }
  async authenticate(request2) {
    debug("Request URL", request2.url);
    const url = new URL(request2.url);
    const stateUrl = url.searchParams.get("state");
    const error = url.searchParams.get("error");
    if (error) {
      const description = url.searchParams.get("error_description");
      const uri = url.searchParams.get("error_uri");
      throw new OAuth2RequestError(error, description, uri, stateUrl);
    }
    if (!stateUrl) {
      debug("No state found in the URL, redirecting to authorization endpoint");
      const { state, codeVerifier: codeVerifier2, url: url2 } = this.createAuthorizationURL();
      debug("State", state);
      debug("Code verifier", codeVerifier2);
      url2.search = this.authorizationParams(url2.searchParams, request2).toString();
      debug("Authorization URL", url2.toString());
      const store2 = StateStore.fromRequest(request2, this.cookieName);
      store2.set(state, codeVerifier2);
      throw redirect(url2.toString(), {
        headers: {
          "Set-Cookie": store2.toSetCookie(this.cookieName, this.cookieOptions).toString()
        }
      });
    }
    const code = url.searchParams.get("code");
    if (!code) throw new ReferenceError("Missing code in the URL");
    const store = StateStore.fromRequest(request2, this.cookieName);
    if (!store.has()) {
      throw new ReferenceError("Missing state on cookie.");
    }
    if (!store.has(stateUrl)) {
      throw new RangeError("State in URL doesn't match state in cookie.");
    }
    const codeVerifier = store.get(stateUrl);
    if (!codeVerifier) {
      throw new ReferenceError("Missing code verifier on cookie.");
    }
    debug("Validating authorization code");
    const tokens = await this.validateAuthorizationCode(code, codeVerifier);
    debug("Verifying the user profile");
    const user = await this.verify({ request: request2, tokens });
    debug("User authenticated");
    return user;
  }
  createAuthorizationURL() {
    const state = generateState();
    const codeVerifier = generateCodeVerifier();
    const url = this.client.createAuthorizationURLWithPKCE(
      this.options.authorizationEndpoint.toString(),
      state,
      this.options.codeChallengeMethod ?? CodeChallengeMethod.S256,
      codeVerifier,
      this.options.scopes ?? []
    );
    return { state, codeVerifier, url };
  }
  validateAuthorizationCode(code, codeVerifier) {
    return this.client.validateAuthorizationCode(this.options.tokenEndpoint.toString(), code, codeVerifier);
  }
  /**
   * Return extra parameters to be included in the authorization request.
   *
   * Some OAuth 2.0 providers allow additional, non-standard parameters to be
   * included when requesting authorization.  Since these parameters are not
   * standardized by the OAuth 2.0 specification, OAuth 2.0-based authentication
   * strategies can override this function in order to populate these
   * parameters as required by the provider.
   */
  authorizationParams(params, _request) {
    return new URLSearchParams(params);
  }
  /**
   * Get a new OAuth2 Tokens object using the refresh token once the previous
   * access token has expired.
   * @param refreshToken The refresh token to use to get a new access token
   * @returns The new OAuth2 tokens object
   * @example
   * ```ts
   * let tokens = await strategy.refreshToken(refreshToken);
   * console.log(tokens.accessToken());
   * ```
   */
  refreshToken(refreshToken) {
    return this.client.refreshAccessToken(
      this.options.tokenEndpoint.toString(),
      refreshToken,
      this.options.scopes ?? []
    );
  }
  /**
   * Users the token revocation endpoint of the identity provider to revoke the
   * access token and make it invalid.
   *
   * @param token The access token to revoke
   * @example
   * ```ts
   * // Get it from where you stored it
   * let accessToken = await getAccessToken();
   * await strategy.revokeToken(tokens.access_token);
   * ```
   */
  revokeToken(token) {
    const endpoint = this.options.tokenRevocationEndpoint;
    if (!endpoint) throw new Error("Token revocation endpoint is not set.");
    return this.client.revokeToken(endpoint.toString(), token);
  }
  /**
   * Discover the OAuth2 issuer and create a new OAuth2Strategy instance from
   * the OIDC configuration that is returned.
   *
   * This method will fetch the OIDC configuration from the issuer and create a
   * new OAuth2Strategy instance with the provided options and verify function.
   *
   * @param uri The URI of the issuer, this can be a full URL or just the domain
   * @param options The rest of the options to pass to the OAuth2Strategy constructor, clientId, clientSecret, redirectURI, and scopes are required.
   * @param verify The verify function to use with the OAuth2Strategy instance
   * @returns A new OAuth2Strategy instance
   * @example
   * ```ts
   * let strategy = await OAuth2Strategy.discover(
   *   "https://accounts.google.com",
   *   {
   *     clientId: "your-client-id",
   *     clientSecret: "your-client-secret",
   *     redirectURI: "https://your-app.com/auth/callback",
   *     scopes: ["openid", "email", "profile"],
   *   },
   *   async ({ tokens }) => {
   *     return getUserProfile(tokens.access_token);
   *   },
   * );
   */
  static async discover(uri, options, verify) {
    const url = new URL(uri);
    if (!url.pathname.includes("well-known")) {
      url.pathname = url.pathname.endsWith("/") ? `${url.pathname}${WELL_KNOWN}` : `${url.pathname}/${WELL_KNOWN}`;
    }
    const response = await fetch(url, {
      headers: { Accept: "application/json" }
    });
    if (!response.ok) throw new Error(`Failed to discover issuer at ${url}`);
    const parser = new ObjectParser(await response.json());
    return new OAuth2Strategy(
      {
        authorizationEndpoint: new URL(parser.string("authorization_endpoint")),
        tokenEndpoint: new URL(parser.string("token_endpoint")),
        tokenRevocationEndpoint: parser.has("revocation_endpoint") ? new URL(parser.string("revocation_endpoint")) : void 0,
        codeChallengeMethod: parser.has("code_challenge_methods_supported") ? parser.array("code_challenge_methods_supported").includes("S256") ? CodeChallengeMethod.S256 : CodeChallengeMethod.Plain : void 0,
        ...options
      },
      verify
    );
  }
}
async function getUserById(id) {
  const user = await db.user.findUnique({
    where: { id },
    include: {
      roles: {
        include: {
          role: true
        }
      }
    }
  });
  return withRoles(user);
}
async function getUserByEmail(email) {
  const user = await db.user.findUnique({
    where: { email },
    include: {
      roles: {
        include: {
          role: true
        }
      }
    }
  });
  return withRoles(user);
}
async function createUser({
  email,
  name,
  password,
  provider
}) {
  const user = await db.user.create({
    data: {
      email,
      name: name || email.split("@")[0],
      provider,
      password: password ? {
        create: {
          hash: await bcrypt.hash(password, 10)
        }
      } : void 0
    }
  });
  await db.userRole.create({
    data: {
      userId: user.id,
      roleId: EnumRoleId.guest
    }
  });
  return { ...user, role: EnumRole.guest, roles: [EnumRole.guest] };
}
async function verifyUserpassLogin(email, password) {
  const user = await db.user.findUnique({
    where: { email },
    include: {
      password: true,
      roles: {
        include: {
          role: true
        }
      }
    }
  });
  if (!user || !user.password) {
    return null;
  }
  const isValid = await bcrypt.compare(password, user.password.hash);
  if (!isValid) {
    return null;
  }
  return withRoles(user);
}
const withRoles = (_userWithRoles) => {
  if (!_userWithRoles) {
    return null;
  }
  const roles = _userWithRoles.roles.map((userRole) => userRole.role.title);
  const userWithRoles = {
    ..._userWithRoles,
    password: "******",
    roles,
    role: roles[0]
  };
  return userWithRoles;
};
invariant(process.env.TCSK_CLIENT_ID, "TCSK_CLIENT_ID must be set.");
invariant(process.env.TCSK_CLIENT_SECRET, "TCSK_CLIENT_SECRET must be set.");
invariant(process.env.TCSK_AUTHORIZE, "TCSK_AUTHORIZE must be set.");
invariant(process.env.TCSK_TOKEN, "TCSK_TOKEN must be set.");
invariant(process.env.TCSK_REDIRECT, "TCSK_REDIRECT must be set.");
invariant(process.env.TCSK_PROFILE, "TCSK_PROFILE must be set.");
const authenticator = new Authenticator();
const tcskStrategy = new OAuth2Strategy(
  {
    clientId: process.env.TCSK_CLIENT_ID,
    clientSecret: process.env.TCSK_CLIENT_SECRET,
    authorizationEndpoint: process.env.TCSK_AUTHORIZE,
    tokenEndpoint: process.env.TCSK_TOKEN,
    redirectURI: process.env.TCSK_REDIRECT,
    scopes: ["profile"]
  },
  async ({ tokens }) => {
    const { access_token } = (tokens == null ? void 0 : tokens.data) || {};
    try {
      const response = await fetch(process.env.TCSK_PROFILE, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user profile");
      }
      const data2 = await response.json();
      const { email, realName } = data2 || {};
      return {
        email,
        name: realName
      };
    } catch (error) {
      console.error("Error fetching user profile:", error);
      throw error;
    }
  }
);
const strategyForm = new FormStrategy(async ({ form }) => {
  const email = form.get("email");
  const password = form.get("password");
  const user = await verifyUserpassLogin(email, password);
  if (!user) {
    throw new Error("Invalid email or password.");
  }
  return user;
});
authenticator.use(strategyForm, EnumAuthProvider.userpass);
authenticator.use(tcskStrategy, EnumAuthProvider.tcshuke);
const db = singleton("prisma", () => new PrismaClient());
const MODEL_CONF = `
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act, eft

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow)) && !some(where (p.eft == deny))

[matchers]
m = g(r.sub, p.sub) && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)
`;
const MODEL = newModelFromString(MODEL_CONF);
let enforcer = null;
async function createEnforcer() {
  if (enforcer) {
    return enforcer;
  }
  const adapter = await PrismaAdapter.newAdapter(db);
  enforcer = await newEnforcer(MODEL, adapter);
  return enforcer;
}
invariant(process.env.VITE_SECRET, "VITE_SECRET must be set.");
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: [process.env.VITE_SECRET ?? ""],
    path: "/",
    sameSite: "lax",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7
    // 7 days
  }
});
const { getSession, commitSession, destroySession } = sessionStorage;
const redirectToLogin = (request2, redirectTo = request2.url) => {
  const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
  throw redirect$1(`/login?${searchParams}`);
};
async function getUserSession(request2) {
  try {
    return getSession(request2.headers.get("Cookie"));
  } catch (error) {
    return null;
  }
}
async function getUser(request2) {
  try {
    let user = null;
    const session = await getUserSession(request2);
    const { role, id } = session == null ? void 0 : session.get("user");
    if (id) {
      user = await getUserById(id);
    }
    return { ...user, role };
  } catch (error) {
    return null;
  }
}
async function requireUserSession(request2, redirectTo = request2.url) {
  try {
    const user = await getUser(request2);
    if (!(user == null ? void 0 : user.id)) {
      redirectToLogin(request2, redirectTo);
    }
    return user;
  } catch (error) {
    redirectToLogin(request2, redirectTo);
  }
}
async function requireUser(request2) {
  try {
    const user = await getUser(request2);
    if (!(user == null ? void 0 : user.id)) {
      throw new Error("Unauthorized");
    }
    return { user, session: await getUserSession(request2) };
  } catch (error) {
    return Promise.reject(error);
  }
}
async function getPermissions({
  request: request2,
  userRole
}) {
  let rules = [];
  const enforcer2 = await createEnforcer();
  const policies = await enforcer2.getPolicy();
  const rulesAll = policies.map(([subject, object, action2, effect]) => ({
    subject,
    object,
    action: action2,
    effect
  }));
  let role = userRole;
  if (!role && request2) {
    const session = await getUserSession(request2);
    const user = session == null ? void 0 : session.get("user");
    if (user == null ? void 0 : user.role) {
      role = user.role;
    }
  }
  if (role) {
    rules = rulesAll.filter((rule) => rule.subject === role);
  }
  return rules;
}
const getPreferencesCookie = async (request2) => {
  const cookieHeader = request2.headers.get("Cookie") || "";
  const cookies = cookieHeader.split("; ").find((s) => s.startsWith("preferences="));
  try {
    return JSON.parse((cookies == null ? void 0 : cookies.split("=")[1]) || "{}");
  } catch (error) {
    return {};
  }
};
const getPreferencesNextCookie = async (request2, cookie) => {
  const exitingCookie = await getPreferencesCookie(request2) || {};
  const newCookie = JSON.stringify({
    ...exitingCookie,
    ...cookie
  });
  return `preferences=${newCookie}; Path=/; SameSite=Lax`;
};
function isPrismaModel(resource) {
  return dataResources.some((r) => r.name.endsWith(resource));
}
const dataService = {
  // 获取列表数据
  getList: async ({ resource, pagination, sorters, filters, meta: meta2 }) => {
    const { current = 1, pageSize = DEFAULT_PAGE_SIZE } = pagination ?? {};
    const skip = (Number(current) - 1) * Number(pageSize);
    const parsedFilters = filters ? parseRefineFilters(filters) : [];
    const where = parsedFilters.length > 0 ? buildWhereClause(parsedFilters) : {};
    const orderBy = sorters ? buildOrderByClause(sorters) : {};
    if (!Object.keys(orderBy).length) {
      orderBy.createdAt = "desc";
    }
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource];
    const whereCondition = Object.entries(where).reduce((acc, [key, value]) => {
      if (key.includes(".")) {
        const [relation, field] = key.split(".");
        return {
          ...acc,
          [relation]: {
            [field]: value
          }
        };
      }
      return { ...acc, [key]: value };
    }, {});
    const processedWhereCondition = processDateFields(whereCondition);
    const queryParams = {
      skip,
      take: Number(pageSize),
      where: processedWhereCondition,
      orderBy,
      ...meta2
    };
    const [total, items2] = await Promise.all([
      prismaModel.count({ where: processedWhereCondition }),
      prismaModel.findMany(queryParams)
    ]);
    const result = {
      data: items2,
      total
    };
    return result;
  },
  // 创建数据
  create: async ({ resource, variables, meta: meta2 }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource];
    const data2 = await prismaModel.create({
      data: variables,
      ...meta2
    });
    return {
      success: true,
      data: data2
    };
  },
  // 更新数据
  update: async ({ resource, id, variables, meta: meta2 }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource];
    const existingRecord = await prismaModel.findUnique({
      where: { id },
      select: { id: true }
    });
    if (!existingRecord) {
      throw new Error(`要更新的 \`${resource}\` 记录不存在, ID: ${id}`);
    }
    const data2 = await prismaModel.update({
      where: { id },
      data: variables,
      ...meta2
    });
    return {
      success: true,
      data: data2
    };
  },
  // 删除数据
  deleteOne: async ({ resource, id, meta: meta2 }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource];
    const existingRecord = await prismaModel.findUnique({
      where: { id },
      select: { id: true }
    });
    if (!existingRecord) {
      throw new Error(`要删除的 \`${resource}\` 记录不存在, ID: ${id}`);
    }
    const data2 = await prismaModel.delete({
      where: { id },
      ...meta2
    });
    return {
      success: true,
      data: data2
    };
  },
  // 获取单条数据
  getOne: async ({ resource, id, meta: meta2 }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource];
    const data2 = await prismaModel.findUnique({
      where: { id },
      ...meta2
    });
    if (!data2) {
      throw new Error(`404 数据实体 \`${resource}\` 中没有找到相关数据`);
    }
    return {
      success: true,
      data: data2
    };
  },
  // 获取多条数据
  getMany: async ({ resource, ids, meta: meta2 }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource];
    const data2 = await prismaModel.findMany({
      where: {
        id: {
          in: ids
        }
      },
      ...meta2
    });
    return {
      success: true,
      data: data2
    };
  },
  // 批量创建
  createMany: async ({ resource, variables, meta: meta2 }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource];
    const data2 = await prismaModel.createMany({
      data: variables,
      ...meta2
    });
    return {
      success: true,
      data: data2
    };
  },
  // 批量删除
  deleteMany: async ({ resource, ids, meta: meta2 }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource];
    const existingRecords = await prismaModel.findMany({
      where: {
        id: {
          in: ids
        }
      },
      select: { id: true }
    });
    const existingIds = existingRecords.map((record) => record.id);
    const nonExistingIds = ids.filter((id) => !existingIds.includes(id));
    if (nonExistingIds.length > 0) {
      throw new Error(`要删除的 \`${resource}\` 记录不存在, ID: ${nonExistingIds.join(", ")}`);
    }
    const data2 = await prismaModel.deleteMany({
      where: {
        id: {
          in: ids
        }
      },
      ...meta2
    });
    return {
      success: true,
      data: data2
    };
  },
  // 批量更新
  updateMany: async ({ resource, ids, variables, meta: meta2 }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource];
    const existingRecords = await prismaModel.findMany({
      where: {
        id: {
          in: ids
        }
      },
      select: { id: true }
    });
    const existingIds = existingRecords.map((record) => record.id);
    const nonExistingIds = ids.filter((id) => !existingIds.includes(id));
    if (nonExistingIds.length > 0) {
      throw new Error(`要更新的 \`${resource}\` 记录不存在, ID: ${nonExistingIds.join(", ")}`);
    }
    const data2 = await prismaModel.updateMany({
      where: {
        id: {
          in: ids
        }
      },
      data: variables,
      ...meta2
    });
    return {
      success: true,
      data: data2
    };
  },
  // 获取 API URL
  // 用 db 时不需要 API URL，但为了展示完整性保留
  getApiUrl: () => {
    return "";
  },
  // 自定义请求
  // 由于使用 db，通常不需要这个方法，但为了展示完整性保留
  custom: async () => {
    throw new Error("Custom method not implemented");
  }
};
const baseStyles = "/assets/base-CNccC1ql.css";
const tailwindStyles = "/assets/tailwind-D77LHlNy.css";
const meta$e = () => [
  { property: "og:title", content: "This app is the best." },
  { name: "description", content: "Welcome to Remix!" }
];
const links = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "stylesheet", href: baseStyles },
  { rel: "stylesheet", href: nProgressStyles }
];
const headers = () => ({
  "Document-Policy": "js-profiling"
});
const handle$7 = { i18n: ["translation"] };
async function loader$p({ request: request2 }) {
  const [user, permissions, { locale, sidebarIsClose, theme }] = await Promise.all([
    getUser(request2),
    getPermissions({ request: request2 }),
    getPreferencesCookie(request2)
  ]);
  const localeNext = locale || fallbackLanguage;
  await syncServiceLocaleToClient(localeNext);
  const permissionsSignature = await generateSignature(permissions);
  return data({
    user,
    theme: theme || Theme.LIGHT,
    locale: localeNext,
    sidebarIsClose,
    permissions,
    permissionsSignature
  });
}
function HydrateFallback() {
  return /* @__PURE__ */ jsx("h1", { className: "bg-background fixed inset-0 z-10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Loader$1, { className: "animate-spin" }) });
}
function Document({
  children,
  title,
  specifiedTheme,
  script = true,
  locale
}) {
  const { permissions, permissionsSignature, user } = useLoaderData();
  Sentry.setUser({ email: user == null ? void 0 : user.email, username: (user == null ? void 0 : user.name) || "?", id: user == null ? void 0 : user.id });
  authProvider.setPermissions(permissions);
  return /* @__PURE__ */ jsxs("html", { lang: locale, className: cn(specifiedTheme ?? "light"), suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx(PreventFlashOnWrongTheme, { ssrTheme: Boolean(specifiedTheme) }),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(DevtoolsProvider, { children: /* @__PURE__ */ jsx(RefineKbarProvider, { children: /* @__PURE__ */ jsxs(
        Refine,
        {
          resources: dataResources,
          routerProvider,
          dataProvider,
          authProvider,
          accessControlProvider,
          notificationProvider,
          i18nProvider,
          auditLogProvider,
          options: {
            disableTelemetry: true,
            mutationMode: "pessimistic",
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
            liveMode: "auto",
            reactQuery: {
              clientConfig: {
                defaultOptions: { queries: { networkMode: "always" }, mutations: { networkMode: "always" } }
              }
            }
          },
          onLiveEvent: (event) => {
            console.log("@onLiveEvent", event);
          },
          children: [
            children,
            /* @__PURE__ */ jsx(UnsavedChangesNotifier, {}),
            /* @__PURE__ */ jsx(RefineKbar, {}),
            /* @__PURE__ */ jsx(DevtoolsPanel, {})
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      script && /* @__PURE__ */ jsx(Scripts, { crossOrigin: "anonymous" }),
      /* @__PURE__ */ jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `
              window.__PERMISSIONS_DATA__ = {
                permissions: ${JSON.stringify(permissions)},
                signature: "${permissionsSignature}"
              };
            `
          }
        }
      )
    ] })
  ] });
}
function DocumentWithThemeProviders({
  children,
  title,
  script = true
}) {
  const { theme, locale } = useLoaderData() || {};
  return /* @__PURE__ */ jsx(ThemeProvider, { specifiedTheme: theme, themeAction: "/api/set-preferences", children: /* @__PURE__ */ jsxs(Document, { title, specifiedTheme: theme, script, locale, children: [
    children,
    /* @__PURE__ */ jsx(Toaster, { richColors: true, position: "top-right" })
  ] }) });
}
function App() {
  const navigation = useNavigation$1();
  nProgress.configure({ showSpinner: false });
  useEffect(() => {
    if (navigation.state === "idle") nProgress.done();
    else nProgress.start();
  }, [navigation.state]);
  return /* @__PURE__ */ jsx(DocumentWithThemeProviders, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const root = withSentry(App);
function ErrorBoundary$i() {
  const error = useRouteError();
  captureRemixErrorBoundaryError(error);
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ jsx(DocumentWithThemeProviders, { title: `${error.status} ${error.statusText}`, script: false, children: error.status === 404 ? /* @__PURE__ */ jsx(NotFound, {}) : /* @__PURE__ */ jsx(PageError, { error: { message: error.data } }) });
  }
  return /* @__PURE__ */ jsx(DocumentWithThemeProviders, { title: "Oh no!", script: false, children: /* @__PURE__ */ jsx(PageError, { error }) });
}
function shouldRevalidate({ defaultShouldRevalidate }) {
  return defaultShouldRevalidate;
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$i,
  HydrateFallback,
  default: root,
  handle: handle$7,
  headers,
  links,
  loader: loader$p,
  meta: meta$e,
  shouldRevalidate
}, Symbol.toStringTag, { value: "Module" }));
const meta$d = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
function DashboardViewTransition() {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ jsx(
    "img",
    {
      alt: "",
      width: 400,
      height: 400,
      className: "border-secondary rounded-lg border shadow-lg",
      src: "/logo.png",
      style: {
        viewTransitionName: "image-expand"
      }
    }
  ) });
}
function ErrorBoundary$h() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$h,
  default: DashboardViewTransition,
  meta: meta$d
}, Symbol.toStringTag, { value: "Module" }));
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const LOG_STATUS = {
  create: "create",
  createMany: "createMany",
  delete: "delete",
  deleteMany: "deleteMany",
  update: "update",
  updateMany: "updateMany"
};
const LOG_STATUS_MAP = {
  create: { badge: "outline" },
  createMany: { badge: "outline" },
  delete: { badge: "destructive" },
  deleteMany: { badge: "destructive" },
  update: { badge: void 0 },
  updateMany: { badge: void 0 }
};
const POST_STATUS = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
  REJECTED: "REJECTED"
};
const POST_STATUS_LIST = Object.values(POST_STATUS);
const POST_STATUS_MAP = {
  DRAFT: { badge: "outline" },
  PUBLISHED: { badge: void 0 },
  REJECTED: { badge: "destructive" }
};
const USER_PROVIDER = {
  userpass: "userpass",
  tcshuke: "tcshuke"
};
const meta$c = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const handle$6 = {
  uiTools: () => {
    return /* @__PURE__ */ jsx(UiTools$6, {});
  }
};
async function loader$o({ params }) {
  const [initialData] = await Promise.all([
    dataService.getOne({
      resource: EnumResource.post,
      id: (params == null ? void 0 : params.id) || ""
    })
  ]);
  return {
    initialData
  };
}
function PostEdit() {
  const { initialData } = useLoaderData();
  return /* @__PURE__ */ jsx(PostForm, { initialData });
}
function UiTools$6() {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-sm", children: [
    /* @__PURE__ */ jsx(ShowButton, { variant: "ghost", size: "icon" }),
    /* @__PURE__ */ jsx(DeleteButton, { variant: "ghost", size: "icon" }),
    /* @__PURE__ */ jsx(CloneButton, { variant: "ghost", size: "icon" })
  ] });
}
function ErrorBoundary$g() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const formSchema$1 = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),
  content: z.string().min(2),
  status: z.string(),
  categoryId: z.string()
});
const filterFormData = (data2) => {
  if (!data2) return void 0;
  return {
    title: data2.title,
    content: data2.content,
    status: data2.status,
    categoryId: data2.categoryId
  };
};
const PostForm = ({
  className,
  redirect: redirect2 = EnumAction.list,
  initialData,
  formModalClose
}) => {
  const categoryOptions = useSelect({ resource: EnumResource.category }).options;
  const { data: data2 } = initialData || {};
  const enableAutoSave = true;
  const form = useForm({
    resolver: zodResolver(formSchema$1),
    defaultValues: filterFormData(data2),
    warnWhenUnsavedChanges: true,
    refineCoreProps: {
      resource: EnumResource.post,
      action: (data2 == null ? void 0 : data2.id) ? EnumAction.edit : EnumAction.create,
      id: data2 == null ? void 0 : data2.id,
      queryOptions: initialData ? {
        queryFn: () => initialData,
        initialData
      } : void 0,
      redirect: redirect2,
      autoSave: {
        enabled: enableAutoSave,
        debounce: 2e3,
        invalidateOnUnmount: true,
        onFinish: (values) => {
          return modifyingDataBeforeSubmission(values);
        }
      }
    }
  });
  const modifyingDataBeforeSubmission = useCallback((values) => {
    return { ...values };
  }, []);
  return /* @__PURE__ */ jsxs(
    Form,
    {
      ...form,
      autoSave: enableAutoSave,
      modifyingDataBeforeSubmission,
      className,
      formModalClose,
      recordItemId: data2 == null ? void 0 : data2.id,
      children: [
        /* @__PURE__ */ jsx(Field, { ...form, name: "title", label: "Title", children: /* @__PURE__ */ jsx(Input, { placeholder: "Title" }) }),
        /* @__PURE__ */ jsx(Field, { ...form, name: "categoryId", label: "Category", children: /* @__PURE__ */ jsx(Combobox, { options: categoryOptions, popoverProps: { modal: Boolean(formModalClose) } }) }),
        /* @__PURE__ */ jsx(Field, { ...form, name: "status", label: "Status", children: /* @__PURE__ */ jsx(Select, { options: POST_STATUS_LIST.map((status) => ({ label: status, value: status })) }) }),
        /* @__PURE__ */ jsx(Field, { ...form, name: "content", label: "Content", children: /* @__PURE__ */ jsx(Textarea, { placeholder: "Content", rows: 10 }) })
      ]
    }
  );
};
function PostFormModal(props) {
  const { visible, close, record } = props;
  return /* @__PURE__ */ jsx(Dialog, { open: visible, onOpenChange: close, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-6xl", children: [
    /* @__PURE__ */ jsxs(DialogHeader, { className: "border-b pb-4", children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: "Edit Post" }),
      /* @__PURE__ */ jsx(DialogDescription, { children: "This is a Demo for Edit Form on Modal." })
    ] }),
    /* @__PURE__ */ jsx(PostForm, { className: "p-0", formModalClose: close, initialData: record ? { data: { ...record } } : void 0 })
  ] }) });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$g,
  PostForm,
  PostFormModal,
  default: PostEdit,
  handle: handle$6,
  loader: loader$o,
  meta: meta$c
}, Symbol.toStringTag, { value: "Module" }));
const meta$b = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$n({ params }) {
  const [initialData] = await Promise.all([
    dataService.getOne({
      resource: EnumResource.post,
      id: (params == null ? void 0 : params.id) || ""
    })
  ]);
  return { initialData };
}
function PostClone() {
  const { initialData } = useLoaderData();
  return /* @__PURE__ */ jsx(PostForm, { initialData });
}
function ErrorBoundary$f() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$f,
  default: PostClone,
  loader: loader$n,
  meta: meta$b
}, Symbol.toStringTag, { value: "Module" }));
const meta$a = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const handle$5 = {
  uiTools: () => {
    return /* @__PURE__ */ jsx(UiTools$5, {});
  }
};
async function loader$m({ params }) {
  const [initialData] = await Promise.all([
    dataService.getOne({
      resource: EnumResource.post,
      id: (params == null ? void 0 : params.id) || "",
      meta: {
        include: {
          user: true,
          category: true
        }
      }
    })
  ]);
  return { initialData };
}
function PostShow() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const { initialData } = useLoaderData();
  const { data: data2 } = initialData;
  return /* @__PURE__ */ jsxs("article", { className: "px-8 pt-8 pb-4", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
      /* @__PURE__ */ jsxs(H1, { className: "relative mb-4 inline-flex gap-3 text-4xl font-bold", children: [
        /* @__PURE__ */ jsx("span", { children: data2.title }),
        /* @__PURE__ */ jsx("div", { className: "inline-flex shrink-0 items-start pt-3.5", children: /* @__PURE__ */ jsx(Badge, { className: "tracking-wide", variant: (_a = POST_STATUS_MAP[data2.status]) == null ? void 0 : _a.badge, children: ((_c = (_b = data2.status) == null ? void 0 : _b.charAt(0)) == null ? void 0 : _c.toUpperCase()) + ((_e = (_d = data2.status) == null ? void 0 : _d.slice(1)) == null ? void 0 : _e.toLowerCase()) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground mb-8 flex flex-wrap items-center gap-4 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(LeafyGreen, { className: "mr-2 h-4 w-4" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Category: ",
            (_f = data2.category) == null ? void 0 : _f.title
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Created: ",
            new Date(data2.createdAt).toLocaleDateString()
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(ClockIcon, { className: "mr-2 h-4 w-4" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Updated: ",
            dayjs(data2.updatedAt).format("YYYY-MM-DD HH:mm:ss")
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxs(Avatar, { children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: ((_g = data2.user) == null ? void 0 : _g.avatar) || "", alt: ((_h = data2.user) == null ? void 0 : _h.name) || "" }),
          /* @__PURE__ */ jsx(AvatarFallback, { children: (_j = (_i = data2.user) == null ? void 0 : _i.name) == null ? void 0 : _j.slice(0, 2).toUpperCase() })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium", children: (_k = data2.user) == null ? void 0 : _k.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground flex items-center text-sm", children: [
            /* @__PURE__ */ jsx(MailIcon, { className: "mr-2 h-4 w-4" }),
            (_l = data2.user) == null ? void 0 : _l.email
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "prose mb-8 max-w-none", children: /* @__PURE__ */ jsx(P, { children: data2.content }) }),
    /* @__PURE__ */ jsx(Image, { src: "", alt: data2.title, className: "h-[700px]" })
  ] });
}
function UiTools$5() {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-sm", children: [
    /* @__PURE__ */ jsx(EditButton, { variant: "ghost", size: "icon" }),
    /* @__PURE__ */ jsx(DeleteButton, { variant: "ghost", size: "icon" }),
    /* @__PURE__ */ jsx(CloneButton, { variant: "ghost", size: "icon" })
  ] });
}
function ErrorBoundary$e() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$e,
  default: PostShow,
  handle: handle$5,
  loader: loader$m,
  meta: meta$a
}, Symbol.toStringTag, { value: "Module" }));
const PdfLayout = ({ record }) => {
  return /* @__PURE__ */ jsx(PDFViewer, { style: styles.viewer, children: /* @__PURE__ */ jsx(Document$1, { children: /* @__PURE__ */ jsxs(Page, { style: styles.page, size: "A4", children: [
    /* @__PURE__ */ jsxs(View, { children: [
      /* @__PURE__ */ jsx(Image$1, { src: "/logo.png", style: { width: "100px", height: "auto" } }),
      /* @__PURE__ */ jsxs(View, { style: styles.inoviceTextNumberContainer, children: [
        /* @__PURE__ */ jsx(Text, { style: styles.inoviceText, children: `Title: ${record.title}` }),
        /* @__PURE__ */ jsx(Text, { style: styles.inoviceId, children: `Date: 2024-01-01 00:00:00` })
      ] })
    ] }),
    /* @__PURE__ */ jsx(View, { style: styles.dividerLG }),
    /* @__PURE__ */ jsxs(View, { style: styles.inoviceForFromCotnainer, children: [
      /* @__PURE__ */ jsxs(View, { style: styles.inoviceFor, children: [
        /* @__PURE__ */ jsx(Text, { style: styles.inoviceForFromTitle, children: "Inovice For:" }),
        /* @__PURE__ */ jsxs(View, { children: [
          /* @__PURE__ */ jsx(Text, { style: styles.inoviceForFromText, children: "Kshlerin, Heaney and Lehner" }),
          /* @__PURE__ */ jsx(Text, { style: styles.inoviceForFromText, children: "Margie Smith" }),
          /* @__PURE__ */ jsx(Text, { style: styles.inoviceForFromText, children: "margie@example.com" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(View, { style: styles.inoviceFrom, children: [
        /* @__PURE__ */ jsx(Text, { style: styles.inoviceForFromTitle, children: "From:" }),
        /* @__PURE__ */ jsxs(View, { children: [
          /* @__PURE__ */ jsx(Text, { style: styles.inoviceForFromText, children: "Emard Inc" }),
          /* @__PURE__ */ jsx(Text, { style: styles.inoviceForFromText, children: "Huntington Beach" }),
          /* @__PURE__ */ jsx(Text, { style: styles.inoviceForFromText, children: "College St, 4091, United States" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(View, { style: styles.table, children: [
      /* @__PURE__ */ jsxs(View, { style: styles.tableHeader, children: [
        /* @__PURE__ */ jsx(Text, { style: [styles.tableHeaderItem, { width: "40%" }], children: "Mission" }),
        /* @__PURE__ */ jsx(Text, { style: [styles.tableHeaderItem, { width: "20%" }], children: "Day" }),
        /* @__PURE__ */ jsx(Text, { style: [styles.tableHeaderItem, { width: "20%" }], children: "Day Rate" }),
        /* @__PURE__ */ jsx(Text, { style: [styles.tableHeaderItem, { width: "20%" }], children: "Total" })
      ] }),
      [
        { mission: "transition models", day: 3, daily_rate: 209, total: 627 },
        { mission: "strategize initiatives ", day: 4, daily_rate: 253, total: 1012 },
        { mission: "incubate experiences ", day: 4, daily_rate: 254, total: 1016 }
      ].map((item, index) => {
        return /* @__PURE__ */ jsxs(View, { style: styles.tableRow, children: [
          /* @__PURE__ */ jsx(Text, { style: [styles.tableCol, { width: "40%" }], children: item.mission }),
          /* @__PURE__ */ jsx(Text, { style: [styles.tableCol, { width: "20%" }], children: item == null ? void 0 : item.day }),
          /* @__PURE__ */ jsx(Text, { style: [styles.tableCol, { width: "20%" }], children: item == null ? void 0 : item.daily_rate }),
          /* @__PURE__ */ jsx(Text, { style: [styles.tableCol, { width: "20%" }], children: (item == null ? void 0 : item.daily_rate) * (item == null ? void 0 : item.day) })
        ] }, index);
      })
    ] }),
    /* @__PURE__ */ jsxs(View, { style: styles.signatureTotalContainer, children: [
      /* @__PURE__ */ jsx(View, { style: styles.signatureContainer, children: /* @__PURE__ */ jsx(Text, { style: styles.signatureText, children: "Signature:" }) }),
      /* @__PURE__ */ jsxs(View, { style: styles.totalContainer, children: [
        /* @__PURE__ */ jsxs(Text, { style: styles.totalText, children: [
          "Total: ",
          "2,655"
        ] }),
        /* @__PURE__ */ jsxs(Text, { style: styles.totalText, children: [
          "Discount(%): ",
          "0"
        ] }),
        /* @__PURE__ */ jsxs(Text, { style: styles.totalText, children: [
          "Tax(%): ",
          "0"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(View, { style: styles.footer, children: [
      /* @__PURE__ */ jsx(Text, { style: styles.footerText, children: "Huntington Beach" }),
      /* @__PURE__ */ jsx(Text, { style: styles.footerText, children: "College St, 4091, United States" })
    ] })
  ] }) }) });
};
const styles = StyleSheet.create({
  viewer: {
    width: "100%",
    height: "80vh",
    border: "none"
  },
  page: {
    display: "flex",
    padding: "0.4in 0.4in",
    fontSize: 12,
    color: "#333",
    backgroundColor: "#fff"
  },
  inoviceTextNumberContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  inoviceText: {
    color: "#3aabf0"
  },
  inoviceId: {
    textAlign: "center"
  },
  inoviceForFromCotnainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inoviceForFromTitle: {
    marginBottom: 12
  },
  inoviceFor: {
    flex: 1.5
  },
  inoviceFrom: {
    flex: 1
  },
  inoviceForFromText: {
    color: "#787878",
    lineHeight: 1.2
  },
  dividerLG: {
    width: "100%",
    height: 1,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#e5e5e5"
  },
  table: {
    marginTop: 16
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    textAlign: "left"
  },
  tableHeaderItem: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    border: "1px solid #000"
  },
  tableRow: {
    display: "flex",
    flexDirection: "row"
  },
  tableCol: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    border: "1px solid #000"
  },
  signatureTotalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16
  },
  signatureContainer: {},
  totalContainer: {},
  signatureText: {
    lineHeight: 1.2
  },
  totalText: {
    lineHeight: 1.2
  },
  footer: {
    borderTop: "1px solid #e5e5e5",
    paddingTop: 16,
    marginTop: "auto"
  },
  footerText: {
    color: "#787878",
    lineHeight: 1.2
  }
});
const meta$9 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const handle$4 = {
  uiTools: () => {
    return /* @__PURE__ */ jsx(UiTools$4, {});
  }
};
async function loader$l({ request: request2 }) {
  const url = new URL(request2.url);
  const tableParams = parseTableParams(url.search);
  const data2 = await dataService.getList({
    ...tableParams,
    resource: EnumResource.post,
    meta: {
      include: {
        user: { select: { name: true, avatar: true } },
        category: { select: { title: true } }
      }
    }
  });
  return { initialData: data2 };
}
function PostIndex() {
  const { initialData } = useLoaderData();
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: EnumResource.post, action: EnumAction.delete });
  useCan({
    resource: EnumResource.post,
    action: EnumAction.field,
    params: { field: "hit" }
  });
  const recordRef = useRef();
  const useModalReturn1 = useModal();
  const useModalReturn2 = useModal();
  const friendly = useUserFriendlyName();
  const bulkDeleteAction = (table) => {
    const rows = table.getSelectedRowModel().rows;
    const label = `Delete Selected (${rows.length}) ${friendly("Row", rows.length > 1 ? "plural" : "singular")}`;
    return {
      className: "text-destructive!",
      label,
      disabled: !(deletePermission == null ? void 0 : deletePermission.can),
      onClick: () => {
        deleteMany(
          {
            resource: EnumResource.post,
            ids: rows.map((row) => row.original.id)
          },
          {
            onSuccess: () => {
              table.resetRowSelection();
            }
          }
        );
      }
    };
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PostFormModal, { ...useModalReturn1, record: recordRef.current }),
    /* @__PURE__ */ jsxs(
      Table,
      {
        enableSorting: true,
        enableFilters: true,
        enableHiding: true,
        toolbar: [/* @__PURE__ */ jsx(CreateButton, {}, "create")],
        initialState: {
          columnVisibility: {
            updatedAt: false
          },
          sorting: [
            {
              id: "createdAt",
              desc: true
            }
          ]
        },
        refineCoreProps: {
          queryOptions: { initialData },
          meta: {
            join: [
              {
                field: EnumResource.user,
                select: ["name", "avatar"]
              },
              {
                field: EnumResource.category,
                select: ["title"]
              }
            ]
          }
        },
        children: [
          /* @__PURE__ */ jsx(
            Table.Column,
            {
              accessorKey: "id",
              id: "id",
              header: ({ table }) => /* @__PURE__ */ jsx(Table.CheckAll, { table, options: [bulkDeleteAction(table)] }),
              cell: ({ row }) => /* @__PURE__ */ jsx(
                Checkbox,
                {
                  className: "ml-2",
                  checked: row.getIsSelected(),
                  onCheckedChange: (value) => row.toggleSelected(!!value),
                  "aria-label": "Select row"
                },
                `checkbox-${row.original.id}`
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Table.Column,
            {
              header: "Title",
              accessorKey: "title",
              id: "title",
              meta: {
                filterOperator: "contains"
              },
              filter: (props) => /* @__PURE__ */ jsx(Table.Filter.Search, { ...props, title: "Search Title" }),
              cell: ({ row: { index, original }, table }) => {
                const pageIndex = table.getState().pagination.pageIndex;
                const pageSize = table.getState().pagination.pageSize;
                return /* @__PURE__ */ jsxs(ShowButton, { recordItemId: original.id, asChild: true, children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground inline-block min-w-8", children: [
                    pageIndex * pageSize + index + 1,
                    ". "
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "py-3 underline-offset-2 hover:text-green-600 hover:underline", children: original.title })
                ] });
              }
            }
          ),
          /* @__PURE__ */ jsx(
            Table.Column,
            {
              header: "Category",
              accessorKey: "category.title",
              id: "category.title",
              meta: {
                filterOperator: "contains"
              },
              enableHiding: true,
              filter: (props) => /* @__PURE__ */ jsx(Table.Filter.Search, { ...props, title: "Search Category" })
            }
          ),
          /* @__PURE__ */ jsx(
            Table.Column,
            {
              header: "Hit",
              accessorKey: "hit",
              id: "hit",
              enableSorting: true,
              enableHiding: true,
              cell: ({ row: { original } }) => /* @__PURE__ */ jsx("span", { children: original.hit.toLocaleString() })
            }
          ),
          /* @__PURE__ */ jsx(
            Table.Column,
            {
              header: "Status",
              accessorKey: "status",
              id: "status",
              enableSorting: true,
              enableHiding: true,
              cell: ({ row: { original } }) => {
                var _a, _b, _c, _d, _e;
                return /* @__PURE__ */ jsx(Badge, { variant: (_a = POST_STATUS_MAP[original.status]) == null ? void 0 : _a.badge, children: ((_c = (_b = original.status) == null ? void 0 : _b.charAt(0)) == null ? void 0 : _c.toUpperCase()) + ((_e = (_d = original.status) == null ? void 0 : _d.slice(1)) == null ? void 0 : _e.toLowerCase()) });
              },
              filter: (props) => /* @__PURE__ */ jsx(
                Table.Filter.Dropdown,
                {
                  ...props,
                  options: Object.entries(POST_STATUS).map(([key, value]) => {
                    var _a, _b;
                    return {
                      label: ((_a = key == null ? void 0 : key.charAt(0)) == null ? void 0 : _a.toUpperCase()) + ((_b = key == null ? void 0 : key.slice(1)) == null ? void 0 : _b.toLowerCase()),
                      value
                    };
                  })
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Table.Column,
            {
              header: "CreatedAt",
              accessorKey: "createdAt",
              id: "createdAt",
              enableSorting: true,
              enableHiding: true,
              filter: (props) => /* @__PURE__ */ jsx(Table.Filter.DateRangePicker, { ...props, align: "end" }),
              cell: ({ row: { original } }) => dayjs(original.createdAt).format("YYYY-MM-DD HH:mm:ss")
            }
          ),
          /* @__PURE__ */ jsx(
            Table.Column,
            {
              header: "UpdatedAt",
              accessorKey: "updatedAt",
              id: "updatedAt",
              enableSorting: true,
              enableHiding: true,
              filter: (props) => /* @__PURE__ */ jsx(Table.Filter.DateRangePicker, { ...props, align: "end" }),
              cell: ({ row: { original } }) => dayjs(original.updatedAt).format("YYYY-MM-DD HH:mm:ss")
            }
          ),
          /* @__PURE__ */ jsx(
            Table.Column,
            {
              header: "Author",
              accessorKey: "user.name",
              id: "user.name",
              enableHiding: true,
              meta: {
                filterOperator: "contains"
              },
              filter: (props) => /* @__PURE__ */ jsx(Table.Filter.Search, { ...props, title: "Search Author" }),
              cell: useCallback(
                ({ row: { original } }) => {
                  var _a, _b, _c, _d, _e;
                  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxs(Avatar, { className: "size-6", children: [
                      /* @__PURE__ */ jsx(AvatarImage, { src: ((_a = original.user) == null ? void 0 : _a.avatar) || "", alt: ((_b = original.user) == null ? void 0 : _b.name) || "" }),
                      /* @__PURE__ */ jsx(AvatarFallback, { children: (_d = (_c = original.user) == null ? void 0 : _c.name) == null ? void 0 : _d.slice(0, 1).toUpperCase() })
                    ] }),
                    /* @__PURE__ */ jsx("span", { children: (_e = original.user) == null ? void 0 : _e.name })
                  ] });
                },
                []
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Table.Column,
            {
              header: "Actions",
              accessorKey: "id",
              id: "actions",
              cell: useCallback(
                ({ row: { original } }) => /* @__PURE__ */ jsxs(Table.Actions, { row: original, resource: "post", children: [
                  /* @__PURE__ */ jsx(Table.ShowAction, {}),
                  /* @__PURE__ */ jsx(Table.EditAction, {}),
                  /* @__PURE__ */ jsx(
                    Table.EditAction,
                    {
                      title: "Edit in Modal",
                      onClick: () => {
                        recordRef.current = original;
                        useModalReturn1.show();
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx(Table.CloneAction, {}),
                  /* @__PURE__ */ jsx(Table.DeleteAction, {}),
                  /* @__PURE__ */ jsx(
                    Table.ShowAction,
                    {
                      title: "Show PDF",
                      icon: /* @__PURE__ */ jsx(Paperclip, { size: 16 }),
                      onClick: () => {
                        recordRef.current = original;
                        useModalReturn2.show();
                      }
                    }
                  )
                ] }),
                [useModalReturn1, useModalReturn2]
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(Dialog, { open: useModalReturn2.visible, onOpenChange: useModalReturn2.close, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-6xl", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { className: "border-b pb-4", children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "View PDF" }),
        /* @__PURE__ */ jsx(DialogDescription, { children: "This is a Demo for View PDF on Modal." })
      ] }),
      /* @__PURE__ */ jsx(PdfLayout, { record: recordRef.current })
    ] }) })
  ] });
}
function UiTools$4() {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-sm", children: [
    /* @__PURE__ */ jsx(ImportButton, { variant: "ghost", size: "icon" }),
    /* @__PURE__ */ jsx(ExportButton, { variant: "ghost", size: "icon" })
  ] });
}
function ErrorBoundary$d() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$d,
  default: PostIndex,
  handle: handle$4,
  loader: loader$l,
  meta: meta$9
}, Symbol.toStringTag, { value: "Module" }));
const meta$8 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
function PostCreate() {
  return /* @__PURE__ */ jsx(PostForm, {});
}
function ErrorBoundary$c() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$c,
  default: PostCreate,
  meta: meta$8
}, Symbol.toStringTag, { value: "Module" }));
const loader$k = async ({ request: request2, params }) => {
  const { provider } = params;
  if (!provider) {
    return Response.json({ message: "provider is required" }, { status: 405 });
  }
  const url = new URL(request2.url);
  url.protocol = "https:";
  const secureRequest = new Request(url, request2);
  try {
    const user = await authenticator.authenticate(provider, secureRequest);
    const { email, name } = user;
    if (!email || !name) {
      return Response.json({ message: "Authentication failed, unable to get user." }, { status: 401 });
    }
    const session = await getSession(secureRequest.headers.get("Cookie"));
    const existingUser = await getUserByEmail(email);
    if (existingUser == null ? void 0 : existingUser.id) {
      session.set("user", existingUser);
    } else {
      const userNew = await createUser({ email, name, provider: EnumAuthProvider.tcshuke });
      session.set("user", userNew);
    }
    const headers2 = new Headers();
    headers2.append("Set-Cookie", await commitSession(session));
    return redirect$1("/", {
      headers: headers2
    });
  } catch (error) {
    console.error("@authenticator.OAuth2.callback", error);
    return Response.json({ message: (error == null ? void 0 : error.message) || "Authentication failed, unknown error." }, { status: 401 });
  }
};
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$k
}, Symbol.toStringTag, { value: "Module" }));
const meta$7 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
function DashboardIndex() {
  return /* @__PURE__ */ jsx(ComingSoon, {});
}
function ErrorBoundary$b() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$b,
  default: DashboardIndex,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
const meta$6 = ({ data: data2 }) => {
  return [{ title: data2 == null ? void 0 : data2.title }, { name: "description", content: data2 == null ? void 0 : data2.description }];
};
const handle$3 = {
  uiTools: (_match, _matchs) => {
    return /* @__PURE__ */ jsx(UiTools$3, {});
  },
  uiFilter: (_match, _matchs) => {
    return /* @__PURE__ */ jsx(UiFilter, {});
  }
};
async function loader$j({ request: request2 }) {
  await syncServiceLocaleToClient((await getPreferencesCookie(request2)).locale);
  return { title: t("title"), description: t("description") };
}
function DashboardAbout() {
  const { translate: t2 } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-6xl text-[#3defe9]", children: t2("title", "") }),
    /* @__PURE__ */ jsx("p", { className: "my-10 text-3xl text-[#fecc1b]", children: t2("description", "") }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2 space-x-2 *:py-1 *:text-sm", children: [
      /* @__PURE__ */ jsx(Badge, { children: "前后端一体化架构" }),
      /* @__PURE__ */ jsx(Badge, { children: "SSR 服务端渲染" }),
      /* @__PURE__ */ jsx(Badge, { children: "路由并行加载" }),
      /* @__PURE__ */ jsx(Badge, { children: "CRUD 开发简化" }),
      /* @__PURE__ */ jsx(Badge, { children: "状态持久化" }),
      /* @__PURE__ */ jsx(Badge, { children: "TypeScript 类型安全" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(Badge, { children: "身份验证" }),
      /* @__PURE__ */ jsx(Badge, { children: "访问控制" }),
      /* @__PURE__ */ jsx(Badge, { children: "审计日志" }),
      /* @__PURE__ */ jsx(Badge, { children: "实时数据" }),
      /* @__PURE__ */ jsx(Badge, { children: "调试辅助" }),
      /* @__PURE__ */ jsx(Badge, { children: "主题切换" }),
      /* @__PURE__ */ jsx(Badge, { children: "多国语言" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(Badge, { children: "日志上报 & 监控告警" })
    ] })
  ] });
}
function ErrorBoundary$a() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const dataTools = [
  [
    { label: "Customize Page", icon: Settings2 },
    { label: "Turn into wiki", icon: FileText }
  ],
  [
    { label: "Copy Link", icon: Link$2 },
    { label: "Duplicate", icon: Copy },
    { label: "Move to", icon: CornerUpRight },
    { label: "Move to Trash", icon: Trash2 }
  ],
  [
    { label: "Undo", icon: CornerUpLeft },
    { label: "View analytics", icon: LineChart },
    { label: "Version History", icon: GalleryVerticalEnd },
    { label: "Show delete pages", icon: Trash },
    { label: "Notifications", icon: Bell }
  ],
  [
    { label: "Import", icon: ArrowUp },
    { label: "Export", icon: ArrowDown }
  ]
];
function UiTools$3() {
  const [isOpen, setIsOpen] = React__default.useState(false);
  const [searchParams] = useSearchParams();
  const updateSearchParams = useUpdateSearchParams();
  const starred = Boolean(searchParams.get("starred"));
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-sm", children: [
    /* @__PURE__ */ jsx("div", { className: "text-muted-foreground ml-2 hidden font-medium md:inline-block", children: "Edit Oct 08" }),
    /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-7 w-7", onClick: () => updateSearchParams({ starred: !starred }), children: /* @__PURE__ */ jsx(Star, { className: starred ? "fill-yellow-400" : "" }) }),
    /* @__PURE__ */ jsxs(Popover, { open: isOpen, onOpenChange: setIsOpen, children: [
      /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "data-[state=open]:bg-accent h-7 w-7", children: /* @__PURE__ */ jsx(MoreHorizontal, {}) }) }),
      /* @__PURE__ */ jsx(PopoverContent, { className: "w-56 overflow-hidden rounded-lg p-0", align: "end", children: /* @__PURE__ */ jsx(Sidebar$1, { collapsible: "none", className: "bg-transparent", children: /* @__PURE__ */ jsx(SidebarContent, { children: dataTools.map((group, index) => /* @__PURE__ */ jsx(SidebarGroup, { className: "border-b last:border-none", children: /* @__PURE__ */ jsx(SidebarGroupContent, { className: "gap-0", children: /* @__PURE__ */ jsx(SidebarMenu, { children: group.map((item, index2) => {
        const isActive = Boolean(searchParams.get(item.label));
        return /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(
          SidebarMenuButton,
          {
            onClick: () => updateSearchParams({ [item.label]: !isActive }),
            isActive,
            children: [
              /* @__PURE__ */ jsx(item.icon, {}),
              " ",
              /* @__PURE__ */ jsx("span", { children: item.label })
            ]
          }
        ) }, index2);
      }) }) }) }, index)) }) }) })
    ] })
  ] });
}
const dataFilter = {
  checkbox: [
    {
      title: "Calendars Type",
      name: "calendarsType",
      items: [
        { label: "Personal", id: "personal" },
        { label: "Work", id: "work" },
        { label: "Family", id: "family" }
      ]
    },
    {
      title: "Calendars Favorites",
      name: "calendarsFavorites",
      items: [
        { label: "Holidays", id: "holidays" },
        { label: "Birthdays", id: "birthdays" }
      ]
    }
  ]
};
function UiFilter() {
  const [searchParams] = useSearchParams();
  const dateRange = tryParse(searchParams.get("dateRange"));
  const updateSearchParams = useUpdateSearchParams();
  const debounceSubmit = useDebounceSubmit();
  return /* @__PURE__ */ jsxs(Form$2, { className: "flex flex-1 flex-col overflow-x-hidden", onChange: (event) => debounceSubmit(event), children: [
    /* @__PURE__ */ jsxs(SidebarContent, { children: [
      /* @__PURE__ */ jsx(SidebarGroup, { className: "p-0", children: /* @__PURE__ */ jsx(
        Calendar,
        {
          className: "[&_[role=gridcell]]:w-[33px]",
          mode: "range",
          selected: dateRange,
          onSelect: (res) => {
            updateSearchParams({ dateRange: JSON.stringify(res) });
          }
        }
      ) }),
      /* @__PURE__ */ jsx(SidebarSeparator, { className: "mx-0" }),
      /* @__PURE__ */ jsx(SidebarGroup, { children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" }),
        /* @__PURE__ */ jsx(Label, { htmlFor: "desc", className: "sr-only", children: "Search" }),
        /* @__PURE__ */ jsx(
          SidebarInput,
          {
            type: "search",
            id: "desc",
            name: "desc",
            defaultValue: searchParams.get("desc") || "",
            placeholder: "Search ...",
            className: "pl-8"
          }
        )
      ] }) }),
      dataFilter.checkbox.map((group, index) => /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
        /* @__PURE__ */ jsx(SidebarSeparator, { className: "mx-0" }),
        /* @__PURE__ */ jsx(SidebarGroup, { className: "py-0", children: /* @__PURE__ */ jsxs(Collapsible, { defaultOpen: index === 0, className: "group/collapsible", children: [
          /* @__PURE__ */ jsx(
            SidebarGroupLabel,
            {
              asChild: true,
              className: "group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground w-full text-sm",
              children: /* @__PURE__ */ jsxs(CollapsibleTrigger, { children: [
                group.title,
                /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(CollapsibleContent, { className: "space-y-2 px-2 py-2", children: group.items.map((item, index2) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                name: group.name,
                id: item.id,
                value: item.id,
                defaultChecked: Boolean(searchParams.getAll(group.name).includes(item.id))
              }
            ),
            /* @__PURE__ */ jsx(Label, { htmlFor: item.id, className: "text-sm font-normal", children: item.label })
          ] }, index2)) })
        ] }) })
      ] }, group.name))
    ] }),
    /* @__PURE__ */ jsx(SidebarFooter, { children: /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(SidebarMenuButton, { type: "button", children: [
      /* @__PURE__ */ jsx(Plus, {}),
      /* @__PURE__ */ jsx("span", { children: "New" })
    ] }) }) }) })
  ] });
}
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$a,
  default: DashboardAbout,
  handle: handle$3,
  loader: loader$j,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
const meta$5 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const handle$2 = {
  uiTools: () => {
    return /* @__PURE__ */ jsx(UiTools$2, {});
  }
};
async function loader$i({ request: request2 }) {
  const url = new URL(request2.url);
  const tableParams = parseTableParams(url.search);
  const data2 = await dataService.getList({
    ...tableParams,
    resource: EnumResource.role,
    meta: {
      include: {
        creator: { select: { name: true, avatar: true } }
      }
    }
  });
  return { initialData: data2 };
}
function RoleIndex() {
  const { initialData } = useLoaderData();
  const friendly = useUserFriendlyName();
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: EnumResource.role, action: EnumAction.delete });
  const bulkDeleteAction = (table) => {
    const rows = table.getSelectedRowModel().rows;
    const label = `Delete Selected (${rows.length}) ${friendly("Row", rows.length > 1 ? "plural" : "singular")}`;
    return {
      className: "text-destructive!",
      label,
      disabled: !(deletePermission == null ? void 0 : deletePermission.can),
      onClick: () => {
        deleteMany(
          {
            resource: EnumResource.role,
            ids: rows.map((row) => row.original.id)
          },
          {
            onSuccess: () => {
              table.resetRowSelection();
            }
          }
        );
      }
    };
  };
  return /* @__PURE__ */ jsxs(
    Table,
    {
      enableSorting: true,
      enableFilters: true,
      enableHiding: true,
      initialState: {
        sorting: [
          {
            id: "createdAt",
            desc: true
          }
        ]
      },
      refineCoreProps: {
        queryOptions: { initialData },
        meta: {
          join: [
            {
              field: "creator",
              select: ["name", "avatar"]
            }
          ]
        }
      },
      children: [
        /* @__PURE__ */ jsx(
          Table.Column,
          {
            accessorKey: "id",
            id: "id",
            header: ({ table }) => /* @__PURE__ */ jsx(Table.CheckAll, { table, options: [bulkDeleteAction(table)] }),
            cell: ({ row }) => /* @__PURE__ */ jsx(
              Checkbox,
              {
                className: "ml-2",
                checked: row.getIsSelected(),
                onCheckedChange: (value) => row.toggleSelected(!!value),
                "aria-label": "Select row"
              },
              `checkbox-${row.original.id}`
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Table.Column,
          {
            header: "Title",
            accessorKey: "title",
            id: "title",
            meta: {
              filterOperator: "contains"
            },
            filter: (props) => /* @__PURE__ */ jsx(Table.Filter.Search, { ...props, title: "Search Title" }),
            cell: ({ row: { index, original }, table }) => {
              const pageIndex = table.getState().pagination.pageIndex;
              const pageSize = table.getState().pagination.pageSize;
              return /* @__PURE__ */ jsxs(ShowButton, { recordItemId: original.id, asChild: true, children: [
                /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground inline-block min-w-8", children: [
                  pageIndex * pageSize + index + 1,
                  ". "
                ] }),
                /* @__PURE__ */ jsx("span", { className: "py-3 capitalize underline-offset-2 visited:text-red-600 hover:text-green-600 hover:underline", children: original.title })
              ] });
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Table.Column,
          {
            header: "CreatedAt",
            accessorKey: "createdAt",
            id: "createdAt",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(Table.Filter.DateRangePicker, { ...props, align: "end" }),
            cell: ({ row: { original } }) => dayjs(original.createdAt).format("YYYY-MM-DD HH:mm:ss")
          }
        ),
        /* @__PURE__ */ jsx(
          Table.Column,
          {
            header: "Creator",
            accessorKey: "creator",
            id: "creator",
            enableHiding: true,
            meta: {
              filterOperator: "contains"
            },
            filter: (props) => /* @__PURE__ */ jsx(Table.Filter.Search, { ...props, title: "Search Creator" }),
            cell: useCallback(
              ({ row: { original } }) => {
                var _a, _b, _c, _d, _e;
                return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxs(Avatar, { className: "size-6", children: [
                    /* @__PURE__ */ jsx(AvatarImage, { src: ((_a = original.creator) == null ? void 0 : _a.avatar) || "", alt: ((_b = original.creator) == null ? void 0 : _b.name) || "" }),
                    /* @__PURE__ */ jsx(AvatarFallback, { children: (_d = (_c = original.creator) == null ? void 0 : _c.name) == null ? void 0 : _d.slice(0, 1).toUpperCase() })
                  ] }),
                  /* @__PURE__ */ jsx("span", { children: (_e = original.creator) == null ? void 0 : _e.name })
                ] });
              },
              []
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Table.Column,
          {
            header: "Actions",
            accessorKey: "id",
            id: "actions",
            cell: ({ row: { original } }) => /* @__PURE__ */ jsx(ShowButton, { recordItemId: original.id, size: "icon", variant: "ghost" })
          }
        )
      ]
    }
  );
}
function UiTools$2() {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 text-sm", children: /* @__PURE__ */ jsx(ExportButton, { variant: "ghost", size: "icon" }) });
}
function ErrorBoundary$9() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$9,
  default: RoleIndex,
  handle: handle$2,
  loader: loader$i,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
const meta$4 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const handle$1 = {
  uiTools: () => {
    return /* @__PURE__ */ jsx(UiTools$1, {});
  }
};
async function loader$h({ request: request2 }) {
  const url = new URL(request2.url);
  const tableParams = parseTableParams(url.search);
  const data2 = await dataService.getList({
    ...tableParams,
    resource: EnumResource.user,
    meta: {
      include: {
        _count: {
          select: {
            Post: true
          }
        }
      }
    }
  });
  return { initialData: data2 };
}
function UserIndex() {
  const { initialData } = useLoaderData();
  const friendly = useUserFriendlyName();
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: EnumResource.user, action: EnumAction.delete });
  const bulkDeleteAction = (table) => {
    const rows = table.getSelectedRowModel().rows;
    const label = `Delete Selected (${rows.length}) ${friendly("Row", rows.length > 1 ? "plural" : "singular")}`;
    return {
      className: "text-destructive!",
      label,
      disabled: !(deletePermission == null ? void 0 : deletePermission.can),
      onClick: () => {
        deleteMany(
          {
            resource: EnumResource.user,
            ids: rows.map((row) => row.original.id)
          },
          {
            onSuccess: () => {
              table.resetRowSelection();
            }
          }
        );
      }
    };
  };
  return /* @__PURE__ */ jsxs(
    Table,
    {
      enableSorting: true,
      enableFilters: true,
      enableHiding: true,
      initialState: {
        sorting: [
          {
            id: "createdAt",
            desc: true
          }
        ]
      },
      refineCoreProps: {
        queryOptions: { initialData },
        meta: {
          join: [
            {
              field: EnumResource.post,
              count: true
            }
          ]
        }
      },
      children: [
        /* @__PURE__ */ jsx(
          Table.Column,
          {
            accessorKey: "id",
            id: "id",
            header: ({ table }) => /* @__PURE__ */ jsx(Table.CheckAll, { table, options: [bulkDeleteAction(table)] }),
            cell: ({ row }) => /* @__PURE__ */ jsx(
              Checkbox,
              {
                className: "ml-2",
                checked: row.getIsSelected(),
                onCheckedChange: (value) => row.toggleSelected(!!value),
                "aria-label": "Select row"
              },
              `checkbox-${row.original.id}`
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Table.Column,
          {
            header: "Name",
            accessorKey: "name",
            id: "name",
            enableHiding: true,
            meta: {
              filterOperator: "contains"
            },
            filter: (props) => /* @__PURE__ */ jsx(Table.Filter.Search, { ...props, title: "Search Author" }),
            cell: useCallback(
              ({ row: { index, original }, table }) => {
                const pageIndex = table.getState().pagination.pageIndex;
                const pageSize = table.getState().pagination.pageSize;
                return /* @__PURE__ */ jsxs(ShowButton, { recordItemId: original.id, asChild: true, children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground inline-block min-w-8", children: [
                    pageIndex * pageSize + index + 1,
                    ". "
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "py-3 capitalize underline-offset-2 hover:text-green-600 hover:underline", children: original.name })
                ] });
              },
              []
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Table.Column,
          {
            header: "Provider",
            accessorKey: "provider",
            id: "provider",
            enableSorting: true,
            enableHiding: true,
            cell: ({ row: { original } }) => {
              var _a, _b, _c;
              return /* @__PURE__ */ jsx(Badge, { variant: "outline", children: ((_b = (_a = original.provider) == null ? void 0 : _a.charAt(0)) == null ? void 0 : _b.toUpperCase()) + ((_c = original.provider) == null ? void 0 : _c.slice(1)) });
            },
            filter: (props) => /* @__PURE__ */ jsx(
              Table.Filter.Radio,
              {
                ...props,
                options: Object.entries(USER_PROVIDER).map(([key, value]) => {
                  var _a;
                  return {
                    label: ((_a = key == null ? void 0 : key.charAt(0)) == null ? void 0 : _a.toUpperCase()) + (key == null ? void 0 : key.slice(1)),
                    value
                  };
                })
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Table.Column,
          {
            header: "CreatedAt",
            accessorKey: "createdAt",
            id: "createdAt",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(Table.Filter.DateRangePicker, { ...props, align: "end" }),
            cell: ({ row: { original } }) => dayjs(original.createdAt).format("YYYY-MM-DD HH:mm:ss")
          }
        ),
        /* @__PURE__ */ jsx(
          Table.Column,
          {
            header: "Actions",
            accessorKey: "id",
            id: "actions",
            cell: ({ row: { original } }) => /* @__PURE__ */ jsx(DeleteButton, { recordItemId: original.id, size: "icon", variant: "ghost", className: "text-destructive!" })
          }
        )
      ]
    }
  );
}
function UiTools$1() {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 text-sm", children: /* @__PURE__ */ jsx(ExportButton, { variant: "ghost", size: "icon" }) });
}
function ErrorBoundary$8() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$8,
  default: UserIndex,
  handle: handle$1,
  loader: loader$h,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
async function loader$g() {
  return Response.json({ message: "Method not allowed" }, { status: 405 });
}
const action$8 = async ({ request: request2, params }) => {
  try {
    const { provider } = params;
    if (!provider || ![EnumAuthProvider.userpass, EnumAuthProvider.tcshuke].includes(provider)) {
      return Response.json({ message: "Method not allowed" }, { status: 405 });
    }
    const user = await authenticator.authenticate(provider, request2);
    if (provider === EnumAuthProvider.userpass && user) {
      const session = await getSession(request2.headers.get("Cookie"));
      session.set("user", user);
      const headers2 = new Headers();
      headers2.append("Set-Cookie", await commitSession(session));
      return Response.json(user, { headers: headers2 });
    }
    return Response.json({ message: "Authentication failed, unable to get user." }, { status: 401 });
  } catch (error) {
    if (error.status === 302) {
      return error;
    }
    console.error("@authenticator", error);
    return Response.json({ message: (error == null ? void 0 : error.message) || "Authentication failed, unknown error." }, { status: 401 });
  }
};
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$8,
  loader: loader$g
}, Symbol.toStringTag, { value: "Module" }));
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "bg-muted text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-1",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
const meta$3 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$f({ request: request2, params }) {
  await requireUserSession(request2);
  await getAllParams(request2, params);
  return {};
}
async function action$7({ request: request2, params }) {
  await getAllParams(request2, params);
  return {};
}
function DashboardDemo() {
  return /* @__PURE__ */ jsxs("div", { className: "px-8 pt-8 pb-4", children: [
    /* @__PURE__ */ jsx(H2, { children: "useViewTransition" }),
    /* @__PURE__ */ jsx(DemoUseViewTransitionState, {}),
    /* @__PURE__ */ jsx(H2, { children: "Notification" }),
    /* @__PURE__ */ jsx(DemoNotification, {}),
    /* @__PURE__ */ jsx(H2, { children: "AlertDialog & Modal & useModal" }),
    /* @__PURE__ */ jsx(DemoModal, {}),
    /* @__PURE__ */ jsx(H2, { children: "useModalForm" }),
    /* @__PURE__ */ jsx(DemoUseModalForm, {}),
    /* @__PURE__ */ jsx(H2, { children: "useStepsForm" }),
    /* @__PURE__ */ jsx(DemoUseStepsForm, {}),
    /* @__PURE__ */ jsx(H2, { children: "sentry" }),
    /* @__PURE__ */ jsx(DemoSentry, {})
  ] });
}
function ErrorBoundary$7() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const DemoNotification = () => {
  const { open: openNotification, close: closeNotification } = useNotification();
  return /* @__PURE__ */ jsxs("ul", { className: "mt-4 flex gap-2", children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => {
          openNotification == null ? void 0 : openNotification({
            key: "my-notification-abc",
            message: "Test Notification",
            description: "This is a test notification.",
            type: "progress"
          });
        },
        children: "Progress"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => {
          openNotification == null ? void 0 : openNotification({
            key: "my-notification-abc",
            message: "Test Notification",
            description: "This is a test notification.",
            type: "success"
          });
        },
        children: "Success"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => {
          openNotification == null ? void 0 : openNotification({
            key: "my-notification-abc",
            message: "Test Notification",
            description: "This is a test notification.",
            type: "error"
          });
        },
        children: "Failed"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => {
          closeNotification == null ? void 0 : closeNotification("my-notification-abc");
        },
        children: "Close"
      }
    )
  ] });
};
const DemoModal = () => {
  const { visible: modalVisible, show: showModal, close: closeModal } = useModal();
  return /* @__PURE__ */ jsxs("ul", { className: "mt-4 flex gap-2", children: [
    /* @__PURE__ */ jsxs(AlertDialog, { children: [
      /* @__PURE__ */ jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { children: "Show AlertDialog" }) }),
      /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
        /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
          /* @__PURE__ */ jsx(AlertDialogTitle, { children: "Are you absolutely sure?" }),
          /* @__PURE__ */ jsx(AlertDialogDescription, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." })
        ] }),
        /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
          /* @__PURE__ */ jsx(AlertDialogCancel, { children: "Cancel" }),
          /* @__PURE__ */ jsx(AlertDialogAction, { children: "Continue" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      Dialog,
      {
        open: modalVisible,
        onOpenChange: (open) => {
          if (open) {
            showModal();
          } else {
            closeModal();
          }
        },
        children: [
          /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { children: "Show Modal" }) }),
          /* @__PURE__ */ jsxs(DialogContent, { children: [
            /* @__PURE__ */ jsxs(DialogHeader, { children: [
              /* @__PURE__ */ jsx(DialogTitle, { children: "Are you absolutely sure?" }),
              /* @__PURE__ */ jsx(DialogDescription, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." })
            ] }),
            /* @__PURE__ */ jsxs(DialogFooter, { children: [
              /* @__PURE__ */ jsx(DialogClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Cancel" }) }),
              /* @__PURE__ */ jsx(Button, { children: "Continue" })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Button, { onClick: showModal, children: "Show Modal - useModal" })
  ] });
};
const editPostId = "0d97bea4-a06f-4f7e-8771-d4b884a46be7";
const formSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),
  content: z.string().min(2).optional()
});
const DemoUseModalForm = () => {
  const { options } = useSelect({
    resource: EnumResource.category
  });
  const modifyingDataBeforeSubmission = useCallback((values) => {
    return { ...values, content: "..." };
  }, []);
  const form = useModalForm({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "" },
    modalProps: { defaultVisible: false },
    syncWithLocation: { key: "modalEditPost", syncId: true },
    refineCoreProps: {
      resource: EnumResource.post,
      action: EnumAction.edit,
      id: editPostId
      // autoSave: { // 注意：autoSave 不会触发表单验证
      //   enabled: false,
      //   onFinish: modifyingDataBeforeSubmission,
      //   debounce: 2000,
      //   invalidateOnClose: true,
      //   invalidateOnUnmount: true,
      // },
    }
  });
  const {
    formState: { errors },
    refineCore: { onFinish, formLoading, autoSaveProps },
    modal: { title, visible, close, show },
    handleSubmit,
    saveButtonProps
  } = form;
  const onSubmit = handleSubmit((_data) => {
    const values = form.getValues();
    onFinish(modifyingDataBeforeSubmission(values));
  });
  const { translate: t2 } = useTranslation();
  const disabled = formLoading || saveButtonProps.disabled;
  return /* @__PURE__ */ jsxs("ul", { className: "mt-4 flex gap-2", children: [
    /* @__PURE__ */ jsx(Button, { onClick: () => show(editPostId), children: t2(title) }),
    /* @__PURE__ */ jsx(Dialog, { open: visible, onOpenChange: close, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-6xl", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { className: "border-b pb-4", children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: t2(title) }),
        /* @__PURE__ */ jsx(DialogDescription, { children: "This is a Demo for Edit Form on Modal." })
      ] }),
      /* @__PURE__ */ jsx(Form$1, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-8", children: [
        /* @__PURE__ */ jsx(Field, { ...form, name: "title", label: "Title", children: /* @__PURE__ */ jsx(Input, { placeholder: "Title" }) }),
        /* @__PURE__ */ jsx(Field, { ...form, name: "categoryId", label: "Category", children: /* @__PURE__ */ jsx(Combobox, { options, popoverProps: { modal: true } }) }),
        /* @__PURE__ */ jsx(Button, { type: "submit", icon: /* @__PURE__ */ jsx(CheckCheck, {}), loading: formLoading, disabled, children: "Submit" })
      ] }) })
    ] }) })
  ] });
};
const stepTitles = ["Title", "Status", "Category and Content"];
const formSchema2 = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),
  content: z.string().min(2),
  status: z.string(),
  categoryId: z.string()
});
const DemoUseStepsForm = () => {
  const form = useStepsForm({
    resolver: zodResolver(formSchema2),
    defaultValues: { title: "", status: POST_STATUS.DRAFT, content: "", categoryId: "" },
    warnWhenUnsavedChanges: true,
    refineCoreProps: {
      resource: EnumResource.post,
      action: EnumAction.edit,
      id: editPostId,
      autoSave: {
        enabled: false
      }
    },
    stepsProps: {
      defaultStep: 0,
      isBackValidate: false
    }
  });
  const {
    formState: { errors },
    refineCore: { onFinish, formLoading, autoSaveProps },
    handleSubmit,
    steps: { currentStep, gotoStep },
    saveButtonProps
  } = form;
  const { options } = useSelect({
    resource: EnumResource.category
  });
  const renderFormByStep = (step) => {
    switch (step) {
      case 0:
        return /* @__PURE__ */ jsx(Field, { ...form, name: "title", label: "Title", children: /* @__PURE__ */ jsx(Input, { placeholder: "Title" }) });
      case 1:
        return /* @__PURE__ */ jsx(Field, { ...form, name: "status", label: "Status", children: /* @__PURE__ */ jsx(Select, { options: POST_STATUS_LIST.map((status) => ({ label: status, value: status })) }) });
      case 2:
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Field, { ...form, name: "categoryId", label: "Category", children: /* @__PURE__ */ jsx(Combobox, { options }) }),
          /* @__PURE__ */ jsx(Field, { ...form, name: "content", label: "Content", children: /* @__PURE__ */ jsx(Textarea, { placeholder: "Content", rows: 10 }) })
        ] });
    }
  };
  const modifyingDataBeforeSubmission = useCallback((values) => {
    return { ...values, content: "..." };
  }, []);
  const onSubmit = handleSubmit((_data) => {
    const values = form.getValues();
    onFinish(modifyingDataBeforeSubmission(values));
  });
  const disabled = formLoading || saveButtonProps.disabled;
  return /* @__PURE__ */ jsxs("div", { className: "mt-4 flex w-[600px] flex-col gap-8", children: [
    /* @__PURE__ */ jsx(
      Tabs,
      {
        defaultValue: stepTitles[0],
        value: stepTitles[currentStep],
        onValueChange: (value) => gotoStep(stepTitles.indexOf(value)),
        children: /* @__PURE__ */ jsx(TabsList, { children: stepTitles.map((title, index) => /* @__PURE__ */ jsxs(TabsTrigger, { value: title, children: [
          index + 1,
          " - ",
          title
        ] }, index)) })
      }
    ),
    /* @__PURE__ */ jsx(Form$1, { ...form, children: /* @__PURE__ */ jsxs("form", { className: "space-y-8", onSubmit, children: [
      renderFormByStep(currentStep),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 8 }, children: [
        currentStep > 0 && /* @__PURE__ */ jsx(Button, { type: "button", icon: /* @__PURE__ */ jsx(Undo2, {}), onClick: () => gotoStep(currentStep - 1), disabled, children: "Previous" }),
        currentStep < stepTitles.length - 1 && /* @__PURE__ */ jsx(Button, { type: "button", icon: /* @__PURE__ */ jsx(CheckCheck, {}), onClick: () => gotoStep(currentStep + 1), disabled, children: "Next" }),
        currentStep === stepTitles.length - 1 && /* @__PURE__ */ jsx(Button, { type: "submit", icon: /* @__PURE__ */ jsx(CheckCheck, {}), disabled, children: "Save" })
      ] })
    ] }) })
  ] });
};
const DemoUseViewTransitionState = () => {
  const to = `/playground/dashboard/viewTransition`;
  const vt = useViewTransitionState(to);
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ jsx(Link$1, { prefetch: "intent", viewTransition: true, to, children: /* @__PURE__ */ jsx(
    "img",
    {
      alt: "",
      className: "border-secondary mt-4 h-32 rounded-md border shadow-md",
      src: "/logo.png",
      style: {
        viewTransitionName: vt ? "image-expand" : ""
      }
    }
  ) }) });
};
const DemoSentry = () => {
  const { mutate: mutateDelete } = useDelete();
  const { mutate: mutateUpdate } = useUpdate({ resource: EnumResource.post });
  return /* @__PURE__ */ jsxs("ul", { className: "mt-4 flex gap-2", children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => {
          throw new Error("Sentry Example Frontend Error");
        },
        children: "Throw a sample error"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => {
          mutateDelete({ resource: "products", id: "123" });
        },
        children: "Delete a sample record"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => {
          mutateUpdate({ id: editPostId, values: { invalidKey: "123" } });
        },
        children: "Update a sample record"
      }
    )
  ] });
};
const route13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$7,
  action: action$7,
  default: DashboardDemo,
  loader: loader$f,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
async function loader$e({ params }) {
  const { id } = params;
  const { data: log } = await dataService.getOne({
    resource: EnumResource.log,
    id,
    meta: {
      include: {
        user: {
          select: { name: true, email: true, avatar: true }
        }
      }
    }
  });
  if (!log) {
    throw new Response("未找到日志记录", { status: 404 });
  }
  return { log };
}
function LogShow() {
  var _a, _b, _c, _d, _e, _f, _g;
  const { log } = useLoaderData();
  const data2 = JSON.parse(log.data || "{}");
  const previousData = JSON.parse(log.previousData || "{}");
  const meta2 = JSON.parse(log.meta || "{}");
  return /* @__PURE__ */ jsxs("article", { className: "px-8 pt-8 pb-4", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
      /* @__PURE__ */ jsxs(H1, { className: "relative mb-4 inline-flex gap-3 text-4xl font-bold", children: [
        /* @__PURE__ */ jsxs("span", { className: "capitalize", children: [
          "Audit Log Detail - ",
          meta2.parent,
          ".",
          log.resource
        ] }),
        /* @__PURE__ */ jsx("div", { className: "inline-flex shrink-0 items-start pt-3.5", children: /* @__PURE__ */ jsx(Badge, { className: "tracking-wide", variant: (_a = LOG_STATUS_MAP[log.action]) == null ? void 0 : _a.badge, children: log.action }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground mb-8 flex flex-wrap items-center gap-4 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(LeafyGreen, { className: "mr-2 h-4 w-4" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Resource: ",
            meta2.parent,
            ".",
            log.resource
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Created: ",
            new Date(log.createdAt).toLocaleDateString()
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxs(Avatar, { children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: ((_b = log.user) == null ? void 0 : _b.avatar) || "", alt: ((_c = log.user) == null ? void 0 : _c.name) || "" }),
          /* @__PURE__ */ jsx(AvatarFallback, { children: (_e = (_d = log.user) == null ? void 0 : _d.name) == null ? void 0 : _e.slice(0, 2).toUpperCase() })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium", children: (_f = log.user) == null ? void 0 : _f.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground flex items-center text-sm", children: [
            /* @__PURE__ */ jsx(MailIcon, { className: "mr-2 h-4 w-4" }),
            (_g = log.user) == null ? void 0 : _g.email
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      log.data && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Data" }),
        /* @__PURE__ */ jsx("pre", { className: "bg-muted mt-1 overflow-x-auto rounded-lg p-4 text-sm whitespace-pre", children: JSON.stringify(data2, null, 2) })
      ] }),
      log.previousData && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Previous Data" }),
        /* @__PURE__ */ jsx("pre", { className: "bg-muted mt-1 overflow-x-auto rounded-lg p-4 text-sm whitespace-pre", children: JSON.stringify(previousData, null, 2) })
      ] }),
      log.meta && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { children: "Meta Data" }),
        /* @__PURE__ */ jsx("pre", { className: "bg-muted mt-1 overflow-x-auto rounded-lg p-4 text-sm whitespace-pre", children: JSON.stringify(meta2, null, 2) })
      ] })
    ] })
  ] });
}
function ErrorBoundary$6() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$6,
  default: LogShow,
  loader: loader$e
}, Symbol.toStringTag, { value: "Module" }));
async function loader$d({ request: request2 }) {
  await requireUserSession(request2);
  return null;
}
function Post() {
  return /* @__PURE__ */ jsx(CanAccess, { fallback: /* @__PURE__ */ jsx(PermissionDenied, {}), children: /* @__PURE__ */ jsx(Layout, {}) });
}
function ErrorBoundary$5() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$5,
  default: Post,
  loader: loader$d
}, Symbol.toStringTag, { value: "Module" }));
const meta$2 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const handle = {
  uiTools: () => {
    return /* @__PURE__ */ jsx(UiTools, {});
  }
};
async function loader$c({ request: request2 }) {
  const url = new URL(request2.url);
  const tableParams = parseTableParams(url.search);
  const data2 = await dataService.getList({
    ...tableParams,
    resource: EnumResource.log,
    meta: {
      include: {
        user: { select: { name: true, avatar: true } }
      }
    }
  });
  return { initialData: data2 };
}
function LogIndex() {
  const { initialData } = useLoaderData();
  const friendly = useUserFriendlyName();
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: EnumResource.log, action: EnumAction.delete });
  const bulkDeleteAction = (table) => {
    const rows = table.getSelectedRowModel().rows;
    const label = `Delete Selected (${rows.length}) ${friendly("Row", rows.length > 1 ? "plural" : "singular")}`;
    return {
      className: "text-destructive!",
      label,
      disabled: !(deletePermission == null ? void 0 : deletePermission.can),
      onClick: () => {
        deleteMany(
          {
            resource: EnumResource.log,
            ids: rows.map((row) => row.original.id)
          },
          {
            onSuccess: () => {
              table.resetRowSelection();
            }
          }
        );
      }
    };
  };
  return /* @__PURE__ */ jsxs(
    Table,
    {
      enableSorting: true,
      enableFilters: true,
      enableHiding: true,
      initialState: {
        sorting: [
          {
            id: "createdAt",
            desc: true
          }
        ]
      },
      refineCoreProps: {
        queryOptions: { initialData },
        meta: {
          join: [
            {
              field: EnumResource.user,
              select: ["name", "avatar"]
            }
          ]
        }
      },
      children: [
        /* @__PURE__ */ jsx(
          Table.Column,
          {
            accessorKey: "id",
            id: "id",
            header: ({ table }) => /* @__PURE__ */ jsx(Table.CheckAll, { table, options: [bulkDeleteAction(table)] }),
            cell: ({ row }) => /* @__PURE__ */ jsx(
              Checkbox,
              {
                className: "ml-2",
                checked: row.getIsSelected(),
                onCheckedChange: (value) => row.toggleSelected(!!value),
                "aria-label": "Select row"
              },
              `checkbox-${row.original.id}`
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Table.Column,
          {
            header: "Resource",
            accessorKey: "resource",
            id: "resource",
            meta: {
              filterOperator: "contains"
            },
            filter: (props) => /* @__PURE__ */ jsx(Table.Filter.Search, { ...props, title: "Search Resource" }),
            cell: ({ row: { index, original }, table }) => {
              const pageIndex = table.getState().pagination.pageIndex;
              const pageSize = table.getState().pagination.pageSize;
              return /* @__PURE__ */ jsxs(ShowButton, { recordItemId: original.id, asChild: true, children: [
                /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground inline-block min-w-8", children: [
                  pageIndex * pageSize + index + 1,
                  ". "
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "py-3 capitalize underline-offset-2 hover:text-green-600 hover:underline", children: [
                  JSON.parse(original.meta).parent,
                  ".",
                  original.resource
                ] })
              ] });
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Table.Column,
          {
            header: "Type",
            accessorKey: "action",
            id: "action",
            enableSorting: true,
            enableHiding: true,
            cell: ({ row: { original } }) => {
              var _a, _b, _c, _d;
              const ids = JSON.parse(original.meta || "{}").ids;
              return /* @__PURE__ */ jsxs(Badge, { variant: (_a = LOG_STATUS_MAP[original.action]) == null ? void 0 : _a.badge, children: [
                ((_c = (_b = original.action) == null ? void 0 : _b.charAt(0)) == null ? void 0 : _c.toUpperCase()) + ((_d = original.action) == null ? void 0 : _d.slice(1)),
                (ids == null ? void 0 : ids.length) > 1 ? ` x${ids.length}` : ""
              ] });
            },
            filter: (props) => /* @__PURE__ */ jsx(
              Table.Filter.Radio,
              {
                ...props,
                options: Object.entries(LOG_STATUS).map(([key, value]) => {
                  var _a;
                  return {
                    label: ((_a = key == null ? void 0 : key.charAt(0)) == null ? void 0 : _a.toUpperCase()) + (key == null ? void 0 : key.slice(1)),
                    value
                  };
                })
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Table.Column,
          {
            header: "CreatedAt",
            accessorKey: "createdAt",
            id: "createdAt",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(Table.Filter.DateRangePicker, { ...props, align: "end" }),
            cell: ({ row: { original } }) => dayjs(original.createdAt).format("YYYY-MM-DD HH:mm:ss")
          }
        ),
        /* @__PURE__ */ jsx(
          Table.Column,
          {
            header: "Author",
            accessorKey: "user.name",
            id: "user.name",
            enableHiding: true,
            meta: {
              filterOperator: "contains"
            },
            filter: (props) => /* @__PURE__ */ jsx(Table.Filter.Search, { ...props, title: "Search Author" }),
            cell: useCallback(
              ({ row: { original } }) => {
                var _a, _b, _c, _d, _e;
                return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxs(Avatar, { className: "size-6", children: [
                    /* @__PURE__ */ jsx(AvatarImage, { src: ((_a = original.user) == null ? void 0 : _a.avatar) || "", alt: ((_b = original.user) == null ? void 0 : _b.name) || "" }),
                    /* @__PURE__ */ jsx(AvatarFallback, { children: (_d = (_c = original.user) == null ? void 0 : _c.name) == null ? void 0 : _d.slice(0, 1).toUpperCase() })
                  ] }),
                  /* @__PURE__ */ jsx("span", { children: (_e = original.user) == null ? void 0 : _e.name })
                ] });
              },
              []
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Table.Column,
          {
            header: "Actions",
            accessorKey: "id",
            id: "actions",
            cell: ({ row: { original } }) => /* @__PURE__ */ jsx(ShowButton, { recordItemId: original.id, size: "icon", variant: "ghost" })
          }
        )
      ]
    }
  );
}
function UiTools() {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 text-sm", children: /* @__PURE__ */ jsx(ExportButton, { variant: "ghost", size: "icon" }) });
}
function ErrorBoundary$4() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$4,
  default: LogIndex,
  handle,
  loader: loader$c,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
async function action$6({ request: request2 }) {
  var _a;
  if (request2.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }
  try {
    const formData = await request2.formData();
    const nextRole = formData.get("role");
    if (!nextRole) {
      throw new Error("Role is required");
    }
    const { user, session } = await requireUser(request2);
    if (!((_a = user.roles) == null ? void 0 : _a.includes(nextRole))) {
      throw new Error("You do not have permission to switch to this role");
    }
    if (!session) {
      throw new Error("Unauthorized");
    }
    session.set("user", { ...user, role: nextRole });
    return Response.json(
      { success: true },
      {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      }
    );
  } catch (error) {
    return Response.json({ error }, { status: 401 });
  }
}
const route17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$6
}, Symbol.toStringTag, { value: "Module" }));
async function loader$b({ request: request2 }) {
  await requireUserSession(request2);
  return null;
}
function Dashboard() {
  return /* @__PURE__ */ jsx(CanAccess, { fallback: /* @__PURE__ */ jsx(PermissionDenied, {}), children: /* @__PURE__ */ jsx(Layout, {}) });
}
function ErrorBoundary$3() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$3,
  default: Dashboard,
  loader: loader$b
}, Symbol.toStringTag, { value: "Module" }));
const action$5 = async ({ request: request2 }) => {
  try {
    const data2 = await getRequestData(request2);
    const headers2 = new Headers();
    headers2.append("Set-Cookie", await getPreferencesNextCookie(request2, data2));
    return Response.json({ data: data2 }, { headers: headers2 });
  } catch (error) {
    console.error("处理偏好设置请求时出错：", error);
    return Response.json({ error: "处理请求失败" }, { status: 400 });
  }
};
const route19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$5
}, Symbol.toStringTag, { value: "Module" }));
async function loader$a({ request: request2 }) {
  await requireUserSession(request2);
  return null;
}
function Role() {
  return /* @__PURE__ */ jsx(CanAccess, { fallback: /* @__PURE__ */ jsx(PermissionDenied, {}), children: /* @__PURE__ */ jsx(Layout, {}) });
}
function ErrorBoundary$2() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$2,
  default: Role,
  loader: loader$a
}, Symbol.toStringTag, { value: "Module" }));
async function loader$9({ request: request2 }) {
  await requireUserSession(request2);
  return null;
}
function User() {
  return /* @__PURE__ */ jsx(CanAccess, { fallback: /* @__PURE__ */ jsx(PermissionDenied, {}), children: /* @__PURE__ */ jsx(Layout, {}) });
}
function ErrorBoundary$1() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$1,
  default: User,
  loader: loader$9
}, Symbol.toStringTag, { value: "Module" }));
async function loader$8({ request: request2, params }) {
  const { resource } = params;
  if (!resource) {
    throw new Error("resource is required");
  }
  const url = new URL(request2.url);
  const ids = url.searchParams.get("ids");
  if (!ids) {
    throw new Error("批量获取时 ids 参数是必需的");
  }
  const data2 = await dataService.getMany({
    resource,
    ids: ids.split(",")
  });
  return Response.json(data2);
}
async function action$4({ request: request2, params }) {
  await requireUser(request2);
  const { resource } = params;
  if (!resource) {
    throw new Error("resource is required");
  }
  const method = request2.method;
  const body = await request2.json();
  switch (method) {
    case "POST": {
      const { variables } = body;
      const data2 = await dataService.createMany({
        resource,
        variables
      });
      return Response.json(data2);
    }
    case "PUT": {
      const { ids, variables } = body;
      if (!ids) {
        throw new Error("批量更新时 ids 是必需的");
      }
      const data2 = await dataService.updateMany({
        resource,
        ids,
        variables
      });
      return Response.json(data2);
    }
    case "DELETE": {
      const { ids } = body;
      if (!ids) {
        throw new Error("批量删除时 ids 是必需的");
      }
      const data2 = await dataService.deleteMany({
        resource,
        ids
      });
      return Response.json(data2);
    }
    default:
      throw new Error(`不支持的请求方法: ${method}`);
  }
}
const route22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$4,
  loader: loader$8
}, Symbol.toStringTag, { value: "Module" }));
const ASSETS_ROOT = "assets";
const loader$7 = async ({ params, request: request2 }) => {
  const { src, width, height, fit } = extractParams(params, request2);
  try {
    const readStream = readFileAsStream(src);
    return streamingResize(readStream, width, height, fit);
  } catch (error) {
    return handleError(error);
  }
};
function extractParams(params, request2) {
  const src = params["*"];
  const searchParams = new URL(request2.url).searchParams;
  const width = searchParams.has("w") ? Number.parseInt(searchParams.get("w") ?? "0") : void 0;
  const height = searchParams.has("h") ? Number.parseInt(searchParams.get("h") ?? "0") : void 0;
  const fitEnum = ["contain", "cover", "fill", "inside", "outside"];
  let fit = sharp.fit.contain;
  if (searchParams.has("fit")) {
    const fitParam = searchParams.get("fit") ?? "";
    if (fitEnum.includes(fitParam)) {
      fit = fitParam;
    }
  }
  return { src, width, height, fit };
}
function streamingResize(imageStream, width, height, fit) {
  const sharpTransforms = sharp().resize({
    width,
    height,
    fit,
    position: sharp.strategy.attention
    // will try to crop the image and keep the most interesting parts
  }).jpeg({
    mozjpeg: true,
    // use mozjpeg defaults, = smaller images
    quality: 80
  });
  const passthroughStream = new PassThrough$1();
  imageStream.pipe(sharpTransforms).pipe(passthroughStream);
  return new Response(passthroughStream, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable"
    }
  });
}
function readFileAsStream(src) {
  const srcPath = path.join(ASSETS_ROOT, src);
  try {
    const fileStat = statSync(srcPath);
    if (!fileStat.isFile()) {
      throw new Error(`${srcPath} is not a file`);
    }
  } catch (e) {
    throw new Error(`${srcPath} does not exist`);
  }
  return createReadStream(path.join(ASSETS_ROOT, src));
}
function handleError(error) {
  const errorT = error;
  if (errorT.code === "ENOENT") {
    return new Response("image not found", {
      status: 404,
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "no-cache, no-store, must-revalidate"
      }
    });
  }
  return new Response(errorT.message, {
    status: 500,
    statusText: errorT.message,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "no-cache, no-store, must-revalidate"
    }
  });
}
const route23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$7
}, Symbol.toStringTag, { value: "Module" }));
async function loader$6({ params }) {
  const { resource, id } = params;
  if (!resource || !id) {
    throw new Error("resource、id is required");
  }
  const data2 = await dataService.getOne({
    resource,
    id
  });
  return Response.json(data2);
}
async function action$3({ request: request2, params }) {
  await requireUser(request2);
  const { resource, id } = params;
  if (!resource || !id) {
    throw new Error("resource、id is required");
  }
  const method = request2.method;
  switch (method) {
    case "PATCH": {
      const variables = await request2.json();
      const data2 = await dataService.update({
        resource,
        id,
        variables
      });
      return Response.json(data2);
    }
    case "DELETE": {
      const data2 = await dataService.deleteOne({
        resource,
        id
      });
      return Response.json(data2);
    }
    default:
      return Response.json({ message: `不支持的请求方法: ${method}` }, { status: 405 });
  }
}
const route24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$3,
  loader: loader$6
}, Symbol.toStringTag, { value: "Module" }));
async function loader$5({ request: request2 }) {
  await requireUserSession(request2);
  return null;
}
function Log() {
  return /* @__PURE__ */ jsx(CanAccess, { fallback: /* @__PURE__ */ jsx(PermissionDenied, {}), children: /* @__PURE__ */ jsx(Layout, {}) });
}
function ErrorBoundary() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  default: Log,
  loader: loader$5
}, Symbol.toStringTag, { value: "Module" }));
const loader$4 = async ({ request: request2, params }) => {
  const mergedParams = await getAllParams(request2, params);
  const session = await getSession(request2.headers.get("Cookie"));
  return redirect$1(`/login?redirectTo=${mergedParams.redirectTo || "/"}`, {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};
const route26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
const route27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const route28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
async function loader$3({ request: request2, params }) {
  const { resource } = params;
  if (!resource) {
    throw new Error("resource is required");
  }
  const url = new URL(request2.url);
  const pagination = getPaginationFromUrl(url);
  const sorters = getSortersFromUrl(url);
  const filters = getFiltersFromUrl(url);
  const join = getJoinFromUrl(url);
  const res = await dataService.getList({
    resource,
    pagination,
    sorters,
    filters,
    meta: join ? { include: join } : {}
  });
  return Response.json(res);
}
async function action$2({ request: request2, params }) {
  const { user } = await requireUser(request2);
  const { resource } = params;
  const { method } = request2;
  if (!resource) {
    throw new Error("resource is required");
  }
  if (method !== "POST") {
    throw new Error(`不支持的请求方法: ${method}`);
  }
  const body = await request2.json();
  const created = await dataService.create({
    resource,
    variables: { ...body, userId: user == null ? void 0 : user.id }
  });
  return Response.json(created);
}
const route29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$2,
  loader: loader$3
}, Symbol.toStringTag, { value: "Module" }));
const route30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const loader$2 = async ({ request: request2 }) => {
  const user = await getUser(request2);
  return Response.json({ data: user });
};
const route31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
const route32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
function typedFormError(error) {
  if (error instanceof z.ZodError) {
    return data$1({ errors: error.flatten().fieldErrors });
  } else if (error instanceof Error) {
    return data$1({ errors: { default: [(error == null ? void 0 : error.message) || "unknown error (500 Internal Server Error)"] } });
  } else {
    return data$1({ errors: error || { default: ["unknown error (500 Internal Server Error)"] } });
  }
}
z.object({
  email: z.string().email("请输入有效的邮箱地址"),
  password: z.string().min(6, "密码至少需要6个字符").max(50, "密码不能超过50个字符"),
  redirectTo: z.string().optional()
});
const meta$1 = () => {
  return [{ title: "Register" }];
};
async function action$1({ request: request2 }) {
  try {
    const mergedParams = await getAllParams(request2);
    const { email, password } = mergedParams;
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      throw { email: ["A user already exists with this email."] };
    }
    await createUser({ email, password, provider: EnumAuthProvider.userpass });
    return redirect$1(`/login?email=${email}`);
  } catch (error) {
    return typedFormError(error);
  }
}
function Register() {
  return /* @__PURE__ */ jsx("div", { className: "bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm", children: /* @__PURE__ */ jsx(RegisterForm, {}) }) });
}
const route33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1,
  default: Register,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
async function loader$1({ request: request2 }) {
  await requireUserSession(request2);
  return redirect$1("/playground/dashboard/about");
}
const route34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
z.object({
  email: z.string().email("请输入有效的邮箱地址"),
  password: z.string().min(6, "密码至少需要6个字符").max(50, "密码不能超过50个字符"),
  redirectTo: z.string().optional()
});
const meta = () => {
  return [{ title: "Login" }];
};
async function loader({ request: request2 }) {
  const user = await getUser(request2);
  if (user && user.id) {
    return redirect$1("/");
  }
  return {};
}
async function action({ request: request2 }) {
  try {
    const mergedParams = await getAllParams(request2);
    const { email, password, redirectTo } = mergedParams;
    const { error, success, user } = await authProvider.login({
      providerName: EnumAuthProvider.userpass,
      email,
      password,
      redirectTo
    });
    if (error) {
      throw { default: [error.message] };
    }
    if (success && (user == null ? void 0 : user.id)) {
      const session = await getSession(request2.headers.get("Cookie"));
      session.set("user", user);
      return redirect$1(redirectTo, {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      });
    }
  } catch (error) {
    return typedFormError(error);
  }
}
function Login() {
  return /* @__PURE__ */ jsx("div", { className: "bg-background flex min-h-svh flex-col items-center justify-center p-6 md:p-10", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm md:max-w-3xl", children: /* @__PURE__ */ jsx(LoginForm, {}) }) });
}
const route35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: Login,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function Index() {
  return /* @__PURE__ */ jsx(NotFound, {});
}
const route36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BCfS5uA3.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/components-L3uqpAeb.js", "/assets/performance-BzrtDdss.js", "/assets/node-B7-pBh_n.js", "/assets/isBrowser-C0tq15AE.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-DNaeaQS_.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/components-L3uqpAeb.js", "/assets/performance-BzrtDdss.js", "/assets/node-B7-pBh_n.js", "/assets/isBrowser-C0tq15AE.js", "/assets/500-DznNHTcq.js", "/assets/index-BVjGJyoY.js", "/assets/button-nJ3DiPmc.js", "/assets/circle-plus-Bp428-Mi.js", "/assets/index-dhnn1sud.js", "/assets/checkbox-DJYn4jr2.js", "/assets/404-7SK4sLAH.js", "/assets/index-0B69M2cR.js", "/assets/try-parse-oHcphYqD.js", "/assets/index-DGdd_38J.js", "/assets/index-B7Nn8ntX.js", "/assets/index-Cuy4oVjc.js", "/assets/badge-DIbh675r.js", "/assets/input-BlF4CSdU.js"], "css": [] }, "routes/playground.dashboard.viewTransition": { "id": "routes/playground.dashboard.viewTransition", "parentId": "routes/playground.dashboard", "path": "viewTransition", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.dashboard.viewTransition-DmAhNct2.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/500-DznNHTcq.js", "/assets/get-default-title-B-i1CURY.js", "/assets/button-nJ3DiPmc.js"], "css": [] }, "routes/playground.article.post.clone.$id": { "id": "routes/playground.article.post.clone.$id", "parentId": "routes/playground.article.post", "path": "clone/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.article.post.clone._id-W7xqIOKx.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/500-DznNHTcq.js", "/assets/get-default-title-B-i1CURY.js", "/assets/playground.article.post.edit._id-zhyv-oYh.js", "/assets/components-L3uqpAeb.js", "/assets/button-nJ3DiPmc.js", "/assets/textarea-CHWGKRm-.js", "/assets/index-0B69M2cR.js", "/assets/index-Cuy4oVjc.js", "/assets/index-B7Nn8ntX.js", "/assets/index-DGdd_38J.js", "/assets/label-DMeu1U8J.js", "/assets/index-ans_9-if.js", "/assets/dayjs.min-DhVwsScJ.js", "/assets/card-9CeW0Jrm.js", "/assets/index-dhnn1sud.js", "/assets/checkbox-DJYn4jr2.js", "/assets/badge-DIbh675r.js", "/assets/input-BlF4CSdU.js", "/assets/post-Tv3N1-wS.js", "/assets/show-f_dlKDQI.js", "/assets/delete-D_LkkB4d.js", "/assets/clone-tm2bGuYp.js"], "css": [] }, "routes/playground.article.post.edit.$id": { "id": "routes/playground.article.post.edit.$id", "parentId": "routes/playground.article.post", "path": "edit/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.article.post.edit._id-CNBljClq.js", "imports": ["/assets/playground.article.post.edit._id-zhyv-oYh.js", "/assets/index-jG6TLAuK.js", "/assets/textarea-CHWGKRm-.js", "/assets/button-nJ3DiPmc.js", "/assets/index-0B69M2cR.js", "/assets/index-Cuy4oVjc.js", "/assets/index-B7Nn8ntX.js", "/assets/index-DGdd_38J.js", "/assets/components-L3uqpAeb.js", "/assets/500-DznNHTcq.js", "/assets/label-DMeu1U8J.js", "/assets/index-ans_9-if.js", "/assets/dayjs.min-DhVwsScJ.js", "/assets/card-9CeW0Jrm.js", "/assets/index-dhnn1sud.js", "/assets/checkbox-DJYn4jr2.js", "/assets/badge-DIbh675r.js", "/assets/input-BlF4CSdU.js", "/assets/post-Tv3N1-wS.js", "/assets/get-default-title-B-i1CURY.js", "/assets/show-f_dlKDQI.js", "/assets/delete-D_LkkB4d.js", "/assets/clone-tm2bGuYp.js"], "css": [] }, "routes/playground.article.post.show.$id": { "id": "routes/playground.article.post.show.$id", "parentId": "routes/playground.article.post", "path": "show/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.article.post.show._id-DZx0zK6u.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/dayjs.min-DhVwsScJ.js", "/assets/index-dhnn1sud.js", "/assets/500-DznNHTcq.js", "/assets/avatar-7s-Yg_xM.js", "/assets/badge-DIbh675r.js", "/assets/typography-NCQmnr0j.js", "/assets/post-Tv3N1-wS.js", "/assets/get-default-title-B-i1CURY.js", "/assets/components-L3uqpAeb.js", "/assets/mail-DQnRLKzy.js", "/assets/button-nJ3DiPmc.js", "/assets/delete-D_LkkB4d.js", "/assets/clone-tm2bGuYp.js", "/assets/checkbox-DJYn4jr2.js", "/assets/index-DGdd_38J.js", "/assets/index-B7Nn8ntX.js", "/assets/index-Cuy4oVjc.js", "/assets/index-0B69M2cR.js", "/assets/input-BlF4CSdU.js"], "css": [] }, "routes/playground.article.post._index": { "id": "routes/playground.article.post._index", "parentId": "routes/playground.article.post", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.article.post._index-u4Dw-xib.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/500-DznNHTcq.js", "/assets/dayjs.min-DhVwsScJ.js", "/assets/index-dhnn1sud.js", "/assets/index-Cuy4oVjc.js", "/assets/avatar-7s-Yg_xM.js", "/assets/badge-DIbh675r.js", "/assets/checkbox-DJYn4jr2.js", "/assets/index-0B69M2cR.js", "/assets/button-nJ3DiPmc.js", "/assets/playground.article.post.edit._id-zhyv-oYh.js", "/assets/post-Tv3N1-wS.js", "/assets/get-default-title-B-i1CURY.js", "/assets/components-L3uqpAeb.js", "/assets/circle-plus-Bp428-Mi.js", "/assets/export-DylKLw56.js", "/assets/show-f_dlKDQI.js", "/assets/index-B7Nn8ntX.js", "/assets/index-DGdd_38J.js", "/assets/input-BlF4CSdU.js", "/assets/textarea-CHWGKRm-.js", "/assets/label-DMeu1U8J.js", "/assets/index-ans_9-if.js", "/assets/card-9CeW0Jrm.js", "/assets/delete-D_LkkB4d.js", "/assets/clone-tm2bGuYp.js"], "css": [] }, "routes/playground.article.post.create": { "id": "routes/playground.article.post.create", "parentId": "routes/playground.article.post", "path": "create", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.article.post.create-CGeQXhCw.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/500-DznNHTcq.js", "/assets/get-default-title-B-i1CURY.js", "/assets/playground.article.post.edit._id-zhyv-oYh.js", "/assets/button-nJ3DiPmc.js", "/assets/textarea-CHWGKRm-.js", "/assets/index-0B69M2cR.js", "/assets/index-Cuy4oVjc.js", "/assets/index-B7Nn8ntX.js", "/assets/index-DGdd_38J.js", "/assets/components-L3uqpAeb.js", "/assets/label-DMeu1U8J.js", "/assets/index-ans_9-if.js", "/assets/dayjs.min-DhVwsScJ.js", "/assets/card-9CeW0Jrm.js", "/assets/index-dhnn1sud.js", "/assets/checkbox-DJYn4jr2.js", "/assets/badge-DIbh675r.js", "/assets/input-BlF4CSdU.js", "/assets/post-Tv3N1-wS.js", "/assets/show-f_dlKDQI.js", "/assets/delete-D_LkkB4d.js", "/assets/clone-tm2bGuYp.js"], "css": [] }, "routes/api.auth.$provider.callback": { "id": "routes/api.auth.$provider.callback", "parentId": "root", "path": "api/auth/:provider/callback", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.auth._provider.callback-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/playground.dashboard.health": { "id": "routes/playground.dashboard.health", "parentId": "routes/playground.dashboard", "path": "health", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.dashboard.health-BJCzrJns.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/500-DznNHTcq.js", "/assets/button-nJ3DiPmc.js", "/assets/get-default-title-B-i1CURY.js"], "css": [] }, "routes/playground.dashboard.about": { "id": "routes/playground.dashboard.about", "parentId": "routes/playground.dashboard", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.dashboard.about-BgFsMmSD.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/500-DznNHTcq.js", "/assets/badge-DIbh675r.js", "/assets/button-nJ3DiPmc.js", "/assets/checkbox-DJYn4jr2.js", "/assets/sidebar-BXujW_xy.js", "/assets/label-DMeu1U8J.js", "/assets/index-Cuy4oVjc.js", "/assets/components-L3uqpAeb.js", "/assets/try-parse-oHcphYqD.js", "/assets/gallery-vertical-end-BA4ENofB.js", "/assets/index-DGdd_38J.js", "/assets/index-B7Nn8ntX.js", "/assets/input-BlF4CSdU.js"], "css": [] }, "routes/system.account.role._index": { "id": "routes/system.account.role._index", "parentId": "routes/system.account.role", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.account.role._index-DgqmvFt_.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/500-DznNHTcq.js", "/assets/dayjs.min-DhVwsScJ.js", "/assets/index-dhnn1sud.js", "/assets/avatar-7s-Yg_xM.js", "/assets/checkbox-DJYn4jr2.js", "/assets/index-0B69M2cR.js", "/assets/button-nJ3DiPmc.js", "/assets/get-default-title-B-i1CURY.js", "/assets/components-L3uqpAeb.js", "/assets/show-f_dlKDQI.js", "/assets/export-DylKLw56.js", "/assets/index-Cuy4oVjc.js", "/assets/index-B7Nn8ntX.js", "/assets/index-DGdd_38J.js", "/assets/badge-DIbh675r.js", "/assets/input-BlF4CSdU.js"], "css": [] }, "routes/system.account.user._index": { "id": "routes/system.account.user._index", "parentId": "routes/system.account.user", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.account.user._index-BM2v_vWU.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/500-DznNHTcq.js", "/assets/dayjs.min-DhVwsScJ.js", "/assets/index-dhnn1sud.js", "/assets/badge-DIbh675r.js", "/assets/checkbox-DJYn4jr2.js", "/assets/index-0B69M2cR.js", "/assets/button-nJ3DiPmc.js", "/assets/get-default-title-B-i1CURY.js", "/assets/components-L3uqpAeb.js", "/assets/show-f_dlKDQI.js", "/assets/delete-D_LkkB4d.js", "/assets/export-DylKLw56.js", "/assets/index-Cuy4oVjc.js", "/assets/index-B7Nn8ntX.js", "/assets/index-DGdd_38J.js", "/assets/input-BlF4CSdU.js"], "css": [] }, "routes/api.auth.$provider._index": { "id": "routes/api.auth.$provider._index", "parentId": "root", "path": "api/auth/:provider", "index": true, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.auth._provider._index-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/playground.dashboard.demo": { "id": "routes/playground.dashboard.demo", "parentId": "routes/playground.dashboard", "path": "demo", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.dashboard.demo-B161N74j.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/textarea-CHWGKRm-.js", "/assets/500-DznNHTcq.js", "/assets/index-ans_9-if.js", "/assets/index-0B69M2cR.js", "/assets/button-nJ3DiPmc.js", "/assets/input-BlF4CSdU.js", "/assets/index-Cuy4oVjc.js", "/assets/index-B7Nn8ntX.js", "/assets/index-DGdd_38J.js", "/assets/typography-NCQmnr0j.js", "/assets/post-Tv3N1-wS.js", "/assets/get-default-title-B-i1CURY.js", "/assets/components-L3uqpAeb.js", "/assets/label-DMeu1U8J.js"], "css": [] }, "routes/system.admin.log.show.$id": { "id": "routes/system.admin.log.show.$id", "parentId": "routes/system.admin.log", "path": "show/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.admin.log.show._id-BBklLUEp.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/500-DznNHTcq.js", "/assets/avatar-7s-Yg_xM.js", "/assets/badge-DIbh675r.js", "/assets/label-DMeu1U8J.js", "/assets/typography-NCQmnr0j.js", "/assets/log-CzRNw-rf.js", "/assets/components-L3uqpAeb.js", "/assets/mail-DQnRLKzy.js", "/assets/button-nJ3DiPmc.js", "/assets/index-B7Nn8ntX.js", "/assets/index-DGdd_38J.js"], "css": [] }, "routes/playground.article.post": { "id": "routes/playground.article.post", "parentId": "root", "path": "playground/article/post", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.article.post-CLqlcHsB.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/500-DznNHTcq.js", "/assets/switcher-role-C1k9mqz6.js", "/assets/button-nJ3DiPmc.js", "/assets/components-L3uqpAeb.js", "/assets/checkbox-DJYn4jr2.js", "/assets/index-DGdd_38J.js", "/assets/index-B7Nn8ntX.js", "/assets/index-Cuy4oVjc.js", "/assets/index-dhnn1sud.js", "/assets/index-0B69M2cR.js", "/assets/badge-DIbh675r.js", "/assets/input-BlF4CSdU.js", "/assets/index-BVjGJyoY.js", "/assets/sidebar-BXujW_xy.js", "/assets/isBrowser-C0tq15AE.js", "/assets/node-B7-pBh_n.js", "/assets/avatar-7s-Yg_xM.js", "/assets/gallery-vertical-end-BA4ENofB.js"], "css": [] }, "routes/system.admin.log._index": { "id": "routes/system.admin.log._index", "parentId": "routes/system.admin.log", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.admin.log._index-DLpy5Zep.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/500-DznNHTcq.js", "/assets/dayjs.min-DhVwsScJ.js", "/assets/index-dhnn1sud.js", "/assets/avatar-7s-Yg_xM.js", "/assets/badge-DIbh675r.js", "/assets/checkbox-DJYn4jr2.js", "/assets/index-0B69M2cR.js", "/assets/button-nJ3DiPmc.js", "/assets/log-CzRNw-rf.js", "/assets/get-default-title-B-i1CURY.js", "/assets/components-L3uqpAeb.js", "/assets/show-f_dlKDQI.js", "/assets/export-DylKLw56.js", "/assets/index-Cuy4oVjc.js", "/assets/index-B7Nn8ntX.js", "/assets/index-DGdd_38J.js", "/assets/input-BlF4CSdU.js"], "css": [] }, "routes/api.permissions.switch": { "id": "routes/api.permissions.switch", "parentId": "root", "path": "api/permissions/switch", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.permissions.switch-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/playground.dashboard": { "id": "routes/playground.dashboard", "parentId": "root", "path": "playground/dashboard", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.dashboard-wdeRbdKe.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/500-DznNHTcq.js", "/assets/switcher-role-C1k9mqz6.js", "/assets/button-nJ3DiPmc.js", "/assets/components-L3uqpAeb.js", "/assets/checkbox-DJYn4jr2.js", "/assets/index-DGdd_38J.js", "/assets/index-B7Nn8ntX.js", "/assets/index-Cuy4oVjc.js", "/assets/index-dhnn1sud.js", "/assets/index-0B69M2cR.js", "/assets/badge-DIbh675r.js", "/assets/input-BlF4CSdU.js", "/assets/index-BVjGJyoY.js", "/assets/sidebar-BXujW_xy.js", "/assets/isBrowser-C0tq15AE.js", "/assets/node-B7-pBh_n.js", "/assets/avatar-7s-Yg_xM.js", "/assets/gallery-vertical-end-BA4ENofB.js"], "css": [] }, "routes/api.set-preferences": { "id": "routes/api.set-preferences", "parentId": "root", "path": "api/set-preferences", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.set-preferences-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/system.account.role": { "id": "routes/system.account.role", "parentId": "root", "path": "system/account/role", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.account.role-BLIRNCrr.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/500-DznNHTcq.js", "/assets/switcher-role-C1k9mqz6.js", "/assets/button-nJ3DiPmc.js", "/assets/components-L3uqpAeb.js", "/assets/checkbox-DJYn4jr2.js", "/assets/index-DGdd_38J.js", "/assets/index-B7Nn8ntX.js", "/assets/index-Cuy4oVjc.js", "/assets/index-dhnn1sud.js", "/assets/index-0B69M2cR.js", "/assets/badge-DIbh675r.js", "/assets/input-BlF4CSdU.js", "/assets/index-BVjGJyoY.js", "/assets/sidebar-BXujW_xy.js", "/assets/isBrowser-C0tq15AE.js", "/assets/node-B7-pBh_n.js", "/assets/avatar-7s-Yg_xM.js", "/assets/gallery-vertical-end-BA4ENofB.js"], "css": [] }, "routes/system.account.user": { "id": "routes/system.account.user", "parentId": "root", "path": "system/account/user", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.account.user-CLqlcHsB.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/500-DznNHTcq.js", "/assets/switcher-role-C1k9mqz6.js", "/assets/button-nJ3DiPmc.js", "/assets/components-L3uqpAeb.js", "/assets/checkbox-DJYn4jr2.js", "/assets/index-DGdd_38J.js", "/assets/index-B7Nn8ntX.js", "/assets/index-Cuy4oVjc.js", "/assets/index-dhnn1sud.js", "/assets/index-0B69M2cR.js", "/assets/badge-DIbh675r.js", "/assets/input-BlF4CSdU.js", "/assets/index-BVjGJyoY.js", "/assets/sidebar-BXujW_xy.js", "/assets/isBrowser-C0tq15AE.js", "/assets/node-B7-pBh_n.js", "/assets/avatar-7s-Yg_xM.js", "/assets/gallery-vertical-end-BA4ENofB.js"], "css": [] }, "routes/api.$resource.bulk": { "id": "routes/api.$resource.bulk", "parentId": "routes/api.$resource", "path": "bulk", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api._resource.bulk-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.image-resize.$": { "id": "routes/api.image-resize.$", "parentId": "root", "path": "api/image-resize/*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.image-resize._-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.$resource.$id": { "id": "routes/api.$resource.$id", "parentId": "routes/api.$resource", "path": ":id", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api._resource._id-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/system.admin.log": { "id": "routes/system.admin.log", "parentId": "root", "path": "system/admin/log", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.admin.log-CLqlcHsB.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/500-DznNHTcq.js", "/assets/switcher-role-C1k9mqz6.js", "/assets/button-nJ3DiPmc.js", "/assets/components-L3uqpAeb.js", "/assets/checkbox-DJYn4jr2.js", "/assets/index-DGdd_38J.js", "/assets/index-B7Nn8ntX.js", "/assets/index-Cuy4oVjc.js", "/assets/index-dhnn1sud.js", "/assets/index-0B69M2cR.js", "/assets/badge-DIbh675r.js", "/assets/input-BlF4CSdU.js", "/assets/index-BVjGJyoY.js", "/assets/sidebar-BXujW_xy.js", "/assets/isBrowser-C0tq15AE.js", "/assets/node-B7-pBh_n.js", "/assets/avatar-7s-Yg_xM.js", "/assets/gallery-vertical-end-BA4ENofB.js"], "css": [] }, "routes/api.auth.logout": { "id": "routes/api.auth.logout", "parentId": "root", "path": "api/auth/logout", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.auth.logout-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/password-forgot": { "id": "routes/password-forgot", "parentId": "root", "path": "password-forgot", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/password-forgot-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/password-update": { "id": "routes/password-update", "parentId": "root", "path": "password-update", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/password-update-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.$resource": { "id": "routes/api.$resource", "parentId": "root", "path": "api/:resource", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api._resource-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.send.code": { "id": "routes/api.send.code", "parentId": "root", "path": "api/send/code", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.send.code-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.auth.me": { "id": "routes/api.auth.me", "parentId": "root", "path": "api/auth/me", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.auth.me-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.publish": { "id": "routes/api.publish", "parentId": "root", "path": "api/publish", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.publish-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/register": { "id": "routes/register", "parentId": "root", "path": "register", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/register-DrPjGJ9T.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/index-ans_9-if.js", "/assets/button-nJ3DiPmc.js", "/assets/input-BlF4CSdU.js", "/assets/label-DMeu1U8J.js", "/assets/tcsk-oauth2-Dw0hDdJ6.js", "/assets/components-L3uqpAeb.js", "/assets/gallery-vertical-end-BA4ENofB.js", "/assets/index-DGdd_38J.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/login-CR9lIlVi.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/index-ans_9-if.js", "/assets/button-nJ3DiPmc.js", "/assets/card-9CeW0Jrm.js", "/assets/input-BlF4CSdU.js", "/assets/label-DMeu1U8J.js", "/assets/tcsk-oauth2-Dw0hDdJ6.js", "/assets/components-L3uqpAeb.js", "/assets/index-DGdd_38J.js"], "css": [] }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_-BXZH7IK6.js", "imports": ["/assets/index-jG6TLAuK.js", "/assets/404-7SK4sLAH.js", "/assets/button-nJ3DiPmc.js", "/assets/components-L3uqpAeb.js"], "css": [] } }, "url": "/assets/manifest-30104837.js", "version": "30104837" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "v3_routeConfig": false, "v3_singleFetch": true, "v3_lazyRouteDiscovery": true, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/playground.dashboard.viewTransition": {
    id: "routes/playground.dashboard.viewTransition",
    parentId: "routes/playground.dashboard",
    path: "viewTransition",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/playground.article.post.clone.$id": {
    id: "routes/playground.article.post.clone.$id",
    parentId: "routes/playground.article.post",
    path: "clone/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/playground.article.post.edit.$id": {
    id: "routes/playground.article.post.edit.$id",
    parentId: "routes/playground.article.post",
    path: "edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/playground.article.post.show.$id": {
    id: "routes/playground.article.post.show.$id",
    parentId: "routes/playground.article.post",
    path: "show/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/playground.article.post._index": {
    id: "routes/playground.article.post._index",
    parentId: "routes/playground.article.post",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route5
  },
  "routes/playground.article.post.create": {
    id: "routes/playground.article.post.create",
    parentId: "routes/playground.article.post",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/api.auth.$provider.callback": {
    id: "routes/api.auth.$provider.callback",
    parentId: "root",
    path: "api/auth/:provider/callback",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/playground.dashboard.health": {
    id: "routes/playground.dashboard.health",
    parentId: "routes/playground.dashboard",
    path: "health",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/playground.dashboard.about": {
    id: "routes/playground.dashboard.about",
    parentId: "routes/playground.dashboard",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/system.account.role._index": {
    id: "routes/system.account.role._index",
    parentId: "routes/system.account.role",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route10
  },
  "routes/system.account.user._index": {
    id: "routes/system.account.user._index",
    parentId: "routes/system.account.user",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route11
  },
  "routes/api.auth.$provider._index": {
    id: "routes/api.auth.$provider._index",
    parentId: "root",
    path: "api/auth/:provider",
    index: true,
    caseSensitive: void 0,
    module: route12
  },
  "routes/playground.dashboard.demo": {
    id: "routes/playground.dashboard.demo",
    parentId: "routes/playground.dashboard",
    path: "demo",
    index: void 0,
    caseSensitive: void 0,
    module: route13
  },
  "routes/system.admin.log.show.$id": {
    id: "routes/system.admin.log.show.$id",
    parentId: "routes/system.admin.log",
    path: "show/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route14
  },
  "routes/playground.article.post": {
    id: "routes/playground.article.post",
    parentId: "root",
    path: "playground/article/post",
    index: void 0,
    caseSensitive: void 0,
    module: route15
  },
  "routes/system.admin.log._index": {
    id: "routes/system.admin.log._index",
    parentId: "routes/system.admin.log",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route16
  },
  "routes/api.permissions.switch": {
    id: "routes/api.permissions.switch",
    parentId: "root",
    path: "api/permissions/switch",
    index: void 0,
    caseSensitive: void 0,
    module: route17
  },
  "routes/playground.dashboard": {
    id: "routes/playground.dashboard",
    parentId: "root",
    path: "playground/dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: route18
  },
  "routes/api.set-preferences": {
    id: "routes/api.set-preferences",
    parentId: "root",
    path: "api/set-preferences",
    index: void 0,
    caseSensitive: void 0,
    module: route19
  },
  "routes/system.account.role": {
    id: "routes/system.account.role",
    parentId: "root",
    path: "system/account/role",
    index: void 0,
    caseSensitive: void 0,
    module: route20
  },
  "routes/system.account.user": {
    id: "routes/system.account.user",
    parentId: "root",
    path: "system/account/user",
    index: void 0,
    caseSensitive: void 0,
    module: route21
  },
  "routes/api.$resource.bulk": {
    id: "routes/api.$resource.bulk",
    parentId: "routes/api.$resource",
    path: "bulk",
    index: void 0,
    caseSensitive: void 0,
    module: route22
  },
  "routes/api.image-resize.$": {
    id: "routes/api.image-resize.$",
    parentId: "root",
    path: "api/image-resize/*",
    index: void 0,
    caseSensitive: void 0,
    module: route23
  },
  "routes/api.$resource.$id": {
    id: "routes/api.$resource.$id",
    parentId: "routes/api.$resource",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: route24
  },
  "routes/system.admin.log": {
    id: "routes/system.admin.log",
    parentId: "root",
    path: "system/admin/log",
    index: void 0,
    caseSensitive: void 0,
    module: route25
  },
  "routes/api.auth.logout": {
    id: "routes/api.auth.logout",
    parentId: "root",
    path: "api/auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: route26
  },
  "routes/password-forgot": {
    id: "routes/password-forgot",
    parentId: "root",
    path: "password-forgot",
    index: void 0,
    caseSensitive: void 0,
    module: route27
  },
  "routes/password-update": {
    id: "routes/password-update",
    parentId: "root",
    path: "password-update",
    index: void 0,
    caseSensitive: void 0,
    module: route28
  },
  "routes/api.$resource": {
    id: "routes/api.$resource",
    parentId: "root",
    path: "api/:resource",
    index: void 0,
    caseSensitive: void 0,
    module: route29
  },
  "routes/api.send.code": {
    id: "routes/api.send.code",
    parentId: "root",
    path: "api/send/code",
    index: void 0,
    caseSensitive: void 0,
    module: route30
  },
  "routes/api.auth.me": {
    id: "routes/api.auth.me",
    parentId: "root",
    path: "api/auth/me",
    index: void 0,
    caseSensitive: void 0,
    module: route31
  },
  "routes/api.publish": {
    id: "routes/api.publish",
    parentId: "root",
    path: "api/publish",
    index: void 0,
    caseSensitive: void 0,
    module: route32
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: route33
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route34
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: route35
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route36
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
