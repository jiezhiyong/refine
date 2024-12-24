import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable, createCookie, createCookieSessionStorage, redirect, data as data$1, unstable_composeUploadHandlers, unstable_createFileUploadHandler, unstable_createMemoryUploadHandler, unstable_parseMultipartFormData } from "@remix-run/node";
import { RemixServer, useRevalidator, Link, useOutlet, useNavigation, useLocation, useRouteLoaderData, useMatches, Meta, Links, ScrollRestoration, Scripts, useRouteError, isRouteErrorResponse, useActionData, Form, useLoaderData, useFetcher, useSearchParams, useNavigate } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import nProgress from "nprogress";
import invariant from "tiny-invariant";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import * as React from "react";
import { useEffect, createContext, useState, useCallback, useContext } from "react";
import { useEventSource } from "remix-utils/sse/react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Toaster as Toaster$1 } from "sonner";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, GalleryVerticalEnd, ChevronRight, PanelLeft, Check, Circle, MoreHorizontal, Folder, Forward, Trash2, ChevronsUpDown, Sparkles, BadgeCheck, CreditCard, Bell, LogOut, Plus, AudioWaveform, Command, SquareTerminal, Bot, BookOpen, Settings2, Frame, PieChart, Map } from "lucide-react";
import { useHydrated } from "remix-utils/use-hydrated";
import { ClientOnly } from "remix-utils/client-only";
import { EventEmitter } from "events";
import { statSync, createReadStream } from "fs";
import path from "path";
import { PassThrough as PassThrough$1 } from "stream";
import sharp from "sharp";
import { eventStream } from "remix-utils/sse/server";
import { z } from "zod";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import Redis from "ioredis";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  const prohibitOutOfOrderStreaming = isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode;
  return prohibitOutOfOrderStreaming ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, { abortDelay: ABORT_DELAY, context: remixContext, url: request.url }),
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
            console.error(error);
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
      /* @__PURE__ */ jsx(RemixServer, { abortDelay: ABORT_DELAY, context: remixContext, url: request.url }),
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
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleError$1(error, { request, params, context }) {
  if (!request.signal.aborted) {
    console.error(error);
  }
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  handleError: handleError$1
}, Symbol.toStringTag, { value: "Module" }));
invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set.");
const signedCookie = createCookie("user-prefs", {
  secrets: [process.env.SESSION_SECRET ?? ""],
  path: "/",
  sameSite: "lax",
  httpOnly: true,
  secure: true,
  maxAge: 7 * 24 * 60 * 60
  // one week
});
const getCookie = async (request) => {
  const cookieHeader = request.headers.get("Cookie");
  return await signedCookie.parse(cookieHeader);
};
const singleton = (name, valueFactory) => {
  var _a;
  const g = global;
  g.__singletons ?? (g.__singletons = {});
  (_a = g.__singletons)[name] ?? (_a[name] = valueFactory());
  return g.__singletons[name];
};
const db = singleton("prisma", () => new PrismaClient());
async function getUserById(id) {
  return db.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return db.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return db.user.create({
    data: {
      email,
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
invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set.");
const USER_SESSION_KEY = "userId";
const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: [process.env.SESSION_SECRET ?? ""],
    path: "/",
    sameSite: "lax",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: void 0
  }
});
async function getSession(request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
const getUserId = async (request) => {
  const session = await getSession(request);
  return session.get(USER_SESSION_KEY);
};
async function getUser(request) {
  let user = null;
  const userId = await getUserId(request);
  if (userId) {
    user = await getUserById(userId);
  }
  return user;
}
async function createUserSession({
  request,
  userId,
  remember = true,
  redirectTo
}) {
  const session = await getSession(request);
  session.set(USER_SESSION_KEY, userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  const session = await getSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
function useRealtimeRevalidation({ url }) {
  const data2 = useEventSource(url);
  const { revalidate } = useRevalidator();
  useEffect(() => {
    revalidate();
  }, [data2, revalidate]);
}
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
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
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { ref, className: cn(buttonVariants({ variant, size, className })), ...props });
  }
);
Button.displayName = "Button";
const AlertDialog = AlertDialogPrimitive.Root;
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
        "fixed left-[50%] top-[5%] z-50 grid w-full max-w-[50%] translate-x-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
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
const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Action, { ref, className: cn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
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
    if (!modalOptions) return null;
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
const styles = "/assets/base-Bc_8EVn2.css";
const nProgressStyles = "/assets/nprogress-CSXic_Zd.css";
function PageError({ error }) {
  return /* @__PURE__ */ jsx("div", { className: "relative h-screen font-['sans-serif']", children: /* @__PURE__ */ jsxs("div", { className: "absolute left-1/2 top-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-center leading-[1.4]", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-[-1] mx-auto mb-5 mt-0 h-[200px]", children: [
      /* @__PURE__ */ jsx("h1", { className: "absolute left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase text-[#211b19]", children: "Oops!" }),
      /* @__PURE__ */ jsx("h2", { className: "absolute inset-x-0 bottom-0 m-auto inline-block bg-white px-[5px] py-2.5 text-[28px] font-normal uppercase text-[#211b19]", children: "500 - The Server is down" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mb-8 text-gray-600 dark:text-gray-400", children: error.message || "unknown error" }),
    /* @__PURE__ */ jsx(Button, { size: "lg", onClick: () => location.reload(), children: "Try Again" })
  ] }) });
}
function NotFound() {
  return /* @__PURE__ */ jsx("div", { className: "relative h-screen font-['sans-serif']", children: /* @__PURE__ */ jsxs("div", { className: "absolute left-1/2 top-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 text-center leading-[1.4]", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-[-1] mx-auto mb-5 mt-0 h-[200px]", children: [
      /* @__PURE__ */ jsx("h1", { className: "absolute left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 text-[236px] font-extralight uppercase text-[#211b19]", children: "Oops!" }),
      /* @__PURE__ */ jsx("h2", { className: "absolute inset-x-0 bottom-0 m-auto inline-block bg-white px-[5px] py-2.5 text-[28px] font-normal uppercase text-[#211b19]", children: "404 - The Page can't be found" })
    ] }),
    /* @__PURE__ */ jsx(Button, { size: "lg", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Back To Home" }) })
  ] }) });
}
const meta$1 = () => [
  { title: "Remix" },
  { property: "og:title", content: "This app is the best." },
  { name: "description", content: "Welcome to Remix!" }
];
const links = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: nProgressStyles }
];
const headers = () => ({
  "X-Powered-By": "Hugs"
});
const loader$a = async ({ request }) => {
  const cookie = await getCookie(request);
  return {
    user: await getUser(request),
    theme: cookie == null ? void 0 : cookie.theme,
    sidebarIsOpen: cookie == null ? void 0 : cookie.sidebarIsOpen
  };
};
const action$6 = async ({ request }) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = await signedCookie.parse(cookieHeader);
  const bodyParams = await request.formData();
  if (bodyParams.get("sidebarIsOpen") === "false") {
    cookie.sidebarIsOpen = false;
  }
  return redirect("/", {
    headers: {
      "Set-Cookie": await signedCookie.serialize(cookie)
    }
  });
};
function HydrateFallback() {
  return /* @__PURE__ */ jsx("h1", { children: "Loading(root.HydrateFallback)..." });
}
function Document({ children, title }) {
  const routeLoaderData = useRouteLoaderData("root");
  const matches = useMatches();
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      title && /* @__PURE__ */ jsx("title", { children: title }),
      /* @__PURE__ */ jsx(Links, {}),
      /* @__PURE__ */ jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `:root { --theme: ${(routeLoaderData == null ? void 0 : routeLoaderData.theme) || "light"} }`
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("ol", { children: matches.filter((match) => match.handle && match.handle.breadcrumb).map((match, index) => /* @__PURE__ */ jsx("li", { children: match.handle.breadcrumb(match) }, index)) }) }),
      /* @__PURE__ */ jsx(ModalProvider, { children }),
      /* @__PURE__ */ jsx(Toaster, { richColors: true, position: "top-center" }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, { crossOrigin: "anonymous" })
    ] })
  ] });
}
function App() {
  const outlet = useOutlet();
  const navigation = useNavigation();
  useEffect(() => {
    if (navigation.state === "idle") nProgress.done();
    else nProgress.start();
  }, [navigation.state]);
  useRealtimeRevalidation({ url: "/issues-events" });
  return /* @__PURE__ */ jsx(Document, { children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsx(motion.main, { initial: { x: "10%", opacity: 0 }, animate: { x: "0", opacity: 1 }, children: outlet }, useLocation().pathname) }) });
}
function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ jsx(Document, { title: `${error.status} ${error.statusText}`, children: error.status === 404 ? /* @__PURE__ */ jsx(NotFound, {}) : /* @__PURE__ */ jsx(PageError, { error: { message: error.data } }) });
  }
  return /* @__PURE__ */ jsx(Document, { title: "Oh no!", children: /* @__PURE__ */ jsx(PageError, { error }) });
}
function shouldRevalidate({ defaultShouldRevalidate }) {
  return defaultShouldRevalidate;
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  HydrateFallback,
  action: action$6,
  default: App,
  headers,
  links,
  loader: loader$a,
  meta: meta$1,
  shouldRevalidate
}, Symbol.toStringTag, { value: "Module" }));
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const BrokenOnTheServer = void 0;
function ComplexComponent() {
  const [count, setCount] = useState(() => {
    const stored = localStorage.getItem("count");
    if (!stored) return 0;
    return JSON.parse(stored);
  });
  useEffect(
    function sync() {
      localStorage.setItem("count", JSON.stringify(count));
    },
    [count]
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { onClick: () => setCount((c) => c - 1), children: "-" }),
    /* @__PURE__ */ jsx("span", { children: count }),
    /* @__PURE__ */ jsx("button", { onClick: () => setCount((c) => c + 1), children: "+" })
  ] });
}
function Index$6() {
  const hydrated = useHydrated();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ClientOnly, { fallback: /* @__PURE__ */ jsx("p", { children: "Loading..." }), children: () => /* @__PURE__ */ jsx(BrokenOnTheServer, {}) }),
    /* @__PURE__ */ jsx(ClientOnly, { fallback: /* @__PURE__ */ jsx("p", { children: "Loading..." }), children: () => /* @__PURE__ */ jsx(ComplexComponent, {}) }),
    /* @__PURE__ */ jsx("button", { type: "button", disabled: !hydrated, onClick: () => alert("I has JS loaded!"), children: "Try me!" })
  ] });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$6
}, Symbol.toStringTag, { value: "Module" }));
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  if (!issue) return null;
  if (updates.priority) {
    updates.priority = parseInt(updates.priority, 10);
  }
  Object.assign(issue, updates);
  return issue;
}
let emitter;
if (process.env.NODE_ENV === "production") {
  emitter = new EventEmitter();
} else {
  if (!global.__emitter) {
    global.__emitter = new EventEmitter();
  }
  emitter = global.__emitter;
}
const EVENTS = {
  ISSUE_CHANGED: "ISSUE_CHANGED"
};
const badRequest = (data2) => data$1(data2, { status: 400 });
async function loader$9() {
  return badRequest({ message: "Method not allowed." });
}
const action$5 = async ({ params, request }) => {
  const updates = Object.fromEntries(await request.formData());
  invariant(params.id, "Missing issue id");
  const result = await updateIssue(params.id, updates);
  emitter.emit(EVENTS.ISSUE_CHANGED, Date.now());
  return result;
};
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$5,
  loader: loader$9
}, Symbol.toStringTag, { value: "Module" }));
const ASSETS_ROOT = "assets";
const loader$8 = async ({ params, request }) => {
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
  const fileStat = statSync(srcPath);
  if (!fileStat.isFile()) {
    throw new Error(`${srcPath} is not a file`);
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
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$8
}, Symbol.toStringTag, { value: "Module" }));
function Index$5() {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center"
      },
      children: /* @__PURE__ */ jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 2 }, children: /* @__PURE__ */ jsx("h1", { children: "Welcome to remix!" }) })
    }
  );
}
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$5
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
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$7
}, Symbol.toStringTag, { value: "Module" }));
const action$4 = async ({ request }) => {
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
function Index$4() {
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
  action: action$4,
  default: Index$4
}, Symbol.toStringTag, { value: "Module" }));
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const loader$6 = async ({ request }) => {
  const host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    const url = new URL("/", `http://${host}`);
    await Promise.all([
      db.user.count(),
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok) return Promise.reject(r);
      })
    ]);
    return new Response("OK");
  } catch (error) {
    console.log("healthcheck ❌", { error });
    return new Response("ERROR", { status: 500 });
  }
};
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$6
}, Symbol.toStringTag, { value: "Module" }));
const handle$1 = {
  breadcrumb: (res) => {
    var _a;
    return /* @__PURE__ */ jsxs(Link, { to: "/issues", children: [
      "Issues details - ",
      (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.title
    ] });
  }
};
const loader$5 = async ({ params }) => {
  invariant(params.id, "Missing issue id");
  const issue = await getIssue(params.id);
  if (!issue) {
    throw data$1("Issue not found", { status: 404 });
  }
  return issue;
};
const meta = ({ data: issue }) => [
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
const route13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Issue,
  handle: handle$1,
  loader: loader$5,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const route14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const route15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  if (!to || typeof to !== "string") {
    return defaultRedirect;
  }
  if (!to.startsWith("/") || to.startsWith("//")) {
    return defaultRedirect;
  }
  return to;
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
const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;
function PrivacyPolicy() {
  return /* @__PURE__ */ jsxs("div", { className: "text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary", children: [
    "By clicking continue, you agree to our ",
    /* @__PURE__ */ jsx(Link, { to: "#", children: "Terms of Service" }),
    " and ",
    /* @__PURE__ */ jsx(Link, { to: "#", children: "Privacy Policy" }),
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
          /* @__PURE__ */ jsxs(Link, { to: "#", className: "flex flex-col items-center gap-2 font-medium", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-md", children: /* @__PURE__ */ jsx(GalleryVerticalEnd, { className: "size-6" }) }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Acme Inc." })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: "Welcome to Acme OSS Inc." }),
          /* @__PURE__ */ jsxs("div", { className: "text-center text-sm", children: [
            `Already has an account? `,
            /* @__PURE__ */ jsx(Link, { to: "/login", replace: true, className: "underline underline-offset-4", children: "Sign in" })
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
                autoComplete: "email"
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
                maxLength: 50
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
    return data$1({ errors: { default: [(error == null ? void 0 : error.message) || "unknown error"] } }, { status: 500 });
  } else {
    return data$1({ errors: { default: ["unknown error"] } }, { status: 500 });
  }
}
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
const registerSchema = z.object({
  email: z.string().email("请输入有效的邮箱地址"),
  password: z.string().min(6, "密码至少需要6个字符").max(50, "密码不能超过50个字符"),
  redirectTo: z.string().optional()
});
async function loader$4({ request }) {
  const userId = await getUserId(request);
  if (userId) {
    return redirect("/");
  }
  return {};
}
async function action$3({ request }) {
  const formData = await request.formData();
  const rawData = Object.fromEntries(formData);
  await sleep(2e3);
  try {
    const { email, password } = registerSchema.parse(rawData);
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      throw { email: ["A user already exists with this email."] };
    }
    const user = await createUser(email, password);
    return createUserSession({
      redirectTo: safeRedirect(rawData.redirectTo),
      request,
      userId: user.id
    });
  } catch (error) {
    return typedFormError(error);
  }
}
function Register() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm", children: /* @__PURE__ */ jsx(RegisterForm, {}) }) });
}
const route16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$3,
  default: Register,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
const route17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
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
const Breadcrumb = React.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsx("nav", { ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
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
const SIDEBAR_COOKIE_NAME = "sidebarIsOpen";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
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
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
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
      className: cn("group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-full", className),
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
        className: cn("bg-sidebar text-sidebar-foreground flex h-full w-[--sidebar-width] flex-col", className),
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
        className: "bg-sidebar text-sidebar-foreground w-[--sidebar-width] p-0 [&>button]:hidden",
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
      className: "text-sidebar-foreground group peer hidden md:block",
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
              "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
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
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow",
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
          "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:hover:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
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
          "focus-visible:ring-sidebar-ring h-8 w-full bg-background shadow-none focus-visible:ring-2",
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
          "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-none transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
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
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
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
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-none transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
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
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums",
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
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
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
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
function NavMain({
  items
}) {
  return /* @__PURE__ */ jsxs(SidebarGroup, { children: [
    /* @__PURE__ */ jsx(SidebarGroupLabel, { children: "Platform" }),
    /* @__PURE__ */ jsx(SidebarMenu, { children: items.map((item) => {
      var _a;
      return /* @__PURE__ */ jsx(Collapsible, { asChild: true, defaultOpen: item.isActive, className: "group/collapsible", children: /* @__PURE__ */ jsxs(SidebarMenuItem, { children: [
        /* @__PURE__ */ jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(SidebarMenuButton, { tooltip: item.title, children: [
          item.icon && /* @__PURE__ */ jsx(item.icon, {}),
          /* @__PURE__ */ jsx("span", { children: item.title }),
          /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
        ] }) }),
        /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsx(SidebarMenuSub, { children: (_a = item.items) == null ? void 0 : _a.map((subItem) => /* @__PURE__ */ jsx(SidebarMenuSubItem, { children: /* @__PURE__ */ jsx(SidebarMenuSubButton, { asChild: true, children: /* @__PURE__ */ jsx("a", { href: subItem.url, children: /* @__PURE__ */ jsx("span", { children: subItem.title }) }) }) }, subItem.title)) }) })
      ] }) }, item.title);
    }) })
  ] });
}
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
function NavProjects({
  projects
}) {
  const { isMobile } = useSidebar();
  return /* @__PURE__ */ jsxs(SidebarGroup, { className: "group-data-[collapsible=icon]:hidden", children: [
    /* @__PURE__ */ jsx(SidebarGroupLabel, { children: "Projects" }),
    /* @__PURE__ */ jsxs(SidebarMenu, { children: [
      projects.map((item) => /* @__PURE__ */ jsxs(SidebarMenuItem, { children: [
        /* @__PURE__ */ jsx(SidebarMenuButton, { asChild: true, children: /* @__PURE__ */ jsxs("a", { href: item.url, children: [
          /* @__PURE__ */ jsx(item.icon, {}),
          /* @__PURE__ */ jsx("span", { children: item.name })
        ] }) }),
        /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(SidebarMenuAction, { showOnHover: true, children: [
            /* @__PURE__ */ jsx(MoreHorizontal, {}),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "More" })
          ] }) }),
          /* @__PURE__ */ jsxs(
            DropdownMenuContent,
            {
              className: "w-48 rounded-lg",
              side: isMobile ? "bottom" : "right",
              align: isMobile ? "end" : "start",
              children: [
                /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
                  /* @__PURE__ */ jsx(Folder, { className: "text-muted-foreground" }),
                  /* @__PURE__ */ jsx("span", { children: "View Project" })
                ] }),
                /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
                  /* @__PURE__ */ jsx(Forward, { className: "text-muted-foreground" }),
                  /* @__PURE__ */ jsx("span", { children: "Share Project" })
                ] }),
                /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
                /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
                  /* @__PURE__ */ jsx(Trash2, { className: "text-muted-foreground" }),
                  /* @__PURE__ */ jsx("span", { children: "Delete Project" })
                ] })
              ]
            }
          )
        ] })
      ] }, item.name)),
      /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(SidebarMenuButton, { className: "text-sidebar-foreground/70", children: [
        /* @__PURE__ */ jsx(MoreHorizontal, { className: "text-sidebar-foreground/70" }),
        /* @__PURE__ */ jsx("span", { children: "More" })
      ] }) })
    ] })
  ] });
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
function NavUser({
  user
}) {
  const { isMobile } = useSidebar();
  return /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      SidebarMenuButton,
      {
        size: "lg",
        className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
        children: [
          /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8 rounded-lg", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: user.avatar, alt: user.name }),
            /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-lg", children: "CN" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
            /* @__PURE__ */ jsx("span", { className: "truncate font-semibold", children: user.name }),
            /* @__PURE__ */ jsx("span", { className: "truncate text-xs", children: user.email })
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
              /* @__PURE__ */ jsx(AvatarImage, { src: user.avatar, alt: user.name }),
              /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-lg", children: "CN" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ jsx("span", { className: "truncate font-semibold", children: user.name }),
              /* @__PURE__ */ jsx("span", { className: "truncate text-xs", children: user.email })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx(DropdownMenuGroup, { children: /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
            /* @__PURE__ */ jsx(Sparkles, {}),
            "Upgrade to Pro"
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
          /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
            /* @__PURE__ */ jsx(LogOut, {}),
            "Log out"
          ] })
        ]
      }
    )
  ] }) }) });
}
function TeamSwitcher({
  teams
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);
  return /* @__PURE__ */ jsx(SidebarMenu, { children: /* @__PURE__ */ jsx(SidebarMenuItem, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      SidebarMenuButton,
      {
        size: "lg",
        className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
        children: [
          /* @__PURE__ */ jsx("div", { className: "bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg", children: /* @__PURE__ */ jsx(activeTeam.logo, { className: "size-4" }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
            /* @__PURE__ */ jsx("span", { className: "truncate font-semibold", children: activeTeam.name }),
            /* @__PURE__ */ jsx("span", { className: "truncate text-xs", children: activeTeam.plan })
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
          /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "text-xs text-muted-foreground", children: "Teams" }),
          teams.map((team, index) => /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: () => setActiveTeam(team), className: "gap-2 p-2", children: [
            /* @__PURE__ */ jsx("div", { className: "flex size-6 items-center justify-center rounded-sm border", children: /* @__PURE__ */ jsx(team.logo, { className: "size-4 shrink-0" }) }),
            team.name,
            /* @__PURE__ */ jsxs(DropdownMenuShortcut, { children: [
              "⌘",
              index + 1
            ] })
          ] }, team.name)),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs(DropdownMenuItem, { className: "gap-2 p-2", children: [
            /* @__PURE__ */ jsx("div", { className: "flex size-6 items-center justify-center rounded-md border bg-background", children: /* @__PURE__ */ jsx(Plus, { className: "size-4" }) }),
            /* @__PURE__ */ jsx("div", { className: "font-medium text-muted-foreground", children: "Add team" })
          ] })
        ]
      }
    )
  ] }) }) });
}
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatar.jpg"
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise"
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup"
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free"
    }
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#"
        },
        {
          title: "Starred",
          url: "#"
        },
        {
          title: "Settings",
          url: "#"
        }
      ]
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#"
        },
        {
          title: "Explorer",
          url: "#"
        },
        {
          title: "Quantum",
          url: "#"
        }
      ]
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#"
        },
        {
          title: "Get Started",
          url: "#"
        },
        {
          title: "Tutorials",
          url: "#"
        },
        {
          title: "Changelog",
          url: "#"
        }
      ]
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#"
        },
        {
          title: "Team",
          url: "#"
        },
        {
          title: "Billing",
          url: "#"
        },
        {
          title: "Limits",
          url: "#"
        }
      ]
    }
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart
    },
    {
      name: "Travel",
      url: "#",
      icon: Map
    }
  ]
};
function AppSidebar({ ...props }) {
  return /* @__PURE__ */ jsxs(Sidebar, { collapsible: "icon", ...props, children: [
    /* @__PURE__ */ jsx(SidebarHeader, { children: /* @__PURE__ */ jsx(TeamSwitcher, { teams: data.teams }) }),
    /* @__PURE__ */ jsxs(SidebarContent, { children: [
      /* @__PURE__ */ jsx(NavMain, { items: data.navMain }),
      /* @__PURE__ */ jsx(NavProjects, { projects: data.projects })
    ] }),
    /* @__PURE__ */ jsx(SidebarFooter, { children: /* @__PURE__ */ jsx(NavUser, { user: data.user }) }),
    /* @__PURE__ */ jsx(SidebarRail, {})
  ] });
}
function Index$3() {
  return /* @__PURE__ */ jsxs(SidebarProvider, { children: [
    /* @__PURE__ */ jsx(AppSidebar, {}),
    /* @__PURE__ */ jsxs(SidebarInset, { children: [
      /* @__PURE__ */ jsx("header", { className: "flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4", children: [
        /* @__PURE__ */ jsx(SidebarTrigger, { className: "-ml-1" }),
        /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mr-2 h-4" }),
        /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
          /* @__PURE__ */ jsx(BreadcrumbItem, { className: "hidden md:block", children: /* @__PURE__ */ jsx(BreadcrumbLink, { href: "#", children: "Building Your Application" }) }),
          /* @__PURE__ */ jsx(BreadcrumbSeparator, { className: "hidden md:block" }),
          /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { children: "Data Fetching" }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col gap-4 p-4 pt-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid auto-rows-min gap-4 md:grid-cols-3", children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-video rounded-xl bg-muted/50" }),
          /* @__PURE__ */ jsx("div", { className: "aspect-video rounded-xl bg-muted/50" }),
          /* @__PURE__ */ jsx("div", { className: "aspect-video rounded-xl bg-muted/50" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" })
      ] })
    ] })
  ] });
}
const route18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$3
}, Symbol.toStringTag, { value: "Module" }));
const icons = "/assets/icons-CB0UzuB1.svg";
const handle = {
  breadcrumb: () => /* @__PURE__ */ jsx(Link, { to: "/issues", children: "Issues" })
};
async function loader$3() {
  return await getIssues();
}
function Index$2() {
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
            Link,
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
const route19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$2,
  handle,
  loader: loader$3
}, Symbol.toStringTag, { value: "Module" }));
const action$2 = async ({ request }) => {
  return logout(request);
};
function Logout() {
  return /* @__PURE__ */ jsx(Form, { method: "post", children: /* @__PURE__ */ jsx("button", { children: "Logout" }) });
}
const route20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$2,
  default: Logout
}, Symbol.toStringTag, { value: "Module" }));
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
function LoginForm() {
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
        title: "登录提交失败",
        description: errors.default[0]
      });
    }
  }, [showModal, errors == null ? void 0 : errors.default]);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsxs(CardContent, { className: "grid p-0 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(Form, { method: "post", className: "p-6 md:p-8", children: [
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "redirectTo", value: redirectTo }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("h1", { className: "flex items-center text-2xl font-bold", children: "Welcome back" }),
            /* @__PURE__ */ jsx("p", { className: "text-balance text-muted-foreground", children: "Login to your Acme OSS Inc. account" })
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
              /* @__PURE__ */ jsx(Link, { to: "#", className: "ml-auto text-sm underline-offset-2 hover:underline", children: "Forgot your password?" })
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
                maxLength: 50
              }
            ),
            /* @__PURE__ */ jsx(ErrorMessage, { error: (_b = errors == null ? void 0 : errors.password) == null ? void 0 : _b[0] })
          ] }),
          /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", disabled: navigation.state === "submitting", children: "Login" }),
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
            /* @__PURE__ */ jsx(Link, { to: "/register", replace: true, className: "underline underline-offset-4", children: "Sign up" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative hidden bg-muted md:block", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/placeholder.svg",
          alt: "",
          className: "absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(PrivacyPolicy, {})
  ] });
}
const loginSchema = z.object({
  email: z.string().email("请输入有效的邮箱地址"),
  password: z.string().min(6, "密码至少需要6个字符").max(50, "密码不能超过50个字符"),
  redirectTo: z.string().optional()
});
async function loader$2({ request }) {
  const userId = await getUserId(request);
  if (userId) {
    return redirect("/");
  }
  return {};
}
async function action$1({ request }) {
  const formData = await request.formData();
  const rawData = Object.fromEntries(formData);
  try {
    const { email, password } = loginSchema.parse(rawData);
    const user = await verifyLogin(email, password);
    if (!user) {
      throw new Error("Invalid email or password.");
    }
    return createUserSession({
      redirectTo: safeRedirect(rawData.redirectTo),
      request,
      userId: user.id
    });
  } catch (error) {
    return typedFormError(error);
  }
}
function Login() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-svh flex-col items-center justify-center bg-background p-6 md:p-10", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm md:max-w-3xl", children: /* @__PURE__ */ jsx(LoginForm, {}) }) });
}
const route21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1,
  default: Login,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
