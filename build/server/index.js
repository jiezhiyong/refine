;
!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ede7894c-4dce-439d-aec3-b462dd7bfc30", e._sentryDebugIdIdentifier = "sentry-dbid-ede7894c-4dce-439d-aec3-b462dd7bfc30");
  } catch (e2) {
  }
}();
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as Sentry from "@sentry/remix";
import { withSentry, captureRemixErrorBoundaryError } from "@sentry/remix";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable, createCookie, createCookieSessionStorage, data as data$1, unstable_composeUploadHandlers, unstable_createFileUploadHandler, unstable_createMemoryUploadHandler, unstable_parseMultipartFormData, redirect } from "@remix-run/node";
import { RemixServer, useRouteError, isRouteErrorResponse, Link as Link$1, useNavigation, Outlet, data, useLoaderData, Meta, Links, ScrollRestoration, Scripts, useActionData, Form, useNavigate, useFetcher, useSearchParams, useSubmit, useMatches, useRouteLoaderData } from "@remix-run/react";
import { renderToPipeableStream } from "react-dom/server";
import { isbot } from "isbot";
import { DevtoolsProvider, DevtoolsPanel } from "@refinedev/devtools";
import { CanAccess, Refine, useTranslation, useCreateButton, useRouterContext, useRouterType, useLink, useBreadcrumb, useRefineContext, useResource, matchResourceFromRoute, useTranslate, useUserFriendlyName, AccessControlContext, useNavigation as useNavigation$1, useResourceParams, useCan, useMutationMode, useDelete, useWarnAboutChange, pickNotDeprecated, useBack, useLogout } from "@refinedev/core";
import routerProvider, { UnsavedChangesNotifier } from "@refinedev/remix-router";
import nProgress from "nprogress";
import * as React from "react";
import React__default, { createContext, useState, useCallback, useContext, useRef, useEffect, forwardRef, Fragment as Fragment$1, useMemo, isValidElement } from "react";
import { useTheme, createThemeSessionResolver, ThemeProvider, PreventFlashOnWrongTheme, Theme } from "remix-themes";
import { Toaster as Toaster$1 } from "sonner";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { RefreshCwIcon, X, Loader as Loader$1, PieChart, Brain, Siren, UsersRound, Clock, ChevronLeft, ChevronRight, PanelLeft, Check, SquarePlusIcon, HomeIcon, Search, XIcon, CheckIcon, ChevronDown, ChevronUp, Circle, FilterIcon, FilterX, Eye, Edit, Trash2, Star, MoreHorizontal, Plus, Settings2, FileText, Link as Link$2, Copy, CornerUpRight, CornerUpLeft, LineChart, GalleryVerticalEnd, Trash, Bell, ArrowUp, ArrowDown, ChevronsUpDown, BadgeCheck, CreditCard, LogOut, BicepsFlexed, AudioLines, Baby, Sun, Moon, Bug, Activity, Languages, Fullscreen, Filter } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import invariant from "tiny-invariant";
import dataProviderNestjsCrud from "@refinedev/nestjsx-crud";
import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { statSync, createReadStream } from "fs";
import path from "path";
import { PassThrough as PassThrough$1 } from "stream";
import sharp from "sharp";
import { EventEmitter } from "events";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { eventStream } from "remix-utils/sse/server";
import "socket.io";
import { DayPicker } from "react-day-picker";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { useDebounceFn } from "ahooks";
import { useTable } from "@refinedev/react-table";
import { flexRender } from "@tanstack/react-table";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownMenuTrigger as DropdownMenuTrigger$1 } from "@radix-ui/react-dropdown-menu";
import { DotsHorizontalIcon, CheckIcon as CheckIcon$1, DotsVerticalIcon, DoubleArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, DoubleArrowRightIcon, CaretUpIcon, CaretDownIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import { format } from "date-fns";
import { Command as Command$1 } from "cmdk";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { z } from "zod";
import { newModel, StringAdapter, newEnforcer } from "casbin";
var _global = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
_global.SENTRY_RELEASE = { id: "3619a363c708f73a99fe8d77c16f0e477fa8b476" };
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
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const LoadingIcon = React__default.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(RefreshCwIcon, { ref, className: cn("h-4 w-4 animate-spin", className), ...props });
});
LoadingIcon.displayName = "LoadingIcon";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
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
      if (React.isValidElement(icon)) {
        return icon;
      }
      return loading ? /* @__PURE__ */ jsx(LoadingIcon, { className: "mr-2" }) : null;
    }, [icon, loading]);
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, disabled, ...props, children: size === "icon" ? loading ? /* @__PURE__ */ jsx(LoadingIcon, {}) : children : /* @__PURE__ */ jsxs(Fragment, { children: [
      Icon,
      children
    ] }) });
  }
);
Button.displayName = "Button";
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
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
        "fixed left-[50%] top-[5%] z-50 grid w-full max-w-[50%] translate-x-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-white/20 dark:bg-slate-950 sm:rounded-lg",
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
const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("whitespace-pre font-[monospace] text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
const AlertDialogAction = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Action,
  {
    ref,
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
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
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
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
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
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("whitespace-pre font-[monospace] text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const ModalContext = createContext(void 0);
const ModalProvider = ({ children }) => {
  const [modalOptions, setModalOptions] = useState(null);
  const showModal = useCallback((options) => {
    setModalOptions(options);
  }, []);
  const handleConfirm = useCallback(() => {
    var _a;
    (_a = modalOptions == null ? void 0 : modalOptions.onConfirm) == null ? void 0 : _a.call(modalOptions);
    setModalOptions(null);
  }, [modalOptions]);
  const handleCancel = useCallback(() => {
    var _a;
    (_a = modalOptions == null ? void 0 : modalOptions.onCancel) == null ? void 0 : _a.call(modalOptions);
    setModalOptions(null);
  }, [modalOptions]);
  const renderModal = () => {
    if (!modalOptions)
      return null;
    switch (modalOptions.type) {
      case "alert":
        return /* @__PURE__ */ jsx(AlertDialog, { open: true, children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
          /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
            /* @__PURE__ */ jsx(AlertDialogTitle, { children: modalOptions.title }),
            /* @__PURE__ */ jsx(AlertDialogDescription, { children: modalOptions.description })
          ] }),
          /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
            /* @__PURE__ */ jsx(AlertDialogCancel, { onClick: handleCancel, children: modalOptions.cancelText || "Cancel" }),
            /* @__PURE__ */ jsx(AlertDialogAction, { onClick: handleConfirm, children: modalOptions.confirmText || "Confirm" })
          ] })
        ] }) });
      case "dialog":
        return /* @__PURE__ */ jsx(Dialog, { open: true, children: /* @__PURE__ */ jsxs(DialogContent, { children: [
          /* @__PURE__ */ jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsx(DialogTitle, { children: modalOptions.title }),
            /* @__PURE__ */ jsx(DialogDescription, { children: modalOptions.description })
          ] }),
          modalOptions.content,
          /* @__PURE__ */ jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: handleCancel, children: modalOptions.cancelText || "Cancel" }),
            /* @__PURE__ */ jsx(Button, { onClick: handleConfirm, children: modalOptions.confirmText || "Confirm" })
          ] })
        ] }) });
      case "custom":
        return modalOptions.content;
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsxs(ModalContext.Provider, { value: { showModal }, children: [
    children,
    renderModal()
  ] });
};
const useModal = () => {
  const context = useContext(ModalContext);
  if (context === void 0) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
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
function PageError({ error }) {
  const routeError = useRouteError();
  if (!error) {
    error = routeError;
  }
  useMountEffect(() => {
    console.error("@PageError", error);
  });
  return /* @__PURE__ */ jsx("div", { className: "relative h-screen flex-1 font-['sans-serif']", children: /* @__PURE__ */ jsxs("div", { className: "absolute left-1/2 top-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-center leading-[1.4]", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-[-1] mx-auto mb-5 mt-0 h-[200px]", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-forceground absolute left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase", children: "Oops!" }),
      /* @__PURE__ */ jsx("h2", { className: "text-forceground absolute inset-x-0 bottom-0 m-auto inline-block bg-background px-[5px] pt-5 text-[28px] font-normal uppercase", children: isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : "Something went wrong" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mb-8 text-red-500", children: error.message || "unknown error" }),
    /* @__PURE__ */ jsx(Button, { size: "lg", onClick: () => location.reload(), children: "Try Again" })
  ] }) });
}
function NotFound() {
  return /* @__PURE__ */ jsx("div", { className: "relative h-screen font-['sans-serif']", children: /* @__PURE__ */ jsxs("div", { className: "absolute left-1/2 top-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-center leading-[1.4]", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-[-1] mx-auto mb-5 mt-0 h-[200px]", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-forceground absolute left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase", children: "Oops!" }),
      /* @__PURE__ */ jsx("h2", { className: "text-forceground absolute inset-x-0 bottom-0 m-auto inline-block bg-background px-[5px] pt-5 text-[28px] font-normal uppercase", children: "404 - The Page can't be found" })
    ] }),
    /* @__PURE__ */ jsx(Button, { size: "lg", asChild: true, children: /* @__PURE__ */ jsx(Link$1, { to: "/", children: "Back To Home" }) })
  ] }) });
}
invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set.");
const preferencesCookie = createCookie("preferences", {
  secrets: [process.env.SESSION_SECRET ?? ""],
  path: "/",
  sameSite: "lax",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production"
});
const getCookie = async (request) => {
  const cookieHeader = request.headers.get("Cookie");
  return await preferencesCookie.parse(cookieHeader);
};
const setCookie = async (request, cookie) => {
  const exitingCookie = await getCookie(request);
  const cookieHeader = await preferencesCookie.serialize({
    ...exitingCookie,
    ...cookie
  });
  return new Response(null, {
    headers: {
      "Set-Cookie": cookieHeader
    }
  });
};
invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set.");
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: [process.env.SESSION_SECRET ?? ""],
    path: "/",
    sameSite: "lax",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7
    // 7 days
  }
});
const { getSession, commitSession, destroySession } = sessionStorage;
const themeSessionResolver = createThemeSessionResolver(sessionStorage);
const enTranslation = {
  title: "Remix (en)",
  description: "Focused on web standards and modern web app UX, you’re simply going to build better websites."
};
const zhTranslation = {
  title: "Remix (zh)",
  description: "专注于 Web 标准和现代 Web 应用程序 UX，你将能轻松构建更好的网站。"
};
const supportedLngs = ["zh", "en"];
const fallbackLng = "en";
const defaultNS = "translation";
const resources$1 = {
  en: {
    translation: enTranslation
  },
  zh: {
    translation: zhTranslation
  }
};
const resources = ["post", "category", "user"];
var define_import_meta_env_default = { VITE_SENTRY_DSN: "https://75b9ac913e289a295b7265065fd2a1cf@o62860.ingest.us.sentry.io/4508533052801024", BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true, npm_package_version: "0.0.1" };
const getBaseUrl = () => {
  if (typeof window === "undefined") {
    return define_import_meta_env_default.VITE_CLIENT_URL;
  }
  return window.location.origin;
};
const dataResources = resources.map((name) => ({
  name,
  list: `/${name}`,
  create: `/${name}/create`,
  edit: `/${name}/edit/:id`,
  show: `/${name}/show/:id`,
  meta: { label: name, icon: "", canDelete: true }
}));
const dataProvider = dataProviderNestjsCrud(`${getBaseUrl()}/api`);
const authProvider = {
  login: async ({ request, providerName, email, password, redirectTo = "/" }) => {
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      const origin = request.headers.get("origin");
      const response = await fetch(`${origin}/api/auth/${providerName}`, {
        method: "POST",
        body: formData
      });
      const res = await response.json();
      if (response.ok && res.id) {
        Sentry.setUser({ email: res == null ? void 0 : res.email, username: (res == null ? void 0 : res.username) || "?", id: res == null ? void 0 : res.id });
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
      console.error(error);
      return {
        success: false,
        error: {
          message: "登录失败，请检查用户名和密码",
          name: "Invalid credentials"
        }
      };
    }
  },
  logout: async () => {
    Sentry.setUser(null);
    window.location.href = "/api/auth/logout";
    return {
      success: true,
      redirectTo: "/login"
    };
  },
  check: async ({ request, sessionStorage: sessionStorage2 }) => {
    const redirectTo = `/login?redirectTo=${request.url}`;
    try {
      const session = await sessionStorage2.getSession(request.headers.get("Cookie"));
      const user = session.get("user");
      if (user.id) {
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
  getIdentity: async ({ request, sessionStorage: sessionStorage2 }) => {
    try {
      const session = await sessionStorage2.getSession(request.headers.get("Cookie"));
      const user = session.get("user");
      if (user.id) {
        return user;
      }
      return null;
    } catch (error) {
      return null;
    }
  },
  onError: async (error) => {
    console.error(error);
    if (error.status === 401 || error.status === 403) {
      return {
        logout: true,
        redirectTo: "/login",
        error
      };
    }
    return { error };
  }
};
const tailwindStyles = "/assets/tailwind-CM2RZQPI.css";
const baseStyles = "/assets/base-C-9pQjIO.css";
const nProgressStyles = "/assets/nprogress-IQvgPhqq.css";
const meta$b = () => [
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
const handle$5 = { i18n: ["translation"] };
async function loader$g({ request }) {
  const [cookie, user, themeResolver] = await Promise.all([
    getCookie(request),
    authProvider.getIdentity({ request, sessionStorage }),
    themeSessionResolver(request)
  ]);
  const cookieHeader = request.headers.get("Cookie");
  const locale = await preferencesCookie.parse(cookieHeader) || fallbackLng;
  return data({
    user,
    theme: themeResolver.getTheme(),
    sidebarIsClose: cookie == null ? void 0 : cookie.sidebarIsClose,
    locale
  });
}
function HydrateFallback() {
  return /* @__PURE__ */ jsx("h1", { className: "fixed inset-0 z-10 flex items-center justify-center bg-background", children: /* @__PURE__ */ jsx(Loader$1, { className: "animate-spin" }) });
}
function Document({
  children,
  title,
  specifiedTheme,
  script = true,
  locale
}) {
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
      /* @__PURE__ */ jsx(DevtoolsProvider, { children: /* @__PURE__ */ jsxs(
        Refine,
        {
          resources: dataResources,
          dataProvider,
          routerProvider,
          authProvider,
          options: {
            title: {
              icon: void 0,
              text: "Refine & Remix"
            },
            mutationMode: "optimistic",
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
            liveMode: "auto",
            reactQuery: {
              clientConfig: {
                defaultOptions: { queries: { networkMode: "always" }, mutations: { networkMode: "always" } }
              }
            },
            projectId: "v08e3x-vauZUB-n1Ntw2"
          },
          children: [
            children,
            /* @__PURE__ */ jsx(UnsavedChangesNotifier, {}),
            /* @__PURE__ */ jsx(DevtoolsPanel, {})
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      script && /* @__PURE__ */ jsx(Scripts, { crossOrigin: "anonymous" })
    ] })
  ] });
}
function DocumentWithThemeProviders({
  children,
  title,
  script = true
}) {
  const { theme, locale } = useLoaderData() || {};
  return /* @__PURE__ */ jsx(ThemeProvider, { specifiedTheme: theme, themeAction: "/api/set-theme", children: /* @__PURE__ */ jsxs(Document, { title, specifiedTheme: theme, script, locale, children: [
    /* @__PURE__ */ jsx(ModalProvider, { children }),
    /* @__PURE__ */ jsx(Toaster, { richColors: true, position: "top-center" })
  ] }) });
}
function App() {
  const navigation = useNavigation();
  useEffect(() => {
    if (navigation.state === "idle")
      nProgress.done();
    else
      nProgress.start();
  }, [navigation.state]);
  return /* @__PURE__ */ jsx(DocumentWithThemeProviders, { children: /* @__PURE__ */ jsx(CanAccess, { children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
const root = withSentry(App);
function ErrorBoundary$9() {
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
  ErrorBoundary: ErrorBoundary$9,
  HydrateFallback,
  default: root,
  handle: handle$5,
  headers,
  links,
  loader: loader$g,
  meta: meta$b,
  shouldRevalidate
}, Symbol.toStringTag, { value: "Module" }));
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
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
const db = singleton("prisma", () => new PrismaClient());
async function getUserByEmail(email) {
  return db.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return db.user.create({
    data: {
      email,
      username: email.split("@")[0],
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}
async function verifyLogin(email, password) {
  const userWithPassword = await db.user.findUnique({
    where: { email },
    include: {
      password: true
    }
  });
  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }
  const isValid = await bcrypt.compare(password, userWithPassword.password.hash);
  if (!isValid) {
    return null;
  }
  return { ...userWithPassword, password: null };
}
const authenticator = new Authenticator();
const strategyForm = new FormStrategy(async ({ form }) => {
  const email = form.get("email");
  const password = form.get("password");
  const user = await verifyLogin(email, password);
  if (!user) {
    throw new Error("Invalid email or password.");
  }
  return user;
});
authenticator.use(strategyForm, "user-pass");
const loader$f = ({ request, params }) => {
  const { provider } = params;
  return authenticator.authenticate(provider || "github", request);
};
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$f
}, Symbol.toStringTag, { value: "Module" }));
async function loader$e() {
  return Response.json({ message: "Method not allowed" }, { status: 405 });
}
const action$9 = async ({ request, params }) => {
  try {
    const { provider } = params;
    const user = await authenticator.authenticate(provider || "unknown", request);
    if (user) {
      return Response.json(user);
    }
    return Response.json({ message: "Authentication failed" }, { status: 401 });
  } catch (error) {
    return Response.json({ message: (error == null ? void 0 : error.message) || "Authentication failed" }, { status: 401 });
  }
};
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$9,
  loader: loader$e
}, Symbol.toStringTag, { value: "Module" }));
const action$8 = async ({ request }) => {
  const formData = await request.formData();
  const preferences = Object.fromEntries(formData);
  return setCookie(request, preferences);
};
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$8
}, Symbol.toStringTag, { value: "Module" }));
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const ASSETS_ROOT = "assets";
const loader$d = async ({ params, request }) => {
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
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$d
}, Symbol.toStringTag, { value: "Module" }));
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const users = {
  chance: {
    name: "Chance Strickland",
    avatarUrl: "https://github.com/chaance.png"
  },
  ryan: {
    name: "Ryan Florence",
    avatarUrl: "https://github.com/ryanflorence.png"
  }
};
const defaultIssues = [
  {
    id: "REM-1",
    userId: "chance",
    title: "Community stuff [TODO: rename this]",
    priority: 0,
    status: 1
  },
  {
    id: "REM-2",
    userId: "ryan",
    title: "Provide `matches` to loader/action/meta args [TODO: flesh this out]",
    priority: 0,
    status: 3
  },
  {
    id: "REM-3",
    userId: "chance",
    title: "ci - update RR workflow to comment again",
    priority: 1,
    status: 3
  },
  {
    id: "REM-4",
    userId: "chance",
    title: "Write decision doc on replacing `@remix-run/dev` with `remix`",
    priority: 0,
    status: 1
  },
  {
    id: "REM-5",
    userId: "chance",
    title: "Make a list of new docs/guides that we want to write",
    priority: 3,
    status: 1
  },
  {
    id: "REM-6",
    userId: "chance",
    title: "React Router + Webpack migration guide using BYOC",
    priority: 4,
    status: 2
  },
  {
    id: "REM-7",
    userId: "ryan",
    title: "Fetcher API Updates Decision Doc",
    priority: 0,
    status: 0
  },
  {
    id: "REM-8",
    userId: "ryan",
    title: "Add `createCloudflareDurableObjectSessionStorage`",
    priority: 1,
    status: 2
  },
  {
    id: "REM-9",
    userId: "ryan",
    title: "Add CF workers ESM request handler",
    priority: 0,
    status: 2
  },
  {
    id: "REM-10",
    userId: "chance",
    title: "bring React 18 fixtures/templates in line with indie-stack updates",
    priority: 0,
    status: 0
  },
  {
    id: "REM-11",
    userId: "chance",
    title: "Back navigation from ErrorBoundary (without `<Scripts>`) does not work properly",
    priority: 0,
    status: 3
  },
  {
    id: "REM-12",
    userId: "ryan",
    title: "An error in MetaFunction or LinkFunction is not caught by ErrorBoundary",
    priority: 0,
    status: 0
  },
  {
    id: "REM-13",
    userId: "chance",
    title: "Fix rendered href for createHashRouter links",
    priority: 2,
    status: 4
  },
  {
    id: "REM-14",
    userId: "ryan",
    title: "Optional Route Segments Internal RFC",
    priority: 0,
    status: 4
  },
  {
    id: "REM-15",
    userId: "ryan",
    title: "bug: Respect basename in RR useFormAction",
    priority: 2,
    status: 2
  },
  {
    id: "REM-16",
    userId: "chance",
    title: "UMD Build for remix-run/router",
    priority: 0,
    status: 3
  },
  {
    id: "REM-17",
    userId: "chance",
    title: "Bug: Form action for pathless layout routes",
    priority: 3,
    status: 2
  },
  {
    id: "REM-18",
    userId: "chance",
    title: "React Router: Optional Params",
    priority: 0,
    status: 2
  },
  {
    id: "REM-19",
    userId: "ryan",
    title: "RouterProvider unit test refactor",
    priority: 0,
    status: 3
  },
  {
    id: "REM-20",
    userId: "ryan",
    title: "Fetcher API updates Implementation",
    priority: 0,
    status: 0
  },
  {
    id: "REM-21",
    userId: "ryan",
    title: "Move dom utils from react-router to @remix-run/router",
    priority: 0,
    status: 0
  },
  {
    id: "REM-22",
    userId: "chance",
    title: "Add SSR deferred hydration support to RR",
    priority: 0,
    status: 2
  },
  {
    id: "REM-23",
    userId: "chance",
    title: "Hash link handling in react router",
    priority: 4,
    status: 2
  },
  {
    id: "REM-24",
    userId: "ryan",
    title: "Write decision doc on service workers",
    priority: 4,
    status: 0
  }
].map((issue) => {
  return {
    ...issue,
    owner: users[issue.userId],
    date: "Oct 10"
  };
});
async function getIssues() {
  return defaultIssues;
}
async function getIssue(id) {
  return defaultIssues.find((issue) => issue.id === id);
}
async function updateIssue(id, updates) {
  const issue = defaultIssues.find((issue2) => issue2.id === id);
  if (!issue)
    return null;
  if (updates.priority) {
    updates.priority = parseInt(updates.priority, 10);
  }
  Object.assign(issue, updates);
  return issue;
}
const EVENTS = {
  ISSUE_CHANGED: "ISSUE_CHANGED"
};
const emitter = singleton("emitter", () => new EventEmitter());
const badRequest = (data2) => data$1(data2, { status: 400 });
async function loader$c() {
  return badRequest({ message: "Method not allowed." });
}
const action$7 = async ({ params, request }) => {
  const updates = Object.fromEntries(await request.formData());
  invariant(params.id, "Missing issue id");
  const result = await updateIssue(params.id, updates);
  emitter.emit(EVENTS.ISSUE_CHANGED, Date.now());
  return result;
};
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$7,
  loader: loader$c
}, Symbol.toStringTag, { value: "Module" }));
const loader$b = async ({ request }) => {
  const host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    const url = new URL("/", `http://${host}`);
    await Promise.all([
      db.user.count(),
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]);
    return new Response("OK");
  } catch (error) {
    console.log("healthcheck ❌", { error });
    return new Response("ERROR", { status: 500 });
  }
};
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$b
}, Symbol.toStringTag, { value: "Module" }));
const action$6 = async ({ request }) => {
  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createFileUploadHandler({
      directory: "public/uploads"
    }),
    unstable_createMemoryUploadHandler()
  );
  const formData = await unstable_parseMultipartFormData(request, uploadHandler);
  const image = formData.get("img");
  if (!image || typeof image === "string") {
    return { error: "something wrong", imgSrc: null };
  }
  return { error: null, imgSrc: image.name };
};
function Index$2() {
  const data2 = useActionData();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Form, { method: "post", encType: "multipart/form-data", children: [
      /* @__PURE__ */ jsx("input", { type: "file", name: "img", accept: "image/*" }),
      /* @__PURE__ */ jsx("button", { type: "submit", children: "upload image" })
    ] }),
    (data2 == null ? void 0 : data2.error) ? /* @__PURE__ */ jsx("h2", { children: data2.error }) : null,
    (data2 == null ? void 0 : data2.imgSrc) ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h2", { children: "uploaded image" }),
      /* @__PURE__ */ jsx("img", { alt: "uploaded", src: data2.imgSrc })
    ] }) : null
  ] });
}
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$6,
  default: Index$2
}, Symbol.toStringTag, { value: "Module" }));
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const menusPlayground = {
  title: "Playground",
  items: [
    {
      id: "routes/dashboard",
      title: "Post",
      icon: PieChart,
      children: [{ id: "routes/post._index", title: "index" }]
    },
    {
      id: "routes/techstack",
      title: "Techstack",
      icon: Brain,
      children: [
        { id: "routes/techstack.sentry", title: "sentry" },
        { id: "routes/techstack.msw", title: "msw" },
        { id: "routes/techstack.i18n", title: "i18n" }
      ]
    },
    {
      id: "routes/issues",
      title: "Issues",
      icon: Siren,
      children: [{ id: "routes/issues._index", title: "index" }]
    }
  ]
};
const menusSetting = {
  title: "Accounts",
  items: [
    {
      id: "routes/users",
      title: "User Management",
      icon: UsersRound,
      children: [
        { id: "routes/users._index", title: "index" },
        { id: "routes/users.role", title: "role" },
        { id: "routes/users.audit-log", title: "audit log" }
      ]
    }
  ]
};
const menuGroups = [menusPlayground, menusSetting];
const routeBreadcrumbMap = menuGroups.reduce(
  (acc, group) => {
    group.items.forEach((item) => {
      acc[item.id] = item.title;
      if (item.children) {
        item.children.forEach((child) => {
          acc[child.id] = child.title;
        });
      }
    });
    return acc;
  },
  {}
);
function getDefaultTitle(matches) {
  const matchCurrent = matches[matches.length - 1];
  const matchPrev = matches[matches.length - 2];
  const titlePrev = routeBreadcrumbMap[matchPrev.id] || "";
  const titleCurrent = routeBreadcrumbMap[matchCurrent.id] || matchCurrent.pathname.split("/").pop() || "";
  return `${titlePrev}${titlePrev && titleCurrent ? " - " : ""}${titleCurrent}`;
}
const meta$a = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
function TechstackSentry() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-6xl text-[#3defe9]", children: "Sentry" }),
    /* @__PURE__ */ jsxs("div", { className: "my-10 text-center text-3xl text-[#fecc1b]", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { children: "Throw a sample error, and next, look for the error on the  " }),
        /* @__PURE__ */ jsx("a", { className: "underline", href: "https://tcsk.sentry.io/issues/?project=4508533052801024", children: "Issues Page" }),
        /* @__PURE__ */ jsx("span", { children: "." })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { children: "For more information, see  " }),
        /* @__PURE__ */ jsx("a", { className: "underline", href: "https://docs.sentry.io/platforms/javascript/guides/remix", children: "https://docs.sentry.io/platforms/javascript/guides/remix" }),
        /* @__PURE__ */ jsx("span", { children: "." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      Button,
      {
        id: "fetch-movies-button",
        onClick: () => {
          throw new Error("Sentry Example Frontend Error");
        },
        children: "Throw a sample error"
      }
    )
  ] });
}
function ErrorBoundary$8() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$8,
  default: TechstackSentry,
  meta: meta$a
}, Symbol.toStringTag, { value: "Module" }));
const loader$a = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};
const route13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$a
}, Symbol.toStringTag, { value: "Module" }));
const route14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const ImageResize = forwardRef(
  ({ children, width, height, fit, src, alt = "", ...other }, forwardedRef) => {
    const query = new URLSearchParams();
    if (width) {
      query.set("w", width.toString());
    }
    if (height) {
      query.set("h", height.toString());
    }
    if (fit) {
      query.set("fit", fit);
    }
    return /* @__PURE__ */ jsx(
      "img",
      {
        ref: forwardedRef,
        alt,
        src: `/api/image-resize/${src}?${query.toString()}`,
        ...{ width, height, ...other }
      }
    );
  }
);
ImageResize.displayName = "ImageResize";
const meta$9 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
function DashboardImage() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center justify-center gap-6", children: [
    /* @__PURE__ */ jsx(ImageResize, { src: "dog.jpg", width: 600, height: 600 }),
    /* @__PURE__ */ jsx(ImageResize, { src: "dog.jpg", width: 400, height: 400 }),
    /* @__PURE__ */ jsx(ImageResize, { src: "dog.jpg", width: 200, height: 200 }),
    /* @__PURE__ */ jsx(ImageResize, { src: "dog.jpg", width: 100, height: 100 })
  ] });
}
function ErrorBoundary$7() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$7,
  default: DashboardImage,
  meta: meta$9
}, Symbol.toStringTag, { value: "Module" }));
const route16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const route17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
i18next.use(initReactI18next).init({
  resources: resources$1,
  supportedLngs,
  fallbackLng,
  ns: [defaultNS],
  react: { useSuspense: false }
});
const i18nProvider = {
  translate: (key, defaultMessage) => {
    return i18next.t(key, defaultMessage || "");
  },
  changeLocale: async (lang, options) => {
    await i18next.changeLanguage(lang);
    const response = await fetch(`/api/set-locales?lng=${lang}&ns=${defaultNS}`, {
      method: "GET",
      credentials: "include",
      ...options == null ? void 0 : options.fetchOptions
    });
    if (!response.ok) {
      throw new Error("Failed to update locale");
    }
    window.location.reload();
    return Promise.resolve();
  },
  getLocale: () => {
    return i18next.language;
  }
};
const meta$8 = ({ data: data2 }) => {
  return [{ title: data2 == null ? void 0 : data2.title }, { name: "description", content: data2 == null ? void 0 : data2.description }];
};
async function loader$9() {
  const t = i18nProvider.translate;
  return { title: t("title"), description: t("description") };
}
function TechstackI18n() {
  const { translate: t } = useTranslation();
  const { description } = useLoaderData();
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-6xl text-[#3defe9]", children: t("title") }),
    /* @__PURE__ */ jsx("p", { className: "my-10 text-3xl text-[#fecc1b]", children: description })
  ] });
}
function ErrorBoundary$6() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$6,
  default: TechstackI18n,
  loader: loader$9,
  meta: meta$8
}, Symbol.toStringTag, { value: "Module" }));
function isPrismaModel(resource) {
  return resources.includes(resource);
}
function buildWhereClause(filters = []) {
  return filters.reduce((acc, filter) => {
    switch (filter.operator) {
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
const dataService = {
  // 获取列表数据
  getList: async ({ resource, pagination, sorters, filters, meta: meta2 }) => {
    const { current = 1, pageSize = 10 } = pagination ?? {};
    const skip = (current - 1) * pageSize;
    const where = filters ? buildWhereClause(filters) : {};
    const orderBy = sorters ? buildOrderByClause(sorters) : {};
    if (!isPrismaModel(resource)) {
      throw new Error(`无效的资源类型: ${resource}`);
    }
    const prismaModel = db[resource];
    const [total, data2] = await Promise.all([
      prismaModel.count({ where }),
      prismaModel.findMany({
        skip,
        take: pageSize,
        where,
        orderBy,
        ...meta2
      })
    ]);
    return {
      data: data2,
      total
    };
  },
  // 创建数据
  create: async ({ resource, variables, meta: meta2 }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`无效的资源类型: ${resource}`);
    }
    const prismaModel = db[resource];
    const data2 = await prismaModel.create({
      data: variables,
      ...meta2
    });
    return {
      data: data2
    };
  },
  // 更新数据
  update: async ({ resource, id, variables, meta: meta2 }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`无效的资源类型: ${resource}`);
    }
    const prismaModel = db[resource];
    const data2 = await prismaModel.update({
      where: { id },
      data: variables,
      ...meta2
    });
    return {
      data: data2
    };
  },
  // 删除数据
  deleteOne: async ({ resource, id, meta: meta2 }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`无效的资源类型: ${resource}`);
    }
    const prismaModel = db[resource];
    const data2 = await prismaModel.delete({
      where: { id },
      ...meta2
    });
    return {
      data: data2
    };
  },
  // 获取单条数据
  getOne: async ({ resource, id, meta: meta2 }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`无效的资源类型: ${resource}`);
    }
    const prismaModel = db[resource];
    const data2 = await prismaModel.findUnique({
      where: { id },
      ...meta2
    });
    return {
      data: data2
    };
  },
  // 获取 API URL
  // 用 db 时不需要 API URL
  getApiUrl: () => {
    return "";
  },
  // 获取多条数据
  getMany: async ({ resource, ids, meta: meta2 }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`无效的资源类型: ${resource}`);
    }
    const prismaModel = db[resource];
    const data2 = await prismaModel.findMany({
      where: {
        id: { in: ids }
      },
      ...meta2
    });
    return {
      data: data2
    };
  },
  // 批量创建
  createMany: async ({ resource, variables, meta: meta2 }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`无效的资源类型: ${resource}`);
    }
    const prismaModel = db[resource];
    const data2 = await prismaModel.createMany({
      data: variables,
      ...meta2
    });
    return {
      data: data2
    };
  },
  // 批量删除
  deleteMany: async ({ resource, ids, meta: meta2 }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`无效的资源类型: ${resource}`);
    }
    const prismaModel = db[resource];
    const data2 = await prismaModel.deleteMany({
      where: {
        id: { in: ids }
      },
      ...meta2
    });
    return {
      data: data2
    };
  },
  // 批量更新
  updateMany: async ({ resource, ids, variables, meta: meta2 }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`无效的资源类型: ${resource}`);
    }
    const prismaModel = db[resource];
    const data2 = await prismaModel.updateMany({
      where: {
        id: { in: ids }
      },
      data: variables,
      ...meta2
    });
    return {
      data: data2
    };
  },
  // 自定义请求
  // 由于使用 db，通常不需要这个方法，但为了完整性保留
  custom: async () => {
    throw new Error("Custom method not implemented");
  }
};
const getPaginationFromUrl = (url) => {
  const current = Number(url.searchParams.get("page")) || 1;
  const pageSize = Number(url.searchParams.get("limit")) || 10;
  return {
    current,
    pageSize
  };
};
const getSortersFromUrl = (url) => {
  const sort = url.searchParams.get("sort");
  const order = url.searchParams.get("order");
  if (!sort || !order)
    return [];
  return [
    {
      field: sort,
      order: order.toLowerCase()
    }
  ];
};
const getFiltersFromUrl = (url) => {
  const filters = [];
  for (const [key, value] of url.searchParams.entries()) {
    if (!["page", "limit", "offset", "sort", "order"].includes(key)) {
      const [field, operator = "eq"] = key.split("_");
      filters.push({
        field,
        operator,
        value
      });
    }
  }
  return filters;
};
async function loader$8({ request, params }) {
  const { resource } = params;
  if (!resource) {
    throw new Error("资源类型是必需的");
  }
  const url = new URL(request.url);
  const ids = url.searchParams.get("ids");
  if (ids) {
    const data22 = await dataService.getMany({
      resource,
      ids: ids.split(",")
    });
    return Response.json(data22);
  }
  const id = url.searchParams.get("id");
  if (id) {
    const data22 = await dataService.getOne({
      resource,
      id
    });
    return Response.json(data22);
  }
  const data2 = await dataService.getList({
    resource,
    pagination: getPaginationFromUrl(url),
    sorters: getSortersFromUrl(url),
    filters: getFiltersFromUrl(url),
    meta: {}
  });
  return Response.json(data2);
}
async function action$5({ request, params }) {
  const { resource } = params;
  if (!resource) {
    throw new Error("资源类型是必需的");
  }
  const method = request.method;
  const body = await request.json();
  switch (method) {
    case "POST": {
      if (Array.isArray(body)) {
        const created2 = await dataService.createMany({
          resource,
          variables: body
        });
        return Response.json(created2);
      }
      const created = await dataService.create({
        resource,
        variables: body
      });
      return Response.json(created);
    }
    case "PATCH": {
      const { ids } = body;
      if (ids) {
        const updated2 = await dataService.updateMany({
          resource,
          ids,
          variables: body.variables
        });
        return Response.json(updated2);
      }
      const { id, ...variables } = body;
      if (!id) {
        throw new Error("更新操作需要提供 ID");
      }
      const updated = await dataService.update({
        resource,
        id,
        variables
      });
      return Response.json(updated);
    }
    case "DELETE": {
      const { ids } = body;
      if (ids) {
        const deleted2 = await dataService.deleteMany({
          resource,
          ids
        });
        return Response.json(deleted2);
      }
      const { id } = body;
      if (!id) {
        throw new Error("删除操作需要提供 ID");
      }
      const deleted = await dataService.deleteOne({
        resource,
        id
      });
      return Response.json(deleted);
    }
    default:
      throw new Error(`不支持的请求方法: ${method}`);
  }
}
const route19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$5,
  loader: loader$8
}, Symbol.toStringTag, { value: "Module" }));
async function action$4({ request }) {
  const session = await themeSessionResolver(request);
  const { theme } = await request.json();
  if (!theme || ![Theme.LIGHT, Theme.DARK].includes(theme)) {
    return Response.json({ success: false, message: "Invalid theme" }, { status: 400 });
  }
  session.setTheme(theme);
  return Response.json({ success: true }, { headers: { "Set-Cookie": await session.commit() } });
}
const route20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$4
}, Symbol.toStringTag, { value: "Module" }));
const route21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const loader$7 = async ({ request }) => {
  return eventStream(request.signal, (send) => {
    function listener(message) {
      send({ data: message });
    }
    emitter.addListener(EVENTS.ISSUE_CHANGED, listener);
    return () => {
      emitter.removeListener(EVENTS.ISSUE_CHANGED, listener);
    };
  });
};
const route22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$7
}, Symbol.toStringTag, { value: "Module" }));
const icons = "/assets/icons-CB0UzuB1.svg";
async function loader$6() {
  return await getIssues();
}
function Index$1() {
  const issues = useLoaderData();
  return /* @__PURE__ */ jsx(Fragment, { children: issues.map((issue) => /* @__PURE__ */ jsx(IssueLine, { issue }, issue.id)) });
}
function IssueLine({ issue }) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      onClick: () => navigate(`/issues/${issue.id}`),
      className: "flex cursor-default justify-between gap-8 border-b border-gray-100 px-6 py-3 text-sm hover:bg-gray-50",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 text-gray-400", children: issue.id }),
          /* @__PURE__ */ jsx(StatusMenu, { issue }),
          /* @__PURE__ */ jsx(
            Link$1,
            {
              to: `/issues/${issue.id}`,
              tabIndex: 0,
              className: "flex-1 cursor-default truncate font-medium text-gray-700",
              onClick: (e) => e.stopPropagation(),
              children: issue.title
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-shrink-0 items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400", children: issue.date }),
          /* @__PURE__ */ jsx("img", { alt: issue.owner.name + " avatar", src: issue.owner.avatarUrl, className: "h-5 w-5 rounded-full" })
        ] })
      ]
    }
  );
}
function StatusMenu({ issue }) {
  return /* @__PURE__ */ jsx("button", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsx(
    "svg",
    {
      className: cn(
        `h-[14px] w-[14px] rounded-full`,
        issue.status === 1 ? "text-yellow-500" : issue.status === 2 ? "text-orange-500" : issue.status === 3 ? "text-green-600" : issue.status === 4 ? "text-indigo-600" : "text-gray-300"
      ),
      children: /* @__PURE__ */ jsx(
        "use",
        {
          href: `${icons}#${issue.status === 1 ? "pie-1/4" : issue.status === 2 ? "pie-1/2" : issue.status === 3 ? "pie-3/4" : issue.status === 4 ? "check" : "circle"}`
        }
      )
    }
  ) });
}
const route23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1,
  loader: loader$6
}, Symbol.toStringTag, { value: "Module" }));
function PlaceholderDemo5() {
  return /* @__PURE__ */ jsx(Fragment, { children: Array.from({ length: 12 }).map((_, index) => /* @__PURE__ */ jsx("div", { className: "aspect-video h-24 w-full rounded-lg bg-muted/50" }, index)) });
}
function PlaceholderDemo6() {
  return /* @__PURE__ */ jsx("div", { className: "grid auto-rows-min gap-4 md:grid-cols-5", children: Array.from({ length: 25 }).map((_, i) => /* @__PURE__ */ jsx("div", { className: "aspect-square rounded-xl bg-muted/50" }, i)) });
}
const meta$7 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const handle$4 = {
  uiTools: /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 pr-1 text-sm text-muted-foreground", children: [
    /* @__PURE__ */ jsx(Clock, { size: 16 }),
    /* @__PURE__ */ jsx("span", { children: "Updated at 10s ago" })
  ] })
};
function PostEdit() {
  return /* @__PURE__ */ jsx(PlaceholderDemo6, {});
}
function ErrorBoundary$5() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$5,
  default: PostEdit,
  handle: handle$4,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
