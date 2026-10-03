# Pavneet Singh website checkpoint

Saved: 2026-10-03 (Asia/Kolkata)

## Current status

The builder and REALTOR® visual redesign is complete. The user's request was to make the entire website consistent, bold, readable and concise, fix cropped photographs, and give it a clear residential, commercial and development identity.

### Latest refinement: centered hero, sharper footage, more devices

- Centered the homepage heading, eyebrow, supporting copy and buttons. Balanced vertical spacing and replaced the one-sided overlay with an even gradient.
- Added genuine 1080p Halifax drone footage from Max Medyk / Pexels, an optimized 7.8 MB desktop video, a 4.2 MB portrait video for phones and a sharp matching poster. Source and license details are in `public/videos/SOURCES.md`.
- Native video source media queries select the phone or desktop version. Reduced-motion mode uses the poster and downloads neither video in current supporting browsers.
- Added short landscape hero spacing and expanded the responsive audit to 320, 390, 600, 768, 844, 1024, 1440, 1920 and 2560px screens.
- Final combined responsive report: 99 layout checks passed, including 26 routes on a 320px phone and representative routes on tablets, landscape phones and large desktops. Nine additional homepage checks confirmed exact centering. The centering measurement uses available document width so browser scrollbars do not create false failures.
- Desktop and phone video selection, autoplay progression, muted inline playback, reduced-motion poster and zero video downloads passed. No playback console errors.
- TypeScript and ESLint passed again. Visually reviewed phone and desktop screenshots.
- Reports: `/tmp/realtor-responsive-final.json`, `/tmp/realtor-hero-audit.log`. Playback check: `/tmp/realtor-video-check.mjs`.

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

The local Vite preview is running at `http://127.0.0.1:3011/` (session 4032). Port 3010 was already occupied.

If it has stopped, run `npm run dev -- --host 127.0.0.1 --port 3011`.

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
- GitHub push uses the real checkout at `/tmp/realtor-github-push`, remote `DEVuttkarsh12/realtor-pavneet-singh-v2`, branch `main`. The initial redesign was pushed in commit `12ce83e`; refinements are copied into this checkout for subsequent commits.
- Disk space is tight. With approval, removed approximately 301 MB of regenerable `.sites-runtime/npm-cache/_cacache` to complete the work. Installed dependencies and source were retained.
- Browser checks used agent-browser and the existing Chrome DevTools layout audit.
- No deployment was performed. The existing handoff documents future listing-feed, CRM, approved proof and original media work.


## October 3, 2026 — published About and guide content restored

Compared the published site’s [About Pavneet](https://realtorpavneetsingh.ca/about-pavneet-singh), [buying guide](https://realtorpavneetsingh.ca/buying-a-home-guide), and [selling guide](https://realtorpavneetsingh.ca/selling-a-home-guide) against the local redesign.

- Expanded About with Pavneet’s family and newcomer focus, trust-based approach, longer-term goals and six linked service areas. Retained his local portraits, community section, brokerage information and existing development disclosure.
- Expanded both seven-step guides with 21 practical checklist items, three preparation phases, step navigation and links between the guides.
- Added Guides and About Pavneet to the primary navigation and direct buyer/seller links in the mobile menu and footer. Updated home and guide-hub links.
- Added the original published URLs while preserving /about, /buying-guide and /selling-guide. All versions share canonical metadata pointing to the original published URLs.
- Made the expanded guide sidebar scroll with the page so its full step navigation remains reachable.
- Added production-rendering regression coverage for the original URLs, shorter links, canonical metadata and shared navigation.

Validation: TypeScript and full lint passed; final production build and rendered HTML tests passed. Browser checks passed on all seven affected routes at 390px and 1280px (14 checks), with no overflow, broken loaded images, error overlays or page errors. Desktop navigation, step anchors, related-guide links, contact CTA and mobile menu links passed. Navigation automation used reduced motion to avoid clicks racing smooth scrolling. Screenshots are in /tmp/pavneet-*-390.png and /tmp/pavneet-*-1280.png. The temporary verification script is /tmp/check-pavneet-guides.mjs.

Preview is running at http://127.0.0.1:3011/ (dev process session 42146). Changes are local; no deployment or GitHub push was performed for this request.
