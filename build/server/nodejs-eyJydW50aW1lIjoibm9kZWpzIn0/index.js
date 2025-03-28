var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable, createCookieSessionStorage, redirect as redirect$1, data as data$1 } from "@remix-run/node";
import { RemixServer, Link as Link$1, useRouteError, isRouteErrorResponse, useNavigate, useNavigation as useNavigation$1, Outlet, data, useLoaderData, Meta, Links, ScrollRestoration, Scripts, useFetcher, useRouteLoaderData, useSearchParams, useMatches as useMatches$1, useActionData, useSubmit, Form as Form$1, useViewTransitionState } from "@remix-run/react";
import * as Sentry from "@sentry/remix";
import { withSentry, captureRemixErrorBoundaryError } from "@sentry/remix";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import * as SentryProfiling from "@sentry/profiling-node";
import { useBack, useTranslate, useResource, useRouterType, useGetToPath, useGo, useDelete, useNavigation, useUserFriendlyName, useCanWithoutCache, Refine, useRouterContext, useLink, useBreadcrumb, useRefineContext, matchResourceFromRoute, useLogout, useMenu, useResourceParams, useTranslation, CanAccess, useCreateButton, useSaveButton, useCan, useParsed, useDeleteButton, useEditButton, useExportButton, useExport, useListButton, AccessControlContext, useMutationMode, useWarnAboutChange, pickNotDeprecated, useTable as useTable$1, useModal, useCloneButton, useShowButton, useDeleteMany, useSelect, useImport, useImportButton, useCustom, useNotification, useUpdate } from "@refinedev/core";
import routerProvider, { UnsavedChangesNotifier, parseTableParams } from "@refinedev/remix-router";
import { Analytics } from "@vercel/analytics/remix";
import { SpeedInsights } from "@vercel/speed-insights/remix";
import { Loader2, ListIcon, CirclePlus, EyeIcon, Pencil, Trash2Icon, HomeIcon, BicepsFlexed, AudioLines, Baby, Loader as Loader$1, ChevronRight, CheckIcon, XIcon, PanelLeftIcon, ChevronsUpDown, LogOut, GalleryVerticalEnd, Plus, Sun, Moon, Bug, Bookmark, Activity, Fullscreen, Languages, FilterX, Filter, Search, Eye, Type, LeafyGreen, User2, CalendarIcon, IdCard, SearchIcon, CheckCheck, Undo2, Download, CopyCheck, Trash2, ChevronLeft, FilterIcon, ChevronDownIcon, ChevronUpIcon, Clock, Lightbulb, GripVertical, Edit, Check, Info, AlertCircle, Ban, ClockIcon, MailIcon, CircleIcon, Link2, Upload, Paperclip, Star, MoreHorizontal, Settings2, FileText, Link as Link$2, Copy, CornerUpRight, CornerUpLeft, LineChart, Trash, Bell, ArrowUp, ArrowDown, ChevronDown } from "lucide-react";
import nProgress from "nprogress";
import * as React from "react";
import React__default, { useRef, useContext, useState, useEffect, createContext, Fragment as Fragment$1, cloneElement, useCallback, useMemo, isValidElement, memo, lazy, Suspense } from "react";
import { useTheme, Theme, ThemeProvider, PreventFlashOnWrongTheme } from "remix-themes";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useAsyncEffect, useDebounceFn } from "ahooks";
import i18next, { t, use, changeLanguage } from "i18next";
import { useMatches, KBarResults, KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, KBarContext, VisualState, useRegisterActions, createAction, KBarProvider, Priority, useKBar } from "kbar";
import { Toaster as Toaster$1, toast } from "sonner";
import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";
import Ably from "ably/promises.js";
import { hmac } from "@noble/hashes/hmac";
import { sha256 } from "@noble/hashes/sha256";
import { bytesToHex } from "@noble/hashes/utils";
import queryString from "query-string";
import invariant from "tiny-invariant";
import { deserialize, serialize } from "superjson";
import axios, { AxiosHeaders } from "axios";
import Cookies from "js-cookie";
import { initReactI18next } from "react-i18next";
import "socket.io-client";
import { newModelFromString, newEnforcer } from "casbin";
import { PrismaAdapter } from "casbin-prisma-adapter";
import { PrismaClient, Prisma, LogAction, AuditStatus } from "@prisma/client";
import { enhance } from "@zenstackhq/runtime";
import bcrypt from "bcryptjs";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownMenuTrigger as DropdownMenuTrigger$1 } from "@radix-ui/react-dropdown-menu";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { useMonaco, Editor, DiffEditor, loader as loader$V } from "@monaco-editor/react";
import dayjs from "dayjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useModalForm, useStepsForm } from "@refinedev/react-hook-form";
import { isEqual, pick } from "es-toolkit";
import { CaretSortIcon, CheckIcon as CheckIcon$1, DotsHorizontalIcon, DotsVerticalIcon, DoubleArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, DoubleArrowRightIcon, CaretUpIcon, CaretDownIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { PopoverTrigger as PopoverTrigger$1 } from "@radix-ui/react-popover";
import { Command as Command$1 } from "cmdk";
import { FormProvider, Controller, useFormContext, useFormState, useForm as useForm$1, useWatch } from "react-hook-form";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from "@tanstack/react-table";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as SelectPrimitive from "@radix-ui/react-select";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import { useSensors, useSensor, PointerSensor, KeyboardSensor, DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { sortableKeyboardCoordinates, SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as RechartsPrimitive from "recharts";
import { AreaChart, CartesianGrid, XAxis, Area, BarChart, Bar } from "recharts";
import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { ObjectParser } from "@edgefirst-dev/data/parser";
import { OAuth2Client, OAuth2RequestError, generateState, generateCodeVerifier, CodeChallengeMethod } from "arctic";
import createDebug from "debug";
import { Strategy } from "remix-auth/strategy";
import { SetCookie, Cookie } from "@mjackson/headers";
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
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }),
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
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }),
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
const handleError$1 = Sentry.wrapHandleErrorWithSentry((error, { request }) => {
  if (!request.signal.aborted) {
    console.error("@entry.server.handleError", error);
  }
});
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  handleError: handleError$1
}, Symbol.toStringTag, { value: "Module" }));
const nProgressStyles = "/assets/nprogress-BgDCIyLK.css";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const LoadingIcon = React__default.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(Loader2, { ref, className: cn("h-4 w-4 animate-spin", className), ...props });
});
LoadingIcon.displayName = "LoadingIcon";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-8 px-3 py-2 has-[>svg]:px-3",
        sm: "h-6 rounded-md px-2 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  icon,
  loading = false,
  asChild = false,
  children,
  disabled,
  ...props
}) {
  const Icon = React.useMemo(() => {
    return loading ? /* @__PURE__ */ jsx(LoadingIcon, {}) : React.isValidElement(icon) ? icon : null;
  }, [icon, loading]);
  const Comp = asChild ? Slot : "button";
  const buttonProps = !asChild && {
    ...props,
    "data-slot": "button",
    disabled,
    className: cn(buttonVariants({ variant, size, className }))
  };
  return /* @__PURE__ */ jsx(Comp, { ...buttonProps, children: size === "icon" ? loading ? /* @__PURE__ */ jsx(Loader2, {}) : Icon || children : /* @__PURE__ */ jsxs(Fragment, { children: [
    Icon,
    children
  ] }) });
}
function NotFound({ message }) {
  const back = useBack();
  return /* @__PURE__ */ jsx("div", { className: "relative h-screen font-['sans-serif']", children: /* @__PURE__ */ jsxs("div", { className: "absolute top-1/2 left-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-center leading-[1.4]", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-[-1] mx-auto mt-0 mb-5 h-[200px]", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-forceground absolute top-1/2 left-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase", children: "Oops!" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-forceground bg-background absolute inset-x-0 bottom-0 m-auto inline-block px-[5px] pt-5 text-[28px] font-normal capitalize", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-background absolute -top-1 -right-1 -bottom-1 -left-1 z-10 blur-xl" }),
        "404 - The Page can't be found"
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mb-8 text-xl text-red-500", children: "Sorry, You are looking for something that isn't here." }),
    /* @__PURE__ */ jsx(Button, { onClick: back, className: "mr-3", children: "Go Back" }),
    /* @__PURE__ */ jsx(Link$1, { prefetch: "intent", viewTransition: true, to: "/", children: /* @__PURE__ */ jsx(Button, { children: "Back To Home" }) })
  ] }) });
}
function useMountEffect(fn) {
  const mountedRef = useRef(false);
  useAsyncEffect(async () => {
    if (mountedRef.current) {
      return;
    }
    mountedRef.current = true;
    return fn();
  }, [fn]);
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
    /* @__PURE__ */ jsx(Button, { onClick: () => location.reload(), children: "Retry" })
  ] }) });
}
function canUseDOM() {
  return typeof document !== "undefined";
}
let dataResources = canUseDOM() ? window.__MENUS__ || [] : [];
let dashboardResource = ((_a = dataResources.find((r) => r.list)) == null ? void 0 : _a.list) || "/404";
const cannotDisableMenus = ["system", "admin", "menu"];
const setDataResources = (resources) => {
  var _a2;
  dataResources = resources;
  dashboardResource = ((_a2 = resources.find((r) => r.list)) == null ? void 0 : _a2.list) || "/404";
};
const getDashboardResource = () => dashboardResource;
const ResultItem = ({ action: action2, active, currentRootActionId }) => {
  var _a2;
  const ancestors = React__default.useMemo(() => {
    if (!currentRootActionId) return action2.ancestors;
    const index = action2.ancestors.findIndex((ancestor) => ancestor.id === currentRootActionId);
    return action2.ancestors.slice(index + 1);
  }, [action2.ancestors, currentRootActionId]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
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
        ((_a2 = action2.shortcut) == null ? void 0 : _a2.length) ? /* @__PURE__ */ jsx(
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
};
ResultItem.displayName = "ResultItem";
const groupNameStyle = {
  padding: "8px 0",
  margin: "0 16px",
  fontSize: "14px",
  fontWeight: "bold",
  opacity: 0.5,
  borderBottom: "1px solid rgba(0 0 0 / 0.1)"
};
const RenderResults = () => {
  const { results, rootActionId } = useMatches();
  return /* @__PURE__ */ jsx(
    KBarResults,
    {
      items: results,
      onRender: ({ item, active }) => {
        return typeof item === "string" ? /* @__PURE__ */ jsxs("div", { style: groupNameStyle, children: [
          "Resource.",
          item
        ] }) : /* @__PURE__ */ jsx(ResultItem, { action: item, active, currentRootActionId: rootActionId });
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
    var _a2, _b, _c, _d, _e, _f;
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
    const label = ((_a2 = resource == null ? void 0 : resource.meta) == null ? void 0 : _a2.label) ?? ((_b = resource == null ? void 0 : resource.options) == null ? void 0 : _b.label) ?? deprecatedLabel;
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
const RefineKbar = ({ commandBarProps }) => {
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
    section: "Suggestions",
    name: t("backHome"),
    icon: /* @__PURE__ */ jsx(HomeIcon, { size: 16 }),
    priority: Priority.HIGH,
    perform: () => {
      navigate(dashboardResource);
    }
  });
  useRegisterActions([backToHomeAction]);
};
const RefineKbarCustom = () => {
  useBackToHomeKbarActions();
  return /* @__PURE__ */ jsx(RefineKbar, {});
};
const Toaster = ({ ...props }) => {
  const [theme = "system"] = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      theme,
      className: "toaster group",
      style: { "--width": "414px" },
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          icon: "self-start mt-0.5"
        }
      },
      ...props
    }
  );
};
const errors = {
  invalid_type: "预期输入为{{expected}}，而输入为{{received}}",
  invalid_type_received_undefined: "必填",
  invalid_type_received_null: "必填",
  invalid_literal: "错误的字面量值，请输入 {{expected}}",
  unrecognized_keys: "对象中的键无法识别: {{- keys}}",
  invalid_union: "不满足联合类型中的选项",
  invalid_union_discriminator: "标识值无法被区分。请输入 {{- options}}",
  invalid_enum_value: "错误的枚举值 '{{received}}'。请输入 {{- options}}",
  invalid_arguments: "错误的函数参数格式",
  invalid_return_type: "错误的函数返回值格式",
  invalid_date: "错误的日期格式",
  custom: "错误的输入格式",
  invalid_intersection_types: "交叉类型结果无法被合并",
  not_multiple_of: "数值必须是 {{multipleOf}} 的倍数",
  not_finite: "数值必须有限",
  invalid_string: {
    email: "错误的{{validation}}格式",
    url: "错误的{{validation}}格式",
    uuid: "错误的{{validation}}格式",
    cuid: "错误的{{validation}}格式",
    regex: "错误的格式",
    datetime: "错误的{{validation}}格式",
    startsWith: '文本必须以 "{{startsWith}}" 开头',
    endsWith: '文本必须以 "{{endsWith}}" 结尾'
  },
  too_small: {
    array: {
      exact: "数组元素必须为 {{minimum}} 个",
      inclusive: "数组元素不得少于 {{minimum}} 个",
      not_inclusive: "数组元素必须超过 {{minimum}} 个"
    },
    string: {
      exact: "文本长度必须为 {{minimum}} 个字符",
      inclusive: "文本长度不得少于 {{minimum}} 个字符",
      not_inclusive: "文本长度必须超过 {{minimum}} 个字符"
    },
    number: {
      exact: "数值必须为 {{minimum}}",
      inclusive: "数值不得小于 {{minimum}}",
      not_inclusive: "数值必须大于 {{minimum}}"
    },
    set: {
      exact: "错误的输入格式",
      inclusive: "错误的输入格式",
      not_inclusive: "错误的输入格式"
    },
    date: {
      exact: "日期必须为 {{- minimum, datetime}}",
      inclusive: "日期不得晚于 {{- minimum, datetime}}",
      not_inclusive: "日期必须早于 {{- minimum, datetime}}"
    }
  },
  too_big: {
    array: {
      exact: "数组元素必须为 {{maximum}} 个",
      inclusive: "数组元素不得多于 {{maximum}} 个",
      not_inclusive: "数组元素必须少于 {{maximum}} 个"
    },
    string: {
      exact: "文本长度必须为 {{maximum}} 个字符",
      inclusive: "文本长度不得多于 {{maximum}} 个字符",
      not_inclusive: "文本长度必须少于 {{maximum}} 个字符"
    },
    number: {
      exact: "数值必须为 {{maximum}}",
      inclusive: "数值不得大于 {{maximum}}",
      not_inclusive: "数值必须小于 {{maximum}}"
    },
    set: {
      exact: "错误的输入格式",
      inclusive: "错误的输入格式",
      not_inclusive: "错误的输入格式"
    },
    date: {
      exact: "日期必须为 {{- maximum, datetime}}",
      inclusive: "日期不得早于 {{- maximum, datetime}}",
      not_inclusive: "日期必须晚于 {{- maximum, datetime}}"
    }
  }
};
const validations = {
  email: "邮件",
  url: "链接",
  uuid: "uuid",
  cuid: "cuid",
  regex: "正则表达式",
  datetime: "日期时间"
};
const types = {
  "function": "函数",
  number: "数字",
  string: "字符串",
  nan: "非数",
  integer: "整数",
  float: "浮点数",
  boolean: "布尔值",
  date: "日期",
  bigint: "大整数",
  "undefined": "未定义",
  symbol: "符号",
  "null": "空对象",
  array: "数组",
  object: "对象",
  unknown: "未知",
  promise: "Promise",
  "void": "空",
  never: "不存在",
  map: "字典",
  set: "集合"
};
const translation = {
  errors,
  validations,
  types
};
const enTranslation = {
  backHome: "Back to home",
  deleteAlert: "This action cannot be undone!",
  menus: {
    playground: "playground",
    dashboard: "dashboard",
    about: "about",
    demo: "demo",
    demoViewTransition: "demo ViewTransition",
    article: "article",
    post: "post",
    category: "category",
    system: "system",
    account: "account",
    user: "user",
    role: "role",
    admin: "admin",
    casbinRule: "permission",
    log: "log",
    frontRoute: "front route",
    frontRouteProject: "project",
    frontRouteModule: "module",
    "auditRecord/applyRole": "applyRole"
  },
  pages: {
    about: {
      title: "Full-stack WEB framework",
      description: "Focus on building data-intensive web applications more quickly and easily, while providing a fast, smooth user experience.",
      features1: "Front-back unified architecture",
      features2: "SSR server-side rendering",
      features3: "Parallel routing loading",
      features4: "CRUD development simplified",
      features5: "State persistence",
      features6: "Authentication",
      features7: "Access control",
      features8: "Audit log",
      features9: "Real-time data",
      features10: "Multi-language",
      features11: "Theme switch"
    },
    login: {
      title: "Welcome back",
      description: "Login to your OSS Inc. account",
      signin: "Sign in",
      signup: "Sign up",
      divider: "or",
      noAccount: "Don’t have an account?",
      fields: {
        email: "Email",
        password: "Password"
      },
      buttons: {
        submit: "Login",
        submitWithTcsk: "Continue with TCSK",
        forgotPassword: "Forgot password?",
        rememberMe: "Remember me"
      },
      errors: {
        validEmail: "Invalid email address",
        requiredEmail: "Email is required",
        requiredPassword: "Password is required"
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
      haveAccount: "Already have an account?",
      signin: "Sign in",
      fields: {
        email: "Email",
        validateCode: "Validation Code",
        password: "Password"
      },
      errors: {
        validEmail: "Invalid email address",
        requiredEmail: "Email is required",
        requiredPassword: "Password is required"
      },
      buttons: {
        submit: "Register"
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
      resource404: "Are you sure you have created the {{resource}} resource."
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
    export: "Export",
    clone: "Clone",
    notAccessTitle: "You don't have permission to access",
    back: "Back",
    columns: "Columns",
    toggleColumns: "Toggle Columns",
    activeToggle: "Active / Disable"
  },
  warnWhenUnsavedChanges: "Are you sure you want to leave? You have unsaved changes.",
  notifications: {
    success: "Successful",
    error: "Error (status code: {{statusCode}})",
    undoable: "You have {{seconds}} seconds to undo",
    createSuccess: "Successfully created {{resource}}",
    createError: "There was an error creating {{resource}} ({{statusCode}})",
    deleteSuccess: "Successfully deleted {{resource}}",
    deleteError: "Error when deleting {{resource}} ({{statusCode}})",
    editSuccess: "Successfully edited {{resource}}",
    editError: "Error when editing {{resource}} ({{statusCode}})",
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
    default: "Inc",
    suffix: " | Inc",
    post: {
      list: "Posts | Inc",
      show: "#{{id}} Show Post | Inc",
      edit: "#{{id}} Edit Post | Inc",
      create: "Create new Post | Inc",
      clone: "#{{id}} Clone Post | Inc"
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
  backHome: "返回首页",
  deleteAlert: "此操作不可撤销！",
  menus: {
    playground: "演示",
    dashboard: "仪表板",
    about: "关于",
    demo: "示例",
    demoViewTransition: "示例 viewTransition",
    article: "文档管理",
    post: "文章",
    category: "分类",
    system: "系统",
    account: "账户管理",
    user: "用户",
    role: "角色",
    admin: "其他",
    casbinRule: "权限",
    log: "审计日志",
    frontRoute: "前端路由",
    frontRouteProject: "项目",
    frontRouteModule: "模块",
    auditRecord: "审核记录",
    "auditRecord/applyRole": "角色申请",
    discover: "发现",
    menu: "菜单",
    dynamicPage: "配置化CRUD"
  },
  menusSecondary: {
    "API Docs": "接口文档",
    "Service Health Check": "服务健康检查",
    "Report a Bug": "提交缺陷"
  },
  pages: {
    about: {
      title: "全栈式 WEB 框架",
      description: "专注于更快速、轻松的构建数据密集型 Web 应用程序，同时提供快速、流畅的用户体验。",
      features1: "前后端一体化架构",
      features2: "SSR 服务端渲染",
      features3: "路由并行加载",
      features4: "CRUD 增删改查开发简化",
      features5: "状态持久化",
      features6: "身份验证",
      features7: "访问控制",
      features8: "审计日志",
      features9: "实时数据",
      features10: "多国语言",
      features11: "主题切换"
    },
    login: {
      title: "欢迎回来",
      description: "登录到您的 OSS Inc. 账户",
      signup: "注册",
      divider: "或",
      noAccount: "没有账户？",
      fields: {
        email: "邮箱",
        password: "密码"
      },
      buttons: {
        submit: "登录",
        submitWithTcsk: "猎户座 - 联合登录",
        forgotPassword: "忘记密码？",
        rememberMe: "记住我"
      },
      errors: {
        validEmail: "无效的邮箱地址",
        requiredEmail: "邮箱是必填项",
        requiredPassword: "密码是必填项"
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
      haveAccount: "已有账户？",
      signin: "登录",
      fields: {
        email: "邮箱",
        validateCode: "验证码",
        password: "密码"
      },
      errors: {
        validEmail: "无效的邮箱地址",
        requiredEmail: "邮箱是必填项",
        requiredPassword: "密码是必填项"
      },
      buttons: {
        submit: "注册"
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
      resource404: "请确认您是否已创建 {{resource}} 资源。"
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
    show: "查看",
    undo: "撤销",
    import: "导入",
    export: "导出",
    clone: "克隆",
    notAccessTitle: "您没有访问权限",
    back: "返回",
    columns: "表格列",
    toggleColumns: "切换列显示 / 不显示",
    activeToggle: "激活 / 禁用"
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
    default: "Inc",
    suffix: " | Inc",
    post: {
      list: "文章列表 | Inc",
      show: "#{{id}} 查看文章 | Inc",
      edit: "#{{id}} 编辑文章 | Inc",
      create: "创建新文章 | Inc",
      clone: "#{{id}} 克隆文章 | Inc"
    }
  },
  autoSave: {
    success: "已保存",
    error: "自动保存失败",
    loading: "保存中...",
    idle: "等待更改"
  }
};
const supportedLanguages = ["zh", "en"];
const fallbackLanguage = supportedLanguages[0];
const defaultNS = "translation";
const resourcesLanguages = {
  zh: { [defaultNS]: zhTranslation, zod: translation },
  en: { [defaultNS]: enTranslation }
};
z.setErrorMap(zodI18nMap);
const liveProvider = (client) => {
  return {
    subscribe: ({ channel, types: types2, params, callback }) => {
      const channelInstance = client.channels.get(channel);
      const listener = (message) => {
        var _a2, _b;
        if (types2.includes("*") || types2.includes(message.data.type)) {
          if (message.data.type !== "created" && (params == null ? void 0 : params.ids) !== void 0 && ((_b = (_a2 = message.data) == null ? void 0 : _a2.payload) == null ? void 0 : _b.ids) !== void 0) {
            if (params.ids.map(String).filter((value) => {
              var _a3;
              return (_a3 = message.data.payload.ids) == null ? void 0 : _a3.map(String).includes(value);
            }).length > 0) {
              callback(message.data);
            }
          } else {
            callback(message.data);
          }
        }
      };
      channelInstance.subscribe(listener);
      return { channelInstance, listener };
    },
    unsubscribe: (payload) => {
      const { channelInstance, listener } = payload;
      channelInstance.unsubscribe(listener);
    },
    publish: (event) => {
      const channelInstance = client.channels.get(event.channel);
      channelInstance.publish(event.type, event);
    }
  };
};
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
const ACTIONS_LIST = Object.values(EnumAction);
const ACTIONS_MAP = {
  [
    "list"
    /* list */
  ]: { name: "列表" },
  [
    "show"
    /* show */
  ]: { name: "详情" },
  [
    "create"
    /* create */
  ]: { name: "新增" },
  [
    "edit"
    /* edit */
  ]: { name: "修改" },
  [
    "delete"
    /* delete */
  ]: { name: "删除" },
  [
    "field"
    /* field */
  ]: { name: "字段" },
  [
    "import"
    /* import */
  ]: { name: "导入" },
  [
    "export"
    /* export */
  ]: { name: "导出" },
  [
    "clone"
    /* clone */
  ]: { name: "克隆" }
};
function lowercaseFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
const baseUrl = `${"http://localhost"}:${"5173"}`;
const apiBase = `${baseUrl}/api`;
const SECRET = canUseDOM() ? "super-duper-s3cret" : process.env.VITE_SECRET;
invariant(SECRET, "VITE_SECRET must be set.");
const SIGNATURE_EXPIRATION = 5 * 60 * 1e3;
function generateSignatureSync(payload) {
  const data2 = JSON.stringify(payload);
  const signature = hmac(sha256, SECRET, data2);
  return bytesToHex(signature);
}
async function generateSignature(payload = {}, timestamp) {
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
async function validateRequestSignature(request) {
  const signature = request.headers.get("x-signature");
  const timestamp = request.headers.get("x-timestamp");
  if (!signature || !timestamp) {
    return false;
  }
  try {
    let data2 = {};
    if (request.method === "GET" || request.method === "DELETE") {
      const url = new URL(request.url);
      data2 = queryString.parse(url.search.substring(1), {
        arrayFormat: "index",
        parseNumbers: true,
        parseBooleans: true
      });
    } else {
      const clonedRequest = request.clone();
      const text = await clonedRequest.text();
      data2 = text ? JSON.parse(text) : {};
    }
    const timestampedPayload = {
      data: data2,
      timestamp: parseInt(timestamp, 10)
    };
    return verifySignature(timestampedPayload, signature);
  } catch (error) {
    console.error("Failed to validate signature:", error);
    return false;
  }
}
let permissionsCache = null;
let identityCache = null;
const authProvider = {
  login: async ({ providerName, email, password, redirectTo = dashboardResource }) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const response = await fetch(`${apiBase}/auth/${providerName}`, {
      method: "POST",
      body: formData
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
    const response = await fetch(`${apiBase}/auth/me`);
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
  },
  getIdentity: async () => {
    if (identityCache) {
      return identityCache;
    }
    const response = await fetch(`${apiBase}/auth/me`);
    const { data: data2 } = await response.json();
    if (data2 && data2.id) {
      identityCache = data2;
      return data2;
    }
    return null;
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
      resource = lowercaseFirstLetter(resource);
      if (!resource) {
        resource = "*";
      }
      if (!action2) {
        action2 = EnumAction.list;
      }
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
    if (pattern2.includes("|")) {
      const patterns = pattern2.split("|").filter(Boolean);
      return patterns.some((p) => regexMatch(pattern1, p));
    }
    const regex = new RegExp("^" + pattern2 + "$");
    return regex.test(pattern1);
  } catch {
    return pattern1 === pattern2;
  }
}
var EnumResource = /* @__PURE__ */ ((EnumResource2) => {
  EnumResource2["user"] = "user";
  EnumResource2["userRole"] = "userRole";
  EnumResource2["role"] = "role";
  EnumResource2["casbinRule"] = "casbinRule";
  EnumResource2["log"] = "log";
  EnumResource2["post"] = "post";
  EnumResource2["category"] = "category";
  EnumResource2["frontRouteProject"] = "frontRouteProject";
  EnumResource2["frontRouteModule"] = "frontRouteModule";
  EnumResource2["auditRecord"] = "auditRecord";
  EnumResource2["menu"] = "menu";
  EnumResource2["dynamicPage"] = "dynamicPage";
  return EnumResource2;
})(EnumResource || {});
const RESOURCES_LIST = Object.values(EnumResource);
const transformHttpError = (error) => {
  const { message, status, response } = error || {};
  const { data: responseData, statusText: responseStatusText } = response || {};
  const { target } = responseData || {};
  const msg = (responseData == null ? void 0 : responseData.message) || message || (responseData == null ? void 0 : responseData.name) || responseStatusText;
  const statusCode = status || response.status;
  const httpError = {
    message: msg,
    statusCode
  };
  if (target) {
    httpError.errors = { [target]: [msg] };
  }
  return httpError;
};
const easyAxios = axios.create();
easyAxios.interceptors.request.use(
  async (config) => {
    var _a2, _b;
    const timestamp = Date.now();
    const headers2 = new AxiosHeaders(config.headers);
    let signData = {};
    if (((_a2 = config.method) == null ? void 0 : _a2.toUpperCase()) === "GET" || ((_b = config.method) == null ? void 0 : _b.toUpperCase()) === "DELETE") {
      const url = config.url || "";
      const queryIndex = url.indexOf("?");
      if (queryIndex !== -1) {
        const queryStr = url.substring(queryIndex + 1);
        signData = queryString.parse(queryStr, {
          arrayFormat: "index",
          parseNumbers: true,
          parseBooleans: true
        });
      }
    } else {
      signData = config.data || {};
    }
    headers2.set("X-Timestamp", timestamp.toString());
    headers2.set("X-Signature", await generateSignature(signData, timestamp));
    config.headers = headers2;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
easyAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(transformHttpError(error));
  }
);
const schemaJson = z.string().refine(
  (val) => {
    if (!val) {
      return true;
    }
    try {
      JSON.parse(val);
      return true;
    } catch (e) {
      return false;
    }
  },
  { message: "输入的JSON内容格式有误 - Invalid JSON format" }
);
z.string().refine(
  (val) => {
    if (!val) {
      return true;
    }
    try {
      const json = JSON.parse(val);
      if (json.select && json.include) {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  },
  (val) => {
    try {
      const json = JSON.parse(val);
      if (json.select && json.include) {
        return { message: "select 和 include 不能同时使用，请选择其一" };
      }
      return { message: "输入的Prisma JSON内容格式有误 - Invalid Prisma JSON format" };
    } catch (e) {
      return { message: "输入的Prisma JSON内容格式有误 - Invalid Prisma JSON format" };
    }
  }
);
const schemaCasbinRule = z.object({
  ptype: z.string(),
  v0: z.string().min(2),
  v1: z.string(),
  v2: z.string(),
  v3: z.string().optional().nullable()
});
const schemaCategory = z.object({
  title: z.string().min(2, { message: void 0 }),
  description: z.string().optional().nullable()
});
const schemaFrontRouteModule = z.object({
  projectId: z.string().nonempty({ message: "Project is required" }),
  title: z.string().min(2, { message: void 0 }),
  description: z.string().optional().nullable(),
  global: z.any().optional().nullable(),
  pathReplaceProject: z.string().optional().nullable(),
  pathReplaceModule: z.string().optional().nullable()
});
const schemaFrontRouteProject = z.object({
  title: z.string().min(2, { message: void 0 }),
  description: z.string().optional().nullable(),
  global: z.any()
});
var EnumLogType = /* @__PURE__ */ ((EnumLogType2) => {
  EnumLogType2["create"] = "create";
  EnumLogType2["createMany"] = "createMany";
  EnumLogType2["delete"] = "delete";
  EnumLogType2["deleteMany"] = "deleteMany";
  EnumLogType2["update"] = "update";
  EnumLogType2["updateMany"] = "updateMany";
  return EnumLogType2;
})(EnumLogType || {});
const LOG_STATUS_LIST = Object.values(EnumLogType);
const LOG_STATUS_MAP = {
  [
    "create"
    /* create */
  ]: { badge: "outline" },
  [
    "createMany"
    /* createMany */
  ]: { badge: "outline" },
  [
    "delete"
    /* delete */
  ]: { badge: "destructive" },
  [
    "deleteMany"
    /* deleteMany */
  ]: { badge: "destructive" },
  [
    "update"
    /* update */
  ]: { badge: void 0 },
  [
    "updateMany"
    /* updateMany */
  ]: { badge: void 0 }
};
const AUDIT_LOG_CUSTOM_OLD = "AUDIT_LOG_CUSTOM_OLD";
const AUDIT_LOG_CUSTOM_NEW = "AUDIT_LOG_CUSTOM_NEW";
const schemaLog = z.object({
  resource: z.string(),
  action: z.enum([
    EnumLogType.create,
    EnumLogType.createMany,
    EnumLogType.delete,
    EnumLogType.deleteMany,
    EnumLogType.update,
    EnumLogType.updateMany
  ]),
  data: z.any().optional().nullable(),
  dataPrevious: z.any().optional().nullable(),
  meta: z.any().optional().nullable()
});
var EnumPostStatus = /* @__PURE__ */ ((EnumPostStatus2) => {
  EnumPostStatus2["DRAFT"] = "DRAFT";
  EnumPostStatus2["PUBLISHED"] = "PUBLISHED";
  EnumPostStatus2["REJECTED"] = "REJECTED";
  return EnumPostStatus2;
})(EnumPostStatus || {});
const POST_STATUS_LIST = Object.values(EnumPostStatus);
const POST_STATUS_MAP = {
  [
    "DRAFT"
    /* DRAFT */
  ]: { badge: "outline" },
  [
    "PUBLISHED"
    /* PUBLISHED */
  ]: { badge: void 0 },
  [
    "REJECTED"
    /* REJECTED */
  ]: { badge: "destructive" }
};
const schemaPost = z.object({
  title: z.string().min(2, { message: void 0 }),
  content: z.string().min(2),
  status: z.enum([EnumPostStatus.DRAFT, EnumPostStatus.PUBLISHED, EnumPostStatus.REJECTED]),
  categoryId: z.string()
});
const schemaRole = z.object({
  title: z.string().min(2, { message: void 0 }),
  description: z.string().min(2)
});
const schemaUser = z.object({
  name: z.string().min(1, "用户名不能为空"),
  email: z.string().email("请输入有效的邮箱地址"),
  avatar: z.string().optional().nullable()
});
var EnumAuditStatus = /* @__PURE__ */ ((EnumAuditStatus2) => {
  EnumAuditStatus2["PENDING"] = "PENDING";
  EnumAuditStatus2["RESOLVED"] = "RESOLVED";
  EnumAuditStatus2["REJECTED"] = "REJECTED";
  EnumAuditStatus2["FAILED"] = "FAILED";
  return EnumAuditStatus2;
})(EnumAuditStatus || {});
const AUDIT_STATUS_LIST = Object.values(EnumAuditStatus);
const AUDIT_STATUS_MAP = {
  [
    "PENDING"
    /* PENDING */
  ]: { badge: void 0 },
  [
    "RESOLVED"
    /* RESOLVED */
  ]: { badge: "outline" },
  [
    "REJECTED"
    /* REJECTED */
  ]: { badge: "destructive" },
  [
    "FAILED"
    /* FAILED */
  ]: { badge: "destructive" }
};
const schemaAuditRecord = z.object({
  title: z.string(),
  status: z.enum([EnumAuditStatus.PENDING, EnumAuditStatus.RESOLVED, EnumAuditStatus.REJECTED, EnumAuditStatus.FAILED]),
  action: z.enum([
    EnumLogType.create,
    EnumLogType.createMany,
    EnumLogType.delete,
    EnumLogType.deleteMany,
    EnumLogType.update,
    EnumLogType.updateMany
  ]),
  data: z.any().optional(),
  dataPrevious: z.any().optional(),
  meta: z.object({
    parent: z.string().optional(),
    id: z.string().optional()
  }),
  resource: z.string()
});
const schemaDynamicPage = z.object({
  path: z.string().min(6, "请输入正确的路径, eg: /group/category/name"),
  title: z.string().min(1, "请输入页面标题"),
  isActive: z.boolean().optional().nullable(),
  enableCreate: z.boolean().optional().nullable(),
  enableDelete: z.boolean().optional().nullable(),
  enableEdit: z.boolean().optional().nullable(),
  enableClone: z.boolean().optional().nullable(),
  tableSql: z.any(),
  tableRecordLink: z.any().optional().nullable(),
  tableField: z.any().optional().nullable(),
  formField: z.any().optional().nullable(),
  meta: z.any().optional().nullable()
});
const schemaMap = {
  post: schemaPost,
  category: schemaCategory,
  role: schemaRole,
  user: schemaUser,
  casbinRule: schemaCasbinRule,
  log: schemaLog,
  frontRouteModule: schemaFrontRouteModule,
  frontRouteProject: schemaFrontRouteProject,
  auditRecord: schemaAuditRecord,
  dynamicPage: schemaDynamicPage
};
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
function zodParse(resource, variables) {
  const schema = schemaMap[resource];
  if (!schema) {
    return { success: true, message: `Server Error, 未找到 ${resource} 的数据校验规则` };
  }
  try {
    schema.parse(variables || {});
  } catch (error) {
    const { name, issues } = error || {};
    const err = new Error(`Bad Request, 数据校验失败 (${name})`);
    err.name = name;
    err.issues = issues;
    return { status: 400, message: err.message, originalError: err };
  }
  return { success: true, message: "校验成功" };
}
function buildTableParams({ pagination, filters, sorters, meta: meta2 }) {
  const queryParams = {};
  if (meta2 == null ? void 0 : meta2.include) {
    queryParams.include = meta2.include;
  }
  if (meta2 == null ? void 0 : meta2.select) {
    queryParams.select = meta2.select;
  }
  const { current = 1, pageSize } = pagination ?? {};
  const skip = pageSize ? (Number(current) - 1) * Number(pageSize) : void 0;
  if (pageSize) {
    queryParams.skip = skip;
    queryParams.take = Number(pageSize);
  }
  const parsedFilters = filters ? parseRefineFilters(filters) : [];
  const where = parsedFilters.length > 0 ? buildWhereClause(parsedFilters) : {};
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
  if (Object.keys(processedWhereCondition).length) {
    queryParams.where = processedWhereCondition;
  }
  const orderBy = sorters ? buildOrderByClause(sorters) : {};
  if (Object.keys(orderBy).length) {
    queryParams.orderBy = orderBy;
  }
  return queryParams;
}
function getQueryParamsFromRequest(request) {
  const url = new URL(request.url);
  const qParam = url.searchParams.get("q");
  const metaParam = url.searchParams.get("meta");
  if (!qParam) {
    return {};
  }
  try {
    const jsonData = JSON.parse(qParam);
    if (metaParam) {
      const meta2 = JSON.parse(metaParam);
      if (meta2.serialization) {
        return deserialize({
          json: jsonData,
          meta: meta2.serialization
        });
      }
    }
    return jsonData;
  } catch (error) {
    console.error("解析查询参数错误:", error);
    return {};
  }
}
async function getBodyFromRequest(request) {
  var _a2;
  try {
    const body = await request.json();
    if ((_a2 = body.meta) == null ? void 0 : _a2.serialization) {
      const { meta: meta2, ...jsonData } = body;
      return deserialize({
        json: jsonData,
        meta: meta2.serialization
      });
    }
    return body;
  } catch (error) {
    console.error("解析请求体错误:", error);
    return {};
  }
}
function serializeResponse(data2) {
  return data2;
}
function serializeToUrlParams(params) {
  const { json, meta: serializationMeta } = serialize(params);
  const searchParams = new URLSearchParams();
  searchParams.append("q", JSON.stringify(json));
  if (serializationMeta) {
    searchParams.append("meta", JSON.stringify({ serialization: serializationMeta }));
  }
  return searchParams.toString();
}
function serializeToRequestBody(data2) {
  const { json, meta: serializationMeta } = serialize(data2);
  const finalBody = { ...json };
  if (serializationMeta) {
    finalBody.meta = { serialization: serializationMeta };
  }
  return finalBody;
}
function handleResponse(data2) {
  var _a2;
  if ((_a2 = data2.meta) == null ? void 0 : _a2.serialization) {
    return deserialize({
      json: data2.data,
      meta: data2.meta.serialization
    });
  }
  return data2;
}
function addMetaToParams(params, meta2) {
  if (!meta2) return params;
  const result = { ...params };
  if (meta2.include) {
    result.include = meta2.include;
  }
  if (meta2.select) {
    result.select = meta2.select;
  }
  return result;
}
async function handleGetRequest(url, params) {
  const queryString2 = serializeToUrlParams(params);
  const { data: data2 } = await easyAxios.get(`${url}?${queryString2}`);
  return handleResponse(data2);
}
async function handlePostRequest(url, body) {
  const finalBody = serializeToRequestBody(body);
  const { data: data2 } = await easyAxios.post(url, finalBody);
  return handleResponse(data2);
}
const dataProvider = {
  getList: async ({ resource, pagination, filters, sorters, meta: meta2 }) => {
    if ((pagination == null ? void 0 : pagination.mode) === "off") {
      delete pagination.pageSize;
    }
    const url = `${apiBase}/${resource}/findMany`;
    const queryParams = buildTableParams({ pagination, filters, sorters, meta: meta2 });
    return handleGetRequest(url, queryParams);
  },
  getMany: async ({ resource, ids, meta: meta2 }) => {
    const url = `${apiBase}/${resource}/findMany`;
    const queryParams = addMetaToParams({ where: { id: { in: ids } } }, meta2);
    return handleGetRequest(url, queryParams);
  },
  create: async ({ resource, variables, meta: meta2 }) => {
    const url = `${apiBase}/${resource}/create`;
    const requestBody = addMetaToParams({ data: variables }, meta2);
    return handlePostRequest(url, requestBody);
  },
  update: async ({ resource, id, variables, meta: meta2 }) => {
    const url = `${apiBase}/${resource}/update`;
    const requestBody = addMetaToParams({ where: { id }, data: variables }, meta2);
    return handlePostRequest(url, requestBody);
  },
  updateMany: async ({ resource, ids, variables }) => {
    const url = `${apiBase}/${resource}/updateMany`;
    const requestBody = { where: { id: { in: ids } }, data: variables };
    return handlePostRequest(url, requestBody);
  },
  createMany: async ({ resource, variables }) => {
    const url = `${apiBase}/${resource}/createMany`;
    const requestBody = { data: variables };
    return handlePostRequest(url, requestBody);
  },
  getOne: async ({ resource, id, meta: meta2 }) => {
    const url = `${apiBase}/${resource}/findUnique`;
    const queryParams = addMetaToParams({ where: { id } }, meta2);
    return handleGetRequest(url, queryParams);
  },
  deleteOne: async ({ resource, id, meta: meta2 }) => {
    const url = `${apiBase}/${resource}/delete`;
    const requestBody = addMetaToParams({ where: { id } }, meta2);
    return handlePostRequest(url, requestBody);
  },
  deleteMany: async ({ resource, ids }) => {
    const url = `${apiBase}/${resource}/deleteMany`;
    const requestBody = { where: { id: { in: ids } } };
    return handlePostRequest(url, requestBody);
  },
  getApiUrl: () => {
    return apiBase;
  },
  custom: async ({ url, method, meta: meta2, filters, sorters, payload, query, headers: headers2 }) => {
    const queryParams = buildTableParams({ filters, sorters, meta: meta2 });
    const searchParams = new URLSearchParams();
    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        searchParams.append(key, value);
      });
    }
    const requestUrl = `${url}?${searchParams.toString()}`;
    if (method === "get") {
      const { json, meta: serializationMeta } = serialize(queryParams);
      searchParams.append("q", JSON.stringify(json));
      if (serializationMeta) {
        searchParams.append("meta", JSON.stringify({ serialization: serializationMeta }));
      }
      const { data: data2 } = await easyAxios.get(requestUrl, { headers: headers2 });
      return handleResponse(data2);
    } else {
      const finalPayload = { ...payload || {}, ...queryParams };
      const requestBody = serializeToRequestBody(finalPayload);
      const { data: data2 } = await easyAxios({
        url: requestUrl,
        method,
        headers: headers2,
        data: requestBody
      });
      return handleResponse(data2);
    }
  }
};
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
    const { resource, action: action2, data: data2, previousData: dataPrevious, meta: meta2 } = params;
    const { AUDIT_LOG_CUSTOM_OLD: AUDIT_LOG_CUSTOM_OLD2 = {}, AUDIT_LOG_CUSTOM_NEW: AUDIT_LOG_CUSTOM_NEW2 = {}, ...restData } = data2 || {};
    const variables = {
      resource,
      action: action2,
      meta: meta2
    };
    const dataNew = { ...restData, ...AUDIT_LOG_CUSTOM_NEW2 };
    if (Object.keys(dataNew).length) {
      variables.data = dataNew;
    }
    const dataPreviousNew = { ...dataPrevious, ...AUDIT_LOG_CUSTOM_OLD2 };
    if (Object.keys(dataPreviousNew).length) {
      variables.dataPrevious = dataPreviousNew;
    }
    const response = await dataProvider.create({
      resource: EnumResource.log,
      variables
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
  var _a2;
  try {
    const preferences = Cookies.get("preferences");
    if (!preferences) return null;
    return (_a2 = JSON.parse(preferences)) == null ? void 0 : _a2.locale;
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
  var _a2;
  if (i18next.isInitialized && locale !== ((_a2 = i18next) == null ? void 0 : _a2.language)) {
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
    const formData = new FormData();
    formData.append("locale", locale);
    const res = await fetch(`${apiBase}/set-preferences`, {
      method: "POST",
      body: formData
    });
    const { data: data2 } = await res.json();
    return Promise.resolve(data2);
  },
  getLocale: () => {
    return i18next.language;
  }
};
const ablyClient = new Ably.Realtime("BPxcXA.E1bxAw:T4H-_uL4SC0WfJfZUlRnXZ_XPgZkN8N_DNmGVsH8JNs");
ablyClient.connection.once("connected", () => {
  console.log("Connected to Ably!");
});
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
const moduleCache = {};
const singleton = (name, valueFactory) => {
  var _a2;
  if (process.env.NODE_ENV === "production") {
    moduleCache[name] ?? (moduleCache[name] = valueFactory());
    return moduleCache[name];
  }
  const g = global;
  g.__singletons ?? (g.__singletons = {});
  (_a2 = g.__singletons)[name] ?? (_a2[name] = valueFactory());
  return g.__singletons[name];
};
var EnumRole = /* @__PURE__ */ ((EnumRole2) => {
  EnumRole2["administrator"] = "administrator";
  EnumRole2["editor"] = "editor";
  EnumRole2["guest"] = "guest";
  return EnumRole2;
})(EnumRole || {});
Object.values(EnumRole);
const rolesAll = [
  { label: "Administrator", value: "administrator", icon: BicepsFlexed },
  { label: "Editor", value: "editor", icon: AudioLines },
  { label: "Guest", value: "guest", icon: Baby }
];
const rolePriority = {
  administrator: 1,
  editor: 2,
  guest: 3
};
async function getUserById(id) {
  const user = await db.user.findUnique({
    where: { id },
    include: {
      roles: {
        select: {
          role: {
            select: {
              title: true
            }
          }
        }
      }
    }
  });
  return withUserRoles(user);
}
async function getUserByEmail(email) {
  const user = await db.user.findUnique({
    where: { email },
    include: {
      roles: {
        select: {
          role: {
            select: {
              title: true
            }
          }
        }
      }
    }
  });
  return withUserRoles(user);
}
async function createUser({
  email,
  name,
  password,
  provider
}) {
  const user = await db.user.create({
    data: {
      avatar: "/images/avatar.jpg",
      email,
      name: name || email.split("@")[0],
      provider,
      password
    }
  });
  const roleGuest = await db.role.findUnique({
    where: { title: EnumRole.guest }
  });
  await db.userRole.create({
    data: {
      user: {
        connect: {
          id: user.id
        }
      },
      role: {
        connect: {
          id: roleGuest == null ? void 0 : roleGuest.id
        }
      }
    }
  });
  return { ...user, role: EnumRole.guest, roles: [EnumRole.guest] };
}
async function verifyUserpassLogin(email, password) {
  const user = await db.user.findUnique({
    where: { email },
    include: {
      roles: {
        select: {
          role: {
            select: {
              title: true
            }
          }
        }
      }
    }
  });
  if (!user || !user.password) {
    return null;
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return null;
  }
  return withUserRoles(user);
}
const withUserRoles = (_userWithRoles) => {
  if (!_userWithRoles) {
    return null;
  }
  const roles = _userWithRoles.roles.map((userRole) => userRole.role.title).sort((a, b) => rolePriority[a] - rolePriority[b]);
  const userWithRoles = {
    ..._userWithRoles,
    password: "******",
    roles,
    role: roles[0]
  };
  return userWithRoles;
};
async function updateUserRoles({ roleIds, userId }) {
  return await db.$transaction(async (tx) => {
    const currentRoles = await tx.userRole.findMany({
      where: { userId },
      select: { roleId: true }
    });
    const currentRoleIds = currentRoles.map((r) => r.roleId);
    const rolesToAdd = roleIds.filter((id) => !currentRoleIds.includes(id));
    const rolesToRemove = currentRoleIds.filter((id) => !roleIds.includes(id));
    if (!rolesToRemove.length && !rolesToAdd.length) {
      return { message: "用户角色没有任何变更" };
    }
    if (rolesToRemove.length > 0) {
      await tx.userRole.deleteMany({
        where: {
          userId,
          roleId: { in: rolesToRemove }
        }
      });
    }
    if (rolesToAdd.length > 0) {
      await tx.userRole.createMany({
        data: rolesToAdd.map((roleId) => ({
          userId,
          roleId
        }))
      });
    }
    return await tx.user.findUnique({
      where: { id: userId },
      include: {
        roles: {
          include: {
            role: true
          }
        }
      }
    });
  });
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
const redirectToLogin = (request, redirectTo = request.url) => {
  const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
  throw redirect$1(`/login?${searchParams}`);
};
async function getUserSession(request) {
  try {
    return getSession(request.headers.get("Cookie"));
  } catch (error) {
    return null;
  }
}
async function getUser(request) {
  try {
    let user = null;
    const session = await getUserSession(request);
    const sessionUser = session == null ? void 0 : session.get("user");
    if (sessionUser == null ? void 0 : sessionUser.id) {
      user = await getUserById(sessionUser.id);
    }
    return user ? { ...user, role: (sessionUser == null ? void 0 : sessionUser.role) || null } : null;
  } catch (error) {
    console.error("@getUser", error);
    return null;
  }
}
async function requireUserSession(request, redirectTo = request.url) {
  try {
    const user = await getUser(request);
    if (!(user == null ? void 0 : user.id)) {
      redirectToLogin(request, redirectTo);
    }
    return user;
  } catch (error) {
    redirectToLogin(request, redirectTo);
  }
}
async function requireUser(request) {
  try {
    const user = await getUser(request);
    if (!(user == null ? void 0 : user.id)) {
      throw new Error("Unauthorized: user not found");
    }
    return { user, session: await getUserSession(request) };
  } catch (error) {
    return Promise.reject(error);
  }
}
const db = singleton("prisma", () => new PrismaClient({ log: ["error"] }));
singleton("prisma2", () => {
  return new PrismaClient({ log: ["error"], datasourceUrl: process.env.DATABASE_URL_B });
});
async function getEnhancedDb({ request, user }) {
  const auth = user || (request ? await getUser(request) : void 0);
  return enhance(db, { user: auth || void 0 }, { logPrismaQuery: true });
}
function isPrismaModel(resource) {
  return RESOURCES_LIST.some((r) => r.endsWith(resource));
}
const excludeTables = [
  "_prisma_migrations",
  "casbin_rule",
  "Menu",
  "Role",
  "User",
  "UserRole",
  "DynamicPage",
  "AuditRecord",
  "Log",
  "FrontRouteProject",
  "FrontRouteModule"
];
async function queryTablesAll() {
  const tableAll = await db.$queryRawUnsafe("SELECT * FROM information_schema.tables WHERE table_schema = 'public'");
  const tables = [];
  if (Array.isArray(tableAll)) {
    tables.push(
      ...tableAll.filter((table) => !excludeTables.includes(table.table_name)).map((table) => ({
        value: table.table_name,
        label: table.table_name
      }))
    );
  }
  return tables;
}
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
let lastPolicyLoadTime = 0;
async function createEnforcer() {
  try {
    if (enforcer) {
      if (Date.now() - lastPolicyLoadTime > 6e4) {
        await enforcer.loadPolicy();
        lastPolicyLoadTime = Date.now();
      }
      return enforcer;
    }
    const adapter = await PrismaAdapter.newAdapter(db);
    enforcer = await newEnforcer(MODEL, adapter);
    return enforcer;
  } catch (error) {
    console.error("Failed to create enforcer:", error);
    Sentry.captureException(error);
    enforcer = await newEnforcer(MODEL);
    return enforcer;
  }
}
async function checkPermission(subject, object, action2) {
  const enforcer2 = await createEnforcer();
  return enforcer2.enforce(lowercaseFirstLetter(subject), object, action2);
}
async function getPermissions({
  request,
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
  if (!role && request) {
    const session = await getUserSession(request);
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
const getPreferencesCookie = async (request) => {
  const cookieHeader = request.headers.get("Cookie") || "";
  const cookies = cookieHeader.split("; ").find((s) => s.startsWith("preferences="));
  try {
    return JSON.parse((cookies == null ? void 0 : cookies.split("=")[1]) || "{}");
  } catch (error) {
    return {};
  }
};
const getPreferencesNextCookie = async (request, cookie) => {
  const exitingCookie = await getPreferencesCookie(request) || {};
  const newCookie = JSON.stringify({
    ...exitingCookie,
    ...cookie
  });
  return `preferences=${newCookie}; Path=/; SameSite=Lax`;
};
function dropEmptyKey(data2) {
  Object.keys(data2).forEach((key) => {
    if (!data2[key] && data2[key] !== 0 && data2[key] !== false) {
      delete data2[key];
    }
  });
  return data2;
}
async function getMenus() {
  const menus = await db.menu.findMany({
    where: {
      deleted: false
    },
    orderBy: [{ order: "asc" }, { createdAt: "asc" }]
  });
  return menus.map((menu) => ({
    ...menu,
    meta: menu.meta
  }));
}
async function getRefineMenusResources() {
  const menus = await db.menu.findMany({
    where: {
      deleted: false,
      isActive: true
    },
    orderBy: [{ order: "asc" }],
    select: {
      name: true,
      title: true,
      list: true,
      create: true,
      edit: true,
      show: true,
      clone: true,
      meta: true
    }
  });
  menus.forEach((menu) => {
    menu = dropEmptyKey(menu);
    if (!menu.meta) {
      menu.meta = {};
    }
    if (menu.title) {
      menu.meta.label = menu.title;
      delete menu.title;
    }
    menu.meta = dropEmptyKey(menu.meta);
    if (Object.keys(menu.meta).length === 0) {
      delete menu.meta;
    }
  });
  return menus;
}
async function updateMenuOrder(updates) {
  await db.$transaction(
    updates.map(
      (update) => db.menu.update({
        where: { id: update.id },
        data: { order: update.order }
      })
    )
  );
}
async function updateMenuParent(update) {
  const { id, parentName } = update;
  const menu = await db.menu.findUnique({
    where: { id },
    select: {
      name: true,
      list: true,
      create: true,
      edit: true,
      show: true,
      clone: true,
      meta: true
    }
  });
  if (!menu) {
    throw new Error("菜单不存在");
  }
  const meta2 = menu.meta || {};
  if (parentName) {
    meta2.parent = parentName;
  } else {
    delete meta2.parent;
  }
  await db.menu.update({
    where: { id },
    data: {
      meta: meta2
    }
  });
}
async function createMenu(data2) {
  const { name, title: title2, parentId, isActive, list, create, edit, show, clone, icon } = data2;
  let parentName = null;
  if (parentId) {
    const parentMenu = await db.menu.findUnique({
      where: { id: parentId },
      select: { name: true, meta: true }
    });
    if (!parentMenu) {
      throw new Error("父级菜单不存在");
    }
    parentName = parentMenu.name;
  }
  const meta2 = {};
  if (parentName) {
    meta2.parent = parentName;
  }
  if (icon) {
    meta2.icon = icon;
  }
  const menu = await db.menu.create({
    data: {
      name,
      title: title2,
      isActive: isActive ?? true,
      list,
      create,
      edit,
      show,
      clone,
      meta: meta2
    }
  });
  return {
    ...menu,
    meta: menu.meta
  };
}
async function updateMenu(data2) {
  const { id, name, title: title2, parentId, isActive, list, create, edit, show, clone, icon } = data2;
  if (!id) {
    throw new Error("菜单ID不能为空");
  }
  const currentMenu = await db.menu.findUnique({
    where: { id },
    select: { name: true, meta: true }
  });
  if (!currentMenu) {
    throw new Error("菜单不存在");
  }
  let parentName = null;
  if (parentId) {
    const parentMenu = await db.menu.findUnique({
      where: { id: parentId },
      select: { name: true }
    });
    if (!parentMenu) {
      throw new Error("父级菜单不存在");
    }
    parentName = parentMenu.name;
  }
  const meta2 = currentMenu.meta || {};
  if (parentName) {
    meta2.parent = parentName;
  } else if (parentId === null) {
    delete meta2.parent;
  }
  if (icon) {
    meta2.icon = icon;
  }
  const updateResult = await db.$transaction(async (tx) => {
    if (isActive !== void 0) {
      await updateChildMenusActive(currentMenu.name, isActive, tx);
    }
    const menu = await tx.menu.update({
      where: { id },
      data: {
        name,
        title: title2,
        isActive,
        list,
        create,
        edit,
        show,
        clone,
        meta: meta2
      }
    });
    return {
      ...menu,
      meta: menu.meta
    };
  });
  return updateResult;
}
async function updateChildMenusActive(parentName, isActive, tx) {
  const prisma = tx || db;
  const childMenus = await prisma.menu.findMany({
    where: {
      deleted: false,
      meta: {
        path: ["parent"],
        equals: parentName
      }
    },
    select: {
      id: true,
      name: true
    }
  });
  if (childMenus.length === 0) {
    return;
  }
  await prisma.menu.updateMany({
    where: {
      id: { in: childMenus.map((menu) => menu.id) }
    },
    data: { isActive }
  });
  for (const childMenu of childMenus) {
    await updateChildMenusActive(childMenu.name, isActive, tx);
  }
}
async function deleteMenu(id) {
  const menu = await db.menu.findUnique({
    where: { id },
    select: { name: true }
  });
  if (!menu) {
    throw new Error("菜单不存在");
  }
  const childMenus = await db.menu.findMany({
    where: {
      meta: {
        path: ["parent"],
        equals: menu.name
      }
    }
  });
  if (childMenus.length > 0) {
    throw new Error("该菜单下有子菜单，无法删除");
  }
  await db.menu.update({
    where: { id },
    data: { deleted: true }
  });
}
const baseStyles = "/assets/base-CNccC1ql.css";
const tailwindStyles = "/assets/tailwind-CL5wXAUr.css";
const meta$B = () => [
  { property: "og:title", content: "This app is the best." },
  { name: "description", content: "Welcome to Remix!" }
];
const links = () => [
  { rel: "stylesheet", href: tailwindStyles, id: "tailwind-styles" },
  { rel: "stylesheet", href: baseStyles, id: "base-styles" },
  { rel: "stylesheet", href: nProgressStyles, id: "nprogress-styles" }
];
const headers = () => ({
  "Document-Policy": "js-profiling"
});
const handle$8 = { i18n: ["translation"] };
async function loader$U({ request }) {
  var _a2;
  const [user, permissions, { locale, sidebarClose, theme }, menus] = await Promise.all([
    getUser(request),
    getPermissions({ request }),
    getPreferencesCookie(request),
    getRefineMenusResources()
  ]);
  const localeNext = locale || fallbackLanguage;
  await syncServiceLocaleToClient(localeNext);
  const permissionsSignature = await generateSignature(permissions);
  Sentry.setUser({ email: user == null ? void 0 : user.email, username: (user == null ? void 0 : user.name) || "?", id: user == null ? void 0 : user.id });
  setDataResources(menus);
  const dashboardResource2 = ((_a2 = menus.find((r) => r.list)) == null ? void 0 : _a2.list) || "/404";
  return data({
    user,
    theme: theme || Theme.LIGHT,
    locale: localeNext,
    sidebarClose,
    permissions,
    permissionsSignature,
    menus,
    dashboardResource: dashboardResource2
  });
}
function HydrateFallback() {
  return /* @__PURE__ */ jsx("h1", { className: "bg-background fixed inset-0 z-10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Loader$1, { className: "animate-spin" }) });
}
function Document({
  children,
  title: title2,
  specifiedTheme,
  script = true,
  locale
}) {
  const { permissions, permissionsSignature, user, menus } = useLoaderData();
  Sentry.setUser({ email: user == null ? void 0 : user.email, username: (user == null ? void 0 : user.name) || "?", id: user == null ? void 0 : user.id });
  authProvider.setPermissions(permissions);
  return /* @__PURE__ */ jsxs("html", { lang: locale, className: cn(specifiedTheme ?? "light"), suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      title2 && /* @__PURE__ */ jsx("title", { children: title2 }),
      /* @__PURE__ */ jsx(PreventFlashOnWrongTheme, { ssrTheme: Boolean(specifiedTheme) }),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(RefineKbarProvider, { children: /* @__PURE__ */ jsxs(
        Refine,
        {
          resources: menus,
          routerProvider,
          dataProvider,
          authProvider,
          accessControlProvider,
          notificationProvider,
          i18nProvider,
          auditLogProvider,
          liveProvider: liveProvider(ablyClient),
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
            },
            projectId: "WYVW2v-jZ8p3m-yjM2Ba"
          },
          onLiveEvent: (event) => {
            console.log("@root.onLiveEvent", event);
          },
          children: [
            children,
            /* @__PURE__ */ jsx(UnsavedChangesNotifier, {}),
            /* @__PURE__ */ jsx(RefineKbarCustom, {})
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Analytics, {}),
      /* @__PURE__ */ jsx(SpeedInsights, {}),
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
              window.__MENUS__ = ${JSON.stringify(menus)};
            `
          }
        }
      )
    ] })
  ] });
}
function DocumentWithThemeProviders({
  children,
  title: title2,
  script = true
}) {
  const { theme, locale } = useLoaderData() || {};
  return /* @__PURE__ */ jsx(ThemeProvider, { specifiedTheme: theme, themeAction: "/api/set-preferences", children: /* @__PURE__ */ jsxs(Document, { title: title2, specifiedTheme: theme, script, locale, children: [
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
function ErrorBoundary$N() {
  const error = useRouteError();
  captureRemixErrorBoundaryError(error);
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ jsx(DocumentWithThemeProviders, { title: `${error.status} ${error.statusText}`, script: false, children: error.status === 404 ? /* @__PURE__ */ jsx(NotFound, {}) : /* @__PURE__ */ jsx(PageError, { error: { message: error.data } }) });
  }
  return /* @__PURE__ */ jsx(DocumentWithThemeProviders, { title: "Oh no!", script: false, children: /* @__PURE__ */ jsx(PageError, { error }) });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$N,
  HydrateFallback,
  default: root,
  handle: handle$8,
  headers,
  links,
  loader: loader$U,
  meta: meta$B
}, Symbol.toStringTag, { value: "Module" }));
function PermissionDenied() {
  const back = useBack();
  return /* @__PURE__ */ jsx("div", { className: "relative h-screen font-['sans-serif']", children: /* @__PURE__ */ jsxs("div", { className: "absolute top-1/2 left-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-center leading-[1.4]", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-[-1] mx-auto mt-0 mb-5 h-[200px]", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-forceground absolute top-1/2 left-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase", children: "Oops!" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-forceground bg-background absolute inset-x-0 bottom-0 m-auto inline-block px-[5px] pt-5 text-[28px] font-normal capitalize", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-background absolute -top-1 -right-1 -bottom-1 -left-1 z-10 blur-xl" }),
        "403 - Permission Denied"
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mb-8 text-xl text-red-500", children: "Sorry, You don't have permission to access this page." }),
    /* @__PURE__ */ jsx(Button, { onClick: back, className: "mr-3", children: "Go Back" }),
    /* @__PURE__ */ jsx(Link$1, { prefetch: "intent", viewTransition: true, to: "/system/admin/auditRecord/applyRole", children: /* @__PURE__ */ jsx(Button, { children: "Apply Permission" }) })
  ] }) });
}
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      ),
      ...props
    }
  );
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ jsx("li", { "data-slot": "breadcrumb-item", className: cn("inline-flex items-center gap-1.5", className), ...props });
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(Comp, { "data-slot": "breadcrumb-link", className: cn("hover:text-foreground transition-colors", className), ...props });
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("text-foreground font-normal", className),
      ...props
    }
  );
}
function BreadcrumbSeparator({ children, className, ...props }) {
  return /* @__PURE__ */ jsx(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props,
      children: children ?? /* @__PURE__ */ jsx(ChevronRight, {})
    }
  );
}
const toCamelCase = (str) => {
  if (!str) {
    throw new Error("输入不能为空");
  }
  if (typeof str !== "string") {
    throw new Error("输入必须为字符串类型");
  }
  return str.toLowerCase().replace(/[-\s]/g, "_").replace(/_([a-z])/g, (_, char) => char.toUpperCase());
};
const Link = ({ children, href, title: title2, className, asChild }) => {
  const { Link: LegacyLink } = useRouterContext();
  const routerType = useRouterType();
  const Link22 = useLink();
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link22;
  const Comp = asChild ? Slot : ActiveLink;
  return /* @__PURE__ */ jsx(Comp, { prefetch: "intent", viewTransition: true, to: href, className: cn("hover:bg-accent", className), title: title2, children });
};
Link.displayName = "Link";
const Breadcrumbs = ({ showHome = true, meta: meta2 }) => {
  var _a2, _b, _c, _d, _e;
  const { breadcrumbs } = useBreadcrumb({
    meta: meta2
  });
  const { hasDashboard } = useRefineContext();
  const { resources } = useResource();
  const dashboardResource2 = resources[0];
  const rootRouteResource = matchResourceFromRoute("/", resources);
  const BreadCrumbItems = breadcrumbs.map(({ label, href }, key) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: href ? /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, className: "text-link hover:bg-transparent", children: /* @__PURE__ */ jsx(Link, { href, children: t(`menus.${toCamelCase(label)}`, label) }) }) : /* @__PURE__ */ jsx(BreadcrumbPage, { children: t(`menus.${toCamelCase(label)}`, label) }) }),
    key < breadcrumbs.length - 1 && /* @__PURE__ */ jsx(BreadcrumbSeparator, {})
  ] }, key));
  return /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
    showHome || hasDashboard || rootRouteResource.found ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(
        BreadcrumbLink,
        {
          href: (_a2 = dashboardResource2.list) == null ? void 0 : _a2.toString(),
          asChild: true,
          title: ((_b = dashboardResource2 == null ? void 0 : dashboardResource2.meta) == null ? void 0 : _b.title) ?? dashboardResource2.name ?? "Dashboard",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              className: "hover:bg-transparent",
              href: (_c = dashboardResource2.list) == null ? void 0 : _c.toString(),
              title: ((_d = dashboardResource2 == null ? void 0 : dashboardResource2.meta) == null ? void 0 : _d.title) ?? dashboardResource2.name ?? "Dashboard",
              children: ((_e = dashboardResource2 == null ? void 0 : dashboardResource2.meta) == null ? void 0 : _e.icon) ?? /* @__PURE__ */ jsx(HomeIcon, { className: "h-4 w-4" })
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsx(BreadcrumbSeparator, {})
    ] }) : null,
    BreadCrumbItems
  ] }) });
};
function Avatar({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      className: cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className),
      ...props
    }
  );
}
function AvatarImage({ className, ...props }) {
  if (!props.src) {
    props.src = "?";
  }
  return /* @__PURE__ */ jsx(AvatarPrimitive.Image, { "data-slot": "avatar-image", className: cn("aspect-square size-full", className), ...props });
}
function AvatarFallback({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn("bg-muted flex size-full items-center justify-center rounded-full", className),
      ...props
    }
  );
}
function DropdownMenu({ ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Trigger, { "data-slot": "dropdown-menu-trigger", ...props });
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuGroup({ ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    DropdownMenuPrimitive.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn("px-2 py-1.5 text-sm font-semibold data-[inset]:pl-8", className),
      ...props
    }
  );
}
function DropdownMenuSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function DropdownMenuShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: cn("text-muted-foreground ml-auto text-xs tracking-widest", className),
      ...props
    }
  );
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground aria-invalid:outline-destructive/60 dark:aria-invalid:outline-destructive ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 dark:aria-invalid:ring-destructive/40 aria-invalid:ring-destructive/20 aria-invalid:border-destructive/60 dark:aria-invalid:border-destructive flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-[3px] aria-invalid:focus-visible:outline-none md:text-sm dark:aria-invalid:focus-visible:ring-4",
        className
      ),
      ...props
    }
  );
}
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator-root",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetPortal({ ...props }) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx(XIcon, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "sheet-header", className: cn("flex flex-col gap-1.5 p-4", className), ...props });
}
function SheetTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold tracking-tight", className),
      ...props
    }
  );
}
function SheetDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function TooltipProvider({ delayDuration = 0, ...props }) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Provider, { "data-slot": "tooltip-provider", delayDuration, ...props });
}
function Tooltip({ ...props }) {
  return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 4,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-sm rounded-md px-3 py-1.5 text-xs",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(TooltipPrimitive.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
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
const SIDEBAR_COOKIE_NAME = "sidebarClose";
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
      "data-slot": "sidebar-wrapper",
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
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsx(
      "div",
      {
        "data-slot": "sidebar",
        className: cn("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", className),
        ...props,
        children
      }
    );
  }
  if (isMobile) {
    return /* @__PURE__ */ jsxs(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: [
      /* @__PURE__ */ jsxs(SheetHeader, { className: "sr-only", children: [
        /* @__PURE__ */ jsx(SheetTitle, { children: "Sidebar" }),
        /* @__PURE__ */ jsx(SheetDescription, { children: "Displays the mobile sidebar." })
      ] }),
      /* @__PURE__ */ jsx(
        SheetContent,
        {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: {
            "--sidebar-width": SIDEBAR_WIDTH_MOBILE
          },
          side,
          children: /* @__PURE__ */ jsx("div", { className: "flex h-full w-full flex-col", children })
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "group peer text-sidebar-foreground z-31 hidden md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar",
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
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
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
}
function SidebarTrigger({ className, onClick, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: cn("h-7 w-7", className),
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx(PanelLeftIcon, {}),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function SidebarRail({ className, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
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
function SidebarInset({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: cn(
        "bg-background relative flex min-h-svh flex-1 flex-col",
        "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      ),
      ...props
    }
  );
}
function SidebarInput({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Input,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: cn("bg-background h-8 w-full shadow-none", className),
      ...props
    }
  );
}
function SidebarHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
}
function SidebarFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
}
function SidebarSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Separator,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: cn("bg-sidebar-border mx-2 w-auto", className),
      ...props
    }
  );
}
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className),
      ...props
    }
  );
}
function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "div";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "sidebar-group-label",
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
function SidebarGroupContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: cn("w-full text-sm", className),
      ...props
    }
  );
}
function SidebarMenu({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-1", className),
      ...props
    }
  );
}
function SidebarMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className),
      ...props
    }
  );
}
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
function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "sidebar-menu-button",
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
}
function SidebarMenuSub({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuSubItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: cn("group/menu-sub-item relative", className),
      ...props
    }
  );
}
function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "sidebar-menu-sub-button",
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
}
function getFirstLetter(str = "") {
  return str.charAt(0);
}
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function NavUser() {
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
            /* @__PURE__ */ jsx(AvatarImage, { src: (user == null ? void 0 : user.avatar) || "/images/avatar.jpg", alt: (user == null ? void 0 : user.name) || "" }),
            /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-lg", children: getFirstLetter((user == null ? void 0 : user.name) || "") || "?" })
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
              /* @__PURE__ */ jsx(AvatarImage, { src: (user == null ? void 0 : user.avatar) || "/images/avatar.jpg", alt: (user == null ? void 0 : user.name) || "" }),
              /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-lg", children: getFirstLetter((user == null ? void 0 : user.name) || "") || "?" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ jsx("span", { className: "truncate font-semibold capitalize", children: (user == null ? void 0 : user.name) || "unknown user" }),
              /* @__PURE__ */ jsx("span", { className: "truncate text-xs", children: (user == null ? void 0 : user.email) || "..." })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx(DropdownMenuGroup, { children: /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
            /* @__PURE__ */ jsx(Baby, {}),
            /* @__PURE__ */ jsx(Link$1, { prefetch: "intent", viewTransition: true, to: "/system/admin/auditRecord/applyRole", children: t("menus.auditRecord/applyRole") })
          ] }) }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: onLoginout, children: [
            /* @__PURE__ */ jsx(LogOut, {}),
            /* @__PURE__ */ jsx("span", { children: t("buttons.logout") })
          ] })
        ]
      }
    )
  ] }) }) });
}
function DynamicIcon({
  name,
  ...props
}) {
  const [Icon, setIcon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    if (!name) return;
    setIsLoading(true);
    setHasError(false);
    const loadIcon = async () => {
      try {
        const iconModule = await import(`lucide-react/dist/esm/icons/${name.toLowerCase()}`);
        setIcon(() => iconModule.default);
        setIsLoading(false);
      } catch (error) {
        console.error(`图标 "${name}" 不存在`, error);
        setHasError(true);
        setIsLoading(false);
      }
    };
    loadIcon();
  }, [name]);
  if (!name) return null;
  if (isLoading) return /* @__PURE__ */ jsx(Loader2, { className: "animate-spin", ...props });
  if (hasError || !Icon) return null;
  return /* @__PURE__ */ jsx(Icon, { ...props });
}
function Collapsible({ ...props }) {
  return /* @__PURE__ */ jsx(CollapsiblePrimitive.Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(CollapsiblePrimitive.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...props });
}
function CollapsibleContent({ ...props }) {
  return /* @__PURE__ */ jsx(CollapsiblePrimitive.CollapsibleContent, { "data-slot": "collapsible-content", ...props });
}
function SidebarEasy() {
  const { menuItems, selectedKey, defaultOpenKeys } = useMenu();
  const resourceParams = useResourceParams();
  const getCrudPaths = (item) => {
    var _a2, _b, _c, _d, _e, _f;
    const crudPaths = [(_a2 = item.list) == null ? void 0 : _a2.toString(), (_b = item.create) == null ? void 0 : _b.toString()];
    if (resourceParams.id) {
      crudPaths.push(
        (_d = (_c = item.edit) == null ? void 0 : _c.toString()) == null ? void 0 : _d.replace(":id", resourceParams.id),
        (_f = (_e = item.show) == null ? void 0 : _e.toString()) == null ? void 0 : _f.replace(":id", resourceParams.id)
      );
    }
    return crudPaths.filter(Boolean);
  };
  return menuItems.map((menus_1, index) => {
    var _a2;
    return (
      // <CanAccess key={menus_1.key} resource={menus_1.name} action="list">
      /* @__PURE__ */ jsxs(SidebarGroup, { children: [
        /* @__PURE__ */ jsx(SidebarGroupLabel, { children: ((_a2 = menus_1.meta) == null ? void 0 : _a2.label) || t(`menus.${menus_1.name}`, menus_1.name) }),
        /* @__PURE__ */ jsx(SidebarMenu, { children: menus_1.children.map((menus_2, idx) => {
          var _a3, _b, _c;
          const isCollapsibleOpen = defaultOpenKeys.includes(menus_2.key);
          const menu2Name = ((_a3 = menus_2.meta) == null ? void 0 : _a3.label) || t(`menus.${menus_2.name}`, menus_2.name);
          return (
            // <CanAccess key={menus_2.key} resource={menus_2.name} action="list">
            /* @__PURE__ */ jsx(Collapsible, { asChild: true, defaultOpen: isCollapsibleOpen, className: "group/collapsible", children: /* @__PURE__ */ jsxs(SidebarMenuItem, { children: [
              /* @__PURE__ */ jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(SidebarMenuButton, { tooltip: menu2Name, children: [
                ((_b = menus_2 == null ? void 0 : menus_2.meta) == null ? void 0 : _b.icon) && /* @__PURE__ */ jsx(DynamicIcon, { name: menus_2.meta.icon }),
                /* @__PURE__ */ jsx("span", { className: "capitalize", children: menu2Name }),
                /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
              ] }) }),
              /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsx(SidebarMenuSub, { children: (_c = menus_2.children) == null ? void 0 : _c.map((item) => {
                var _a4, _b2;
                const paths = getCrudPaths(item);
                const isActive = paths.includes(selectedKey) || paths.some((s) => (s == null ? void 0 : s.endsWith(selectedKey)) || (selectedKey == null ? void 0 : selectedKey.endsWith(s)));
                const menu3Name = ((_a4 = item.meta) == null ? void 0 : _a4.label) || t(`menus.${item.name}`, item.name);
                return (
                  // <CanAccess key={item.key} resource={item.name} action="list">
                  /* @__PURE__ */ jsx(SidebarMenuSubItem, { children: /* @__PURE__ */ jsx(
                    SidebarMenuSubButton,
                    {
                      asChild: true,
                      isActive,
                      className: cn(isActive && "bg-primary! text-primary-foreground!"),
                      children: /* @__PURE__ */ jsx(Link$1, { prefetch: "intent", viewTransition: true, to: ((_b2 = item.list) == null ? void 0 : _b2.toString()) ?? "/#", children: /* @__PURE__ */ jsx("span", { className: "capitalize", children: menu3Name }) })
                    }
                  ) }, item.key)
                );
              }) }) })
            ] }) }, idx)
          );
        }) })
      ] }, index)
    );
  });
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
      const formData = new FormData();
      formData.append("role", (selectedRole == null ? void 0 : selectedRole.value) || "");
      await fetch(`${apiBase}/permissions/switch`, {
        method: "POST",
        body: formData
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
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground font-medium", children: /* @__PURE__ */ jsx(Link$1, { prefetch: "intent", viewTransition: true, to: "/system/admin/auditRecord/applyRole", children: "Apply More Roles" }) })
          ] })
        ]
      }
    )
  ] }) }) });
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
const items = [
  { title: "API Docs", url: "/api-docs", icon: Bookmark },
  { title: "Service Health Check", url: "https://stats.uptimerobot.com/XtZEMRaY1Y", icon: Activity }
];
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
    items.map((item, index) => /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(SidebarMenuButton, { asChild: true, size: "sm", children: /* @__PURE__ */ jsxs("a", { href: item.url, target: "_blank", rel: "noreferrer", children: [
      /* @__PURE__ */ jsx(item.icon, { className: cn(item.title === "Service Health Check" && "animate-pulse text-green-500") }),
      /* @__PURE__ */ jsx("span", { children: t(`menusSecondary.${item.title}`, item.title) })
    ] }) }) }, index)),
    /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(SidebarMenuButton, { asChild: true, size: "sm", children: /* @__PURE__ */ jsxs("div", { ref: buttonRef, className: "cursor-pointer", children: [
      /* @__PURE__ */ jsx(Bug, { className: "text-yellow-500" }),
      /* @__PURE__ */ jsx("span", { children: t("menusSecondary.Report a Bug", "Report a Bug") })
    ] }) }) }, "sentry-feedback"),
    /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsx(SidebarMenuButton, { asChild: true, size: "sm", children: /* @__PURE__ */ jsx("div", { className: "cursor-pointer", children: /* @__PURE__ */ jsx(ThemeSwitcher, { theme, setTheme }) }) }) }, "theme-switch")
  ] }) }) });
}
function SidebarLeft({ ...props }) {
  return /* @__PURE__ */ jsxs(Sidebar, { collapsible: "icon", ...props, children: [
    /* @__PURE__ */ jsx(SidebarHeader, { children: /* @__PURE__ */ jsx(RoleSwitcher, {}) }),
    /* @__PURE__ */ jsxs(SidebarContent, { children: [
      /* @__PURE__ */ jsx(SidebarEasy, {}),
      /* @__PURE__ */ jsx(NavSecondary, {})
    ] }),
    /* @__PURE__ */ jsx(SidebarFooter, { children: /* @__PURE__ */ jsx(NavUser, {}) }),
    /* @__PURE__ */ jsx(SidebarRail, {})
  ] });
}
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 transition-[color,box-shadow]",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow-sm [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow-sm [a&]:hover:bg-destructive/90",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsx(Comp, { "data-slot": "badge", className: cn(badgeVariants({ variant }), className), ...props });
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
function SidebarRight(props) {
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
    Sidebar,
    {
      collapsible: "none",
      className: cn("sticky top-0 flex h-svh w-0 border-l transition-all", isActive && "w-(--sidebar-width)!"),
      ...props,
      children: typeof uiFilter === "function" ? uiFilter(lastMatch, matches) : uiFilter
    }
  );
}
function SidebarLayout({ children }) {
  const { sidebarClose } = useRouteLoaderData("root");
  return /* @__PURE__ */ jsxs(SidebarProvider, { open: !sidebarClose || sidebarClose !== "true", children: [
    /* @__PURE__ */ jsx(SidebarLeft, {}),
    /* @__PURE__ */ jsxs(SidebarInset, { className: "max-w-[100vw] group-has-data-[collapsible=icon]/sidebar-wrapper:max-w-[calc(100vw-var(--sidebar-width-icon))] group-has-data-[state=expanded]/sidebar-wrapper:max-w-[calc(100vw-var(--sidebar-width))]", children: [
      /* @__PURE__ */ jsxs("header", { className: "bg-background sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4", children: [
          /* @__PURE__ */ jsx(SidebarTrigger, { className: "-ml-1" }),
          /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mr-2 h-2!" }),
          /* @__PURE__ */ jsx(Breadcrumbs, {})
        ] }),
        /* @__PURE__ */ jsx("div", { className: "ml-auto px-3", children: /* @__PURE__ */ jsx(NavTools, {}) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex max-w-full flex-1 flex-col gap-4 p-4 pt-0 transition-[max-width] duration-200 ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:max-w-[calc(100vw-var(--sidebar-width-icon))] group-data-[collapsible=offcanvas]/sidebar-wrapper:max-w-[100vw]", children: children ? children : /* @__PURE__ */ jsx(Outlet, {}) })
    ] }),
    /* @__PURE__ */ jsx(SidebarRight, {})
  ] });
}
async function loader$T({ request }) {
  await requireUserSession(request);
  return null;
}
function FrontRouteProject() {
  return /* @__PURE__ */ jsx(CanAccess, { fallback: /* @__PURE__ */ jsx(PermissionDenied, {}), children: /* @__PURE__ */ jsx(SidebarLayout, {}) });
}
function ErrorBoundary$M() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$M,
  default: FrontRouteProject,
  loader: loader$T
}, Symbol.toStringTag, { value: "Module" }));
const Empty = ({ message, className }) => {
  return /* @__PURE__ */ jsx("div", { className: cn(className), children: message || "目前没有记录 ..." });
};
const configureLoader = () => {
  loader$V.config({
    ["paths"]: { vs: `${baseUrl}/monaco-editor/vs` },
    ["vs/nls"]: { availableLanguages: { "*": "zh-cn" } }
  });
};
function CodeEditor({
  className,
  onChange,
  enableToggleDiff = true,
  openDiff = false,
  name,
  ...props
}) {
  const monaco = useMonaco();
  const editorRef = useRef(null);
  const diffEditorRef = useRef(null);
  const [isDiff, setIsDiff] = useState(openDiff);
  const [original] = useState(props.value);
  const [modified, setModified] = useState(props.modified || props.value);
  useEffect(() => {
    configureLoader();
    return () => {
      if (editorRef.current) {
        editorRef.current.dispose();
        editorRef.current = null;
      }
      if (diffEditorRef.current) {
        diffEditorRef.current.dispose();
        diffEditorRef.current = null;
      }
      if (monaco) {
        monaco.editor.getModels().forEach((model) => model.dispose());
      }
    };
  }, [monaco]);
  function handleEditorChange(value, _ev) {
    setModified(value || "");
    onChange == null ? void 0 : onChange({ target: { value: value || "", name: name || "unknown" }, type: "change" });
  }
  function handleEditorMount(editor2) {
    editorRef.current = editor2;
  }
  function handleDiffEditorMount(editor2) {
    diffEditorRef.current = editor2;
  }
  useEffect(() => {
    const handleUnhandledRejection = (event) => {
      var _a2, _b;
      if (((_a2 = event.reason) == null ? void 0 : _a2.type) === "cancelation" && ((_b = event.reason) == null ? void 0 : _b.msg) === "operation is manually canceled") {
        event.preventDefault();
      }
    };
    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);
  const baseProps = { theme: "vs-dark", height: "30vh", ...props };
  return /* @__PURE__ */ jsxs("div", { className: cn("border-input overflow-hidden rounded-md border bg-[#1e1e1e] text-white shadow-xs", className), children: [
    /* @__PURE__ */ jsx("div", { className: "mx-2 my-1 flex min-h-[24px] justify-end", children: enableToggleDiff && modified !== original && /* @__PURE__ */ jsx(
      Button,
      {
        className: "text-xs text-green-500",
        type: "button",
        variant: "link",
        size: "sm",
        onClick: () => setIsDiff(!isDiff),
        icon: /* @__PURE__ */ jsx(Eye, {}),
        children: isDiff ? "返回编辑" : "查看变更"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: cn("block", isDiff && "hidden"), children: /* @__PURE__ */ jsx(Editor, { ...baseProps, value: modified, onChange: handleEditorChange, onMount: handleEditorMount }) }),
    (enableToggleDiff || openDiff) && /* @__PURE__ */ jsx("div", { className: cn("hidden", isDiff && "block"), children: /* @__PURE__ */ jsx(
      DiffEditor,
      {
        ...baseProps,
        options: { readOnly: true },
        original,
        modified,
        onMount: handleDiffEditorMount
      }
    ) })
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
      src: src || "/images/placeholder.svg",
      alt,
      className: cn("w-full rounded-lg object-cover", className),
      ...props
    }
  );
}
function transformPrismaError2ShortMessage(message) {
  if (!message.includes("prisma")) {
    return message;
  }
  const errorType = message.split("invocation")[0];
  let errorDetails = message.split("\n").pop() || "";
  if (errorDetails.includes("Foreign key constraint violated")) {
    errorDetails = `外键约束无法删除。当前记录与 \`${errorDetails.split(": `")[1].split("_")[0]}\` 存在关联关系`;
  }
  return `${errorType}, ${errorDetails}`.trim();
}
class PrismaError extends Error {
  constructor(error) {
    super(error.message);
    __publicField(this, "code");
    __publicField(this, "target");
    __publicField(this, "originalError");
    this.name = "PrismaError";
    this.code = error.code;
    this.target = error.target;
    this.originalError = error.originalError;
    Object.setPrototypeOf(this, PrismaError.prototype);
  }
}
function handlePrismaError(error) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    const { code, meta: meta2 } = error || {};
    const { target: metaTarget, cause: metaCause, field_name } = meta2 || {};
    if (code === "P2002") {
      const target = Array.isArray(metaTarget) ? metaTarget.join(", ") : metaTarget;
      throw new PrismaError({
        code,
        message: `唯一性约束冲突：字段 "${target}" 的值已存在，请使用其他值。`,
        target,
        originalError: error
      });
    }
    if (code === "P2025") {
      throw new PrismaError({
        code,
        message: `记录不存在：${metaCause || "请求的资源未找到"}`,
        originalError: error
      });
    }
    if (code === "P2003") {
      let reason = "关联记录不存在";
      if (field_name) {
        reason = `当前记录与 \`${String(field_name).split("_")[0]}\` 存在关联关系`;
      }
      throw new PrismaError({
        code,
        message: `外键约束失败：${reason}`,
        originalError: error
      });
    }
    if (code === "P2005") {
      throw new PrismaError({
        code,
        message: `字段类型错误：${field_name || "提供的值类型不正确"}`,
        originalError: error
      });
    }
    throw new PrismaError({
      code,
      message: `数据库操作错误 (${code}): ${error.message}`,
      originalError: error
    });
  }
  if (error instanceof Prisma.PrismaClientValidationError) {
    throw new PrismaError({
      code: "VALIDATION_ERROR",
      message: `数据验证错误: ${transformPrismaError2ShortMessage(error.message)}`,
      originalError: error
    });
  }
  throw new PrismaError({
    code: "UNKNOWN_ERROR",
    message: error instanceof Error ? error.message : "发生未知错误",
    originalError: error
  });
}
function isValidDataServiceAction(action2) {
  return action2 in dataService;
}
function mapDataActionToPermissionAction(action2) {
  if (["findMany", "findFirst", "findUnique", "findUniqueOrThrow", "count"].includes(action2)) {
    return "list";
  } else if (["create", "createMany"].includes(action2)) {
    return "create";
  } else if (["update", "updateMany"].includes(action2)) {
    return "edit";
  } else if (["delete", "deleteMany"].includes(action2)) {
    return "delete";
  }
  return "unknown";
}
async function checkPermissionForAction(model, action2, context) {
  const { user, request } = context;
  const auth = user || (request ? await getUser(request) : void 0);
  let role = "unknown";
  if (auth == null ? void 0 : auth.role) {
    role = auth.role;
  } else {
    return { hasPermission: false, subject: "anonymous", object: model, action: action2 };
  }
  const subject = role;
  const permissionAction = mapDataActionToPermissionAction(action2);
  const object = [EnumAction.edit, EnumAction.delete].includes(permissionAction) ? `${model}/*` : model;
  const hasPermission = await checkPermission(subject, object, permissionAction);
  return { hasPermission, subject, object, action: permissionAction };
}
const dataService = {
  /**
   * 查找多个记录
   * @param model Prisma 模型名称
   * @param args 查询参数
   * @param context 请求上下文
   * @returns 查询结果数组
   */
  async findMany(model, args, context) {
    try {
      const { hasPermission, action: action2 } = await checkPermissionForAction(model, "findMany", context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action2}\``);
      }
      const db2 = await getEnhancedDb(context || {});
      const [data2, total] = await Promise.all([db2[model].findMany(args), this.count(model, args.where, context)]);
      return { data: data2, total };
    } catch (error) {
      throw handlePrismaError(error);
    }
  },
  /**
   * 查找第一个匹配的记录
   * @param model Prisma 模型名称
   * @param args 查询参数
   * @param context 请求上下文
   * @returns 查询结果或 null
   */
  async findFirst(model, args, context) {
    try {
      const { hasPermission, action: action2 } = await checkPermissionForAction(model, "findFirst", context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action2}\``);
      }
      const db2 = await getEnhancedDb(context || {});
      return db2[model].findFirst(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },
  /**
   * 通过唯一标识查找记录
   * @param model Prisma 模型名称
   * @param args 查询参数
   * @param context 请求上下文
   * @returns 查询结果或 null
   */
  async findUnique(model, args, context) {
    try {
      const { hasPermission, action: action2 } = await checkPermissionForAction(model, "findUnique", context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action2}\``);
      }
      const db2 = await getEnhancedDb(context || {});
      return db2[model].findUnique(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },
  /**
   * 通过唯一标识查找记录，如果不存在则抛出错误
   * @param model Prisma 模型名称
   * @param args 查询参数
   * @param context 请求上下文
   * @returns 查询结果
   */
  async findUniqueOrThrow(model, args, context) {
    try {
      const { hasPermission, action: action2 } = await checkPermissionForAction(model, "findUniqueOrThrow", context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action2}\``);
      }
      const db2 = await getEnhancedDb(context || {});
      return db2[model].findUniqueOrThrow(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },
  /**
   * 计数查询
   * @param model Prisma 模型名称
   * @param args 查询参数
   * @param context 请求上下文
   * @returns 记录数
   */
  async count(model, args, context) {
    try {
      const { hasPermission, action: action2 } = await checkPermissionForAction(model, "count", context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action2}\``);
      }
      const db2 = await getEnhancedDb(context || {});
      return db2[model].count(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },
  /**
   * 创建记录
   * @param model Prisma 模型名称
   * @param args 创建参数
   * @param context 请求上下文
   * @returns 创建的记录
   */
  async create(model, args, context) {
    try {
      const { hasPermission, action: action2 } = await checkPermissionForAction(model, "create", context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action2}\``);
      }
      const { success, originalError } = zodParse(String(model), args.data);
      if (!success) {
        throw originalError;
      }
      const db2 = await getEnhancedDb(context || {});
      return db2[model].create(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },
  /**
   * 批量创建记录
   * @param model Prisma 模型名称
   * @param args 创建参数
   * @param context 请求上下文
   * @returns 创建结果
   */
  async createMany(model, args, context) {
    try {
      const { hasPermission, action: action2 } = await checkPermissionForAction(model, "createMany", context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action2}\``);
      }
      for (const item of args.data) {
        const { success, originalError } = zodParse(String(model), item);
        if (!success) {
          throw originalError;
        }
      }
      const db2 = await getEnhancedDb(context || {});
      return db2[model].createMany(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },
  /**
   * 更新记录
   * @param model Prisma 模型名称
   * @param args 更新参数
   * @param context 请求上下文
   * @returns 更新后的记录
   */
  async update(model, args, context) {
    try {
      const { hasPermission, action: action2 } = await checkPermissionForAction(model, "update", context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action2}\``);
      }
      const db2 = await getEnhancedDb(context || {});
      return db2[model].update(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },
  /**
   * 批量更新记录
   * @param model Prisma 模型名称
   * @param args 更新参数
   * @param context 请求上下文
   * @returns 更新结果
   */
  async updateMany(model, args, context) {
    try {
      const { hasPermission, action: action2 } = await checkPermissionForAction(model, "updateMany", context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action2}\``);
      }
      const db2 = await getEnhancedDb(context || {});
      return db2[model].updateMany(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },
  /**
   * 删除记录
   * @param model Prisma 模型名称
   * @param args 删除参数
   * @param context 请求上下文
   * @returns 删除的记录
   */
  async delete(model, args, context) {
    try {
      const { hasPermission, action: action2 } = await checkPermissionForAction(model, "delete", context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action2}\``);
      }
      const db2 = await getEnhancedDb(context || {});
      return db2[model].delete(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },
  /**
   * 批量删除记录
   * @param model Prisma 模型名称
   * @param args 删除参数
   * @param context 请求上下文
   * @returns 删除结果
   */
  async deleteMany(model, args, context) {
    try {
      const { hasPermission, action: action2 } = await checkPermissionForAction(model, "deleteMany", context);
      if (!hasPermission) {
        throw new Error(`你没有权限执行操作 \`${model}.${action2}\``);
      }
      const db2 = await getEnhancedDb(context || {});
      return db2[model].deleteMany(args);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },
  /**
   * 执行原始数据库查询
   * @param query 查询语句
   * @param params 查询参数
   * @param context 请求上下文
   * @returns 查询结果
   */
  async executeRaw(query, params = [], context) {
    var _a2;
    try {
      if (((_a2 = context.user) == null ? void 0 : _a2.role) !== "admin") {
        throw new Error("只有管理员才能执行原始数据库查询");
      }
      const db2 = await getEnhancedDb(context || {});
      return db2.$executeRaw.apply(db2, [query, ...params]);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },
  /**
   * 执行原始数据库查询并返回查询结果
   * @param query 查询语句
   * @param params 查询参数
   * @param context 请求上下文
   * @returns 查询结果
   */
  async queryRaw(query, params = [], context) {
    var _a2;
    try {
      if (((_a2 = context.user) == null ? void 0 : _a2.role) !== "admin") {
        throw new Error("只有管理员才能执行原始数据库查询");
      }
      const db2 = await getEnhancedDb(context || {});
      return db2.$queryRaw.apply(db2, [query, ...params]);
    } catch (error) {
      throw handlePrismaError(error);
    }
  },
  /**
   * 事务操作
   * @param fn 事务函数
   * @param context 请求上下文
   * @returns 事务结果
   */
  async transaction(fn, context) {
    var _a2;
    try {
      if (((_a2 = context.user) == null ? void 0 : _a2.role) !== "admin") {
        throw new Error("只有管理员才能执行事务操作");
      }
      const db2 = await getEnhancedDb(context || {});
      return await db2.$transaction(fn);
    } catch (error) {
      throw handlePrismaError(error);
    }
  }
};
const tyServer = {
  // 获取与我相关的需求
  async getMyIssues(request) {
    const { list } = await apiPost("/getMyIssues", request, { _userKey: "loginName" });
    if (Array.isArray(list)) {
      return list;
    }
    return [];
  },
  // 发起集测配置申请
  async deployServiceBuild(request, params) {
    const { contentJsonObject, ...rest } = params || {};
    return apiPost("/deployServiceBuild", request, {
      _userKey: "commitUser",
      bizCode: "CFB",
      projectId: 204,
      commitTime: dayjs().format("YYYYMMDDHHmmss"),
      env: "inte",
      status: 3,
      // 跟天元约定，固定为3
      contentJson: JSON.stringify(contentJsonObject),
      ...rest
    });
  },
  // 查询集测配置申请记录
  async deployServiceHistory(request, params) {
    const { list } = await apiPost("/deployServiceHistory", request, params);
    if (Array.isArray(list)) {
      return list;
    }
    return [];
  }
};
async function apiPost(api, request, params) {
  const { user } = await requireUser(request);
  const { _userKey, ...rest } = params || {};
  const body = JSON.stringify({
    ...rest,
    secretKey: process.env.TY_SECRET_KEY,
    [_userKey || "?"]: user == null ? void 0 : user.email.split("@")[0]
  });
  const response = await fetch(`${process.env.TY_HOST}${api}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body
  });
  if (!response.ok) {
    Sentry.captureException(new Error(`HTTP错误: ${response.status}`), {
      tags: { type: "http_error", api, status: response.status },
      extra: { api, params: JSON.stringify(rest), statusText: response.statusText }
    });
    throw new Error(`HTTP error! status = ${response.status}`);
  }
  const { code, data: data2, message } = await response.json() || {};
  if (code !== "0000") {
    Sentry.captureException(new Error(`业务错误: ${message}`), {
      tags: { type: "business_error", api, code },
      extra: { api, params: JSON.stringify(rest), code, message }
    });
    throw new Error(message);
  }
  return data2;
}
const tryParse = (jsonString) => {
  let jsonObject = {};
  let status = false;
  if (jsonString && typeof jsonString === "object") {
    status = true;
    jsonObject = jsonString;
  }
  if (typeof jsonString === "string" && jsonString.includes("{") && jsonString.includes("}")) {
    try {
      jsonObject = JSON.parse(jsonString);
      if (typeof jsonObject === "object") {
        status = true;
      }
    } catch (error) {
    }
  }
  return {
    status,
    data: status ? jsonObject : void 0,
    original: jsonString
  };
};
function deepParse(data2) {
  const { status, data: content = {}, original } = tryParse(data2);
  if (!status) {
    return { status: false, original, content: {} };
  }
  Object.keys(content).forEach((key) => {
    var _a2;
    const value = content[key];
    if (value && ((_a2 = String(value)) == null ? void 0 : _a2.includes("{"))) {
      const res = tryParse(value);
      content[key] = res.status ? res.data : value;
    }
  });
  return { status: true, content, original };
}
async function getAllParams(request, params = {}) {
  const url = new URL(request.url);
  const searchParams = Object.fromEntries(url.searchParams.entries());
  let formDataParams = {};
  if (request.method === "POST" || request.method === "PUT") {
    const formData = await request.formData();
    formDataParams = Object.fromEntries(formData.entries());
  }
  return {
    ...searchParams,
    ...formDataParams,
    ...params
  };
}
function getDefaultTitle(matches) {
  const titles = [];
  const { pathname } = matches[matches.length - 1];
  const matchedResource = dataResources.find((r) => pathname.startsWith(r.list));
  const { name, meta: meta2 } = matchedResource || {};
  let parent = meta2 == null ? void 0 : meta2.parent;
  parent = t(`menus.${parent}`, parent || "");
  parent = capitalizeFirstLetter(parent);
  titles.push(parent);
  let title2 = meta2 == null ? void 0 : meta2.title;
  if (!title2) {
    title2 = t(`menus.${name}`, name || "");
  }
  title2 = capitalizeFirstLetter(title2);
  titles.push(title2);
  let action2 = pathname.replace(`${matchedResource == null ? void 0 : matchedResource.list}/`, "").split("/").shift();
  action2 = t(`buttons.${action2}`, "");
  action2 = capitalizeFirstLetter(action2);
  titles.push(action2);
  return titles.filter(Boolean).join(" · ");
}
const meta$A = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$S({ request, params }) {
  var _a2;
  const mergedData = await getAllParams(request, params);
  const { name } = mergedData;
  const param = `frontRoute:${name}`;
  const history = await tyServer.deployServiceHistory(request, { param }).then((res) => {
    return res.splice(0, 10);
  });
  const { auditRecordId } = JSON.parse(((_a2 = history == null ? void 0 : history[0]) == null ? void 0 : _a2.contentJson) ?? "");
  let auditRecord = null;
  if (auditRecordId) {
    try {
      const data2 = await dataService.findUniqueOrThrow(
        "auditRecord",
        {
          where: { id: auditRecordId }
        },
        { request }
      );
      auditRecord = data2;
    } catch (error) {
      auditRecord = { dataPrevious: { message: error == null ? void 0 : error.message } };
    }
  }
  return {
    param,
    dataPrevious: auditRecord == null ? void 0 : auditRecord.dataPrevious,
    history
  };
}
function FrontRouteProjectHistory() {
  const { param, dataPrevious, history } = useLoaderData();
  return /* @__PURE__ */ jsxs("article", { className: "px-8 pt-8 pb-4", children: [
    /* @__PURE__ */ jsx("header", { className: "mb-8", children: /* @__PURE__ */ jsxs(H1, { className: "relative mb-4 inline-flex gap-3 text-4xl font-bold", children: [
      "配置发布申请记录 - ",
      param
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      history.map((log, index) => {
        const { status, content, original } = deepParse(log.contentJson);
        const isDeployed = log.deployStatus === "3";
        const { action: action2, auditRecordId, ...rest } = content;
        return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground mb-2 flex flex-wrap items-center gap-4 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Badge, { className: cn(isDeployed && "bg-green-500"), children: index + 1 }),
              /* @__PURE__ */ jsx("span", { className: cn(isDeployed && "text-green-600"), children: isDeployed ? "发布成功" : "等待发布" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Type, { className: "mr-2 h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: String(action2 || log.operateType) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(LeafyGreen, { className: "mr-2 h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: log.issueId && log.issueId !== "0" ? log.issueId : "N/A" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(User2, { className: "mr-2 h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: log.commitUser })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: log.commitTime })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(IdCard, { className: "mr-2 h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: String(auditRecordId || "N/A") })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: cn("border-input rounded-lg border-2", isDeployed && "border-green-500"), children: index === 0 && action2 !== EnumAction.delete ? /* @__PURE__ */ jsx(
            CodeEditor,
            {
              language: "json",
              value: JSON.stringify(dataPrevious, null, 2),
              modified: JSON.stringify(rest, null, 2),
              enableToggleDiff: false,
              openDiff: true
            }
          ) : /* @__PURE__ */ jsx("pre", { className: "bg-muted overflow-x-auto rounded-lg p-4 text-sm whitespace-pre", children: status ? JSON.stringify(rest, null, 2) : original }) })
        ] }, log.id);
      }),
      !history.length ? /* @__PURE__ */ jsx(Empty, {}) : /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "备注: 仅展示最近 10 条数据 ..." })
    ] })
  ] });
}
function ErrorBoundary$L() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$L,
  default: FrontRouteProjectHistory,
  loader: loader$S,
  meta: meta$A
}, Symbol.toStringTag, { value: "Module" }));
async function loader$R({ request }) {
  await requireUserSession(request);
  return null;
}
function FrontRouteModule() {
  return /* @__PURE__ */ jsx(CanAccess, { fallback: /* @__PURE__ */ jsx(PermissionDenied, {}), children: /* @__PURE__ */ jsx(SidebarLayout, {}) });
}
function ErrorBoundary$K() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$K,
  default: FrontRouteModule,
  loader: loader$R
}, Symbol.toStringTag, { value: "Module" }));
const meta$z = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$Q({ request, params }) {
  var _a2;
  const mergedData = await getAllParams(request, params);
  const { name } = mergedData;
  const param = `frontRoute:${name}`;
  const history = await tyServer.deployServiceHistory(request, { param }).then((res) => {
    return res.splice(0, 10);
  });
  const { auditRecordId } = JSON.parse(((_a2 = history == null ? void 0 : history[0]) == null ? void 0 : _a2.contentJson) ?? "");
  let auditRecord = null;
  if (auditRecordId) {
    try {
      const data2 = await dataService.findUniqueOrThrow(
        "auditRecord",
        { where: { id: auditRecordId } },
        { request }
      );
      auditRecord = data2;
    } catch (error) {
      auditRecord = { dataPrevious: { message: error == null ? void 0 : error.message } };
    }
  }
  return {
    param,
    dataPrevious: auditRecord == null ? void 0 : auditRecord.dataPrevious,
    history
  };
}
function FrontRouteModuleHistory() {
  const { param, dataPrevious, history } = useLoaderData();
  return /* @__PURE__ */ jsxs("article", { className: "px-8 pt-8 pb-4", children: [
    /* @__PURE__ */ jsx("header", { className: "mb-8", children: /* @__PURE__ */ jsxs(H1, { className: "relative mb-4 inline-flex gap-3 text-4xl font-bold", children: [
      "配置发布申请记录 - ",
      param
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      history.map((log, index) => {
        const { status, content, original } = deepParse(log.contentJson);
        const isDeployed = log.deployStatus === "3";
        const { action: action2, auditRecordId, ...rest } = content;
        return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground mb-2 flex flex-wrap items-center gap-4 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Badge, { className: cn(isDeployed && "bg-green-500"), children: index + 1 }),
              /* @__PURE__ */ jsx("span", { className: cn(isDeployed && "text-green-600"), children: isDeployed ? "发布成功" : "等待发布" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Type, { className: "mr-2 h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: String(action2 || log.operateType) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(LeafyGreen, { className: "mr-2 h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: log.issueId && log.issueId !== "0" ? log.issueId : "N/A" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(User2, { className: "mr-2 h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: log.commitUser })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: log.commitTime })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(IdCard, { className: "mr-2 h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: String(auditRecordId || "N/A") })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: cn("border-input rounded-lg border-2", isDeployed && "border-green-500"), children: index === 0 && action2 !== EnumAction.delete ? /* @__PURE__ */ jsx(
            CodeEditor,
            {
              language: "json",
              value: JSON.stringify(dataPrevious, null, 2),
              modified: JSON.stringify(rest, null, 2),
              enableToggleDiff: false,
              openDiff: true
            }
          ) : /* @__PURE__ */ jsx("pre", { className: "bg-muted overflow-x-auto rounded-lg p-4 text-sm whitespace-pre", children: status ? JSON.stringify(rest, null, 2) : original }) })
        ] }, log.id);
      }),
      !history.length ? /* @__PURE__ */ jsx(Empty, {}) : /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "备注: 仅展示最近 10 条数据 ..." })
    ] })
  ] });
}
function ErrorBoundary$J() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$J,
  default: FrontRouteModuleHistory,
  loader: loader$Q,
  meta: meta$z
}, Symbol.toStringTag, { value: "Module" }));
function Dialog({ ...props }) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({ ...props }) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({ ...props }) {
  return /* @__PURE__ */ jsx(SheetPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        className
      ),
      ...props
    }
  );
}
function DialogContent({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      SheetPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid max-h-[94vh] w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-scroll rounded-lg border p-6 shadow-lg duration-200 sm:max-w-xl",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
            /* @__PURE__ */ jsx(XIcon, {}),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
      ...props
    }
  );
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold tracking-tight", className),
      ...props
    }
  );
}
function DialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    SheetPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function Command({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Command$1,
    {
      "data-slot": "command",
      className: cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      ),
      ...props
    }
  );
}
function CommandInput({ className, ...props }) {
  return /* @__PURE__ */ jsxs("div", { "data-slot": "command-input-wrapper", className: "flex h-9 items-center gap-2 border-b px-3", children: [
    /* @__PURE__ */ jsx(SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ jsx(
      Command$1.Input,
      {
        "data-slot": "command-input",
        className: cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ...props
      }
    )
  ] });
}
function CommandList({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Command$1.List,
    {
      "data-slot": "command-list",
      className: cn("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className),
      ...props
    }
  );
}
function CommandEmpty({ ...props }) {
  return /* @__PURE__ */ jsx(Command$1.Empty, { "data-slot": "command-empty", className: "py-6 text-center text-sm", ...props });
}
function CommandGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Command$1.Group,
    {
      "data-slot": "command-group",
      className: cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      ),
      ...props
    }
  );
}
function CommandSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Command$1.Separator,
    {
      "data-slot": "command-separator",
      className: cn("bg-border -mx-1 h-px", className),
      ...props
    }
  );
}
function CommandItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Command$1.Item,
    {
      "data-slot": "command-item",
      className: cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
const Form = FormProvider;
const FormFieldContext = React.createContext({});
const FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx(Controller, { ...props }) });
};
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
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
function FormItem({ className, ...props }) {
  const id = React.useId();
  return /* @__PURE__ */ jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx("div", { "data-slot": "form-item", className: cn("grid gap-2", className), ...props }) });
}
function FormLabel({ className, ...props }) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx(
    Label,
    {
      "data-slot": "form-label",
      "data-error": !!error,
      className: cn("data-[error=true]:text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx(
    Slot,
    {
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx(
    "p",
    {
      "data-slot": "form-description",
      id: formDescriptionId,
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error == null ? void 0 : error.message) : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "p",
    {
      "data-slot": "form-message",
      id: formMessageId,
      className: cn("text-destructive text-sm font-medium", className),
      ...props,
      children: body
    }
  );
}
function Popover({ ...props }) {
  return /* @__PURE__ */ jsx(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    PopoverPrimitive.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ) });
}
function ScrollArea({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs(ScrollAreaPrimitive.Root, { "data-slot": "scroll-area", className: cn("relative", className), ...props, children: [
    /* @__PURE__ */ jsx(
      ScrollAreaPrimitive.Viewport,
      {
        "data-slot": "scroll-area-viewport",
        className: "ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1",
        children
      }
    ),
    /* @__PURE__ */ jsx(ScrollBar, {}),
    /* @__PURE__ */ jsx(ScrollAreaPrimitive.Corner, {})
  ] });
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        ScrollAreaPrimitive.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
const Combobox = ({ popoverProps, className, ...props }) => {
  var _a2, _b, _c, _d;
  const [open, setOpen] = useState(false);
  const getValue = () => {
    if (props.value && typeof props.value === "object" && "id" in props.value) {
      return props.value.id;
    }
    return props.value;
  };
  const value = getValue();
  return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, ...popoverProps, children: [
    /* @__PURE__ */ jsx(PopoverTrigger$1, { asChild: true, children: /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsxs(
      Button,
      {
        disabled: props.disabled,
        variant: "outline",
        role: "combobox",
        "aria-expanded": open,
        className: cn(
          "flex h-9 w-full justify-between hover:bg-transparent sm:w-[500px]",
          !value && "text-muted-foreground",
          className
        ),
        children: [
          value ? (_b = (_a2 = props.options) == null ? void 0 : _a2.find((option) => option.value === value)) == null ? void 0 : _b.label : props.placeholder ?? "Select",
          /* @__PURE__ */ jsx(CaretSortIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-full max-w-full p-0 sm:w-[400px]", children: /* @__PURE__ */ jsxs(Command, { className: "rounded-lg border shadow-md", children: [
      /* @__PURE__ */ jsx(CommandInput, { placeholder: "Type a command or search..." }),
      /* @__PURE__ */ jsxs(CommandList, { children: [
        /* @__PURE__ */ jsx(CommandEmpty, { children: "No results found." }),
        ((_c = props.options) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ jsx(CommandGroup, { heading: "Suggestions", children: /* @__PURE__ */ jsx(ScrollArea, { className: "max-h-52 overflow-y-auto", children: (_d = props.options) == null ? void 0 : _d.map((option) => /* @__PURE__ */ jsxs(
          CommandItem,
          {
            value: option.label,
            onSelect: () => {
              var _a3;
              (_a3 = props.onChange) == null ? void 0 : _a3.call(props, option.value);
              setOpen(false);
            },
            children: [
              option.label,
              /* @__PURE__ */ jsx(
                CheckIcon$1,
                {
                  className: cn("ml-auto h-4 w-4", option.value === value ? "opacity-100" : "opacity-0")
                }
              )
            ]
          },
          option.value
        )) }) })
      ] })
    ] }) })
  ] });
};
Combobox.displayName = "Combobox";
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
        translationKey === "autoSave.success" && ` - ${dayjs().format("HH:mm:ss")}`
      ]
    }
  );
};
const CreateButton = ({
  resource,
  hideText = false,
  accessControl,
  meta: meta2,
  onClick,
  children,
  disabled: disabledFromProp,
  ...props
}) => {
  const { hidden, disabled, label, title: title2, LinkComponent, to, canAccess } = useCreateButton({
    resource,
    accessControl,
    meta: meta2
  });
  if (hidden) return null;
  const disabledNew = disabledFromProp || disabled || !(canAccess == null ? void 0 : canAccess.can);
  const domCore = /* @__PURE__ */ jsx(Button, { disabled: disabledNew, title: title2, icon: /* @__PURE__ */ jsx(CirclePlus, {}), ...props, children: !hideText && (children ?? label) });
  if (props.type === "submit") {
    return domCore;
  }
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
      children: domCore
    }
  );
};
CreateButton.displayName = "CreateButton";
const SaveButton = ({
  hideText = false,
  children,
  accessControl,
  access,
  resource,
  recordItemId,
  disabled,
  ...props
}) => {
  const { label } = useSaveButton();
  const { data: data2 } = useCan({ resource, action: "edit", params: { id: recordItemId } });
  const disableNew = !(data2 == null ? void 0 : data2.can) || disabled;
  return /* @__PURE__ */ jsx(Button, { icon: /* @__PURE__ */ jsx(CheckCheck, {}), disabled: disableNew, ...props, children: !hideText && (children ?? label) });
};
SaveButton.displayName = "SaveButton";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      className: cn("bg-card text-card-foreground rounded-xl border shadow-sm", className),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "card-header", className: cn("flex flex-col gap-1.5 p-6", className), ...props });
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "card-title", className: cn("leading-none font-semibold tracking-tight", className), ...props });
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "card-description", className: cn("text-muted-foreground text-sm", className), ...props });
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "card-content", className: cn("p-6 pt-0", className), ...props });
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "card-footer", className: cn("flex items-center p-6 pt-0", className), ...props });
}
const FormEasy = ({
  autoSave,
  beforeSubmit,
  formProps,
  isWatchable,
  saveButtonProps,
  formModalClose,
  recordItemId,
  className,
  classNameCardContent,
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
  const onSubmit = props.handleSubmit(async (_data) => {
    var _a2;
    let values = props.getValues();
    if (beforeSubmit) {
      try {
        values = await beforeSubmit(values);
      } catch (error) {
        return;
      }
    }
    if (values !== null) {
      await props.refineCore.onFinish(values);
    } else {
      ((_a2 = props.refineCore) == null ? void 0 : _a2.redirect).call(_a2);
    }
    formModalClose == null ? void 0 : formModalClose();
  });
  const { disabled } = saveButtonProps || {};
  return /* @__PURE__ */ jsx(Form, { ...props, children: /* @__PURE__ */ jsx("form", { ...formProps, onSubmit, children: /* @__PURE__ */ jsxs(Card, { className: cn("space-y-8 border-none p-8 shadow-none", className), children: [
    /* @__PURE__ */ jsx(CardContent, { className: cn("space-y-4 p-0", classNameCardContent), children: props.children }),
    /* @__PURE__ */ jsxs(CardFooter, { className: "flex gap-x-2 p-0", children: [
      action2 === EnumAction.edit ? /* @__PURE__ */ jsx(
        SaveButton,
        {
          type: "submit",
          recordItemId,
          loading: props.refineCore.formLoading,
          disabled: disabled || !props.formState.isDirty
        }
      ) : /* @__PURE__ */ jsx(
        CreateButton,
        {
          type: "submit",
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
          children: t("buttons.cancel")
        }
      ),
      autoSave && /* @__PURE__ */ jsx("div", { className: "ml-auto", children: /* @__PURE__ */ jsx(AutoSaveIndicator, { ...props.refineCore.autoSaveProps }) })
    ] })
  ] }) }) });
};
var OperateTypeEnum = /* @__PURE__ */ ((OperateTypeEnum2) => {
  OperateTypeEnum2["ADD"] = "ADD";
  OperateTypeEnum2["MODIFY"] = "MODIFY";
  OperateTypeEnum2["DELETE"] = "DELETE";
  return OperateTypeEnum2;
})(OperateTypeEnum || {});
const getRefineQueryOptions = (defaultValues) => {
  if (!defaultValues) return void 0;
  const initialData = { data: defaultValues };
  return {
    queryFn: () => initialData,
    initialData
  };
};
function getChangedValues(currentValues, defaultValues) {
  const changedValues = {};
  Object.keys(currentValues).forEach((key) => {
    if (!isEqual(currentValues[key], defaultValues[key])) {
      changedValues[key] = currentValues[key];
    }
  });
  return changedValues;
}
const meta$y = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$P({ request, params }) {
  const [myIssues, initialData] = await Promise.all([
    tyServer.getMyIssues(request),
    dataService.findUniqueOrThrow(
      "frontRouteProject",
      {
        where: { id: (params == null ? void 0 : params.id) || "" }
      },
      { request }
    )
  ]);
  return {
    myIssues,
    initialData
  };
}
function FrontRouteProjectEdit() {
  const { initialData, myIssues } = useLoaderData();
  return /* @__PURE__ */ jsx(FrontRouteProjectForm, { initialData, myIssues });
}
function ErrorBoundary$I() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const filterFormData$7 = (data2) => {
  return {
    title: (data2 == null ? void 0 : data2.title) || "",
    description: (data2 == null ? void 0 : data2.description) || "",
    global: JSON.stringify((data2 == null ? void 0 : data2.global) || {}, null, 2),
    issueId: ""
  };
};
const schemaFrontRouteProjectNew = schemaFrontRouteProject.extend({
  issueId: z.string().nonempty({ message: "Issue is required" }),
  global: schemaJson
});
const FrontRouteProjectForm = ({
  className,
  redirect: redirect2 = EnumAction.list,
  initialData,
  action: action2,
  myIssues = []
}) => {
  const { formAction, id = initialData == null ? void 0 : initialData.id, identifier } = useResourceParams({ action: action2 });
  const defaultValues = filterFormData$7(initialData);
  const form = useForm({
    resolver: zodResolver(schemaFrontRouteProjectNew),
    defaultValues,
    warnWhenUnsavedChanges: true,
    mode: "onChange",
    refineCoreProps: {
      resource: identifier,
      action: formAction,
      id,
      queryOptions: getRefineQueryOptions(defaultValues),
      redirect: redirect2
    }
  });
  async function deployApply(values) {
    const { issueId, param, ...rest } = values;
    const operateTypeMap = {
      [EnumAction.create]: OperateTypeEnum.ADD,
      [EnumAction.edit]: OperateTypeEnum.MODIFY
    };
    const dataPrevious = pick(defaultValues, Object.keys(rest));
    if (dataPrevious.global) {
      dataPrevious.global = JSON.parse(dataPrevious.global);
    }
    const params = {
      operateType: operateTypeMap[formAction],
      issueId,
      contentJsonObject: rest,
      configType: "frontRoute",
      param,
      resource: identifier,
      id: initialData == null ? void 0 : initialData.id,
      data: rest,
      dataPrevious
    };
    const { data: res } = await easyAxios.post(`/api/ty/deployServiceBuild`, params);
    return res.data;
  }
  const beforeSubmit = useCallback(async (val) => {
    const changedValues = getChangedValues(val, defaultValues);
    if (changedValues.global) {
      changedValues.global = JSON.parse(changedValues.global);
    }
    const values = dropEmptyKey(changedValues);
    try {
      const res = await deployApply({ ...values, param: `frontRoute:${val.title}` });
      toast.success("配置发布申请推送成功", { description: res || "..." });
      return null;
    } catch (error) {
      toast.error("配置发布申请执行错误", { description: (error == null ? void 0 : error.message) || "unknwon" });
      throw error;
    }
  }, []);
  return /* @__PURE__ */ jsxs(FormEasy, { ...form, beforeSubmit, className, recordItemId: initialData == null ? void 0 : initialData.id, children: [
    /* @__PURE__ */ jsx(Field, { ...form, name: "title", label: "Title", children: /* @__PURE__ */ jsx(Input, {}) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "description", label: "Description", children: /* @__PURE__ */ jsx(Input, { className: "xl:w-1/2" }) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "global", label: "Global", children: /* @__PURE__ */ jsx(CodeEditor, { language: "json" }) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "issueId", label: "IssueId", children: /* @__PURE__ */ jsx(
      Combobox,
      {
        options: myIssues.map((issue) => ({
          label: `${issue.issueId} - ${issue.title}`,
          value: String(issue.issueId)
        }))
      }
    ) })
  ] });
};
const schemaFrontRouteProjectDelete = z.object({
  issueId: z.string().nonempty({ message: "Issue is required" })
});
const FrontRouteProjectDeleteForm = ({
  records,
  formModalClose,
  className,
  tableResetRowSelection
}) => {
  var _a2, _b;
  const [myIssues, setMyIssues] = useState([]);
  useMountEffect(async () => {
    const { data: res } = await easyAxios.post(`/api/ty/getMyIssues`);
    setMyIssues(res.data);
  });
  const { id = (_a2 = records == null ? void 0 : records[0]) == null ? void 0 : _a2.id, identifier } = useResourceParams();
  const form = useForm({
    resolver: zodResolver(schemaFrontRouteProjectDelete),
    warnWhenUnsavedChanges: false,
    mode: "onChange",
    refineCoreProps: {
      resource: identifier,
      action: EnumAction.edit,
      id
    }
  });
  async function deployApply(values) {
    const { issueId, param, id: id2 } = values;
    const params = {
      operateType: OperateTypeEnum.DELETE,
      issueId,
      contentJsonObject: {},
      configType: "frontRoute",
      param,
      resource: identifier,
      id: id2
    };
    const { data: res } = await easyAxios.post(`/api/ty/deployServiceBuild`, params);
    return res.data;
  }
  const beforeSubmit = useCallback(async (values) => {
    try {
      const bulkPromise = [];
      records.forEach((record) => {
        bulkPromise.push(deployApply({ ...values, param: `frontRoute:${record.title}`, id: record.id }));
      });
      const res = await Promise.all(bulkPromise);
      toast.success("配置发布申请推送成功", { description: res[0] || "..." });
      tableResetRowSelection == null ? void 0 : tableResetRowSelection();
    } catch (error) {
      toast.error("配置发布申请执行错误", { description: (error == null ? void 0 : error.message) || "unknwon" });
    }
    return null;
  }, []);
  return /* @__PURE__ */ jsx(
    FormEasy,
    {
      ...form,
      beforeSubmit,
      className,
      recordItemId: (_b = records == null ? void 0 : records[0]) == null ? void 0 : _b.id,
      formModalClose,
      children: /* @__PURE__ */ jsx(Field, { ...form, name: "issueId", label: "IssueId", children: /* @__PURE__ */ jsx(
        Combobox,
        {
          popoverProps: { modal: Boolean(formModalClose) },
          options: myIssues == null ? void 0 : myIssues.map((issue) => ({
            label: `${issue.issueId} - ${issue.title}`,
            value: String(issue.issueId)
          }))
        }
      ) })
    }
  );
};
function FrontRouteProjectDeleteFormModal(props) {
  const { visible, close, records, tableResetRowSelection } = props;
  return /* @__PURE__ */ jsx(Dialog, { open: visible, onOpenChange: close, children: /* @__PURE__ */ jsxs(DialogContent, { children: [
    /* @__PURE__ */ jsxs(DialogHeader, { className: "text-destructive border-b pb-4", children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: "删除项目" }),
      /* @__PURE__ */ jsx(DialogDescription, { children: "请选择关联需求，推送配置发布申请" })
    ] }),
    /* @__PURE__ */ jsx(
      FrontRouteProjectDeleteForm,
      {
        className: "p-0",
        formModalClose: close,
        records,
        tableResetRowSelection
      }
    )
  ] }) });
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$I,
  FrontRouteProjectDeleteFormModal,
  FrontRouteProjectForm,
  default: FrontRouteProjectEdit,
  loader: loader$P,
  meta: meta$y
}, Symbol.toStringTag, { value: "Module" }));
const meta$x = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$O({ request, params }) {
  const [myIssues, { data: projectList }, initialData] = await Promise.all([
    tyServer.getMyIssues(request),
    dataService.findMany("frontRouteProject", { select: { id: true, title: true } }, { request }),
    dataService.findUniqueOrThrow(
      "frontRouteModule",
      {
        where: { id: (params == null ? void 0 : params.id) || "" },
        include: {
          project: {
            select: {
              title: true
            }
          }
        }
      },
      { request }
    )
  ]);
  return {
    myIssues,
    projectList,
    initialData
  };
}
function FrontRouteModuleEdit() {
  const { initialData, myIssues, projectList } = useLoaderData();
  return /* @__PURE__ */ jsx(FrontRouteModuleForm, { initialData, myIssues, projectList });
}
function ErrorBoundary$H() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const filterFormData$6 = (data2) => {
  return {
    projectId: (data2 == null ? void 0 : data2.projectId) || "",
    title: (data2 == null ? void 0 : data2.title) || "",
    description: (data2 == null ? void 0 : data2.description) || "",
    global: (data2 == null ? void 0 : data2.global) ? JSON.stringify(data2 == null ? void 0 : data2.global, null, 2) : "",
    pathReplaceModule: (data2 == null ? void 0 : data2.pathReplaceModule) || "",
    pathReplaceProject: (data2 == null ? void 0 : data2.pathReplaceProject) || "",
    issueId: ""
  };
};
const schemaFrontRouteModuleNew = schemaFrontRouteModule.extend({
  issueId: z.string().nonempty({ message: "Issue is required" }),
  global: schemaJson.optional().nullable()
});
const FrontRouteModuleForm = ({
  className,
  redirect: redirect2 = EnumAction.list,
  initialData,
  action: action2,
  myIssues = [],
  projectList
}) => {
  var _a2;
  const { formAction, id = initialData == null ? void 0 : initialData.id, identifier } = useResourceParams({ action: action2 });
  const defaultValues = filterFormData$6(initialData);
  const form = useForm({
    resolver: zodResolver(schemaFrontRouteModuleNew),
    defaultValues,
    warnWhenUnsavedChanges: true,
    mode: "onChange",
    refineCoreProps: {
      resource: identifier,
      action: formAction,
      id,
      queryOptions: getRefineQueryOptions(defaultValues),
      redirect: redirect2
    }
  });
  async function deployApply(values) {
    const { issueId, param, ...rest } = values;
    const operateTypeMap = {
      [EnumAction.create]: OperateTypeEnum.ADD,
      [EnumAction.edit]: OperateTypeEnum.MODIFY
    };
    const dataPrevious = pick(defaultValues, Object.keys(rest));
    if (dataPrevious.global) {
      dataPrevious.global = JSON.parse(dataPrevious.global);
    }
    const params = {
      operateType: operateTypeMap[formAction],
      issueId,
      contentJsonObject: rest,
      configType: "frontRoute",
      param,
      resource: identifier,
      id: initialData == null ? void 0 : initialData.id,
      data: rest,
      dataPrevious
    };
    const { data: res } = await easyAxios.post(`/api/ty/deployServiceBuild`, params);
    return res.data;
  }
  const beforeSubmit = useCallback(async (val) => {
    var _a3;
    const changedValues = getChangedValues(val, defaultValues);
    if (changedValues.global) {
      changedValues.global = JSON.parse(changedValues.global);
    }
    const values = dropEmptyKey(changedValues);
    try {
      const res = await deployApply({
        ...values,
        param: `frontRoute:${(_a3 = initialData == null ? void 0 : initialData.project) == null ? void 0 : _a3.title}:${val.title}`
      });
      toast.success("配置发布申请推送成功", { description: res || "..." });
      return null;
    } catch (error) {
      toast.error("配置发布申请执行错误", { description: (error == null ? void 0 : error.message) || "unknwon" });
      throw error;
    }
  }, []);
  return /* @__PURE__ */ jsxs(FormEasy, { ...form, beforeSubmit, className, recordItemId: initialData == null ? void 0 : initialData.id, children: [
    /* @__PURE__ */ jsx(Field, { ...form, name: "projectId", label: "Project", children: /* @__PURE__ */ jsx(
      Combobox,
      {
        options: projectList.map((project) => ({
          label: project.title,
          value: project.id
        }))
      }
    ) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "title", label: "Title", children: /* @__PURE__ */ jsx(Input, {}) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "pathReplaceModule", label: "Path Replace Module", children: /* @__PURE__ */ jsx(Input, { className: "xl:w-1/2" }) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "pathReplaceProject", label: "Virtual Path", children: /* @__PURE__ */ jsx(Input, { placeholder: (_a2 = initialData == null ? void 0 : initialData.project) == null ? void 0 : _a2.title }) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "description", label: "Description", children: /* @__PURE__ */ jsx(Input, { className: "xl:w-1/2" }) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "global", label: "Global", children: /* @__PURE__ */ jsx(CodeEditor, { language: "json" }) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "issueId", label: "IssueId", children: /* @__PURE__ */ jsx(
      Combobox,
      {
        options: myIssues.map((issue) => ({
          label: `${issue.issueId} - ${issue.title}`,
          value: String(issue.issueId)
        }))
      }
    ) })
  ] });
};
const schemaFrontRouteModuleDelete = z.object({
  issueId: z.string().nonempty({ message: "Issue is required" })
});
const FrontRouteModuleDeleteForm = ({
  records,
  formModalClose,
  className,
  tableResetRowSelection
}) => {
  var _a2, _b;
  const [myIssues, setMyIssues] = useState([]);
  useMountEffect(async () => {
    const { data: res } = await easyAxios.post(`/api/ty/getMyIssues`);
    setMyIssues(res.data);
  });
  const { id = (_a2 = records == null ? void 0 : records[0]) == null ? void 0 : _a2.id, identifier } = useResourceParams();
  const form = useForm({
    resolver: zodResolver(schemaFrontRouteModuleDelete),
    mode: "onChange",
    warnWhenUnsavedChanges: false,
    refineCoreProps: {
      resource: identifier,
      action: EnumAction.edit,
      id
    }
  });
  async function deployApply(values) {
    const { issueId, param, id: id2 } = values;
    const params = {
      operateType: OperateTypeEnum.DELETE,
      issueId,
      contentJsonObject: {},
      configType: "frontRoute",
      param,
      resource: identifier,
      id: id2
    };
    const { data: res } = await easyAxios.post(`/api/ty/deployServiceBuild`, params);
    return res.data;
  }
  const beforeSubmit = useCallback(async (values) => {
    try {
      const bulkPromise = [];
      records.forEach((record) => {
        bulkPromise.push(
          deployApply({ ...values, param: `frontRoute:${record.projectTitle}:${record.title}`, id: record.id })
        );
      });
      const res = await Promise.all(bulkPromise);
      toast.success("配置发布申请推送成功", { description: res[0] || "..." });
      tableResetRowSelection == null ? void 0 : tableResetRowSelection();
    } catch (error) {
      toast.error("配置发布申请执行错误", { description: (error == null ? void 0 : error.message) || "unknwon" });
    }
    return null;
  }, []);
  return /* @__PURE__ */ jsx(
    FormEasy,
    {
      ...form,
      beforeSubmit,
      className,
      recordItemId: (_b = records == null ? void 0 : records[0]) == null ? void 0 : _b.id,
      formModalClose,
      children: /* @__PURE__ */ jsx(Field, { ...form, name: "issueId", label: "IssueId", children: /* @__PURE__ */ jsx(
        Combobox,
        {
          popoverProps: { modal: Boolean(formModalClose) },
          options: myIssues == null ? void 0 : myIssues.map((issue) => ({
            label: `${issue.issueId} - ${issue.title}`,
            value: String(issue.issueId)
          }))
        }
      ) })
    }
  );
};
function FrontRouteModuleDeleteFormModal(props) {
  const { visible, close, records, tableResetRowSelection } = props;
  return /* @__PURE__ */ jsx(Dialog, { open: visible, onOpenChange: close, children: /* @__PURE__ */ jsxs(DialogContent, { children: [
    /* @__PURE__ */ jsxs(DialogHeader, { className: "text-destructive border-b pb-4", children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: "删除项目" }),
      /* @__PURE__ */ jsx(DialogDescription, { children: "请选择关联需求，推送配置发布申请" })
    ] }),
    /* @__PURE__ */ jsx(
      FrontRouteModuleDeleteForm,
      {
        className: "p-0",
        formModalClose: close,
        records,
        tableResetRowSelection
      }
    )
  ] }) });
}
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$H,
  FrontRouteModuleDeleteFormModal,
  FrontRouteModuleForm,
  default: FrontRouteModuleEdit,
  loader: loader$O,
  meta: meta$x
}, Symbol.toStringTag, { value: "Module" }));
function AlertDialog({ ...props }) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Trigger, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({ ...props }) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({ className, ...props }) {
  return /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsx(
      AlertDialogPrimitive.Content,
      {
        "data-slot": "alert-dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[5%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-xl",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function AlertDialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
      ...props
    }
  );
}
function AlertDialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Title,
    {
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-semibold", className),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Description,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Action, { className: cn(buttonVariants({ variant }), className), ...props });
}
function AlertDialogCancel({
  className,
  variant = "outline",
  ...props
}) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Cancel, { className: cn(buttonVariants({ variant }), className), ...props });
}
const ConfirmDialog = ({
  children,
  title: title2 = "Are you sure?",
  description = t("deleteAlert"),
  okText = "Ok",
  cancelText = "Cancel",
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
    return /* @__PURE__ */ jsx(CheckIcon, {});
  }, [okIcon, loading]);
  return /* @__PURE__ */ jsxs(AlertDialog, { open, onOpenChange, defaultOpen, children: [
    /* @__PURE__ */ jsx(AlertDialogTrigger, { asChild: true, children }),
    /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsx(AlertDialogTitle, { children: title2 }),
        /* @__PURE__ */ jsx(AlertDialogDescription, { children: description })
      ] }),
      /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxs(AlertDialogCancel, { variant: cancelButtonVariant, disabled: loading, children: [
          cancelIconSide === "left" && CancelIcon,
          cancelText,
          cancelIconSide === "right" && CancelIcon
        ] }),
        /* @__PURE__ */ jsxs(AlertDialogAction, { variant: okButtonVariant, disabled: loading, onClick: onConfirm, children: [
          okIconSide === "left" && OkIcon,
          okText,
          okIconSide === "right" && OkIcon
        ] })
      ] })
    ] })
  ] });
};
ConfirmDialog.displayName = "ConfirmDialog";
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
  disabled: disabledCustom,
  ...props
}) => {
  const back = useBack();
  const { id } = useResourceParams();
  const defaultOnSuccess = () => {
    if (id) {
      setTimeout(() => {
        back();
      }, 300);
    }
  };
  const {
    title: title2,
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
  const disabledNew = disabledCustom || disabled || !(canAccess == null ? void 0 : canAccess.can);
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
          disabled: disabledNew,
          variant: "destructive",
          title: title2,
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
  const { hidden, disabled, label, title: title2, LinkComponent, to, canAccess } = useEditButton({
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
      children: /* @__PURE__ */ jsx(Button, { disabled: disabledNew, icon: !props.asChild ? /* @__PURE__ */ jsx(Pencil, {}) : void 0, title: title2, ...props, children: !hideText && (children ?? label) })
    }
  );
};
EditButton.displayName = "EditButton";
const ExportButton = ({ children, ...props }) => {
  const { label } = useExportButton();
  const { triggerExport } = useExport();
  const { data: canAccess } = useCan({ action: EnumAction.export });
  const disabledNew = !(canAccess == null ? void 0 : canAccess.can);
  return /* @__PURE__ */ jsx(Button, { disabled: disabledNew, icon: /* @__PURE__ */ jsx(Download, {}), onClick: triggerExport, ...props, children: label });
};
ExportButton.displayName = "ExportButton";
const ListButton = ({
  resource: resourceNameFromProps,
  hideText = false,
  accessControl,
  meta: meta2,
  children,
  onClick,
  ...props
}) => {
  const { hidden, disabled, label, title: title2, LinkComponent, to, canAccess } = useListButton({
    resource: resourceNameFromProps,
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
      children: /* @__PURE__ */ jsx(Button, { disabled: disabledNew, title: title2, icon: /* @__PURE__ */ jsx(ListIcon, {}), ...props, children: !hideText && (children ?? label) })
    }
  );
};
ListButton.displayName = "ListButton";
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
const useOnBack = () => {
  const back = useBack();
  const { action: action2 } = useResourceParams();
  const onBack = action2 !== EnumAction.list || typeof action2 !== "undefined" ? back : void 0;
  return onBack;
};
function DeleteActionModal(props) {
  var _a2, _b, _c, _d;
  const back = useOnBack();
  const { can, isLoading, mutate } = useDeleteHelper((_a2 = props.data) == null ? void 0 : _a2.resource, (_c = (_b = props.data) == null ? void 0 : _b.row) == null ? void 0 : _c.id);
  const translate = useTranslate();
  const onDelete = useCallback(() => {
    if (can) {
      return mutate({
        onSuccess() {
          var _a3, _b2;
          const isRedirectBack = ((_a3 = props == null ? void 0 : props.data) == null ? void 0 : _a3.redirectBack) ?? false;
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
      title: translate("buttons.confirm"),
      description: translate("deleteAlert"),
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
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx("table", { "data-slot": "table", className: cn("w-full caption-bottom text-sm", className), ...props }) });
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("thead", { "data-slot": "table-header", className: cn("[&_tr]:border-b", className), ...props });
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx("tbody", { "data-slot": "table-body", className: cn("[&_tr:last-child]:border-0", className), ...props });
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: cn("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-muted-foreground h-10 px-2 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
      ...props
    }
  );
}
const DEFAULT_PAGE_SIZE = 20;
const useIsFirstRender = () => {
  const firstRender = useRef(true);
  useEffect(() => {
    firstRender.current = false;
  }, []);
  return firstRender.current;
};
const columnFiltersToCrudFilters = ({ columns, columnFilters }) => {
  return (columnFilters == null ? void 0 : columnFilters.map((filter) => {
    var _a2, _b, _c, _d;
    const operator = filter.operator ?? ((_b = (_a2 = columns.find((col) => col.id === filter.id)) == null ? void 0 : _a2.meta) == null ? void 0 : _b.filterOperator);
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
    var _a2;
    if (filter.operator === "and" || filter.operator === "or") {
      if (filter.key) {
        const filterId = ((_a2 = columns.find((col) => {
          var _a3;
          return ((_a3 = col.meta) == null ? void 0 : _a3.filterKey) === filter.key;
        })) == null ? void 0 : _a2.id) ?? filter.key;
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
  var _a2, _b, _c;
  const isFirstRender = useIsFirstRender();
  const useTableResult = useTable$1({
    ...refineCoreProps,
    hasPagination
  });
  const isServerSideFilteringEnabled = (((_a2 = refineCoreProps.filters) == null ? void 0 : _a2.mode) || "server") === "server";
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
const Loader = ({ className, ...props }) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
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
};
Loader.displayName = "Loader";
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
function CloneAction({ row, resource, title: title2, disabled, ...props }) {
  const { can, url } = useGetCloneUrl(resource, row.id);
  return /* @__PURE__ */ jsx(
    RowAction,
    {
      icon: /* @__PURE__ */ jsx(CopyCheck, { size: 16 }),
      disabled: !can || disabled,
      title: title2 || t("buttons.clone"),
      to: url,
      ...props
    }
  );
}
CloneAction.displayName = "CloneAction";
function DeleteAction({
  row,
  resource,
  title: title2,
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
      title: title2 || t("buttons.delete"),
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
function EditAction({ row, resource, title: title2, disabled, ...props }) {
  const { can, url } = useGetEditUrl(resource, row.id);
  return /* @__PURE__ */ jsx(
    RowAction,
    {
      icon: /* @__PURE__ */ jsx(Pencil, { size: 16 }),
      disabled: !can || disabled,
      title: title2 || t("buttons.edit"),
      to: url,
      ...props
    }
  );
}
EditAction.displayName = "EditAction";
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
function ShowAction({ row, resource, title: title2, disabled, ...props }) {
  const { can, url } = useGetShowUrl(resource, row.id);
  return /* @__PURE__ */ jsx(
    RowAction,
    {
      icon: /* @__PURE__ */ jsx(Eye, { size: 16 }),
      disabled: !can || disabled,
      title: title2 || t("buttons.show"),
      to: url,
      ...props
    }
  );
}
ShowAction.displayName = "ShowAction";
function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return /* @__PURE__ */ jsx(
    DayPicker,
    {
      locale: zhCN,
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(buttonVariants({ variant: "ghost" }), "size-8 p-0 font-normal aria-selected:opacity-100"),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        // eslint-disable-next-line react/prop-types
        IconLeft: ({ className: className2, ...props2 }) => /* @__PURE__ */ jsx(ChevronLeft, { className: cn("size-4", className2), ...props2 }),
        // eslint-disable-next-line react/prop-types
        IconRight: ({ className: className2, ...props2 }) => /* @__PURE__ */ jsx(ChevronRight, { className: cn("size-4", className2), ...props2 })
      },
      ...props
    }
  );
}
function TableFilterDateRangePickerFilter({
  column,
  title: title2,
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
          title: title2,
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
function TableFilterDropdown({ column, title: title2, options, align = "start" }) {
  const t2 = useTranslate();
  const facets = column == null ? void 0 : column.getFacetedUniqueValues();
  const selectedValues = new Set(column == null ? void 0 : column.getFilterValue());
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("div", { className: "inline-flex flex-row items-center gap-x-0.5", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          title: title2,
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
      /* @__PURE__ */ jsx(CommandInput, { placeholder: title2 }),
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
                    children: /* @__PURE__ */ jsx(CheckIcon$1, { className: cn("h-4 w-4") })
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
function TableFilterSearchColumn({ column, title: title2, align = "start" }) {
  const selectedValue = column == null ? void 0 : column.getFilterValue();
  const t2 = useTranslate();
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("div", { className: "inline-flex flex-row items-center gap-x-0.5", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          title: title2,
          variant: "ghost",
          className: cn("h-4 border-dashed px-1 py-2.5", selectedValue && "!text-green-500"),
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
              "placeholder:text-muted-foreground h-10 rounded-md border-0 bg-transparent py-3 pl-0 text-sm ring-0 shadow-none outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
            ),
            placeholder: title2
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
function Checkbox({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-4 shrink-0 rounded-[4px] border shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-0",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current",
          children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-3.5" })
        }
      )
    }
  );
}
const CheckAll = ({ table, children, options }) => {
  const t2 = useTranslate();
  const isSomeSelected = table.getIsSomeRowsSelected();
  const isAllSelected = table.getIsAllPageRowsSelected();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Checkbox,
      {
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
};
CheckAll.displayName = "CheckAll";
function Select({ ...props }) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectValue({ ...props }) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground aria-invalid:border-destructive ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-0 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>span]:line-clamp-1",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
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
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn("flex cursor-default items-center justify-center py-1", className),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn("flex cursor-default items-center justify-center py-1", className),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4" })
    }
  );
}
const Pagination = ({ table }) => {
  var _a2, _b, _c;
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
          ((_c = (_b = (_a2 = table == null ? void 0 : table.refineCore) == null ? void 0 : _a2.tableQuery) == null ? void 0 : _b.data) == null ? void 0 : _c.total) ?? 0
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Rows per page" }),
          /* @__PURE__ */ jsxs(
            Select,
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
function TableFilterRadio({ column, title: title2, options, align = "start" }) {
  const t2 = useTranslate();
  const selectedValue = column == null ? void 0 : column.getFilterValue();
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("div", { className: "inline-flex flex-row items-center gap-x-0.5", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          title: title2,
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
      /* @__PURE__ */ jsx(CommandInput, { placeholder: title2 }),
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
                    children: /* @__PURE__ */ jsx(CheckIcon$1, { className: cn("h-4 w-4") })
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
    /* @__PURE__ */ jsx(DropdownMenuTrigger$1, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "ml-auto hidden h-8 lg:flex", children: [
      /* @__PURE__ */ jsx(MixerHorizontalIcon, { className: "h-4 w-4" }),
      t2("buttons.columns")
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { children: t2("buttons.toggleColumns") }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      columns.map((column) => {
        var _a2, _b;
        return /* @__PURE__ */ jsx(
          DropdownMenuCheckboxItem,
          {
            className: "capitalize",
            checked: column.getIsVisible(),
            onCheckedChange: (value) => column.toggleVisibility(value),
            onSelect: (event) => event.preventDefault(),
            children: ((_b = (_a2 = column == null ? void 0 : column.columnDef) == null ? void 0 : _a2.header) == null ? void 0 : _b.toString()) || t2(column.id)
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
    var _a2;
    if (!child || typeof child !== "object" || !("props" in child)) {
      return child;
    }
    return cloneElement(child, {
      key: index,
      variant: ((_a2 = child.props) == null ? void 0 : _a2.variant) || "outline"
    });
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-1 items-center space-x-2", children: Array.isArray(toolbar) ? toolbar.map((child, index) => appendProps(child, index)) : appendProps(toolbar) }),
    /* @__PURE__ */ jsx(DataTableViewOptions, { table })
  ] });
}
function TableEasy({ children, showHeader = true, columns = [], refineCoreProps, toolbar, ...props }) {
  var _a2;
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
    /* @__PURE__ */ jsx("div", { className: "border-border rounded-md border", children: /* @__PURE__ */ jsxs(Table, { children: [
      showHeader && /* @__PURE__ */ jsx(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx(TableRow, { children: headerGroup.headers.map((header) => {
        const columnDef = header.column.columnDef;
        return /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsxs("div", { className: "inline-flex flex-row items-center gap-x-2.5", children: [
          header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext()),
          tableOptions.enableSorting && columnDef.enableSorting && /* @__PURE__ */ jsx(SortAction, { column: header.column }),
          isFilterable && columnDef.filter && (columnDef == null ? void 0 : columnDef.filter({
            column: header.column,
            title: `${columnDef.header} Filter`
          }))
        ] }) }, header.id);
      }) }, headerGroup.id)) }),
      /* @__PURE__ */ jsx(TableBody, { children: table.refineCore.tableQuery.isLoading ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: columns.length, className: "h-24 text-center text-nowrap", children: /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-center", children: /* @__PURE__ */ jsx(Loader, { className: "text-primary h-4" }) }) }) }) : ((_a2 = table.getRowModel().rows) == null ? void 0 : _a2.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { className: "text-nowrap", children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsxs(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: [
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
TableEasy.Column = TableColumn;
TableEasy.CheckAll = CheckAll;
TableEasy.Actions = RowActions;
TableEasy.Action = RowAction;
TableEasy.EditAction = EditAction;
TableEasy.ShowAction = ShowAction;
TableEasy.CloneAction = CloneAction;
TableEasy.DeleteAction = DeleteAction;
TableEasy.Filter = {
  DateRangePicker: TableFilterDateRangePickerFilter,
  Dropdown: TableFilterDropdown,
  Search: TableFilterSearchColumn,
  Radio: TableFilterRadio
};
TableEasy.displayName = "TableEasy";
const meta$w = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$N({ request }) {
  const tableParams = parseTableParams(new URL(request.url).search);
  const include = {
    operatedBy: { select: { name: true, avatar: true } }
  };
  const data2 = await dataService.findMany(
    "frontRouteProject",
    {
      ...buildTableParams(tableParams),
      orderBy: { updatedAt: "desc" },
      include
    },
    { request }
  );
  return { initialData: data2, include };
}
function FrontRouteProjectIndex() {
  var _a2;
  const { initialData, include } = useLoaderData();
  const tableRef = useRef(null);
  const recordsRef = useRef([]);
  const useModalReturn = useModal();
  const navigate = useNavigate();
  const friendly = useUserFriendlyName();
  const { data: deletePermission } = useCan({ resource: EnumResource.frontRouteProject, action: EnumAction.delete });
  const bulkDeleteAction = (table) => {
    const rows = table.getSelectedRowModel().rows;
    const label = `Delete Selected (${rows.length}) ${friendly("Row", rows.length > 1 ? "plural" : "singular")}`;
    return {
      className: "text-destructive!",
      label,
      disabled: !(deletePermission == null ? void 0 : deletePermission.can),
      onClick: () => {
        recordsRef.current = rows.map((row) => ({ id: row.original.id, title: row.original.title }));
        tableRef.current = table;
        useModalReturn.show();
      }
    };
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      FrontRouteProjectDeleteFormModal,
      {
        ...useModalReturn,
        records: recordsRef.current,
        tableResetRowSelection: (_a2 = tableRef.current) == null ? void 0 : _a2.resetRowSelection
      }
    ),
    /* @__PURE__ */ jsxs(
      TableEasy,
      {
        enableSorting: true,
        enableFilters: true,
        enableHiding: true,
        toolbar: [/* @__PURE__ */ jsx(CreateButton, {}, "create"), /* @__PURE__ */ jsx(ExportButton, {}, "export")],
        initialState: {
          columnVisibility: {
            createdAt: false
          },
          sorting: [
            {
              id: "updatedAt",
              desc: true
            }
          ]
        },
        refineCoreProps: {
          queryOptions: { initialData },
          meta: {
            include
          }
        },
        children: [
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              accessorKey: "id",
              id: "id",
              header: ({ table }) => /* @__PURE__ */ jsx(TableEasy.CheckAll, { table, options: [bulkDeleteAction(table)] }),
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
            TableEasy.Column,
            {
              header: "Title",
              accessorKey: "title",
              id: "title",
              meta: {
                filterOperator: "contains"
              },
              filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search Title" }),
              cell: ({ row: { index, original }, table }) => {
                const pageIndex = table.getState().pagination.pageIndex;
                const pageSize = table.getState().pagination.pageSize;
                return /* @__PURE__ */ jsxs(EditButton, { recordItemId: original.id, asChild: true, children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground inline-block min-w-6", children: [
                    pageIndex * pageSize + index + 1,
                    ". "
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "py-3 underline-offset-2 visited:text-red-600 hover:text-green-600 hover:underline", children: original.title })
                ] });
              }
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "Description",
              accessorKey: "description",
              id: "description",
              enableHiding: true,
              cell: ({ row: { original } }) => original.description || "-"
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "Global",
              accessorKey: "global",
              id: "global",
              enableHiding: true,
              cell: ({ row: { original } }) => /* @__PURE__ */ jsxs(Popover, { children: [
                /* @__PURE__ */ jsx(PopoverTrigger, { className: "text-link cursor-pointer", asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsx(EyeIcon, { className: "h-4 w-4" }) }) }),
                /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: JSON.stringify(original.global, null, 2) }) })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "CreatedAt",
              accessorKey: "createdAt",
              id: "createdAt",
              enableSorting: true,
              enableHiding: true,
              filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
              cell: ({ row: { original } }) => dayjs(original.createdAt).format("YYYY-MM-DD HH:mm:ss")
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "UpdatedAt",
              accessorKey: "updatedAt",
              id: "updatedAt",
              enableSorting: true,
              enableHiding: true,
              filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
              cell: ({ row: { original } }) => dayjs(original.updatedAt).format("YYYY-MM-DD HH:mm:ss")
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "OperatedBy",
              accessorKey: "operatedBy",
              id: "operatedBy",
              enableHiding: true,
              meta: {
                filterOperator: "contains"
              },
              filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search OperatedBy" }),
              cell: useCallback(
                ({ row: { original } }) => {
                  var _a3, _b, _c, _d, _e;
                  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxs(Avatar, { className: "size-6", children: [
                      /* @__PURE__ */ jsx(AvatarImage, { src: (_a3 = original.operatedBy) == null ? void 0 : _a3.avatar, alt: ((_b = original.operatedBy) == null ? void 0 : _b.name) || "" }),
                      /* @__PURE__ */ jsx(AvatarFallback, { children: (_d = (_c = original.operatedBy) == null ? void 0 : _c.name) == null ? void 0 : _d.slice(0, 1).toUpperCase() })
                    ] }),
                    /* @__PURE__ */ jsx("span", { children: (_e = original.operatedBy) == null ? void 0 : _e.name })
                  ] });
                },
                []
              )
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "Actions",
              accessorKey: "id",
              id: "actions",
              cell: ({ row: { original } }) => /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(
                  ListButton,
                  {
                    resource: EnumResource.frontRouteModule,
                    size: "icon",
                    variant: "ghost",
                    meta: {
                      query: {
                        "filters[0][field]": "project.title",
                        "filters[0][operator]": "contains",
                        "filters[0][value]": original.title
                      }
                    }
                  }
                ),
                /* @__PURE__ */ jsx(
                  ListButton,
                  {
                    resource: EnumResource.frontRouteModule,
                    size: "icon",
                    variant: "ghost",
                    icon: /* @__PURE__ */ jsx(Clock, {}),
                    onClick: () => {
                      navigate(`./history/${original.id}?name=${original.title}`);
                    }
                  }
                ),
                /* @__PURE__ */ jsx(EditButton, { recordItemId: original.id, size: "icon", variant: "ghost" }),
                /* @__PURE__ */ jsx(
                  DeleteButton,
                  {
                    disabled: original.title === EnumRole.administrator,
                    recordItemId: original.id,
                    size: "icon",
                    variant: "ghost",
                    className: "text-destructive!",
                    onClick: () => {
                      recordsRef.current = [{ id: original.id, title: original.title }];
                      useModalReturn.show();
                    }
                  }
                )
              ] })
            }
          )
        ]
      }
    )
  ] });
}
function ErrorBoundary$G() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$G,
  default: FrontRouteProjectIndex,
  loader: loader$N,
  meta: meta$w
}, Symbol.toStringTag, { value: "Module" }));
const meta$v = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$M({ request }) {
  const [myIssues] = await Promise.all([tyServer.getMyIssues(request)]);
  return {
    myIssues
  };
}
function FrontRouteProjectCreate() {
  const { myIssues } = useLoaderData();
  return /* @__PURE__ */ jsx(FrontRouteProjectForm, { myIssues });
}
function ErrorBoundary$F() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$F,
  default: FrontRouteProjectCreate,
  loader: loader$M,
  meta: meta$v
}, Symbol.toStringTag, { value: "Module" }));
const meta$u = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$L({ request }) {
  const tableParams = parseTableParams(new URL(request.url).search);
  const include = {
    operatedBy: { select: { name: true, avatar: true } },
    project: { select: { title: true } }
  };
  const args = {
    ...buildTableParams(tableParams),
    orderBy: { updatedAt: "desc" },
    include
  };
  const data2 = await dataService.findMany("frontRouteModule", args, { request });
  return { initialData: data2, include };
}
function FrontRouteModuleIndex() {
  var _a2;
  const { initialData, include } = useLoaderData();
  const tableRef = useRef(null);
  const recordsRef = useRef([]);
  const useModalReturn = useModal();
  const navigate = useNavigate();
  const friendly = useUserFriendlyName();
  const { data: deletePermission } = useCan({ resource: EnumResource.frontRouteProject, action: EnumAction.delete });
  const bulkDeleteAction = (table) => {
    const rows = table.getSelectedRowModel().rows;
    const label = `Delete Selected (${rows.length}) ${friendly("Row", rows.length > 1 ? "plural" : "singular")}`;
    return {
      className: "text-destructive!",
      label,
      disabled: !(deletePermission == null ? void 0 : deletePermission.can),
      onClick: () => {
        recordsRef.current = rows.map((row) => ({
          id: row.original.id,
          title: row.original.title,
          projectTitle: row.original.project.title
        }));
        tableRef.current = table;
        useModalReturn.show();
      }
    };
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      FrontRouteModuleDeleteFormModal,
      {
        ...useModalReturn,
        records: recordsRef.current,
        tableResetRowSelection: (_a2 = tableRef.current) == null ? void 0 : _a2.resetRowSelection
      }
    ),
    /* @__PURE__ */ jsxs(
      TableEasy,
      {
        enableSorting: true,
        enableFilters: true,
        enableHiding: true,
        toolbar: [/* @__PURE__ */ jsx(CreateButton, {}, "create"), /* @__PURE__ */ jsx(ExportButton, {}, "export")],
        initialState: {
          columnVisibility: {
            createdAt: false,
            description: false
          },
          sorting: [
            {
              id: "updatedAt",
              desc: true
            }
          ]
        },
        refineCoreProps: {
          queryOptions: { initialData },
          meta: {
            include
          }
        },
        children: [
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              accessorKey: "id",
              id: "id",
              header: ({ table }) => /* @__PURE__ */ jsx(TableEasy.CheckAll, { table, options: [bulkDeleteAction(table)] }),
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
            TableEasy.Column,
            {
              header: "Title",
              accessorKey: "title",
              id: "title",
              meta: {
                filterOperator: "contains"
              },
              filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search Title" }),
              cell: ({ row: { index, original }, table }) => {
                const pageIndex = table.getState().pagination.pageIndex;
                const pageSize = table.getState().pagination.pageSize;
                return /* @__PURE__ */ jsxs(EditButton, { recordItemId: original.id, asChild: true, children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground inline-block min-w-6", children: [
                    pageIndex * pageSize + index + 1,
                    ". "
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "py-3 underline-offset-2 visited:text-red-600 hover:text-green-600 hover:underline", children: original.title })
                ] });
              }
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "Project",
              accessorKey: "project.title",
              id: "project.title",
              meta: {
                filterOperator: "contains"
              },
              enableHiding: true,
              filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search Project" }),
              cell: ({ row: { original } }) => /* @__PURE__ */ jsx(Badge, { variant: "outline", children: original.project.title })
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "VirtualPath",
              accessorKey: "pathReplaceProject",
              id: "pathReplaceProject",
              enableHiding: true,
              cell: ({ row: { original } }) => original.pathReplaceProject || "-"
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "Path",
              accessorKey: "pathReplaceModule",
              id: "pathReplaceModule",
              enableHiding: true,
              cell: ({ row: { original } }) => original.pathReplaceModule || "-"
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "Description",
              accessorKey: "description",
              id: "description",
              enableHiding: true,
              cell: ({ row: { original } }) => original.description || "-"
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "Global",
              accessorKey: "global",
              id: "global",
              enableHiding: true,
              cell: ({ row: { original } }) => original.global ? /* @__PURE__ */ jsxs(Popover, { children: [
                /* @__PURE__ */ jsx(PopoverTrigger, { className: "text-link cursor-pointer", asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsx(EyeIcon, { className: "h-4 w-4" }) }) }),
                /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: JSON.stringify(JSON.parse(original.global), null, 2) }) })
              ] }) : "-"
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "CreatedAt",
              accessorKey: "createdAt",
              id: "createdAt",
              enableSorting: true,
              enableHiding: true,
              filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
              cell: ({ row: { original } }) => dayjs(original.createdAt).format("YYYY-MM-DD HH:mm:ss")
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "UpdatedAt",
              accessorKey: "updatedAt",
              id: "updatedAt",
              enableSorting: true,
              enableHiding: true,
              filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
              cell: ({ row: { original } }) => dayjs(original.updatedAt).format("YYYY-MM-DD HH:mm:ss")
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "OperatedBy",
              accessorKey: "operatedBy",
              id: "operatedBy",
              enableHiding: true,
              meta: {
                filterOperator: "contains"
              },
              filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search OperatedBy" }),
              cell: useCallback(
                ({ row: { original } }) => {
                  var _a3, _b, _c, _d, _e;
                  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxs(Avatar, { className: "size-6", children: [
                      /* @__PURE__ */ jsx(AvatarImage, { src: (_a3 = original.operatedBy) == null ? void 0 : _a3.avatar, alt: ((_b = original.operatedBy) == null ? void 0 : _b.name) || "" }),
                      /* @__PURE__ */ jsx(AvatarFallback, { children: (_d = (_c = original.operatedBy) == null ? void 0 : _c.name) == null ? void 0 : _d.slice(0, 1).toUpperCase() })
                    ] }),
                    /* @__PURE__ */ jsx("span", { children: (_e = original.operatedBy) == null ? void 0 : _e.name })
                  ] });
                },
                []
              )
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "Actions",
              accessorKey: "id",
              id: "actions",
              cell: ({ row: { original } }) => /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(
                  ListButton,
                  {
                    resource: EnumResource.frontRouteModule,
                    size: "icon",
                    variant: "ghost",
                    icon: /* @__PURE__ */ jsx(Clock, {}),
                    onClick: () => {
                      var _a3;
                      navigate(`./history/${original.id}?name=${(_a3 = original.project) == null ? void 0 : _a3.title}:${original.title}`);
                    }
                  }
                ),
                /* @__PURE__ */ jsx(EditButton, { recordItemId: original.id, size: "icon", variant: "ghost" }),
                /* @__PURE__ */ jsx(
                  DeleteButton,
                  {
                    disabled: original.title === EnumRole.administrator,
                    recordItemId: original.id,
                    size: "icon",
                    variant: "ghost",
                    className: "text-destructive!",
                    onClick: () => {
                      recordsRef.current = [
                        { id: original.id, title: original.title, projectTitle: original.project.title }
                      ];
                      useModalReturn.show();
                    }
                  }
                )
              ] })
            }
          )
        ]
      }
    )
  ] });
}
function ErrorBoundary$E() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$E,
  default: FrontRouteModuleIndex,
  loader: loader$L,
  meta: meta$u
}, Symbol.toStringTag, { value: "Module" }));
const meta$t = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$K({ request }) {
  const [myIssues, { data: projectList }] = await Promise.all([
    tyServer.getMyIssues(request),
    dataService.findMany("frontRouteProject", { select: { id: true, title: true } }, { request })
  ]);
  return {
    myIssues,
    projectList
  };
}
function FrontRouteModuleCreate() {
  const { myIssues, projectList } = useLoaderData();
  return /* @__PURE__ */ jsx(FrontRouteModuleForm, { myIssues, projectList });
}
function ErrorBoundary$D() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$D,
  default: FrontRouteModuleCreate,
  loader: loader$K,
  meta: meta$t
}, Symbol.toStringTag, { value: "Module" }));
async function loader$J({ request }) {
  await requireUserSession(request);
  return null;
}
function Dashboard() {
  return /* @__PURE__ */ jsx(CanAccess, { fallback: /* @__PURE__ */ jsx(PermissionDenied, {}), children: /* @__PURE__ */ jsx(SidebarLayout, {}) });
}
function ErrorBoundary$C() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$C,
  default: Dashboard,
  loader: loader$J
}, Symbol.toStringTag, { value: "Module" }));
function Switch({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    SwitchPrimitive.Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-hidden focus-visible:outline-1 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-0",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        SwitchPrimitive.Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background pointer-events-none block size-4 rounded-full ring-0 shadow-lg transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
function parseTablenameFromSql(sql) {
  if (!sql) return "";
  const normalizedSql = sql.replace(/\s+/g, " ").trim();
  const fromMatch = normalizedSql.match(/FROM\s+([^\s,]+)(?:\s+([^\s,]+))?/i);
  if (!fromMatch) return "";
  return fromMatch[1].replace(/["`]/g, "");
}
function parseSql(sql) {
  const normalizedSql = sql.replace(/\s+/g, " ").trim();
  const selectMatch = normalizedSql.match(/^SELECT\s+(.*?)\s+FROM/i);
  const fromMatch = normalizedSql.match(/FROM\s+(.*?)(?:\s+WHERE|\s+ORDER\s+BY|\s+GROUP\s+BY|\s+LIMIT|\s*$)/i);
  const whereMatch = normalizedSql.match(/WHERE\s+(.*?)(?:\s+ORDER\s+BY|\s+GROUP\s+BY|\s+LIMIT|\s*$)/i);
  const orderByMatch = normalizedSql.match(/ORDER\s+BY\s+(.*?)(?:\s+LIMIT|\s*$)/i);
  const limitMatch = normalizedSql.match(/LIMIT\s+(.*?)(?:\s+OFFSET|\s*$)/i);
  const offsetMatch = normalizedSql.match(/OFFSET\s+(.*?)(?:\s*$)/i);
  let mainTableAlias = "";
  if (fromMatch) {
    const fromClause = fromMatch[1].trim();
    const tableAliasMatch = fromClause.match(/["']?(\w+)["']?\s+(?:AS\s+)?(\w+)/i);
    if (tableAliasMatch) {
      mainTableAlias = tableAliasMatch[2];
    }
  }
  return {
    select: selectMatch ? selectMatch[1].trim() : "*",
    from: fromMatch ? fromMatch[1].trim() : "",
    where: whereMatch ? whereMatch[1].trim().replace(/;/g, "") : "",
    orderBy: orderByMatch ? orderByMatch[1].trim().replace(/;/g, "") : "",
    limit: limitMatch ? limitMatch[1].trim().replace(/;/g, "") : "",
    offset: offsetMatch ? offsetMatch[1].trim().replace(/;/g, "") : "",
    // 基础部分
    hasWhere: !!whereMatch,
    hasOrderBy: !!orderByMatch,
    hasLimit: !!limitMatch,
    // 表信息
    mainTableAlias
  };
}
function buildSql(parts) {
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
function buildCountSql(parts) {
  const mainTableAlias = parts.mainTableAlias;
  let countSql;
  if (mainTableAlias) {
    countSql = `SELECT COUNT(${mainTableAlias}."id") FROM ${parts.from}`;
  } else {
    countSql = `SELECT COUNT(*) FROM ${parts.from}`;
  }
  if (parts.where) {
    countSql += ` WHERE ${parts.where}`;
  }
  return countSql;
}
function parseTableFieldArrayFromSql(sql) {
  const { select } = parseSql(sql);
  if (!select || select === "*") {
    return [];
  }
  return select.split(",").map((field) => {
    const trimmedField = field.trim();
    const asMatch = trimmedField.match(/.*\s+AS\s+(?:"([^"]+)"|'([^']+)'|(\w+))/i);
    if (asMatch) {
      return asMatch[1] || asMatch[2] || asMatch[3];
    }
    const quotedFieldMatch = trimmedField.match(/(?:\w+\.)?"([^"]+)"$/);
    if (quotedFieldMatch) {
      return quotedFieldMatch[1];
    }
    const lastDotIndex = trimmedField.lastIndexOf(".");
    if (lastDotIndex >= 0) {
      const fieldName = trimmedField.substring(lastDotIndex + 1);
      return fieldName.replace(/["`']/g, "");
    }
    return trimmedField.replace(/["`']/g, "");
  });
}
const meta$s = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$I({ request, params }) {
  const [initialData] = await Promise.all([
    dataService.findUniqueOrThrow("dynamicPage", { where: { id: (params == null ? void 0 : params.id) || "" } }, { request })
  ]);
  return {
    initialData
  };
}
async function action$g({ request }) {
  try {
    const formData = await request.formData();
    const params = JSON.parse(formData.get("data"));
    const { path: path2 = "", title: title2, isActive } = params;
    const [_slash, group, category, _dynamic, name] = path2.split("/");
    const menus = [
      {
        name: group
      },
      {
        name: category,
        meta: { parent: group, icon: "Lightbulb" }
      },
      {
        name: `dynamic/${name}`,
        list: `/${group}/${category}/dynamic/${name}`,
        meta: { parent: category },
        title: title2,
        isActive,
        order: 1e3
      }
    ];
    for (const menu of menus) {
      const existingMenu = await dataService.findFirst("menu", { where: { name: menu.name } }, { request });
      if (!existingMenu) {
        await dataService.create("menu", { data: menu }, { request });
      } else if (menu.list && existingMenu.isActive !== isActive) {
        await dataService.update("menu", { where: { id: existingMenu.id }, data: { isActive } }, { request });
      }
    }
    return data$1({ success: true }, { status: 200 });
  } catch (error) {
    return data$1({ error: error instanceof Error ? error.message : "操作失败" }, { status: 500 });
  }
}
function DynamicPageEdit() {
  const { initialData } = useLoaderData();
  return /* @__PURE__ */ jsx(DynamicPageForm, { initialData });
}
function ErrorBoundary$B() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const baseFormFieldTypes = ["text", "textarea", "switch", "file", "checkbox"];
const selectFormFieldTypes = ["select", "selectMany", "radio", "checkboxMany"];
const dateFormFieldTypes = ["date", "dateRange", "dateMany"];
const exampleTableSql = `
SELECT 
  p."id", 
  p."title", 
  c."title" AS "category",
  p."hit",
  p."status",
  p."updatedAt",
  u."name" AS "operatedBy"
FROM 
  "Post" p
JOIN 
  "Category" c ON p."categoryId" = c.id
JOIN 
  "User" u ON p."operatedById" = u.id
WHERE 
  p."deleted" IS NOT TRUE
ORDER BY 
  p."updatedAt" DESC;
`;
const filterFormData$5 = (data2) => {
  const tableRecordLinkData = Array.isArray(data2 == null ? void 0 : data2.tableRecordLink) ? data2 == null ? void 0 : data2.tableRecordLink : [];
  const tableFieldData = Array.isArray(data2 == null ? void 0 : data2.tableField) ? data2 == null ? void 0 : data2.tableField : [];
  const formFieldData = Array.isArray(data2 == null ? void 0 : data2.formField) ? data2 == null ? void 0 : data2.formField : [];
  return {
    path: (data2 == null ? void 0 : data2.path) || "",
    title: (data2 == null ? void 0 : data2.title) || "",
    isActive: (data2 == null ? void 0 : data2.isActive) ?? true,
    enableCreate: (data2 == null ? void 0 : data2.enableCreate) ?? true,
    enableDelete: (data2 == null ? void 0 : data2.enableDelete) ?? true,
    enableEdit: (data2 == null ? void 0 : data2.enableEdit) ?? true,
    enableClone: (data2 == null ? void 0 : data2.enableClone) ?? true,
    db: (data2 == null ? void 0 : data2.db) || "db1",
    tableSql: (data2 == null ? void 0 : data2.tableSql) || exampleTableSql,
    tableRecordLink: tableRecordLinkData,
    tableField: tableFieldData,
    formField: formFieldData,
    meta: JSON.stringify((data2 == null ? void 0 : data2.meta) || {}, null, 2)
  };
};
const tableRecordLinkSchema = z.object({
  name: z.string().min(1, { message: "请输入按钮名称" }),
  url: z.string().min(1, { message: "请输入URL" })
});
const tableFieldSchema = z.object({
  name: z.string().min(1, { message: "请输入字段名" }),
  defaultHide: z.boolean().optional()
});
const formFieldSchemaBase = z.object({
  name: z.string().min(1, { message: "请输入字段名" }),
  type: z.string().min(1, { message: "请选择字段类型" }),
  required: z.boolean().optional(),
  readonly: z.boolean().optional(),
  hide: z.boolean().optional(),
  label: z.string().optional(),
  description: z.string().optional()
});
const formFieldSchemaSelect = formFieldSchemaBase.extend({
  optionsType: z.string().optional(),
  optionsStatic: z.array(
    z.object({
      label: z.string().min(1, { message: "标签不能为空" }),
      value: z.string().min(1, { message: "值不能为空" })
    })
  ).optional(),
  optionsSql: z.string().optional(),
  optionsMap: z.object({
    key: z.string().optional(),
    label: z.string().optional(),
    value: z.string().optional()
  }).optional()
});
const formFieldSchemaNumber = formFieldSchemaBase.extend({
  min: z.number().optional(),
  max: z.number().optional(),
  step: z.number().optional()
});
const formFieldSchemaDate = formFieldSchemaBase.extend({
  start: z.string().optional(),
  end: z.string().optional()
});
const formFieldSchemaCode = formFieldSchemaBase.extend({
  language: z.string().optional()
});
const formFieldSchemaAny = z.object({
  name: z.string().min(1, { message: "请输入字段名" }),
  type: z.string().min(1, { message: "请选择字段类型" }),
  required: z.boolean().optional(),
  readonly: z.boolean().optional(),
  hide: z.boolean().optional(),
  description: z.string().optional(),
  optionsType: z.string().optional(),
  optionsStatic: z.array(
    z.object({
      label: z.string().min(1, { message: "标签不能为空" }),
      value: z.string().min(1, { message: "值不能为空" })
    })
  ).optional(),
  optionsSql: z.any().optional(),
  optionsMap: z.object({
    label: z.string().optional(),
    value: z.string().optional()
  }).optional(),
  min: z.number().optional(),
  max: z.number().optional(),
  step: z.number().optional(),
  start: z.string().optional(),
  end: z.string().optional(),
  language: z.string().optional()
});
const formFieldSchema = z.discriminatedUnion("type", [
  formFieldSchemaBase.extend({ type: z.literal("text") }),
  formFieldSchemaBase.extend({ type: z.literal("textarea") }),
  formFieldSchemaBase.extend({ type: z.literal("switch") }),
  formFieldSchemaBase.extend({ type: z.literal("file") }),
  formFieldSchemaSelect.extend({ type: z.literal("select") }),
  formFieldSchemaSelect.extend({ type: z.literal("selectMany") }),
  formFieldSchemaSelect.extend({ type: z.literal("radio") }),
  formFieldSchemaSelect.extend({ type: z.literal("checkbox") }),
  formFieldSchemaSelect.extend({ type: z.literal("checkboxMany") }),
  formFieldSchemaNumber.extend({ type: z.literal("number") }),
  formFieldSchemaNumber.extend({ type: z.literal("slider") }),
  formFieldSchemaDate.extend({ type: z.literal("date") }),
  formFieldSchemaDate.extend({ type: z.literal("dateRange") }),
  formFieldSchemaDate.extend({ type: z.literal("dateMany") }),
  formFieldSchemaCode.extend({ type: z.literal("code") })
]);
const schemaDynamicPageNew = schemaDynamicPage.extend({
  meta: schemaJson,
  db: z.string(),
  tableSql: z.string(),
  tableRecordLink: z.array(tableRecordLinkSchema).optional(),
  tableField: z.array(tableFieldSchema).optional(),
  formField: z.array(formFieldSchemaAny).optional()
});
const SortableItem = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  return /* @__PURE__ */ jsx("div", { ref: setNodeRef, style, className: "relative touch-none", children: children(attributes, listeners) });
};
const TableRecordLinkItem = ({
  item,
  onEdit,
  onDelete
}) => {
  return /* @__PURE__ */ jsx(SortableItem, { id: item.name, children: (attributes, listeners) => /* @__PURE__ */ jsxs("div", { className: "bg-muted hover:bg-muted/50 hover:border-foreground group mb-2 flex items-center justify-between rounded-md border p-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground cursor-move outline-none", ...attributes, ...listeners, children: /* @__PURE__ */ jsx(GripVertical, { size: 16 }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-x-2", children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: item.name }),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-xs", children: item.url })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100",
          onClick: () => onEdit(item),
          children: /* @__PURE__ */ jsx(Edit, { size: 14 })
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "icon",
          className: "text-destructive! h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100",
          onClick: () => onDelete(item.name),
          children: /* @__PURE__ */ jsx(Trash2, { size: 14 })
        }
      )
    ] })
  ] }) });
};
const FormFieldItem = ({
  item,
  onEdit,
  onDelete
}) => {
  const strArray = [`type=${item.type}`];
  if (item.required) {
    strArray.push("required=true");
  }
  if (item.readonly) {
    strArray.push("readonly=true");
  }
  if (item.hide) {
    strArray.push("hide=true");
  }
  if (item.optionsType) {
    strArray.push(`optionsType=${item.optionsType}`);
  }
  if (item.label) {
    strArray.push(`label=${item.label}`);
  }
  if (item.description) {
    strArray.push(`description=${item.description}`);
  }
  return /* @__PURE__ */ jsx(SortableItem, { id: item.name, children: (attributes, listeners) => /* @__PURE__ */ jsxs("div", { className: "bg-muted hover:bg-muted/50 hover:border-foreground group mb-2 flex items-center justify-between rounded-md border p-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground cursor-move outline-none", ...attributes, ...listeners, children: /* @__PURE__ */ jsx(GripVertical, { size: 16 }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-x-2", children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: item.name }),
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-xs", children: strArray.join("、") })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100",
          onClick: () => onEdit(item),
          children: /* @__PURE__ */ jsx(Edit, { size: 14 })
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "icon",
          className: "text-destructive! h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100",
          onClick: () => onDelete(item.name),
          children: /* @__PURE__ */ jsx(Trash2, { size: 14 })
        }
      )
    ] })
  ] }) });
};
function DraggableList({ items: items2, renderItem, onDragEnd }) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = items2.findIndex((item) => item.name === active.id);
      const newIndex = items2.findIndex((item) => item.name === over.id);
      const newItems = arrayMove(items2, oldIndex, newIndex);
      onDragEnd(newItems);
    }
  };
  return /* @__PURE__ */ jsx(
    DndContext,
    {
      sensors,
      collisionDetection: closestCenter,
      onDragEnd: handleDragEnd,
      modifiers: [restrictToVerticalAxis],
      children: /* @__PURE__ */ jsx(SortableContext, { items: items2.map((item) => item.name), strategy: verticalListSortingStrategy, children: items2.map((item) => renderItem(item)) })
    }
  );
}
const TableRecordLinkDialog = ({
  isOpen,
  onClose,
  onSave,
  initialData,
  resourceTable,
  tableRecordLinkItems
}) => {
  const extendedTableRecordLinkSchema = tableRecordLinkSchema.superRefine((data2, ctx) => {
    if (tableRecordLinkItems.some((item) => item.name === data2.name && item.name !== (initialData == null ? void 0 : initialData.name))) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "字段名已存在",
        path: ["name"]
      });
      return;
    }
  });
  const form = useForm$1({
    resolver: zodResolver(extendedTableRecordLinkSchema),
    defaultValues: {
      name: (initialData == null ? void 0 : initialData.name) || "",
      url: (initialData == null ? void 0 : initialData.url) || ""
    },
    mode: "onChange"
  });
  useEffect(() => {
    if (isOpen) {
      form.reset({
        name: (initialData == null ? void 0 : initialData.name) || "",
        url: (initialData == null ? void 0 : initialData.url) || ""
      });
    }
  }, [form, initialData, isOpen]);
  const onSubmit = (data2) => {
    onSave(data2);
    onClose();
  };
  return /* @__PURE__ */ jsx(Dialog, { open: isOpen, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsxs(DialogContent, { children: [
    /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: initialData ? "编辑 Table 表记录链接" : "添加 Table 表记录链接" }),
      /* @__PURE__ */ jsx(DialogDescription, { children: "除增、改、删之外的额外按钮，展示在 Table 表记录的右侧" })
    ] }),
    /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4 py-2", children: [
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "name",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "按钮名称 *" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
            /* @__PURE__ */ jsx(FormDescription, { className: "text-xs", children: "请确保名称唯一，将作为路由参数" }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "url",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "URL *" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { ...field, placeholder: "eg: /a/b/c?id={id}&category={category.title}" }) }),
            /* @__PURE__ */ jsxs(FormDescription, { className: "text-xs", children: [
              "使用变量 ",
              "{key}",
              " 引用 `基本配置 - 资源表` 中指定的 `",
              resourceTable || "尚未填写",
              "` 表记录字段"
            ] }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsx(Button, { variant: "outline", type: "button", onClick: onClose, children: "取消" }),
        /* @__PURE__ */ jsx(Button, { type: "submit", icon: /* @__PURE__ */ jsx(CheckCheck, {}), children: "保存" })
      ] })
    ] }) })
  ] }) });
};
const FormFieldDialog = ({
  isOpen,
  onClose,
  onSave,
  initialData,
  formFieldItems
}) => {
  var _a2;
  const extendedFormFieldSchema = formFieldSchema.superRefine((data2, ctx) => {
    if (formFieldItems.some((item) => item.name === data2.name && item.name !== (initialData == null ? void 0 : initialData.name))) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "字段名已存在",
        path: ["name"]
      });
      return;
    }
    if (selectFormFieldTypes.includes(data2.type)) {
      const selectData = data2;
      if (!selectData.optionsType) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "请选择下拉选项数据来源",
          path: ["optionsType"]
        });
        return;
      }
      if (selectData.optionsType === "static") {
        if (!selectData.optionsStatic || !selectData.optionsStatic.length || !selectData.optionsStatic.some((opt) => opt.label && opt.value)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "请至少添加一个有效的静态选项",
            path: ["optionsStatic"]
          });
        }
        return;
      }
      if (selectData.optionsType === "database" && !selectData.optionsSql) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "请输入有效的 `SQL` 查询语句",
          path: ["optionsSql"]
        });
        return;
      }
    }
    if (data2.type === "number" || data2.type === "slider") {
      const numberData = data2;
      if (numberData.min !== void 0 && numberData.max !== void 0 && numberData.min > numberData.max) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "最小值不能大于最大值",
          path: ["min"]
        });
      }
    }
    if (dateFormFieldTypes.includes(data2.type)) {
      const dateData = data2;
      if (dateData.start && dateData.end && dateData.start > dateData.end) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "开始日期不能晚于结束日期",
          path: ["start"]
        });
      }
    }
  });
  const defaultValues = getInitialFormValues(initialData);
  const form = useForm$1({
    resolver: zodResolver(extendedFormFieldSchema),
    defaultValues,
    mode: "onChange"
  });
  function getInitialFormValues(data2) {
    const baseValues = {
      name: (data2 == null ? void 0 : data2.name) || "",
      type: (data2 == null ? void 0 : data2.type) || "",
      required: (data2 == null ? void 0 : data2.required) || false,
      readonly: (data2 == null ? void 0 : data2.readonly) || false,
      hide: (data2 == null ? void 0 : data2.hide) || false,
      label: (data2 == null ? void 0 : data2.label) || "",
      description: (data2 == null ? void 0 : data2.description) || ""
    };
    if (!data2 || baseFormFieldTypes.includes(data2.type)) {
      return baseValues;
    }
    switch (data2.type) {
      case "select":
      case "selectMany":
      case "radio":
      case "checkboxMany":
        return {
          ...baseValues,
          type: data2.type,
          optionsType: data2.optionsType,
          optionsStatic: data2.optionsStatic || (data2.optionsType === "static" ? [{ label: "", value: "" }] : void 0),
          optionsSql: data2.optionsSql,
          optionsMap: data2.optionsMap
        };
      case "number":
      case "slider":
        return {
          ...baseValues,
          type: data2.type,
          min: data2.min,
          max: data2.max,
          step: data2.step
        };
      case "date":
      case "dateRange":
      case "dateMany":
        return {
          ...baseValues,
          type: data2.type,
          start: data2.start,
          end: data2.end
        };
      case "code":
        return {
          ...baseValues,
          type: data2.type,
          language: data2.language || "json"
        };
      default:
        return baseValues;
    }
  }
  const { watch, setValue } = form;
  const type = watch("type");
  const optionsType = watch("optionsType");
  const isSelectType = selectFormFieldTypes.includes(type);
  const watchedOptionsStatic = watch("optionsStatic");
  const optionsStatic = useMemo(() => watchedOptionsStatic || [{ label: "", value: "" }], [watchedOptionsStatic]);
  useEffect(() => {
    if (optionsStatic.filter((opt) => opt.label && opt.value).length > 0) {
      form.clearErrors("optionsStatic");
    }
  }, [optionsStatic, form]);
  useEffect(() => {
    if (isOpen) {
      form.reset(defaultValues);
    } else {
      form.reset({});
    }
  }, [isOpen]);
  const addOption = () => {
    setValue("optionsStatic", [...optionsStatic, { label: "", value: "" }]);
  };
  const removeOption = (index) => {
    setValue(
      "optionsStatic",
      optionsStatic.filter((_, idx) => idx !== index)
    );
  };
  const onSubmit = (data2) => {
    onSave(data2);
    onClose();
  };
  return /* @__PURE__ */ jsx(Dialog, { open: isOpen, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-6xl", children: [
    /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: initialData ? "编辑 Form 表单字段" : "新增 Form 表单字段" }),
      /* @__PURE__ */ jsx(DialogDescription, { children: "配置表单字段属性" })
    ] }),
    /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "grid grid-cols-2 gap-4 py-2", children: [
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "name",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "字段名 *" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
            /* @__PURE__ */ jsx(FormDescription, { className: "text-xs", children: "请确保名称唯一，将作为表单字段的名称" }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { className: "block", children: "字段限制 (可选)" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex flex-row items-center justify-between gap-2 rounded-lg border px-3 py-[7px]", children: /* @__PURE__ */ jsx(
            FormField,
            {
              control: form.control,
              name: "required",
              render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "必填" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) })
              ] })
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "inline-flex flex-row items-center justify-between gap-2 rounded-lg border px-3 py-[7px]", children: /* @__PURE__ */ jsx(
            FormField,
            {
              control: form.control,
              name: "readonly",
              render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex flex-row items-center gap-2 space-y-0", children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "只读" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) })
              ] })
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "type",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "字段类型 *" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              Combobox,
              {
                className: "sm:w-full",
                popoverProps: { modal: true },
                options: [
                  { label: "Text - 文本", value: "text" },
                  { label: "Number - 数字", value: "number" },
                  { label: "Slider - 滑块", value: "slider" },
                  { label: "Date - 日期", value: "date" },
                  { label: "DateRange - 日期范围", value: "dateRange" },
                  { label: "DateMany - 日期多选", value: "dateMany" },
                  { label: "Select - 下拉", value: "select" },
                  { label: "SelectMany - 下拉多选", value: "selectMany" },
                  { label: "Checkbox - 复选框", value: "checkbox" },
                  { label: "Radio - 单选", value: "radio" },
                  { label: "Switch - 开关", value: "switch" },
                  { label: "Textarea - 文本域", value: "textarea" },
                  { label: "Code - 代码", value: "code" },
                  { label: "File - 文件", value: "file" }
                ],
                value: field.value,
                onChange: field.onChange
              }
            ) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "label",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "标签 (可选)" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "description",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "描述 (可选)" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ) })
      ] }),
      isSelectType && /* @__PURE__ */ jsx("div", { className: "col-span-2 space-y-2", children: /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "optionsType",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "下拉选项数据来源 *" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "选择 Select 选项数据来源" }) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "static", children: "Static - 静态" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "database", children: "Database - 数据库" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "api", disabled: true, children: "API - 接口" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(FormDescription, { className: "text-xs", children: "静态指手动维护选项数据、数据库指从数据库中动态查询、API指从接口获取数据" }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ) }),
      isSelectType && optionsType === "static" && /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-1 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(Label, { children: "静态选项 *" }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              type: "button",
              size: "sm",
              variant: "link",
              onClick: addOption,
              className: "cursor-pointer gap-1 px-0! text-xs text-green-600",
              children: [
                /* @__PURE__ */ jsx(Plus, { className: "h-3 w-3" }),
                "添加静态选项"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: optionsStatic.map((option, idx) => /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 items-center gap-4", children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              value: option.label,
              placeholder: "标签",
              onChange: (e) => {
                const newOptions = [...optionsStatic];
                newOptions[idx].label = e.target.value;
                setValue("optionsStatic", newOptions);
              },
              className: "flex-1"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                value: option.value,
                placeholder: "值",
                onChange: (e) => {
                  const newOptions = [...optionsStatic];
                  newOptions[idx].value = e.target.value;
                  setValue("optionsStatic", newOptions);
                },
                className: "flex-1"
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                className: "text-destructive! h-8 w-8 border-dashed p-0",
                size: "icon",
                disabled: optionsStatic.length === 1,
                onClick: () => removeOption(idx),
                children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
              }
            )
          ] })
        ] }, idx)) }),
        /* @__PURE__ */ jsx(FormMessage, { className: "mt-2", children: isSelectType ? (_a2 = form.formState.errors.optionsStatic) == null ? void 0 : _a2.message : void 0 })
      ] }),
      isSelectType && optionsType === "database" && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "col-span-2 space-y-2", children: /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "optionsSql",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "SQL 查询语句" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              CodeEditor,
              {
                language: "sql",
                height: "100px",
                value: field.value || "",
                onChange: (val) => {
                  setValue("optionsSql", val.target.value, { shouldValidate: true, shouldDirty: true });
                }
              }
            ) }),
            /* @__PURE__ */ jsx(FormDescription, { className: "text-xs", children: "SQL 查询语句，用于查询选项数据" }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ) }) }),
      (type === "number" || type === "slider") && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "min",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "最小值" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  type: "number",
                  ...field,
                  value: field.value === void 0 ? "" : field.value,
                  onChange: (e) => {
                    const val = e.target.value ? parseInt(e.target.value) : void 0;
                    field.onChange(val);
                  }
                }
              ) }),
              /* @__PURE__ */ jsx(FormDescription, { className: "text-xs", children: "限制输入的最小值" }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "max",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "最大值" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  type: "number",
                  ...field,
                  value: field.value === void 0 ? "" : field.value,
                  onChange: (e) => {
                    const val = e.target.value ? parseInt(e.target.value) : void 0;
                    field.onChange(val);
                  }
                }
              ) }),
              /* @__PURE__ */ jsx(FormDescription, { className: "text-xs", children: "限制输入的最大值" }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ) })
      ] }),
      (type === "slider" || type === "number") && /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "step",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "步长 (可选)" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              Input,
              {
                type: "number",
                min: 1,
                step: 1,
                ...field,
                value: field.value === void 0 ? "" : field.value,
                onChange: (e) => {
                  const val = e.target.value ? parseInt(e.target.value) : void 0;
                  field.onChange(val);
                }
              }
            ) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ) }),
      dateFormFieldTypes.includes(type) && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "start",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "开始日期" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { type: "text", ...field, placeholder: "2026-01-01" }) }),
              /* @__PURE__ */ jsx(FormDescription, { className: "text-xs", children: "限制输入的开始时间" }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "end",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "结束日期" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { type: "text", ...field, placeholder: "2030-12-31" }) }),
              /* @__PURE__ */ jsx(FormDescription, { className: "text-xs", children: "限制输入的结束时间" }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ) })
      ] }),
      type === "code" && /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "language",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "程序语言" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { ...field, placeholder: "如：javascript, python, sql等" }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-2 flex justify-end gap-2 pt-4", children: [
        /* @__PURE__ */ jsx(Button, { variant: "outline", type: "button", onClick: onClose, children: "取消" }),
        /* @__PURE__ */ jsx(Button, { type: "submit", icon: /* @__PURE__ */ jsx(CheckCheck, {}), children: "保存" })
      ] })
    ] }) })
  ] }) });
};
const DynamicPageForm = ({
  className,
  redirect: redirect2 = EnumAction.list,
  initialData,
  action: action2
}) => {
  const { tableRecordLink = [], formField = [] } = initialData || {};
  const { formAction, id = initialData == null ? void 0 : initialData.id, identifier } = useResourceParams({ action: action2 });
  const enableAutoSave = formAction === EnumAction.edit;
  const defaultValues = filterFormData$5(initialData || {});
  const actionData = useActionData();
  const submit = useSubmit();
  const form = useForm({
    resolver: zodResolver(schemaDynamicPageNew),
    defaultValues,
    warnWhenUnsavedChanges: true,
    mode: "onChange",
    refineCoreProps: {
      resource: identifier,
      action: formAction,
      id,
      queryOptions: getRefineQueryOptions(defaultValues),
      redirect: redirect2,
      autoSave: {
        enabled: enableAutoSave,
        debounce: 2e3,
        invalidateOnUnmount: true,
        onFinish: (values) => {
          try {
            schemaDynamicPageNew.parse(values);
            if (isEqual(values, form.formState.defaultValues)) {
              throw new Error("表单内容未变化");
            }
            return beforeSubmit(values);
          } catch (error) {
            return null;
          }
        }
      }
    }
  });
  const resourceTable = parseTablenameFromSql(form.watch("tableSql"));
  const [tableRecordLinkItems, setTableRecordLinkItems] = useState(tableRecordLink);
  const [isTableRecordLinkDialogOpen, setIsTableRecordLinkDialogOpen] = useState(false);
  const [editingTableRecordLinkItem, setEditingTableRecordLinkItem] = useState(
    void 0
  );
  const [formFieldItems, setFormFieldItems] = useState(formField);
  const [isFormFieldDialogOpen, setIsFormFieldDialogOpen] = useState(false);
  const [editingFormFieldItem, setEditingFormFieldItem] = useState(void 0);
  useEffect(() => {
    if (!isEqual(tableRecordLinkItems, form.getValues("tableRecordLink"))) {
      form.setValue("tableRecordLink", tableRecordLinkItems, { shouldDirty: true });
      if (formAction === EnumAction.edit) {
        form.refineCore.onFinishAutoSave({ tableRecordLink: tableRecordLinkItems });
      }
    }
  }, [tableRecordLinkItems, form, formAction]);
  useEffect(() => {
    if (!isEqual(formFieldItems, form.getValues("formField"))) {
      form.setValue("formField", formFieldItems, { shouldDirty: true });
      if (formAction === EnumAction.edit) {
        form.refineCore.onFinishAutoSave({ formField: formFieldItems });
      }
    }
  }, [formFieldItems, form, formAction]);
  const beforeSubmit = useCallback((val) => {
    const changedValues = formAction === EnumAction.edit ? getChangedValues(val, defaultValues) : val;
    if (changedValues.meta) {
      changedValues.meta = JSON.parse(changedValues.meta);
    }
    return dropEmptyKey(changedValues);
  }, []);
  const handleAddTableRecordLink = () => {
    setEditingTableRecordLinkItem(void 0);
    setIsTableRecordLinkDialogOpen(true);
  };
  const handleTableRecordLinkDelete = (name) => {
    setTableRecordLinkItems((prev) => prev.filter((item) => item.name !== name));
  };
  const handleSaveTableRecordLink = (data2) => {
    if (editingTableRecordLinkItem) {
      setTableRecordLinkItems(
        (prev) => prev.map((item) => item.name === editingTableRecordLinkItem.name ? data2 : item)
      );
    } else {
      setTableRecordLinkItems((prev) => [...prev, data2]);
    }
    setIsTableRecordLinkDialogOpen(false);
    setEditingTableRecordLinkItem(void 0);
  };
  const handleAddFormField = () => {
    setEditingFormFieldItem(void 0);
    setIsFormFieldDialogOpen(true);
  };
  const handleFormFieldDelete = (name) => {
    setFormFieldItems((prev) => prev.filter((item) => item.name !== name));
  };
  const handleSaveFormField = (data2) => {
    if (editingFormFieldItem) {
      setFormFieldItems((prev) => prev.map((item) => item.name === editingFormFieldItem.name ? data2 : item));
    } else {
      setFormFieldItems((prev) => [...prev, data2]);
    }
    setIsFormFieldDialogOpen(false);
    setEditingFormFieldItem(void 0);
  };
  const handleSyncMenu = useCallback(() => {
    const values = form.getValues();
    const formData = new FormData();
    formData.append("data", JSON.stringify({ path: values.path, title: values.title, isActive: values.isActive }));
    submit(formData, { method: "post" });
  }, [submit, form]);
  useEffect(() => {
    if (actionData) {
      if (actionData.error) {
        toast.error("同步菜单操作失败", { description: actionData.error });
      } else if (actionData.success) {
        toast.success("同步菜单操作成功", { description: "success" });
      }
    }
  }, [actionData]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      FormEasy,
      {
        ...form,
        autoSave: enableAutoSave,
        beforeSubmit,
        className,
        recordItemId: initialData == null ? void 0 : initialData.id,
        children: [
          /* @__PURE__ */ jsxs(H2, { className: "flex items-end border-none", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("span", { children: "配置化CRUD页面" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm font-normal", children: "通过配置要展示的数据模型、查询语句、增删改查等交互，自动生成CRUD页面" })
            ] }),
            /* @__PURE__ */ jsx(Button, { icon: /* @__PURE__ */ jsx(Lightbulb, {}), type: "button", variant: "outline", onClick: handleSyncMenu, children: "同步创建、或更新菜单" })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "基本配置" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "配置化CRUD最基本配置" })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsx(
                  FormField,
                  {
                    control: form.control,
                    name: "path",
                    render: ({ field }) => {
                      const [_slash = "", group = "", category = "", _dynamic = "", name = ""] = field.value.split("/");
                      return /* @__PURE__ */ jsxs(FormItem, { children: [
                        /* @__PURE__ */ jsx(FormLabel, { children: "页面路径" }),
                        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
                          /* @__PURE__ */ jsx(
                            FormField,
                            {
                              control: form.control,
                              name: "path",
                              render: ({ field: field2 }) => /* @__PURE__ */ jsx(FormItem, { className: "flex flex-row items-center space-y-0", children: /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                                Input,
                                {
                                  placeholder: "eg: playground",
                                  value: group,
                                  onChange: (e) => field2.onChange(`/${e.target.value}/${category}/dynamic/${name}`)
                                }
                              ) }) })
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            FormField,
                            {
                              control: form.control,
                              name: "path",
                              render: ({ field: field2 }) => /* @__PURE__ */ jsx(FormItem, { className: "flex flex-row items-center space-y-0", children: /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                                Input,
                                {
                                  placeholder: "eg: dashboard",
                                  value: category,
                                  onChange: (e) => field2.onChange(`/${group}/${e.target.value}/dynamic/${name}`)
                                }
                              ) }) })
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            FormField,
                            {
                              control: form.control,
                              name: "path",
                              render: ({ field: field2 }) => /* @__PURE__ */ jsx(FormItem, { className: "flex flex-row items-center space-y-0", children: /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                                Input,
                                {
                                  placeholder: "eg: post",
                                  value: name,
                                  onChange: (e) => field2.onChange(`/${group}/${category}/dynamic/${e.target.value}`)
                                }
                              ) }) })
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxs(FormDescription, { children: [
                          "实际地址: ",
                          `/${group || "group"}/${category || "category"}/dynamic/${name || "name"}`
                        ] }),
                        /* @__PURE__ */ jsx(FormMessage, {})
                      ] });
                    }
                  }
                ),
                /* @__PURE__ */ jsx(Field, { ...form, name: "title", label: "页面标题", description: "页面、以及菜单展示的标题", children: /* @__PURE__ */ jsx(Input, { placeholder: "eg: 文章" }) }),
                /* @__PURE__ */ jsx(Field, { ...form, name: "db", label: "数据源", children: /* @__PURE__ */ jsx(
                  Combobox,
                  {
                    className: "sm:w-auto",
                    options: [
                      { label: "数据库 A", value: "db1" },
                      { label: "数据库 B", value: "db2" }
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsx(Field, { ...form, name: "tableSql", label: "表SQL查询语句", children: /* @__PURE__ */ jsx(CodeEditor, { language: "sql", height: "20vh" }) }),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "isActive",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "mr-3 inline-flex flex-row items-center justify-between rounded-lg border px-3 py-[5px]", children: [
                    /* @__PURE__ */ jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsx(FormLabel, { children: "是否启用" }) }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Switch, { checked: !!field.value, onCheckedChange: field.onChange }) })
                  ] })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "功能控制（可选）" }),
              /* @__PURE__ */ jsxs(CardDescription, { children: [
                "控制是否支持新增、编辑、删除 `基本配置 - 资源表` ",
                resourceTable
              ] })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "flex gap-4", children: [
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "enableCreate",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex flex-row items-center justify-between rounded-lg border px-3 py-[5px]", children: [
                    /* @__PURE__ */ jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsx(FormLabel, { children: "支持新增" }) }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Switch, { checked: !!field.value, onCheckedChange: field.onChange }) })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "enableEdit",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex flex-row items-center justify-between rounded-lg border px-3 py-[5px]", children: [
                    /* @__PURE__ */ jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsx(FormLabel, { children: "支持编辑" }) }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Switch, { checked: !!field.value, onCheckedChange: field.onChange }) })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "enableClone",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex flex-row items-center justify-between rounded-lg border px-3 py-[5px]", children: [
                    /* @__PURE__ */ jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsx(FormLabel, { children: "支持克隆" }) }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Switch, { checked: !!field.value, onCheckedChange: field.onChange }) })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name: "enableDelete",
                  render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex flex-row items-center justify-between rounded-lg border px-3 py-[5px]", children: [
                    /* @__PURE__ */ jsx("div", { className: "space-y-0.5", children: /* @__PURE__ */ jsx(FormLabel, { children: "支持删除" }) }),
                    /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Switch, { checked: !!field.value, onCheckedChange: field.onChange }) })
                  ] })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "Table 表记录按钮（可选）" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "除增、改、删之外的额外按钮，展示在表记录的右侧" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsx(Field, { ...form, name: "tableRecordLink", label: "", className: "gap-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx(
                DraggableList,
                {
                  items: tableRecordLinkItems,
                  onDragEnd: (items2) => setTableRecordLinkItems(items2),
                  renderItem: (item) => /* @__PURE__ */ jsx(
                    TableRecordLinkItem,
                    {
                      item,
                      onEdit: () => {
                        setEditingTableRecordLinkItem(item);
                        setIsTableRecordLinkDialogOpen(true);
                      },
                      onDelete: handleTableRecordLinkDelete
                    },
                    item.name
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  onClick: handleAddTableRecordLink,
                  icon: /* @__PURE__ */ jsx(Plus, {}),
                  className: "border-dashed hover:border-green-500",
                  children: "添加表记录按钮"
                }
              )
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "Form 表单字段（可选）" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "控制新增、编辑表单时字段的显示、排序" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsx(Field, { ...form, name: "formField", label: "", className: "gap-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx(
                DraggableList,
                {
                  items: formFieldItems,
                  onDragEnd: (items2) => setFormFieldItems(items2),
                  renderItem: (item) => /* @__PURE__ */ jsx(
                    FormFieldItem,
                    {
                      item,
                      onDelete: handleFormFieldDelete,
                      onEdit: () => {
                        setEditingFormFieldItem(item);
                        setIsFormFieldDialogOpen(true);
                      }
                    },
                    item.name
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  onClick: handleAddFormField,
                  icon: /* @__PURE__ */ jsx(Plus, {}),
                  className: "border-dashed hover:border-green-500",
                  children: "添加表单字段"
                }
              )
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "额外配置 - Meta（可选）" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "支持配置自定义的JSON信息" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsx(Field, { ...form, name: "meta", label: "", className: "gap-0", children: /* @__PURE__ */ jsx(CodeEditor, { language: "json", height: "20vh" }) }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      TableRecordLinkDialog,
      {
        isOpen: isTableRecordLinkDialogOpen,
        onClose: () => setIsTableRecordLinkDialogOpen(false),
        onSave: handleSaveTableRecordLink,
        initialData: editingTableRecordLinkItem,
        resourceTable,
        tableRecordLinkItems
      }
    ),
    /* @__PURE__ */ jsx(
      FormFieldDialog,
      {
        isOpen: isFormFieldDialogOpen,
        onClose: () => setIsFormFieldDialogOpen(false),
        onSave: handleSaveFormField,
        initialData: editingFormFieldItem,
        formFieldItems
      }
    )
  ] });
};
const route13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DynamicPageForm,
  ErrorBoundary: ErrorBoundary$B,
  action: action$g,
  dateFormFieldTypes,
  default: DynamicPageEdit,
  loader: loader$I,
  meta: meta$s,
  selectFormFieldTypes
}, Symbol.toStringTag, { value: "Module" }));
const meta$r = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$H({ request, params }) {
  const [initialData] = await Promise.all([
    dataService.findUniqueOrThrow("dynamicPage", { where: { id: (params == null ? void 0 : params.id) || "" } }, { request })
  ]);
  return {
    initialData
  };
}
function DynamicPageClone() {
  const { initialData } = useLoaderData();
  return /* @__PURE__ */ jsx(DynamicPageForm, { initialData });
}
function ErrorBoundary$A() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$A,
  default: DynamicPageClone,
  loader: loader$H,
  meta: meta$r
}, Symbol.toStringTag, { value: "Module" }));
const meta$q = ({ matches }) => {
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
      src: "/images/logo.png",
      style: {
        viewTransitionName: "image-expand"
      }
    }
  ) });
}
function ErrorBoundary$z() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$z,
  default: DashboardViewTransition,
  meta: meta$q
}, Symbol.toStringTag, { value: "Module" }));
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
  const { to, LinkComponent, label, disabled, hidden, title: title2, canAccess } = useCloneButton({
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
      children: /* @__PURE__ */ jsx(Button, { disabled: disabledNew, title: title2, icon: /* @__PURE__ */ jsx(CopyCheck, {}), ...props, children: !hideText && (children ?? label) })
    }
  );
};
CloneButton.displayName = "CloneButton";
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
  const { to, label, title: title2, hidden, disabled, LinkComponent, canAccess } = useShowButton({
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
      children: /* @__PURE__ */ jsx(Button, { disabled: disabledNew, icon: !props.asChild ? /* @__PURE__ */ jsx(EyeIcon, {}) : void 0, title: title2, ...props, children: !hideText && (children ?? label) })
    }
  );
};
ShowButton.displayName = "ShowButton";
const meta$p = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$G({ request }) {
  const tableParams = parseTableParams(new URL(request.url).search);
  const data2 = await dataService.findMany(
    "dynamicPage",
    { ...buildTableParams(tableParams), orderBy: { updatedAt: "desc" } },
    { request }
  );
  return { initialData: data2 };
}
function DynamicPageIndex$1() {
  const { initialData } = useLoaderData();
  const { mutate: deleteMany } = useDeleteMany();
  const recordsRef = useRef(void 0);
  const useModalReturn = useModal();
  const friendly = useUserFriendlyName();
  const navigate = useNavigate();
  const { data: deletePermission } = useCan({ resource: EnumResource.dynamicPage, action: EnumAction.delete });
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
            resource: EnumResource.dynamicPage,
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
    TableEasy,
    {
      enableSorting: true,
      enableFilters: true,
      enableHiding: true,
      toolbar: [/* @__PURE__ */ jsx(CreateButton, {}, "create"), /* @__PURE__ */ jsx(ExportButton, {}, "export")],
      initialState: {
        columnVisibility: {
          createdAt: false
        },
        sorting: [
          {
            id: "updatedAt",
            desc: true
          }
        ]
      },
      refineCoreProps: {
        queryOptions: { initialData }
      },
      children: [
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            accessorKey: "id",
            id: "id",
            header: ({ table }) => /* @__PURE__ */ jsx(TableEasy.CheckAll, { table, options: [bulkDeleteAction(table)] }),
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
          TableEasy.Column,
          {
            header: "Path",
            accessorKey: "path",
            id: "path",
            meta: {
              filterOperator: "contains"
            },
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search Path" }),
            cell: ({ row: { index, original }, table }) => {
              const pageIndex = table.getState().pagination.pageIndex;
              const pageSize = table.getState().pagination.pageSize;
              return /* @__PURE__ */ jsxs(EditButton, { recordItemId: original.id, asChild: true, children: [
                /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground inline-block min-w-6", children: [
                  pageIndex * pageSize + index + 1,
                  ". "
                ] }),
                /* @__PURE__ */ jsx("span", { className: "py-3 underline-offset-2 visited:text-red-600 hover:text-green-600 hover:underline", children: original.path })
              ] });
            }
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "tableSql",
            accessorKey: "tableSql",
            id: "tableSql",
            enableHiding: true,
            enableSorting: true,
            cell: ({ row: { original } }) => /* @__PURE__ */ jsxs(Popover, { children: [
              /* @__PURE__ */ jsx(PopoverTrigger, { className: "text-link cursor-pointer", asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsx(EyeIcon, { className: "h-4 w-4" }) }) }),
              /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: original.tableSql }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "isActive",
            accessorKey: "isActive",
            id: "isActive",
            enableHiding: true,
            enableSorting: true,
            cell: ({ row: { original } }) => original.isActive ? /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "Active" }) : /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "Inactive" })
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Support Actions",
            accessorKey: "enableCreate",
            id: "enableCreate",
            enableHiding: true,
            cell: ({ row: { original } }) => /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1", children: [
              original.enableCreate && /* @__PURE__ */ jsx(Badge, { children: "Create" }),
              original.enableEdit && /* @__PURE__ */ jsx(Badge, { children: "Edit" }),
              original.enableDelete && /* @__PURE__ */ jsx(Badge, { children: "Delete" }),
              original.enableClone && /* @__PURE__ */ jsx(Badge, { children: "Clone" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "CreatedAt",
            accessorKey: "createdAt",
            id: "createdAt",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
            cell: ({ row: { original } }) => dayjs(original.createdAt).format("YYYY-MM-DD HH:mm:ss")
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "UpdatedAt",
            accessorKey: "updatedAt",
            id: "updatedAt",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
            cell: ({ row: { original } }) => dayjs(original.updatedAt).format("YYYY-MM-DD HH:mm:ss")
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Actions",
            accessorKey: "id",
            id: "actions",
            cell: ({ row: { original } }) => /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                ShowButton,
                {
                  resource: EnumResource.dynamicPage,
                  size: "icon",
                  variant: "ghost",
                  onClick: () => {
                    navigate(`${original.path}`);
                  }
                }
              ),
              /* @__PURE__ */ jsx(EditButton, { recordItemId: original.id, size: "icon", variant: "ghost" }),
              /* @__PURE__ */ jsx(CloneButton, { recordItemId: original.id, size: "icon", variant: "ghost" }),
              /* @__PURE__ */ jsx(
                DeleteButton,
                {
                  recordItemId: original.id,
                  size: "icon",
                  variant: "ghost",
                  className: "text-destructive!",
                  onClick: () => {
                    recordsRef.current = { id: original.id };
                    useModalReturn.show();
                  }
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
function ErrorBoundary$y() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$y,
  default: DynamicPageIndex$1,
  loader: loader$G,
  meta: meta$p
}, Symbol.toStringTag, { value: "Module" }));
const meta$o = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
function DynamicPageCreate() {
  return /* @__PURE__ */ jsx(DynamicPageForm, {});
}
function ErrorBoundary$x() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$x,
  default: DynamicPageCreate,
  meta: meta$o
}, Symbol.toStringTag, { value: "Module" }));
async function loader$F({ request }) {
  await requireUserSession(request);
  return null;
}
function Category() {
  return /* @__PURE__ */ jsx(CanAccess, { fallback: /* @__PURE__ */ jsx(PermissionDenied, {}), children: /* @__PURE__ */ jsx(SidebarLayout, {}) });
}
function ErrorBoundary$w() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$w,
  default: Category,
  loader: loader$F
}, Symbol.toStringTag, { value: "Module" }));
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 aria-invalid:outline-destructive/60 dark:aria-invalid:outline-destructive dark:aria-invalid:ring-destructive/40 aria-invalid:ring-destructive/20 aria-invalid:border-destructive/60 dark:aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-[3px] aria-invalid:focus-visible:outline-none md:text-sm dark:aria-invalid:focus-visible:ring-4",
        className
      ),
      ...props
    }
  );
}
const meta$n = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const handle$7 = {
  uiTools: () => {
    return /* @__PURE__ */ jsx(UiTools$7, {});
  }
};
async function loader$E({ params, request }) {
  const [initialData] = await Promise.all([
    dataService.findUniqueOrThrow("category", { where: { id: (params == null ? void 0 : params.id) || "" } }, { request })
  ]);
  return {
    initialData
  };
}
function CategoryEdit() {
  const { initialData } = useLoaderData();
  return /* @__PURE__ */ jsx(CategoryForm, { initialData });
}
function UiTools$7() {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 text-sm", children: /* @__PURE__ */ jsx(DeleteButton, { variant: "ghost", size: "icon", className: "text-destructive!" }) });
}
function ErrorBoundary$v() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const filterFormData$4 = (data2) => {
  return {
    title: (data2 == null ? void 0 : data2.title) || "",
    description: (data2 == null ? void 0 : data2.description) || ""
  };
};
const CategoryForm = ({
  className,
  redirect: redirect2 = EnumAction.list,
  initialData,
  action: action2
}) => {
  const { formAction, id = initialData == null ? void 0 : initialData.id, identifier } = useResourceParams({ action: action2 });
  const defaultValues = filterFormData$4(initialData);
  const form = useForm({
    resolver: zodResolver(schemaCategory),
    defaultValues,
    warnWhenUnsavedChanges: true,
    mode: "onChange",
    refineCoreProps: {
      resource: identifier,
      action: formAction,
      id,
      queryOptions: getRefineQueryOptions(defaultValues),
      redirect: redirect2
    }
  });
  const beforeSubmit = useCallback((val) => {
    const changedValues = getChangedValues(val, defaultValues);
    return dropEmptyKey(changedValues);
  }, []);
  return /* @__PURE__ */ jsxs(FormEasy, { ...form, beforeSubmit, className, recordItemId: initialData == null ? void 0 : initialData.id, children: [
    /* @__PURE__ */ jsx(Field, { ...form, name: "title", label: "Title", children: /* @__PURE__ */ jsx(Input, {}) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "description", label: "Description", children: /* @__PURE__ */ jsx(Textarea, { className: "min-h-60" }) })
  ] });
};
const route18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CategoryForm,
  ErrorBoundary: ErrorBoundary$v,
  default: CategoryEdit,
  handle: handle$7,
  loader: loader$E,
  meta: meta$n
}, Symbol.toStringTag, { value: "Module" }));
const meta$m = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$D({ request }) {
  const tableParams = parseTableParams(new URL(request.url).search);
  const args = {
    ...buildTableParams(tableParams),
    orderBy: { updatedAt: "desc" }
  };
  const data2 = await dataService.findMany("category", args, { request });
  return { initialData: data2 };
}
function CategoryIndex() {
  const { initialData } = useLoaderData();
  const friendly = useUserFriendlyName();
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: EnumResource.category, action: EnumAction.delete });
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
            resource: EnumResource.category,
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
    TableEasy,
    {
      enableSorting: true,
      enableFilters: true,
      enableHiding: true,
      toolbar: [/* @__PURE__ */ jsx(CreateButton, {}, "create"), /* @__PURE__ */ jsx(ExportButton, {}, "export")],
      initialState: {
        columnVisibility: {
          createdAt: false
        },
        sorting: [
          {
            id: "updatedAt",
            desc: true
          }
        ]
      },
      refineCoreProps: {
        queryOptions: { initialData }
      },
      children: [
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            accessorKey: "id",
            id: "id",
            header: ({ table }) => /* @__PURE__ */ jsx(TableEasy.CheckAll, { table, options: [bulkDeleteAction(table)] }),
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
          TableEasy.Column,
          {
            header: "Title",
            accessorKey: "title",
            id: "title",
            meta: {
              filterOperator: "contains"
            },
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search Title" }),
            cell: ({ row: { index, original }, table }) => {
              const pageIndex = table.getState().pagination.pageIndex;
              const pageSize = table.getState().pagination.pageSize;
              return /* @__PURE__ */ jsxs(EditButton, { recordItemId: original.id, asChild: true, children: [
                /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground inline-block min-w-6", children: [
                  pageIndex * pageSize + index + 1,
                  ". "
                ] }),
                /* @__PURE__ */ jsx("span", { className: "py-3 underline-offset-2 visited:text-red-600 hover:text-green-600 hover:underline", children: original.title })
              ] });
            }
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Description",
            accessorKey: "description",
            id: "description",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search Description" }),
            cell: ({ row: { original } }) => original.description || "..."
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "CreatedAt",
            accessorKey: "createdAt",
            id: "createdAt",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
            cell: ({ row: { original } }) => dayjs(original.createdAt).format("YYYY-MM-DD HH:mm:ss")
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "UpdatedAt",
            accessorKey: "updatedAt",
            id: "updatedAt",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
            cell: ({ row: { original } }) => dayjs(original.updatedAt).format("YYYY-MM-DD HH:mm:ss")
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Actions",
            accessorKey: "id",
            id: "actions",
            cell: ({ row: { original } }) => /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(EditButton, { recordItemId: original.id, size: "icon", variant: "ghost" }),
              /* @__PURE__ */ jsx(
                DeleteButton,
                {
                  disabled: original.title === EnumRole.administrator,
                  recordItemId: original.id,
                  size: "icon",
                  variant: "ghost",
                  className: "text-destructive!"
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
function ErrorBoundary$u() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$u,
  default: CategoryIndex,
  loader: loader$D,
  meta: meta$m
}, Symbol.toStringTag, { value: "Module" }));
const meta$l = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
function RoleCreate$1() {
  return /* @__PURE__ */ jsx(CategoryForm, {});
}
function ErrorBoundary$t() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$t,
  default: RoleCreate$1,
  meta: meta$l
}, Symbol.toStringTag, { value: "Module" }));
async function loader$C({ request }) {
  await requireUserSession(request);
  return null;
}
function AuditRecord() {
  return /* @__PURE__ */ jsx(CanAccess, { fallback: /* @__PURE__ */ jsx(PermissionDenied, {}), children: /* @__PURE__ */ jsx(SidebarLayout, {}) });
}
function ErrorBoundary$s() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$s,
  default: AuditRecord,
  loader: loader$C
}, Symbol.toStringTag, { value: "Module" }));
const SelectMulti = ({
  options = [],
  onChange,
  disabled,
  placeholder = "Select...",
  className,
  popoverProps,
  value = [],
  valueFormatInput,
  valueFormatOutput = (v) => v
}) => {
  const [open, setOpen] = useState(false);
  const formattedValueInput = valueFormatInput ? valueFormatInput(value) : value;
  return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, ...popoverProps, children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsxs(
      Button,
      {
        disabled,
        variant: "outline",
        role: "combobox",
        "aria-expanded": open,
        className: cn(
          "flex h-auto min-h-9 w-full justify-between px-3 py-1.5 hover:bg-transparent sm:w-[500px] md:w-[800px]",
          !formattedValueInput.length && "text-muted-foreground",
          className
        ),
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: formattedValueInput.length > 0 ? formattedValueInput.map((selected) => {
            var _a2;
            return /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: (_a2 = options.find((opt) => opt.value === selected.value)) == null ? void 0 : _a2.label }, selected.value);
          }) : /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: placeholder }) }),
          /* @__PURE__ */ jsx(CaretSortIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-full max-w-full p-0 sm:w-[400px]", children: /* @__PURE__ */ jsxs(Command, { children: [
      /* @__PURE__ */ jsx(CommandInput, { placeholder: "Type a command or search..." }),
      /* @__PURE__ */ jsx(CommandEmpty, { children: "No results found." }),
      /* @__PURE__ */ jsx(CommandGroup, { children: options.map((option) => {
        const isSelected = formattedValueInput.find((v) => v.value === option.value);
        return /* @__PURE__ */ jsxs(
          CommandItem,
          {
            value: option.label || "",
            onSelect: () => {
              const newValue = isSelected ? formattedValueInput.filter((v) => v.value !== option.value) : [...formattedValueInput, option];
              onChange == null ? void 0 : onChange(valueFormatOutput(newValue));
            },
            children: [
              /* @__PURE__ */ jsx(Check, { className: cn("h-4 w-4", isSelected ? "opacity-100" : "opacity-0") }),
              option.label
            ]
          },
          option.value
        );
      }) })
    ] }) })
  ] });
};
var EnumAuditChannel = /* @__PURE__ */ ((EnumAuditChannel2) => {
  EnumAuditChannel2["TIAN_YUAN"] = "TIAN_YUAN";
  EnumAuditChannel2["SELF"] = "SELF";
  return EnumAuditChannel2;
})(EnumAuditChannel || {});
const AUDIT_CHANNEL_LIST = Object.values(EnumAuditChannel);
const resourcesList = RESOURCES_LIST.filter((resource) => resource !== EnumResource.userRole).sort();
const title = "role:apply";
const meta$k = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$B({ request }) {
  const user = await getUser(request);
  const [{ data: roleList }, { data: casbinRuleList }, auditRecord] = await Promise.all([
    dataService.findMany("role", { select: { title: true, id: true } }, { request }),
    dataService.findMany("casbinRule", { select: { v0: true, v1: true, v2: true, v3: true } }, { request }),
    dataService.findFirst(
      "auditRecord",
      {
        where: {
          title,
          operatedById: user == null ? void 0 : user.id
        }
      },
      { request }
    )
  ]);
  const newRoleList = roleList.sort((a, b) => rolePriority[a.title] - rolePriority[b.title]).map((item) => ({
    label: item.title,
    value: item.id
  }));
  const currentRoles = [];
  newRoleList.forEach((role) => {
    var _a2;
    if ((_a2 = user == null ? void 0 : user.roles) == null ? void 0 : _a2.includes(role.label)) {
      currentRoles.push(role);
    }
  });
  return {
    currentRoles,
    roleList: newRoleList,
    casbinRuleList,
    auditRecord
  };
}
function UserEdit$1() {
  const { roleList, casbinRuleList, currentRoles, auditRecord } = useLoaderData();
  return /* @__PURE__ */ jsx(
    RoleApplyForm,
    {
      roleList,
      casbinRuleList,
      currentRoles,
      auditRecord
    }
  );
}
function ErrorBoundary$r() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const schemaRoleApply = z.object({
  roles: z.array(z.object({ label: z.string(), value: z.string() }))
});
function processRolePermissions(casbinRules, selectedRoles) {
  const result = {};
  resourcesList.forEach((resource) => {
    result[resource] = {
      resource,
      actions: [],
      hasAllActions: false,
      hasSomeActions: false
    };
  });
  if (!selectedRoles || selectedRoles.length === 0) {
    return result;
  }
  const roleNames = selectedRoles.map((role) => role.label);
  casbinRules.forEach((rule) => {
    if (roleNames.includes(rule.v0)) {
      if (rule.v1 === "*") {
        const actions = rule.v2.split("|");
        resourcesList.forEach((resource) => {
          const currentActions = /* @__PURE__ */ new Set([...result[resource].actions, ...actions]);
          result[resource].actions = Array.from(currentActions);
          result[resource].hasSomeActions = result[resource].actions.length > 0;
          result[resource].hasAllActions = result[resource].actions.length === ACTIONS_LIST.length;
        });
      } else {
        const [mainResource] = rule.v1.split("/");
        if (resourcesList.includes(mainResource)) {
          if (rule.v3 === "deny") return;
          const actions = rule.v2.split("|");
          const currentActions = /* @__PURE__ */ new Set([...result[mainResource].actions, ...actions]);
          result[mainResource].actions = Array.from(currentActions);
          result[mainResource].hasSomeActions = result[mainResource].actions.length > 0;
          result[mainResource].hasAllActions = result[mainResource].actions.length === ACTIONS_LIST.length;
        }
      }
    }
  });
  return result;
}
const RoleApplyForm = ({
  roleList,
  casbinRuleList,
  auditRecord,
  currentRoles
}) => {
  const { id } = auditRecord || {};
  const [selectedRoles, setSelectedRoles] = useState(currentRoles);
  const form = useForm({
    resolver: zodResolver(schemaRoleApply),
    defaultValues: {
      roles: currentRoles
    },
    warnWhenUnsavedChanges: true,
    mode: "onChange",
    refineCoreProps: {
      id,
      resource: EnumResource.auditRecord,
      action: id ? EnumAction.edit : EnumAction.create
    }
  });
  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value.roles) {
        setSelectedRoles(value.roles);
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);
  const resourcePermissions = useMemo(() => {
    return processRolePermissions(casbinRuleList, selectedRoles);
  }, [casbinRuleList, selectedRoles]);
  const beforeSubmit = async (values) => {
    const { roles } = values;
    return {
      meta: { parent: "account" },
      title,
      dataPrevious: currentRoles,
      resource: EnumResource.role,
      data: roles,
      status: EnumAuditStatus.PENDING,
      action: EnumLogType.update,
      channel: EnumAuditChannel.SELF,
      error: null
    };
  };
  return /* @__PURE__ */ jsxs(FormEasy, { ...form, beforeSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxs(H2, { className: "mb-8", children: [
      /* @__PURE__ */ jsx("span", { children: "权限变更申请" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm font-normal", children: "选择角色，分配资源与相关操作的权限" })
    ] }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "roles", label: "Roles", children: /* @__PURE__ */ jsx(SelectMulti, { options: roleList }) }),
    /* @__PURE__ */ jsx(Label, { children: "当前所选角色拥有的资源、操作权限" }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 space-y-4 space-x-4", children: resourcesList.map((resource) => {
      const permission = resourcePermissions[resource];
      const { hasAllActions, hasSomeActions, actions } = permission;
      const newActions = actions.sort().reverse();
      const isChecked = hasAllActions || hasSomeActions;
      const isIndeterminate = hasSomeActions && !hasAllActions;
      return /* @__PURE__ */ jsx(Card, { className: "inline-block min-w-[300px]", children: /* @__PURE__ */ jsxs(CardContent, { className: "space-y-2 divide-y divide-dashed pb-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 pt-3 pb-2", children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              "data-state": isIndeterminate ? "indeterminate" : isChecked ? "checked" : "unchecked",
              className: "pointer-events-none",
              checked: isChecked
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "capitalize", children: [
            resource,
            " - ",
            t(`menus.${resource}`)
          ] })
        ] }),
        hasAllActions && /* @__PURE__ */ jsx(Badge, { className: "bg-green-500", children: "All" }),
        !hasSomeActions && /* @__PURE__ */ jsx(Badge, { className: "bg-destructive", children: "Null" }),
        !hasAllActions && hasSomeActions && /* @__PURE__ */ jsx("div", { className: "mt-3 flex items-center gap-2", children: newActions.map((action2) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "border-green-500", children: ACTIONS_MAP[action2].name }, action2)) })
      ] }) }, resource);
    }) })
  ] });
};
const route22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$r,
  default: UserEdit$1,
  loader: loader$B,
  meta: meta$k
}, Symbol.toStringTag, { value: "Module" }));
async function loader$A({ request }) {
  await requireUserSession(request);
  return null;
}
function Post() {
  return /* @__PURE__ */ jsx(CanAccess, { fallback: /* @__PURE__ */ jsx(PermissionDenied, {}), children: /* @__PURE__ */ jsx(SidebarLayout, {}) });
}
function ErrorBoundary$q() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$q,
  default: Post,
  loader: loader$A
}, Symbol.toStringTag, { value: "Module" }));
const SelectEasy = ({ ...props }) => {
  var _a2, _b, _c;
  const triggerRef = React__default.useRef(null);
  return /* @__PURE__ */ jsxs(
    Select,
    {
      disabled: props.disabled || ((_a2 = props.options) == null ? void 0 : _a2.length) === 0,
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
            children: (_c = props.options) == null ? void 0 : _c.map((option, key) => /* @__PURE__ */ jsx(SelectItem, { value: option.value, children: option.label }, key))
          }
        )
      ]
    }
  );
};
SelectEasy.displayName = "SelectEasy";
const meta$j = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const handle$6 = {
  uiTools: () => {
    return /* @__PURE__ */ jsx(UiTools$6, {});
  }
};
async function loader$z({ params, request }) {
  const [initialData] = await Promise.all([
    dataService.findUniqueOrThrow("post", { where: { id: (params == null ? void 0 : params.id) || "" } }, { request })
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
    /* @__PURE__ */ jsx(CloneButton, { variant: "ghost", size: "icon" }),
    /* @__PURE__ */ jsx(DeleteButton, { variant: "ghost", size: "icon", className: "text-destructive!" })
  ] });
}
function ErrorBoundary$p() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const filterFormData$3 = (data2) => {
  return {
    title: (data2 == null ? void 0 : data2.title) || "",
    content: (data2 == null ? void 0 : data2.content) || "",
    status: (data2 == null ? void 0 : data2.status) || EnumPostStatus.DRAFT,
    categoryId: (data2 == null ? void 0 : data2.categoryId) || ""
  };
};
const PostForm = ({
  className,
  redirect: redirect2 = EnumAction.list,
  initialData,
  formModalClose,
  action: action2
}) => {
  const { formAction, id = initialData == null ? void 0 : initialData.id, identifier } = useResourceParams({ action: action2 });
  const categoryOptions = useSelect({
    resource: EnumResource.category,
    pagination: { mode: "off" }
  }).options;
  const enableAutoSave = formAction === EnumAction.edit;
  const defaultValues = filterFormData$3(initialData);
  const form = useForm({
    resolver: zodResolver(schemaPost),
    defaultValues,
    warnWhenUnsavedChanges: true,
    mode: "onChange",
    refineCoreProps: {
      resource: identifier,
      action: formAction,
      id,
      queryOptions: getRefineQueryOptions(defaultValues),
      redirect: redirect2,
      autoSave: {
        enabled: enableAutoSave,
        debounce: 2e3,
        invalidateOnUnmount: true,
        onFinish: (values) => {
          try {
            schemaPost.parse(values);
            if (isEqual(values, form.formState.defaultValues)) {
              throw new Error("表单内容未变化");
            }
            return beforeSubmit(values);
          } catch (error) {
            return null;
          }
        }
      }
    }
  });
  const beforeSubmit = useCallback((val) => {
    const changedValues = getChangedValues(val, defaultValues);
    return dropEmptyKey(changedValues);
  }, []);
  return /* @__PURE__ */ jsxs(
    FormEasy,
    {
      ...form,
      autoSave: enableAutoSave,
      beforeSubmit,
      className,
      formModalClose,
      recordItemId: initialData == null ? void 0 : initialData.id,
      children: [
        /* @__PURE__ */ jsx(Field, { ...form, name: "title", label: "Title", children: /* @__PURE__ */ jsx(Input, { placeholder: "Title" }) }),
        /* @__PURE__ */ jsx(Field, { ...form, name: "categoryId", label: "Category", children: /* @__PURE__ */ jsx(Combobox, { options: categoryOptions, popoverProps: { modal: Boolean(formModalClose) } }) }),
        /* @__PURE__ */ jsx(Field, { ...form, name: "status", label: "Status", children: /* @__PURE__ */ jsx(SelectEasy, { options: POST_STATUS_LIST.map((status) => ({ label: status, value: status })) }) }),
        /* @__PURE__ */ jsx(Field, { ...form, name: "content", label: "Content", children: /* @__PURE__ */ jsx(Textarea, { placeholder: "Content", className: "min-h-60" }) })
      ]
    }
  );
};
function PostFormModal(props) {
  const { visible, close, record, action: action2 } = props;
  return /* @__PURE__ */ jsx(Dialog, { open: visible, onOpenChange: close, children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-6xl", children: [
    /* @__PURE__ */ jsxs(DialogHeader, { className: "border-b pb-4", children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: "Edit Post" }),
      /* @__PURE__ */ jsx(DialogDescription, { children: "This is a Demo for Edit Form on Modal." })
    ] }),
    /* @__PURE__ */ jsx(PostForm, { action: action2, className: "p-0", formModalClose: close, initialData: record })
  ] }) });
}
const route26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$p,
  PostForm,
  PostFormModal,
  default: PostEdit,
  handle: handle$6,
  loader: loader$z,
  meta: meta$j
}, Symbol.toStringTag, { value: "Module" }));
const meta$i = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$y({ params, request }) {
  const [initialData] = await Promise.all([
    dataService.findUniqueOrThrow("post", { where: { id: (params == null ? void 0 : params.id) || "" } }, { request })
  ]);
  return { initialData };
}
function PostClone() {
  const { initialData } = useLoaderData();
  return /* @__PURE__ */ jsx(PostForm, { initialData });
}
function ErrorBoundary$o() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$o,
  default: PostClone,
  loader: loader$y,
  meta: meta$i
}, Symbol.toStringTag, { value: "Module" }));
const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:text-destructive-foreground/80 dark:border-destructive [&>svg]:text-current dark:bg-destructive/50"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Alert({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "alert", role: "alert", className: cn(alertVariants({ variant }), className), ...props });
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert-title",
      className: cn("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className),
      ...props
    }
  );
}
function AlertDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert-description",
      className: cn("col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className),
      ...props
    }
  );
}
async function updateAuditRecordStatus(id, status, error) {
  await db.auditRecord.update({
    where: { id },
    data: {
      status,
      ...error ? { error } : {}
    }
  });
}
function executorWrapper(fn) {
  return async (record) => {
    try {
      const result = await fn(record);
      await updateAuditRecordStatus(record.id, AuditStatus.RESOLVED);
      return result;
    } catch (error) {
      await updateAuditRecordStatus(record.id, AuditStatus.FAILED, error instanceof Error ? error.message : "未知错误");
      return false;
    }
  };
}
const executorRoleUpdate = executorWrapper(async (record) => {
  const { operatedById, data: data2 } = record;
  const roles = data2;
  if (!roles || !Array.isArray(roles)) {
    throw new Error("无效的角色数据");
  }
  await updateUserRoles({ roleIds: roles.map((r) => r.value), userId: operatedById });
  return true;
});
const genericModelExecutor = executorWrapper(async (record) => {
  const { resource, action: action2, data: data2, meta: meta2 } = record;
  if (!isPrismaModel(resource)) {
    throw new Error(`invalid resource type: ${resource}`);
  }
  const prismaModel = db[resource];
  switch (action2) {
    case LogAction.create: {
      await prismaModel.create({
        data: {
          ...data2,
          operatedById: record.operatedById
        }
      });
      break;
    }
    case LogAction.update: {
      const updateId = meta2 == null ? void 0 : meta2.id;
      if (!updateId) {
        throw new Error("更新操作缺少目标ID");
      }
      await prismaModel.update({
        where: { id: updateId },
        data: data2
      });
      break;
    }
    case LogAction.delete: {
      const deleteId = meta2 == null ? void 0 : meta2.id;
      if (!deleteId) {
        throw new Error("删除操作缺少目标ID");
      }
      await prismaModel.delete({
        where: { id: deleteId }
      });
      break;
    }
    default:
      throw new Error(`不支持的操作类型: ${action2}`);
  }
  return true;
});
const executorMap = {
  role: {
    [LogAction.update]: executorRoleUpdate
  }
};
async function executeAudit(record) {
  var _a2;
  const { resource, action: action2 } = record;
  const specificExecutor = (_a2 = executorMap[resource]) == null ? void 0 : _a2[action2];
  if (specificExecutor) {
    return specificExecutor(record);
  }
  return await genericModelExecutor(record);
}
const AuditProcessor = {
  /**
   * 审核通过
   * @param id 审核记录ID
   * @returns 处理结果
   */
  async approve(id) {
    try {
      const record = await db.auditRecord.findUnique({
        where: { id }
      });
      if (!record) {
        return {
          success: false,
          message: "未找到审核记录"
        };
      }
      if (record.status !== AuditStatus.PENDING) {
        return {
          success: false,
          message: `审核记录状态不是待处理状态，当前状态: ${record.status}`,
          record
        };
      }
      const success = await executeAudit(record);
      const updatedRecord = await db.auditRecord.findUnique({
        where: { id }
      });
      if (!success) {
        return {
          success: false,
          message: `审核事务执行失败: ${(updatedRecord == null ? void 0 : updatedRecord.error) || "未知错误"}`,
          record: updatedRecord || record
        };
      }
      return {
        success: true,
        message: "审核通过并成功执行事务",
        record: updatedRecord || record
      };
    } catch (error) {
      await db.auditRecord.update({
        where: { id },
        data: {
          status: AuditStatus.FAILED,
          error: error instanceof Error ? error.message : "未知错误"
        }
      });
      return {
        success: false,
        message: `处理审核时发生错误: ${error instanceof Error ? error.message : "未知错误"}`
      };
    }
  },
  /**
   * 审核拒绝
   * @param id 审核记录ID
   * @param reason 拒绝原因
   * @returns 处理结果
   */
  async reject(id, reason) {
    try {
      const record = await db.auditRecord.findUnique({
        where: { id }
      });
      if (!record) {
        return {
          success: false,
          message: "未找到审核记录"
        };
      }
      if (record.status !== AuditStatus.PENDING) {
        return {
          success: false,
          message: `审核记录状态不是待处理状态，当前状态: ${record.status}`,
          record
        };
      }
      const updatedRecord = await db.auditRecord.update({
        where: { id },
        data: {
          status: AuditStatus.REJECTED,
          error: reason || "审核被拒绝"
        }
      });
      return {
        success: true,
        message: "审核已拒绝",
        record: updatedRecord
      };
    } catch (error) {
      return {
        success: false,
        message: `处理审核时发生错误: ${error instanceof Error ? error.message : "未知错误"}`
      };
    }
  }
};
async function loader$x({ params, request }) {
  const { id } = params;
  const user = await getUser(request);
  const args = {
    where: {
      id
    },
    include: {
      operatedBy: {
        select: { name: true, email: true, avatar: true }
      }
    }
  };
  const record = await dataService.findUniqueOrThrow("auditRecord", args, { request });
  const isAdmin = (user == null ? void 0 : user.role) === EnumRole.administrator;
  return { record, isAdmin };
}
async function action$f({ request }) {
  const user = await getUser(request);
  if ((user == null ? void 0 : user.role) !== EnumRole.administrator) {
    return Response.json({ success: false, message: "无权限执行此操作" }, { status: 403 });
  }
  const formData = await request.formData();
  const id = formData.get("id");
  const action2 = formData.get("action");
  const reason = formData.get("reason");
  if (!id) {
    return Response.json({ success: false, message: "缺少审核记录ID" }, { status: 400 });
  }
  if (!action2 || !["approve", "reject"].includes(action2)) {
    return Response.json({ success: false, message: "无效的操作类型" }, { status: 400 });
  }
  if (action2 === "approve") {
    const result2 = await AuditProcessor.approve(id);
    return Response.json(result2);
  }
  if (!reason) {
    return Response.json({ success: false, message: "拒绝时必须提供原因" }, { status: 400 });
  }
  const result = await AuditProcessor.reject(id, reason);
  return Response.json(result);
}
function AuditRecordShow() {
  var _a2, _b, _c, _d, _e, _f, _g;
  const { record, isAdmin } = useLoaderData();
  const { status, channel } = record;
  const actionData = useActionData();
  const navigation = useNavigation$1();
  const submit = useSubmit();
  const { content: data2 } = deepParse(record.data || "{}");
  const { content: dataPrevious } = deepParse(record.dataPrevious || "{}");
  const meta2 = record.meta || {};
  const [reason, setReason] = useState("");
  const [showReasonInput, setShowReasonInput] = useState(false);
  const canAudit = isAdmin && status === EnumAuditStatus.PENDING && channel === EnumAuditChannel.SELF;
  const isSubmitting = navigation.state === "submitting";
  const showAudit = (status === EnumAuditStatus.PENDING || status === EnumAuditStatus.FAILED) && !showReasonInput;
  const showEditor = ![EnumLogType.delete, EnumLogType.deleteMany].includes(record.action);
  const openDiff = [EnumLogType.update, EnumLogType.updateMany].includes(record.action);
  useEffect(() => {
    if (!actionData) {
      return;
    }
    if (actionData.success) {
      toast.success(actionData.message);
    } else {
      toast.error(actionData.message);
    }
  }, [actionData]);
  const handleApprove = () => {
    const formData = new FormData();
    formData.append("id", record.id);
    formData.append("action", "approve");
    submit(formData, { method: "post" });
  };
  const handleReject = () => {
    if (!reason.trim()) {
      toast.error("操作有误", { description: "拒绝时必须提供原因" });
      return;
    }
    const formData = new FormData();
    formData.append("id", record.id);
    formData.append("action", "reject");
    formData.append("reason", reason);
    submit(formData, { method: "post" });
  };
  const disabled = !canAudit || isSubmitting;
  const domAudit = /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ jsx(Button, { variant: "destructive", onClick: () => setShowReasonInput(true), disabled, icon: /* @__PURE__ */ jsx(Ban, {}), children: "拒绝" }),
    /* @__PURE__ */ jsx(Button, { variant: "default", onClick: handleApprove, disabled, icon: /* @__PURE__ */ jsx(CheckCheck, {}), children: "通过" })
  ] }) });
  return /* @__PURE__ */ jsxs("article", { className: "px-8 pt-8 pb-4", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
      /* @__PURE__ */ jsxs(H1, { className: "relative mb-4 inline-flex gap-3 text-4xl font-bold", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "Audit Record - ",
          record.title
        ] }),
        /* @__PURE__ */ jsx("div", { className: "inline-flex shrink-0 items-start pt-3.5", children: /* @__PURE__ */ jsx(Badge, { className: "tracking-wide", variant: (_a2 = AUDIT_STATUS_MAP[status]) == null ? void 0 : _a2.badge, children: status }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground mb-8 flex flex-wrap items-center gap-4 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(Lightbulb, { className: "mr-2 h-4 w-4" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "ActionType: ",
            record.action
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(LeafyGreen, { className: "mr-2 h-4 w-4" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Resource: ",
            meta2.parent,
            ".",
            record.resource
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 h-4 w-4" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Created: ",
            new Date(record.createdAt).toLocaleDateString()
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center gap-3", children: [
          /* @__PURE__ */ jsxs(Avatar, { children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: (_b = record.operatedBy) == null ? void 0 : _b.avatar, alt: ((_c = record.operatedBy) == null ? void 0 : _c.name) || "" }),
            /* @__PURE__ */ jsx(AvatarFallback, { children: (_e = (_d = record.operatedBy) == null ? void 0 : _d.name) == null ? void 0 : _e.slice(0, 2).toUpperCase() })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: (_f = record.operatedBy) == null ? void 0 : _f.name }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: (_g = record.operatedBy) == null ? void 0 : _g.email })
          ] })
        ] }),
        showAudit && (disabled ? /* @__PURE__ */ jsxs(Tooltip, { children: [
          /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: domAudit }),
          /* @__PURE__ */ jsxs(TooltipContent, { side: "left", className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Info, { className: "h-4 w-4" }),
            channel === EnumAuditChannel.TIAN_YUAN ? "请通知测试人员在天元审核" : "请通知管理员进行审核"
          ] })
        ] }) : domAudit)
      ] }),
      showReasonInput && /* @__PURE__ */ jsxs("div", { className: "mt-5 flex w-full flex-col gap-2", children: [
        /* @__PURE__ */ jsx(
          Textarea,
          {
            className: "min-h-20",
            placeholder: "请输入拒绝原因...",
            value: reason,
            onChange: (e) => setReason(e.target.value)
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => setShowReasonInput(false), disabled: isSubmitting, children: "取消" }),
          /* @__PURE__ */ jsx(Button, { variant: "destructive", onClick: handleReject, disabled: isSubmitting, children: "确认拒绝" })
        ] })
      ] })
    ] }),
    record.error && /* @__PURE__ */ jsxs(Alert, { variant: "destructive", className: "mb-6", children: [
      /* @__PURE__ */ jsx(AlertCircle, { className: "size-4" }),
      /* @__PURE__ */ jsx(AlertTitle, { children: "Error: 审核失败" }),
      /* @__PURE__ */ jsx(AlertDescription, { children: record.error || "unknown" })
    ] }),
    (record.dataPrevious || record.data) && showEditor && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx(Label, { children: openDiff ? "Previous Resource Data & New Resource Data" : "Resource Data" }),
      /* @__PURE__ */ jsx(
        CodeEditor,
        {
          language: "json",
          value: JSON.stringify(dataPrevious, null, 2),
          modified: JSON.stringify(data2, null, 2),
          enableToggleDiff: false,
          openDiff
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: record.meta && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: "Meta Data" }),
      /* @__PURE__ */ jsx("pre", { className: "bg-muted mt-1 overflow-x-auto rounded-lg p-4 text-sm whitespace-pre", children: JSON.stringify(meta2, null, 2) })
    ] }) })
  ] });
}
function ErrorBoundary$n() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$n,
  action: action$f,
  default: AuditRecordShow,
  loader: loader$x
}, Symbol.toStringTag, { value: "Module" }));
const meta$h = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const handle$5 = {
  uiTools: () => {
    return /* @__PURE__ */ jsx(UiTools$5, {});
  }
};
async function loader$w({ params, request }) {
  const args = {
    where: { id: (params == null ? void 0 : params.id) || "" },
    include: {
      operatedBy: true,
      category: true
    }
  };
  const [initialData] = await Promise.all([
    dataService.findUniqueOrThrow("post", args, { request })
  ]);
  return { initialData };
}
function PostShow() {
  var _a2, _b, _c, _d, _e, _f, _g, _h;
  const { initialData: data2 } = useLoaderData();
  return /* @__PURE__ */ jsxs("article", { className: "px-8 pt-8 pb-4", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
      /* @__PURE__ */ jsxs(H1, { className: "relative mb-4 inline-flex gap-3 text-4xl font-bold", children: [
        /* @__PURE__ */ jsx("span", { children: data2.title }),
        /* @__PURE__ */ jsx("div", { className: "inline-flex shrink-0 items-start pt-3.5", children: /* @__PURE__ */ jsx(Badge, { className: "tracking-wide", variant: (_a2 = POST_STATUS_MAP[data2.status]) == null ? void 0 : _a2.badge, children: data2.status }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground mb-8 flex flex-wrap items-center gap-4 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(LeafyGreen, { className: "mr-2 h-4 w-4" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Category: ",
            (_b = data2.category) == null ? void 0 : _b.title
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
          /* @__PURE__ */ jsx(AvatarImage, { src: ((_c = data2.operatedBy) == null ? void 0 : _c.avatar) || "?", alt: ((_d = data2.operatedBy) == null ? void 0 : _d.name) || "" }),
          /* @__PURE__ */ jsx(AvatarFallback, { children: (_f = (_e = data2.operatedBy) == null ? void 0 : _e.name) == null ? void 0 : _f.slice(0, 2).toUpperCase() })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium", children: (_g = data2.operatedBy) == null ? void 0 : _g.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground flex items-center text-sm", children: [
            /* @__PURE__ */ jsx(MailIcon, { className: "mr-2 h-4 w-4" }),
            (_h = data2.operatedBy) == null ? void 0 : _h.email
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
    /* @__PURE__ */ jsx(CloneButton, { variant: "ghost", size: "icon" }),
    /* @__PURE__ */ jsx(DeleteButton, { variant: "ghost", size: "icon", className: "text-destructive!" })
  ] });
}
function ErrorBoundary$m() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$m,
  default: PostShow,
  handle: handle$5,
  loader: loader$w,
  meta: meta$h
}, Symbol.toStringTag, { value: "Module" }));
async function loader$v({ request }) {
  await requireUserSession(request);
  return null;
}
function CasbinRule() {
  return /* @__PURE__ */ jsx(CanAccess, { fallback: /* @__PURE__ */ jsx(PermissionDenied, {}), children: /* @__PURE__ */ jsx(SidebarLayout, {}) });
}
function ErrorBoundary$l() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$l,
  default: CasbinRule,
  loader: loader$v
}, Symbol.toStringTag, { value: "Module" }));
const meta$g = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const handle$4 = {
  uiTools: (match) => {
    return /* @__PURE__ */ jsx(UiTools$4, { match });
  }
};
async function loader$u({ params, request }) {
  const [initialData] = await Promise.all([
    dataService.findUniqueOrThrow(
      "casbinRule",
      {
        where: {
          id: params.id
        }
      },
      { request }
    )
  ]);
  return { initialData };
}
function CasbinRuleEdit() {
  const { initialData } = useLoaderData();
  return /* @__PURE__ */ jsx(CasbinRuleForm, { initialData });
}
function UiTools$4({ match }) {
  const { data: data2 } = match || {};
  const { initialData: permission } = data2 || {};
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 text-sm", children: /* @__PURE__ */ jsx(
    DeleteButton,
    {
      disabled: (permission == null ? void 0 : permission.v0) === EnumRole.administrator,
      variant: "ghost",
      size: "icon",
      className: "text-destructive!"
    }
  ) });
}
function ErrorBoundary$k() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const filterFormData$2 = (data2) => {
  return {
    ptype: (data2 == null ? void 0 : data2.ptype) || "p",
    v0: (data2 == null ? void 0 : data2.v0) || "",
    v1: (data2 == null ? void 0 : data2.v1) || "",
    v2: (data2 == null ? void 0 : data2.v2) || "",
    v3: (data2 == null ? void 0 : data2.v3) || ""
  };
};
const CasbinRuleForm = ({
  className,
  redirect: redirect2 = EnumAction.list,
  initialData,
  action: action2
}) => {
  const { formAction, id = initialData == null ? void 0 : initialData.id, identifier } = useResourceParams({ action: action2 });
  const roleOptions = useSelect({
    resource: EnumResource.role,
    pagination: { mode: "off" }
  }).options.map((item) => ({
    label: item.label,
    value: item.label
  }));
  const defaultValues = filterFormData$2(initialData);
  const form = useForm({
    resolver: zodResolver(schemaCasbinRule),
    defaultValues,
    warnWhenUnsavedChanges: true,
    mode: "onChange",
    refineCoreProps: {
      resource: identifier,
      action: formAction,
      id,
      queryOptions: getRefineQueryOptions(defaultValues),
      redirect: redirect2
    }
  });
  const beforeSubmit = useCallback((val) => {
    const changedValues = getChangedValues(val, defaultValues);
    return dropEmptyKey(changedValues);
  }, []);
  return /* @__PURE__ */ jsxs(FormEasy, { ...form, beforeSubmit, className, recordItemId: initialData == null ? void 0 : initialData.id, children: [
    /* @__PURE__ */ jsx(Field, { ...form, name: "ptype", label: "Policy Type", children: /* @__PURE__ */ jsx(
      SelectEasy,
      {
        options: [
          { label: "policy", value: "p" },
          { label: "role", value: "g" }
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "v0", label: "Subject、Role", children: /* @__PURE__ */ jsx(Combobox, { options: roleOptions }) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "v1", label: "Object、User", children: /* @__PURE__ */ jsx(Input, { placeholder: "*、post、post/*" }) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "v2", label: "Action", children: /* @__PURE__ */ jsx(
      SelectMulti,
      {
        options: ACTIONS_LIST.map((key) => ({ label: key, value: key })),
        valueFormatInput: (value) => {
          if (Array.isArray(value)) {
            return value;
          }
          return value.split("|").filter((action22) => action22).map((action22) => ({ label: action22, value: action22 }));
        },
        valueFormatOutput: (value) => {
          if (typeof value === "string") {
            return value;
          }
          return value.map((item) => item.value).join("|");
        }
      }
    ) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "v3", label: "Effect", children: /* @__PURE__ */ jsx(
      SelectEasy,
      {
        options: [
          { label: "allow", value: "allow" },
          { label: "deny", value: "deny" }
        ]
      }
    ) })
  ] });
};
const route29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CasbinRuleForm,
  ErrorBoundary: ErrorBoundary$k,
  default: CasbinRuleEdit,
  handle: handle$4,
  loader: loader$u,
  meta: meta$g
}, Symbol.toStringTag, { value: "Module" }));
const meta$f = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$t({ request }) {
  const user = await getUser(request);
  const tableParams = parseTableParams(new URL(request.url).search);
  const include = {
    operatedBy: { select: { name: true, avatar: true } }
  };
  const args = {
    ...buildTableParams(tableParams),
    orderBy: { updatedAt: "desc" },
    include
    // where: {
    //   operatedById: user?.role === EnumRole.administrator ? undefined : user?.id,
    // },
  };
  const data2 = await dataService.findMany("auditRecord", args, { request });
  return { initialData: data2, user, include };
}
function AuditRecordIndex() {
  const { initialData, include } = useLoaderData();
  const friendly = useUserFriendlyName();
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: EnumResource.auditRecord, action: EnumAction.delete });
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
            resource: EnumResource.auditRecord,
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
    TableEasy,
    {
      enableSorting: true,
      enableFilters: true,
      enableHiding: true,
      toolbar: [/* @__PURE__ */ jsx(ExportButton, {}, "export")],
      initialState: {
        columnVisibility: {
          action: false
        },
        sorting: [
          {
            id: "updatedAt",
            desc: true
          }
        ]
      },
      refineCoreProps: {
        queryOptions: { initialData },
        // filters: isAdmin ? undefined : { initial: [{ field: 'operatedById', operator: 'eq', value: user?.id }] },
        meta: {
          include
        }
      },
      children: [
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            accessorKey: "id",
            id: "id",
            header: ({ table }) => /* @__PURE__ */ jsx(TableEasy.CheckAll, { table, options: [bulkDeleteAction(table)] }),
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
          TableEasy.Column,
          {
            header: "Title",
            accessorKey: "title",
            id: "title",
            meta: {
              filterOperator: "contains"
            },
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search Title" }),
            cell: ({ row: { index, original }, table }) => {
              const pageIndex = table.getState().pagination.pageIndex;
              const pageSize = table.getState().pagination.pageSize;
              return /* @__PURE__ */ jsxs(ShowButton, { recordItemId: original.id, asChild: true, children: [
                /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground inline-block min-w-6", children: [
                  pageIndex * pageSize + index + 1,
                  ". "
                ] }),
                /* @__PURE__ */ jsx("span", { className: "py-3 underline-offset-2 hover:text-green-600 hover:underline", children: original.title })
              ] });
            }
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Status",
            accessorKey: "status",
            id: "status",
            enableSorting: true,
            enableHiding: true,
            cell: ({ row: { original } }) => {
              var _a2;
              return /* @__PURE__ */ jsx(Badge, { variant: (_a2 = AUDIT_STATUS_MAP[original.status]) == null ? void 0 : _a2.badge, children: original.status });
            },
            filter: (props) => /* @__PURE__ */ jsx(
              TableEasy.Filter.Dropdown,
              {
                ...props,
                options: AUDIT_STATUS_LIST.map((key) => ({
                  label: key,
                  value: key
                }))
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Error",
            accessorKey: "error",
            id: "error",
            cell: ({ row: { original } }) => /* @__PURE__ */ jsx("span", { className: "text-destructive", children: original.error || "-" })
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Type",
            accessorKey: "action",
            id: "action",
            enableSorting: true,
            enableHiding: true,
            cell: ({ row: { original } }) => {
              var _a2;
              const ids = (_a2 = original.meta) == null ? void 0 : _a2.ids;
              return /* @__PURE__ */ jsxs(Fragment, { children: [
                original.action,
                (ids == null ? void 0 : ids.length) > 1 ? ` x${ids.length}` : ""
              ] });
            },
            filter: (props) => /* @__PURE__ */ jsx(
              TableEasy.Filter.Radio,
              {
                ...props,
                options: LOG_STATUS_LIST.map((key) => ({
                  label: key,
                  value: key
                }))
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Channel",
            accessorKey: "channel",
            id: "channel",
            enableSorting: true,
            enableHiding: true,
            cell: ({ row: { original } }) => original.channel || "-",
            filter: (props) => /* @__PURE__ */ jsx(
              TableEasy.Filter.Radio,
              {
                ...props,
                options: AUDIT_CHANNEL_LIST.map((key) => ({
                  label: key,
                  value: key
                }))
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "CreatedAt",
            accessorKey: "createdAt",
            id: "createdAt",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
            cell: ({ row: { original } }) => dayjs(original.createdAt).format("YYYY-MM-DD HH:mm:ss")
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "OperatedBy",
            accessorKey: "operatedBy.name",
            id: "operatedBy.name",
            enableHiding: true,
            meta: {
              filterOperator: "contains"
            },
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search OperatedBy" }),
            cell: useCallback(
              ({ row: { original } }) => {
                var _a2, _b, _c, _d, _e;
                return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxs(Avatar, { className: "size-6", children: [
                    /* @__PURE__ */ jsx(AvatarImage, { src: (_a2 = original.operatedBy) == null ? void 0 : _a2.avatar, alt: ((_b = original.operatedBy) == null ? void 0 : _b.name) || "" }),
                    /* @__PURE__ */ jsx(AvatarFallback, { children: (_d = (_c = original.operatedBy) == null ? void 0 : _c.name) == null ? void 0 : _d.slice(0, 1).toUpperCase() })
                  ] }),
                  /* @__PURE__ */ jsx("span", { children: (_e = original.operatedBy) == null ? void 0 : _e.name })
                ] });
              },
              []
            )
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Actions",
            accessorKey: "id",
            id: "actions",
            cell: ({ row: { original } }) => /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(ShowButton, { recordItemId: original.id, size: "icon", variant: "ghost" }),
              /* @__PURE__ */ jsx(DeleteButton, { recordItemId: original.id, size: "icon", variant: "ghost", className: "text-destructive!" })
            ] })
          }
        )
      ]
    }
  );
}
function ErrorBoundary$j() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$j,
  default: AuditRecordIndex,
  loader: loader$t,
  meta: meta$f
}, Symbol.toStringTag, { value: "Module" }));
function RadioGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(RadioGroupPrimitive.Root, { "data-slot": "radio-group", className: cn("grid gap-3", className), ...props });
}
function RadioGroupItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Item,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "border-input text-primary ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-0",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        RadioGroupPrimitive.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ jsx(CircleIcon, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}) {
  const _values = React.useMemo(
    () => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max],
    [value, defaultValue, min, max]
  );
  return /* @__PURE__ */ jsxs(
    SliderPrimitive.Root,
    {
      "data-slot": "slider",
      defaultValue,
      value,
      min,
      max,
      className: cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          SliderPrimitive.Track,
          {
            "data-slot": "slider-track",
            className: cn(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ jsx(
              SliderPrimitive.Range,
              {
                "data-slot": "slider-range",
                className: cn("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
              }
            )
          }
        ),
        Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { open: true, children: [
          /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
            SliderPrimitive.Thumb,
            {
              "data-slot": "slider-thumb",
              className: "border-primary bg-background ring-ring/20 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
            },
            index
          ) }),
          /* @__PURE__ */ jsx(TooltipContent, { children: _values[index] })
        ] }) }, index))
      ]
    }
  );
}
const getNestedValue = (source, path2) => {
  if (source == null) {
    return void 0;
  }
  const [head, ...tail] = path2;
  if (!head) {
    return source;
  }
  const value = typeof source === "object" ? source[head] : void 0;
  if (tail.length && value != null) {
    return getNestedValue(value, tail);
  }
  return value;
};
const get = (source, path2, defaultValue) => {
  if (!path2) {
    return source ?? defaultValue;
  }
  const result = getNestedValue(source, path2.split("."));
  return result !== void 0 && result !== null ? result : defaultValue;
};
const meta$e = ({ data: data2 }) => {
  var _a2;
  return [{ title: ((_a2 = data2 == null ? void 0 : data2.config) == null ? void 0 : _a2.title) || "配置化CRUD页面" }];
};
async function loader$s({ request, params }) {
  await requireUserSession(request);
  const { group, category, name } = params;
  const config = await dataService.findFirst(
    "dynamicPage",
    { where: { path: `/${group}/${category}/dynamic/${name}`, isActive: true } },
    { request }
  );
  if (!config) {
    console.error("配置化CRUD页面不存在、或未激活");
    return Response.json({ message: "配置化CRUD页面不存在、或未激活" }, { status: 404 });
  }
  const { tableSql } = config || {};
  const db2 = await getEnhancedDb({ request });
  const resourceTable = parseTablenameFromSql(tableSql);
  const [resList, resTotal] = await Promise.all([
    db2.$queryRawUnsafe(tableSql),
    db2.$queryRawUnsafe(`SELECT COUNT(*) FROM "${resourceTable}" WHERE "deleted" IS NOT TRUE;`)
  ]);
  const total = Array.isArray(resTotal) && resTotal.length > 0 ? Number(resTotal[0].count) : 0;
  return data$1({
    config,
    tableData: { data: resList, total },
    resourceTable
  });
}
async function action$e({ request }) {
  const formData = await request.formData();
  const params = JSON.parse(formData.get("data"));
  const { type, resourceTable, ids, id, ...rest } = params;
  try {
    if (!type) {
      throw new Error("type is required");
    }
    if (!resourceTable) {
      throw new Error("resourceTable is required");
    }
    const db2 = await getEnhancedDb({ request });
    if (type === "deleteMany" && (ids == null ? void 0 : ids.length)) {
      const idsStr = ids.map((id2) => `'${id2}'`).join(",");
      await db2.$executeRawUnsafe(`DELETE FROM "${resourceTable}" WHERE id IN (${idsStr})`);
    } else if (type === "deleteOne" && id) {
      await db2.$executeRawUnsafe(`DELETE FROM "${resourceTable}" WHERE id = '${id}'`);
    } else if (type === "create") {
      const fields = Object.keys(rest).map((key) => `"${key}"`).join(", ");
      const values = Object.values(rest).map((value) => `'${value}'`);
      console.log(`INSERT INTO "${resourceTable}" (${fields}) VALUES (${values.join(", ")}) RETURNING *`);
      await db2.$executeRawUnsafe(
        `INSERT INTO "${resourceTable}" (${fields}) VALUES (${values.join(", ")}) RETURNING *`
      );
    } else if (type === "edit" && id) {
      const set = Object.entries(rest).map(([key, value]) => `${key} = '${value}'`);
      await db2.$executeRawUnsafe(`UPDATE "${resourceTable}" SET ${set.join(", ")} WHERE id = '${id}'`);
    } else {
      throw new Error("Invalid parameters");
    }
    return data$1({ success: true, err: "", type }, { status: 200 });
  } catch (error) {
    return data$1({ success: false, err: error instanceof Error ? error.message : "操作失败", type }, { status: 500 });
  }
}
function DynamicPageIndex() {
  const { tableData = { data: [], total: 0 }, config = {}, resourceTable } = useLoaderData();
  const actionData = useActionData();
  const submit = useSubmit();
  const useModalReturn = useModal();
  const friendly = useUserFriendlyName();
  const navigate = useNavigate();
  useEffect(() => {
    var _a2;
    const { err, success, type } = actionData || {};
    if (!actionData) return;
    if (!success || err) {
      toast.error(`${type} 操作失败`, { description: err || "unknown" });
      return;
    }
    toast.success(`${type} 操作成功`, { description: "success" });
    if (type === "deleteMany") {
      (_a2 = tableRef.current) == null ? void 0 : _a2.resetRowSelection();
    } else if (["create", "edit"].includes(type || "")) {
      closeDialog();
    }
  }, [actionData]);
  const { tableRecordLink = [], tableSql, formField = [] } = config || {};
  const { data: deletePermission } = useCan({ resource: resourceTable, action: EnumAction.delete });
  const recordRef = useRef(void 0);
  const actionRef = useRef(void 0);
  const tableRef = useRef(void 0);
  const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const bulkDeleteAction = (table) => {
    const rows = table.getSelectedRowModel().rows;
    const label = `Delete Selected (${rows.length}) ${friendly("Row", rows.length > 1 ? "plural" : "singular")}`;
    return {
      className: "text-destructive!",
      label,
      disabled: !(deletePermission == null ? void 0 : deletePermission.can),
      onClick: () => {
        tableRef.current = table;
        const formData = new FormData();
        const data2 = {
          type: "deleteMany",
          resourceTable,
          ids: rows.map((row) => row.original.id)
        };
        formData.append("data", JSON.stringify(data2));
        submit(formData, { method: "post" });
      }
    };
  };
  const tableFieldArray = useMemo(() => parseTableFieldArrayFromSql(tableSql), [tableSql]);
  const tableRecordLinkArray = Array.isArray(tableRecordLink) ? tableRecordLink : [];
  const formFieldArray = Array.isArray(formField) ? formField : [];
  const generateColumns = () => {
    const useTableField = tableFieldArray && tableFieldArray.length > 1;
    if (!useTableField && !tableData.data.length) {
      return [];
    }
    const columnsList = useTableField ? tableFieldArray.map((name) => ({ name })) : Object.keys(tableData.data[0]).map((key) => ({ name: key }));
    const columns2 = columnsList.map(({ name }) => {
      const headerName = name.charAt(0).toUpperCase() + name.slice(1);
      let valueType = "string";
      const value = get(tableData.data[0], name);
      if (typeof value === "number") {
        valueType = "number";
      } else if (typeof value === "boolean") {
        valueType = "boolean";
      } else if (value instanceof Date || typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) {
        valueType = "date";
      } else if (typeof value === "object") {
        valueType = "object";
      }
      let filter = void 0;
      if (valueType === "date") {
        filter = (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props });
      } else if (valueType === "string") {
        filter = (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props });
      }
      return /* @__PURE__ */ jsx(
        TableEasy.Column,
        {
          header: headerName,
          accessorKey: name,
          id: name,
          meta: valueType === "string" ? { filterOperator: "contains" } : void 0,
          enableSorting: valueType !== "object",
          enableHiding: true,
          filter,
          cell: ({ row: { original } }) => {
            const value2 = get(original, name);
            if (value2 === null || value2 === void 0) {
              return /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "-" });
            } else if (valueType === "boolean") {
              return value2 ? "true" : "false";
            } else if (valueType === "date") {
              return dayjs(value2).format("YYYY-MM-DD HH:mm:ss");
            } else if (valueType === "object") {
              return /* @__PURE__ */ jsxs(Popover, { children: [
                /* @__PURE__ */ jsx(PopoverTrigger, { className: "text-link cursor-pointer", asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsx(EyeIcon, { className: "h-4 w-4" }) }) }),
                /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: JSON.stringify(value2, null, 2) }) })
              ] });
            }
            return value2.toLocaleString();
          }
        },
        name
      );
    });
    if (config.enableDelete) {
      columns2.unshift(
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            accessorKey: "id",
            id: "checkbox",
            header: ({ table }) => /* @__PURE__ */ jsx(TableEasy.CheckAll, { table, options: [bulkDeleteAction(table)] }),
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
          },
          "checkbox"
        )
      );
    }
    const { enableDelete, enableEdit, enableClone, tableRecordLink: tableRecordLink2 } = config;
    const enableActions = enableEdit || enableClone || enableDelete || (tableRecordLink2 == null ? void 0 : tableRecordLink2.length);
    columns2.push(
      /* @__PURE__ */ jsx(
        TableEasy.Column,
        {
          header: "Actions",
          accessorKey: "id",
          id: "actions",
          cell: ({ row: { original } }) => enableActions ? /* @__PURE__ */ jsx(TableEasy.Actions, { row: original, resource: resourceTable, children: getActions(original, tableRecordLinkArray) }) : "N/A"
        },
        "actions"
      )
    );
    return columns2;
  };
  const getActions = (original, tableRecordLinkArray2) => {
    const actions = [];
    if (config.enableEdit) {
      actions.push(
        /* @__PURE__ */ jsx(
          TableEasy.EditAction,
          {
            onClick: () => {
              recordRef.current = original;
              actionRef.current = EnumAction.edit;
              useModalReturn.show();
            }
          },
          "edit"
        )
      );
    }
    if (config.enableClone) {
      actions.push(
        /* @__PURE__ */ jsx(
          TableEasy.CloneAction,
          {
            onClick: () => {
              recordRef.current = original;
              actionRef.current = EnumAction.clone;
              useModalReturn.show();
            }
          },
          "clone"
        )
      );
    }
    if (config.enableDelete) {
      actions.push(
        /* @__PURE__ */ jsx(
          TableEasy.DeleteAction,
          {
            onClick: () => {
              recordRef.current = original;
              setDeleteAlertOpen(true);
            }
          },
          "delete"
        )
      );
    }
    if (tableRecordLinkArray2.length > 0) {
      tableRecordLinkArray2.forEach((link) => {
        actions.push(
          /* @__PURE__ */ jsx(
            TableEasy.ShowAction,
            {
              title: link.name,
              icon: /* @__PURE__ */ jsx(Link2, {}),
              onClick: () => {
                let processedUrl = link.url;
                const paramMatches = processedUrl.match(/\{([^}]+)\}/g);
                if (paramMatches) {
                  paramMatches.forEach((param) => {
                    const fieldName = param.substring(1, param.length - 1);
                    const value = get(original, fieldName);
                    processedUrl = processedUrl.replace(param, String(value || ""));
                  });
                }
                navigate(processedUrl);
              }
            },
            link.name
          )
        );
      });
    }
    return actions;
  };
  const columns = generateColumns();
  const toolbar = [
    /* @__PURE__ */ jsx(EditButton, { resource: EnumResource.dynamicPage, recordItemId: config.id, children: "编辑配置" }, "edit"),
    /* @__PURE__ */ jsx(ExportButton, { resource: resourceTable }, "export")
  ];
  if (config.enableCreate) {
    toolbar.push(
      /* @__PURE__ */ jsx(
        CreateButton,
        {
          resource: resourceTable,
          onClick: () => {
            recordRef.current = void 0;
            actionRef.current = "create";
            useModalReturn.show();
          }
        },
        "create"
      )
    );
  }
  const columnVisibility = useMemo(() => {
    const obj = {};
    tableFieldArray.filter((field) => field.match(/Id|id$/)).forEach((field) => {
      obj[field] = false;
    });
    return obj;
  }, [tableFieldArray]);
  const tableSorting = useMemo(() => {
    const { orderBy } = parseSql(tableSql);
    const key = tableFieldArray.find((field) => orderBy.includes(field));
    return key ? [{ id: key, desc: orderBy.includes("DESC") }] : void 0;
  }, [tableSql, tableFieldArray]);
  const handleDeleteRecord = () => {
    var _a2;
    const formData = new FormData();
    formData.append("data", JSON.stringify({ type: "deleteOne", resourceTable, id: (_a2 = recordRef.current) == null ? void 0 : _a2.id }));
    submit(formData, { method: "post" });
  };
  const [allOptionsMap, setAllOptionsMap] = useState({});
  const [show, setShow] = useState(false);
  useEffect(() => {
    var _a2;
    if (!useModalReturn.visible) {
      return;
    }
    const obj = {};
    (_a2 = formFieldArray == null ? void 0 : formFieldArray.filter((item) => selectFormFieldTypes.includes(item.type))) == null ? void 0 : _a2.forEach(async (item) => {
      if (item.optionsStatic) {
        obj[item.name] = item.optionsStatic;
      }
      if (item.optionsType === "database") {
        obj[item.name] = await queryOptionsWidthSql(item);
      }
    });
    setAllOptionsMap(obj);
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, [useModalReturn.visible]);
  const queryOptionsWidthSql = useCallback(async (item) => {
    if (!item.optionsSql) {
      return [];
    }
    const { data: res } = await easyAxios.post("/api/sql", {
      sql: item.optionsSql,
      pagination: { mode: "off" }
    });
    const data2 = res.data;
    if (!Array.isArray(data2)) {
      return [];
    }
    return data2;
  }, []);
  const closeDialog = () => {
    setShow(false);
    useModalReturn.close();
  };
  if (!config.id) {
    return /* @__PURE__ */ jsx(NotFound, {});
  }
  return /* @__PURE__ */ jsxs(CanAccess, { fallback: /* @__PURE__ */ jsx(PermissionDenied, {}), children: [
    /* @__PURE__ */ jsxs(SidebarLayout, { children: [
      /* @__PURE__ */ jsxs(H2, { children: [
        /* @__PURE__ */ jsx("span", { children: "配置化CRUD页面 - " }),
        /* @__PURE__ */ jsx("span", { className: "capitalize", children: resourceTable }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm font-normal", children: "由配置化CRUD页面生成, 支持配置要展示的数据模型、查询语句、增删改查等交互" })
      ] }),
      /* @__PURE__ */ jsx(
        TableEasy,
        {
          enableSorting: true,
          enableFilters: true,
          enableHiding: true,
          toolbar,
          initialState: {
            columnVisibility,
            sorting: tableSorting
          },
          refineCoreProps: {
            meta: {},
            resource: resourceTable,
            queryOptions: {
              initialData: { data: tableData.data, total: tableData.total },
              queryFn: async ({ queryKey = [] }) => {
                const params = queryKey[3];
                const { filters, pagination, sorters } = params || {};
                const { data: res } = await easyAxios.post("/api/sql", {
                  sql: tableSql,
                  filters,
                  pagination,
                  sorters
                });
                return { data: (res == null ? void 0 : res.data) || [], total: (res == null ? void 0 : res.total) || 0 };
              }
            }
          },
          children: columns
        }
      )
    ] }),
    /* @__PURE__ */ jsx(AlertDialog, { open: deleteAlertOpen, onOpenChange: (isOpen) => !isOpen && setDeleteAlertOpen(false), children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsx(AlertDialogTitle, { children: "确认删除记录" }),
        /* @__PURE__ */ jsx(AlertDialogDescription, { children: "确定要删除该记录吗？此操作不可撤销。" })
      ] }),
      /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsx(AlertDialogCancel, { children: "取消" }),
        /* @__PURE__ */ jsx(AlertDialogAction, { onClick: handleDeleteRecord, variant: "destructive", children: "确认删除" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Dialog, { open: show, onOpenChange: closeDialog, children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-5xl", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { className: "border-b pb-4", children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: actionRef.current === EnumAction.edit ? `编辑 ${resourceTable}` : `新增 ${resourceTable}` }),
        /* @__PURE__ */ jsx(DialogDescription, { children: "表单由CRUD配置化功能生成" })
      ] }),
      /* @__PURE__ */ jsx(
        DynamicForm,
        {
          action: actionRef.current,
          formModalClose: closeDialog,
          initialData: recordRef.current,
          config,
          allOptionsMap,
          resourceTable
        }
      )
    ] }) })
  ] });
}
function ErrorBoundary$i() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const getDefaultValues = (data2 = {}, formFieldArray, allOptionsMap) => {
  return formFieldArray.reduce(
    (acc, field) => {
      var _a2;
      const { name, type } = field;
      const options = allOptionsMap[name] || [];
      if (type === "text" || type === "textarea" || type === "file" || type === "code" || type === "date") {
        acc[name] = data2[name] || "";
      } else if (type === "number") {
        acc[name] = data2[name] || 0;
      } else if (type === "slider") {
        acc[name] = data2[name] || [1, 90];
      } else if (["select", "radio"].includes(type)) {
        acc[name] = {
          label: ((_a2 = options.find((option) => option.value === data2[name])) == null ? void 0 : _a2.label) || "",
          value: data2[name] || ""
        };
      } else {
        acc[name] = data2[name] || void 0;
      }
      return acc;
    },
    {}
  );
};
const initSchemaDynamicForm = (formFieldArray) => {
  return z.object(
    formFieldArray.reduce((schema, field) => {
      const { name, type, required, min, max, step } = field;
      let fieldSchema;
      switch (type) {
        case "text":
        case "textarea":
          fieldSchema = z.string();
          break;
        case "code":
          fieldSchema = schemaJson;
          break;
        case "number":
          fieldSchema = z.number();
          if (typeof min === "number") fieldSchema = fieldSchema.min(min);
          if (typeof max === "number") fieldSchema = fieldSchema.max(max);
          if (typeof step === "number") fieldSchema = fieldSchema.step(step);
          break;
        case "switch":
        case "checkbox":
          fieldSchema = z.boolean();
          break;
        case "select":
        case "radio":
          fieldSchema = z.object({ label: z.string(), value: z.string().or(z.number()) });
          break;
        case "selectMany":
        case "checkboxMany":
          fieldSchema = z.array(z.object({ label: z.string(), value: z.string().or(z.number()) }));
          break;
        case "date":
          fieldSchema = z.string();
          break;
        case "dateRange":
          fieldSchema = z.object({
            from: z.string(),
            to: z.string()
          });
          break;
        case "dateMany":
          fieldSchema = z.array(z.string());
          break;
        case "file":
          fieldSchema = z.any();
          break;
        case "slider":
          fieldSchema = z.array(z.number());
          break;
        default:
          fieldSchema = z.any();
      }
      if (required) {
        fieldSchema = fieldSchema.refine((val) => val !== void 0 && val !== null && val !== "", {
          message: `${name} 是必填项`
        });
      } else {
        fieldSchema = fieldSchema.optional();
      }
      return { ...schema, [name]: fieldSchema };
    }, {})
  );
};
const DynamicForm = ({
  initialData,
  formModalClose,
  action: action2,
  config,
  allOptionsMap = {},
  resourceTable
}) => {
  const { formAction, id = initialData == null ? void 0 : initialData.id } = useResourceParams({ action: action2 });
  const { formField } = config || {};
  const formFieldArray = Array.isArray(formField) ? formField : [];
  const schemaDynamicPage2 = initSchemaDynamicForm(formFieldArray);
  const submit = useSubmit();
  const defaultValues = getDefaultValues(initialData, formFieldArray, allOptionsMap);
  const form = useForm$1({
    resolver: zodResolver(schemaDynamicPage2),
    defaultValues,
    mode: "onChange"
  });
  const formatStr = "YYYY-MM-DD";
  const renderDatePicker = useCallback(
    (item) => {
      const { name, type, label, description, readonly, start, end } = item;
      const modeMap = {
        date: "single",
        dateMany: "multiple",
        dateRange: "range"
      };
      return /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name,
          disabled: readonly,
          render: ({ field }) => {
            const { value, onChange } = field || {};
            let valueFormat = void 0;
            let labelFormat = void 0;
            if (Array.isArray(value)) {
              valueFormat = value.map((v) => new Date(v));
              labelFormat = value.map((v) => dayjs(v).format(formatStr));
            } else if ((value == null ? void 0 : value.from) || (value == null ? void 0 : value.to)) {
              valueFormat = {
                from: value.from ? new Date(value.from) : void 0,
                to: value.to ? new Date(value.to) : void 0
              };
              labelFormat = [value.from, value.to];
            } else if (value) {
              valueFormat = new Date(value);
              labelFormat = [value];
            }
            return /* @__PURE__ */ jsxs(FormItem, { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxs(FormLabel, { children: [
                label || name,
                description && /* @__PURE__ */ jsxs(FormDescription, { className: "inline-block", children: [
                  " - ",
                  description
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Popover, { children: [
                /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    variant: "outline",
                    className: cn(
                      "h-auto w-[500px] gap-1 pl-3 text-left font-normal",
                      !value && "text-muted-foreground",
                      type === "dateMany" && "w-full"
                    ),
                    children: [
                      value ? labelFormat == null ? void 0 : labelFormat.map((v) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: v }, v)) : /* @__PURE__ */ jsx("span", { children: "Pick a date" }),
                      /* @__PURE__ */ jsx(CalendarIcon, { className: "ml-auto h-4 w-4 opacity-50" })
                    ]
                  }
                ) }) }),
                /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsx(
                  Calendar,
                  {
                    defaultMonth: /* @__PURE__ */ new Date(),
                    mode: modeMap[type] || "default",
                    selected: valueFormat,
                    onSelect: (date) => {
                      if (Array.isArray(date)) {
                        onChange(date.map((d) => dayjs(d).format(formatStr)));
                      } else if ((date == null ? void 0 : date.from) || (date == null ? void 0 : date.to)) {
                        onChange({
                          from: dayjs(date.from).format(formatStr),
                          to: dayjs(date.to).format(formatStr)
                        });
                      } else {
                        onChange(dayjs(date).format(formatStr));
                      }
                    },
                    disabled: readonly || ((date) => date > new Date(end || "") || date < new Date(start || "")),
                    initialFocus: true,
                    numberOfMonths: type === "date" ? 2 : 3
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] });
          }
        },
        name
      );
    },
    [form.control]
  );
  const renderRadioGroup = useCallback(
    (item) => {
      const { name, label, description, readonly } = item;
      const options = allOptionsMap[name] || [];
      return /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name,
          disabled: readonly,
          render: ({ field }) => {
            var _a2;
            return /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsxs(FormLabel, { children: [
                label || name,
                description && /* @__PURE__ */ jsxs(FormDescription, { className: "inline-block", children: [
                  " - ",
                  description
                ] })
              ] }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsxs(
                RadioGroup,
                {
                  disabled: readonly,
                  defaultValue: (_a2 = field.value) == null ? void 0 : _a2.value,
                  onValueChange: (value) => {
                    var _a3;
                    return field.onChange({
                      label: ((_a3 = options.find((option) => option.value === value)) == null ? void 0 : _a3.label) || "unknown",
                      value
                    });
                  },
                  className: "flex gap-6 rounded-md border px-3 py-3.5",
                  children: [
                    !options.length && /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "No options available" }),
                    options.map((option) => /* @__PURE__ */ jsxs(FormItem, { className: "flex items-center space-y-0", children: [
                      /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(RadioGroupItem, { value: option.value }) }),
                      /* @__PURE__ */ jsx(FormLabel, { className: "font-normal", children: option.label })
                    ] }, option.value))
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] });
          }
        },
        name
      );
    },
    [form.control, allOptionsMap]
  );
  const renderCheckbox = useCallback(
    (item) => {
      const { name, label, description, readonly } = item;
      return /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name,
          disabled: readonly,
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3 rounded-md border p-3", children: [
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                Checkbox,
                {
                  disabled: readonly,
                  checked: field.value,
                  onCheckedChange: field.onChange,
                  className: "mt-[2px]"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1 leading-none", children: [
                /* @__PURE__ */ jsx(FormLabel, { children: label || name }),
                description && /* @__PURE__ */ jsx(FormDescription, { children: description })
              ] })
            ] }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        },
        name
      );
    },
    [form.control]
  );
  const renderCheckboxGroup = useCallback(
    (item) => {
      const { name, label, description, readonly } = item;
      const options = allOptionsMap[name] || [];
      return /* @__PURE__ */ jsx(
        FormField,
        {
          disabled: readonly,
          control: form.control,
          name,
          render: () => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsxs(FormLabel, { className: "text-base", children: [
              label || name,
              description && /* @__PURE__ */ jsxs(FormDescription, { className: "inline-block", children: [
                " - ",
                description
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-6 rounded-md border p-3", children: [
              !options.length && /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "No options available" }),
              options.map((option) => /* @__PURE__ */ jsx(
                FormField,
                {
                  control: form.control,
                  name,
                  render: ({ field }) => {
                    const values = field.value || [];
                    return /* @__PURE__ */ jsxs(FormItem, { className: "flex flex-row items-center space-y-0", children: [
                      /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                        Checkbox,
                        {
                          disabled: readonly,
                          checked: values.find((elem) => (elem == null ? void 0 : elem.value) === option.value) !== void 0,
                          onCheckedChange: (checked) => {
                            return checked ? field.onChange([...values, { label: option.label, value: option.value }]) : field.onChange(values.filter((elem) => (elem == null ? void 0 : elem.value) !== option.value));
                          }
                        }
                      ) }),
                      /* @__PURE__ */ jsx(FormLabel, { className: "text-sm font-normal", children: option.label })
                    ] }, option.value);
                  }
                },
                option.value
              ))
            ] }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        },
        name
      );
    },
    [form.control, allOptionsMap]
  );
  const renderSlider = useCallback(
    (item) => {
      const { name, label, description, readonly, min, max, step } = item;
      return /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name,
          disabled: readonly,
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsxs(FormLabel, { children: [
              label || name,
              description && /* @__PURE__ */ jsxs(FormDescription, { className: "inline-block", children: [
                " - ",
                description
              ] })
            ] }),
            /* @__PURE__ */ jsx(FormControl, { className: "mt-12 w-[70%]", children: /* @__PURE__ */ jsx(
              Slider,
              {
                disabled: readonly,
                value: field.value,
                onValueChange: field.onChange,
                minStepsBetweenThumbs: step,
                min,
                max,
                step
              }
            ) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        },
        name
      );
    },
    [form.control]
  );
  const renderSwitch = useCallback(
    (item) => {
      const { name, label, description, readonly } = item;
      return /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name,
          disabled: readonly,
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "mr-2 inline-block flex-row items-center justify-between gap-3 rounded-lg border px-3 pt-2.5 pb-2", children: [
            /* @__PURE__ */ jsxs(FormLabel, { className: "mb-2 block", children: [
              label || name,
              description && /* @__PURE__ */ jsxs(FormDescription, { className: "inline-block", children: [
                " - ",
                description
              ] })
            ] }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Switch, { disabled: readonly, checked: field.value, onCheckedChange: field.onChange }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        },
        name
      );
    },
    [form.control]
  );
  const renderSelect = useCallback(
    (item) => {
      const { name, label, description, readonly } = item;
      const options = allOptionsMap[name] || [];
      return /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name,
          disabled: readonly,
          render: ({ field }) => {
            var _a2;
            return /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-0.5", children: [
                /* @__PURE__ */ jsx(FormLabel, { children: label || name }),
                description && /* @__PURE__ */ jsxs(FormDescription, { className: "inline-block", children: [
                  " - ",
                  description
                ] })
              ] }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                Combobox,
                {
                  disabled: readonly,
                  options,
                  popoverProps: { modal: true },
                  value: (_a2 = field.value) == null ? void 0 : _a2.value,
                  onChange: (value) => {
                    var _a3;
                    return field.onChange({
                      label: ((_a3 = options.find((option) => option.value === value)) == null ? void 0 : _a3.label) || "unknown",
                      value
                    });
                  }
                }
              ) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] });
          }
        },
        name
      );
    },
    [form.control, allOptionsMap]
  );
  const renderNumber = useCallback(
    (item) => {
      const { name, label, description, readonly, min, max, step } = item;
      return /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name,
          disabled: readonly,
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsxs(FormLabel, { children: [
              label || name,
              description && /* @__PURE__ */ jsxs(FormDescription, { className: "inline-block", children: [
                " - ",
                description
              ] })
            ] }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              Input,
              {
                disabled: readonly,
                type: "number",
                min,
                max,
                step,
                value: field.value,
                onChange: (e) => field.onChange(Number(e.target.value))
              }
            ) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        },
        name
      );
    },
    [form.control]
  );
  const renderText = useCallback(
    (item) => {
      const { name, label, description, readonly } = item;
      return /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name,
          disabled: readonly,
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsxs(FormLabel, { children: [
              label || name,
              description && /* @__PURE__ */ jsxs(FormDescription, { className: "inline-block", children: [
                " - ",
                description
              ] })
            ] }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { disabled: readonly, value: field.value, onChange: (e) => field.onChange(e.target.value) }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        },
        name
      );
    },
    [form.control]
  );
  const renderFile = useCallback(
    (item) => {
      const { name, label, description, readonly } = item;
      return /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name,
          disabled: readonly,
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsxs(FormLabel, { children: [
              label || name,
              description && /* @__PURE__ */ jsxs(FormDescription, { className: "inline-block", children: [
                " - ",
                description
              ] })
            ] }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              Input,
              {
                disabled: readonly,
                type: "file",
                value: field.value,
                onChange: (e) => field.onChange(e.target.value)
              }
            ) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        },
        name
      );
    },
    [form.control]
  );
  const renderTextarea = useCallback(
    (item) => {
      const { name, label, description, readonly } = item;
      return /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name,
          disabled: readonly,
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsxs(FormLabel, { children: [
              label || name,
              description && /* @__PURE__ */ jsxs(FormDescription, { className: "inline-block", children: [
                " - ",
                description
              ] })
            ] }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              Textarea,
              {
                disabled: readonly,
                className: "min-h-20",
                value: field.value,
                onChange: (e) => field.onChange(e.target.value)
              }
            ) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        },
        name
      );
    },
    [form.control]
  );
  const renderSelectMany = useCallback(
    (item) => {
      const { name, label, description, readonly } = item;
      const options = allOptionsMap[name];
      return /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name,
          disabled: readonly,
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsxs(FormLabel, { children: [
              label || name,
              description && /* @__PURE__ */ jsxs(FormDescription, { className: "inline-block", children: [
                " - ",
                description
              ] })
            ] }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              SelectMulti,
              {
                disabled: readonly,
                options,
                popoverProps: { modal: true },
                value: field.value,
                onChange: (value) => field.onChange(value)
              }
            ) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        },
        name
      );
    },
    [form.control, allOptionsMap]
  );
  const renderCode = useCallback(
    (item) => {
      const { name, label, description, readonly, language = "json" } = item;
      return /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name,
          disabled: readonly,
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsxs(FormLabel, { children: [
              label || name,
              description && /* @__PURE__ */ jsxs(FormDescription, { className: "inline-block", children: [
                " - ",
                description
              ] })
            ] }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              CodeEditor,
              {
                options: { readOnly: readonly },
                language,
                height: "20vh",
                value: field.value,
                onChange: (value) => field.onChange(value)
              }
            ) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        },
        name
      );
    },
    [form.control]
  );
  const renderFormField = (item) => {
    switch (item.type) {
      case "text":
        return renderText(item);
      case "textarea":
        return renderTextarea(item);
      case "file":
        return renderFile(item);
      case "selectMany":
        return renderSelectMany(item);
      case "code":
        return renderCode(item);
      case "number":
        return renderNumber(item);
      case "select":
        return renderSelect(item);
      case "radio":
        return renderRadioGroup(item);
      case "switch":
        return renderSwitch(item);
      case "slider":
        return renderSlider(item);
      case "date":
      case "dateRange":
      case "dateMany":
        return renderDatePicker(item);
      case "checkbox":
        return renderCheckbox(item);
      case "checkboxMany":
        return renderCheckboxGroup(item);
      default:
        return null;
    }
  };
  const beforeSubmit = useCallback(
    (val) => {
      const changedValues = getChangedValues(val, defaultValues);
      Object.keys(val).forEach((key) => {
        var _a2;
        const type = ((_a2 = formFieldArray.find((field) => field.name === key)) == null ? void 0 : _a2.type) || "";
        if (["select", "radio"].includes(type)) {
          changedValues[key] = val[key].value;
        }
      });
      return dropEmptyKey(changedValues);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [defaultValues]
  );
  const onSubmit = (data2) => {
    const values = beforeSubmit(data2);
    const formData = new FormData();
    formData.append("data", JSON.stringify({ ...values, type: formAction, id, resourceTable }));
    submit(formData, { method: "post" });
  };
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4 py-2", children: [
    formFieldArray.map((item) => renderFormField(item)),
    /* @__PURE__ */ jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsx(Button, { variant: "outline", type: "button", onClick: formModalClose, children: "取消" }),
      /* @__PURE__ */ jsx(Button, { type: "submit", icon: /* @__PURE__ */ jsx(CheckCheck, {}), children: "保存" })
    ] })
  ] }) });
};
const route31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$i,
  action: action$e,
  default: DynamicPageIndex,
  loader: loader$s,
  meta: meta$e
}, Symbol.toStringTag, { value: "Module" }));
const PDFRenderer = lazy(() => import("./assets/pdf-renderer-BRrntK9K.js"));
const PdfLayout = ({ record }) => {
  return /* @__PURE__ */ jsx(
    Suspense,
    {
      fallback: /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "flex min-h-40 w-20", children: /* @__PURE__ */ jsx(Loader, {}) }) }),
      children: /* @__PURE__ */ jsx(PDFRenderer, { record })
    }
  );
};
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
  const disabledNew = !(canAccess == null ? void 0 : canAccess.can);
  return /* @__PURE__ */ jsx(
    Button,
    {
      disabled: disabledNew,
      icon: /* @__PURE__ */ jsx(Upload, {}),
      ...props,
      onClick: (e) => {
        if (disabledNew) {
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
const meta$d = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const handle$3 = {
  uiTools: () => {
    return /* @__PURE__ */ jsx(UiTools$3, {});
  }
};
async function loader$r({ request }) {
  const tableParams = parseTableParams(new URL(request.url).search);
  const include = {
    operatedBy: { select: { name: true, avatar: true } },
    category: { select: { title: true } }
  };
  const args = {
    ...buildTableParams(tableParams),
    orderBy: { updatedAt: "desc" },
    include
  };
  const res = await dataService.findMany(EnumResource.post, args, { request });
  return { initialData: res, include };
}
function PostIndex() {
  const { initialData, include } = useLoaderData();
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: EnumResource.post, action: EnumAction.delete });
  useCan({
    resource: EnumResource.post,
    action: EnumAction.field,
    params: { field: "hit" }
  });
  const recordRef = useRef(void 0);
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
    /* @__PURE__ */ jsx(PostFormModal, { ...useModalReturn1, action: EnumAction.edit, record: recordRef.current }),
    /* @__PURE__ */ jsxs(
      TableEasy,
      {
        enableSorting: true,
        enableFilters: true,
        enableHiding: true,
        toolbar: [/* @__PURE__ */ jsx(CreateButton, {}, "create"), /* @__PURE__ */ jsx(ExportButton, {}, "export")],
        initialState: {
          columnVisibility: {
            createdAt: false
          },
          sorting: [
            {
              id: "updatedAt",
              desc: true
            }
          ]
        },
        refineCoreProps: {
          queryOptions: { initialData },
          meta: {
            include
          }
        },
        children: [
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              accessorKey: "id",
              id: "id",
              header: ({ table }) => /* @__PURE__ */ jsx(TableEasy.CheckAll, { table, options: [bulkDeleteAction(table)] }),
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
            TableEasy.Column,
            {
              header: "Title",
              accessorKey: "title",
              id: "title",
              meta: {
                filterOperator: "contains"
              },
              filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search Title" }),
              cell: ({ row: { index, original }, table }) => {
                const pageIndex = table.getState().pagination.pageIndex;
                const pageSize = table.getState().pagination.pageSize;
                return /* @__PURE__ */ jsxs(ShowButton, { recordItemId: original.id, asChild: true, children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground inline-block min-w-6", children: [
                    pageIndex * pageSize + index + 1,
                    ". "
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "py-3 underline-offset-2 hover:text-green-600 hover:underline", children: original.title })
                ] });
              }
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "Category",
              accessorKey: "category.title",
              id: "category.title",
              meta: {
                filterOperator: "contains"
              },
              enableHiding: true,
              filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search Category" })
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
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
            TableEasy.Column,
            {
              header: "Status",
              accessorKey: "status",
              id: "status",
              enableSorting: true,
              enableHiding: true,
              cell: ({ row: { original } }) => {
                var _a2;
                return /* @__PURE__ */ jsx(Badge, { variant: (_a2 = POST_STATUS_MAP[original.status]) == null ? void 0 : _a2.badge, children: original.status });
              },
              filter: (props) => /* @__PURE__ */ jsx(
                TableEasy.Filter.Dropdown,
                {
                  ...props,
                  options: POST_STATUS_LIST.map((key) => ({
                    label: key,
                    value: key
                  }))
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "CreatedAt",
              accessorKey: "createdAt",
              id: "createdAt",
              enableSorting: true,
              enableHiding: true,
              filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
              cell: ({ row: { original } }) => dayjs(original.createdAt).format("YYYY-MM-DD HH:mm:ss")
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "UpdatedAt",
              accessorKey: "updatedAt",
              id: "updatedAt",
              enableSorting: true,
              enableHiding: true,
              filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
              cell: ({ row: { original } }) => dayjs(original.updatedAt).format("YYYY-MM-DD HH:mm:ss")
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "OperatedBy",
              accessorKey: "operatedBy.name",
              id: "operatedBy.name",
              enableHiding: true,
              meta: {
                filterOperator: "contains"
              },
              filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search OperatedBy" }),
              cell: useCallback(
                ({ row: { original } }) => {
                  var _a2, _b, _c, _d, _e;
                  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxs(Avatar, { className: "size-6", children: [
                      /* @__PURE__ */ jsx(AvatarImage, { src: (_a2 = original.operatedBy) == null ? void 0 : _a2.avatar, alt: ((_b = original.operatedBy) == null ? void 0 : _b.name) || "" }),
                      /* @__PURE__ */ jsx(AvatarFallback, { children: (_d = (_c = original.operatedBy) == null ? void 0 : _c.name) == null ? void 0 : _d.slice(0, 1).toUpperCase() })
                    ] }),
                    /* @__PURE__ */ jsx("span", { children: (_e = original.operatedBy) == null ? void 0 : _e.name })
                  ] });
                },
                []
              )
            }
          ),
          /* @__PURE__ */ jsx(
            TableEasy.Column,
            {
              header: "Actions",
              accessorKey: "id",
              id: "actions",
              cell: useCallback(
                ({ row: { original } }) => /* @__PURE__ */ jsxs(TableEasy.Actions, { row: original, resource: "post", children: [
                  /* @__PURE__ */ jsx(TableEasy.ShowAction, {}),
                  /* @__PURE__ */ jsx(
                    TableEasy.ShowAction,
                    {
                      title: `${t("buttons.show")} PDF`,
                      icon: /* @__PURE__ */ jsx(Paperclip, { size: 16 }),
                      onClick: () => {
                        recordRef.current = original;
                        useModalReturn2.show();
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx(TableEasy.EditAction, {}),
                  /* @__PURE__ */ jsx(
                    TableEasy.EditAction,
                    {
                      title: `${t("buttons.edit")} in Modal`,
                      onClick: () => {
                        recordRef.current = original;
                        useModalReturn1.show();
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx(TableEasy.CloneAction, {}),
                  /* @__PURE__ */ jsx(TableEasy.DeleteAction, {})
                ] }),
                // eslint-disable-next-line react-hooks/exhaustive-deps
                []
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(Dialog, { open: useModalReturn2.visible, onOpenChange: useModalReturn2.close, children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-6xl", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { className: "border-b pb-4", children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "View PDF" }),
        /* @__PURE__ */ jsx(DialogDescription, { children: "This is a Demo for View PDF on Modal." })
      ] }),
      /* @__PURE__ */ jsx(PdfLayout, { record: recordRef.current })
    ] }) })
  ] });
}
function UiTools$3() {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 text-sm", children: /* @__PURE__ */ jsx(ImportButton, { variant: "ghost", size: "icon" }) });
}
function ErrorBoundary$h() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$h,
  default: PostIndex,
  handle: handle$3,
  loader: loader$r,
  meta: meta$d
}, Symbol.toStringTag, { value: "Module" }));
const meta$c = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
function PostCreate() {
  return /* @__PURE__ */ jsx(PostForm, {});
}
function ErrorBoundary$g() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$g,
  default: PostCreate,
  meta: meta$c
}, Symbol.toStringTag, { value: "Module" }));
const meta$b = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$q({ request }) {
  const tableParams = parseTableParams(new URL(request.url).search);
  const args = {
    ...buildTableParams(tableParams),
    orderBy: { v0: "asc" }
  };
  const res = await dataService.findMany("casbinRule", args, { request });
  return { initialData: res };
}
function CasbinRuleIndex() {
  const { initialData } = useLoaderData();
  const friendly = useUserFriendlyName();
  const { mutate: deleteMany } = useDeleteMany();
  const { data: deletePermission } = useCan({ resource: EnumResource.casbinRule, action: EnumAction.delete });
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
            resource: EnumResource.casbinRule,
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
    TableEasy,
    {
      enableSorting: true,
      enableFilters: true,
      enableHiding: true,
      toolbar: [/* @__PURE__ */ jsx(CreateButton, {}, "create"), /* @__PURE__ */ jsx(ExportButton, {}, "export")],
      initialState: {
        columnVisibility: {
          ptype: false,
          createdAt: false,
          operatedBy: false
        },
        sorting: [
          {
            id: "v0",
            desc: false
          }
        ]
      },
      refineCoreProps: {
        queryOptions: { initialData }
      },
      children: [
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            accessorKey: "id",
            id: "id",
            header: ({ table }) => /* @__PURE__ */ jsx(TableEasy.CheckAll, { table, options: [bulkDeleteAction(table)] }),
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
          TableEasy.Column,
          {
            header: "Subject、Role",
            accessorKey: "v0",
            id: "v0",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search Subject、Role" })
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Object、User",
            accessorKey: "v1",
            id: "v1",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search Object、User" })
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Action",
            accessorKey: "v2",
            id: "v2",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search Action" }),
            cell: ({ row: { original } }) => /* @__PURE__ */ jsx("span", { className: "tracking-wide", children: original.v2 })
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Effect",
            accessorKey: "v3",
            id: "v3",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search Effect" }),
            cell: ({ row: { original } }) => original.v3 || "-"
          }
        ),
        /* @__PURE__ */ jsx(TableEasy.Column, { enableHiding: true, header: "Policy Type", accessorKey: "ptype", id: "ptype" }),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "CreatedAt",
            accessorKey: "createdAt",
            id: "createdAt",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
            cell: ({ row: { original } }) => dayjs(original.createdAt).format("YYYY-MM-DD HH:mm:ss")
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "UpdatedAt",
            accessorKey: "updatedAt",
            id: "updatedAt",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
            cell: ({ row: { original } }) => dayjs(original.updatedAt).format("YYYY-MM-DD HH:mm:ss")
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Actions",
            accessorKey: "id",
            id: "actions",
            cell: ({ row: { original } }) => /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(EditButton, { recordItemId: original.id, size: "icon", variant: "ghost" }),
              /* @__PURE__ */ jsx(
                DeleteButton,
                {
                  disabled: original.v0 === EnumRole.administrator,
                  recordItemId: original.id,
                  size: "icon",
                  variant: "ghost",
                  className: "text-destructive!"
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
function ErrorBoundary$f() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$f,
  default: CasbinRuleIndex,
  loader: loader$q,
  meta: meta$b
}, Symbol.toStringTag, { value: "Module" }));
const meta$a = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
function CasbinRuleCreate() {
  return /* @__PURE__ */ jsx(CasbinRuleForm, {});
}
function ErrorBoundary$e() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$e,
  default: CasbinRuleCreate,
  meta: meta$a
}, Symbol.toStringTag, { value: "Module" }));
const THEMES = { light: "", dark: ".dark" };
const ChartContext = React.createContext(null);
function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
const ChartContainer = React.forwardRef(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsx(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "chart",
      "data-chart": chartId,
      ref,
      className: cn(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsx(RechartsPrimitive.ResponsiveContainer, { children })
      ]
    }
  ) });
});
ChartContainer.displayName = "Chart";
const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(([, config2]) => config2.theme || config2.color);
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
            var _a2;
            const color = ((_a2 = itemConfig.theme) == null ? void 0 : _a2[theme]) || itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
const ChartTooltip = RechartsPrimitive.Tooltip;
const ChartTooltipContent = React.forwardRef(
  ({
    active,
    payload,
    className,
    indicator = "dot",
    hideLabel = false,
    hideIndicator = false,
    label,
    labelFormatter,
    labelClassName,
    formatter,
    color,
    nameKey,
    labelKey
  }, ref) => {
    const { config } = useChart();
    const tooltipLabel = React.useMemo(() => {
      var _a2;
      if (hideLabel || !(payload == null ? void 0 : payload.length)) {
        return null;
      }
      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value = !labelKey && typeof label === "string" ? ((_a2 = config[label]) == null ? void 0 : _a2.label) || label : itemConfig == null ? void 0 : itemConfig.label;
      if (labelFormatter) {
        return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: labelFormatter(value, payload) });
      }
      if (!value) {
        return null;
      }
      return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: value });
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);
    if (!active || !(payload == null ? void 0 : payload.length)) {
      return null;
    }
    const nestLabel = payload.length === 1 && indicator !== "dot";
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
          className
        ),
        children: [
          !nestLabel ? tooltipLabel : null,
          /* @__PURE__ */ jsx("div", { className: "grid gap-1.5", children: payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;
            return /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                  indicator === "dot" && "items-center"
                ),
                children: formatter && (item == null ? void 0 : item.value) !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  (itemConfig == null ? void 0 : itemConfig.icon) ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: cn("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
                        "h-2.5 w-2.5": indicator === "dot",
                        "w-1": indicator === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                        "my-0.5": nestLabel && indicator === "dashed"
                      }),
                      style: {
                        "--color-bg": indicatorColor,
                        "--color-border": indicatorColor
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "grid gap-1.5", children: [
                          nestLabel ? tooltipLabel : null,
                          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: (itemConfig == null ? void 0 : itemConfig.label) || item.name })
                        ] }),
                        item.value && /* @__PURE__ */ jsx("span", { className: "text-foreground font-mono font-medium tabular-nums", children: item.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              item.dataKey
            );
          }) })
        ]
      }
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltip";
const ChartLegend = RechartsPrimitive.Legend;
const ChartLegendContent = React.forwardRef(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();
  if (!(payload == null ? void 0 : payload.length)) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className),
      children: payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn("[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"),
            children: [
              (itemConfig == null ? void 0 : itemConfig.icon) && !hideIcon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : /* @__PURE__ */ jsx(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: item.color
                  }
                }
              ),
              itemConfig == null ? void 0 : itemConfig.label
            ]
          },
          item.value
        );
      })
    }
  );
});
ChartLegendContent.displayName = "ChartLegend";
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}
const AGGREGATION_TYPES = [
  { value: "sum", label: "求和" },
  { value: "avg", label: "平均值" },
  { value: "max", label: "最大值" },
  { value: "min", label: "最小值" },
  { value: "count", label: "计数" }
];
const TIME_RANGES = [
  { value: "7d", label: "最近7天" },
  { value: "30d", label: "最近30天" },
  { value: "90d", label: "最近90天" }
];
const formSchema$1 = z.object({
  db: z.string().default("db1"),
  model: z.string().min(1, { message: "请选择数据模型" }),
  fields: z.array(z.object({ value: z.string(), label: z.string() })).min(1, { message: "请至少选择一个字段" }),
  timeRange: z.string().default("7d"),
  aggregationType: z.string().default("sum")
});
async function loader$p() {
  const tables = await queryTablesAll();
  return data$1({ tables });
}
async function action$d({ request }) {
  try {
    const formData = await request.formData();
    const model = formData.get("model");
    if (!model) {
      throw new Error("模型名称不能为空");
    }
    const records = await db.$queryRawUnsafe(`SELECT * FROM "${model}" LIMIT 1`);
    const record = (records || [])[0] || {};
    const intFields = [];
    Object.keys(record).forEach((key) => {
      if (typeof record[key] === "number" && !key.endsWith("Id") && key !== "id" && key !== "order") {
        intFields.push({ value: key, label: key });
      }
    });
    return data$1({ success: true, intFields, err: "" }, { status: 200 });
  } catch (error) {
    return data$1(
      { success: false, intFields: [], err: error instanceof Error ? error.message : "操作失败" },
      { status: 500 }
    );
  }
}
function DashboardDiscover() {
  const { tables = [] } = useLoaderData();
  const actionData = useActionData();
  const submit = useSubmit();
  useEffect(() => {
    if (actionData == null ? void 0 : actionData.err) {
      toast.error("获取数据失败", { description: actionData == null ? void 0 : actionData.err });
    }
  }, [actionData == null ? void 0 : actionData.err]);
  const form = useForm$1({
    resolver: zodResolver(formSchema$1),
    defaultValues: {
      db: "db1",
      model: "Post",
      fields: [
        { value: "like", label: "like" },
        { value: "hit", label: "hit" }
      ],
      timeRange: TIME_RANGES[0].value,
      aggregationType: AGGREGATION_TYPES[0].value
    }
  });
  const selectedModel = form.watch("model");
  const selectedFields = form.watch("fields");
  const selectedTimeRange = form.watch("timeRange");
  const selectedAggregationType = form.watch("aggregationType");
  const [fieldOptions, setFieldOptions] = useState([]);
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    if (selectedModel) {
      const formData = new FormData();
      formData.append("model", selectedModel);
      submit(formData, { method: "post" });
    } else {
      setFieldOptions([]);
    }
  }, [selectedModel, form]);
  useEffect(() => {
    const intFields = (actionData == null ? void 0 : actionData.intFields) || [];
    if (!isEqual(intFields, fieldOptions)) {
      setFieldOptions(intFields);
      const intFieldValues = intFields.map((field) => field.value);
      const newSelectedFields = selectedFields.filter((field) => intFieldValues.includes(field.value));
      form.setValue("fields", newSelectedFields);
    }
  }, [actionData == null ? void 0 : actionData.intFields, fieldOptions, form, selectedFields]);
  const startDate = useMemo(() => {
    const now = /* @__PURE__ */ new Date();
    const days = Number(selectedTimeRange.replace("d", ""));
    const startDate2 = new Date(now);
    startDate2.setDate(now.getDate() - days);
    startDate2.setHours(0, 0, 0, 0);
    return startDate2.toISOString();
  }, [selectedTimeRange]);
  const endDate = useMemo(() => {
    const now = /* @__PURE__ */ new Date();
    now.setHours(23, 59, 59, 999);
    return now.toISOString();
  }, []);
  const { error, isError, isFetching, isLoading } = useCustom({
    url: "/api/discover",
    method: "get",
    config: {
      query: {
        resource: selectedModel,
        startDate,
        endDate,
        fields: selectedFields.map((field) => field.value).join(","),
        aggregationType: selectedAggregationType
      }
    },
    queryOptions: {
      enabled: !!selectedModel && !!selectedFields.length,
      queryKey: [selectedFields, selectedTimeRange, selectedAggregationType],
      onSuccess: ({ data: data2 }) => {
        if (data2) {
          setChartData(data2);
        }
      }
    }
  });
  const generateChartConfig = () => {
    const config = {};
    selectedFields.forEach((field) => {
      config[field.value] = {
        label: field.label,
        color: getRandomColor(field.value)
      };
    });
    return config;
  };
  const getRandomColor = (seed) => {
    const hash = seed.split("").reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    return `hsl(${hash % 360}, 70%, 50%)`;
  };
  const renderChart = () => {
    const chartConfig = generateChartConfig();
    return /* @__PURE__ */ jsxs(Card, { className: "mt-8 flex flex-1 flex-col", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid flex-1 gap-1 text-center sm:text-left", children: [
          /* @__PURE__ */ jsxs(CardTitle, { className: "capitalize", children: [
            "数据图表 - ",
            selectedModel
          ] }),
          /* @__PURE__ */ jsx(CardDescription, { children: selectedFields.map((f) => f.label).join(", ") || "..." })
        ] }),
        /* @__PURE__ */ jsxs(
          Select,
          {
            value: selectedTimeRange,
            onValueChange: (value) => {
              form.setValue("timeRange", value);
            },
            children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[160px] rounded-lg sm:ml-auto", "aria-label": "选择时间范围", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "最近90天" }) }),
              /* @__PURE__ */ jsx(SelectContent, { className: "rounded-xl", children: TIME_RANGES.map((range) => /* @__PURE__ */ jsx(SelectItem, { value: range.value, className: "rounded-lg", children: range.label }, range.value)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "relative flex-1 px-2 pt-4 sm:px-6 sm:pt-6", children: [
        isFetching && /* @__PURE__ */ jsx("div", { className: "absolute flex size-full justify-center", children: /* @__PURE__ */ jsx("div", { className: "flex min-h-40 w-20", children: /* @__PURE__ */ jsx(Loader, {}) }) }),
        !isFetching && isError && /* @__PURE__ */ jsx("div", { className: "flex h-full min-h-[350px] justify-center", children: /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(Empty, { className: "text-destructive", message: error == null ? void 0 : error.message }) }) }),
        !selectedFields.length && /* @__PURE__ */ jsx("div", { className: "flex h-full min-h-[350px] justify-center", children: /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(Empty, { className: "text-destructive", message: "请选择数据字段" }) }) }),
        !isLoading && chartData.length !== 0 && !isError && !!selectedFields.length && /* @__PURE__ */ jsx(ChartContainer, { config: chartConfig, className: "aspect-auto h-full min-h-[350px] w-full", children: (() => {
          return /* @__PURE__ */ jsxs(AreaChart, { data: chartData, children: [
            /* @__PURE__ */ jsx("defs", { children: selectedFields.map((field) => /* @__PURE__ */ jsxs("linearGradient", { id: `fill${field.value}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ jsx("stop", { offset: "5%", stopColor: getRandomColor(field.value), stopOpacity: 0.8 }),
              /* @__PURE__ */ jsx("stop", { offset: "95%", stopColor: getRandomColor(field.value), stopOpacity: 0.1 })
            ] }, field.value)) }),
            /* @__PURE__ */ jsx(CartesianGrid, { vertical: false }),
            /* @__PURE__ */ jsx(
              XAxis,
              {
                dataKey: "date",
                tickLine: false,
                axisLine: false,
                tickMargin: 8,
                minTickGap: 32,
                tickFormatter: (value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("zh-CN", {
                    month: "short",
                    day: "numeric"
                  });
                }
              }
            ),
            /* @__PURE__ */ jsx(
              ChartTooltip,
              {
                cursor: false,
                content: /* @__PURE__ */ jsx(
                  ChartTooltipContent,
                  {
                    labelFormatter: (value) => {
                      return new Date(value).toLocaleDateString("zh-CN", {
                        month: "short",
                        day: "numeric"
                      });
                    },
                    indicator: "dot"
                  }
                )
              }
            ),
            selectedFields.map(
              (field) => field.value !== "date" && field.value !== "createdAt" && /* @__PURE__ */ jsx(
                Area,
                {
                  dataKey: field.value,
                  type: "natural",
                  fill: `url(#fill${field.value})`,
                  stroke: getRandomColor(field.value),
                  stackId: "a"
                },
                field.value
              )
            ),
            /* @__PURE__ */ jsx(ChartLegend, { content: /* @__PURE__ */ jsx(ChartLegendContent, {}) })
          ] });
        })() })
      ] })
    ] });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col px-8 pt-8 pb-4", children: [
    /* @__PURE__ */ jsxs(H2, { children: [
      /* @__PURE__ */ jsx("span", { children: "数据可视化" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm font-normal", children: "选择数据模型、字段和聚合方式，生成动态数据图表（仅限 Int 类型字段）" })
    ] }),
    /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { className: "mt-8 flex gap-4 *:flex-1", children: [
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "db",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "数据源" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              Combobox,
              {
                className: "sm:w-auto",
                options: [
                  { label: "数据库 A", value: "db1" },
                  { label: "数据库 B", value: "db2" }
                ],
                value: field.value,
                onChange: field.onChange
              }
            ) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "model",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "数据模型" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              Combobox,
              {
                className: "sm:w-auto",
                options: tables.sort(),
                value: field.value,
                onChange: field.onChange
              }
            ) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ),
      selectedModel && /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "fields",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "数据字段" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              SelectMulti,
              {
                className: "sm:w-auto md:w-auto",
                disabled: fieldOptions.length === 0,
                options: fieldOptions,
                value: field.value,
                onChange: field.onChange,
                placeholder: fieldOptions.length === 0 ? "所选数据表暂无数据、或没有可用的 `Int` 类型字段" : "选择要展示的字段（支持多选）"
              }
            ) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "aggregationType",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "聚合方式" }),
            /* @__PURE__ */ jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "选择聚合方式" }) }) }),
              /* @__PURE__ */ jsx(SelectContent, { children: AGGREGATION_TYPES.map((option) => /* @__PURE__ */ jsx(SelectItem, { value: option.value, children: option.label }, option.value)) })
            ] }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      )
    ] }) }),
    renderChart()
  ] });
}
function ErrorBoundary$d() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$d,
  action: action$d,
  default: DashboardDiscover,
  loader: loader$p
}, Symbol.toStringTag, { value: "Module" }));
async function loader$o({ request }) {
  await requireUserSession(request);
  return null;
}
function Role() {
  return /* @__PURE__ */ jsx(CanAccess, { fallback: /* @__PURE__ */ jsx(PermissionDenied, {}), children: /* @__PURE__ */ jsx(SidebarLayout, {}) });
}
function ErrorBoundary$c() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$c,
  default: Role,
  loader: loader$o
}, Symbol.toStringTag, { value: "Module" }));
const meta$9 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const handle$2 = {
  uiTools: (match) => {
    return /* @__PURE__ */ jsx(UiTools$2, { match });
  }
};
async function loader$n({ request, params }) {
  const [initialData] = await Promise.all([
    dataService.findUniqueOrThrow("role", { where: { id: (params == null ? void 0 : params.id) || "" } }, { request })
  ]);
  return {
    initialData
  };
}
function RoleEdit() {
  const { initialData } = useLoaderData();
  return /* @__PURE__ */ jsx(RoleForm, { initialData });
}
function UiTools$2({ match }) {
  const { data: data2 } = match || {};
  const { initialData: role } = data2 || {};
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 text-sm", children: /* @__PURE__ */ jsx(
    DeleteButton,
    {
      disabled: (role == null ? void 0 : role.title) === EnumRole.administrator,
      variant: "ghost",
      size: "icon",
      className: "text-destructive!"
    }
  ) });
}
function ErrorBoundary$b() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const filterFormData$1 = (data2) => {
  return {
    title: (data2 == null ? void 0 : data2.title) || "",
    description: (data2 == null ? void 0 : data2.description) || ""
  };
};
const RoleForm = ({
  className,
  redirect: redirect2 = EnumAction.list,
  initialData,
  action: action2
}) => {
  const { formAction, id = initialData == null ? void 0 : initialData.id, identifier } = useResourceParams({ action: action2 });
  const defaultValues = filterFormData$1(initialData);
  const form = useForm({
    resolver: zodResolver(schemaRole),
    defaultValues,
    warnWhenUnsavedChanges: true,
    mode: "onChange",
    refineCoreProps: {
      resource: identifier,
      action: formAction,
      id,
      queryOptions: getRefineQueryOptions(defaultValues),
      redirect: redirect2
    }
  });
  const beforeSubmit = useCallback((val) => {
    const changedValues = getChangedValues(val, defaultValues);
    return dropEmptyKey(changedValues);
  }, []);
  return /* @__PURE__ */ jsxs(FormEasy, { ...form, beforeSubmit, className, recordItemId: initialData == null ? void 0 : initialData.id, children: [
    /* @__PURE__ */ jsx(Field, { ...form, name: "title", label: "Title", children: /* @__PURE__ */ jsx(Input, {}) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "description", label: "Description", children: /* @__PURE__ */ jsx(Textarea, { className: "min-h-60" }) })
  ] });
};
const route38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$b,
  RoleForm,
  default: RoleEdit,
  handle: handle$2,
  loader: loader$n,
  meta: meta$9
}, Symbol.toStringTag, { value: "Module" }));
async function loader$m({ request }) {
  await requireUserSession(request);
  return null;
}
function User() {
  return /* @__PURE__ */ jsx(CanAccess, { fallback: /* @__PURE__ */ jsx(PermissionDenied, {}), children: /* @__PURE__ */ jsx(SidebarLayout, {}) });
}
function ErrorBoundary$a() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$a,
  default: User,
  loader: loader$m
}, Symbol.toStringTag, { value: "Module" }));
const meta$8 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const handle$1 = {
  uiTools: (match) => {
    return /* @__PURE__ */ jsx(UiTools$1, { match });
  }
};
async function loader$l({ request, params }) {
  const [user, rolesData] = await Promise.all([
    dataService.findUniqueOrThrow(
      "user",
      {
        where: { id: (params == null ? void 0 : params.id) || "" },
        include: {
          roles: {
            select: {
              role: {
                select: { title: true, id: true }
              }
            }
          }
        }
      },
      { request }
    ),
    dataService.findMany(
      "role",
      {
        select: { title: true, id: true }
      },
      { request }
    )
  ]);
  const { roles: userRoles, ...rest } = user;
  const newUserRoles = userRoles.sort((a, b) => rolePriority[a.role.title] - rolePriority[b.role.title]).map((item) => ({
    label: item.role.title,
    value: item.role.id
  }));
  return {
    initialData: {
      data: { ...rest, roles: newUserRoles }
    },
    rolesData
  };
}
async function action$c({ params, request }) {
  await requireUser(request);
  const mergedParams = await getAllParams(request, params);
  const { roleIds, userId } = mergedParams;
  try {
    const updatedUser = await updateUserRoles({ roleIds: roleIds.split(","), userId });
    return data$1({ data: updatedUser });
  } catch (error) {
    return data$1({ error: "更新用户角色失败" }, { status: 500 });
  }
}
function UserEdit() {
  const { initialData, rolesData } = useLoaderData();
  return /* @__PURE__ */ jsx(UserForm, { initialData, rolesData });
}
function UiTools$1({ match }) {
  const { data: data2 } = match || {};
  const { initialData } = data2 || {};
  const { data: user } = initialData || {};
  return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 text-sm", children: /* @__PURE__ */ jsx(
    DeleteButton,
    {
      disabled: user == null ? void 0 : user.roles.some((item) => item.label === EnumRole.administrator),
      variant: "ghost",
      size: "icon",
      className: "text-destructive!"
    }
  ) });
}
function ErrorBoundary$9() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const filterFormData = (data2) => {
  return {
    avatar: data2 == null ? void 0 : data2.avatar,
    name: (data2 == null ? void 0 : data2.name) || "",
    email: (data2 == null ? void 0 : data2.email) || "",
    roles: (data2 == null ? void 0 : data2.roles) || []
  };
};
const schemaUserNew = schemaUser.extend({
  roles: z.array(z.object({ label: z.string(), value: z.string() }))
});
const UserForm = ({
  className,
  redirect: redirect2 = EnumAction.list,
  initialData,
  rolesData,
  action: action2
}) => {
  const { data: data2 } = initialData || {};
  const { formAction, id = data2 == null ? void 0 : data2.id, identifier } = useResourceParams({ action: action2 });
  const { data: roles } = rolesData || {};
  const fetcher = useFetcher();
  const defaultValues = filterFormData(data2);
  const form = useForm({
    resolver: zodResolver(schemaUserNew),
    defaultValues,
    warnWhenUnsavedChanges: true,
    mode: "onChange",
    refineCoreProps: {
      resource: identifier,
      action: formAction,
      id,
      queryOptions: getRefineQueryOptions(defaultValues),
      redirect: redirect2
    }
  });
  const beforeSubmit = async (values) => {
    const { roles: roles2, ...rest } = values;
    const formData = new FormData();
    formData.append("userId", data2.id);
    formData.append("roleIds", roles2.map((role) => role.value).join(","));
    await fetcher.submit(formData, {
      method: "post"
    });
    return {
      ...rest,
      [AUDIT_LOG_CUSTOM_OLD]: { permissions: data2.roles.map((item) => item.label).join(", ") },
      [AUDIT_LOG_CUSTOM_NEW]: { permissions: roles2.map((role) => role.label).join(", ") }
    };
  };
  const newRolesAll = useMemo(() => {
    return roles.sort((a, b) => rolePriority[a.title] - rolePriority[b.title]).map((item) => ({
      label: item.title,
      value: item.id
    }));
  }, [roles]);
  return /* @__PURE__ */ jsxs(FormEasy, { ...form, beforeSubmit, className, recordItemId: data2 == null ? void 0 : data2.id, children: [
    /* @__PURE__ */ jsx(Field, { ...form, name: "name", label: "Name", children: /* @__PURE__ */ jsx(Input, { placeholder: "Name" }) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "email", label: "Email", children: /* @__PURE__ */ jsx(Input, { placeholder: "Email" }) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "avatar", label: "Avatar", children: /* @__PURE__ */ jsx(Input, { placeholder: "Avatar" }) }),
    /* @__PURE__ */ jsx(Field, { ...form, name: "roles", label: "Roles", children: /* @__PURE__ */ jsx(SelectMulti, { options: newRolesAll }) })
  ] });
};
const route40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$9,
  UserForm,
  action: action$c,
  default: UserEdit,
  handle: handle$1,
  loader: loader$l,
  meta: meta$8
}, Symbol.toStringTag, { value: "Module" }));
var EnumAuthProvider = /* @__PURE__ */ ((EnumAuthProvider2) => {
  EnumAuthProvider2["USER_PASS"] = "USER_PASS";
  EnumAuthProvider2["TC_SHUKE"] = "TC_SHUKE";
  return EnumAuthProvider2;
})(EnumAuthProvider || {});
const PROVIDER_LIST = Object.values(EnumAuthProvider);
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
  static fromRequest(request, cookieName = "oauth2") {
    const cookie = new Cookie(request.headers.get("cookie") ?? "");
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
    var _a2;
    super(verify);
    __publicField(this, "name", "oauth2");
    __publicField(this, "client");
    this.options = options;
    this.client = new OAuth2Client(options.clientId, options.clientSecret, ((_a2 = options.redirectURI) == null ? void 0 : _a2.toString()) ?? null);
  }
  get cookieName() {
    var _a2;
    if (typeof this.options.cookie === "string") {
      return this.options.cookie || "oauth2";
    }
    return ((_a2 = this.options.cookie) == null ? void 0 : _a2.name) ?? "oauth2";
  }
  get cookieOptions() {
    if (typeof this.options.cookie !== "object") return {};
    return this.options.cookie ?? {};
  }
  async authenticate(request) {
    debug("Request URL", request.url);
    const url = new URL(request.url);
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
      url2.search = this.authorizationParams(url2.searchParams, request).toString();
      debug("Authorization URL", url2.toString());
      const store2 = StateStore.fromRequest(request, this.cookieName);
      store2.set(state, codeVerifier2);
      throw redirect(url2.toString(), {
        headers: {
          "Set-Cookie": store2.toSetCookie(this.cookieName, this.cookieOptions).toString()
        }
      });
    }
    const code = url.searchParams.get("code");
    if (!code) throw new ReferenceError("Missing code in the URL");
    const store = StateStore.fromRequest(request, this.cookieName);
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
    const user = await this.verify({ request, tokens });
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
authenticator.use(strategyForm, EnumAuthProvider.USER_PASS);
authenticator.use(tcskStrategy, "tcshuke");
const loader$k = async ({ request, params }) => {
  const { provider } = params;
  if (!provider) {
    return Response.json({ message: "provider is required" }, { status: 405 });
  }
  const url = new URL(request.url);
  url.protocol = "https:";
  const secureRequest = new Request(url, request);
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
      const userNew = await createUser({ email, name, provider: EnumAuthProvider.TC_SHUKE });
      session.set("user", userNew);
    }
    return redirect$1(dashboardResource, {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  } catch (error) {
    console.error("@authenticator.OAuth2.callback", error);
    return Response.json({ message: (error == null ? void 0 : error.message) || "Authentication failed, unknown error." }, { status: 401 });
  }
};
const route41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$k
}, Symbol.toStringTag, { value: "Module" }));
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
const meta$7 = ({ data: data2 }) => {
  return [{ title: data2 == null ? void 0 : data2.title }, { name: "description", content: data2 == null ? void 0 : data2.description }];
};
const handle = {
  uiTools: (_match, _matchs) => {
    return /* @__PURE__ */ jsx(UiTools, {});
  },
  uiFilter: (_match, _matchs) => {
    return /* @__PURE__ */ jsx(UiFilter, {});
  }
};
async function loader$j({ request }) {
  await syncServiceLocaleToClient((await getPreferencesCookie(request)).locale);
  return { title: t("pages.about.title"), description: t("pages.about.description") };
}
function DashboardAbout() {
  const { translate: t2 } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-6xl text-[#3defe9]", children: t2("pages.about.title") }),
    /* @__PURE__ */ jsx("p", { className: "my-10 text-3xl text-[#fecc1b]", children: t2("pages.about.description") }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2 space-x-2 *:py-1 *:text-sm", children: [
      /* @__PURE__ */ jsx(Badge, { children: t2("pages.about.features1") }),
      /* @__PURE__ */ jsx(Badge, { children: t2("pages.about.features2") }),
      /* @__PURE__ */ jsx(Badge, { children: t2("pages.about.features3") }),
      /* @__PURE__ */ jsx(Badge, { children: t2("pages.about.features4") }),
      /* @__PURE__ */ jsx(Badge, { children: t2("pages.about.features5") }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(Badge, { children: t2("pages.about.features6") }),
      /* @__PURE__ */ jsx(Badge, { children: t2("pages.about.features7") }),
      /* @__PURE__ */ jsx(Badge, { children: t2("pages.about.features8") }),
      /* @__PURE__ */ jsx(Badge, { children: t2("pages.about.features9") }),
      /* @__PURE__ */ jsx(Badge, { children: t2("pages.about.features10") }),
      /* @__PURE__ */ jsx(Badge, { children: t2("pages.about.features11") })
    ] })
  ] });
}
function ErrorBoundary$8() {
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
function UiTools() {
  const [isOpen, setIsOpen] = React__default.useState(false);
  const [searchParams] = useSearchParams();
  const updateSearchParams = useUpdateSearchParams();
  const starred = Boolean(searchParams.get("starred"));
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-sm", children: [
    /* @__PURE__ */ jsx("div", { className: "text-muted-foreground ml-2 hidden font-medium md:inline-block", children: "Edit Oct 08" }),
    /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-7 w-7", onClick: () => updateSearchParams({ starred: !starred }), children: /* @__PURE__ */ jsx(Star, { className: starred ? "fill-yellow-400" : "" }) }),
    /* @__PURE__ */ jsxs(Popover, { open: isOpen, onOpenChange: setIsOpen, children: [
      /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "data-[state=open]:bg-accent h-7 w-7", children: /* @__PURE__ */ jsx(MoreHorizontal, {}) }) }),
      /* @__PURE__ */ jsx(PopoverContent, { className: "w-56 overflow-hidden rounded-lg p-0", align: "end", children: /* @__PURE__ */ jsx(Sidebar, { collapsible: "none", className: "bg-transparent", children: /* @__PURE__ */ jsx(SidebarContent, { children: dataTools.map((group, index) => /* @__PURE__ */ jsx(SidebarGroup, { className: "border-b last:border-none", children: /* @__PURE__ */ jsx(SidebarGroupContent, { className: "gap-0", children: /* @__PURE__ */ jsx(SidebarMenu, { children: group.map((item, index2) => {
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
  return /* @__PURE__ */ jsxs(Form$1, { className: "flex flex-1 flex-col overflow-x-hidden", onChange: (event) => debounceSubmit(event), children: [
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
const route42 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$8,
  default: DashboardAbout,
  handle,
  loader: loader$j,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
const meta$6 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$i({ request }) {
  const tableParams = parseTableParams(new URL(request.url).search);
  const data2 = await dataService.findMany(
    "role",
    {
      ...buildTableParams(tableParams),
      orderBy: { updatedAt: "desc" }
    },
    { request }
  );
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
    TableEasy,
    {
      enableSorting: true,
      enableFilters: true,
      enableHiding: true,
      toolbar: [/* @__PURE__ */ jsx(CreateButton, {}, "create"), /* @__PURE__ */ jsx(ExportButton, {}, "export")],
      initialState: {
        columnVisibility: {
          createdAt: false
        },
        sorting: [
          {
            id: "updatedAt",
            desc: true
          }
        ]
      },
      refineCoreProps: {
        queryOptions: { initialData }
      },
      children: [
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            accessorKey: "id",
            id: "id",
            header: ({ table }) => /* @__PURE__ */ jsx(TableEasy.CheckAll, { table, options: [bulkDeleteAction(table)] }),
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
          TableEasy.Column,
          {
            header: "Title",
            accessorKey: "title",
            id: "title",
            meta: {
              filterOperator: "contains"
            },
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search Title" }),
            cell: ({ row: { index, original }, table }) => {
              const pageIndex = table.getState().pagination.pageIndex;
              const pageSize = table.getState().pagination.pageSize;
              return /* @__PURE__ */ jsxs(EditButton, { recordItemId: original.id, asChild: true, children: [
                /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground inline-block min-w-6", children: [
                  pageIndex * pageSize + index + 1,
                  ". "
                ] }),
                /* @__PURE__ */ jsx("span", { className: "py-3 underline-offset-2 visited:text-red-600 hover:text-green-600 hover:underline", children: original.title })
              ] });
            }
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Description",
            accessorKey: "description",
            id: "description",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search Description" }),
            cell: ({ row: { original } }) => original.description || "..."
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "CreatedAt",
            accessorKey: "createdAt",
            id: "createdAt",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
            cell: ({ row: { original } }) => dayjs(original.createdAt).format("YYYY-MM-DD HH:mm:ss")
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "UpdatedAt",
            accessorKey: "updatedAt",
            id: "updatedAt",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
            cell: ({ row: { original } }) => dayjs(original.updatedAt).format("YYYY-MM-DD HH:mm:ss")
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Actions",
            accessorKey: "id",
            id: "actions",
            cell: ({ row: { original } }) => /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(EditButton, { recordItemId: original.id, size: "icon", variant: "ghost" }),
              /* @__PURE__ */ jsx(
                DeleteButton,
                {
                  disabled: original.title === EnumRole.administrator,
                  recordItemId: original.id,
                  size: "icon",
                  variant: "ghost",
                  className: "text-destructive!"
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
function ErrorBoundary$7() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route43 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$7,
  default: RoleIndex,
  loader: loader$i,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
const meta$5 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
function RoleCreate() {
  return /* @__PURE__ */ jsx(RoleForm, {});
}
function ErrorBoundary$6() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route44 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$6,
  default: RoleCreate,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
const meta$4 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$h({ request }) {
  const tableParams = parseTableParams(new URL(request.url).search);
  const include = {
    roles: {
      select: {
        role: {
          select: {
            title: true
          }
        }
      }
    },
    _count: {
      select: {
        posts: true
      }
    }
  };
  const data2 = await dataService.findMany(
    "user",
    {
      ...buildTableParams(tableParams),
      orderBy: { updatedAt: "desc" },
      include
    },
    { request }
  );
  return { initialData: data2, include };
}
function UserIndex() {
  const { initialData, include } = useLoaderData();
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
    TableEasy,
    {
      enableSorting: true,
      enableFilters: true,
      enableHiding: true,
      toolbar: [/* @__PURE__ */ jsx(ExportButton, {}, "export")],
      initialState: {
        columnVisibility: {
          createdAt: false
        },
        sorting: [
          {
            id: "updatedAt",
            desc: true
          }
        ]
      },
      refineCoreProps: {
        queryOptions: { initialData },
        meta: {
          include
        }
      },
      children: [
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            accessorKey: "id",
            id: "id",
            header: ({ table }) => /* @__PURE__ */ jsx(TableEasy.CheckAll, { table, options: [bulkDeleteAction(table)] }),
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
          TableEasy.Column,
          {
            header: "Name",
            accessorKey: "name",
            id: "name",
            enableHiding: true,
            meta: {
              filterOperator: "contains"
            },
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search user name" }),
            cell: useCallback(({ row: { original } }) => {
              var _a2;
              return /* @__PURE__ */ jsx(EditButton, { recordItemId: original.id, asChild: true, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxs(Avatar, { className: "size-6", children: [
                  /* @__PURE__ */ jsx(AvatarImage, { src: original.avatar, alt: original.name || "" }),
                  /* @__PURE__ */ jsx(AvatarFallback, { className: "border-foreground/10 border", children: (_a2 = original.name) == null ? void 0 : _a2.slice(0, 1).toUpperCase() })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "underline-offset-2 hover:text-green-600 hover:underline", children: original.name })
              ] }) });
            }, [])
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Roles",
            accessorKey: "roles",
            id: "roles",
            enableHiding: true,
            cell: ({ row: { original } }) => {
              var _a2;
              const roles = (_a2 = original.roles) == null ? void 0 : _a2.map((item) => item.role.title);
              return /* @__PURE__ */ jsx(Badge, { children: roles.sort((a, b) => rolePriority[a] - rolePriority[b]).join(", ") });
            }
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Email",
            accessorKey: "email",
            id: "email",
            enableSorting: true,
            enableHiding: true,
            cell: ({ row: { original } }) => original.email
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Provider",
            accessorKey: "provider",
            id: "provider",
            enableSorting: true,
            enableHiding: true,
            cell: ({ row: { original } }) => {
              return /* @__PURE__ */ jsx(Badge, { variant: "outline", children: original.provider });
            },
            filter: (props) => /* @__PURE__ */ jsx(
              TableEasy.Filter.Radio,
              {
                ...props,
                options: PROVIDER_LIST.map((value) => ({
                  label: value,
                  value
                }))
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "CreatedAt",
            accessorKey: "createdAt",
            id: "createdAt",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
            cell: ({ row: { original } }) => dayjs(original.createdAt).format("YYYY-MM-DD HH:mm:ss")
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "UpdatedAt",
            accessorKey: "updatedAt",
            id: "updatedAt",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
            cell: ({ row: { original } }) => dayjs(original.updatedAt).format("YYYY-MM-DD HH:mm:ss")
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Post Count",
            accessorKey: "postCount",
            id: "postCount",
            enableHiding: true,
            cell: ({ row: { original } }) => {
              var _a2;
              return ((_a2 = original == null ? void 0 : original._count) == null ? void 0 : _a2.posts) || "0";
            }
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Actions",
            accessorKey: "id",
            id: "actions",
            cell: ({ row: { original } }) => {
              var _a2;
              return /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(EditButton, { recordItemId: original.id, size: "icon", variant: "ghost" }),
                /* @__PURE__ */ jsx(
                  DeleteButton,
                  {
                    disabled: (_a2 = original.roles) == null ? void 0 : _a2.some(
                      (item) => item.role.title === EnumRole.administrator
                    ),
                    recordItemId: original.id,
                    size: "icon",
                    variant: "ghost",
                    className: "text-destructive!"
                  }
                )
              ] });
            }
          }
        )
      ]
    }
  );
}
function ErrorBoundary$5() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$5,
  default: UserIndex,
  loader: loader$h,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
async function loader$g() {
  return Response.json({ message: "Method not allowed" });
}
const action$b = async ({ request, params }) => {
  try {
    const { provider } = params;
    if (!provider || ![EnumAuthProvider.USER_PASS, EnumAuthProvider.TC_SHUKE].includes(provider)) {
      return Response.json({ message: "Method not allowed" }, { status: 405 });
    }
    const user = await authenticator.authenticate(provider, request);
    if (provider === EnumAuthProvider.USER_PASS && user) {
      const session = await getSession(request.headers.get("Cookie"));
      session.set("user", user);
      return Response.json(user, {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      });
    }
    return Response.json({ message: "Authentication failed, unable to get user." }, { status: 401 });
  } catch (error) {
    if (error.status === 302) {
      return error;
    }
    console.error("@authenticator.catch", error);
    Sentry.captureException(error);
    return Response.json({ message: (error == null ? void 0 : error.message) || "Authentication failed, unknown error." }, { status: 401 });
  }
};
const route46 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$b,
  loader: loader$g
}, Symbol.toStringTag, { value: "Module" }));
function Tabs({ className, ...props }) {
  return /* @__PURE__ */ jsx(TabsPrimitive.Root, { "data-slot": "tabs", className: cn("flex flex-col gap-2", className), ...props });
}
function TabsList({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-1",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-background data-[state=active]:text-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 inline-flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
const meta$3 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$f({ request, params }) {
  await requireUserSession(request);
  const mergedParams = await getAllParams(request, params);
  return { paramsFromLoader: mergedParams };
}
async function action$a({ request, params }) {
  const mergedParams = await getAllParams(request, params);
  return { paramsFromAction: mergedParams };
}
function DashboardDemo() {
  return /* @__PURE__ */ jsxs("div", { className: "px-8 pt-8 pb-4", children: [
    /* @__PURE__ */ jsx(H2, { children: "Chat" }),
    /* @__PURE__ */ jsx(DemoAreaChart, {}),
    /* @__PURE__ */ jsx(DemoBarChart, {}),
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
function ErrorBoundary$4() {
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
const editPostId = "27fcaa0c-400a-41bf-aee7-18ba631c0074";
const DemoUseModalForm = () => {
  const { options } = useSelect({
    resource: EnumResource.category
  });
  const beforeSubmit = useCallback((val) => {
    const changedValues = getChangedValues(val, {});
    return dropEmptyKey(changedValues);
  }, []);
  const form = useModalForm({
    resolver: zodResolver(schemaPost),
    defaultValues: { title: "" },
    modalProps: { defaultVisible: false },
    syncWithLocation: { key: "modalEditPost", syncId: true },
    mode: "onChange",
    refineCoreProps: {
      resource: EnumResource.post,
      action: EnumAction.create,
      id: editPostId
      // autoSave: 仅在编辑模式下有效
      // autoSave: {
      //   enabled: true,
      //   debounce: 2000,
      //   invalidateOnClose: true,
      //   invalidateOnUnmount: true,
      //   onFinish: (values) => {
      //     try {
      //       schemaPost.parse(values);
      //       if (isEqual(values, form.formState.defaultValues)) {
      //         throw new Error('表单内容未变化');
      //       }
      //       return beforeSubmit(values as TAny);
      //     } catch (error) {
      //       return null as TAny;
      //     }
      //   },
      // },
    }
  });
  const {
    refineCore: { onFinish, formLoading },
    modal: { title: title2, visible, close, show },
    handleSubmit,
    saveButtonProps
  } = form;
  const onSubmit = handleSubmit((_data) => {
    const values = form.getValues();
    onFinish(beforeSubmit(values));
  });
  const { translate: t2 } = useTranslation();
  const disabled = formLoading || saveButtonProps.disabled;
  return /* @__PURE__ */ jsxs("ul", { className: "mt-4 flex gap-2", children: [
    /* @__PURE__ */ jsx(Button, { onClick: () => show(editPostId), children: t2(title2) }),
    /* @__PURE__ */ jsx(Dialog, { open: visible, onOpenChange: close, children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-6xl", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { className: "border-b pb-4", children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: t2(title2) }),
        /* @__PURE__ */ jsx(DialogDescription, { children: "This is a Demo for Edit Form on Modal." })
      ] }),
      /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-8", children: [
        /* @__PURE__ */ jsx(Field, { ...form, name: "title", label: "Title", children: /* @__PURE__ */ jsx(Input, { placeholder: "Title" }) }),
        /* @__PURE__ */ jsx(Field, { ...form, name: "categoryId", label: "Category", children: /* @__PURE__ */ jsx(Combobox, { options, popoverProps: { modal: true } }) }),
        /* @__PURE__ */ jsx(Field, { ...form, name: "status", label: "Status", children: /* @__PURE__ */ jsx(SelectEasy, { options: POST_STATUS_LIST.map((status) => ({ label: status, value: status })) }) }),
        /* @__PURE__ */ jsx(Field, { ...form, name: "content", label: "Content", children: /* @__PURE__ */ jsx(Textarea, { placeholder: "Content", className: "min-h-30" }) }),
        /* @__PURE__ */ jsx(Button, { type: "submit", icon: /* @__PURE__ */ jsx(CheckCheck, {}), loading: formLoading, disabled, children: "Submit" })
      ] }) })
    ] }) })
  ] });
};
const stepTitles = ["Title", "Status", "Category", "Content"];
const DemoUseStepsForm = () => {
  const form = useStepsForm({
    resolver: zodResolver(schemaPost),
    defaultValues: { title: "abc", status: EnumPostStatus.DRAFT, content: "...", categoryId: "" },
    warnWhenUnsavedChanges: false,
    mode: "onSubmit",
    stepsProps: { defaultStep: 0, isBackValidate: false },
    refineCoreProps: {
      resource: EnumResource.post,
      action: EnumAction.create,
      id: editPostId,
      autoSave: { enabled: false }
    }
  });
  const {
    refineCore: { onFinish, formLoading },
    handleSubmit,
    steps: { currentStep, gotoStep },
    saveButtonProps
  } = form;
  const { options } = useSelect({
    resource: EnumResource.category
  });
  const beforeSubmit = useCallback((values) => {
    const changedValues = getChangedValues(values, {});
    return dropEmptyKey(changedValues);
  }, []);
  const onSubmit = handleSubmit((_data) => {
    const values = form.getValues();
    onFinish(beforeSubmit(values));
  });
  const disabled = formLoading || saveButtonProps.disabled;
  return /* @__PURE__ */ jsxs("div", { className: "mt-4 flex w-[600px] flex-col gap-8", children: [
    /* @__PURE__ */ jsx(
      Tabs,
      {
        defaultValue: stepTitles[0],
        value: stepTitles[currentStep],
        onValueChange: (value) => gotoStep(stepTitles.indexOf(value)),
        children: /* @__PURE__ */ jsx(TabsList, { children: stepTitles.map((title2, index) => /* @__PURE__ */ jsxs(TabsTrigger, { value: title2, children: [
          index + 1,
          " - ",
          title2
        ] }, index)) })
      }
    ),
    /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { className: "space-y-8", onSubmit, children: [
      /* @__PURE__ */ jsx(Field, { ...form, name: "title", label: "Title", className: cn(currentStep !== 0 && "hidden"), children: /* @__PURE__ */ jsx(Input, { placeholder: "Title" }) }),
      /* @__PURE__ */ jsx(Field, { ...form, name: "status", label: "Status", className: cn(currentStep !== 1 && "hidden"), children: /* @__PURE__ */ jsx(SelectEasy, { options: POST_STATUS_LIST.map((status) => ({ label: status, value: status })) }) }),
      /* @__PURE__ */ jsx(Field, { ...form, name: "categoryId", label: "Category", className: cn(currentStep !== 2 && "hidden"), children: /* @__PURE__ */ jsx(Combobox, { options }) }),
      /* @__PURE__ */ jsx(Field, { ...form, name: "content", label: "Content", className: cn(currentStep !== 3 && "hidden"), children: /* @__PURE__ */ jsx(Textarea, { placeholder: "Content", className: "min-h-60" }) }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 8 }, children: [
        currentStep > 0 && /* @__PURE__ */ jsx(Button, { type: "button", icon: /* @__PURE__ */ jsx(Undo2, {}), onClick: () => gotoStep(currentStep - 1), disabled, children: "Previous" }),
        currentStep < stepTitles.length - 1 && /* @__PURE__ */ jsx(Button, { type: "button", icon: /* @__PURE__ */ jsx(CheckCheck, {}), onClick: () => gotoStep(currentStep + 1), disabled, children: "Next" }),
        currentStep === stepTitles.length - 1 && /* @__PURE__ */ jsx(Button, { type: "submit", icon: /* @__PURE__ */ jsx(CheckCheck, {}), disabled, children: "Save" })
      ] })
    ] }) })
  ] });
};
const DemoUseViewTransitionState = () => {
  const to = `/playground/dashboard/demoViewTransition`;
  const vt = useViewTransitionState(to);
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ jsx(Link$1, { prefetch: "intent", viewTransition: true, to, children: /* @__PURE__ */ jsx(
    "img",
    {
      alt: "",
      className: "border-secondary mt-4 h-32 rounded-md border shadow-md",
      src: "/images/logo.png",
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
const chartData1 = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 }
];
const chartConfig1 = {
  views: {
    label: "Page Views"
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)"
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)"
  }
};
function DemoBarChart() {
  const [activeChart, setActiveChart] = React.useState("desktop");
  const total = React.useMemo(
    () => ({
      desktop: chartData1.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData1.reduce((acc, curr) => acc + curr.mobile, 0)
    }),
    []
  );
  return /* @__PURE__ */ jsxs(Card, { className: "mt-4", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6", children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Bar Chart - Interactive" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Showing total visitors for the last 3 months" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex", children: ["desktop", "mobile"].map((key) => {
        const chart = key;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            "data-active": activeChart === chart,
            className: "data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6",
            onClick: () => setActiveChart(chart),
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-xs", children: chartConfig1[chart].label }),
              /* @__PURE__ */ jsx("span", { className: "text-lg leading-none font-bold sm:text-3xl", children: total[key].toLocaleString() })
            ]
          },
          chart
        );
      }) })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { className: "px-2 sm:p-6", children: /* @__PURE__ */ jsx(ChartContainer, { config: chartConfig1, className: "aspect-auto h-[250px] w-full", children: /* @__PURE__ */ jsxs(
      BarChart,
      {
        accessibilityLayer: true,
        data: chartData1,
        margin: {
          left: 12,
          right: 12
        },
        children: [
          /* @__PURE__ */ jsx(CartesianGrid, { vertical: false }),
          /* @__PURE__ */ jsx(
            XAxis,
            {
              dataKey: "date",
              tickLine: false,
              axisLine: false,
              tickMargin: 8,
              minTickGap: 32,
              tickFormatter: (value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric"
                });
              }
            }
          ),
          /* @__PURE__ */ jsx(
            ChartTooltip,
            {
              content: /* @__PURE__ */ jsx(
                ChartTooltipContent,
                {
                  className: "w-[150px]",
                  nameKey: "views",
                  labelFormatter: (value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    });
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(Bar, { dataKey: activeChart, fill: `var(--color-${activeChart})` })
        ]
      }
    ) }) })
  ] });
}
const chartData2 = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 }
];
const chartConfig2 = {
  visitors: {
    label: "Visitors"
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)"
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)"
  }
};
function DemoAreaChart() {
  const [timeRange, setTimeRange] = React.useState("90d");
  const filteredData = chartData2.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = /* @__PURE__ */ new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });
  return /* @__PURE__ */ jsxs(Card, { className: "mt-4", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid flex-1 gap-1 text-center sm:text-left", children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Area Chart - Interactive" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Showing total visitors for the last 3 months" })
      ] }),
      /* @__PURE__ */ jsxs(Select, { value: timeRange, onValueChange: setTimeRange, children: [
        /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[160px] rounded-lg sm:ml-auto", "aria-label": "Select a value", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Last 3 months" }) }),
        /* @__PURE__ */ jsxs(SelectContent, { className: "rounded-xl", children: [
          /* @__PURE__ */ jsx(SelectItem, { value: "90d", className: "rounded-lg", children: "Last 3 months" }),
          /* @__PURE__ */ jsx(SelectItem, { value: "30d", className: "rounded-lg", children: "Last 30 days" }),
          /* @__PURE__ */ jsx(SelectItem, { value: "7d", className: "rounded-lg", children: "Last 7 days" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { className: "px-2 pt-4 sm:px-6 sm:pt-6", children: /* @__PURE__ */ jsx(ChartContainer, { config: chartConfig2, className: "aspect-auto h-[250px] w-full", children: /* @__PURE__ */ jsxs(AreaChart, { data: filteredData, children: [
      /* @__PURE__ */ jsxs("defs", { children: [
        /* @__PURE__ */ jsxs("linearGradient", { id: "fillDesktop", x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ jsx("stop", { offset: "5%", stopColor: "var(--color-desktop)", stopOpacity: 0.8 }),
          /* @__PURE__ */ jsx("stop", { offset: "95%", stopColor: "var(--color-desktop)", stopOpacity: 0.1 })
        ] }),
        /* @__PURE__ */ jsxs("linearGradient", { id: "fillMobile", x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ jsx("stop", { offset: "5%", stopColor: "var(--color-mobile)", stopOpacity: 0.8 }),
          /* @__PURE__ */ jsx("stop", { offset: "95%", stopColor: "var(--color-mobile)", stopOpacity: 0.1 })
        ] })
      ] }),
      /* @__PURE__ */ jsx(CartesianGrid, { vertical: false }),
      /* @__PURE__ */ jsx(
        XAxis,
        {
          dataKey: "date",
          tickLine: false,
          axisLine: false,
          tickMargin: 8,
          minTickGap: 32,
          tickFormatter: (value) => {
            const date = new Date(value);
            return date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric"
            });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        ChartTooltip,
        {
          cursor: false,
          content: /* @__PURE__ */ jsx(
            ChartTooltipContent,
            {
              labelFormatter: (value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric"
                });
              },
              indicator: "dot"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(Area, { dataKey: "mobile", type: "natural", fill: "url(#fillMobile)", stroke: "var(--color-mobile)", stackId: "a" }),
      /* @__PURE__ */ jsx(Area, { dataKey: "desktop", type: "natural", fill: "url(#fillDesktop)", stroke: "var(--color-desktop)", stackId: "a" }),
      /* @__PURE__ */ jsx(ChartLegend, { content: /* @__PURE__ */ jsx(ChartLegendContent, {}) })
    ] }) }) })
  ] });
}
const route47 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DemoAreaChart,
  ErrorBoundary: ErrorBoundary$4,
  action: action$a,
  default: DashboardDemo,
  loader: loader$f,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
async function loader$e({ request }) {
  await requireUserSession(request);
  return null;
}
function Log() {
  return /* @__PURE__ */ jsx(CanAccess, { fallback: /* @__PURE__ */ jsx(PermissionDenied, {}), children: /* @__PURE__ */ jsx(SidebarLayout, {}) });
}
function ErrorBoundary$3() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route48 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$3,
  default: Log,
  loader: loader$e
}, Symbol.toStringTag, { value: "Module" }));
async function loader$d({ params, request }) {
  const { id } = params;
  const args = {
    where: { id },
    include: {
      operatedBy: {
        select: { name: true, email: true, avatar: true }
      }
    }
  };
  const log = await dataService.findUniqueOrThrow("log", args, { request });
  return { log };
}
function LogShow() {
  var _a2, _b, _c, _d, _e, _f, _g;
  const { log } = useLoaderData();
  const { content: data2 } = deepParse(log.data || "{}");
  const { content: dataPrevious } = deepParse(log.dataPrevious || "{}");
  const meta2 = log.meta || {};
  const showEditor = ![EnumLogType.delete, EnumLogType.deleteMany].includes(log.action);
  const openDiff = [EnumLogType.update, EnumLogType.updateMany].includes(log.action);
  return /* @__PURE__ */ jsxs("article", { className: "px-8 pt-8 pb-4", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
      /* @__PURE__ */ jsxs(H1, { className: "relative mb-4 inline-flex gap-3 text-4xl font-bold", children: [
        /* @__PURE__ */ jsxs("span", { className: "capitalize", children: [
          "Audit Log - ",
          meta2 == null ? void 0 : meta2.parent,
          ".",
          log.resource
        ] }),
        /* @__PURE__ */ jsx("div", { className: "inline-flex shrink-0 items-start pt-3.5", children: /* @__PURE__ */ jsx(Badge, { className: "tracking-wide", variant: (_a2 = LOG_STATUS_MAP[log.action]) == null ? void 0 : _a2.badge, children: log.action }) })
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
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs(Avatar, { children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: (_b = log.operatedBy) == null ? void 0 : _b.avatar, alt: ((_c = log.operatedBy) == null ? void 0 : _c.name) || "" }),
          /* @__PURE__ */ jsx(AvatarFallback, { children: (_e = (_d = log.operatedBy) == null ? void 0 : _d.name) == null ? void 0 : _e.slice(0, 2).toUpperCase() })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium", children: (_f = log.operatedBy) == null ? void 0 : _f.name }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: (_g = log.operatedBy) == null ? void 0 : _g.email })
        ] })
      ] })
    ] }),
    (log.dataPrevious || log.data) && showEditor && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx(Label, { children: openDiff ? "Previous Resource Data & New Resource Data" : "Resource Data" }),
      /* @__PURE__ */ jsx(
        CodeEditor,
        {
          language: "json",
          value: JSON.stringify(dataPrevious, null, 2),
          modified: JSON.stringify(data2, null, 2),
          enableToggleDiff: false,
          openDiff
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: log.meta && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { children: "Meta Data" }),
      /* @__PURE__ */ jsx("pre", { className: "bg-muted mt-1 overflow-x-auto rounded-lg p-4 text-sm whitespace-pre", children: JSON.stringify(meta2, null, 2) })
    ] }) })
  ] });
}
function ErrorBoundary$2() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route49 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$2,
  default: LogShow,
  loader: loader$d
}, Symbol.toStringTag, { value: "Module" }));
async function loader$c({ request }) {
  await requireUserSession(request);
  return null;
}
function Menu() {
  return /* @__PURE__ */ jsx(CanAccess, { fallback: /* @__PURE__ */ jsx(PermissionDenied, {}), children: /* @__PURE__ */ jsx(SidebarLayout, {}) });
}
function ErrorBoundary$1() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route50 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$1,
  default: Menu,
  loader: loader$c
}, Symbol.toStringTag, { value: "Module" }));
function getLevelName(level) {
  switch (level) {
    case 0:
      return "一级菜单";
    case 1:
      return "二级菜单";
    case 2:
      return "三级菜单";
    case 3:
      return "四级菜单";
    default:
      return `${level + 1}级菜单`;
  }
}
const formSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "菜单名称不能为空"),
  title: z.string().optional(),
  parentId: z.string().nullable().optional(),
  isActive: z.boolean().default(true),
  list: z.string().optional(),
  create: z.string().optional(),
  edit: z.string().optional(),
  show: z.string().optional(),
  clone: z.string().optional(),
  isActiveList: z.boolean().default(true),
  isActiveCreate: z.boolean().default(false),
  isActiveEdit: z.boolean().default(false),
  isActiveShow: z.boolean().default(false),
  isActiveClone: z.boolean().default(false),
  icon: z.string().optional()
});
function MenuDialog({ open, onOpenChange, onClose, onSuccess, onSave, menu, menus }) {
  const isEditMode = !!menu;
  const form = useForm$1({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      name: "",
      title: "",
      parentId: null,
      isActive: true,
      list: "",
      create: "",
      edit: "",
      show: "",
      clone: "",
      isActiveList: true,
      isActiveCreate: false,
      isActiveEdit: false,
      isActiveShow: false,
      isActiveClone: false,
      icon: ""
    }
  });
  const name = form.watch("name");
  const parentId = form.watch("parentId");
  const watchedPaths = useWatch({
    control: form.control,
    name: ["list", "create", "edit", "show", "clone"]
  });
  const parentOptions = useMemo(() => {
    const options = [];
    menus.forEach((menu2) => {
      var _a2;
      if (!((_a2 = menu2.meta) == null ? void 0 : _a2.parent)) {
        options.push({
          id: menu2.id,
          name: menu2.name,
          title: menu2.title || menu2.name,
          level: 0
        });
      }
    });
    menus.forEach((menu2) => {
      var _a2, _b;
      if (((_a2 = menu2.meta) == null ? void 0 : _a2.parent) && ((_b = menu2.meta) == null ? void 0 : _b.icon)) {
        const parentMenu = menus.find((m) => {
          var _a3;
          return m.name === ((_a3 = menu2.meta) == null ? void 0 : _a3.parent);
        });
        if (parentMenu) {
          options.push({
            id: menu2.id,
            name: menu2.name,
            title: menu2.title || menu2.name,
            level: 1
          });
        }
      }
    });
    return options;
  }, [menus]);
  const selectedParentLevel = useMemo(() => {
    if (!parentId) return -1;
    const parent = parentOptions.find((option) => option.id === parentId);
    return parent ? parent.level : -1;
  }, [parentId, parentOptions]);
  useEffect(() => {
    var _a2, _b;
    if (menu) {
      let parentId2 = null;
      if ((_a2 = menu.meta) == null ? void 0 : _a2.parent) {
        const parentName = menu.meta.parent;
        const parentMenu = menus.find((m) => m.name === parentName);
        if (parentMenu) {
          parentId2 = parentMenu.id;
        }
      }
      const isActiveList = menu.list ? true : false;
      const isActiveCreate = menu.create ? true : false;
      const isActiveEdit = menu.edit ? true : false;
      const isActiveShow = menu.show ? true : false;
      const isActiveClone = menu.clone ? true : false;
      form.reset({
        id: menu.id,
        name: menu.name,
        title: menu.title || "",
        parentId: parentId2,
        isActive: menu.isActive ?? true,
        list: menu.list || "",
        create: menu.create || "",
        edit: menu.edit || "",
        show: menu.show || "",
        clone: menu.clone || "",
        isActiveList,
        isActiveCreate,
        isActiveEdit,
        isActiveShow,
        isActiveClone,
        icon: ((_b = menu.meta) == null ? void 0 : _b.icon) || ""
      });
    } else {
      form.reset({
        id: "",
        name: "",
        title: "",
        parentId: null,
        isActive: true,
        list: "",
        create: "",
        edit: "",
        show: "",
        clone: "",
        isActiveList: true,
        isActiveCreate: false,
        isActiveEdit: false,
        isActiveShow: false,
        isActiveClone: false,
        icon: ""
      });
    }
  }, [menu, menus, form]);
  useEffect(() => {
    var _a2;
    if (selectedParentLevel === 0) {
      form.setValue("icon", ((_a2 = menu == null ? void 0 : menu.meta) == null ? void 0 : _a2.icon) || "Lightbulb");
    } else if (selectedParentLevel !== 0) {
      form.setValue("icon", "");
    }
  }, [selectedParentLevel, form, menu]);
  const generateRoutes = useCallback(() => {
    var _a2, _b;
    if (!name) return { list: "", create: "", edit: "", show: "", clone: "" };
    const pathSegments = [];
    if (parentId) {
      const parent = parentOptions.find((option) => option.id === parentId);
      if (!parent) return { list: "", create: "", edit: "", show: "", clone: "" };
      if (parent.level === 0) {
        pathSegments.push(parent.name);
      } else if (parent.level === 1) {
        const grandParentName = (_b = (_a2 = menus.find((m) => m.id === parent.id)) == null ? void 0 : _a2.meta) == null ? void 0 : _b.parent;
        if (grandParentName) {
          const grandParent = menus.find((m) => m.name === grandParentName);
          if (grandParent) {
            pathSegments.push(grandParent.name);
          }
        }
        pathSegments.push(parent.name);
      }
    }
    pathSegments.push(name);
    const basePath = `/${pathSegments.join("/")}`;
    return {
      list: basePath,
      create: `${basePath}/create`,
      edit: `${basePath}/edit/:id`,
      show: `${basePath}/show/:id`,
      clone: `${basePath}/clone/:id`
    };
  }, [name, parentId, parentOptions, menus]);
  useEffect(() => {
    const routes2 = generateRoutes();
    form.setValue("list", routes2.list);
    form.setValue("create", routes2.create);
    form.setValue("edit", routes2.edit);
    form.setValue("show", routes2.show);
    form.setValue("clone", routes2.clone);
  }, [form, generateRoutes, name, parentId]);
  const onSubmit = useCallback(
    (values) => {
      const data2 = {
        ...values,
        // 只保存启用的路径
        list: values.isActiveList ? values.list : void 0,
        create: values.isActiveCreate ? values.create : void 0,
        edit: values.isActiveEdit ? values.edit : void 0,
        show: values.isActiveShow ? values.show : void 0,
        clone: values.isActiveClone ? values.clone : void 0,
        // 非二级菜单不设置图标
        icon: selectedParentLevel === 0 ? values.icon : void 0
      };
      if (onSave) {
        if (isEditMode && menu) {
          onSave({
            ...data2,
            id: menu.id
          });
        } else {
          onSave(data2);
        }
      } else {
        toast.success(isEditMode ? "菜单更新成功" : "菜单创建成功");
        onSuccess();
      }
    },
    [isEditMode, menu, onSave, onSuccess, selectedParentLevel]
  );
  const isSubmitting = form.formState.isSubmitting;
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-[800px]", children: [
    /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: isEditMode ? "编辑菜单" : "新增菜单" }),
      /* @__PURE__ */ jsx(DialogDescription, {})
    ] }),
    /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6", children: [
      /* @__PURE__ */ jsx(
        FormField,
        {
          control: form.control,
          name: "parentId",
          render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex-1", children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "父级菜单" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
              Combobox,
              {
                options: [
                  { value: "null", label: "无 (作为一级菜单)" },
                  ...parentOptions.map((option) => ({
                    value: option.id,
                    label: `${getLevelName(option.level)} - ${option.title}`
                  }))
                ],
                placeholder: "选择父级菜单",
                value: field.value === null ? "null" : field.value || "",
                onChange: (value) => field.onChange(value === "null" ? null : value),
                disabled: form.formState.isSubmitting,
                popoverProps: { modal: true }
              }
            ) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "name",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex-1", children: [
              /* @__PURE__ */ jsxs(FormLabel, { children: [
                "菜单名称, 当前菜单级别：",
                getLevelName(selectedParentLevel + 1)
              ] }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "请输入菜单名称", ...field }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "title",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex-1", children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "菜单标题" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "请输入菜单标题", ...field }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "icon",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "菜单图标" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  ...field,
                  placeholder: selectedParentLevel !== 0 ? "仅限二级菜单可设置图标" : "请输入图标名称",
                  disabled: selectedParentLevel !== 0 || form.formState.isSubmitting
                }
              ) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "isActiveList",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex flex-row items-center justify-between rounded-lg border p-3", children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "flex-1", children: watchedPaths[0] || "N/A" }),
              /* @__PURE__ */ jsx(FormLabel, { children: "列表" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "isActiveCreate",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex flex-row items-center justify-between rounded-lg border p-3", children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "flex-1", children: watchedPaths[1] || "N/A" }),
              /* @__PURE__ */ jsx(FormLabel, { children: "创建" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "isActiveEdit",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex flex-row items-center justify-between rounded-lg border p-3", children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "flex-1", children: watchedPaths[2] || "N/A" }),
              /* @__PURE__ */ jsx(FormLabel, { children: "编辑" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "isActiveShow",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex flex-row items-center justify-between rounded-lg border p-3", children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "flex-1", children: watchedPaths[3] || "N/A" }),
              /* @__PURE__ */ jsx(FormLabel, { children: "详情" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "isActiveClone",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "flex flex-row items-center justify-between rounded-lg border p-3", children: [
              /* @__PURE__ */ jsx(FormLabel, { className: "flex-1", children: watchedPaths[4] || "N/A" }),
              /* @__PURE__ */ jsx(FormLabel, { children: "克隆" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Switch, { checked: field.value, onCheckedChange: field.onChange }) })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: onClose, children: "取消" }),
        /* @__PURE__ */ jsx(Button, { type: "submit", disabled: isSubmitting, icon: /* @__PURE__ */ jsx(CheckCheck, {}), children: isSubmitting ? "保存中..." : "保存" })
      ] })
    ] }) })
  ] }) });
}
function MenuTree({ items: items2, onEditMenu, onDeleteMenu, onReorder, onToggleActive }) {
  const [draggedItem, setDraggedItem] = useState(null);
  const initialExpandedItems = useMemo(() => {
    var _a2;
    const set = /* @__PURE__ */ new Set();
    const topLevelItems = items2.filter((item) => {
      var _a3;
      return !((_a3 = item.meta) == null ? void 0 : _a3.parent);
    });
    const firstTopLevelItem = topLevelItems[0];
    if (firstTopLevelItem) {
      set.add(firstTopLevelItem.id);
      const firstChildItem = (_a2 = firstTopLevelItem.children) == null ? void 0 : _a2[0];
      if (firstChildItem) {
        set.add(firstChildItem.id);
      }
    }
    return set;
  }, [items2]);
  const [expandedItems, setExpandedItems] = useState(initialExpandedItems);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5
      }
    })
  );
  const handleToggle = useCallback((id) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);
  const renderTopLevelMenus = useCallback(() => {
    const topLevelItems = items2.filter((item) => {
      var _a2;
      return !((_a2 = item.meta) == null ? void 0 : _a2.parent);
    });
    const topLevelIds = topLevelItems.map((item) => item.id);
    const handleTopLevelDragEnd = (event) => {
      const { active, over } = event;
      if (over && active.id !== over.id) {
        const activeIndex = topLevelItems.findIndex((item) => item.id === active.id);
        const overIndex = topLevelItems.findIndex((item) => item.id === over.id);
        if (activeIndex !== -1 && overIndex !== -1) {
          const newTopLevelItems = arrayMove(topLevelItems, activeIndex, overIndex);
          onReorder([...newTopLevelItems, ...items2.filter((item) => {
            var _a2;
            return (_a2 = item.meta) == null ? void 0 : _a2.parent;
          })]);
        }
      }
      setDraggedItem(null);
    };
    const handleTopLevelDragStart = (event) => {
      const { active } = event;
      const draggedItem2 = topLevelItems.find((item) => item.id === active.id);
      if (draggedItem2) {
        setDraggedItem(draggedItem2);
      }
    };
    return /* @__PURE__ */ jsxs(
      DndContext,
      {
        sensors,
        collisionDetection: closestCenter,
        onDragStart: handleTopLevelDragStart,
        onDragEnd: handleTopLevelDragEnd,
        modifiers: [restrictToVerticalAxis],
        children: [
          /* @__PURE__ */ jsx(SortableContext, { items: topLevelIds, strategy: verticalListSortingStrategy, children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: topLevelItems.map((item) => /* @__PURE__ */ jsx(
            TopLevelMenuItem,
            {
              item,
              onEdit: onEditMenu,
              onDelete: onDeleteMenu,
              onToggle: handleToggle,
              expanded: expandedItems.has(item.id),
              onToggleActive,
              expandedItems,
              onReorder,
              allItems: items2
            },
            item.id
          )) }) }),
          /* @__PURE__ */ jsx(DragOverlay, { adjustScale: false, dropAnimation: null, children: draggedItem && /* @__PURE__ */ jsx(
            MenuItem,
            {
              item: draggedItem,
              onEdit: onEditMenu,
              onDelete: onDeleteMenu,
              onToggle: handleToggle,
              expanded: false,
              dragHandle: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8 cursor-grab", children: /* @__PURE__ */ jsx(GripVertical, { className: "h-4 w-4" }) }),
              onToggleActive
            }
          ) })
        ]
      }
    );
  }, [expandedItems, handleToggle, items2, onDeleteMenu, onEditMenu, onReorder, onToggleActive, sensors, draggedItem]);
  return renderTopLevelMenus();
}
function MenuItem({ item, onEdit, onDelete, onToggle, expanded, dragHandle, onToggleActive }) {
  var _a2;
  const hasChildren = item.children && item.children.length > 0;
  const { data: editPermission } = useCan({
    resource: EnumResource.menu,
    action: EnumAction.edit
  });
  const { data: deletePermission } = useCan({
    resource: EnumResource.menu,
    action: EnumAction.delete
  });
  return /* @__PURE__ */ jsx(Card, { className: cn("overflow-hidden border transition-all", !item.isActive && "border-dashed opacity-70"), children: /* @__PURE__ */ jsx(CardHeader, { className: "p-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      hasChildren && /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8", onClick: () => onToggle(item.id), children: expanded ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 text-green-500" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxs("div", { className: "ml-2 flex items-center gap-2", children: [
        ((_a2 = item.meta) == null ? void 0 : _a2.icon) && /* @__PURE__ */ jsx(DynamicIcon, { name: item.meta.icon, className: "text-muted-foreground h-4 w-4" }),
        /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
          t(`menus.${item.name}`, item.title || "?"),
          " - ",
          item.name
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      onToggleActive && /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [
        /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          Switch,
          {
            id: `active-${item.id}`,
            checked: item.isActive !== false,
            onCheckedChange: (checked) => onToggleActive(item, checked),
            disabled: !(editPermission == null ? void 0 : editPermission.can) || cannotDisableMenus.includes(item.name)
          }
        ) }) }),
        /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: t("buttons.activeToggle") }) })
      ] }) }),
      /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [
        /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            className: "h-8 w-8",
            onClick: () => onEdit(item),
            disabled: !(editPermission == null ? void 0 : editPermission.can),
            children: /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4" })
          }
        ) }),
        /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: t("buttons.edit") }) })
      ] }) }),
      onDelete && /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [
        /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            className: "h-8 w-8",
            onClick: () => onDelete(item),
            disabled: !(deletePermission == null ? void 0 : deletePermission.can) || cannotDisableMenus.includes(item.name),
            children: /* @__PURE__ */ jsx(Trash2, { className: "text-destructive h-4 w-4" })
          }
        ) }),
        /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: t("buttons.delete") }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: cn(!(editPermission == null ? void 0 : editPermission.can) && "pointer-events-none opacity-50"), children: dragHandle })
    ] })
  ] }) }) });
}
function TopLevelMenuItem({
  item,
  onEdit,
  onDelete,
  onToggle,
  expanded,
  onToggleActive,
  expandedItems,
  onReorder,
  allItems
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id
  });
  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : void 0,
    transition
  };
  const dragHandle = /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8 cursor-grab", ...attributes, ...listeners, children: /* @__PURE__ */ jsx(GripVertical, { className: "h-4 w-4" }) });
  return /* @__PURE__ */ jsxs("div", { ref: setNodeRef, style, className: cn(isDragging && "opacity-50"), children: [
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        item,
        onEdit,
        onDelete,
        onToggle,
        expanded,
        dragHandle,
        onToggleActive
      }
    ),
    expanded && item.children && item.children.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-2 ml-7 space-y-2 border-l pl-4", children: /* @__PURE__ */ jsx(
      SubMenuContainer,
      {
        parentId: item.id,
        items: item.children,
        onEdit,
        onDelete,
        onToggle,
        expandedItems,
        onToggleActive,
        onReorder,
        allItems
      }
    ) })
  ] });
}
function SubMenuContainer({
  parentId,
  items: items2,
  onEdit,
  onDelete,
  onToggle,
  expandedItems,
  onToggleActive,
  onReorder,
  allItems
}) {
  const [draggedItem, setDraggedItem] = useState(null);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5
      }
    })
  );
  const childrenIds = useMemo(() => items2.map((item) => item.id), [items2]);
  const handleDragStart = useCallback(
    (event) => {
      const { active } = event;
      const foundItem = items2.find((item) => item.id === active.id);
      if (foundItem) {
        setDraggedItem(foundItem);
      }
    },
    [items2]
  );
  const handleDragEnd = useCallback(
    (event) => {
      const { active, over } = event;
      if (over && active.id !== over.id) {
        const activeIndex = items2.findIndex((item) => item.id === active.id);
        const overIndex = items2.findIndex((item) => item.id === over.id);
        if (activeIndex !== -1 && overIndex !== -1) {
          const newItems = arrayMove(items2, activeIndex, overIndex);
          const updatedAllItems = [...allItems];
          const updateChildrenInMenuTree = (menuItems, parentId2, newChildren) => {
            for (let i = 0; i < menuItems.length; i++) {
              if (menuItems[i].id === parentId2) {
                menuItems[i] = { ...menuItems[i], children: [...newChildren] };
                return true;
              }
              if (menuItems[i].children) {
                if (updateChildrenInMenuTree(menuItems[i].children || [], parentId2, newChildren)) {
                  return true;
                }
              }
            }
            return false;
          };
          updateChildrenInMenuTree(updatedAllItems, parentId, newItems);
          onReorder(updatedAllItems);
        }
      }
      setDraggedItem(null);
    },
    [items2, allItems, onReorder, parentId]
  );
  const renderSubMenuItem = useCallback(
    (subItem) => {
      const hasChildren = subItem.children && subItem.children.length > 0;
      const isExpanded = expandedItems.has(subItem.id);
      return /* @__PURE__ */ jsx(
        SortableSubMenuItem,
        {
          item: subItem,
          onEdit,
          onDelete,
          onToggle,
          expanded: isExpanded,
          onToggleActive,
          expandedItems,
          children: hasChildren && isExpanded && /* @__PURE__ */ jsx("div", { className: "mt-2 ml-7 space-y-2 border-l pl-4", children: /* @__PURE__ */ jsx(
            SubMenuContainer,
            {
              parentId: subItem.id,
              items: subItem.children || [],
              onEdit,
              onDelete,
              onToggle,
              expandedItems,
              onToggleActive,
              onReorder,
              allItems
            }
          ) })
        },
        subItem.id
      );
    },
    [expandedItems, onDelete, onEdit, onReorder, onToggle, onToggleActive, allItems]
  );
  return /* @__PURE__ */ jsxs(
    DndContext,
    {
      sensors,
      collisionDetection: closestCenter,
      onDragStart: handleDragStart,
      onDragEnd: handleDragEnd,
      modifiers: [restrictToVerticalAxis],
      children: [
        /* @__PURE__ */ jsx(SortableContext, { items: childrenIds, strategy: verticalListSortingStrategy, children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: items2.map((item) => renderSubMenuItem(item)) }) }),
        /* @__PURE__ */ jsx(DragOverlay, { children: draggedItem && /* @__PURE__ */ jsx(
          SortableSubMenuItem,
          {
            item: draggedItem,
            onEdit,
            onDelete,
            onToggle,
            expanded: expandedItems.has(draggedItem.id),
            onToggleActive,
            expandedItems
          }
        ) })
      ]
    }
  );
}
function SortableSubMenuItem({
  item,
  onEdit,
  onDelete,
  onToggle,
  expanded,
  onToggleActive,
  children
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id
  });
  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : void 0,
    transition
  };
  const dragHandle = /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8 cursor-grab", ...attributes, ...listeners, children: /* @__PURE__ */ jsx(GripVertical, { className: "h-4 w-4" }) });
  return /* @__PURE__ */ jsxs("div", { ref: setNodeRef, style, className: cn(isDragging && "opacity-50"), children: [
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        item,
        onEdit,
        onDelete,
        onToggle,
        expanded,
        dragHandle,
        onToggleActive
      }
    ),
    children
  ] });
}
async function loader$b(_) {
  try {
    const menus = await getMenus();
    return data$1({ menus });
  } catch (error) {
    console.error("获取菜单列表失败:", error);
    return data$1({ error: "获取菜单列表失败" }, { status: 500 });
  }
}
async function action$9({ request }) {
  try {
    const formData = await request.formData();
    const action2 = formData.get("action");
    if (action2 === "updateOrder") {
      const updatesJson = formData.get("updates");
      const updates = JSON.parse(updatesJson);
      await updateMenuOrder(updates);
      return data$1({ success: true });
    }
    if (action2 === "updateParent") {
      const updateJson = formData.get("update");
      const update = JSON.parse(updateJson);
      await updateMenuParent(update);
      return data$1({ success: true });
    }
    if (action2 === "toggleActive") {
      const id = formData.get("id");
      const name = formData.get("name");
      const isActive = formData.get("isActive") === "true";
      await updateMenu({ id, name, isActive });
      return data$1({ success: true });
    }
    if (action2 === "create") {
      const menuJson = formData.get("menu");
      const menuData = JSON.parse(menuJson);
      const menu = await createMenu(menuData);
      return data$1({ menu });
    }
    if (action2 === "update") {
      const menuJson = formData.get("menu");
      const menuData = JSON.parse(menuJson);
      const menu = await updateMenu(menuData);
      return data$1({ menu });
    }
    if (action2 === "delete") {
      const id = formData.get("id");
      await deleteMenu(id);
      return data$1({ success: true });
    }
    return data$1({ error: "无效的操作" }, { status: 400 });
  } catch (error) {
    console.error("菜单操作失败,", error);
    return data$1({ error: error instanceof Error ? error.message : "操作失败" }, { status: 500 });
  }
}
function MenuPage() {
  var _a2, _b;
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const menus = useMemo(() => {
    return "menus" in loaderData ? loaderData.menus : [];
  }, [loaderData]);
  const submit = useSubmit();
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [menuTree, setMenuTree] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { data: createPermission } = useCan({
    resource: EnumResource.menu,
    action: EnumAction.create
  });
  useEffect(() => {
    if (!menus.length) return;
    const buildMenuTree = (menuItems) => {
      const buildTree = (parentName, level) => {
        const children = menuItems.filter((menu) => {
          var _a3, _b2;
          if (level === 0) {
            return !((_a3 = menu.meta) == null ? void 0 : _a3.parent);
          }
          return ((_b2 = menu.meta) == null ? void 0 : _b2.parent) === parentName;
        });
        return children.map((menu) => {
          const item = {
            ...menu,
            level,
            children: buildTree(menu.name, level + 1)
          };
          return item;
        });
      };
      return buildTree(null, 0);
    };
    setMenuTree(buildMenuTree(menus));
    setIsLoading(false);
  }, [menus]);
  useEffect(() => {
    if (actionData) {
      if (actionData.error) {
        toast.error("菜单操作失败", { description: actionData.error });
      } else if (actionData.success) {
        toast.success("菜单操作成功");
      }
    }
  }, [actionData]);
  const handleReorder = useCallback(
    async (items2) => {
      const getAllItems = (treeItems) => {
        const result = [];
        treeItems.forEach((item, index) => {
          result.push({
            ...item,
            order: index
          });
          if (item.children && item.children.length > 0) {
            result.push(...getAllItems(item.children));
          }
        });
        return result;
      };
      const allItems = getAllItems(items2);
      try {
        const updates = allItems.map((item) => ({
          id: item.id,
          order: item.order || 0
        }));
        const formData = new FormData();
        formData.append("action", "updateOrder");
        formData.append("updates", JSON.stringify(updates));
        submit(formData, { method: "post" });
        setMenuTree(items2);
      } catch (error) {
        console.error("更新菜单排序失败", error);
        toast.error(`更新失败: ${error instanceof Error ? error.message : "未知错误"}`);
      }
    },
    [submit]
  );
  const handleEditMenu = useCallback((menu) => {
    setSelectedMenu(menu);
    setOpen(true);
  }, []);
  const handleAddMenu = useCallback(() => {
    setSelectedMenu(null);
    setOpen(true);
  }, []);
  const [deleteAlert, setDeleteAlert] = useState({
    isOpen: false,
    menu: null
  });
  const openDeleteAlert = useCallback((menu) => {
    setDeleteAlert({ isOpen: true, menu });
  }, []);
  const closeDeleteAlert = useCallback(() => {
    setDeleteAlert({ isOpen: false, menu: null });
  }, []);
  const handleDeleteMenu = useCallback(() => {
    const { menu } = deleteAlert;
    if (!menu) return;
    const formData = new FormData();
    formData.append("action", "delete");
    formData.append("id", menu.id);
    submit(formData, { method: "post" });
    closeDeleteAlert();
  }, [deleteAlert, submit, closeDeleteAlert]);
  const handleDialogSuccess = useCallback(() => {
    setOpen(false);
    setSelectedMenu(null);
  }, []);
  const handleSaveMenu = useCallback(
    (menuData) => {
      const formData = new FormData();
      if (menuData.id) {
        formData.append("action", "update");
      } else {
        formData.append("action", "create");
      }
      formData.append("menu", JSON.stringify(menuData));
      submit(formData, { method: "post" });
      setOpen(false);
      setSelectedMenu(null);
    },
    [submit]
  );
  const handleToggleActive = useCallback(
    (menu, isActive) => {
      const formData = new FormData();
      formData.append("action", "toggleActive");
      formData.append("id", menu.id);
      formData.append("name", menu.name);
      formData.append("isActive", String(isActive));
      submit(formData, { method: "post" });
    },
    [submit]
  );
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col px-8 pt-8 pb-4", children: [
    /* @__PURE__ */ jsxs(H2, { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("span", { children: "菜单管理" }),
      /* @__PURE__ */ jsxs(Button, { onClick: handleAddMenu, disabled: !(createPermission == null ? void 0 : createPermission.can), children: [
        /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
        "添加菜单"
      ] })
    ] }),
    isLoading ? /* @__PURE__ */ jsx("div", { className: "flex size-full justify-center", children: /* @__PURE__ */ jsx("div", { className: "flex w-20", children: /* @__PURE__ */ jsx(Loader, {}) }) }) : /* @__PURE__ */ jsx("div", { className: "space-y-4", children: menuTree.length === 0 ? /* @__PURE__ */ jsx("div", { className: "text-muted-foreground py-8 text-center", children: "暂无菜单，请点击右上角添加菜单按钮创建" }) : /* @__PURE__ */ jsx(
      MenuTree,
      {
        items: menuTree,
        onReorder: handleReorder,
        onEditMenu: handleEditMenu,
        onDeleteMenu: openDeleteAlert,
        onToggleActive: handleToggleActive
      }
    ) }),
    /* @__PURE__ */ jsx(
      MenuDialog,
      {
        open,
        onOpenChange: setOpen,
        onClose: () => setOpen(false),
        onSuccess: handleDialogSuccess,
        onSave: handleSaveMenu,
        menu: selectedMenu,
        menus
      }
    ),
    /* @__PURE__ */ jsx(AlertDialog, { open: deleteAlert.isOpen, onOpenChange: (isOpen) => !isOpen && closeDeleteAlert(), children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsx(AlertDialogTitle, { children: "确认删除菜单" }),
        /* @__PURE__ */ jsxs(AlertDialogDescription, { children: [
          "确定要删除菜单“",
          ((_a2 = deleteAlert.menu) == null ? void 0 : _a2.title) || ((_b = deleteAlert.menu) == null ? void 0 : _b.name),
          "”吗？此操作不可撤销。"
        ] })
      ] }),
      /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsx(AlertDialogCancel, { children: "取消" }),
        /* @__PURE__ */ jsx(AlertDialogAction, { onClick: handleDeleteMenu, variant: "destructive", children: "确认删除" })
      ] })
    ] }) })
  ] });
}
const route51 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$9,
  default: MenuPage,
  loader: loader$b
}, Symbol.toStringTag, { value: "Module" }));
const meta$2 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
async function loader$a({ request }) {
  const tableParams = parseTableParams(new URL(request.url).search);
  const include = {
    operatedBy: { select: { name: true, avatar: true } }
  };
  const args = {
    ...buildTableParams(tableParams),
    orderBy: { updatedAt: "desc" },
    include
  };
  const res = await dataService.findMany("log", args, { request });
  return { initialData: res, include };
}
function LogIndex() {
  const { initialData, include } = useLoaderData();
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
    TableEasy,
    {
      enableSorting: true,
      enableFilters: true,
      enableHiding: true,
      toolbar: [/* @__PURE__ */ jsx(ExportButton, {}, "export")],
      initialState: {
        sorting: [
          {
            id: "updatedAt",
            desc: true
          }
        ]
      },
      refineCoreProps: {
        queryOptions: { initialData },
        meta: {
          include
        }
      },
      children: [
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            accessorKey: "id",
            id: "id",
            header: ({ table }) => /* @__PURE__ */ jsx(TableEasy.CheckAll, { table, options: [bulkDeleteAction(table)] }),
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
          TableEasy.Column,
          {
            header: "Resource",
            accessorKey: "resource",
            id: "resource",
            meta: {
              filterOperator: "contains"
            },
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search Resource" }),
            cell: ({ row: { index, original }, table }) => {
              var _a2;
              const pageIndex = table.getState().pagination.pageIndex;
              const pageSize = table.getState().pagination.pageSize;
              return /* @__PURE__ */ jsxs(ShowButton, { recordItemId: original.id, asChild: true, children: [
                /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground inline-block min-w-6", children: [
                  pageIndex * pageSize + index + 1,
                  ". "
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "py-3 capitalize underline-offset-2 hover:text-green-600 hover:underline", children: [
                  (_a2 = original.meta) == null ? void 0 : _a2.parent,
                  ".",
                  original.resource
                ] })
              ] });
            }
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "Type",
            accessorKey: "action",
            id: "action",
            enableSorting: true,
            enableHiding: true,
            cell: ({ row: { original } }) => {
              var _a2, _b;
              const ids = (_a2 = original.meta) == null ? void 0 : _a2.ids;
              return /* @__PURE__ */ jsxs(Badge, { variant: (_b = LOG_STATUS_MAP[original.action]) == null ? void 0 : _b.badge, children: [
                original.action,
                (ids == null ? void 0 : ids.length) > 1 ? ` x${ids.length}` : ""
              ] });
            },
            filter: (props) => /* @__PURE__ */ jsx(
              TableEasy.Filter.Radio,
              {
                ...props,
                options: LOG_STATUS_LIST.map((key) => ({
                  label: key,
                  value: key
                }))
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "CreatedAt",
            accessorKey: "createdAt",
            id: "createdAt",
            enableSorting: true,
            enableHiding: true,
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.DateRangePicker, { ...props, align: "end" }),
            cell: ({ row: { original } }) => dayjs(original.createdAt).format("YYYY-MM-DD HH:mm:ss")
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
          {
            header: "OperatedBy",
            accessorKey: "operatedBy.name",
            id: "operatedBy.name",
            enableHiding: true,
            meta: {
              filterOperator: "contains"
            },
            filter: (props) => /* @__PURE__ */ jsx(TableEasy.Filter.Search, { ...props, title: "Search OperatedBy" }),
            cell: useCallback(
              ({ row: { original } }) => {
                var _a2, _b, _c, _d, _e;
                return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxs(Avatar, { className: "size-6", children: [
                    /* @__PURE__ */ jsx(AvatarImage, { src: (_a2 = original.operatedBy) == null ? void 0 : _a2.avatar, alt: ((_b = original.operatedBy) == null ? void 0 : _b.name) || "" }),
                    /* @__PURE__ */ jsx(AvatarFallback, { children: (_d = (_c = original.operatedBy) == null ? void 0 : _c.name) == null ? void 0 : _d.slice(0, 1).toUpperCase() })
                  ] }),
                  /* @__PURE__ */ jsx("span", { children: (_e = original.operatedBy) == null ? void 0 : _e.name })
                ] });
              },
              []
            )
          }
        ),
        /* @__PURE__ */ jsx(
          TableEasy.Column,
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
function ErrorBoundary() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route52 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  default: LogIndex,
  loader: loader$a,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
async function action$8({ request }) {
  var _a2;
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }
  try {
    const formData = await request.formData();
    const nextRole = formData.get("role");
    if (!nextRole) {
      throw new Error("Role is required");
    }
    const { user, session } = await requireUser(request);
    if (!((_a2 = user.roles) == null ? void 0 : _a2.includes(nextRole))) {
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
const route53 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$8
}, Symbol.toStringTag, { value: "Module" }));
const getRequestData = async (request) => {
  const contentType = request.headers.get("content-type");
  let data2;
  if (contentType == null ? void 0 : contentType.includes("application/json")) {
    data2 = await request.json();
  } else if ((contentType == null ? void 0 : contentType.includes("application/x-www-form-urlencoded")) || (contentType == null ? void 0 : contentType.includes("multipart/form-data"))) {
    const formData = await request.formData();
    data2 = Object.fromEntries(formData);
  } else {
    const text = await request.text();
    try {
      data2 = JSON.parse(text);
    } catch {
      data2 = { value: text };
    }
  }
  return data2;
};
async function loader$9() {
  return Response.json({ message: "不支持的请求方法" }, { status: 405 });
}
async function action$7({ request, params }) {
  let auditRecord = null;
  let entity = null;
  let dataPrevious = null;
  const requestParams = await getRequestData(request);
  const { func } = params;
  try {
    const { param, contentJson } = requestParams || [];
    ["param", "contentJson"].forEach((key) => {
      if (!requestParams[key]) {
        throw new Error(`参数缺失: ${key}`);
      }
    });
    const contentJsonObject = JSON.parse(contentJson);
    ["auditRecordId", "action"].forEach((key) => {
      if (!contentJsonObject[key]) {
        throw new Error(`参数缺失: ${key}`);
      }
    });
    const { auditRecordId, action: actionType } = contentJsonObject;
    auditRecord = await db.auditRecord.findUnique({
      where: { id: auditRecordId }
    });
    if (!auditRecord) {
      return Response.json({ message: `审核记录 \`${param}\` 不存在` }, { status: 404 });
    }
    const { resource, status, operatedById, data: data2, meta: meta2, title: title2, action: action2 } = auditRecord;
    if (title2 !== param) {
      throw new Error(`审核记录配置项不匹配，\`${param}\` != \`${title2}\``);
    }
    if (action2 !== actionType) {
      throw new Error(`审核记录配置项不匹配，\`${actionType}\` != \`${action2}\``);
    }
    if (![EnumAuditStatus.PENDING, EnumAuditStatus.FAILED].includes(status)) {
      return Response.json({ message: `审核记录 \`${param}\` 状态异常: ${status}` }, { status: 400 });
    }
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource];
    const { id } = meta2;
    if (id) {
      entity = await prismaModel.findUnique({
        where: { id }
      });
      if (!entity) {
        throw new Error(`配置 \`${param}\` 不存在`);
      }
      dataPrevious = pick(entity, Object.keys(data2 || {}));
    }
    if (func === "queryOldData") {
      return Response.json({ success: true, contentJson: JSON.stringify(dataPrevious || "{}") }, { status: 200 });
    } else if (func === "execute") {
      await dbExecute({
        auditRecordId,
        resource,
        actionType,
        data: data2,
        dataPrevious,
        id,
        operatedById,
        prismaModel
      });
      return Response.json({ success: true }, { status: 200 });
    } else {
      return Response.json({ message: `不支持的请求方法: ${func}` }, { status: 405 });
    }
  } catch (error) {
    if (auditRecord && func === "execute") {
      await db.auditRecord.update({
        where: { id: auditRecord.id },
        data: {
          status: EnumAuditStatus.FAILED,
          error: error == null ? void 0 : error.message
        }
      });
    }
    return Response.json({ ...error, message: error == null ? void 0 : error.message }, { status: 500 });
  }
}
async function dbExecute({
  auditRecordId,
  resource,
  actionType,
  data: data2,
  dataPrevious,
  id,
  operatedById,
  prismaModel
}) {
  try {
    if (!operatedById) {
      throw new Error(`invalid operatedById: ${operatedById}`);
    }
    const paramsOperatedBy = {
      operatedBy: {
        connect: {
          id: operatedById
        }
      }
    };
    const paramsEntity = {
      ...data2,
      ...paramsOperatedBy
    };
    const paramsAuditLog = {
      meta: { id, dataProviderName: "default", parent: "frontRoute" },
      resource,
      ...paramsOperatedBy
    };
    if (actionType === EnumLogType.create) {
      await prismaModel.create({
        data: paramsEntity
      });
      await db.log.create({
        data: {
          ...paramsAuditLog,
          action: EnumLogType.create,
          data: JSON.stringify(data2)
        }
      });
    } else if (actionType === EnumLogType.update) {
      if (!id) {
        throw new Error(`invalid id: ${id}`);
      }
      await prismaModel.update({
        where: {
          id
        },
        data: paramsEntity
      });
      await db.log.create({
        data: {
          ...paramsAuditLog,
          action: EnumLogType.update,
          data: data2,
          dataPrevious
        }
      });
    } else if (actionType === EnumLogType.delete) {
      if (!id) {
        throw new Error(`invalid id: ${id}`);
      }
      await prismaModel.delete({
        where: {
          id
        }
      });
      await db.log.create({
        data: {
          ...paramsAuditLog,
          action: EnumLogType.delete
        }
      });
    } else {
      throw new Error(`invalid actionType: ${actionType}`);
    }
    await db.auditRecord.update({
      where: {
        id: auditRecordId
      },
      data: {
        status: EnumAuditStatus.RESOLVED,
        error: null
      }
    });
  } catch (error) {
    throw handlePrismaError(error);
  }
}
const route54 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$7,
  loader: loader$9
}, Symbol.toStringTag, { value: "Module" }));
const action$6 = async ({ request }) => {
  try {
    const data2 = await getRequestData(request);
    return Response.json(
      { data: data2 },
      {
        headers: {
          "Set-Cookie": await getPreferencesNextCookie(request, data2)
        }
      }
    );
  } catch (error) {
    console.error("处理偏好设置请求时出错：", error);
    return Response.json({ error: "处理请求失败" }, { status: 400 });
  }
};
const route55 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$6
}, Symbol.toStringTag, { value: "Module" }));
async function loader$8({ request, params }) {
  try {
    const { model, action: action2 } = params;
    if (!model || !action2) {
      return Response.json({ message: "model 和 action 参数都是必需的" }, { status: 400 });
    }
    if (!isPrismaModel(model)) {
      return Response.json({ message: `不支持的模型: ${model}` }, { status: 400 });
    }
    const validReadActions = ["findMany", "findFirst", "findUnique", "count"];
    if (!validReadActions.includes(action2)) {
      return Response.json({ message: `不支持的查询操作: ${action2}` }, { status: 400 });
    }
    if (!isValidDataServiceAction(action2)) {
      return Response.json({ message: `dataService 不支持的操作: ${action2}` }, { status: 400 });
    }
    const signatureValid = await validateRequestSignature(request);
    if (!signatureValid) {
      return Response.json({ message: "请求签名无效" }, { status: 401 });
    }
    const { user } = await requireUser(request);
    const queryParams = getQueryParamsFromRequest(request);
    const result = await dataService[action2](model, queryParams, { user });
    const serializedResponse = serializeResponse(result);
    return Response.json(serializedResponse);
  } catch (error) {
    return Response.json({ ...error, message: error == null ? void 0 : error.message }, { status: 500 });
  }
}
async function action$5({ request, params }) {
  try {
    const { model, action: action2 } = params;
    if (!model || !action2) {
      return Response.json({ message: "model 和 action 参数都是必需的" }, { status: 400 });
    }
    if (!isPrismaModel(model)) {
      return Response.json({ message: `不支持的模型: ${model}` }, { status: 400 });
    }
    const validWriteActions = ["create", "createMany", "update", "updateMany", "delete", "deleteMany"];
    if (!validWriteActions.includes(action2)) {
      return Response.json({ message: `不支持的写入操作: ${action2}` }, { status: 400 });
    }
    if (!isValidDataServiceAction(action2)) {
      return Response.json({ message: `dataService 不支持的操作: ${action2}` }, { status: 400 });
    }
    const signatureValid = await validateRequestSignature(request);
    if (!signatureValid) {
      return Response.json({ message: "请求签名无效" }, { status: 401 });
    }
    const { user } = await requireUser(request);
    const requestBody = await getBodyFromRequest(request);
    const result = await dataService[action2](model, requestBody, { user });
    const serializedResponse = serializeResponse(result);
    return Response.json(serializedResponse);
  } catch (error) {
    return Response.json({ ...error, message: error == null ? void 0 : error.message }, { status: 500 });
  }
}
const route56 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$5,
  loader: loader$8
}, Symbol.toStringTag, { value: "Module" }));
const ASSETS_ROOT = "assets";
const loader$7 = async ({ params, request }) => {
  const { src, width, height, fit } = extractParams(params, request);
  try {
    const readStream = readFileAsStream(src);
    return streamingResize(readStream, width, height, fit);
  } catch (error) {
    return handleError(error);
  }
};
function extractParams(params, request) {
  const src = params["*"];
  const searchParams = new URL(request.url).searchParams;
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
const route57 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$7
}, Symbol.toStringTag, { value: "Module" }));
const loader$6 = async ({ request, params }) => {
  const mergedParams = await getAllParams(request, params);
  const session = await getSession(request.headers.get("Cookie"));
  return redirect$1(`/login?redirectTo=${mergedParams.redirectTo || dashboardResource}`, {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};
const route58 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$6
}, Symbol.toStringTag, { value: "Module" }));
function PasswordForgot() {
  return /* @__PURE__ */ jsx("p", { children: "PasswordForgot" });
}
const route59 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PasswordForgot
}, Symbol.toStringTag, { value: "Module" }));
function PasswordUpdate() {
  return /* @__PURE__ */ jsx("p", { children: "PasswordUpdate" });
}
const route60 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PasswordUpdate
}, Symbol.toStringTag, { value: "Module" }));
async function sendVerificationEmail(_to, _code) {
  return true;
}
const action$4 = async ({ request }) => {
  if (request.method !== "POST") {
    return data$1({ error: "Method not allowed" }, { status: 405 });
  }
  try {
    const { email } = await request.json();
    if (!email) {
      return Response.json({ error: "请提供邮箱地址" }, { status: 400 });
    }
    const verificationCode = Math.floor(1e5 + Math.random() * 9e5).toString();
    await sendVerificationEmail(email, verificationCode);
    return Response.json({ success: true, verificationCode }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "发送验证码失败" }, { status: 500 });
  }
};
const route61 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$4
}, Symbol.toStringTag, { value: "Module" }));
async function loader$5({ request }) {
  var _a2;
  try {
    const signatureValid = await validateRequestSignature(request);
    if (!signatureValid) {
      return Response.json({ message: "请求签名无效" }, { status: 401 });
    }
    const { user } = await requireUser(request);
    const url = new URL(request.url);
    const resource = url.searchParams.get("resource");
    const startDate = url.searchParams.get("startDate");
    const endDate = url.searchParams.get("endDate");
    const fields = ((_a2 = url.searchParams.get("fields")) == null ? void 0 : _a2.split(",")) || [];
    const aggregationType = url.searchParams.get("aggregationType") || "sum";
    if (!resource) {
      throw new Error("resource is required");
    }
    if (!startDate || !endDate) {
      throw new Error("startDate and endDate are required");
    }
    if (fields.length === 0) {
      throw new Error("fields is required");
    }
    const subject = user.role || "unknown";
    const object = resource;
    const action2 = "list";
    const hasPermission = await checkPermission(subject, object, action2);
    if (!hasPermission) {
      return Response.json({ message: `你没有权限访问 ${resource}`, subject, object, action: action2 }, { status: 403 });
    }
    const data2 = await getAggregatedDataByDay({
      resource,
      startDate,
      endDate,
      fields,
      aggregationType
    });
    return Response.json({ data: data2 });
  } catch (error) {
    return Response.json({ ...error, message: error == null ? void 0 : error.message }, { status: 500 });
  }
}
async function getAggregatedDataByDay({
  resource,
  startDate,
  endDate,
  fields,
  aggregationType
}) {
  const dateRange = generateDateRange(new Date(startDate), new Date(endDate));
  const formattedDateRange = dateRange.map((date) => date.toISOString().split("T")[0]);
  const result = formattedDateRange.map((date) => ({
    date,
    ...fields.reduce((acc, field) => ({ ...acc, [field]: 0 }), {})
  }));
  try {
    const rawResults = await executeAggregationQuery(resource, startDate, endDate, fields, aggregationType);
    rawResults.forEach((item) => {
      const dateStr = item.date.toISOString().split("T")[0];
      const resultIndex = result.findIndex((r) => r.date === dateStr);
      if (resultIndex !== -1) {
        fields.forEach((field) => {
          if (item[field] !== void 0) {
            result[resultIndex][field] = Number(item[field]) || 0;
          }
        });
      }
    });
    return result;
  } catch (error) {
    console.error("Error aggregating data:", error);
    throw error;
  }
}
function generateDateRange(startDate, endDate) {
  const dates = [];
  const currentDate = new Date(startDate);
  currentDate.setHours(0, 0, 0, 0);
  const end = new Date(endDate);
  end.setHours(23, 59, 59, 999);
  while (currentDate <= end) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}
async function executeAggregationQuery(resource, startDate, endDate, fields, aggregationType) {
  const selectFields = fields.map((field) => {
    switch (aggregationType) {
      case "sum":
        return Prisma.sql`SUM("${Prisma.raw(field)}") as "${Prisma.raw(field)}"`;
      case "avg":
        return Prisma.sql`AVG("${Prisma.raw(field)}") as "${Prisma.raw(field)}"`;
      case "max":
        return Prisma.sql`MAX("${Prisma.raw(field)}") as "${Prisma.raw(field)}"`;
      case "min":
        return Prisma.sql`MIN("${Prisma.raw(field)}") as "${Prisma.raw(field)}"`;
      case "count":
        return Prisma.sql`COUNT("${Prisma.raw(field)}") as "${Prisma.raw(field)}"`;
      default:
        return Prisma.sql`SUM("${Prisma.raw(field)}") as "${Prisma.raw(field)}"`;
    }
  });
  const results = await db.$queryRaw`
    SELECT 
      DATE("createdAt") as date,
      ${Prisma.join(selectFields, ", ")}
    FROM "${Prisma.raw(resource)}"
    WHERE "createdAt" >= ${startDate}::timestamp
    AND "createdAt" <= ${endDate}::timestamp
    AND "deleted" IS NOT TRUE
    GROUP BY DATE("createdAt")
    ORDER BY DATE("createdAt")
  `;
  return results;
}
const route62 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$5
}, Symbol.toStringTag, { value: "Module" }));
async function loader$4() {
  return Response.json({ message: "不支持的请求方法" }, { status: 405 });
}
async function action$3({ request, params }) {
  try {
    const signatureValid = await validateRequestSignature(request);
    if (!signatureValid) {
      return Response.json({ message: "请求签名无效" }, { status: 401 });
    }
    const { user } = await requireUser(request);
    const { func } = params;
    const requestParams = await getRequestData(request);
    const { operateType, param, id, resource, data: data2, dataPrevious, contentJsonObject } = requestParams;
    if (!contentJsonObject) {
      requestParams.contentJsonObject = {};
    }
    const apiFunc = tyServer[func];
    if (!apiFunc) {
      throw new Error(`函数 \`${func}\` 不存在`);
    }
    if (func === "getMyIssues") {
      const res2 = await tyServer.getMyIssues(request);
      return Response.json({ data: res2 }, { status: 200 });
    } else if (func === "deployServiceHistory") {
      const res2 = await tyServer.deployServiceHistory(request, { param });
      return Response.json({ data: res2 }, { status: 200 });
    }
    if (!resource || !isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource];
    if (operateType === OperateTypeEnum.ADD) {
      const exist = await prismaModel.findUnique({
        where: { title: data2 == null ? void 0 : data2.title }
      });
      if (exist) {
        throw new Error(`\`${data2 == null ? void 0 : data2.title}\` already exist`);
      }
    } else {
      const exist = await prismaModel.findUnique({
        where: { id }
      });
      if (!exist) {
        throw new Error(`\`${id}\` not exist`);
      }
    }
    if (operateType === OperateTypeEnum.DELETE && resource === EnumResource.frontRouteProject) {
      const related = await db.frontRouteModule.count({
        where: {
          projectId: String(id)
        }
      });
      if (related > 0) {
        throw new Error(`存在与该项目关联的模块数据，不可删除`);
      }
    }
    let auditRecord = null;
    const actionTypeMap = {
      [OperateTypeEnum.ADD]: EnumLogType.create,
      [OperateTypeEnum.MODIFY]: EnumLogType.update,
      [OperateTypeEnum.DELETE]: EnumLogType.delete
    };
    const actionType = actionTypeMap[operateType];
    const isModify = operateType === OperateTypeEnum.MODIFY;
    const oldAuditRecord = await db.auditRecord.findFirst({
      where: { title: param }
    });
    auditRecord = await db.auditRecord.create({
      data: {
        channel: EnumAuditChannel.TIAN_YUAN,
        meta: { parent: "frontRoute", id },
        title: param,
        dataPrevious: isModify ? dataPrevious : void 0,
        resource: resource || "unknown",
        data: data2,
        status: EnumAuditStatus.PENDING,
        action: actionType,
        operatedBy: {
          connect: {
            id: user == null ? void 0 : user.id
          }
        }
      }
    });
    if (oldAuditRecord) {
      await db.auditRecord.delete({
        where: { id: oldAuditRecord.id }
      });
    }
    const props = pick(requestParams, ["operateType", "issueId", "contentJsonObject", "configType", "param"]);
    props.contentJsonObject.auditRecordId = auditRecord == null ? void 0 : auditRecord.id;
    props.contentJsonObject.action = actionType;
    if (props.operateType === OperateTypeEnum.ADD) {
      props.operateType = OperateTypeEnum.MODIFY;
    }
    const res = await apiFunc(request, props);
    return Response.json({ data: res }, { status: 200 });
  } catch (error) {
    return Response.json({ ...error, message: error == null ? void 0 : error.message }, { status: 500 });
  }
}
const route63 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$3,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
const loader$3 = async ({ request }) => {
  const user = await getUser(request);
  return Response.json({ data: user });
};
const route64 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$3
}, Symbol.toStringTag, { value: "Module" }));
async function loader$2({ request }) {
  try {
    const url = new URL(request.url);
    const resource = url.searchParams.get("resource");
    await db.$queryRaw`SELECT 1`;
    if (resource) {
      await dataService.findMany(resource, { skip: 0, take: 1 }, { request });
    }
    return Response.json({ status: "healthy", message: "服务正常" }, { status: 200 });
  } catch (error) {
    return Response.json({ status: "unhealthy", message: (error == null ? void 0 : error.message) || "服务异常" }, { status: 500 });
  }
}
const route65 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
function ApiDocs() {
  const iframeRef = useRef(null);
  useEffect(() => {
    const adjustIframeHeight = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height = "100vh";
      }
    };
    window.addEventListener("resize", adjustIframeHeight);
    adjustIframeHeight();
    return () => {
      window.removeEventListener("resize", adjustIframeHeight);
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { style: { width: "100%", height: "100vh", overflow: "hidden" }, children: /* @__PURE__ */ jsx(
    "iframe",
    {
      ref: iframeRef,
      src: "/redoc-static.html",
      style: {
        width: "100%",
        height: "100vh",
        border: "none"
      },
      title: "API 文档"
    }
  ) });
}
const route66 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ApiDocs
}, Symbol.toStringTag, { value: "Module" }));
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
    fetcher.submit({ redirectTo }, { method: "POST", action: `/api/auth/${EnumAuthProvider.TC_SHUKE}` });
  };
  return /* @__PURE__ */ jsx(
    Button,
    {
      type: "button",
      variant: "outline",
      className: "w-full border-green-500 text-green-500!",
      onClick: handleLogin,
      loading,
      children: t("pages.login.buttons.submitWithTcsk")
    }
  );
};
function RegisterForm() {
  var _a2, _b, _c, _d;
  const { errors: errors2 } = useActionData() || {};
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || dashboardResource;
  const navigation = useNavigation$1();
  const { open } = useNotification();
  const [isSending, setIsSending] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [email, setEmail] = useState("administrator@goodman.com");
  async function sendVerificationCode(email2) {
    setIsSending(true);
    try {
      const response = await fetch("/api/send-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email2 })
      });
      const data2 = await response.json();
      if (!response.ok) {
        throw new Error(data2.error || "发送验证码失败");
      }
      open == null ? void 0 : open({
        key: "register-email-sent",
        message: "验证码已发送",
        description: "请查看您的邮箱",
        type: "success"
      });
      setCountdown(60);
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1e3);
    } catch (error) {
      open == null ? void 0 : open({
        key: "register-email-sent",
        message: "Error",
        description: error instanceof Error ? error.message : "发送验证码失败",
        type: "error"
      });
    } finally {
      setIsSending(false);
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsxs(Form$1, { method: "post", children: [
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "redirectTo", value: redirectTo }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsxs(Link$1, { prefetch: "intent", viewTransition: true, to: "/", className: "flex flex-col items-center gap-2 font-medium", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-md", children: /* @__PURE__ */ jsx(GalleryVerticalEnd, { className: "size-6" }) }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Remix Inc." })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: t("pages.register.title") }),
          /* @__PURE__ */ jsxs("div", { className: "text-center text-sm", children: [
            t("pages.register.haveAccount"),
            /* @__PURE__ */ jsx(Link$1, { prefetch: "intent", viewTransition: true, to: "/login", replace: true, className: "underline underline-offset-4", children: t("pages.register.signin") })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: t("pages.register.fields.email") }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  name: "email",
                  id: "email",
                  type: "email",
                  placeholder: "Goodman@example.com",
                  required: true,
                  autoFocus: true,
                  autoComplete: "email",
                  value: email,
                  onChange: (e) => setEmail(e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  className: "h-9",
                  type: "button",
                  disabled: isSending || countdown > 0 || !email,
                  variant: "outline",
                  onClick: () => sendVerificationCode(email),
                  children: countdown > 0 ? `${countdown}s` : "Send Code"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(ErrorMessage, { error: (_a2 = errors2 == null ? void 0 : errors2.email) == null ? void 0 : _a2[0] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "code", children: t("pages.register.fields.validateCode") }),
            /* @__PURE__ */ jsx(Input, { name: "code", id: "code", type: "code", required: true, minLength: 8, maxLength: 6, defaultValue: "123456" }),
            /* @__PURE__ */ jsx(ErrorMessage, { error: (_b = errors2 == null ? void 0 : errors2.code) == null ? void 0 : _b[0] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: t("pages.register.fields.password") }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "password",
                id: "password",
                type: "password",
                required: true,
                autoComplete: "new-password",
                minLength: 8,
                maxLength: 32,
                defaultValue: "Abc@12345678"
              }
            ),
            /* @__PURE__ */ jsx(ErrorMessage, { error: (_c = errors2 == null ? void 0 : errors2.password) == null ? void 0 : _c[0] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", disabled: navigation.state === "submitting", children: t("pages.register.buttons.submit") }),
            /* @__PURE__ */ jsx(ErrorMessage, { error: (_d = errors2 == null ? void 0 : errors2.default) == null ? void 0 : _d[0] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t", children: /* @__PURE__ */ jsx("span", { className: "bg-background text-muted-foreground relative z-10 px-2", children: "or" }) }),
        /* @__PURE__ */ jsx(TcskOAuth2, { redirectTo })
      ] })
    ] }),
    /* @__PURE__ */ jsx(PrivacyPolicy, {})
  ] });
}
function typedFormError(error) {
  if (error instanceof z.ZodError) {
    return data$1({ errors: error.flatten().fieldErrors });
  } else if (error instanceof Error) {
    return data$1({ errors: { default: [(error == null ? void 0 : error.message) || "unknown error (500 Internal Server Error)"] } });
  } else {
    return data$1({ errors: error || { default: ["unknown error (500 Internal Server Error)"] } });
  }
}
const meta$1 = () => {
  return [{ title: "Register" }];
};
async function action$2({ request }) {
  try {
    const mergedParams = await getAllParams(request);
    const { email, password } = mergedParams;
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      throw { email: ["A user already exists with this email."] };
    }
    await createUser({ email, password, provider: EnumAuthProvider.USER_PASS });
    return redirect$1(`/login?email=${email}`);
  } catch (error) {
    return typedFormError(error);
  }
}
function Register() {
  return /* @__PURE__ */ jsx("div", { className: "bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm", children: /* @__PURE__ */ jsx(RegisterForm, {}) }) });
}
const route67 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$2,
  default: Register,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
async function action$1({ request }) {
  try {
    const signatureValid = await validateRequestSignature(request);
    if (!signatureValid) {
      return new Response(JSON.stringify({ message: "请求签名无效" }), { status: 401 });
    }
    await requireUser(request);
    const requestBody = await request.json();
    const { sql, filters, pagination, sorters } = requestBody;
    const db2 = await getEnhancedDb({ request });
    const parsedSql = parseSql(sql);
    const whereConditions = [];
    if (filters && filters.length > 0) {
      const conditions = getWhereConditions(filters, parsedSql.mainTableAlias);
      whereConditions.push(...conditions);
    }
    if (whereConditions.length > 0) {
      const filterClause = whereConditions.join(" AND ");
      if (parsedSql.hasWhere) {
        parsedSql.where = `(${parsedSql.where}) AND (${filterClause})`;
      } else {
        parsedSql.where = filterClause;
      }
    }
    if (sorters && sorters.length > 0) {
      const orderBy = sorters.map((sorter) => {
        const { field, order } = sorter;
        let fieldWithAlias = field;
        if (parsedSql.mainTableAlias && !field.includes(".")) {
          fieldWithAlias = `${parsedSql.mainTableAlias}."${field}"`;
        } else {
          fieldWithAlias = `"${field}"`;
        }
        return `${fieldWithAlias} ${order === "desc" ? "DESC" : "ASC"}`;
      }).join(", ");
      parsedSql.orderBy = orderBy;
      parsedSql.hasOrderBy = true;
    }
    if (pagination && pagination.mode !== "off") {
      const { current = 1, pageSize = 10 } = pagination;
      const offset = (current - 1) * pageSize;
      parsedSql.limit = String(pageSize);
      parsedSql.offset = String(offset);
    }
    const listSql = buildSql(parsedSql);
    const countSql = buildCountSql(parsedSql);
    const [data2, totalResult] = await Promise.all([db2.$queryRawUnsafe(listSql), db2.$queryRawUnsafe(countSql)]);
    const total = Array.isArray(totalResult) && totalResult.length > 0 ? Number(totalResult[0].count) : 0;
    return new Response(JSON.stringify({ data: data2, total }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: (error == null ? void 0 : error.message) || "执行自定义 SQL 查询失败", error }), {
      status: 500
    });
  }
}
function getWhereConditions(filters, mainTableAlias = "") {
  if (!filters) {
    return [];
  }
  const conditions = [];
  for (const filter of filters) {
    const { field, operator, value } = filter;
    if (value === null || value === void 0) {
      continue;
    }
    let condition = null;
    let fieldWithAlias = field;
    if (mainTableAlias && !field.includes(".")) {
      fieldWithAlias = `${mainTableAlias}."${field}"`;
    } else {
      fieldWithAlias = `"${field}"`;
    }
    switch (operator) {
      case "contains":
        condition = `${fieldWithAlias}::text ILIKE '%${value}%'`;
        break;
      case "eq":
        condition = `${fieldWithAlias} = '${value}'`;
        break;
      case "ne":
        condition = `${fieldWithAlias} != '${value}'`;
        break;
      case "gt":
        condition = `${fieldWithAlias} > '${value}'`;
        break;
      case "lt":
        condition = `${fieldWithAlias} < '${value}'`;
        break;
      case "gte":
        condition = `${fieldWithAlias} >= '${value}'`;
        break;
      case "lte":
        condition = `${fieldWithAlias} <= '${value}'`;
        break;
      case "startswith":
        condition = `${fieldWithAlias}::text ILIKE '${value}%'`;
        break;
      case "endswith":
        condition = `${fieldWithAlias}::text ILIKE '%${value}'`;
        break;
      case "in":
        if (Array.isArray(value)) {
          if (value.length === 2 && typeof value[0] === "string" && typeof value[1] === "string" && value[0].includes("T") && value[1].includes("T")) {
            condition = `${fieldWithAlias} BETWEEN '${value[0]}' AND '${value[1]}'`;
          } else {
            const valueList = value.map((v) => `'${v}'`).join(", ");
            condition = `${fieldWithAlias} IN (${valueList})`;
          }
        }
        break;
      case "null":
        condition = `${fieldWithAlias} IS NULL`;
        break;
      case "nnull":
        condition = `${fieldWithAlias} IS NOT NULL`;
        break;
    }
    if (condition) {
      conditions.push(condition);
    }
  }
  return conditions;
}
const route68 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1
}, Symbol.toStringTag, { value: "Module" }));
async function loader$1({ request }) {
  const referer = request.headers.get("Referer");
  const origin = new URL(request.url).origin;
  const dashboardResource2 = getDashboardResource();
  if (dashboardResource2 && dashboardResource2 !== "/" && !referer || referer && referer.replace(origin, "").length < 1) {
    return redirect$1(dashboardResource2);
  }
  return null;
}
function Index$1() {
  return null;
}
const route69 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
function LoginForm() {
  var _a2, _b, _c;
  const { errors: errors2 } = useActionData() || {};
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || dashboardResource;
  const navigation = useNavigation$1();
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsxs(CardContent, { className: "grid p-0 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(Form$1, { method: "post", className: "p-6 md:p-8", children: [
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "redirectTo", value: redirectTo }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("h1", { className: "flex items-center text-2xl font-bold", children: t("pages.login.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-balance", children: t("pages.login.description") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: t("pages.login.fields.email") }),
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
            /* @__PURE__ */ jsx(ErrorMessage, { error: (_a2 = errors2 == null ? void 0 : errors2.email) == null ? void 0 : _a2[0] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: t("pages.login.fields.password") }),
              /* @__PURE__ */ jsx(Link$1, { prefetch: "intent", viewTransition: true, to: "#", className: "ml-auto text-sm", children: t("pages.login.buttons.forgotPassword") })
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "password",
                id: "password",
                type: "password",
                required: true,
                autoComplete: "current-password",
                minLength: 8,
                maxLength: 32,
                defaultValue: "Abc@12345678"
              }
            ),
            /* @__PURE__ */ jsx(ErrorMessage, { error: (_b = errors2 == null ? void 0 : errors2.password) == null ? void 0 : _b[0] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", disabled: navigation.state === "submitting", children: t("pages.login.buttons.submit") }),
            /* @__PURE__ */ jsx(ErrorMessage, { error: (_c = errors2 == null ? void 0 : errors2.default) == null ? void 0 : _c[0] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t", children: /* @__PURE__ */ jsx("span", { className: "bg-background text-muted-foreground relative z-10 px-2", children: t("pages.login.divider") }) }),
          /* @__PURE__ */ jsx(TcskOAuth2, { redirectTo }),
          /* @__PURE__ */ jsxs("div", { className: "text-center text-sm", children: [
            t("pages.login.noAccount"),
            /* @__PURE__ */ jsx(Link$1, { prefetch: "intent", viewTransition: true, to: "/register", replace: true, className: "underline underline-offset-4", children: t("pages.login.signup") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-muted relative hidden md:block", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/logo.png",
          alt: "",
          className: "absolute inset-0 h-full w-full object-cover dark:brightness-[0.3]"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(PrivacyPolicy, {})
  ] });
}
const meta = () => {
  return [{ title: "Login" }];
};
async function loader({ request }) {
  const user = await getUser(request);
  if (user && user.id) {
    return redirect$1(dashboardResource);
  }
  return {};
}
async function action({ request }) {
  try {
    const mergedParams = await getAllParams(request);
    const { email, password, redirectTo } = mergedParams;
    const { error, success, user } = await authProvider.login({
      providerName: EnumAuthProvider.USER_PASS,
      email,
      password,
      redirectTo
    });
    if (error) {
      throw { default: [error.message] };
    }
    if (success && (user == null ? void 0 : user.id)) {
      const session = await getSession(request.headers.get("Cookie"));
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
const route70 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: Login,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function Index() {
  return /* @__PURE__ */ jsx(NotFound, {});
}
const route71 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DGyv5Y1W.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-aGVi9Z7h.js", "/assets/components-CzmxjdGq.js", "/assets/performance-UIr2tu2K.js", "/assets/base-url-B9uMRsbQ.js", "/assets/index-DN0hhrBY.js", "/assets/node-_8Bt17R8.js", "/assets/isBrowser-BS1Xf4tW.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-l7lg8ppK.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-aGVi9Z7h.js", "/assets/components-CzmxjdGq.js", "/assets/performance-UIr2tu2K.js", "/assets/base-url-B9uMRsbQ.js", "/assets/index-DN0hhrBY.js", "/assets/node-_8Bt17R8.js", "/assets/isBrowser-BS1Xf4tW.js", "/assets/index-hdkCHUwo.js", "/assets/index-BP0AYnXF.js", "/assets/404-7AhGMtWo.js", "/assets/500-CvlJQvp0.js", "/assets/i18next-BaiEmIpz.js", "/assets/resources-nPXTaVLM.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/index-IcWDtlcJ.js", "/assets/button-8zOaFnqZ.js", "/assets/action-DSYjqVEc.js", "/assets/axios-DLE8MI3N.js", "/assets/resource-BEg55So-.js", "/assets/index-Cb7h-Ku-.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/index-CmlQ-bcy.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-oFZnn4P-.js", "/assets/tslib.es6-DDzNqjJ8.js"], "css": [] }, "routes/playground.frontRoute.frontRouteProject.history.$id": { "id": "routes/playground.frontRoute.frontRouteProject.history.$id", "parentId": "routes/playground.frontRoute.frontRouteProject", "path": "history/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.frontRoute.frontRouteProject.history._id-DnydUFa1.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/500-CvlJQvp0.js", "/assets/empty-BN1tuys9.js", "/assets/code-BEULcS2d.js", "/assets/badge-DliJJe0J.js", "/assets/typography-BLrnCGnf.js", "/assets/action-DSYjqVEc.js", "/assets/button-8zOaFnqZ.js", "/assets/deep-parse-CMMvj5PV.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/index-hdkCHUwo.js", "/assets/index-aGVi9Z7h.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/base-url-B9uMRsbQ.js", "/assets/try-parse-D_xF9tNz.js", "/assets/i18next-BaiEmIpz.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/playground.frontRoute.frontRouteModule.history.$id": { "id": "routes/playground.frontRoute.frontRouteModule.history.$id", "parentId": "routes/playground.frontRoute.frontRouteModule", "path": "history/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.frontRoute.frontRouteModule.history._id-DnydUFa1.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/500-CvlJQvp0.js", "/assets/empty-BN1tuys9.js", "/assets/code-BEULcS2d.js", "/assets/badge-DliJJe0J.js", "/assets/typography-BLrnCGnf.js", "/assets/action-DSYjqVEc.js", "/assets/button-8zOaFnqZ.js", "/assets/deep-parse-CMMvj5PV.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/index-hdkCHUwo.js", "/assets/index-aGVi9Z7h.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/base-url-B9uMRsbQ.js", "/assets/try-parse-D_xF9tNz.js", "/assets/i18next-BaiEmIpz.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/playground.frontRoute.frontRouteProject.edit.$id": { "id": "routes/playground.frontRoute.frontRouteProject.edit.$id", "parentId": "routes/playground.frontRoute.frontRouteProject", "path": "edit/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.frontRoute.frontRouteProject.edit._id-BJXwDrdE.js", "imports": ["/assets/playground.frontRoute.frontRouteProject.edit._id-Dth5x3LS.js", "/assets/jsx-runtime-C-_spy54.js", "/assets/form-EOytp2cR.js", "/assets/button-8zOaFnqZ.js", "/assets/index-aGVi9Z7h.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/label-CGr_cgmC.js", "/assets/index-BJ0lhZ-K.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/index-hdkCHUwo.js", "/assets/field-RlHc_fdj.js", "/assets/index-IcWDtlcJ.js", "/assets/index-Cb7h-Ku-.js", "/assets/500-CvlJQvp0.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/code-BEULcS2d.js", "/assets/base-url-B9uMRsbQ.js", "/assets/combobox-BWysUI0X.js", "/assets/command-DoxM3uwe.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/popover-Cif6mCbD.js", "/assets/index-bUQLM8l5.js", "/assets/index-CBJO-X9V.js", "/assets/index-BdQq_4o_.js", "/assets/form-BJRS087V.js", "/assets/i18next-BaiEmIpz.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/card-BavCCNFE.js", "/assets/action-DSYjqVEc.js", "/assets/dialog-BQdA7G1h.js", "/assets/input-CWsqa6a4.js", "/assets/ty-BKnkfqXm.js", "/assets/axios-DLE8MI3N.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/get-changed-values-vLde9APN.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/form-BJoh7EuQ.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/base-Dsx3AJoS.js"], "css": [] }, "routes/playground.frontRoute.frontRouteModule.edit.$id": { "id": "routes/playground.frontRoute.frontRouteModule.edit.$id", "parentId": "routes/playground.frontRoute.frontRouteModule", "path": "edit/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.frontRoute.frontRouteModule.edit._id-Cvtpoze2.js", "imports": ["/assets/playground.frontRoute.frontRouteModule.edit._id-s_496yTT.js", "/assets/jsx-runtime-C-_spy54.js", "/assets/form-EOytp2cR.js", "/assets/button-8zOaFnqZ.js", "/assets/index-aGVi9Z7h.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/label-CGr_cgmC.js", "/assets/index-BJ0lhZ-K.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/index-hdkCHUwo.js", "/assets/field-RlHc_fdj.js", "/assets/index-IcWDtlcJ.js", "/assets/index-Cb7h-Ku-.js", "/assets/500-CvlJQvp0.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/code-BEULcS2d.js", "/assets/base-url-B9uMRsbQ.js", "/assets/combobox-BWysUI0X.js", "/assets/command-DoxM3uwe.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/popover-Cif6mCbD.js", "/assets/index-bUQLM8l5.js", "/assets/index-CBJO-X9V.js", "/assets/index-BdQq_4o_.js", "/assets/form-BJRS087V.js", "/assets/i18next-BaiEmIpz.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/card-BavCCNFE.js", "/assets/action-DSYjqVEc.js", "/assets/dialog-BQdA7G1h.js", "/assets/input-CWsqa6a4.js", "/assets/ty-BKnkfqXm.js", "/assets/axios-DLE8MI3N.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/get-changed-values-vLde9APN.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/form-BJoh7EuQ.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/base-Dsx3AJoS.js"], "css": [] }, "routes/playground.frontRoute.frontRouteProject._index": { "id": "routes/playground.frontRoute.frontRouteProject._index", "parentId": "routes/playground.frontRoute.frontRouteProject", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.frontRoute.frontRouteProject._index-BN8CS5Q1.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/index-aGVi9Z7h.js", "/assets/500-CvlJQvp0.js", "/assets/create-BR9gIq3J.js", "/assets/delete-Ut9SK8Xu.js", "/assets/edit-CvmQ0u5a.js", "/assets/index-woQ0_p5b.js", "/assets/list-DErZra5d.js", "/assets/avatar-BbKjKTaI.js", "/assets/button-8zOaFnqZ.js", "/assets/checkbox-Ns6fPQCo.js", "/assets/popover-Cif6mCbD.js", "/assets/action-DSYjqVEc.js", "/assets/resource-BEg55So-.js", "/assets/roles-BPHs5haX.js", "/assets/playground.frontRoute.frontRouteProject.edit._id-Dth5x3LS.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DPZVHeJL.js", "/assets/i18next-BaiEmIpz.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/index-BlMPtN9h.js", "/assets/command-DoxM3uwe.js", "/assets/index-CQpobmnh.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/select-DDv_CCM3.js", "/assets/index-BdQq_4o_.js", "/assets/index-k7qIncBC.js", "/assets/index-CabYiTh8.js", "/assets/badge-DliJJe0J.js", "/assets/separator-DzvNw-3x.js", "/assets/calendar-yfKgFR-U.js", "/assets/input-CWsqa6a4.js", "/assets/form-EOytp2cR.js", "/assets/label-CGr_cgmC.js", "/assets/field-RlHc_fdj.js", "/assets/index-IcWDtlcJ.js", "/assets/index-Cb7h-Ku-.js", "/assets/code-BEULcS2d.js", "/assets/base-url-B9uMRsbQ.js", "/assets/combobox-BWysUI0X.js", "/assets/form-BJRS087V.js", "/assets/card-BavCCNFE.js", "/assets/dialog-BQdA7G1h.js", "/assets/ty-BKnkfqXm.js", "/assets/axios-DLE8MI3N.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/get-changed-values-vLde9APN.js", "/assets/form-BJoh7EuQ.js", "/assets/base-Dsx3AJoS.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/playground.frontRoute.frontRouteProject.create": { "id": "routes/playground.frontRoute.frontRouteProject.create", "parentId": "routes/playground.frontRoute.frontRouteProject", "path": "create", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.frontRoute.frontRouteProject.create-D62G23aG.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/500-CvlJQvp0.js", "/assets/playground.frontRoute.frontRouteProject.edit._id-Dth5x3LS.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/index-hdkCHUwo.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/form-EOytp2cR.js", "/assets/label-CGr_cgmC.js", "/assets/index-BJ0lhZ-K.js", "/assets/field-RlHc_fdj.js", "/assets/index-IcWDtlcJ.js", "/assets/index-Cb7h-Ku-.js", "/assets/code-BEULcS2d.js", "/assets/base-url-B9uMRsbQ.js", "/assets/combobox-BWysUI0X.js", "/assets/command-DoxM3uwe.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/popover-Cif6mCbD.js", "/assets/index-bUQLM8l5.js", "/assets/index-CBJO-X9V.js", "/assets/index-BdQq_4o_.js", "/assets/form-BJRS087V.js", "/assets/i18next-BaiEmIpz.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/card-BavCCNFE.js", "/assets/action-DSYjqVEc.js", "/assets/dialog-BQdA7G1h.js", "/assets/input-CWsqa6a4.js", "/assets/ty-BKnkfqXm.js", "/assets/axios-DLE8MI3N.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/get-changed-values-vLde9APN.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/form-BJoh7EuQ.js", "/assets/base-Dsx3AJoS.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/playground.frontRoute.frontRouteModule._index": { "id": "routes/playground.frontRoute.frontRouteModule._index", "parentId": "routes/playground.frontRoute.frontRouteModule", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.frontRoute.frontRouteModule._index-D2y5Nrym.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/index-aGVi9Z7h.js", "/assets/500-CvlJQvp0.js", "/assets/create-BR9gIq3J.js", "/assets/delete-Ut9SK8Xu.js", "/assets/edit-CvmQ0u5a.js", "/assets/index-woQ0_p5b.js", "/assets/list-DErZra5d.js", "/assets/avatar-BbKjKTaI.js", "/assets/badge-DliJJe0J.js", "/assets/button-8zOaFnqZ.js", "/assets/checkbox-Ns6fPQCo.js", "/assets/popover-Cif6mCbD.js", "/assets/action-DSYjqVEc.js", "/assets/resource-BEg55So-.js", "/assets/roles-BPHs5haX.js", "/assets/playground.frontRoute.frontRouteModule.edit._id-s_496yTT.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DPZVHeJL.js", "/assets/i18next-BaiEmIpz.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/index-BlMPtN9h.js", "/assets/command-DoxM3uwe.js", "/assets/index-CQpobmnh.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/select-DDv_CCM3.js", "/assets/index-BdQq_4o_.js", "/assets/index-k7qIncBC.js", "/assets/index-CabYiTh8.js", "/assets/separator-DzvNw-3x.js", "/assets/calendar-yfKgFR-U.js", "/assets/input-CWsqa6a4.js", "/assets/form-EOytp2cR.js", "/assets/label-CGr_cgmC.js", "/assets/field-RlHc_fdj.js", "/assets/index-IcWDtlcJ.js", "/assets/index-Cb7h-Ku-.js", "/assets/code-BEULcS2d.js", "/assets/base-url-B9uMRsbQ.js", "/assets/combobox-BWysUI0X.js", "/assets/form-BJRS087V.js", "/assets/card-BavCCNFE.js", "/assets/dialog-BQdA7G1h.js", "/assets/ty-BKnkfqXm.js", "/assets/axios-DLE8MI3N.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/get-changed-values-vLde9APN.js", "/assets/form-BJoh7EuQ.js", "/assets/base-Dsx3AJoS.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/playground.frontRoute.frontRouteModule.create": { "id": "routes/playground.frontRoute.frontRouteModule.create", "parentId": "routes/playground.frontRoute.frontRouteModule", "path": "create", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.frontRoute.frontRouteModule.create-B5A5lKRe.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/500-CvlJQvp0.js", "/assets/playground.frontRoute.frontRouteModule.edit._id-s_496yTT.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/index-hdkCHUwo.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/form-EOytp2cR.js", "/assets/label-CGr_cgmC.js", "/assets/index-BJ0lhZ-K.js", "/assets/field-RlHc_fdj.js", "/assets/index-IcWDtlcJ.js", "/assets/index-Cb7h-Ku-.js", "/assets/code-BEULcS2d.js", "/assets/base-url-B9uMRsbQ.js", "/assets/combobox-BWysUI0X.js", "/assets/command-DoxM3uwe.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/popover-Cif6mCbD.js", "/assets/index-bUQLM8l5.js", "/assets/index-CBJO-X9V.js", "/assets/index-BdQq_4o_.js", "/assets/form-BJRS087V.js", "/assets/i18next-BaiEmIpz.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/card-BavCCNFE.js", "/assets/action-DSYjqVEc.js", "/assets/dialog-BQdA7G1h.js", "/assets/input-CWsqa6a4.js", "/assets/ty-BKnkfqXm.js", "/assets/axios-DLE8MI3N.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/get-changed-values-vLde9APN.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/form-BJoh7EuQ.js", "/assets/base-Dsx3AJoS.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/playground.dashboard.dynamicPage.clone.$id": { "id": "routes/playground.dashboard.dynamicPage.clone.$id", "parentId": "routes/playground.dashboard", "path": "dynamicPage/clone/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.dashboard.dynamicPage.clone._id-Bguxqu5-.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/500-CvlJQvp0.js", "/assets/playground.dashboard.dynamicPage.edit._id-DYK-wKru.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/index-hdkCHUwo.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/switch-ClZeFjjv.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-k7qIncBC.js", "/assets/index-bUQLM8l5.js", "/assets/form-EOytp2cR.js", "/assets/label-CGr_cgmC.js", "/assets/field-RlHc_fdj.js", "/assets/index-IcWDtlcJ.js", "/assets/index-Cb7h-Ku-.js", "/assets/code-BEULcS2d.js", "/assets/base-url-B9uMRsbQ.js", "/assets/combobox-BWysUI0X.js", "/assets/command-DoxM3uwe.js", "/assets/index-BEBrh2Va.js", "/assets/index-CmlQ-bcy.js", "/assets/popover-Cif6mCbD.js", "/assets/index-CBJO-X9V.js", "/assets/index-BdQq_4o_.js", "/assets/form-BJRS087V.js", "/assets/i18next-BaiEmIpz.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/card-BavCCNFE.js", "/assets/action-DSYjqVEc.js", "/assets/dialog-BQdA7G1h.js", "/assets/input-CWsqa6a4.js", "/assets/select-DDv_CCM3.js", "/assets/index-KTbvq4gf.js", "/assets/index-CabYiTh8.js", "/assets/typography-BLrnCGnf.js", "/assets/get-changed-values-vLde9APN.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/form-BJoh7EuQ.js", "/assets/base-Dsx3AJoS.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/playground.dashboard.dynamicPage.edit.$id": { "id": "routes/playground.dashboard.dynamicPage.edit.$id", "parentId": "routes/playground.dashboard", "path": "dynamicPage/edit/:id", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.dashboard.dynamicPage.edit._id-CoF93Wwa.js", "imports": ["/assets/playground.dashboard.dynamicPage.edit._id-DYK-wKru.js", "/assets/jsx-runtime-C-_spy54.js", "/assets/switch-ClZeFjjv.js", "/assets/index-aGVi9Z7h.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-k7qIncBC.js", "/assets/index-bUQLM8l5.js", "/assets/form-EOytp2cR.js", "/assets/label-CGr_cgmC.js", "/assets/index-hdkCHUwo.js", "/assets/field-RlHc_fdj.js", "/assets/index-IcWDtlcJ.js", "/assets/index-Cb7h-Ku-.js", "/assets/500-CvlJQvp0.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/code-BEULcS2d.js", "/assets/base-url-B9uMRsbQ.js", "/assets/combobox-BWysUI0X.js", "/assets/command-DoxM3uwe.js", "/assets/index-BEBrh2Va.js", "/assets/index-CmlQ-bcy.js", "/assets/popover-Cif6mCbD.js", "/assets/index-CBJO-X9V.js", "/assets/index-BdQq_4o_.js", "/assets/form-BJRS087V.js", "/assets/i18next-BaiEmIpz.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/card-BavCCNFE.js", "/assets/action-DSYjqVEc.js", "/assets/dialog-BQdA7G1h.js", "/assets/input-CWsqa6a4.js", "/assets/select-DDv_CCM3.js", "/assets/index-KTbvq4gf.js", "/assets/index-CabYiTh8.js", "/assets/typography-BLrnCGnf.js", "/assets/get-changed-values-vLde9APN.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/form-BJoh7EuQ.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/base-Dsx3AJoS.js"], "css": [] }, "routes/playground.dashboard.demoViewTransition": { "id": "routes/playground.dashboard.demoViewTransition", "parentId": "routes/playground.dashboard", "path": "demoViewTransition", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.dashboard.demoViewTransition-CP-sODc3.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/500-CvlJQvp0.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/index-hdkCHUwo.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/i18next-BaiEmIpz.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/playground.dashboard.dynamicPage._index": { "id": "routes/playground.dashboard.dynamicPage._index", "parentId": "routes/playground.dashboard", "path": "dynamicPage", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.dashboard.dynamicPage._index-hIpIQR0x.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/index-aGVi9Z7h.js", "/assets/500-CvlJQvp0.js", "/assets/clone-BWW4ifTI.js", "/assets/create-BR9gIq3J.js", "/assets/delete-Ut9SK8Xu.js", "/assets/edit-CvmQ0u5a.js", "/assets/index-woQ0_p5b.js", "/assets/show-oQ5vHUQo.js", "/assets/badge-DliJJe0J.js", "/assets/button-8zOaFnqZ.js", "/assets/checkbox-Ns6fPQCo.js", "/assets/popover-Cif6mCbD.js", "/assets/action-DSYjqVEc.js", "/assets/resource-BEg55So-.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DPZVHeJL.js", "/assets/i18next-BaiEmIpz.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/index-BlMPtN9h.js", "/assets/command-DoxM3uwe.js", "/assets/index-CQpobmnh.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/select-DDv_CCM3.js", "/assets/index-BdQq_4o_.js", "/assets/index-k7qIncBC.js", "/assets/index-CabYiTh8.js", "/assets/separator-DzvNw-3x.js", "/assets/calendar-yfKgFR-U.js", "/assets/input-CWsqa6a4.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/playground.dashboard.dynamicPage.create": { "id": "routes/playground.dashboard.dynamicPage.create", "parentId": "routes/playground.dashboard", "path": "dynamicPage/create", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.dashboard.dynamicPage.create-D7HqmQTE.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/500-CvlJQvp0.js", "/assets/playground.dashboard.dynamicPage.edit._id-DYK-wKru.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/index-hdkCHUwo.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/switch-ClZeFjjv.js", "/assets/components-CzmxjdGq.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-k7qIncBC.js", "/assets/index-bUQLM8l5.js", "/assets/form-EOytp2cR.js", "/assets/label-CGr_cgmC.js", "/assets/field-RlHc_fdj.js", "/assets/index-IcWDtlcJ.js", "/assets/index-Cb7h-Ku-.js", "/assets/code-BEULcS2d.js", "/assets/base-url-B9uMRsbQ.js", "/assets/combobox-BWysUI0X.js", "/assets/command-DoxM3uwe.js", "/assets/index-BEBrh2Va.js", "/assets/index-CmlQ-bcy.js", "/assets/popover-Cif6mCbD.js", "/assets/index-CBJO-X9V.js", "/assets/index-BdQq_4o_.js", "/assets/form-BJRS087V.js", "/assets/i18next-BaiEmIpz.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/card-BavCCNFE.js", "/assets/action-DSYjqVEc.js", "/assets/dialog-BQdA7G1h.js", "/assets/input-CWsqa6a4.js", "/assets/select-DDv_CCM3.js", "/assets/index-KTbvq4gf.js", "/assets/index-CabYiTh8.js", "/assets/typography-BLrnCGnf.js", "/assets/get-changed-values-vLde9APN.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/form-BJoh7EuQ.js", "/assets/base-Dsx3AJoS.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/playground.frontRoute.frontRouteProject": { "id": "routes/playground.frontRoute.frontRouteProject", "parentId": "root", "path": "playground/frontRoute/frontRouteProject", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.frontRoute.frontRouteProject-CUd9L7MT.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/layout-B3OT-lDC.js", "/assets/500-CvlJQvp0.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/i18next-BaiEmIpz.js", "/assets/index-CQpobmnh.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-BEBrh2Va.js", "/assets/index-CmlQ-bcy.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/avatar-BbKjKTaI.js", "/assets/collapsible-DP1HK-Rw.js", "/assets/input-CWsqa6a4.js", "/assets/separator-DzvNw-3x.js", "/assets/tooltip-dCS1zgo4.js", "/assets/index-CabYiTh8.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/dynamic-icon-B2CUf8En.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/base-url-B9uMRsbQ.js", "/assets/roles-BPHs5haX.js", "/assets/index-BP0AYnXF.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/isBrowser-BS1Xf4tW.js", "/assets/node-_8Bt17R8.js", "/assets/badge-DliJJe0J.js"], "css": [] }, "routes/playground.frontRoute.frontRouteModule": { "id": "routes/playground.frontRoute.frontRouteModule", "parentId": "root", "path": "playground/frontRoute/frontRouteModule", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.frontRoute.frontRouteModule-CUd9L7MT.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/layout-B3OT-lDC.js", "/assets/500-CvlJQvp0.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/i18next-BaiEmIpz.js", "/assets/index-CQpobmnh.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-BEBrh2Va.js", "/assets/index-CmlQ-bcy.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/avatar-BbKjKTaI.js", "/assets/collapsible-DP1HK-Rw.js", "/assets/input-CWsqa6a4.js", "/assets/separator-DzvNw-3x.js", "/assets/tooltip-dCS1zgo4.js", "/assets/index-CabYiTh8.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/dynamic-icon-B2CUf8En.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/base-url-B9uMRsbQ.js", "/assets/roles-BPHs5haX.js", "/assets/index-BP0AYnXF.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/isBrowser-BS1Xf4tW.js", "/assets/node-_8Bt17R8.js", "/assets/badge-DliJJe0J.js"], "css": [] }, "routes/playground.article.category.edit.$id": { "id": "routes/playground.article.category.edit.$id", "parentId": "routes/playground.article.category", "path": "edit/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.article.category.edit._id-Da3_nTxj.js", "imports": ["/assets/playground.article.category.edit._id-DhLFyvZQ.js", "/assets/jsx-runtime-C-_spy54.js", "/assets/form-EOytp2cR.js", "/assets/button-8zOaFnqZ.js", "/assets/index-aGVi9Z7h.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/label-CGr_cgmC.js", "/assets/index-BJ0lhZ-K.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/index-hdkCHUwo.js", "/assets/field-RlHc_fdj.js", "/assets/500-CvlJQvp0.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/delete-Ut9SK8Xu.js", "/assets/index-DPZVHeJL.js", "/assets/i18next-BaiEmIpz.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/form-BJRS087V.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/card-BavCCNFE.js", "/assets/action-DSYjqVEc.js", "/assets/input-CWsqa6a4.js", "/assets/textarea-D8a5b60f.js", "/assets/get-changed-values-vLde9APN.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/form-BJoh7EuQ.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/index-Cb7h-Ku-.js"], "css": [] }, "routes/playground.article.category._index": { "id": "routes/playground.article.category._index", "parentId": "routes/playground.article.category", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.article.category._index-BCXAiaA8.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/500-CvlJQvp0.js", "/assets/create-BR9gIq3J.js", "/assets/delete-Ut9SK8Xu.js", "/assets/edit-CvmQ0u5a.js", "/assets/index-woQ0_p5b.js", "/assets/checkbox-Ns6fPQCo.js", "/assets/action-DSYjqVEc.js", "/assets/resource-BEg55So-.js", "/assets/roles-BPHs5haX.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/index-DPZVHeJL.js", "/assets/i18next-BaiEmIpz.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/index-BlMPtN9h.js", "/assets/command-DoxM3uwe.js", "/assets/index-CQpobmnh.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/select-DDv_CCM3.js", "/assets/index-BdQq_4o_.js", "/assets/index-k7qIncBC.js", "/assets/index-CabYiTh8.js", "/assets/badge-DliJJe0J.js", "/assets/popover-Cif6mCbD.js", "/assets/separator-DzvNw-3x.js", "/assets/calendar-yfKgFR-U.js", "/assets/input-CWsqa6a4.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/playground.article.category.create": { "id": "routes/playground.article.category.create", "parentId": "routes/playground.article.category", "path": "create", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.article.category.create-CqiNUmt0.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/500-CvlJQvp0.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/playground.article.category.edit._id-DhLFyvZQ.js", "/assets/index-hdkCHUwo.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/i18next-BaiEmIpz.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/form-EOytp2cR.js", "/assets/label-CGr_cgmC.js", "/assets/index-BJ0lhZ-K.js", "/assets/components-CzmxjdGq.js", "/assets/field-RlHc_fdj.js", "/assets/delete-Ut9SK8Xu.js", "/assets/index-DPZVHeJL.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/form-BJRS087V.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/card-BavCCNFE.js", "/assets/action-DSYjqVEc.js", "/assets/input-CWsqa6a4.js", "/assets/textarea-D8a5b60f.js", "/assets/get-changed-values-vLde9APN.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/form-BJoh7EuQ.js", "/assets/index-Cb7h-Ku-.js"], "css": [] }, "routes/system.admin.auditRecord.applyRole": { "id": "routes/system.admin.auditRecord.applyRole", "parentId": "routes/system.admin.auditRecord", "path": "applyRole", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.admin.auditRecord.applyRole-D8OsMf2Q.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/form-EOytp2cR.js", "/assets/field-RlHc_fdj.js", "/assets/i18next-BaiEmIpz.js", "/assets/index-aGVi9Z7h.js", "/assets/index-Cb7h-Ku-.js", "/assets/500-CvlJQvp0.js", "/assets/form-BJRS087V.js", "/assets/select-multi-B-0pe142.js", "/assets/badge-DliJJe0J.js", "/assets/card-BavCCNFE.js", "/assets/checkbox-Ns6fPQCo.js", "/assets/label-CGr_cgmC.js", "/assets/typography-BLrnCGnf.js", "/assets/action-DSYjqVEc.js", "/assets/audit-channel-7xUlZfi7.js", "/assets/log-Dv4uGBGl.js", "/assets/resource-BEg55So-.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/index-hdkCHUwo.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/command-DoxM3uwe.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/popover-Cif6mCbD.js", "/assets/index-bUQLM8l5.js", "/assets/index-k7qIncBC.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/playground.article.post.clone.$id": { "id": "routes/playground.article.post.clone.$id", "parentId": "routes/playground.article.post", "path": "clone/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.article.post.clone._id-DL9X80kw.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/500-CvlJQvp0.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/playground.article.post.edit._id-BflXuIK6.js", "/assets/components-CzmxjdGq.js", "/assets/index-hdkCHUwo.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/i18next-BaiEmIpz.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/form-EOytp2cR.js", "/assets/label-CGr_cgmC.js", "/assets/index-BJ0lhZ-K.js", "/assets/field-RlHc_fdj.js", "/assets/clone-BWW4ifTI.js", "/assets/delete-Ut9SK8Xu.js", "/assets/index-DPZVHeJL.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/show-oQ5vHUQo.js", "/assets/combobox-BWysUI0X.js", "/assets/command-DoxM3uwe.js", "/assets/popover-Cif6mCbD.js", "/assets/index-bUQLM8l5.js", "/assets/index-CBJO-X9V.js", "/assets/index-BdQq_4o_.js", "/assets/form-BJRS087V.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/card-BavCCNFE.js", "/assets/action-DSYjqVEc.js", "/assets/select-BaHbv5GU.js", "/assets/select-DDv_CCM3.js", "/assets/index-KTbvq4gf.js", "/assets/index-k7qIncBC.js", "/assets/index-CabYiTh8.js", "/assets/dialog-BQdA7G1h.js", "/assets/input-CWsqa6a4.js", "/assets/textarea-D8a5b60f.js", "/assets/post-BInKrOu8.js", "/assets/resource-BEg55So-.js", "/assets/get-changed-values-vLde9APN.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/form-BJoh7EuQ.js", "/assets/post-IjVlnkkq.js", "/assets/index-Cb7h-Ku-.js"], "css": [] }, "routes/system.admin.auditRecord.show.$id": { "id": "routes/system.admin.auditRecord.show.$id", "parentId": "routes/system.admin.auditRecord", "path": "show/:id", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.admin.auditRecord.show._id-YB7AamD2.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-aGVi9Z7h.js", "/assets/index-IcWDtlcJ.js", "/assets/500-CvlJQvp0.js", "/assets/code-BEULcS2d.js", "/assets/button-8zOaFnqZ.js", "/assets/avatar-BbKjKTaI.js", "/assets/badge-DliJJe0J.js", "/assets/label-CGr_cgmC.js", "/assets/textarea-D8a5b60f.js", "/assets/tooltip-dCS1zgo4.js", "/assets/typography-BLrnCGnf.js", "/assets/audit-channel-7xUlZfi7.js", "/assets/log-Dv4uGBGl.js", "/assets/deep-parse-CMMvj5PV.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/index-hdkCHUwo.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/base-url-B9uMRsbQ.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-BU-I6paI.js", "/assets/index-bUQLM8l5.js", "/assets/index-CmlQ-bcy.js", "/assets/index-CabYiTh8.js", "/assets/try-parse-D_xF9tNz.js"], "css": [] }, "routes/playground.article.post.edit.$id": { "id": "routes/playground.article.post.edit.$id", "parentId": "routes/playground.article.post", "path": "edit/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.article.post.edit._id-BiqCxLQK.js", "imports": ["/assets/playground.article.post.edit._id-BflXuIK6.js", "/assets/jsx-runtime-C-_spy54.js", "/assets/form-EOytp2cR.js", "/assets/button-8zOaFnqZ.js", "/assets/index-aGVi9Z7h.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/label-CGr_cgmC.js", "/assets/index-BJ0lhZ-K.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/index-hdkCHUwo.js", "/assets/field-RlHc_fdj.js", "/assets/500-CvlJQvp0.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/clone-BWW4ifTI.js", "/assets/delete-Ut9SK8Xu.js", "/assets/index-DPZVHeJL.js", "/assets/i18next-BaiEmIpz.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/show-oQ5vHUQo.js", "/assets/combobox-BWysUI0X.js", "/assets/command-DoxM3uwe.js", "/assets/popover-Cif6mCbD.js", "/assets/index-bUQLM8l5.js", "/assets/index-CBJO-X9V.js", "/assets/index-BdQq_4o_.js", "/assets/form-BJRS087V.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/card-BavCCNFE.js", "/assets/action-DSYjqVEc.js", "/assets/select-BaHbv5GU.js", "/assets/select-DDv_CCM3.js", "/assets/index-KTbvq4gf.js", "/assets/index-k7qIncBC.js", "/assets/index-CabYiTh8.js", "/assets/dialog-BQdA7G1h.js", "/assets/input-CWsqa6a4.js", "/assets/textarea-D8a5b60f.js", "/assets/post-BInKrOu8.js", "/assets/resource-BEg55So-.js", "/assets/get-changed-values-vLde9APN.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/form-BJoh7EuQ.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/post-IjVlnkkq.js", "/assets/index-Cb7h-Ku-.js"], "css": [] }, "routes/playground.article.post.show.$id": { "id": "routes/playground.article.post.show.$id", "parentId": "routes/playground.article.post", "path": "show/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.article.post.show._id-68KtXv42.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/500-CvlJQvp0.js", "/assets/clone-BWW4ifTI.js", "/assets/delete-Ut9SK8Xu.js", "/assets/edit-CvmQ0u5a.js", "/assets/avatar-BbKjKTaI.js", "/assets/badge-DliJJe0J.js", "/assets/typography-BLrnCGnf.js", "/assets/post-BInKrOu8.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/index-aGVi9Z7h.js", "/assets/index-hdkCHUwo.js", "/assets/button-8zOaFnqZ.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/index-DPZVHeJL.js", "/assets/i18next-BaiEmIpz.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/system.admin.casbinRule.edit.$id": { "id": "routes/system.admin.casbinRule.edit.$id", "parentId": "routes/system.admin.casbinRule", "path": "edit/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.admin.casbinRule.edit._id-BNoGwpn0.js", "imports": ["/assets/system.admin.casbinRule.edit._id-BMTcj9md.js", "/assets/jsx-runtime-C-_spy54.js", "/assets/form-EOytp2cR.js", "/assets/button-8zOaFnqZ.js", "/assets/index-aGVi9Z7h.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/label-CGr_cgmC.js", "/assets/index-BJ0lhZ-K.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/index-hdkCHUwo.js", "/assets/field-RlHc_fdj.js", "/assets/500-CvlJQvp0.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/delete-Ut9SK8Xu.js", "/assets/index-DPZVHeJL.js", "/assets/i18next-BaiEmIpz.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/combobox-BWysUI0X.js", "/assets/command-DoxM3uwe.js", "/assets/popover-Cif6mCbD.js", "/assets/index-bUQLM8l5.js", "/assets/index-CBJO-X9V.js", "/assets/index-BdQq_4o_.js", "/assets/form-BJRS087V.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/card-BavCCNFE.js", "/assets/action-DSYjqVEc.js", "/assets/select-BaHbv5GU.js", "/assets/select-DDv_CCM3.js", "/assets/index-KTbvq4gf.js", "/assets/index-k7qIncBC.js", "/assets/index-CabYiTh8.js", "/assets/select-multi-B-0pe142.js", "/assets/badge-DliJJe0J.js", "/assets/input-CWsqa6a4.js", "/assets/resource-BEg55So-.js", "/assets/roles-BPHs5haX.js", "/assets/get-changed-values-vLde9APN.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/form-BJoh7EuQ.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/index-Cb7h-Ku-.js"], "css": [] }, "routes/system.admin.auditRecord._index": { "id": "routes/system.admin.auditRecord._index", "parentId": "routes/system.admin.auditRecord", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.admin.auditRecord._index-BsNCcC35.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/index-aGVi9Z7h.js", "/assets/500-CvlJQvp0.js", "/assets/delete-Ut9SK8Xu.js", "/assets/index-woQ0_p5b.js", "/assets/show-oQ5vHUQo.js", "/assets/avatar-BbKjKTaI.js", "/assets/badge-DliJJe0J.js", "/assets/checkbox-Ns6fPQCo.js", "/assets/action-DSYjqVEc.js", "/assets/audit-channel-7xUlZfi7.js", "/assets/log-Dv4uGBGl.js", "/assets/resource-BEg55So-.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/index-DPZVHeJL.js", "/assets/i18next-BaiEmIpz.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/index-BlMPtN9h.js", "/assets/command-DoxM3uwe.js", "/assets/index-CQpobmnh.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/select-DDv_CCM3.js", "/assets/index-BdQq_4o_.js", "/assets/index-k7qIncBC.js", "/assets/index-CabYiTh8.js", "/assets/popover-Cif6mCbD.js", "/assets/separator-DzvNw-3x.js", "/assets/calendar-yfKgFR-U.js", "/assets/input-CWsqa6a4.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/$group.$category.dynamic.$name": { "id": "routes/$group.$category.dynamic.$name", "parentId": "root", "path": ":group/:category/dynamic/:name", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/_group._category.dynamic._name-BGrFZViC.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/form-EOytp2cR.js", "/assets/index-hdkCHUwo.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/index-aGVi9Z7h.js", "/assets/index-IcWDtlcJ.js", "/assets/index-Cb7h-Ku-.js", "/assets/layout-B3OT-lDC.js", "/assets/404-7AhGMtWo.js", "/assets/500-CvlJQvp0.js", "/assets/create-BR9gIq3J.js", "/assets/edit-CvmQ0u5a.js", "/assets/index-woQ0_p5b.js", "/assets/code-BEULcS2d.js", "/assets/combobox-BWysUI0X.js", "/assets/select-multi-B-0pe142.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/badge-DliJJe0J.js", "/assets/button-8zOaFnqZ.js", "/assets/calendar-yfKgFR-U.js", "/assets/checkbox-Ns6fPQCo.js", "/assets/dialog-BQdA7G1h.js", "/assets/input-CWsqa6a4.js", "/assets/popover-Cif6mCbD.js", "/assets/index-BU-I6paI.js", "/assets/index-BTG9THwZ.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-Dm-ooxTM.js", "/assets/index-CBJO-X9V.js", "/assets/index-bUQLM8l5.js", "/assets/index-k7qIncBC.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/index-BdQq_4o_.js", "/assets/index-KTbvq4gf.js", "/assets/tooltip-dCS1zgo4.js", "/assets/switch-ClZeFjjv.js", "/assets/textarea-D8a5b60f.js", "/assets/typography-BLrnCGnf.js", "/assets/action-DSYjqVEc.js", "/assets/resource-BEg55So-.js", "/assets/playground.dashboard.dynamicPage.edit._id-DYK-wKru.js", "/assets/axios-DLE8MI3N.js", "/assets/get-changed-values-vLde9APN.js", "/assets/base-Dsx3AJoS.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/label-CGr_cgmC.js", "/assets/i18next-BaiEmIpz.js", "/assets/index-CQpobmnh.js", "/assets/index-BEBrh2Va.js", "/assets/index-CmlQ-bcy.js", "/assets/index-oFZnn4P-.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/avatar-BbKjKTaI.js", "/assets/collapsible-DP1HK-Rw.js", "/assets/separator-DzvNw-3x.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/dynamic-icon-B2CUf8En.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/base-url-B9uMRsbQ.js", "/assets/roles-BPHs5haX.js", "/assets/index-BP0AYnXF.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/isBrowser-BS1Xf4tW.js", "/assets/node-_8Bt17R8.js", "/assets/index-DPZVHeJL.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/index-BlMPtN9h.js", "/assets/command-DoxM3uwe.js", "/assets/select-DDv_CCM3.js", "/assets/index-CabYiTh8.js", "/assets/field-RlHc_fdj.js", "/assets/form-BJRS087V.js", "/assets/card-BavCCNFE.js", "/assets/form-BJoh7EuQ.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/resources-nPXTaVLM.js"], "css": [] }, "routes/playground.article.post._index": { "id": "routes/playground.article.post._index", "parentId": "routes/playground.article.post", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.article.post._index-S3leTJMJ.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/i18next-BaiEmIpz.js", "/assets/index-aGVi9Z7h.js", "/assets/500-CvlJQvp0.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/index-BlMPtN9h.js", "/assets/create-BR9gIq3J.js", "/assets/index-woQ0_p5b.js", "/assets/button-8zOaFnqZ.js", "/assets/action-DSYjqVEc.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/show-oQ5vHUQo.js", "/assets/avatar-BbKjKTaI.js", "/assets/badge-DliJJe0J.js", "/assets/checkbox-Ns6fPQCo.js", "/assets/dialog-BQdA7G1h.js", "/assets/post-BInKrOu8.js", "/assets/resource-BEg55So-.js", "/assets/playground.article.post.edit._id-BflXuIK6.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/index-DPZVHeJL.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/command-DoxM3uwe.js", "/assets/index-CQpobmnh.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/select-DDv_CCM3.js", "/assets/index-BdQq_4o_.js", "/assets/index-k7qIncBC.js", "/assets/index-CabYiTh8.js", "/assets/popover-Cif6mCbD.js", "/assets/separator-DzvNw-3x.js", "/assets/calendar-yfKgFR-U.js", "/assets/input-CWsqa6a4.js", "/assets/form-EOytp2cR.js", "/assets/label-CGr_cgmC.js", "/assets/field-RlHc_fdj.js", "/assets/clone-BWW4ifTI.js", "/assets/delete-Ut9SK8Xu.js", "/assets/combobox-BWysUI0X.js", "/assets/form-BJRS087V.js", "/assets/card-BavCCNFE.js", "/assets/select-BaHbv5GU.js", "/assets/textarea-D8a5b60f.js", "/assets/get-changed-values-vLde9APN.js", "/assets/form-BJoh7EuQ.js", "/assets/post-IjVlnkkq.js", "/assets/index-Cb7h-Ku-.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/playground.article.post.create": { "id": "routes/playground.article.post.create", "parentId": "routes/playground.article.post", "path": "create", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.article.post.create-DO2fKtY5.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/500-CvlJQvp0.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/playground.article.post.edit._id-BflXuIK6.js", "/assets/index-hdkCHUwo.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/i18next-BaiEmIpz.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/form-EOytp2cR.js", "/assets/label-CGr_cgmC.js", "/assets/index-BJ0lhZ-K.js", "/assets/components-CzmxjdGq.js", "/assets/field-RlHc_fdj.js", "/assets/clone-BWW4ifTI.js", "/assets/delete-Ut9SK8Xu.js", "/assets/index-DPZVHeJL.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/show-oQ5vHUQo.js", "/assets/combobox-BWysUI0X.js", "/assets/command-DoxM3uwe.js", "/assets/popover-Cif6mCbD.js", "/assets/index-bUQLM8l5.js", "/assets/index-CBJO-X9V.js", "/assets/index-BdQq_4o_.js", "/assets/form-BJRS087V.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/card-BavCCNFE.js", "/assets/action-DSYjqVEc.js", "/assets/select-BaHbv5GU.js", "/assets/select-DDv_CCM3.js", "/assets/index-KTbvq4gf.js", "/assets/index-k7qIncBC.js", "/assets/index-CabYiTh8.js", "/assets/dialog-BQdA7G1h.js", "/assets/input-CWsqa6a4.js", "/assets/textarea-D8a5b60f.js", "/assets/post-BInKrOu8.js", "/assets/resource-BEg55So-.js", "/assets/get-changed-values-vLde9APN.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/form-BJoh7EuQ.js", "/assets/post-IjVlnkkq.js", "/assets/index-Cb7h-Ku-.js"], "css": [] }, "routes/system.admin.casbinRule._index": { "id": "routes/system.admin.casbinRule._index", "parentId": "routes/system.admin.casbinRule", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.admin.casbinRule._index-BoPuwWQH.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/500-CvlJQvp0.js", "/assets/create-BR9gIq3J.js", "/assets/delete-Ut9SK8Xu.js", "/assets/edit-CvmQ0u5a.js", "/assets/index-woQ0_p5b.js", "/assets/checkbox-Ns6fPQCo.js", "/assets/action-DSYjqVEc.js", "/assets/resource-BEg55So-.js", "/assets/roles-BPHs5haX.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/index-DPZVHeJL.js", "/assets/i18next-BaiEmIpz.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/index-BlMPtN9h.js", "/assets/command-DoxM3uwe.js", "/assets/index-CQpobmnh.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/select-DDv_CCM3.js", "/assets/index-BdQq_4o_.js", "/assets/index-k7qIncBC.js", "/assets/index-CabYiTh8.js", "/assets/badge-DliJJe0J.js", "/assets/popover-Cif6mCbD.js", "/assets/separator-DzvNw-3x.js", "/assets/calendar-yfKgFR-U.js", "/assets/input-CWsqa6a4.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/system.admin.casbinRule.create": { "id": "routes/system.admin.casbinRule.create", "parentId": "routes/system.admin.casbinRule", "path": "create", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.admin.casbinRule.create-A5z_zvYh.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/500-CvlJQvp0.js", "/assets/system.admin.casbinRule.edit._id-BMTcj9md.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/index-hdkCHUwo.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/form-EOytp2cR.js", "/assets/label-CGr_cgmC.js", "/assets/index-BJ0lhZ-K.js", "/assets/components-CzmxjdGq.js", "/assets/field-RlHc_fdj.js", "/assets/delete-Ut9SK8Xu.js", "/assets/index-DPZVHeJL.js", "/assets/i18next-BaiEmIpz.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/combobox-BWysUI0X.js", "/assets/command-DoxM3uwe.js", "/assets/popover-Cif6mCbD.js", "/assets/index-bUQLM8l5.js", "/assets/index-CBJO-X9V.js", "/assets/index-BdQq_4o_.js", "/assets/form-BJRS087V.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/card-BavCCNFE.js", "/assets/action-DSYjqVEc.js", "/assets/select-BaHbv5GU.js", "/assets/select-DDv_CCM3.js", "/assets/index-KTbvq4gf.js", "/assets/index-k7qIncBC.js", "/assets/index-CabYiTh8.js", "/assets/select-multi-B-0pe142.js", "/assets/badge-DliJJe0J.js", "/assets/input-CWsqa6a4.js", "/assets/resource-BEg55So-.js", "/assets/roles-BPHs5haX.js", "/assets/get-changed-values-vLde9APN.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/form-BJoh7EuQ.js", "/assets/index-Cb7h-Ku-.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/playground.dashboard.discover": { "id": "routes/playground.dashboard.discover", "parentId": "routes/playground.dashboard", "path": "discover", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.dashboard.discover-Xo17r0bZ.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/form-EOytp2cR.js", "/assets/index-hdkCHUwo.js", "/assets/index-aGVi9Z7h.js", "/assets/index-IcWDtlcJ.js", "/assets/index-Cb7h-Ku-.js", "/assets/500-CvlJQvp0.js", "/assets/empty-BN1tuys9.js", "/assets/combobox-BWysUI0X.js", "/assets/select-multi-B-0pe142.js", "/assets/index-BlMPtN9h.js", "/assets/card-BavCCNFE.js", "/assets/chart-jH2V8G4G.js", "/assets/select-DDv_CCM3.js", "/assets/typography-BLrnCGnf.js", "/assets/components-CzmxjdGq.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/label-CGr_cgmC.js", "/assets/index-BJ0lhZ-K.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/command-DoxM3uwe.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/popover-Cif6mCbD.js", "/assets/index-bUQLM8l5.js", "/assets/index-CBJO-X9V.js", "/assets/index-BdQq_4o_.js", "/assets/badge-DliJJe0J.js", "/assets/debounce-C-7-H-Ti.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/index-KTbvq4gf.js", "/assets/index-k7qIncBC.js", "/assets/index-CabYiTh8.js"], "css": [] }, "routes/system.account.role.edit.$id": { "id": "routes/system.account.role.edit.$id", "parentId": "routes/system.account.role", "path": "edit/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.account.role.edit._id-BEzLcTeT.js", "imports": ["/assets/system.account.role.edit._id-DHdLkyqX.js", "/assets/jsx-runtime-C-_spy54.js", "/assets/form-EOytp2cR.js", "/assets/button-8zOaFnqZ.js", "/assets/index-aGVi9Z7h.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/label-CGr_cgmC.js", "/assets/index-BJ0lhZ-K.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/index-hdkCHUwo.js", "/assets/field-RlHc_fdj.js", "/assets/500-CvlJQvp0.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/delete-Ut9SK8Xu.js", "/assets/index-DPZVHeJL.js", "/assets/i18next-BaiEmIpz.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/form-BJRS087V.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/card-BavCCNFE.js", "/assets/action-DSYjqVEc.js", "/assets/input-CWsqa6a4.js", "/assets/textarea-D8a5b60f.js", "/assets/roles-BPHs5haX.js", "/assets/get-changed-values-vLde9APN.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/form-BJoh7EuQ.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/index-Cb7h-Ku-.js"], "css": [] }, "routes/system.account.user.edit.$id": { "id": "routes/system.account.user.edit.$id", "parentId": "routes/system.account.user", "path": "edit/:id", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.account.user.edit._id-dobmSkyu.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/form-EOytp2cR.js", "/assets/index-hdkCHUwo.js", "/assets/field-RlHc_fdj.js", "/assets/index-aGVi9Z7h.js", "/assets/index-Cb7h-Ku-.js", "/assets/500-CvlJQvp0.js", "/assets/delete-Ut9SK8Xu.js", "/assets/form-BJRS087V.js", "/assets/select-multi-B-0pe142.js", "/assets/input-CWsqa6a4.js", "/assets/action-DSYjqVEc.js", "/assets/log-Dv4uGBGl.js", "/assets/roles-BPHs5haX.js", "/assets/form-BJoh7EuQ.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/label-CGr_cgmC.js", "/assets/index-BJ0lhZ-K.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/index-DPZVHeJL.js", "/assets/i18next-BaiEmIpz.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/card-BavCCNFE.js", "/assets/command-DoxM3uwe.js", "/assets/badge-DliJJe0J.js", "/assets/popover-Cif6mCbD.js", "/assets/index-bUQLM8l5.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/api.auth.$provider.callback": { "id": "routes/api.auth.$provider.callback", "parentId": "root", "path": "api/auth/:provider/callback", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.auth._provider.callback-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/playground.article.category": { "id": "routes/playground.article.category", "parentId": "root", "path": "playground/article/category", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.article.category-CUd9L7MT.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/layout-B3OT-lDC.js", "/assets/500-CvlJQvp0.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/i18next-BaiEmIpz.js", "/assets/index-CQpobmnh.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-BEBrh2Va.js", "/assets/index-CmlQ-bcy.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/avatar-BbKjKTaI.js", "/assets/collapsible-DP1HK-Rw.js", "/assets/input-CWsqa6a4.js", "/assets/separator-DzvNw-3x.js", "/assets/tooltip-dCS1zgo4.js", "/assets/index-CabYiTh8.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/dynamic-icon-B2CUf8En.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/base-url-B9uMRsbQ.js", "/assets/roles-BPHs5haX.js", "/assets/index-BP0AYnXF.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/isBrowser-BS1Xf4tW.js", "/assets/node-_8Bt17R8.js", "/assets/badge-DliJJe0J.js"], "css": [] }, "routes/playground.dashboard.about": { "id": "routes/playground.dashboard.about", "parentId": "routes/playground.dashboard", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.dashboard.about-B8VxIf8C.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/index-aGVi9Z7h.js", "/assets/500-CvlJQvp0.js", "/assets/badge-DliJJe0J.js", "/assets/button-8zOaFnqZ.js", "/assets/calendar-yfKgFR-U.js", "/assets/checkbox-Ns6fPQCo.js", "/assets/collapsible-DP1HK-Rw.js", "/assets/label-CGr_cgmC.js", "/assets/popover-Cif6mCbD.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/debounce-C-7-H-Ti.js", "/assets/components-CzmxjdGq.js", "/assets/try-parse-D_xF9tNz.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/index-DN0hhrBY.js", "/assets/index-BTG9THwZ.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-oFZnn4P-.js", "/assets/index-k7qIncBC.js", "/assets/index-bUQLM8l5.js", "/assets/input-CWsqa6a4.js", "/assets/separator-DzvNw-3x.js", "/assets/index-BEBrh2Va.js", "/assets/index-CmlQ-bcy.js", "/assets/tooltip-dCS1zgo4.js", "/assets/index-CabYiTh8.js"], "css": [] }, "routes/system.account.role._index": { "id": "routes/system.account.role._index", "parentId": "routes/system.account.role", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.account.role._index-CASKQTdX.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/500-CvlJQvp0.js", "/assets/create-BR9gIq3J.js", "/assets/delete-Ut9SK8Xu.js", "/assets/edit-CvmQ0u5a.js", "/assets/index-woQ0_p5b.js", "/assets/checkbox-Ns6fPQCo.js", "/assets/action-DSYjqVEc.js", "/assets/resource-BEg55So-.js", "/assets/roles-BPHs5haX.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/index-DPZVHeJL.js", "/assets/i18next-BaiEmIpz.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/index-BlMPtN9h.js", "/assets/command-DoxM3uwe.js", "/assets/index-CQpobmnh.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/select-DDv_CCM3.js", "/assets/index-BdQq_4o_.js", "/assets/index-k7qIncBC.js", "/assets/index-CabYiTh8.js", "/assets/badge-DliJJe0J.js", "/assets/popover-Cif6mCbD.js", "/assets/separator-DzvNw-3x.js", "/assets/calendar-yfKgFR-U.js", "/assets/input-CWsqa6a4.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/system.account.role.create": { "id": "routes/system.account.role.create", "parentId": "routes/system.account.role", "path": "create", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.account.role.create-CcazMgrJ.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/500-CvlJQvp0.js", "/assets/system.account.role.edit._id-DHdLkyqX.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/index-hdkCHUwo.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/form-EOytp2cR.js", "/assets/label-CGr_cgmC.js", "/assets/index-BJ0lhZ-K.js", "/assets/components-CzmxjdGq.js", "/assets/field-RlHc_fdj.js", "/assets/delete-Ut9SK8Xu.js", "/assets/index-DPZVHeJL.js", "/assets/i18next-BaiEmIpz.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/form-BJRS087V.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/create-BR9gIq3J.js", "/assets/card-BavCCNFE.js", "/assets/action-DSYjqVEc.js", "/assets/input-CWsqa6a4.js", "/assets/textarea-D8a5b60f.js", "/assets/roles-BPHs5haX.js", "/assets/get-changed-values-vLde9APN.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/form-BJoh7EuQ.js", "/assets/index-Cb7h-Ku-.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/system.account.user._index": { "id": "routes/system.account.user._index", "parentId": "routes/system.account.user", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.account.user._index-DWCGLU5a.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/index-aGVi9Z7h.js", "/assets/500-CvlJQvp0.js", "/assets/delete-Ut9SK8Xu.js", "/assets/edit-CvmQ0u5a.js", "/assets/index-woQ0_p5b.js", "/assets/avatar-BbKjKTaI.js", "/assets/badge-DliJJe0J.js", "/assets/checkbox-Ns6fPQCo.js", "/assets/action-DSYjqVEc.js", "/assets/resource-BEg55So-.js", "/assets/roles-BPHs5haX.js", "/assets/user-BZJo8VNU.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/index-DPZVHeJL.js", "/assets/i18next-BaiEmIpz.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/index-BlMPtN9h.js", "/assets/command-DoxM3uwe.js", "/assets/index-CQpobmnh.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/select-DDv_CCM3.js", "/assets/index-BdQq_4o_.js", "/assets/index-k7qIncBC.js", "/assets/index-CabYiTh8.js", "/assets/popover-Cif6mCbD.js", "/assets/separator-DzvNw-3x.js", "/assets/calendar-yfKgFR-U.js", "/assets/input-CWsqa6a4.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/api.auth.$provider._index": { "id": "routes/api.auth.$provider._index", "parentId": "root", "path": "api/auth/:provider", "index": true, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.auth._provider._index-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/playground.dashboard.demo": { "id": "routes/playground.dashboard.demo", "parentId": "routes/playground.dashboard", "path": "demo", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.dashboard.demo-Dw7Y-ehB.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/form-EOytp2cR.js", "/assets/index-hdkCHUwo.js", "/assets/field-RlHc_fdj.js", "/assets/index-aGVi9Z7h.js", "/assets/500-CvlJQvp0.js", "/assets/combobox-BWysUI0X.js", "/assets/select-BaHbv5GU.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/button-8zOaFnqZ.js", "/assets/card-BavCCNFE.js", "/assets/chart-jH2V8G4G.js", "/assets/dialog-BQdA7G1h.js", "/assets/input-CWsqa6a4.js", "/assets/select-DDv_CCM3.js", "/assets/index-BU-I6paI.js", "/assets/index-BTG9THwZ.js", "/assets/index-Dm-ooxTM.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-CBJO-X9V.js", "/assets/textarea-D8a5b60f.js", "/assets/typography-BLrnCGnf.js", "/assets/action-DSYjqVEc.js", "/assets/post-BInKrOu8.js", "/assets/resource-BEg55So-.js", "/assets/get-changed-values-vLde9APN.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/post-IjVlnkkq.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/components-CzmxjdGq.js", "/assets/label-CGr_cgmC.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/command-DoxM3uwe.js", "/assets/index-BEBrh2Va.js", "/assets/index-CmlQ-bcy.js", "/assets/index-oFZnn4P-.js", "/assets/popover-Cif6mCbD.js", "/assets/index-bUQLM8l5.js", "/assets/index-BdQq_4o_.js", "/assets/debounce-C-7-H-Ti.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/index-KTbvq4gf.js", "/assets/index-k7qIncBC.js", "/assets/index-CabYiTh8.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/i18next-BaiEmIpz.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/index-Cb7h-Ku-.js"], "css": [] }, "routes/system.admin.log.show.$id": { "id": "routes/system.admin.log.show.$id", "parentId": "routes/system.admin.log", "path": "show/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.admin.log.show._id-C0qvgMg_.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/500-CvlJQvp0.js", "/assets/code-BEULcS2d.js", "/assets/avatar-BbKjKTaI.js", "/assets/badge-DliJJe0J.js", "/assets/label-CGr_cgmC.js", "/assets/typography-BLrnCGnf.js", "/assets/log-Dv4uGBGl.js", "/assets/deep-parse-CMMvj5PV.js", "/assets/components-CzmxjdGq.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/index-hdkCHUwo.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/base-url-B9uMRsbQ.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-BJ0lhZ-K.js", "/assets/try-parse-D_xF9tNz.js"], "css": [] }, "routes/system.admin.auditRecord": { "id": "routes/system.admin.auditRecord", "parentId": "root", "path": "system/admin/auditRecord", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.admin.auditRecord-CUd9L7MT.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/layout-B3OT-lDC.js", "/assets/500-CvlJQvp0.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/i18next-BaiEmIpz.js", "/assets/index-CQpobmnh.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-BEBrh2Va.js", "/assets/index-CmlQ-bcy.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/avatar-BbKjKTaI.js", "/assets/collapsible-DP1HK-Rw.js", "/assets/input-CWsqa6a4.js", "/assets/separator-DzvNw-3x.js", "/assets/tooltip-dCS1zgo4.js", "/assets/index-CabYiTh8.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/dynamic-icon-B2CUf8En.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/base-url-B9uMRsbQ.js", "/assets/roles-BPHs5haX.js", "/assets/index-BP0AYnXF.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/isBrowser-BS1Xf4tW.js", "/assets/node-_8Bt17R8.js", "/assets/badge-DliJJe0J.js"], "css": [] }, "routes/system.admin.menu._index": { "id": "routes/system.admin.menu._index", "parentId": "routes/system.admin.menu", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/system.admin.menu._index-yWjBxdXX.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/index-aGVi9Z7h.js", "/assets/index-IcWDtlcJ.js", "/assets/form-EOytp2cR.js", "/assets/index-Cb7h-Ku-.js", "/assets/combobox-BWysUI0X.js", "/assets/button-8zOaFnqZ.js", "/assets/dialog-BQdA7G1h.js", "/assets/input-CWsqa6a4.js", "/assets/switch-ClZeFjjv.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/i18next-BaiEmIpz.js", "/assets/dynamic-icon-B2CUf8En.js", "/assets/card-BavCCNFE.js", "/assets/tooltip-dCS1zgo4.js", "/assets/resources-nPXTaVLM.js", "/assets/action-DSYjqVEc.js", "/assets/resource-BEg55So-.js", "/assets/index-BlMPtN9h.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/typography-BLrnCGnf.js", "/assets/components-CzmxjdGq.js", "/assets/label-CGr_cgmC.js", "/assets/index-BJ0lhZ-K.js", "/assets/command-DoxM3uwe.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/popover-Cif6mCbD.js", "/assets/index-bUQLM8l5.js", "/assets/index-CBJO-X9V.js", "/assets/index-BdQq_4o_.js", "/assets/index-k7qIncBC.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/index-CabYiTh8.js", "/assets/index-DN0hhrBY.js"], "css": [] }, "routes/playground.article.post": { "id": "routes/playground.article.post", "parentId": "root", "path": "playground/article/post", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.article.post-CUd9L7MT.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/layout-B3OT-lDC.js", "/assets/500-CvlJQvp0.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/i18next-BaiEmIpz.js", "/assets/index-CQpobmnh.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-BEBrh2Va.js", "/assets/index-CmlQ-bcy.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/avatar-BbKjKTaI.js", "/assets/collapsible-DP1HK-Rw.js", "/assets/input-CWsqa6a4.js", "/assets/separator-DzvNw-3x.js", "/assets/tooltip-dCS1zgo4.js", "/assets/index-CabYiTh8.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/dynamic-icon-B2CUf8En.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/base-url-B9uMRsbQ.js", "/assets/roles-BPHs5haX.js", "/assets/index-BP0AYnXF.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/isBrowser-BS1Xf4tW.js", "/assets/node-_8Bt17R8.js", "/assets/badge-DliJJe0J.js"], "css": [] }, "routes/system.admin.casbinRule": { "id": "routes/system.admin.casbinRule", "parentId": "root", "path": "system/admin/casbinRule", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.admin.casbinRule-DQZof6k-.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/layout-B3OT-lDC.js", "/assets/500-CvlJQvp0.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/i18next-BaiEmIpz.js", "/assets/index-CQpobmnh.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-BEBrh2Va.js", "/assets/index-CmlQ-bcy.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/avatar-BbKjKTaI.js", "/assets/collapsible-DP1HK-Rw.js", "/assets/input-CWsqa6a4.js", "/assets/separator-DzvNw-3x.js", "/assets/tooltip-dCS1zgo4.js", "/assets/index-CabYiTh8.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/dynamic-icon-B2CUf8En.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/base-url-B9uMRsbQ.js", "/assets/roles-BPHs5haX.js", "/assets/index-BP0AYnXF.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/isBrowser-BS1Xf4tW.js", "/assets/node-_8Bt17R8.js", "/assets/badge-DliJJe0J.js"], "css": [] }, "routes/system.admin.log._index": { "id": "routes/system.admin.log._index", "parentId": "routes/system.admin.log", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.admin.log._index-BkruJl3I.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/dayjs.min-CHrC0Ux9.js", "/assets/index-aGVi9Z7h.js", "/assets/500-CvlJQvp0.js", "/assets/index-woQ0_p5b.js", "/assets/show-oQ5vHUQo.js", "/assets/avatar-BbKjKTaI.js", "/assets/badge-DliJJe0J.js", "/assets/checkbox-Ns6fPQCo.js", "/assets/action-DSYjqVEc.js", "/assets/log-Dv4uGBGl.js", "/assets/resource-BEg55So-.js", "/assets/get-default-title-CrVGbO9H.js", "/assets/components-CzmxjdGq.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-DN0hhrBY.js", "/assets/index-DPZVHeJL.js", "/assets/i18next-BaiEmIpz.js", "/assets/alert-dialog-BBz2U9GM.js", "/assets/index-BTG9THwZ.js", "/assets/index-BEBrh2Va.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-oFZnn4P-.js", "/assets/index-CmlQ-bcy.js", "/assets/isEqual-KSD6Iy0l.js", "/assets/index-BlMPtN9h.js", "/assets/command-DoxM3uwe.js", "/assets/index-CQpobmnh.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/select-DDv_CCM3.js", "/assets/index-BdQq_4o_.js", "/assets/index-k7qIncBC.js", "/assets/index-CabYiTh8.js", "/assets/popover-Cif6mCbD.js", "/assets/separator-DzvNw-3x.js", "/assets/calendar-yfKgFR-U.js", "/assets/input-CWsqa6a4.js", "/assets/resources-nPXTaVLM.js", "/assets/capitalize-first-letter-B7Vzw64t.js"], "css": [] }, "routes/api.permissions.switch": { "id": "routes/api.permissions.switch", "parentId": "root", "path": "api/permissions/switch", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.permissions.switch-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.tyCallback.$func": { "id": "routes/api.tyCallback.$func", "parentId": "root", "path": "api/tyCallback/:func", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.tyCallback._func-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/playground.dashboard": { "id": "routes/playground.dashboard", "parentId": "root", "path": "playground/dashboard", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/playground.dashboard-CUd9L7MT.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/layout-B3OT-lDC.js", "/assets/500-CvlJQvp0.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/i18next-BaiEmIpz.js", "/assets/index-CQpobmnh.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-BEBrh2Va.js", "/assets/index-CmlQ-bcy.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/avatar-BbKjKTaI.js", "/assets/collapsible-DP1HK-Rw.js", "/assets/input-CWsqa6a4.js", "/assets/separator-DzvNw-3x.js", "/assets/tooltip-dCS1zgo4.js", "/assets/index-CabYiTh8.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/dynamic-icon-B2CUf8En.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/base-url-B9uMRsbQ.js", "/assets/roles-BPHs5haX.js", "/assets/index-BP0AYnXF.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/isBrowser-BS1Xf4tW.js", "/assets/node-_8Bt17R8.js", "/assets/badge-DliJJe0J.js"], "css": [] }, "routes/api.set-preferences": { "id": "routes/api.set-preferences", "parentId": "root", "path": "api/set-preferences", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.set-preferences-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/system.account.role": { "id": "routes/system.account.role", "parentId": "root", "path": "system/account/role", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.account.role-CUd9L7MT.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/layout-B3OT-lDC.js", "/assets/500-CvlJQvp0.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/i18next-BaiEmIpz.js", "/assets/index-CQpobmnh.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-BEBrh2Va.js", "/assets/index-CmlQ-bcy.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/avatar-BbKjKTaI.js", "/assets/collapsible-DP1HK-Rw.js", "/assets/input-CWsqa6a4.js", "/assets/separator-DzvNw-3x.js", "/assets/tooltip-dCS1zgo4.js", "/assets/index-CabYiTh8.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/dynamic-icon-B2CUf8En.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/base-url-B9uMRsbQ.js", "/assets/roles-BPHs5haX.js", "/assets/index-BP0AYnXF.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/isBrowser-BS1Xf4tW.js", "/assets/node-_8Bt17R8.js", "/assets/badge-DliJJe0J.js"], "css": [] }, "routes/system.account.user": { "id": "routes/system.account.user", "parentId": "root", "path": "system/account/user", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.account.user-C3eytFYI.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/layout-B3OT-lDC.js", "/assets/500-CvlJQvp0.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/i18next-BaiEmIpz.js", "/assets/index-CQpobmnh.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-BEBrh2Va.js", "/assets/index-CmlQ-bcy.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/avatar-BbKjKTaI.js", "/assets/collapsible-DP1HK-Rw.js", "/assets/input-CWsqa6a4.js", "/assets/separator-DzvNw-3x.js", "/assets/tooltip-dCS1zgo4.js", "/assets/index-CabYiTh8.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/dynamic-icon-B2CUf8En.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/base-url-B9uMRsbQ.js", "/assets/roles-BPHs5haX.js", "/assets/index-BP0AYnXF.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/isBrowser-BS1Xf4tW.js", "/assets/node-_8Bt17R8.js", "/assets/badge-DliJJe0J.js"], "css": [] }, "routes/api.$model.$action": { "id": "routes/api.$model.$action", "parentId": "root", "path": "api/:model/:action", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api._model._action-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.image-resize.$": { "id": "routes/api.image-resize.$", "parentId": "root", "path": "api/image-resize/*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.image-resize._-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/system.admin.menu": { "id": "routes/system.admin.menu", "parentId": "root", "path": "system/admin/menu", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.admin.menu-CUd9L7MT.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/layout-B3OT-lDC.js", "/assets/500-CvlJQvp0.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/i18next-BaiEmIpz.js", "/assets/index-CQpobmnh.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-BEBrh2Va.js", "/assets/index-CmlQ-bcy.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/avatar-BbKjKTaI.js", "/assets/collapsible-DP1HK-Rw.js", "/assets/input-CWsqa6a4.js", "/assets/separator-DzvNw-3x.js", "/assets/tooltip-dCS1zgo4.js", "/assets/index-CabYiTh8.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/dynamic-icon-B2CUf8En.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/base-url-B9uMRsbQ.js", "/assets/roles-BPHs5haX.js", "/assets/index-BP0AYnXF.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/isBrowser-BS1Xf4tW.js", "/assets/node-_8Bt17R8.js", "/assets/badge-DliJJe0J.js"], "css": [] }, "routes/system.admin.log": { "id": "routes/system.admin.log", "parentId": "root", "path": "system/admin/log", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/system.admin.log-CUd9L7MT.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/layout-B3OT-lDC.js", "/assets/500-CvlJQvp0.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/i18next-BaiEmIpz.js", "/assets/index-CQpobmnh.js", "/assets/index-BU-I6paI.js", "/assets/index-BJ0lhZ-K.js", "/assets/index-BTG9THwZ.js", "/assets/index-oFZnn4P-.js", "/assets/index-KTbvq4gf.js", "/assets/index-CBJO-X9V.js", "/assets/index-BEBrh2Va.js", "/assets/index-CmlQ-bcy.js", "/assets/tslib.es6-DDzNqjJ8.js", "/assets/index-bUQLM8l5.js", "/assets/index-Dm-ooxTM.js", "/assets/avatar-BbKjKTaI.js", "/assets/collapsible-DP1HK-Rw.js", "/assets/input-CWsqa6a4.js", "/assets/separator-DzvNw-3x.js", "/assets/tooltip-dCS1zgo4.js", "/assets/index-CabYiTh8.js", "/assets/capitalize-first-letter-B7Vzw64t.js", "/assets/dynamic-icon-B2CUf8En.js", "/assets/preload-helper-D7HrI6pR.js", "/assets/base-url-B9uMRsbQ.js", "/assets/roles-BPHs5haX.js", "/assets/index-BP0AYnXF.js", "/assets/tiny-invariant-CCoILDQG.js", "/assets/isBrowser-BS1Xf4tW.js", "/assets/node-_8Bt17R8.js", "/assets/badge-DliJJe0J.js"], "css": [] }, "routes/api.auth.logout": { "id": "routes/api.auth.logout", "parentId": "root", "path": "api/auth/logout", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.auth.logout-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/password-forgot": { "id": "routes/password-forgot", "parentId": "root", "path": "password-forgot", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/password-forgot-CxD97HL8.js", "imports": ["/assets/jsx-runtime-C-_spy54.js"], "css": [] }, "routes/password-update": { "id": "routes/password-update", "parentId": "root", "path": "password-update", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/password-update-B6UHRbBU.js", "imports": ["/assets/jsx-runtime-C-_spy54.js"], "css": [] }, "routes/api.send.code": { "id": "routes/api.send.code", "parentId": "root", "path": "api/send/code", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.send.code-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.discover": { "id": "routes/api.discover", "parentId": "root", "path": "api/discover", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.discover-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.ty.$func": { "id": "routes/api.ty.$func", "parentId": "root", "path": "api/ty/:func", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.ty._func-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.auth.me": { "id": "routes/api.auth.me", "parentId": "root", "path": "api/auth/me", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.auth.me-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.health": { "id": "routes/api.health", "parentId": "root", "path": "api/health", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.health-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api-docs": { "id": "routes/api-docs", "parentId": "root", "path": "api-docs", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api-docs-BDJ8XOt4.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-aGVi9Z7h.js"], "css": [] }, "routes/register": { "id": "routes/register", "parentId": "root", "path": "register", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/register-DB5wZZJn.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/index-hdkCHUwo.js", "/assets/i18next-BaiEmIpz.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/input-CWsqa6a4.js", "/assets/label-CGr_cgmC.js", "/assets/resources-nPXTaVLM.js", "/assets/tcsk-oauth2-CjBIOxXG.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/index-BJ0lhZ-K.js", "/assets/user-BZJo8VNU.js"], "css": [] }, "routes/api.sql": { "id": "routes/api.sql", "parentId": "root", "path": "api/sql", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.sql-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-C6d-v1ok.js", "imports": [], "css": [] }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/login-DFDWFXvT.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/i18next-BaiEmIpz.js", "/assets/button-8zOaFnqZ.js", "/assets/card-BavCCNFE.js", "/assets/input-CWsqa6a4.js", "/assets/label-CGr_cgmC.js", "/assets/resources-nPXTaVLM.js", "/assets/tcsk-oauth2-CjBIOxXG.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js", "/assets/index-aGVi9Z7h.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/index-BJ0lhZ-K.js", "/assets/user-BZJo8VNU.js"], "css": [] }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_-BHGQgwbZ.js", "imports": ["/assets/jsx-runtime-C-_spy54.js", "/assets/404-7AhGMtWo.js", "/assets/index-hdkCHUwo.js", "/assets/index-aGVi9Z7h.js", "/assets/button-8zOaFnqZ.js", "/assets/lucide-icons-Cs_6wGxK.js", "/assets/components-CzmxjdGq.js", "/assets/index-DN0hhrBY.js"], "css": [] } }, "url": "/assets/manifest-e9f8baba.js", "version": "e9f8baba" };
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
  "routes/playground.frontRoute.frontRouteProject": {
    id: "routes/playground.frontRoute.frontRouteProject",
    parentId: "root",
    path: "playground/frontRoute/frontRouteProject",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/playground.frontRoute.frontRouteProject.history.$id": {
    id: "routes/playground.frontRoute.frontRouteProject.history.$id",
    parentId: "routes/playground.frontRoute.frontRouteProject",
    path: "history/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/playground.frontRoute.frontRouteModule": {
    id: "routes/playground.frontRoute.frontRouteModule",
    parentId: "root",
    path: "playground/frontRoute/frontRouteModule",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/playground.frontRoute.frontRouteModule.history.$id": {
    id: "routes/playground.frontRoute.frontRouteModule.history.$id",
    parentId: "routes/playground.frontRoute.frontRouteModule",
    path: "history/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/playground.frontRoute.frontRouteProject.edit.$id": {
    id: "routes/playground.frontRoute.frontRouteProject.edit.$id",
    parentId: "routes/playground.frontRoute.frontRouteProject",
    path: "edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/playground.frontRoute.frontRouteModule.edit.$id": {
    id: "routes/playground.frontRoute.frontRouteModule.edit.$id",
    parentId: "routes/playground.frontRoute.frontRouteModule",
    path: "edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/playground.frontRoute.frontRouteProject._index": {
    id: "routes/playground.frontRoute.frontRouteProject._index",
    parentId: "routes/playground.frontRoute.frontRouteProject",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route7
  },
  "routes/playground.frontRoute.frontRouteProject.create": {
    id: "routes/playground.frontRoute.frontRouteProject.create",
    parentId: "routes/playground.frontRoute.frontRouteProject",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/playground.frontRoute.frontRouteModule._index": {
    id: "routes/playground.frontRoute.frontRouteModule._index",
    parentId: "routes/playground.frontRoute.frontRouteModule",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route9
  },
  "routes/playground.frontRoute.frontRouteModule.create": {
    id: "routes/playground.frontRoute.frontRouteModule.create",
    parentId: "routes/playground.frontRoute.frontRouteModule",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/playground.dashboard": {
    id: "routes/playground.dashboard",
    parentId: "root",
    path: "playground/dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/playground.dashboard.dynamicPage.clone.$id": {
    id: "routes/playground.dashboard.dynamicPage.clone.$id",
    parentId: "routes/playground.dashboard",
    path: "dynamicPage/clone/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/playground.dashboard.dynamicPage.edit.$id": {
    id: "routes/playground.dashboard.dynamicPage.edit.$id",
    parentId: "routes/playground.dashboard",
    path: "dynamicPage/edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route13
  },
  "routes/playground.dashboard.demoViewTransition": {
    id: "routes/playground.dashboard.demoViewTransition",
    parentId: "routes/playground.dashboard",
    path: "demoViewTransition",
    index: void 0,
    caseSensitive: void 0,
    module: route14
  },
  "routes/playground.dashboard.dynamicPage._index": {
    id: "routes/playground.dashboard.dynamicPage._index",
    parentId: "routes/playground.dashboard",
    path: "dynamicPage",
    index: true,
    caseSensitive: void 0,
    module: route15
  },
  "routes/playground.dashboard.dynamicPage.create": {
    id: "routes/playground.dashboard.dynamicPage.create",
    parentId: "routes/playground.dashboard",
    path: "dynamicPage/create",
    index: void 0,
    caseSensitive: void 0,
    module: route16
  },
  "routes/playground.article.category": {
    id: "routes/playground.article.category",
    parentId: "root",
    path: "playground/article/category",
    index: void 0,
    caseSensitive: void 0,
    module: route17
  },
  "routes/playground.article.category.edit.$id": {
    id: "routes/playground.article.category.edit.$id",
    parentId: "routes/playground.article.category",
    path: "edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route18
  },
  "routes/playground.article.category._index": {
    id: "routes/playground.article.category._index",
    parentId: "routes/playground.article.category",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route19
  },
  "routes/playground.article.category.create": {
    id: "routes/playground.article.category.create",
    parentId: "routes/playground.article.category",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: route20
  },
  "routes/system.admin.auditRecord": {
    id: "routes/system.admin.auditRecord",
    parentId: "root",
    path: "system/admin/auditRecord",
    index: void 0,
    caseSensitive: void 0,
    module: route21
  },
  "routes/system.admin.auditRecord.applyRole": {
    id: "routes/system.admin.auditRecord.applyRole",
    parentId: "routes/system.admin.auditRecord",
    path: "applyRole",
    index: void 0,
    caseSensitive: void 0,
    module: route22
  },
  "routes/playground.article.post": {
    id: "routes/playground.article.post",
    parentId: "root",
    path: "playground/article/post",
    index: void 0,
    caseSensitive: void 0,
    module: route23
  },
  "routes/playground.article.post.clone.$id": {
    id: "routes/playground.article.post.clone.$id",
    parentId: "routes/playground.article.post",
    path: "clone/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route24
  },
  "routes/system.admin.auditRecord.show.$id": {
    id: "routes/system.admin.auditRecord.show.$id",
    parentId: "routes/system.admin.auditRecord",
    path: "show/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route25
  },
  "routes/playground.article.post.edit.$id": {
    id: "routes/playground.article.post.edit.$id",
    parentId: "routes/playground.article.post",
    path: "edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route26
  },
  "routes/playground.article.post.show.$id": {
    id: "routes/playground.article.post.show.$id",
    parentId: "routes/playground.article.post",
    path: "show/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route27
  },
  "routes/system.admin.casbinRule": {
    id: "routes/system.admin.casbinRule",
    parentId: "root",
    path: "system/admin/casbinRule",
    index: void 0,
    caseSensitive: void 0,
    module: route28
  },
  "routes/system.admin.casbinRule.edit.$id": {
    id: "routes/system.admin.casbinRule.edit.$id",
    parentId: "routes/system.admin.casbinRule",
    path: "edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route29
  },
  "routes/system.admin.auditRecord._index": {
    id: "routes/system.admin.auditRecord._index",
    parentId: "routes/system.admin.auditRecord",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route30
  },
  "routes/$group.$category.dynamic.$name": {
    id: "routes/$group.$category.dynamic.$name",
    parentId: "root",
    path: ":group/:category/dynamic/:name",
    index: void 0,
    caseSensitive: void 0,
    module: route31
  },
  "routes/playground.article.post._index": {
    id: "routes/playground.article.post._index",
    parentId: "routes/playground.article.post",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route32
  },
  "routes/playground.article.post.create": {
    id: "routes/playground.article.post.create",
    parentId: "routes/playground.article.post",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: route33
  },
  "routes/system.admin.casbinRule._index": {
    id: "routes/system.admin.casbinRule._index",
    parentId: "routes/system.admin.casbinRule",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route34
  },
  "routes/system.admin.casbinRule.create": {
    id: "routes/system.admin.casbinRule.create",
    parentId: "routes/system.admin.casbinRule",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: route35
  },
  "routes/playground.dashboard.discover": {
    id: "routes/playground.dashboard.discover",
    parentId: "routes/playground.dashboard",
    path: "discover",
    index: void 0,
    caseSensitive: void 0,
    module: route36
  },
  "routes/system.account.role": {
    id: "routes/system.account.role",
    parentId: "root",
    path: "system/account/role",
    index: void 0,
    caseSensitive: void 0,
    module: route37
  },
  "routes/system.account.role.edit.$id": {
    id: "routes/system.account.role.edit.$id",
    parentId: "routes/system.account.role",
    path: "edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route38
  },
  "routes/system.account.user": {
    id: "routes/system.account.user",
    parentId: "root",
    path: "system/account/user",
    index: void 0,
    caseSensitive: void 0,
    module: route39
  },
  "routes/system.account.user.edit.$id": {
    id: "routes/system.account.user.edit.$id",
    parentId: "routes/system.account.user",
    path: "edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route40
  },
  "routes/api.auth.$provider.callback": {
    id: "routes/api.auth.$provider.callback",
    parentId: "root",
    path: "api/auth/:provider/callback",
    index: void 0,
    caseSensitive: void 0,
    module: route41
  },
  "routes/playground.dashboard.about": {
    id: "routes/playground.dashboard.about",
    parentId: "routes/playground.dashboard",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route42
  },
  "routes/system.account.role._index": {
    id: "routes/system.account.role._index",
    parentId: "routes/system.account.role",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route43
  },
  "routes/system.account.role.create": {
    id: "routes/system.account.role.create",
    parentId: "routes/system.account.role",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: route44
  },
  "routes/system.account.user._index": {
    id: "routes/system.account.user._index",
    parentId: "routes/system.account.user",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route45
  },
  "routes/api.auth.$provider._index": {
    id: "routes/api.auth.$provider._index",
    parentId: "root",
    path: "api/auth/:provider",
    index: true,
    caseSensitive: void 0,
    module: route46
  },
  "routes/playground.dashboard.demo": {
    id: "routes/playground.dashboard.demo",
    parentId: "routes/playground.dashboard",
    path: "demo",
    index: void 0,
    caseSensitive: void 0,
    module: route47
  },
  "routes/system.admin.log": {
    id: "routes/system.admin.log",
    parentId: "root",
    path: "system/admin/log",
    index: void 0,
    caseSensitive: void 0,
    module: route48
  },
  "routes/system.admin.log.show.$id": {
    id: "routes/system.admin.log.show.$id",
    parentId: "routes/system.admin.log",
    path: "show/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route49
  },
  "routes/system.admin.menu": {
    id: "routes/system.admin.menu",
    parentId: "root",
    path: "system/admin/menu",
    index: void 0,
    caseSensitive: void 0,
    module: route50
  },
  "routes/system.admin.menu._index": {
    id: "routes/system.admin.menu._index",
    parentId: "routes/system.admin.menu",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route51
  },
  "routes/system.admin.log._index": {
    id: "routes/system.admin.log._index",
    parentId: "routes/system.admin.log",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route52
  },
  "routes/api.permissions.switch": {
    id: "routes/api.permissions.switch",
    parentId: "root",
    path: "api/permissions/switch",
    index: void 0,
    caseSensitive: void 0,
    module: route53
  },
  "routes/api.tyCallback.$func": {
    id: "routes/api.tyCallback.$func",
    parentId: "root",
    path: "api/tyCallback/:func",
    index: void 0,
    caseSensitive: void 0,
    module: route54
  },
  "routes/api.set-preferences": {
    id: "routes/api.set-preferences",
    parentId: "root",
    path: "api/set-preferences",
    index: void 0,
    caseSensitive: void 0,
    module: route55
  },
  "routes/api.$model.$action": {
    id: "routes/api.$model.$action",
    parentId: "root",
    path: "api/:model/:action",
    index: void 0,
    caseSensitive: void 0,
    module: route56
  },
  "routes/api.image-resize.$": {
    id: "routes/api.image-resize.$",
    parentId: "root",
    path: "api/image-resize/*",
    index: void 0,
    caseSensitive: void 0,
    module: route57
  },
  "routes/api.auth.logout": {
    id: "routes/api.auth.logout",
    parentId: "root",
    path: "api/auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: route58
  },
  "routes/password-forgot": {
    id: "routes/password-forgot",
    parentId: "root",
    path: "password-forgot",
    index: void 0,
    caseSensitive: void 0,
    module: route59
  },
  "routes/password-update": {
    id: "routes/password-update",
    parentId: "root",
    path: "password-update",
    index: void 0,
    caseSensitive: void 0,
    module: route60
  },
  "routes/api.send.code": {
    id: "routes/api.send.code",
    parentId: "root",
    path: "api/send/code",
    index: void 0,
    caseSensitive: void 0,
    module: route61
  },
  "routes/api.discover": {
    id: "routes/api.discover",
    parentId: "root",
    path: "api/discover",
    index: void 0,
    caseSensitive: void 0,
    module: route62
  },
  "routes/api.ty.$func": {
    id: "routes/api.ty.$func",
    parentId: "root",
    path: "api/ty/:func",
    index: void 0,
    caseSensitive: void 0,
    module: route63
  },
  "routes/api.auth.me": {
    id: "routes/api.auth.me",
    parentId: "root",
    path: "api/auth/me",
    index: void 0,
    caseSensitive: void 0,
    module: route64
  },
  "routes/api.health": {
    id: "routes/api.health",
    parentId: "root",
    path: "api/health",
    index: void 0,
    caseSensitive: void 0,
    module: route65
  },
  "routes/api-docs": {
    id: "routes/api-docs",
    parentId: "root",
    path: "api-docs",
    index: void 0,
    caseSensitive: void 0,
    module: route66
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: route67
  },
  "routes/api.sql": {
    id: "routes/api.sql",
    parentId: "root",
    path: "api/sql",
    index: void 0,
    caseSensitive: void 0,
    module: route68
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route69
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: route70
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route71
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
