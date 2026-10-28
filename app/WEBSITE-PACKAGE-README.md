# Merlin Supply Group LLC — website source package

This is the full editable source for the six-page Merlin Supply Group website. It is a React 19 + TanStack Start project using Vite and Tailwind CSS 4, plus the included workspace packages.

## Pages
- `/` Home
- `/about` About Us
- `/categories` Core Categories
- `/b2b-wholesale` B2B Wholesale
- `/brand-partnerships` Brand Partnerships
- `/contact` Contact Us
- `/privacy`, `/terms`, `/compliance` policy pages

## Customize the brand
- Colors and most responsive styling: `src/styles.css`. At the start of the file, edit `:root` variables `--forest`, `--pine`, `--deep`, `--gold`, `--gold-deep`, `--paper`, and `--ink`.
- Header/footer logo and wordmark: `src/components/site/Site.tsx`, in `Header`, `Footer`, and the `BrandMark` helper. Replace the `Boxes` icon with your approved logo SVG/image or inline SVG. Search for `brand-mark` and `BrandMark`.
- Navigation: the `nav` array in `src/components/site/Site.tsx`.
- Page text and sections: exported page components in the same file.
- Product categories and image URLs: `src/data/catalog.json`.
- SEO metadata: `src/app-meta.json` and defaults in `src/routes/__root.tsx`.
- Favicon: `public/favicon.svg`.
- Motion: animation keyframes and responsive/reduced-motion rules at the bottom of `src/styles.css`.

## Run locally
Use Node.js 22+ and Bun (the included `bun.lock` is authoritative):
1. Install Bun from https://bun.sh/ if needed.
2. Run `bun install` from this directory.
3. Run `bun run dev` and open the local URL printed by Vite.
4. Before production, run `bun run typecheck` and `bun run build`.

## Host independently of Higgsfield
You own the code in this package and can move it to another host. The current project is configured for TanStack Start and a Cloudflare Worker deployment (`wrangler.jsonc`); it is not a static-only HTML export. For independent Cloudflare deployment, create/use your own Cloudflare account, configure any needed account identifiers and bindings in `wrangler.jsonc`, then deploy using the Cloudflare tooling described by the TanStack Start/Cloudflare deployment docs. Alternatively, adapt the app to another supported TanStack Start host. A domain purchased from a registrar is connected by adding the DNS records required by that host.

## Forms — important
The forms are functional as browser-side forms. If `VITE_FORMSPREE_ENDPOINT` is configured, submissions POST to that endpoint. Without it, forms open a pre-filled email draft in the visitor's mail application. To receive form submissions without depending on the visitor's mail application, configure a form provider or add a server-side API/email integration. Do not commit API keys to source control.

## Content and assets
Category/warehouse imagery currently uses hosted Unsplash URLs. Replace these with your licensed brand/product/warehouse photos when ready. Verify all contact details and legal text before launch. The site's compliance copy deliberately does not claim authorization from every manufacturer.

## Current status
This package is the source of the website deployed at https://merlin-supply-group.higgsfield.app. Downloading the package does not automatically transfer the hosting deployment, custom domain, or hosting account. It gives you the source to run, modify, and deploy under your own hosting account.
