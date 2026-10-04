# October 3, 2026 design update

The builder and REALTOR® visual redesign is complete. See `WORK_CHECKPOINT.md` for the current implementation, verification and preview instructions. The September handoff below remains background for listing feeds, approved transaction records and future integrations.

# Pavneet Singh website revamp handoff

## Implemented in this repository

- Repositioned the homepage around Pavneet Singh as a Nova Scotia real estate advisor for investment, commercial, development land and residential clients.
- Replaced the unrelated apartment leasing experience with an editorial homepage using existing Halifax footage, Nova Scotia imagery and Pavneet's actual portrait.
- Added investor criteria, commercial real estate, property submission, selected transactions and media pages. The investor and owner forms prepare categorized emails to Pavneet; the visitor must send the message from their email app.
- Kept the full Sutton Group Professional Realty name prominent in the shared header on every page, with Pavneet's name below it. Removed unsupported superiority claims and stopped publishing sample property and transaction cards as current inventory or verified proof.
- Updated the property hub to point to current public listing search until a licensed listing feed is available. Old sample property and opportunity detail URLs redirect there.
- Added clear separation between Sutton brokerage services and Pavneet's separate development interests, plus a visible mobile Call / WhatsApp / Email bar.
- Reworked the intelligence index and replaced the visible generic property imagery with the local imagery already in the repo.

## Inputs required before the remaining features can go live

1. **Broker approval:** Sutton's broker should review the complete site, the exact licensed brokerage name, the development disclosure, service descriptions, imagery, and any future advertising before publication. The [NSREC 2026 Advertising Requirements](https://www.nsrec.ns.ca/Advertising_Requirements_04-2026.pdf) require broker review and prominent brokerage identification on every page.
2. **Verified proof:** Provide a transaction list with property, location, dates, role, permission to publish, approved photographs, and exact attribution. Add metrics, case studies, awards and testimonials only from this approved record. Historical RE/MAX recognition should be dated and clearly identified as historical.
3. **Listings and search:** Obtain CREA/DDF or another permitted IDX feed, credentials, listing permissions and brokerage rules for display. Then add in-site map search, filters, saves, favorites and alerts. The current property hub deliberately does not present an unlicensed feed as live inventory.
4. **CRM and private network:** Choose a CRM and provide a secure API/webhook destination, field mapping, retention policy, access roles and consent logging. Email preparation is a temporary contact path, not automatic lead capture or a functioning investor alert network. Suggested lead fields: source, campaign, property, category, asset class, budget, geography, timeline, financing status, last contact, next action and consent record.
5. **Secure documents:** Provision approved private file storage and a secure upload flow before accepting surveys, rent rolls, environmental reports, mortgage documents or offering memoranda. The property form currently asks which documents are available and instructs clients to arrange a secure transfer.
6. **Original media:** All 13 personal and community photographs supplied on October 4 are now integrated into About, Media and the homepage. See `public/images/community/SOURCES.md` for the full placement map. Future media work can add Pavneet-led video, licensed property imagery, approved transaction photos and local market footage.
7. **Content production:** Supply current market data with dates and sources, original Halifax and regional market analysis, approved video episodes/transcripts, property case studies, reviews and lead magnet files before enabling those modules. Do not publish placeholder metrics or articles as if they were live research.
8. **External profiles and email:** Update LinkedIn, Google Business Profile, social profiles and directories outside this repository to the current Sutton affiliation. Create and test a domain mailbox before replacing the working Gmail address in the site.
9. **Email marketing:** Implement a separate opt-in with recorded consent, sender identification and unsubscribe handling when a CRM/newsletter service is selected. The [CRTC CASL guidance](https://crtc.gc.ca/eng/com500/faq500.htm/) describes those requirements. The current enquiry forms ask only for permission to respond to that enquiry.

## Verification performed

- TypeScript, production build and rendered HTML test passed.
- The mobile layout audit passed across all 22 public routes checked, with no horizontal overflow, text collisions, broken images, framework overlays or browser console errors.
- The desktop homepage passed the same layout checks at a 1440px viewport.