const meta$6 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const handle$3 = {
  uiTools: /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 pr-1 text-sm text-muted-foreground", children: [
    /* @__PURE__ */ jsx(Clock, { size: 16 }),
    /* @__PURE__ */ jsx("span", { children: "Updated at 10s ago" })
  ] })
};
function PostShow() {
  return /* @__PURE__ */ jsx(PlaceholderDemo6, {});
}
function ErrorBoundary$4() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$4,
  default: PostShow,
  handle: handle$3,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
const meta$5 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const loader$5 = async () => {
  const response = await fetch("https://api.example.com/user");
  const res = await response.json();
  return { res };
};
function TechstackMsw() {
  const { res } = useLoaderData();
  const [favoriteMovies, setFavoriteMovies] = useState(null);
  const handleClick = () => {
    fetch("/api/runtime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `
          query ListMovies {
            movie {
              title
            }
          }
        `
      })
    }).then((response) => response.json()).then(setFavoriteMovies);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-6xl text-[#3defe9]", children: [
      "Hi, ",
      res.name,
      " 👋"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "my-10 text-3xl text-[#fecc1b]", children: (favoriteMovies == null ? void 0 : favoriteMovies.data) ? /* @__PURE__ */ jsx("ul", { id: "movies-list", children: favoriteMovies.data.movies.map((movie) => /* @__PURE__ */ jsxs("span", { children: [
      movie.title,
      "、"
    ] }, movie.id)) }) : /* @__PURE__ */ jsx("span", { children: "..." }) }),
    /* @__PURE__ */ jsx(Button, { id: "fetch-movies-button", onClick: handleClick, children: "Make a runtime reques" })
  ] });
}
function ErrorBoundary$3() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$3,
  default: TechstackMsw,
  loader: loader$5,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
function UsersDetail() {
  return /* @__PURE__ */ jsx(Fragment, { children: "UsersDetail" });
}
const route27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UsersDetail
}, Symbol.toStringTag, { value: "Module" }));
function UsersIndex() {
  return /* @__PURE__ */ jsx(PlaceholderDemo5, {});
}
const route28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UsersIndex
}, Symbol.toStringTag, { value: "Module" }));
function getSocketIO() {
  {
    throw new Error("Socket.IO has not been initialized");
  }
}
const action$3 = async ({ request }) => {
  if (request.method !== "POST") {
    return data$1({ error: "Method not allowed" }, { status: 405 });
  }
  try {
    const body = await request.json();
    const { eventName, data: data2 } = body;
    if (!eventName || !data2) {
      return data2({ error: "Missing required fields: eventName or data" }, { status: 400 });
    }
    const io = getSocketIO();
    io.emit(eventName, data2);
    return { success: true };
  } catch (error) {
    console.error("Error publishing event:", error);
    return data$1({ error: "Internal server error" }, { status: 500 });
  }
};
const route29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$3
}, Symbol.toStringTag, { value: "Module" }));
const loader$4 = async ({ params }) => {
  invariant(params.id, "Missing issue id");
  const issue = await getIssue(params.id);
  if (!issue) {
    throw data$1("Issue not found", { status: 404 });
  }
  return issue;
};
const meta$4 = ({ data: issue }) => [
  {
    title: (issue == null ? void 0 : issue.title) || "Not Found"
  }
];
function Issue() {
  const issue = useLoaderData();
  const fetcher = useFetcher();
  return /* @__PURE__ */ jsx("div", { className: "m-4 rounded border p-3 shadow-md", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "min-h-[30vh] border px-4 py-2 text-xl",
      autoFocus: true,
      onBlur: (e) => {
        const title = String(e.currentTarget.textContent).trim();
        if (title !== issue.title.trim()) {
          fetcher.submit(
            { title: String(e.target.textContent) },
            {
              action: `/issues/${issue.id}/update`,
              method: "post"
            }
          );
        }
      },
      contentEditable: true,
      dangerouslySetInnerHTML: {
        __html: fetcher.submission ? fetcher.submission.formData.get("title") : issue.title
      }
    }
  ) });
}
const route30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Issue,
  loader: loader$4,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
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
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
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
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      className: cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
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
    className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
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
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
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
      /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
        /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
      ] }),
      children
    ] })
  ] })
);
SheetContent.displayName = DialogPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Title, { ref, className: cn("text-lg font-semibold text-foreground", className), ...props }));
SheetTitle.displayName = DialogPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
SheetDescription.displayName = DialogPrimitive.Description.displayName;
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("animate-pulse rounded-md bg-primary/10", className), ...props });
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
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
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
      fetcher.submit({ [SIDEBAR_COOKIE_NAME]: !openState }, { method: "post", action: "/api/set-preferences" });
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
      className: cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className),
      ref,
      ...props,
      children
    }
  ) }) });
});
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = React.forwardRef(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className),
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
        className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
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
      className: "group peer hidden text-sidebar-foreground md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "fixed inset-y-0 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
              side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
              className
            ),
            ...props,
            children: /* @__PURE__ */ jsx(
              "div",
              {
                "data-sidebar": "sidebar",
                className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                children
              }
            )
          }
        )
      ]
    }
  );
});
Sidebar.displayName = "Sidebar";
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
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
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
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
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
          "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
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
        className: cn("mx-2 w-auto bg-sidebar-border", className),
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
          "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
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
          "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
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
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
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
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
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
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
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
            className: "h-4 max-w-[--skeleton-width] flex-1",
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
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
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
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
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
const Checkbox = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" }) })
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
const tryParse = (jsonString) => {
  let jsonObject = {};
  if (typeof jsonString === "string") {
    try {
      jsonObject = JSON.parse(jsonString);
    } catch (error) {
      console.error("@tryParse", error);
    }
  } else {
    jsonObject = void 0;
  }
  return jsonObject;
};
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
function useDebounceSubmit() {
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  const { run: debounceSubmit } = useDebounceFn((formData) => submit(formData, { replace: true }), {
    wait: 300
  });
  return (event) => {
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, key) => {
      if (!value) {
        formData.delete(key);
      }
    });
    searchParams.forEach((value, key) => {
      if (!formData.has(key)) {
        formData.append(key, value);
      }
    });
    debounceSubmit(formData);
  };
}
function getSearchParams(request) {
  const searchParams = {};
  const url = new URL(request.url);
  for (const [key, value] of url.searchParams.entries()) {
    if (searchParams[key]) {
      if (Array.isArray(searchParams[key])) {
        searchParams[key].push(value);
      } else {
        searchParams[key] = [searchParams[key], value];
      }
    } else {
      searchParams[key] = value;
    }
  }
  return searchParams;
}
const CreateButton = ({
  resource,
  hideText = false,
  accessControl,
  meta: meta2,
  onClick,
  children,
  ...props
}) => {
  const { hidden, disabled, label, title, LinkComponent, to } = useCreateButton({
    resource,
    accessControl,
    meta: meta2
  });
  if (hidden)
    return null;
  return /* @__PURE__ */ jsx(
    LinkComponent,
    {
      to,
      replace: false,
      onClick: (e) => {
        if (disabled) {
          e.preventDefault();
          return;
        }
        if (onClick) {
          e.preventDefault();
          onClick(e);
        }
      },
      children: /* @__PURE__ */ jsx(Button, { disabled, title, icon: /* @__PURE__ */ jsx(SquarePlusIcon, { className: "mr-2 h-4 w-4" }), ...props, children: !hideText && (children ?? label) })
    }
  );
};
CreateButton.displayName = "CreateButton";
const Breadcrumb$1 = React.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx("nav", { ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb$1.displayName = "Breadcrumb";
const BreadcrumbList = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "ol",
    {
      ref,
      className: cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
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
  return /* @__PURE__ */ jsx(Comp, { ref, className: cn("transition-colors hover:text-foreground", className), ...props });
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
      className: cn("font-normal text-foreground", className),
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
  return /* @__PURE__ */ jsx(Comp, { ref, to: href, className, title, children });
});
Link.displayName = "Link";
const Breadcrumbs = ({ showHome = true, meta: meta2 }) => {
  var _a, _b, _c, _d, _e;
  const { breadcrumbs } = useBreadcrumb({
    meta: meta2
  });
  const { hasDashboard } = useRefineContext();
  const { resources: resources2 } = useResource();
  const dashboardResource = resources2[0];
  const rootRouteResource = matchResourceFromRoute("/", resources2);
  const BreadCrumbItems = breadcrumbs.map(({ label, href }, key) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(BreadcrumbItem, { children: href ? /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, href: `#x`, children: /* @__PURE__ */ jsx(Link, { href, children: label }) }) : /* @__PURE__ */ jsx(BreadcrumbPage, { children: label }) }),
    key < breadcrumbs.length - 1 && /* @__PURE__ */ jsx(BreadcrumbSeparator, {})
  ] }, key));
  return /* @__PURE__ */ jsx(Breadcrumb$1, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
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
const Command = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = Command$1.displayName;
const CommandInput = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsx(
    Command$1.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = Command$1.Input.displayName;
const CommandList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
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
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = Command$1.Group.displayName;
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Command$1.Separator, { ref, className: cn("-mx-1 h-px bg-border", className), ...props }));
CommandSeparator.displayName = Command$1.Separator.displayName;
const CommandItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    ),
    ...props
  }
));
CommandItem.displayName = Command$1.Item.displayName;
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
    return /* @__PURE__ */ jsx(XIcon, { className: "mr-2 h-4 w-4" });
  }, [cancelIcon]);
  const OkIcon = useMemo(() => {
    if (loading) {
      return /* @__PURE__ */ jsx(LoadingIcon, { className: "mr-2" });
    }
    if (isValidElement(okIcon)) {
      return okIcon;
    }
    return /* @__PURE__ */ jsx(CheckIcon, { className: "mr-2 h-4 w-4" });
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
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("rounded-xl border bg-card text-card-foreground shadow", className), ...props }));
Card.displayName = "Card";
const CardHeader = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("font-semibold leading-none tracking-tight", className), ...props })
);
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
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
const PageHeader = ({ extra, ...props }) => {
  return /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs("div", { className: cn("flex h-20 items-end lg:justify-between", props.className, !props.breadcrumb && "h-auto"), children: [
    /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
      props.breadcrumb,
      /* @__PURE__ */ jsx("div", { className: "mt-3 inline-flex flex-row items-center gap-x-4", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex flex-col", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold leading-7 text-black dark:text-white sm:truncate sm:text-3xl sm:tracking-tight", children: props.title }),
        props.subTitle && /* @__PURE__ */ jsx("div", { className: "mt-2 flex items-center text-sm text-gray-300", children: props.subTitle })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex lg:ml-4 lg:mt-0", children: extra })
  ] }) });
};
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
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
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const ListPage = ({
  title,
  resource: resourceFromProps,
  breadcrumb: breadcrumbFromProps,
  createButtonProps,
  className,
  canCreate = true,
  extra,
  children
}) => {
  var _a;
  const translate = useTranslate();
  const { options: { breadcrumb: globalBreadcrumb } = {} } = useRefineContext();
  const getUserFriendlyName = useUserFriendlyName();
  const { resource, identifier } = useResource(resourceFromProps);
  const breadcrumb = typeof breadcrumbFromProps === "undefined" ? globalBreadcrumb : breadcrumbFromProps;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: title ?? translate(
          `${identifier}.titles.List`,
          `List ${getUserFriendlyName(((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.label) ?? identifier, "plural")}`
        ),
        breadcrumb: isValidElement(breadcrumb) ? breadcrumb : /* @__PURE__ */ jsx(Breadcrumbs, {}),
        extra: extra ?? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "inline-flex flex-row gap-4", children: canCreate && /* @__PURE__ */ jsx(CreateButton, { ...createButtonProps, resource: (createButtonProps == null ? void 0 : createButtonProps.resource) ?? identifier }) }) })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: cn("!mt-0 pt-2 sm:pt-4", className), children })
  ] });
};
ListPage.displayName = "ListPage";
const useGetEditUrl = (resource, recordItemId, meta2) => {
  const accessControlContext = useContext(AccessControlContext);
  const accessControlEnabled = accessControlContext.options.buttons.enableAccessControl;
  const hideIfUnauthorized = accessControlContext.options.buttons.hideIfUnauthorized;
  const { editUrl: generateEditUrl } = useNavigation$1();
  const { resource: _resource } = useResource(resource);
  const { id } = useResourceParams();
  const { data: data2 } = useCan({
    resource,
    action: "edit",
    params: { id: recordItemId, resource: _resource },
    queryOptions: {
      enabled: accessControlEnabled
    }
  });
  const translate = useTranslate();
  const reason = () => {
    if (data2 == null ? void 0 : data2.can)
      return "";
    else if (data2 == null ? void 0 : data2.reason)
      return data2.reason;
    else
      return translate("buttons.notAccessTitle", "You don't have permission to access");
  };
  const editUrl = resource && (recordItemId ?? id) ? generateEditUrl(resource, recordItemId ?? id, meta2) : "";
  return {
    can: !(accessControlEnabled && hideIfUnauthorized && !(data2 == null ? void 0 : data2.can)),
    reason: reason(),
    url: editUrl
  };
};
const useGetShowUrl = (resource, recordItemId, meta2) => {
  const accessControlContext = useContext(AccessControlContext);
  const accessControlEnabled = accessControlContext.options.buttons.enableAccessControl;
  const hideIfUnauthorized = accessControlContext.options.buttons.hideIfUnauthorized;
  const { showUrl: generateShowUrl } = useNavigation$1();
  const { resource: _resource } = useResource(resource);
  const { id } = useResourceParams();
  const { data: data2 } = useCan({
    resource,
    action: "show",
    params: { id: recordItemId, resource: _resource },
    queryOptions: {
      enabled: accessControlEnabled
    }
  });
  const translate = useTranslate();
  const reason = () => {
    if (data2 == null ? void 0 : data2.can)
      return "";
    else if (data2 == null ? void 0 : data2.reason)
      return data2.reason;
    else
      return translate("buttons.notAccessTitle", "You don't have permission to access");
  };
  const showUrl = resource && (recordItemId || id) ? generateShowUrl(resource, recordItemId ?? id, meta2) : "";
  return {
    can: !(accessControlEnabled && hideIfUnauthorized && !(data2 == null ? void 0 : data2.can)),
    reason: reason(),
    url: showUrl
  };
};
const useDeleteHelper = (resource, recordItemId, meta2) => {
  const accessControlContext = useContext(AccessControlContext);
  const accessControlEnabled = accessControlContext.options.buttons.enableAccessControl;
  const hideIfUnauthorized = accessControlContext.options.buttons.hideIfUnauthorized;
  const translate = useTranslate();
  const id = useResourceParams();
  const { resource: _resource, identifier } = useResource(resource);
  const { mutationMode } = useMutationMode();
  const { mutate, isLoading } = useDelete();
  const { data: data2 } = useCan({
    resource: _resource == null ? void 0 : _resource.name,
    action: "delete",
    params: { id: recordItemId ?? id, resource: _resource },
    queryOptions: {
      enabled: accessControlEnabled
    }
  });
  const reason = () => {
    if (data2 == null ? void 0 : data2.can)
      return "";
    else if (data2 == null ? void 0 : data2.reason)
      return data2.reason;
    else
      return translate("You don't have permission to access");
  };
  const { setWarnWhen } = useWarnAboutChange();
  const onDeleteMutate = (options) => {
    if (accessControlEnabled && hideIfUnauthorized && !(data2 == null ? void 0 : data2.can)) {
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
    can: !(accessControlEnabled && hideIfUnauthorized && !(data2 == null ? void 0 : data2.can)),
    reason: reason(),
    mutate: onDeleteMutate,
    isLoading
  };
};
const useOnBack = () => {
  const routerType = useRouterType();
  const back = useBack();
  const { goBack } = useNavigation$1();
  const { action: action2 } = useResourceParams();
  const onBack = action2 !== "list" || typeof action2 !== "undefined" ? routerType === "legacy" ? goBack : back : void 0;
  return onBack;
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
  }, [can, props]);
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
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("tfoot", { ref, className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className), ...props })
);
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "tr",
    {
      ref,
      className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
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
        "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
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
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props })
);
TableCaption.displayName = "TableCaption";
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
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
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
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
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
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
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const DropdownMenuShortcut = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx("span", { className: cn("ml-auto text-xs tracking-widest opacity-60", className), ...props });
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
const RowAction = (props) => {
  return /* @__PURE__ */ jsx(
    DropdownMenuItem,
    {
      disabled: props.disabled,
      asChild: !(!props.to || !props.to && !props.children),
      onClick: props.onClick,
      children: props.asChild ? props.children : props.to ? /* @__PURE__ */ jsxs(Link, { href: props.to, title: props.title, children: [
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
function RowActions({ children }) {
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "icon", children: [
      /* @__PURE__ */ jsx(DotsHorizontalIcon, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open menu" })
    ] }) }),
    /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", className: "w-[160px]", children })
  ] });
}
function EditAction({ row, resource, title, disabled, ...props }) {
  const edit = useGetEditUrl(resource, row.id);
  return /* @__PURE__ */ jsx(RowAction, { ...props, disabled: !edit.can || disabled, title: !(edit == null ? void 0 : edit.can) ? edit == null ? void 0 : edit.reason : title, to: edit.url });
}
EditAction.displayName = "EditAction";
function ShowAction({ row, resource, title, disabled, ...props }) {
  const detail = useGetShowUrl(resource, row.id);
  return /* @__PURE__ */ jsx(
    RowAction,
    {
      ...props,
      disabled: !detail.can || disabled,
      title: !(detail == null ? void 0 : detail.can) ? detail == null ? void 0 : detail.reason : title,
      to: detail.url
    }
  );
}
ShowAction.displayName = "ShowAction";
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
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
function TableFilterDateRangePickerFilter({
  column,
  title,
  numberOfMonths = 2,
  align = "start"
}) {
  const t = useTranslate();
  const [date, setDate] = useState({
    from: void 0,
    to: void 0
  });
  const selectedValues = new Set(column == null ? void 0 : column.getFilterValue());
  useEffect(() => {
    if (date) {
      const dates = Object.values(date).filter(Boolean);
      if (dates.length) {
        column == null ? void 0 : column.setFilterValue(
          dates.map((date2) => date2 ? format(date2, "yyyy-MM-dd").toString() : "")
        );
      }
    }
  }, [column, date]);
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("div", { className: "inline-flex flex-row items-center gap-x-0.5", children: [
      /* @__PURE__ */ jsxs(Button, { title, variant: "outline", size: "sm", className: "h-5 border-dashed px-1 py-2.5", children: [
        /* @__PURE__ */ jsx(FilterIcon, { className: cn("h-3.5 w-3.5") }),
        (date == null ? void 0 : date.from) ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mx-2 h-4" }),
          /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "h-3.5 rounded-sm p-1 text-xs font-normal", children: date.to ? /* @__PURE__ */ jsx(Fragment, { children: [format(date.from, "LLL dd, y"), format(date.to, "LLL dd, y")].join(" ") }) : format(date.from, "LLL dd, y") })
        ] }) : null
      ] }),
      selectedValues.size > 0 && /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          size: "sm",
          className: "h-5 border-dashed px-1 py-2.5",
          onClick: (e) => {
            e.preventDefault();
            column == null ? void 0 : column.setFilterValue(void 0);
            setDate({ from: void 0, to: void 0 });
          },
          children: /* @__PURE__ */ jsx(FilterX, { className: cn("h-3.5 w-3.5") })
        }
      )
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
        /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-center py-3", children: /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            className: "h-8 border-dashed px-2",
            onClick: () => {
              column == null ? void 0 : column.setFilterValue(void 0);
              setDate({ from: void 0, to: void 0 });
            },
            children: [
              /* @__PURE__ */ jsx(FilterX, { size: 16, className: "mr-2" }),
              t("Clear")
            ]
          }
        ) })
      ] })
    ] })
  ] });
}
function TableFilterDropdown({ column, title, options, align = "start" }) {
  const t = useTranslate();
  const facets = column == null ? void 0 : column.getFacetedUniqueValues();
  const selectedValues = new Set(column == null ? void 0 : column.getFilterValue());
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("div", { className: "inline-flex flex-row items-center gap-x-0.5", children: [
      /* @__PURE__ */ jsxs(Button, { title, variant: "outline", size: "sm", className: "h-5 border-dashed px-1 py-2.5", children: [
        /* @__PURE__ */ jsx(FilterIcon, { className: cn("h-3.5 w-3.5") }),
        (selectedValues == null ? void 0 : selectedValues.size) > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mx-2 h-4" }),
          /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "h-3.5 rounded-sm p-1 text-xs font-normal lg:hidden", children: selectedValues.size }),
          /* @__PURE__ */ jsx("div", { className: "hidden space-x-1 lg:flex", children: selectedValues.size > 2 ? /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "h-3.5 rounded-sm p-1 text-xs font-normal", children: [
            selectedValues.size,
            " ",
            t("selected")
          ] }) : options == null ? void 0 : options.filter((option) => selectedValues.has(option.value)).map((option) => /* @__PURE__ */ jsx(
            Badge,
            {
              variant: "secondary",
              className: "h-3.5 rounded-sm p-1 text-xs font-normal",
              children: option.label
            },
            option.value
          )) })
        ] })
      ] }),
      selectedValues.size > 0 && /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          size: "sm",
          className: "h-5 border-dashed px-1 py-2.5",
          onClick: (e) => {
            e.preventDefault();
            column == null ? void 0 : column.setFilterValue(void 0);
          },
          children: /* @__PURE__ */ jsx(FilterX, { className: cn("h-3.5 w-3.5") })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-[200px] p-0", align, children: /* @__PURE__ */ jsxs(Command, { children: [
      /* @__PURE__ */ jsx(CommandInput, { placeholder: title }),
      /* @__PURE__ */ jsxs(CommandList, { children: [
        /* @__PURE__ */ jsxs(CommandEmpty, { children: [
          t("No results found"),
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
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                      isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                    ),
                    children: /* @__PURE__ */ jsx(CheckIcon$1, { className: cn("h-4 w-4") })
                  }
                ),
                option.icon && /* @__PURE__ */ jsx(option.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                /* @__PURE__ */ jsx("span", { children: option.label }),
                (facets == null ? void 0 : facets.get(option.value)) && /* @__PURE__ */ jsx("span", { className: "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs", children: facets.get(option.value) })
              ]
            },
            option.value
          );
        }) }),
        selectedValues.size > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(CommandSeparator, {}),
          /* @__PURE__ */ jsx(CommandGroup, { children: /* @__PURE__ */ jsx(
            CommandItem,
            {
              onSelect: () => column == null ? void 0 : column.setFilterValue(void 0),
              className: "justify-center text-center",
              children: t("Clear filters")
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
}
function TableFilterSearchColumn({ column, title, align = "start" }) {
  const selectedValue = column == null ? void 0 : column.getFilterValue();
  const t = useTranslate();
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx("div", { className: "inline-flex flex-row items-center gap-x-0.5", children: selectedValue ? /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        size: "sm",
        className: "h-5 border-dashed px-1 py-2.5",
        onClick: (e) => {
          e.preventDefault();
          column == null ? void 0 : column.setFilterValue(void 0);
        },
        children: /* @__PURE__ */ jsx(FilterX, { className: cn("h-3.5 w-3.5") })
      }
    ) : /* @__PURE__ */ jsx(Button, { title, variant: "outline", size: "sm", className: "h-4 border-dashed px-1 py-2.5", children: /* @__PURE__ */ jsx(FilterIcon, { className: cn("h-3.5 w-3.5") }) }) }) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-[200px] overflow-hidden border-0 p-0 ring-0", align, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center bg-popover px-3 text-popover-foreground", children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "mr-2 h-4 w-4 shrink-0 opacity-50",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z",
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            defaultValue: selectedValue ?? "",
            onChange: (e) => {
              column == null ? void 0 : column.setFilterValue(e.target.value);
            },
            className: cn(
              "h-10 rounded-md border-0 bg-transparent py-3 text-sm shadow-none outline-none ring-0 placeholder:text-muted-foreground focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
            ),
            placeholder: title
          }
        )
      ] }),
      selectedValue && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Separator, {}),
        /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-center py-3", children: /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            className: "h-8 border-dashed px-2",
            onClick: () => {
              column == null ? void 0 : column.setFilterValue(void 0);
            },
            children: [
              /* @__PURE__ */ jsx(FilterX, { size: 16, className: "mr-2" }),
              t("Clear")
            ]
          }
        ) })
      ] })
    ] }) })
  ] });
}
const CheckAll = forwardRef(
  ({ table, children, options }, ref) => {
    const t = useTranslate();
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Checkbox,
        {
          ref,
          checked: table.getIsSomeRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
          onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
          className: "translate-y-[2px]",
          "aria-label": t("Select all")
        }
      ),
      children || Array.isArray(options) && options.length && /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
          Button,
          {
            disabled: !(table.getIsSomeRowsSelected() || table.getIsAllPageRowsSelected()),
            size: "icon",
            variant: "ghost",
            className: "w-5 px-0",
            children: /* @__PURE__ */ jsx(DotsVerticalIcon, { className: "h-4 w-4" })
          }
        ) }),
        /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "start", children: [
          /* @__PURE__ */ jsx(DropdownMenuLabel, { children: t("Bulk Actions") }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          !children && Array.isArray(options) && (options == null ? void 0 : options.length) > 0 ? options.map((option, key) => /* @__PURE__ */ jsx(DropdownMenuItem, { onSelect: option.onClick, children: option.label }, key)) : children
        ] })
      ] })
    ] });
  }
);
CheckAll.displayName = "CheckAll";
const Pagination = ({ table }) => {
  const t = useTranslate();
  return /* @__PURE__ */ jsxs("div", { className: "sm-gap-y-0 flex flex-col items-center justify-between gap-y-4 sm:flex-row", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1 text-sm text-muted-foreground", children: [
      table.getFilteredSelectedRowModel().rows.length,
      " of ",
      table.getFilteredRowModel().rows.length,
      " row(s) selected."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col-reverse items-center gap-y-4 space-x-6 sm:flex-row sm:gap-y-0 lg:space-x-8", children: [
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
              /* @__PURE__ */ jsx(SelectContent, { children: [10, 20, 30, 40, 50].map((pageSize) => /* @__PURE__ */ jsx(SelectItem, { value: `${pageSize}`, children: pageSize }, pageSize)) })
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
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: t("Go to previous page") }),
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
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: t("Go to next page") }),
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
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: t("Go to last page") }),
              /* @__PURE__ */ jsx(DoubleArrowRightIcon, { className: "h-4 w-4" })
            ]
          }
        )
      ] })
    ] })
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
        /* @__PURE__ */ jsx(
          CaretUpIcon,
          {
            className: cn("-mb-1.5 h-5 w-5", (column == null ? void 0 : column.getIsSorted()) === "asc" ? "text-foreground" : "text-input")
          }
        ),
        /* @__PURE__ */ jsx(
          CaretDownIcon,
          {
            className: cn("-mt-1.5 h-5 w-5", (column == null ? void 0 : column.getIsSorted()) === "desc" ? "text-foreground" : "text-input")
          }
        )
      ] })
    }
  );
};
const DataTableViewOptions = ({
  table
}) => {
  const t = useTranslate();
  const columns = useMemo(() => {
    return table.getAllColumns().filter((column) => typeof column.accessorFn !== "undefined" && column.getCanHide());
  }, [table]);
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger$1, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "ml-auto hidden h-8 lg:flex", children: [
      /* @__PURE__ */ jsx(MixerHorizontalIcon, { className: "mr-2 h-4 w-4" }),
      t("Columns")
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-[150px]", children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { children: t("Toggle columns") }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      columns.map((column) => {
        var _a, _b;
        return /* @__PURE__ */ jsx(
          DropdownMenuCheckboxItem,
          {
            className: "capitalize",
            checked: column.getIsVisible(),
            onCheckedChange: (value) => column.toggleVisibility(value),
            children: ((_b = (_a = column == null ? void 0 : column.columnDef) == null ? void 0 : _a.header) == null ? void 0 : _b.toString()) || t(column.id)
          },
          column.id
        );
      })
    ] })
  ] });
};
DataTableViewOptions.displayName = "DataTableViewOptions";
function DataTableToolbar({ table }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-1 items-center space-x-2" }),
    /* @__PURE__ */ jsx(DataTableViewOptions, { table })
  ] });
}
function DeleteAction({ row, resource, title, disabled, onAfterHandle, ...props }) {
  const { can, reason } = useDeleteHelper(resource, row.id);
  const deleteContext = useContext(DeleteContext);
  return /* @__PURE__ */ jsx(
    RowAction,
    {
      ...props,
      disabled: !can || disabled,
      title: !can ? reason : title,
      onClick: () => deleteContext == null ? void 0 : deleteContext.updateData({
        row,
        resource,
        toogle: true,
        onAfterHandle
      })
    }
  );
}
DeleteAction.displayName = "DeleteAction";
function Table({ children, showHeader = true, columns = [], ...props }) {
  var _a;
  const t = useTranslate();
  const mapColumn = useCallback(
    ({
      id,
      accessorKey,
      header,
      enableSorting,
      enableHiding,
      filter,
      cell
    }) => {
      const column = {
        id,
        header,
        accessorKey,
        enableSorting: enableSorting ?? false,
        enableHiding: enableHiding ?? false,
        enableColumnFilter: true,
        enableResizing: true,
        filter
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
    ...props
  });
  const tableOptions = useMemo(() => table.options, [table]);
  const isFilterable = useMemo(
    () => Boolean(tableOptions.enableColumnFilters || (tableOptions == null ? void 0 : tableOptions.enableFilters)),
    [tableOptions]
  );
  return /* @__PURE__ */ jsx(DeleteProvider, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx(DataTableToolbar, { table }),
    /* @__PURE__ */ jsx("div", { className: "rounded-md border border-border", children: /* @__PURE__ */ jsxs(Table$1, { children: [
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
      /* @__PURE__ */ jsx(TableBody, { children: table.refineCore.tableQuery.isLoading ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: columns.length, className: "h-24 text-nowrap text-center", children: /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-center", children: /* @__PURE__ */ jsx(Loader, { className: "h-4 text-primary" }) }) }) }) : ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { className: "text-nowrap", children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsxs(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: [
        t("No results"),
        "."
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(Pagination, { table })
  ] }) });
}
const TableColumn = (props) => {
  return props.children;
};
Table.Column = TableColumn;
Table.CheckAll = CheckAll;
Table.Actions = RowActions;
Table.Action = RowAction;
Table.EditAction = EditAction;
Table.ShowAction = ShowAction;
Table.DeleteAction = DeleteAction;
Table.Filter = {
  DateRangePicker: TableFilterDateRangePickerFilter,
  Dropdown: TableFilterDropdown,
  Search: TableFilterSearchColumn
};
Table.displayName = "Table";
const meta$3 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const handle$2 = {
  uiTools: (match, matchs) => {
    return /* @__PURE__ */ jsx(UiTools, {});
  },
  uiFilter: (match, matchs) => {
    return /* @__PURE__ */ jsx(UiFilter, {});
  }
};
async function loader$3({ request }) {
  getSearchParams(request);
  await dataProvider.getList({
    resource: "post"
  });
  return {};
}
async function action$2({ request }) {
  const form = await request.formData();
  Object.fromEntries(form);
  return {};
}
function PostIndex() {
  const friendly = useUserFriendlyName();
  const bulkDeleteAction = (table) => {
    const label = `Delete Selected (${table.getSelectedRowModel().rows.length}) ${friendly(
      "Row",
      table.getSelectedRowModel().rows.length > 1 ? "plural" : "singular"
    )}`;
    return {
      label,
      onClick: () => {
        alert("Delete Selected");
      }
    };
  };
  return /* @__PURE__ */ jsx(ListPage, { children: /* @__PURE__ */ jsxs(Table, { enableSorting: true, enableFilters: true, children: [
    /* @__PURE__ */ jsx(
      Table.Column,
      {
        accessorKey: "id",
        id: "select",
        header: ({ table }) => /* @__PURE__ */ jsx(Table.CheckAll, { table, options: [bulkDeleteAction(table)] }),
        cell: ({ row }) => /* @__PURE__ */ jsx(
          Checkbox,
          {
            className: "translate-y-[2px]",
            checked: row.getIsSelected(),
            onCheckedChange: (value) => row.toggleSelected(!!value),
            "aria-label": "Select row"
          },
          `checkbox-${row.original.id}`
        )
      }
    ),
    /* @__PURE__ */ jsx(Table.Column, { header: "ID", id: "id", accessorKey: "id", enableSorting: true, enableHiding: true }),
    /* @__PURE__ */ jsx(
      Table.Column,
      {
        header: "Title",
        accessorKey: "title",
        id: "title",
        enableSorting: true,
        enableHiding: true,
        filter: (props) => /* @__PURE__ */ jsx(Table.Filter.Search, { ...props, title: "Search Title" })
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
        filter: (props) => /* @__PURE__ */ jsx(
          Table.Filter.Dropdown,
          {
            ...props,
            options: [
              {
                label: "Published",
                value: "published"
              },
              {
                label: "Draft",
                value: "draft"
              },
              {
                label: "Rejected",
                value: "rejected"
              }
            ]
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
        filter: (props) => /* @__PURE__ */ jsx(Table.Filter.DateRangePicker, { ...props, align: "end" })
      }
    ),
    /* @__PURE__ */ jsx(
      Table.Column,
      {
        accessorKey: "id",
        id: "actions",
        cell: ({ row: { original } }) => /* @__PURE__ */ jsxs(Table.Actions, { children: [
          /* @__PURE__ */ jsx(Table.ShowAction, { title: "Detail", row: original, resource: "posts", icon: /* @__PURE__ */ jsx(Eye, { size: 16 }) }),
          /* @__PURE__ */ jsx(Table.EditAction, { title: "Edit", row: original, resource: "posts", icon: /* @__PURE__ */ jsx(Edit, { size: 16 }) }),
          /* @__PURE__ */ jsx(
            Table.DeleteAction,
            {
              title: "Delete",
              row: original,
              withForceDelete: true,
              resource: "posts",
              icon: /* @__PURE__ */ jsx(Trash2, { size: 16 })
            }
          )
        ] })
      }
    )
  ] }) });
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
    /* @__PURE__ */ jsx("div", { className: "hidden font-medium text-muted-foreground md:inline-block", children: "Edit Oct 08" }),
    /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-7 w-7", onClick: () => updateSearchParams({ starred: !starred }), children: /* @__PURE__ */ jsx(Star, { className: starred ? "fill-yellow-400" : "" }) }),
    /* @__PURE__ */ jsxs(Popover, { open: isOpen, onOpenChange: setIsOpen, children: [
      /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-7 w-7 data-[state=open]:bg-accent", children: /* @__PURE__ */ jsx(MoreHorizontal, {}) }) }),
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
  return /* @__PURE__ */ jsxs(Form, { className: "flex flex-1 flex-col", onChange: (event) => debounceSubmit(event), children: [
    /* @__PURE__ */ jsxs(SidebarContent, { children: [
      /* @__PURE__ */ jsx(SidebarGroup, { children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" }),
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
      dataFilter.checkbox.map((group, index) => /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
        /* @__PURE__ */ jsx(SidebarSeparator, { className: "mx-0" }),
        /* @__PURE__ */ jsx(SidebarGroup, { className: "py-0", children: /* @__PURE__ */ jsxs(Collapsible, { defaultOpen: index === 0, className: "group/collapsible", children: [
          /* @__PURE__ */ jsx(
            SidebarGroupLabel,
            {
              asChild: true,
              className: "group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
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
function ErrorBoundary$2() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$2,
  action: action$2,
  default: PostIndex,
  handle: handle$2,
  loader: loader$3,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const meta$2 = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};
const handle$1 = {
  uiTools: /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 pr-1 text-sm text-muted-foreground", children: [
    /* @__PURE__ */ jsx(Clock, { size: 16 }),
    /* @__PURE__ */ jsx("span", { children: "Updated at 10s ago" })
  ] })
};
function PostCreate() {
  return /* @__PURE__ */ jsx(PlaceholderDemo6, {});
}
function ErrorBoundary$1() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$1,
  default: PostCreate,
  handle: handle$1,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function UsersRole() {
  return /* @__PURE__ */ jsx(PlaceholderDemo5, {});
}
const route33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UsersRole
}, Symbol.toStringTag, { value: "Module" }));
const route34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
function NavMain() {
  const matches = useMatches();
  const lastMatch = matches[matches.length - 1];
  return menuGroups.map((group, index) => /* @__PURE__ */ jsxs(SidebarGroup, { children: [
    /* @__PURE__ */ jsx(SidebarGroupLabel, { children: group.title }),
    /* @__PURE__ */ jsx(SidebarMenu, { children: group.items.map((item) => {
      var _a;
      const isCollapsibleOpen = lastMatch.id.includes(item.id);
      return /* @__PURE__ */ jsx(Collapsible, { asChild: true, defaultOpen: isCollapsibleOpen, className: "group/collapsible", children: /* @__PURE__ */ jsxs(SidebarMenuItem, { children: [
        /* @__PURE__ */ jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(SidebarMenuButton, { tooltip: item.title, children: [
          item.icon && /* @__PURE__ */ jsx(item.icon, {}),
          /* @__PURE__ */ jsx("span", { children: item.title }),
          /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
        ] }) }),
        /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsx(SidebarMenuSub, { children: (_a = item.children) == null ? void 0 : _a.map((subItem) => {
          const isActive = lastMatch.id === subItem.id;
          const url = subItem.id.replace("._index", "").replace("routes", "").replace(/\./g, "/");
          return /* @__PURE__ */ jsx(SidebarMenuSubItem, { children: /* @__PURE__ */ jsx(
            SidebarMenuSubButton,
            {
              asChild: true,
              isActive,
              className: cn(isActive && "!bg-primary !text-primary-foreground"),
              children: /* @__PURE__ */ jsx(Link$1, { to: url, children: /* @__PURE__ */ jsx("span", { children: subItem.title }) })
            }
          ) }, subItem.title);
        }) }) })
      ] }) }, item.id);
    }) })
  ] }, index));
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
    className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
function NavUser() {
  var _a, _b;
  const { isMobile } = useSidebar();
  const { user } = useRouteLoaderData("root") || {};
  const { mutate: logout } = useLogout();
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
            /* @__PURE__ */ jsx(AvatarImage, { src: (user == null ? void 0 : user.avatar) || "/avatar.jpg", alt: (user == null ? void 0 : user.username) || "" }),
            /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-lg", children: ((_a = user == null ? void 0 : user.username) == null ? void 0 : _a.charAt(0)) || "?" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
            /* @__PURE__ */ jsx("span", { className: "truncate font-semibold capitalize", children: (user == null ? void 0 : user.username) || "unknown user" }),
            /* @__PURE__ */ jsx("span", { className: "truncate text-xs", children: (user == null ? void 0 : user.email) || "..." })
          ] }),
          /* @__PURE__ */ jsx(ChevronsUpDown, { className: "ml-auto size-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(
      DropdownMenuContent,
      {
        className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg",
        side: isMobile ? "bottom" : "right",
        align: "end",
        sideOffset: 4,
        children: [
          /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "p-0 font-normal", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: [
            /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8 rounded-lg", children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: (user == null ? void 0 : user.avatar) || "/avatar.jpg", alt: (user == null ? void 0 : user.username) || "" }),
              /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-lg", children: ((_b = user == null ? void 0 : user.username) == null ? void 0 : _b.charAt(0)) || "?" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ jsx("span", { className: "truncate font-semibold capitalize", children: (user == null ? void 0 : user.username) || "unknown user" }),
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
const roles = [
  { icon: BicepsFlexed, role: "Administrator" },
  { icon: AudioLines, role: "Operations User" },
  { icon: Baby, role: "Guest" }
];
function RoleSwitcher() {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(roles[0]);
  return /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      SidebarMenuButton,
      {
        size: "lg",
        className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground", children: /* @__PURE__ */ jsx(GalleryVerticalEnd, { className: "size-4" }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
            /* @__PURE__ */ jsx("span", { className: "truncate font-semibold", children: "OSS Inc." }),
            /* @__PURE__ */ jsx("span", { className: "truncate text-xs", children: activeTeam.role })
          ] }),
          /* @__PURE__ */ jsx(ChevronsUpDown, { className: "ml-auto" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(
      DropdownMenuContent,
      {
        className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg",
        align: "start",
        side: isMobile ? "bottom" : "right",
        sideOffset: 4,
        children: [
          /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "text-xs text-muted-foreground", children: "roles" }),
          roles.map((team, index) => /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: () => setActiveTeam(team), className: "gap-2 p-2", children: [
            /* @__PURE__ */ jsx("div", { className: "flex size-6 items-center justify-center rounded-sm border", children: /* @__PURE__ */ jsx(team.icon, { className: "size-4 shrink-0" }) }),
            team.role,
            /* @__PURE__ */ jsxs(DropdownMenuShortcut, { children: [
              "⌘",
              index + 1
            ] })
          ] }, team.role)),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs(DropdownMenuItem, { className: "gap-2 p-2", children: [
            /* @__PURE__ */ jsx("div", { className: "flex size-6 items-center justify-center rounded-md border bg-background", children: /* @__PURE__ */ jsx(Plus, { className: "size-4" }) }),
            /* @__PURE__ */ jsx("div", { className: "font-medium text-muted-foreground", children: "Add Role" })
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
  const fetcher = useFetcher();
  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    fetcher.submit({ theme: newTheme }, { method: "POST", action: "/api/set-theme", encType: "application/json" });
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full cursor-pointer select-none px-0 py-2", onClick: toggleTheme, children: [
    /* @__PURE__ */ jsx(Sun, { size: 16, className: "absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
    /* @__PURE__ */ jsx(Moon, { size: 16, className: "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
    /* @__PURE__ */ jsx("span", { children: " " })
  ] });
}
const items = [{ title: "Service Health Check", url: "#", icon: Activity }];
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
function SidebarLeft({ ...props }) {
  return /* @__PURE__ */ jsxs(Sidebar, { collapsible: "icon", ...props, children: [
    /* @__PURE__ */ jsx(SidebarHeader, { children: /* @__PURE__ */ jsx(RoleSwitcher, {}) }),
    /* @__PURE__ */ jsxs(SidebarContent, { children: [
      /* @__PURE__ */ jsx(NavMain, {}),
      /* @__PURE__ */ jsx(NavSecondary, {})
    ] }),
    /* @__PURE__ */ jsx(SidebarFooter, { children: /* @__PURE__ */ jsx(NavUser, {}) }),
    /* @__PURE__ */ jsx(SidebarRail, {})
  ] });
}
function LanguageSwitcher() {
  const navigate = useNavigate();
  const { translate, getLocale, changeLocale } = useTranslation();
  const currentLocale = getLocale();
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("lng", currentLocale === "zh" ? "en" : "zh");
    navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
  };
  return /* @__PURE__ */ jsx(Form, { onSubmit: handleSubmit, children: /* @__PURE__ */ jsx(
    Button,
    {
      variant: "ghost",
      size: "icon",
      className: "h-7 w-7",
      type: "submit",
      onClick: () => changeLocale(currentLocale === "zh" ? "en" : "zh"),
      children: /* @__PURE__ */ jsx(Languages, { className: cn("transition-all", currentLocale === "zh" && "scale-x-[-1]") })
    }
  ) });
}
const FullscreenSwitcher = () => {
  return /* @__PURE__ */ jsx(
    Button,
    {
      variant: "ghost",
      size: "icon",
      className: "h-7 w-7",
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
function NavTools() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const newParams = new URLSearchParams(searchParams);
  const matches = useMatches();
  const lastMatch = matches[matches.length - 1];
  const handle2 = lastMatch.handle;
  const defaultTools = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(LanguageSwitcher, {}),
    /* @__PURE__ */ jsx(FullscreenSwitcher, {})
  ] });
  const { uiTools, uiFilter } = handle2 || {};
  if (!uiTools && !uiFilter) {
    return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: defaultTools });
  }
  function changeParams(key, value) {
    if (value) {
      newParams.set(key, "1");
    } else {
      newParams.delete(key);
    }
    navigate(`./?${newParams.toString()}`, { replace: true });
  }
  const domUiTools = typeof uiTools === "function" ? uiTools(lastMatch, matches) : uiTools;
  const filter = Boolean(searchParams.get("filter"));
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
    uiFilter && /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-7 w-7", onClick: () => changeParams("filter", !filter), children: filter ? /* @__PURE__ */ jsx(FilterX, {}) : /* @__PURE__ */ jsx(Filter, {}) }),
    defaultTools,
    /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mr-2 h-4" }),
    domUiTools
  ] });
}
function SidebarRight({ ...props }) {
  const [searchParams] = useSearchParams();
  const matches = useMatches();
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
      className: cn("sticky top-0 flex h-svh w-0 border-l transition-all", isActive && "w-[--sidebar-width]"),
      ...props,
      children: typeof uiFilter === "function" ? uiFilter(lastMatch, matches) : uiFilter
    }
  );
}
function Breadcrumb() {
  const matches = useMatches();
  return /* @__PURE__ */ jsx(Breadcrumb$1, { children: /* @__PURE__ */ jsx(BreadcrumbList, { children: matches.map((match, index) => {
    const isRoot = index === 0;
    if (isRoot) {
      return null;
    }
    const next = matches[index + 1];
    const nextIsIndex = next && next.id.includes("._index");
    const currentIsNotPage = !routeBreadcrumbMap[`${match.id}._index`];
    const isCurrent = match.pathname === matches[matches.length - 1].pathname;
    const showSeparator = !isRoot && index < matches.length - 1;
    const name = routeBreadcrumbMap[match.id] || match.pathname.split("/").pop() || "home";
    return /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx(BreadcrumbItem, { className: "hidden capitalize md:block", children: isCurrent || currentIsNotPage || nextIsIndex ? /* @__PURE__ */ jsx(BreadcrumbPage, { children: name }) : /* @__PURE__ */ jsx(BreadcrumbLink, { href: match.pathname, children: name }) }),
      showSeparator && /* @__PURE__ */ jsx(BreadcrumbSeparator, { className: "hidden md:block" })
    ] }, match.id);
  }) }) });
}
function Layout() {
  const data2 = useRouteLoaderData("root");
  return /* @__PURE__ */ jsxs(SidebarProvider, { open: data2.sidebarIsClose !== "true", children: [
    /* @__PURE__ */ jsx(SidebarLeft, {}),
    /* @__PURE__ */ jsxs(SidebarInset, { children: [
      /* @__PURE__ */ jsxs("header", { className: "sticky top-0 flex h-16 shrink-0 items-center gap-2 bg-background transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4", children: [
          /* @__PURE__ */ jsx(SidebarTrigger, { className: "-ml-1" }),
          /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mr-2 h-4" }),
          /* @__PURE__ */ jsx(Breadcrumb, {})
        ] }),
        /* @__PURE__ */ jsx("div", { className: "ml-auto px-3", children: /* @__PURE__ */ jsx(NavTools, {}) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-col gap-4 p-4 pt-0", children: /* @__PURE__ */ jsx(Outlet, {}) })
    ] }),
    /* @__PURE__ */ jsx(SidebarRight, {})
  ] });
}
function Techstack() {
  return /* @__PURE__ */ jsx(Layout, {});
}
const route35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Techstack
}, Symbol.toStringTag, { value: "Module" }));
function PrivacyPolicy() {
  return /* @__PURE__ */ jsxs("div", { className: "text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary", children: [
    "By clicking continue, you agree to our ",
    /* @__PURE__ */ jsx(Link$1, { to: "#", children: "Privacy Policy" }),
    "."
  ] });
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
  return /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: message });
}
function RegisterForm() {
  var _a, _b;
  const { showModal } = useModal();
  const { errors } = useActionData() || {};
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";
  const navigation = useNavigation();
  useEffect(() => {
    var _a2;
    if ((_a2 = errors == null ? void 0 : errors.default) == null ? void 0 : _a2[0]) {
      showModal({
        type: "alert",
        title: "注册提交失败",
        description: errors.default[0]
      });
    }
  }, [showModal, errors == null ? void 0 : errors.default]);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsxs(Form, { method: "post", children: [
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "redirectTo", value: redirectTo }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsxs(Link$1, { to: "#", className: "flex flex-col items-center gap-2 font-medium", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-md", children: /* @__PURE__ */ jsx(GalleryVerticalEnd, { className: "size-6" }) }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Remix Inc." })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: "Welcome to OSS Inc." }),
          /* @__PURE__ */ jsxs("div", { className: "text-center text-sm", children: [
            `Already has an account? `,
            /* @__PURE__ */ jsx(Link$1, { to: "/login", replace: true, className: "underline underline-offset-4", children: "Sign in" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
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
                defaultValue: "admin@remix.run"
              }
            ),
            /* @__PURE__ */ jsx(ErrorMessage, { error: (_a = errors == null ? void 0 : errors.email) == null ? void 0 : _a[0] })
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
            /* @__PURE__ */ jsx(ErrorMessage, { error: (_b = errors == null ? void 0 : errors.password) == null ? void 0 : _b[0] })
          ] }),
          /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", disabled: navigation.state === "submitting", children: "Register" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border", children: /* @__PURE__ */ jsx("span", { className: "relative z-10 bg-background px-2 text-muted-foreground", children: "Or" }) }),
        /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", type: "button", children: [
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
              fill: "currentColor"
            }
          ) }),
          "Continue with GitHub"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(PrivacyPolicy, {})
  ] });
}
function typedFormError(error) {
  if (error instanceof z.ZodError) {
    return badRequest({ errors: error.flatten().fieldErrors });
  } else if (error instanceof Error) {
    return data$1(
      { errors: { default: [(error == null ? void 0 : error.message) || "unknown error (500 Internal Server Error)"] } },
      { status: 500 }
    );
  } else {
    return data$1({ errors: error || { default: ["unknown error (500 Internal Server Error)"] } }, { status: 500 });
  }
}
const registerSchema = z.object({
  email: z.string().email("请输入有效的邮箱地址"),
  password: z.string().min(6, "密码至少需要6个字符").max(50, "密码不能超过50个字符"),
  redirectTo: z.string().optional()
});
const meta$1 = () => {
  return [{ title: "Register" }];
};
async function action$1({ request }) {
  try {
    const formData = await request.formData();
    const rawData = Object.fromEntries(formData);
    const { email, password } = registerSchema.parse(rawData);
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      throw { email: ["A user already exists with this email."] };
    }
    await createUser(email, password);
    return redirect(`/login?email=${email}`);
  } catch (error) {
    return typedFormError(error);
  }
}
function Register() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm", children: /* @__PURE__ */ jsx(RegisterForm, {}) }) });
}
const route36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1,
  default: Register,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
