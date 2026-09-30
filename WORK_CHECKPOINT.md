# Realtor Pavneet Singh website cleanup checkpoint

Saved: 2026-09-30 (Asia/Kolkata)

## Status

The visual-cleanup pass is complete. The full responsive audit, source cleanup, lockfile-exact install, production build, and rendered-HTML test all pass.

## Completed changes

- Removed the small `Sutton Group Professional Realty` subtitle under the navbar name.
- Replaced the circular footer `Start a conversation` link with a rectangular `footer-cta` button.
- Removed the fixed four-button action dock that covered home-page content. WhatsApp remains in the footer.
- Removed the decorative hero coordinate note and duplicate hero brokerage signature.
- Raised CSS text declarations below `11px` to a readable minimum and relaxed display-heading line heights that could clip wrapped text.
- Increased the shared eyebrow label to `12px` and protected its decorative line from shrinking into the text.
- Tightened the desktop navigation so it fits common laptop widths.
- Fixed the shared `.lead-copy` spacing that caused headings and paragraphs to touch on owner, investor, and asset pages.
- Fixed the market-snapshot paragraph selector so it no longer removes the eyebrow's bottom spacing.
- Increased footer contact, copyright, and legal text to `12px`, with less crowded letter spacing.
- Removed all obsolete `.hero-side-note`, `.hero-brand-signature`, and `.floating-actions` CSS, including the mobile body padding that only supported the removed dock.
- Removed the unused `assetClasses` import reported by lint.
- Added `scripts/audit-layout.mjs`, a reusable Chrome DevTools layout audit with smoke, mobile, responsive, and single-route modes.

Source files intentionally modified across the cleanup:

- `app/components/SiteChrome.tsx`
- `app/components/HomeExperience.tsx`
- `app/components/InnerPages.tsx`
- `app/globals.css`
- `scripts/audit-layout.mjs`
- `WORK_CHECKPOINT.md`

## Verification completed

- Browser preview returned HTTP 200 on every audited route.
- 390px audit: 25 routes passed with no horizontal page overflow, escaped/clipped text, text collisions, sub-11px text, broken images, framework overlays, or console errors.
- 768px audit: home plus seven representative layouts passed.
- 1280px audit: the same eight representative layouts passed.
- Visually inspected `/`, `/owners`, `/contact`, `/properties`, `/about`, `/guides`, one property detail page, and one opportunity detail page across mobile, tablet, and desktop captures.
- Confirmed the footer CTA has square corners and the removed floating dock no longer covers content.
- Final searches found no font sizes below `11px`, line heights below `1`, or leftover removed-element selectors/labels.
- Installed the exact `package-lock.json` dependency set successfully; `node_modules` is now a real local directory and includes Vinext.
- `npm run build`: passed with Vinext/Vite 8.0.13.
- `node --test tests/rendered-html.test.mjs`: passed.
- `node_modules/.bin/tsc --noEmit --pretty false`: passed.
- `npm run lint`: passed with zero errors. The remaining 25 warnings are the existing `@next/next/no-img-element` recommendations.

## Environment notes

- The temporary borrowed `node_modules` symlink and `.next` preview-cache symlink have been removed.
- The project now uses its lockfile-exact local dependencies.
- `dist/`, `node_modules/`, and `.sites-runtime/` are generated or disposable local directories.
- The root filesystem remains tight on space after the exact install, so avoid duplicate dependency installs.
- This directory still does not expose a Git worktree; the source files and this checkpoint are the durable record.

## Optional future work

- Evaluate migrating raw `<img>` elements to an image component compatible with the Vinext runtime. This is an optimization pass, not a blocker; current lint, build, browser, and rendered-output checks pass.
