---
name: project-swa-deployment
description: How the Vite+React app deploys to Azure SWA and why it's configured the way it is
metadata:
  type: project
---

The app deploys to Azure Static Web Apps via `.github/workflows/azure-static-web-apps-witty-meadow-01c856e0f.yml` using Oryx (SWA's built-in build system).

**Why:** Three issues had to be resolved to get a working deployment:

1. `staticwebapp.config.json` must live in `public/` (not repo root) so Vite copies it to `dist/`. Without it, SWA has no navigation fallback and SPA routes 404.

2. Do NOT use `skip_app_build: true`. When files are pre-built and uploaded directly, the SWA deploy client stores blobs without content-type metadata, causing `.js` files to be served as `application/octet-stream`. Oryx-managed builds upload with correct MIME types.

3. The `package.json` build script uses `node node_modules/typescript/bin/tsc -b && node node_modules/vite/bin/vite.js build` instead of `tsc -b && vite build`. Oryx's container does not set the executable bit on `node_modules/.bin` symlinks, so calling `tsc` directly fails with `Permission denied`. Using `node` to invoke the scripts bypasses this.

**How to apply:** If deployment breaks again, check these three things first. Do not re-add `skip_app_build: true`.