async function loader$2({ request }) {
  const { authenticated, redirectTo } = await authProvider.check({ request, sessionStorage });
  if (!authenticated) {
    throw redirect(redirectTo);
  }
  return redirect("/post");
}
const route37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
function Issues() {
  return /* @__PURE__ */ jsx(Layout, {});
}
const route38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Issues
}, Symbol.toStringTag, { value: "Module" }));
function LoginForm() {
  var _a, _b, _c;
  useModal();
  const { errors } = useActionData() || {};
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";
  const navigation = useNavigation();
  useTranslate();
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsxs(CardContent, { className: "grid p-0 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(Form, { method: "post", className: "p-6 md:p-8", children: [
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "redirectTo", value: redirectTo }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("h1", { className: "flex items-center text-2xl font-bold", children: "Welcome back" }),
            /* @__PURE__ */ jsx("p", { className: "text-balance text-muted-foreground", children: "Login to your OSS Inc. account" })
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
                defaultValue: searchParams.get("email") || "admin@remix.run",
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
              /* @__PURE__ */ jsx(Link$1, { to: "#", className: "ml-auto text-sm underline-offset-2 hover:underline", children: "Forgot your password?" })
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
          /* @__PURE__ */ jsx("div", { className: "relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border", children: /* @__PURE__ */ jsx("span", { className: "relative z-10 bg-background px-2 text-muted-foreground", children: "or" }) }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", type: "button", children: [
            /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
                fill: "currentColor"
              }
            ) }),
            "Login with GitHub"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center text-sm", children: [
            `Don't have an account? `,
            /* @__PURE__ */ jsx(Link$1, { to: "/register", replace: true, className: "underline underline-offset-4", children: "Sign up" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative hidden bg-muted md:block", children: /* @__PURE__ */ jsx("img", { src: "/logo.gif", alt: "", className: "absolute inset-0 h-full w-full object-cover dark:brightness-[0.3]" }) })
    ] }) }),
    /* @__PURE__ */ jsx(PrivacyPolicy, {})
  ] });
}
const loginSchema = z.object({
  email: z.string().email("请输入有效的邮箱地址"),
  password: z.string().min(6, "密码至少需要6个字符").max(50, "密码不能超过50个字符"),
  redirectTo: z.string().optional()
});
const meta = () => {
  return [{ title: "Login" }];
};
async function loader$1({ request }) {
  const user = await authProvider.getIdentity({ request, sessionStorage });
  if (user && user.id) {
    return redirect("/");
  }
  return {};
}
async function action({ request }) {
  try {
    const form = await request.formData();
    const formData = Object.fromEntries(form);
    const { email, password, redirectTo } = loginSchema.parse(formData);
    const { error, success, user } = await authProvider.login({
      request,
      providerName: "user-pass",
      email,
      password,
      redirectTo
    });
    if (error) {
      throw { default: [error.message] };
    }
    if (success && (user == null ? void 0 : user.id)) {
      const session = await getSession();
      session.set("user", user);
      return redirect(redirectTo, {
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
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-svh flex-col items-center justify-center bg-background p-6 md:p-10", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm md:max-w-3xl", children: /* @__PURE__ */ jsx(LoginForm, {}) }) });
}
const route39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: Login,
  loader: loader$1,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const route40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const route41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
