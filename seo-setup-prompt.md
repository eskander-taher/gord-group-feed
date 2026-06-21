Audit the SEO setup in this Next.js (App Router) project and bring it up to the same baseline as another project I just did:

1. **Layout metadata audit** — find the root layout (or locale layout if this project uses next-intl/i18n routing) and check `generateMetadata`/static `metadata` export for: `metadataBase`, `alternates.canonical` (+ `languages`/hreflang if multi-locale), `robots`, `openGraph`, `twitter`, `icons`, `manifest`. Fill in whatever is missing. Ask me for the production domain if it's not already in env vars/config — don't guess it.

2. **Favicons** — check `public/` for existing favicon assets (`favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, `site.webmanifest`). If they exist but aren't wired into metadata, add an `icons` block and `manifest: "/site.webmanifest"` to the layout metadata. If `site.webmanifest` has empty `name`/`short_name`, fill them in with the real product name. If favicon files are missing entirely, flag that — don't generate fake binary assets.

3. **`app/sitemap.ts`** — add a `MetadataRoute.Sitemap` export. If the project has multiple locales, emit one entry per locale with `alternates.languages` hreflang mapping. Use the same production domain from step 1.

4. **`app/robots.ts`** — add a `MetadataRoute.Robots` export allowing all user agents and pointing `sitemap` at `${siteUrl}/sitemap.xml`.

5. **`viewport` export** — add `width: device-width`, `initialScale: 1`, and a sensible `themeColor` if not already set.

Add a quick note at the end if there's no real Open Graph share image (1200×630) — a square logo/icon is an acceptable fallback but not ideal, flag it rather than silently leaving it.

Don't touch unrelated code, don't add comments explaining what the code does, and run a type-check at the end to confirm nothing broke.
