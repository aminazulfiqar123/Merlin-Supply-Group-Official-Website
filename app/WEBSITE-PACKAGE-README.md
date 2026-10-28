# Merlin Supply Group LLC website

This repository contains the editable source for the Merlin Supply Group website.

## Run locally
Install Node.js 22+ and Bun. From the app directory run bun install, then bun run dev to develop locally and bun run build to check and build for production.

## Deploy on Vercel
Connect this GitHub repository in Vercel and set the Root Directory to app. Use bun install for installation and bun run build for the build command. Select the TanStack Start framework preset and Node.js 22.

## Domain and services
Add the domain in Vercel after the deployment is verified, then follow Vercel's DNS instructions at the domain registrar. Website imagery is served from public assets or third-party image URLs. Contact forms use Web3Forms; replace the key in the form component with your own provider key if required. Keep secret keys out of Git.