function Users() {
  return /* @__PURE__ */ jsx(Layout, {});
}
const route42 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Users
}, Symbol.toStringTag, { value: "Module" }));
const model = newModel(`
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
`);
const adapter = new StringAdapter(`
p, admin, post, (list)|(create)
p, admin, post/*, (edit)|(show)|(delete)
p, admin, post/*, field

p, admin, user, (list)|(create)
p, admin, user/*, (edit)|(show)|(delete)

p, admin, category, (list)|(create)
p, admin, category/*, (edit)|(show)|(delete)

p, editor, post, (list)|(create)
p, editor, post/*, (edit)|(show)
p, editor, post/hit, field, deny

p, editor, category, list
`);
const role = "admin";
const accessControlProvider = {
  can: async ({ resource, action: action2, params }) => {
    let can = false;
    const enforcer = await newEnforcer(model, adapter);
    const message = "You are not allowed to perform this action";
    if (action2 === "delete" || action2 === "edit" || action2 === "show") {
      can = await enforcer.enforce(role, `${resource}/${params == null ? void 0 : params.id}`, action2);
    }
    if (action2 === "field") {
      can = await enforcer.enforce(role, `${resource}/${params == null ? void 0 : params.field}`, action2);
    }
    can = await enforcer.enforce(role, resource, action2);
    return {
      can,
      reason: !can ? message : void 0
    };
  },
  options: {
    buttons: { enableAccessControl: true, hideIfUnauthorized: false },
    queryOptions: { cacheTime: 5 * 60 * 1e3, staleTime: 0 }
  }
};
const handle = {
  fromAbc: "xyz"
};
async function loader() {
  const can = await accessControlProvider.can({
    resource: "post",
    action: "list"
  });
  if (!can) {
    return data$1({}, { status: 403 });
  }
  return { initialData: {} };
}
function Post() {
  return /* @__PURE__ */ jsx(Layout, {});
}
function ErrorBoundary() {
  return /* @__PURE__ */ jsx(PageError, {});
}
const route43 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  default: Post,
  handle,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const route44 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
