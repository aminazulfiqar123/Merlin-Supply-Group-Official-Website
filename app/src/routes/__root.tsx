import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";
import appMetaJson from "../app-meta.json";

const DEFAULT_TITLE = "Merlin Supply Group LLC | Wholesale Distribution";
const DEFAULT_DESCRIPTION = "Wholesale sourcing, supplier relationships, and distribution coordination for U.S. business buyers.";
type AppMeta = {
  og_title?: string | null;
  og_description?: string | null;
  og_image_url?: string | null;
  favicon_url?: string | null;
};
const appMeta = appMetaJson as AppMeta;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    const title = appMeta.og_title ?? DEFAULT_TITLE;
    const description = appMeta.og_description ?? DEFAULT_DESCRIPTION;
    const image = appMeta.og_image_url ?? undefined;
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title },
        { name: "description", content: description },
        { name: "author", content: "Merlin Supply Group LLC" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        ...(image ? [{ property: "og:image", content: image }] : []),
        { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
        ...(image ? [{ name: "twitter:image", content: image }] : []),
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        ...(appMeta.favicon_url ? [{ rel: "icon", href: appMeta.favicon_url }] : []),
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>;
}

function NotFoundComponent() {
  return (
    <main className="container" style={{ minHeight: "50vh", paddingBlock: "5rem", textAlign: "center" }}>
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you’re looking for doesn’t exist or has been moved.</p>
      <Link to="/" className="nav-cta">Return home</Link>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  return (
    <main className="container" style={{ minHeight: "50vh", paddingBlock: "5rem", textAlign: "center" }}>
      <p className="eyebrow">Something went wrong</p>
      <h1>This page didn’t load</h1>
      <p>Please try again or return to the home page.</p>
      <button className="nav-cta" onClick={reset}>Try again</button>{" "}
      <a className="nav-cta" href="/">Return home</a>
    </main>
  );
}