const route22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
let redis;
const redisOptions = {
  maxRetriesPerRequest: null,
  enableReadyCheck: false
};
if (process.env.NODE_ENV === "production") {
  redis = new Redis(process.env.REDIS_URL || "", redisOptions);
} else {
  if (!global.__redis) {
    global.__redis = new Redis(process.env.REDIS_URL || "", redisOptions);
  }
  redis = global.__redis;
}
const loader$1 = async () => {
  const message = await redis.get("message");
  return { message };
};
const action = async ({ request }) => {
  const formData = await request.formData();
  const message = formData.get("message");
  if (!message || typeof message !== "string") {
    return data$1("String only!", { status: 400 });
  }
  await redis.set("message", message);
  return redirect("/");
};
function Index$1() {
  const data2 = useLoaderData();
  const actionMessage = useActionData();
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("b", { children: "Stored Message:" }),
      " ",
      data2.message
    ] }),
    /* @__PURE__ */ jsxs(Form, { method: "post", children: [
      /* @__PURE__ */ jsx("h2", { children: "Change the message" }),
      /* @__PURE__ */ jsxs("label", { children: [
        /* @__PURE__ */ jsx("div", { children: "Message" }),
        /* @__PURE__ */ jsx("input", { name: "message", defaultValue: data2.message ?? "" })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { type: "submit", children: "Save" }) })
    ] }),
    actionMessage ? /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("b", { children: actionMessage }) }) : null
  ] });
}
const route23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: Index$1,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
const route24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const loader = async () => {
  const res = await fetch("https://my-mock-api.com").then((response) => response.json());
  if (!res || typeof res.message !== "string") {
    throw data$1({ message: "Server error" }, { status: 500 });
  }
  return res;
};
function Index() {
  const data2 = useLoaderData();
  return /* @__PURE__ */ jsx("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: /* @__PURE__ */ jsx("h1", { children: data2.message }) });
}
const route25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-B-VnGdKW.js", "imports": ["/assets/jsx-runtime-D2HyDbKh.js", "/assets/index-BabtBpse.js", "/assets/components-2w3IXkXI.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-zmiX1YeF.js", "imports": ["/assets/jsx-runtime-D2HyDbKh.js", "/assets/index-BabtBpse.js", "/assets/components-2w3IXkXI.js", "/assets/use-modal-DKMbKTAJ.js", "/assets/x-COaCJshP.js", "/assets/proxy-BJEPBpP_.js", "/assets/cn-CytzSlOG.js"], "css": ["/assets/root-DzkLGQ5X.css"] }, "routes/agreement.$agreementId[.pdf]": { "id": "routes/agreement.$agreementId[.pdf]", "parentId": "root", "path": "agreement/:agreementId.pdf", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/agreement._agreementId_.pdf_-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/client-only-components": { "id": "routes/client-only-components", "parentId": "root", "path": "client-only-components", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/client-only-components-CGGe2K1q.js", "imports": ["/assets/jsx-runtime-D2HyDbKh.js"], "css": [] }, "routes/contacts.$contactId": { "id": "routes/contacts.$contactId", "parentId": "root", "path": "contacts/:contactId", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/contacts._contactId-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/sharing-loader-data": { "id": "routes/sharing-loader-data", "parentId": "root", "path": "sharing-loader-data", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/sharing-loader-data-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/infinite-scrolling": { "id": "routes/infinite-scrolling", "parentId": "root", "path": "infinite-scrolling", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/infinite-scrolling-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/issues.$id.update": { "id": "routes/issues.$id.update", "parentId": "routes/issues", "path": ":id/update", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/issues._id.update-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/image-resize.$": { "id": "routes/image-resize.$", "parentId": "root", "path": "image-resize/*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/image-resize._-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/framer-motion": { "id": "routes/framer-motion", "parentId": "root", "path": "framer-motion", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/framer-motion-BMM9il9A.js", "imports": ["/assets/jsx-runtime-D2HyDbKh.js", "/assets/proxy-BJEPBpP_.js"], "css": [] }, "routes/issues-events": { "id": "routes/issues-events", "parentId": "root", "path": "issues-events", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/issues-events-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/upload-local": { "id": "routes/upload-local", "parentId": "root", "path": "upload-local", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/upload-local-DIjpp7Z_.js", "imports": ["/assets/jsx-runtime-D2HyDbKh.js", "/assets/components-2w3IXkXI.js", "/assets/index-BabtBpse.js"], "css": [] }, "routes/upload-video": { "id": "routes/upload-video", "parentId": "root", "path": "upload-video", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/upload-video-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/healthcheck": { "id": "routes/healthcheck", "parentId": "root", "path": "healthcheck", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/healthcheck-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/issues_.$id": { "id": "routes/issues_.$id", "parentId": "root", "path": "issues/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/issues_._id-iotGpHi7.js", "imports": ["/assets/jsx-runtime-D2HyDbKh.js", "/assets/components-2w3IXkXI.js", "/assets/index-BabtBpse.js"], "css": [] }, "routes/socket-io": { "id": "routes/socket-io", "parentId": "root", "path": "socket-io", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/socket-io-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/upload-s3": { "id": "routes/upload-s3", "parentId": "root", "path": "upload-s3", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/upload-s3-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/register": { "id": "routes/register", "parentId": "root", "path": "register", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/register-DCyTeeUq.js", "imports": ["/assets/jsx-runtime-D2HyDbKh.js", "/assets/x-COaCJshP.js", "/assets/input-BFbUHQx4.js", "/assets/error-CJmp7wU8.js", "/assets/use-modal-DKMbKTAJ.js", "/assets/components-2w3IXkXI.js", "/assets/gallery-vertical-end-zFz7G13v.js", "/assets/index-BabtBpse.js", "/assets/cn-CytzSlOG.js"], "css": [] }, "routes/sidebar": { "id": "routes/sidebar", "parentId": "root", "path": "sidebar", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/sidebar-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-Bh0TUCXu.js", "imports": ["/assets/jsx-runtime-D2HyDbKh.js", "/assets/x-COaCJshP.js", "/assets/cn-CytzSlOG.js", "/assets/input-BFbUHQx4.js", "/assets/index-BabtBpse.js", "/assets/gallery-vertical-end-zFz7G13v.js"], "css": [] }, "routes/issues": { "id": "routes/issues", "parentId": "root", "path": "issues", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/issues-DrrC_eL2.js", "imports": ["/assets/jsx-runtime-D2HyDbKh.js", "/assets/cn-CytzSlOG.js", "/assets/components-2w3IXkXI.js", "/assets/index-BabtBpse.js"], "css": [] }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/logout-BopgdaDv.js", "imports": ["/assets/jsx-runtime-D2HyDbKh.js", "/assets/components-2w3IXkXI.js", "/assets/index-BabtBpse.js"], "css": [] }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/login-C1i9DC7S.js", "imports": ["/assets/jsx-runtime-D2HyDbKh.js", "/assets/x-COaCJshP.js", "/assets/cn-CytzSlOG.js", "/assets/input-BFbUHQx4.js", "/assets/error-CJmp7wU8.js", "/assets/use-modal-DKMbKTAJ.js", "/assets/components-2w3IXkXI.js", "/assets/index-BabtBpse.js"], "css": [] }, "routes/queue": { "id": "routes/queue", "parentId": "root", "path": "queue", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/queue-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/redis": { "id": "routes/redis", "parentId": "root", "path": "redis", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/redis-BzXxGMqX.js", "imports": ["/assets/jsx-runtime-D2HyDbKh.js", "/assets/components-2w3IXkXI.js", "/assets/index-BabtBpse.js"], "css": [] }, "routes/bff": { "id": "routes/bff", "parentId": "root", "path": "bff", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/bff-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/msw": { "id": "routes/msw", "parentId": "root", "path": "msw", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/msw-CI2qIguW.js", "imports": ["/assets/jsx-runtime-D2HyDbKh.js", "/assets/components-2w3IXkXI.js", "/assets/index-BabtBpse.js"], "css": [] } }, "url": "/assets/manifest-b5cb9cfa.js", "version": "b5cb9cfa" };
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
  "routes/agreement.$agreementId[.pdf]": {
    id: "routes/agreement.$agreementId[.pdf]",
    parentId: "root",
    path: "agreement/:agreementId.pdf",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/client-only-components": {
    id: "routes/client-only-components",
    parentId: "root",
    path: "client-only-components",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/contacts.$contactId": {
    id: "routes/contacts.$contactId",
    parentId: "root",
    path: "contacts/:contactId",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/sharing-loader-data": {
    id: "routes/sharing-loader-data",
    parentId: "root",
    path: "sharing-loader-data",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/infinite-scrolling": {
    id: "routes/infinite-scrolling",
    parentId: "root",
    path: "infinite-scrolling",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/issues.$id.update": {
    id: "routes/issues.$id.update",
    parentId: "routes/issues",
    path: ":id/update",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/image-resize.$": {
    id: "routes/image-resize.$",
    parentId: "root",
    path: "image-resize/*",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/framer-motion": {
    id: "routes/framer-motion",
    parentId: "root",
    path: "framer-motion",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/issues-events": {
    id: "routes/issues-events",
    parentId: "root",
    path: "issues-events",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/upload-local": {
    id: "routes/upload-local",
    parentId: "root",
    path: "upload-local",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/upload-video": {
    id: "routes/upload-video",
    parentId: "root",
    path: "upload-video",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/issues_.$id": {
    id: "routes/issues_.$id",
    parentId: "root",
    path: "issues/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route13
  },
  "routes/socket-io": {
    id: "routes/socket-io",
    parentId: "root",
    path: "socket-io",
    index: void 0,
    caseSensitive: void 0,
    module: route14
  },
  "routes/upload-s3": {
    id: "routes/upload-s3",
    parentId: "root",
    path: "upload-s3",
    index: void 0,
    caseSensitive: void 0,
    module: route15
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: route16
  },
  "routes/sidebar": {
    id: "routes/sidebar",
    parentId: "root",
    path: "sidebar",
    index: void 0,
    caseSensitive: void 0,
    module: route17
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route18
  },
  "routes/issues": {
    id: "routes/issues",
    parentId: "root",
    path: "issues",
    index: void 0,
    caseSensitive: void 0,
    module: route19
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: route20
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: route21
  },
  "routes/queue": {
    id: "routes/queue",
    parentId: "root",
    path: "queue",
    index: void 0,
    caseSensitive: void 0,
    module: route22
  },
  "routes/redis": {
    id: "routes/redis",
    parentId: "root",
    path: "redis",
    index: void 0,
    caseSensitive: void 0,
    module: route23
  },
  "routes/bff": {
    id: "routes/bff",
    parentId: "root",
    path: "bff",
    index: void 0,
    caseSensitive: void 0,
    module: route24
  },
  "routes/msw": {
    id: "routes/msw",
    parentId: "root",
    path: "msw",
    index: void 0,
    caseSensitive: void 0,
    module: route25
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