function Index() {
  return /* @__PURE__ */ jsx(NotFound, {});
}
const route45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-B_rDvZQk.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/jsx-runtime-BMlD0yL_.js", "/assets/components-CuaJT0t0.js", "/assets/index-DD1qRzJI.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-BDmK8wP5.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/jsx-runtime-BMlD0yL_.js", "/assets/components-CuaJT0t0.js", "/assets/index-DD1qRzJI.js", "/assets/index-DQwOLLTm.js", "/assets/index-B73fgA5T.js", "/assets/use-modal-CpbtUPfZ.js", "/assets/500-DKi4gis6.js", "/assets/404-CGcL7TYw.js", "/assets/cn-B8mTpEaj.js", "/assets/button-B_xz3V2G.js", "/assets/dialog-D2FKv5i7.js", "/assets/x-X8OSiik2.js", "/assets/use-mount-effect-D-pHQY95.js"], "css": ["/assets/root-B_SY1GJM.css"] }, "routes/api.agreement.$agreementId[.pdf]": { "id": "routes/api.agreement.$agreementId[.pdf]", "parentId": "root", "path": "api/agreement/:agreementId.pdf", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "imports": [], "css": [] }, "routes/api.auth.$provider.callback": { "id": "routes/api.auth.$provider.callback", "parentId": "root", "path": "api/auth/:provider/callback", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.auth._provider.callback-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/api.auth.$provider._index": { "id": "routes/api.auth.$provider._index", "parentId": "root", "path": "api/auth/:provider", "index": true, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.auth._provider._index-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/api.set-preferences": { "id": "routes/api.set-preferences", "parentId": "root", "path": "api/set-preferences", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.set-preferences-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/contacts.$contactId": { "id": "routes/contacts.$contactId", "parentId": "root", "path": "contacts/:contactId", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/contacts._contactId-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/api.image-resize.$": { "id": "routes/api.image-resize.$", "parentId": "root", "path": "api/image-resize/*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.image-resize._-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/infinite-scrolling": { "id": "routes/infinite-scrolling", "parentId": "root", "path": "infinite-scrolling", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/infinite-scrolling-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/issues.$id.update": { "id": "routes/issues.$id.update", "parentId": "routes/issues", "path": ":id/update", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/issues._id.update-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/api.check-health": { "id": "routes/api.check-health", "parentId": "root", "path": "api/check-health", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.check-health-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/api.upload-local": { "id": "routes/api.upload-local", "parentId": "root", "path": "api/upload-local", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.upload-local-dK3xryC5.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/components-CuaJT0t0.js", "/assets/index-DD1qRzJI.js"], "css": [] }, "routes/api.upload-video": { "id": "routes/api.upload-video", "parentId": "root", "path": "api/upload-video", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.upload-video-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/techstack.sentry": { "id": "routes/techstack.sentry", "parentId": "routes/techstack", "path": "sentry", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/techstack.sentry-DSBCP4hC.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/button-B_xz3V2G.js", "/assets/500-DKi4gis6.js", "/assets/get-default-title-CUWlU2_a.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/cn-B8mTpEaj.js", "/assets/use-mount-effect-D-pHQY95.js", "/assets/index-DD1qRzJI.js", "/assets/menus-BnU23AEJ.js"], "css": [] }, "routes/api.auth.logout": { "id": "routes/api.auth.logout", "parentId": "root", "path": "api/auth/logout", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.auth.logout-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/api.set-locales": { "id": "routes/api.set-locales", "parentId": "root", "path": "api/set-locales", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.set-locales-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/dashboard.image": { "id": "routes/dashboard.image", "parentId": "root", "path": "dashboard/image", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/dashboard.image-DLsPEI79.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/500-DKi4gis6.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/get-default-title-CUWlU2_a.js", "/assets/button-B_xz3V2G.js", "/assets/cn-B8mTpEaj.js", "/assets/use-mount-effect-D-pHQY95.js", "/assets/index-DD1qRzJI.js", "/assets/menus-BnU23AEJ.js"], "css": [] }, "routes/forgot-password": { "id": "routes/forgot-password", "parentId": "root", "path": "forgot-password", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/forgot-password-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/update-password": { "id": "routes/update-password", "parentId": "root", "path": "update-password", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/update-password-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/techstack.i18n": { "id": "routes/techstack.i18n", "parentId": "routes/techstack", "path": "i18n", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/techstack.i18n-cnsPfHHA.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/index-DQwOLLTm.js", "/assets/500-DKi4gis6.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/components-CuaJT0t0.js", "/assets/button-B_xz3V2G.js", "/assets/cn-B8mTpEaj.js", "/assets/use-mount-effect-D-pHQY95.js", "/assets/index-DD1qRzJI.js"], "css": [] }, "routes/api.$resource": { "id": "routes/api.$resource", "parentId": "root", "path": "api/:resource", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api._resource-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/api.set-theme": { "id": "routes/api.set-theme", "parentId": "root", "path": "api/set-theme", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.set-theme-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/api.upload-s3": { "id": "routes/api.upload-s3", "parentId": "root", "path": "api/upload-s3", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.upload-s3-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/issues-events": { "id": "routes/issues-events", "parentId": "root", "path": "issues-events", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/issues-events-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/issues._index": { "id": "routes/issues._index", "parentId": "routes/issues", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/issues._index-D31Vk2Io.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/cn-B8mTpEaj.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/components-CuaJT0t0.js", "/assets/index-DD1qRzJI.js"], "css": [] }, "routes/post.edit.$id": { "id": "routes/post.edit.$id", "parentId": "routes/post", "path": "edit/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/post.edit._id-DD2XKxLq.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/500-DKi4gis6.js", "/assets/placeholder-Ce5tSGc1.js", "/assets/get-default-title-CUWlU2_a.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/clock-CaOOfEkN.js", "/assets/button-B_xz3V2G.js", "/assets/cn-B8mTpEaj.js", "/assets/use-mount-effect-D-pHQY95.js", "/assets/index-DD1qRzJI.js", "/assets/menus-BnU23AEJ.js"], "css": [] }, "routes/post.show.$id": { "id": "routes/post.show.$id", "parentId": "routes/post", "path": "show/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/post.show._id-DQYPxZ9J.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/500-DKi4gis6.js", "/assets/placeholder-Ce5tSGc1.js", "/assets/get-default-title-CUWlU2_a.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/clock-CaOOfEkN.js", "/assets/button-B_xz3V2G.js", "/assets/cn-B8mTpEaj.js", "/assets/use-mount-effect-D-pHQY95.js", "/assets/index-DD1qRzJI.js", "/assets/menus-BnU23AEJ.js"], "css": [] }, "routes/techstack.msw": { "id": "routes/techstack.msw", "parentId": "routes/techstack", "path": "msw", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/techstack.msw-CvG4dFFT.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/button-B_xz3V2G.js", "/assets/get-default-title-CUWlU2_a.js", "/assets/500-DKi4gis6.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/components-CuaJT0t0.js", "/assets/cn-B8mTpEaj.js", "/assets/menus-BnU23AEJ.js", "/assets/use-mount-effect-D-pHQY95.js", "/assets/index-DD1qRzJI.js"], "css": [] }, "routes/users.$userid": { "id": "routes/users.$userid", "parentId": "routes/users", "path": ":userid", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/users._userid-BsScKhWL.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/users._index": { "id": "routes/users._index", "parentId": "routes/users", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/users._index-CNkdYc8n.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/placeholder-Ce5tSGc1.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/api.publish": { "id": "routes/api.publish", "parentId": "root", "path": "api/publish", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.publish-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/issues_.$id": { "id": "routes/issues_.$id", "parentId": "root", "path": "issues/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/issues_._id-ambqiKFu.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/components-CuaJT0t0.js", "/assets/index-DD1qRzJI.js"], "css": [] }, "routes/post._index": { "id": "routes/post._index", "parentId": "routes/post", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/post._index-Bj8UU9UP.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/index-DQwOLLTm.js", "/assets/button-B_xz3V2G.js", "/assets/cn-B8mTpEaj.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/dropdown-menu-BQWkXHsy.js", "/assets/label-M_bHgjbK.js", "/assets/x-X8OSiik2.js", "/assets/components-CuaJT0t0.js", "/assets/get-default-title-CUWlU2_a.js", "/assets/500-DKi4gis6.js", "/assets/dialog-D2FKv5i7.js", "/assets/input-CzuSTyaR.js", "/assets/gallery-vertical-end-bHSfYUDN.js", "/assets/index-DD1qRzJI.js", "/assets/menus-BnU23AEJ.js", "/assets/use-mount-effect-D-pHQY95.js"], "css": [] }, "routes/post.create": { "id": "routes/post.create", "parentId": "routes/post", "path": "create", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/post.create-D5jIjqlI.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/500-DKi4gis6.js", "/assets/placeholder-Ce5tSGc1.js", "/assets/get-default-title-CUWlU2_a.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/clock-CaOOfEkN.js", "/assets/button-B_xz3V2G.js", "/assets/cn-B8mTpEaj.js", "/assets/use-mount-effect-D-pHQY95.js", "/assets/index-DD1qRzJI.js", "/assets/menus-BnU23AEJ.js"], "css": [] }, "routes/users.role": { "id": "routes/users.role", "parentId": "routes/users", "path": "role", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/users.role-DHz-RITH.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/placeholder-Ce5tSGc1.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/socket-io": { "id": "routes/socket-io", "parentId": "root", "path": "socket-io", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/socket-io-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/techstack": { "id": "routes/techstack", "parentId": "root", "path": "techstack", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/techstack-DbmJio3x.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/layout-BvRqsgt_.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/dropdown-menu-BQWkXHsy.js", "/assets/button-B_xz3V2G.js", "/assets/cn-B8mTpEaj.js", "/assets/input-CzuSTyaR.js", "/assets/x-X8OSiik2.js", "/assets/components-CuaJT0t0.js", "/assets/index-DD1qRzJI.js", "/assets/menus-BnU23AEJ.js", "/assets/index-DQwOLLTm.js", "/assets/gallery-vertical-end-bHSfYUDN.js", "/assets/index-B73fgA5T.js", "/assets/use-mount-effect-D-pHQY95.js"], "css": [] }, "routes/register": { "id": "routes/register", "parentId": "root", "path": "register", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/register-Ibut2oIN.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/button-B_xz3V2G.js", "/assets/input-CzuSTyaR.js", "/assets/label-M_bHgjbK.js", "/assets/error-Bk-OwVbm.js", "/assets/use-modal-CpbtUPfZ.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/components-CuaJT0t0.js", "/assets/index-DD1qRzJI.js", "/assets/gallery-vertical-end-bHSfYUDN.js", "/assets/cn-B8mTpEaj.js", "/assets/x-X8OSiik2.js", "/assets/dialog-D2FKv5i7.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/issues": { "id": "routes/issues", "parentId": "root", "path": "issues", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/issues-C5C8qwwR.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/layout-BvRqsgt_.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/dropdown-menu-BQWkXHsy.js", "/assets/button-B_xz3V2G.js", "/assets/cn-B8mTpEaj.js", "/assets/input-CzuSTyaR.js", "/assets/x-X8OSiik2.js", "/assets/components-CuaJT0t0.js", "/assets/index-DD1qRzJI.js", "/assets/menus-BnU23AEJ.js", "/assets/index-DQwOLLTm.js", "/assets/gallery-vertical-end-bHSfYUDN.js", "/assets/index-B73fgA5T.js", "/assets/use-mount-effect-D-pHQY95.js"], "css": [] }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/login-B-omqIa4.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/button-B_xz3V2G.js", "/assets/cn-B8mTpEaj.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/input-CzuSTyaR.js", "/assets/label-M_bHgjbK.js", "/assets/error-Bk-OwVbm.js", "/assets/use-modal-CpbtUPfZ.js", "/assets/index-DQwOLLTm.js", "/assets/components-CuaJT0t0.js", "/assets/index-DD1qRzJI.js", "/assets/x-X8OSiik2.js", "/assets/dialog-D2FKv5i7.js"], "css": [] }, "routes/queue": { "id": "routes/queue", "parentId": "root", "path": "queue", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/queue-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/redis": { "id": "routes/redis", "parentId": "root", "path": "redis", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/redis-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/users": { "id": "routes/users", "parentId": "root", "path": "users", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/users-DIV6lPyv.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/layout-BvRqsgt_.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/dropdown-menu-BQWkXHsy.js", "/assets/button-B_xz3V2G.js", "/assets/cn-B8mTpEaj.js", "/assets/input-CzuSTyaR.js", "/assets/x-X8OSiik2.js", "/assets/components-CuaJT0t0.js", "/assets/index-DD1qRzJI.js", "/assets/menus-BnU23AEJ.js", "/assets/index-DQwOLLTm.js", "/assets/gallery-vertical-end-bHSfYUDN.js", "/assets/index-B73fgA5T.js", "/assets/use-mount-effect-D-pHQY95.js"], "css": [] }, "routes/post": { "id": "routes/post", "parentId": "root", "path": "post", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/post-C18q6JlS.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/500-DKi4gis6.js", "/assets/layout-BvRqsgt_.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/button-B_xz3V2G.js", "/assets/cn-B8mTpEaj.js", "/assets/use-mount-effect-D-pHQY95.js", "/assets/index-DD1qRzJI.js", "/assets/dropdown-menu-BQWkXHsy.js", "/assets/input-CzuSTyaR.js", "/assets/x-X8OSiik2.js", "/assets/components-CuaJT0t0.js", "/assets/menus-BnU23AEJ.js", "/assets/index-DQwOLLTm.js", "/assets/gallery-vertical-end-bHSfYUDN.js", "/assets/index-B73fgA5T.js"], "css": [] }, "routes/bff": { "id": "routes/bff", "parentId": "root", "path": "bff", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/bff-B5cZf7CQ.js", "imports": ["/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js"], "css": [] }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_-w7-8Oh_g.js", "imports": ["/assets/jsx-runtime-BMlD0yL_.js", "/assets/404-CGcL7TYw.js", "/assets/api.agreement._agreementId_.pdf_-CYRM_IyK.js", "/assets/button-B_xz3V2G.js", "/assets/cn-B8mTpEaj.js", "/assets/components-CuaJT0t0.js", "/assets/index-DD1qRzJI.js"], "css": [] } }, "url": "/assets/manifest-21f4a383.js", "version": "21f4a383" };
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
  "routes/api.agreement.$agreementId[.pdf]": {
    id: "routes/api.agreement.$agreementId[.pdf]",
    parentId: "root",
    path: "api/agreement/:agreementId.pdf",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/api.auth.$provider.callback": {
    id: "routes/api.auth.$provider.callback",
    parentId: "root",
    path: "api/auth/:provider/callback",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/api.auth.$provider._index": {
    id: "routes/api.auth.$provider._index",
    parentId: "root",
    path: "api/auth/:provider",
    index: true,
    caseSensitive: void 0,
    module: route3
  },
  "routes/api.set-preferences": {
    id: "routes/api.set-preferences",
    parentId: "root",
    path: "api/set-preferences",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/contacts.$contactId": {
    id: "routes/contacts.$contactId",
    parentId: "root",
    path: "contacts/:contactId",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/api.image-resize.$": {
    id: "routes/api.image-resize.$",
    parentId: "root",
    path: "api/image-resize/*",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/infinite-scrolling": {
    id: "routes/infinite-scrolling",
    parentId: "root",
    path: "infinite-scrolling",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/issues.$id.update": {
    id: "routes/issues.$id.update",
    parentId: "routes/issues",
    path: ":id/update",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/api.check-health": {
    id: "routes/api.check-health",
    parentId: "root",
    path: "api/check-health",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/api.upload-local": {
    id: "routes/api.upload-local",
    parentId: "root",
    path: "api/upload-local",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/api.upload-video": {
    id: "routes/api.upload-video",
    parentId: "root",
    path: "api/upload-video",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/techstack.sentry": {
    id: "routes/techstack.sentry",
    parentId: "routes/techstack",
    path: "sentry",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/api.auth.logout": {
    id: "routes/api.auth.logout",
    parentId: "root",
    path: "api/auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: route13
  },
  "routes/api.set-locales": {
    id: "routes/api.set-locales",
    parentId: "root",
    path: "api/set-locales",
    index: void 0,
    caseSensitive: void 0,
    module: route14
  },
  "routes/dashboard.image": {
    id: "routes/dashboard.image",
    parentId: "root",
    path: "dashboard/image",
    index: void 0,
    caseSensitive: void 0,
    module: route15
  },
  "routes/forgot-password": {
    id: "routes/forgot-password",
    parentId: "root",
    path: "forgot-password",
    index: void 0,
    caseSensitive: void 0,
    module: route16
  },
  "routes/update-password": {
    id: "routes/update-password",
    parentId: "root",
    path: "update-password",
    index: void 0,
    caseSensitive: void 0,
    module: route17
  },
  "routes/techstack.i18n": {
    id: "routes/techstack.i18n",
    parentId: "routes/techstack",
    path: "i18n",
    index: void 0,
    caseSensitive: void 0,
    module: route18
  },
  "routes/api.$resource": {
    id: "routes/api.$resource",
    parentId: "root",
    path: "api/:resource",
    index: void 0,
    caseSensitive: void 0,
    module: route19
  },
  "routes/api.set-theme": {
    id: "routes/api.set-theme",
    parentId: "root",
    path: "api/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: route20
  },
  "routes/api.upload-s3": {
    id: "routes/api.upload-s3",
    parentId: "root",
    path: "api/upload-s3",
    index: void 0,
    caseSensitive: void 0,
    module: route21
  },
  "routes/issues-events": {
    id: "routes/issues-events",
    parentId: "root",
    path: "issues-events",
    index: void 0,
    caseSensitive: void 0,
    module: route22
  },
  "routes/issues._index": {
    id: "routes/issues._index",
    parentId: "routes/issues",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route23
  },
  "routes/post.edit.$id": {
    id: "routes/post.edit.$id",
    parentId: "routes/post",
    path: "edit/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route24
  },
  "routes/post.show.$id": {
    id: "routes/post.show.$id",
    parentId: "routes/post",
    path: "show/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route25
  },
  "routes/techstack.msw": {
    id: "routes/techstack.msw",
    parentId: "routes/techstack",
    path: "msw",
    index: void 0,
    caseSensitive: void 0,
    module: route26
  },
  "routes/users.$userid": {
    id: "routes/users.$userid",
    parentId: "routes/users",
    path: ":userid",
    index: void 0,
    caseSensitive: void 0,
    module: route27
  },
  "routes/users._index": {
    id: "routes/users._index",
    parentId: "routes/users",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route28
  },
  "routes/api.publish": {
    id: "routes/api.publish",
    parentId: "root",
    path: "api/publish",
    index: void 0,
    caseSensitive: void 0,
    module: route29
  },
  "routes/issues_.$id": {
    id: "routes/issues_.$id",
    parentId: "root",
    path: "issues/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route30
  },
  "routes/post._index": {
    id: "routes/post._index",
    parentId: "routes/post",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route31
  },
  "routes/post.create": {
    id: "routes/post.create",
    parentId: "routes/post",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: route32
  },
  "routes/users.role": {
    id: "routes/users.role",
    parentId: "routes/users",
    path: "role",
    index: void 0,
    caseSensitive: void 0,
    module: route33
  },
  "routes/socket-io": {
    id: "routes/socket-io",
    parentId: "root",
    path: "socket-io",
    index: void 0,
    caseSensitive: void 0,
    module: route34
  },
  "routes/techstack": {
    id: "routes/techstack",
    parentId: "root",
    path: "techstack",
    index: void 0,
    caseSensitive: void 0,
    module: route35
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: route36
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route37
  },
  "routes/issues": {
    id: "routes/issues",
    parentId: "root",
    path: "issues",
    index: void 0,
    caseSensitive: void 0,
    module: route38
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: route39
  },
  "routes/queue": {
    id: "routes/queue",
    parentId: "root",
    path: "queue",
    index: void 0,
    caseSensitive: void 0,
    module: route40
  },
  "routes/redis": {
    id: "routes/redis",
    parentId: "root",
    path: "redis",
    index: void 0,
    caseSensitive: void 0,
    module: route41
  },
  "routes/users": {
    id: "routes/users",
    parentId: "root",
    path: "users",
    index: void 0,
    caseSensitive: void 0,
    module: route42
  },
  "routes/post": {
    id: "routes/post",
    parentId: "root",
    path: "post",
    index: void 0,
    caseSensitive: void 0,
    module: route43
  },
  "routes/bff": {
    id: "routes/bff",
    parentId: "root",
    path: "bff",
    index: void 0,
    caseSensitive: void 0,
    module: route44
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route45
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
//# sourceMappingURL=index.js.map
