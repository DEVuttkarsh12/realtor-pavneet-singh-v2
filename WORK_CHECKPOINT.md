# Pavneet Singh website checkpoint

Saved: 2026-10-03 (Asia/Kolkata)

## Current status

The builder and REALTOR® visual redesign is complete. The user's request was to make the entire website consistent, bold, readable and concise, fix cropped photographs, and give it a clear residential, commercial and development identity.

## Implemented

- Rebuilt the homepage around buying a home, selling a property, land and development, and commercial and investment property.
- Retained the Halifax drone video, added straightforward calls to action, a development section, Pavneet's larger studio portrait and three concise resource cards.
- Installed the official self-hosted Manrope variable font, including its OFL license. Every audited heading uses Manrope at weight 800.
- Established a shared navy, warm white and brass visual palette with one responsive type scale. Body copy is generally 17px, controls 15–16px, and smaller labels and disclosure text have a 14px minimum.
- Added `app/site-design.css` for the shared design system and normalized the earlier CSS font declarations and heading scales.
- Added `PageHero.tsx` so service, about, article and advisory pages share the same hero hierarchy and image framing.
- Added `SiteImage.tsx` with intrinsic local image dimensions using the Vinext-compatible unoptimized image component. Updated inner page images to use it.
- Replaced overly tall and zoomed image frames with full portrait, landscape and intrinsic image ratios. Removed the old portrait padding that narrowed the about-page copy.
- Simplified navigation to Properties, Homes, Land & Build, Commercial, Invest and About, with additional resources available in the mobile menu and footer.
- Added active navigation states, a skip link, keyboard menu closing and focus trapping. The closed menu uses `inert`.
- Removed the custom cursor and parallax JavaScript. Kept the Halifax video with a reduced-motion poster fallback.
- Shortened prominent copy and removed repetitive keyword sections and duplicate homepage sections.
- Simplified investment and property forms to the details needed for an initial conversation. The forms prepare an email; visitors must review and send it themselves.
- Kept public property search linked to REALTOR.ca. The site does not present sample properties as live listings or invent completed projects.
- Retained the separation between Sutton brokerage services and separate development interests.

## Verification

- TypeScript: passed.
- ESLint: passed with zero warnings or errors after the image component changes.
- Production build: passed with Vinext / Vite.
- `node --test tests/rendered-html.test.mjs`: passed.
- Responsive audit: 48 checks passed, zero failures. This covers 26 public pages at 390px and 11 representative layouts each at 768px and 1280px.
- The audit checks horizontal overflow, escaped text, small text below 14px, text collisions, heading font and bold weight, broken images, framework overlays and console errors.
- Visually reviewed the homepage, about, investment and contact layouts, including mobile and desktop screenshots.
- Mobile menu: open, Escape close, inert state and Land & Build navigation passed.
- Investment, property submission and contact forms: required-field validation and prepared email payloads passed. No message was sent.
- Public property search destination link verified.
- Corrected an audit-induced hydration warning by scrolling to load lazy images without mutating their server-rendered loading attributes.
- Final audit report: `/tmp/realtor-layout-final.log`.
- Browser captures: `/tmp/pavneet-layout-audit/`.
- Temporary interaction check: `/tmp/realtor-interactions.mjs`.

## Preview

The local Vite preview was left running at `http://127.0.0.1:3010/`.

If it has stopped, run `npm run dev -- --host 127.0.0.1 --port 3010`.

## Source files

- `app/components/HomeExperience.tsx`
- `app/components/SiteChrome.tsx`
- `app/components/InnerPages.tsx`
- `app/components/AdvisoryPages.tsx`
- `app/components/PageHero.tsx` (new)
- `app/components/SiteImage.tsx` (new)
- `app/data.ts`
- `app/layout.tsx`
- `app/globals.css`
- `app/site-design.css` (new)
- `public/fonts/manrope-variable.ttf` (new)
- `public/fonts/manrope-OFL.txt` (new)
- `scripts/audit-layout.mjs`
- `WORK_CHECKPOINT.md`
- `REVAMP_HANDOFF.md`

## Environment notes

- This directory does not expose a Git worktree. Source files and this checkpoint are the durable record.
- Disk space is tight. With approval, removed approximately 301 MB of regenerable `.sites-runtime/npm-cache/_cacache` to complete the work. Installed dependencies and source were retained.
- Browser checks used agent-browser and the existing Chrome DevTools layout audit.
- No deployment was performed. The existing handoff documents future listing-feed, CRM, approved proof and original media work.
