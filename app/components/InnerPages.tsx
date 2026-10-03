"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  blogPosts,
  type BlogPost,
  buyerSteps,
  communities,
  sellerSteps,
  services,
  site,
} from "../data";
import { ArrowUpRight, SiteChrome } from "./SiteChrome";
import AdvisoryPage from "./AdvisoryPages";
import PageHero from "./PageHero";
import SiteImage from "./SiteImage";

type HeroProps = {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  image: string;
  imageAlt?: string;
  index?: string;
  align?: "left" | "center";
  variant?: "default" | "portrait";
};

function InnerHero({ eyebrow, title, copy, image, imageAlt = "", variant = "default" }: HeroProps) {
  return <PageHero eyebrow={eyebrow} title={title} copy={copy} image={image} imageAlt={imageAlt} portrait={variant === "portrait"} />;
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: ReactNode; copy?: string }) {
  return (
    <div className="section-heading reveal">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function PageCta({ title, copy = "Tell Pavneet what you are considering and receive direct guidance on the clearest next step." }: { title: ReactNode; copy?: string }) {
  return (
    <section className="page-cta dark-section">
      <div className="shell page-cta-grid">
        <div className="reveal">
          <p className="eyebrow light">Start with a conversation</p>
          <h2>{title}</h2>
        </div>
        <div className="reveal reveal-delay">
          <p>{copy}</p>
          <Link className="primary-button light-button" href="/contact">Discuss your goals <ArrowUpRight /></Link>
        </div>
      </div>
    </section>
  );
}

const assetPageMap = {
  commercial: {
    eyebrow: "Commercial real estate",
    title: <>Commercial real estate for business, income and <em>ownership.</em></>,
    copy: "Commercial properties for sale, commercial properties for lease, investment properties, retail, office, mixed-use and businesses for sale across Nova Scotia.",
    image: "/images/halifax-hero-poster.webp",
    index: "COMM / 04",
    intro: "A commercial property decision should connect location, income, use, tenancy, operating reality and the business objective behind the transaction.",
    groups: ["Commercial Properties For Sale", "Commercial Properties For Lease", "Investment Properties", "Retail", "Office", "Mixed-Use", "Businesses For Sale"],
    markets: ["Commercial Real Estate Halifax", "Commercial Real Estate Dartmouth", "Commercial Real Estate Bedford", "Commercial Property Burnside", "Commercial Real Estate Nova Scotia"],
  },
  industrial: {
    eyebrow: "Industrial real estate",
    title: <>Industrial property. <em>Built for business.</em></>,
    copy: "Buy, sell or lease warehouses, industrial buildings and sites across Nova Scotia.",
    image: "/images/halifax-aerial.jpg",
    index: "IND / 05",
    intro: "Industrial opportunities require clear understanding of access, zoning, loading, ceiling heights, power, land utility, leasing demand and owner-user requirements.",
    groups: ["Warehouse", "Distribution", "Manufacturing", "Flex Industrial", "Industrial Development Land", "Owner-Occupied Buildings", "Industrial Investments", "Industrial Leasing"],
    markets: ["Industrial Real Estate Halifax", "Burnside Industrial Properties", "Industrial Property Dartmouth", "Industrial Property Bedford", "Industrial Land HRM", "Industrial Property Nova Scotia"],
  },
  multifamily: {
    eyebrow: "Nova Scotia multifamily",
    title: <>Multifamily. <em>More potential.</em></>,
    copy: "Find apartment buildings, income properties and portfolios that fit your investment goals.",
    image: "/images/halifax-aerial.jpg",
    index: "MULTI / 06",
    intro: "Multifamily opportunities should be reviewed through income, operating costs, rent context, unit mix, condition, financing and long-term portfolio fit.",
    groups: ["Apartment Buildings", "5-20 Units", "20-50 Units", "50-100 Units", "100+ Units", "Multifamily Portfolios", "Development Opportunities"],
    markets: ["Multifamily For Sale Halifax", "Apartment Buildings For Sale Nova Scotia", "Halifax Rental Market", "Dartmouth Multifamily", "Nova Scotia Apartment Portfolios"],
  },
  "development-land": {
    eyebrow: "Development land",
    title: <>Land for your <em>next vision.</em></>,
    copy: "Site acquisition, land sales and new construction opportunities across Nova Scotia.",
    image: "/images/development.jpg",
    index: "LAND / 07",
    intro: "Development land requires attention to zoning, density, municipal approvals, servicing, development potential, highest-and-best use and buyer/developer targeting.",
    groups: ["Residential Development", "Commercial Development", "Industrial Land", "Mixed-Use Development", "Multifamily Sites", "Institutional", "Land Assemblies"],
    markets: ["Development Land Halifax", "Development Land Nova Scotia", "Industrial Land HRM", "Multifamily Sites Halifax", "Land Assemblies Nova Scotia"],
  },
  development: {
    eyebrow: "Development advisory",
    title: <>A foundation for <em>what’s next.</em></>,
    copy: "Site sourcing, development land review, commercial sites, redevelopment opportunities, mixed-use projects and professional coordination.",
    image: "/images/halifax-hero-poster.webp",
    index: "DEV / 08",
    intro: "Pavneet supports development-led opportunities by coordinating real estate strategy and introducing appropriate professional advisors where legal, planning, engineering or financial expertise is required.",
    groups: ["Development Land Sourcing", "Commercial Sites", "Redevelopment Opportunities", "Residential Development", "Mixed-Use Projects", "Industrial Land", "Site Acquisition"],
    markets: ["Halifax Growth Corridors", "Kings County Development", "Annapolis Development Land", "HRM Mixed-Use Sites", "Nova Scotia Development Advisory"],
  },
  residential: {
    eyebrow: "Residential real estate",
    title: <>Find your <em>place to call home.</em></>,
    copy: "Thoughtful representation for buyers, sellers, relocation clients and residential investors across Nova Scotia.",
    image: "/images/home-exterior.jpg",
    index: "RES / 09",
    intro: "A residential decision should bring together your daily life, complete budget, location, property condition, timing and long-term plans.",
    groups: ["Luxury & executive homes", "Relocation to Nova Scotia", "First-time buyers", "Move-up families", "Downsizers", "Waterfront", "New construction", "Residential investment"],
    markets: ["Homes For Sale Halifax", "Residential Real Estate Nova Scotia", "Income Properties Halifax", "Luxury Homes Nova Scotia", "Sell Your Home"],
  },
} as const;

function AssetPage({ type }: { type: keyof typeof assetPageMap }) {
  const page = assetPageMap[type];
  return (
    <SiteChrome darkHeader>
      <main id="main-content">
        <InnerHero eyebrow={page.eyebrow} title={page.title} copy={page.copy} image={page.image} index={page.index} />
        <section className="asset-page-section section-space">
          <div className="shell asset-page-grid">
            <div className="reveal">
              <p className="eyebrow">Advisory focus</p>
              <h2>Start with <em>a clear plan.</em></h2>
              <p className="lead-copy">{page.intro}</p>
              <div className="asset-page-actions">
                <Link className="primary-button ink-button" href="/properties">Explore properties <ArrowUpRight /></Link>
                <Link className="line-link" href="/contact">Discuss a requirement <ArrowUpRight /></Link>
              </div>
            </div>
            <div className="asset-taxonomy reveal reveal-delay">
              <span>How Pavneet can help</span>
              {page.groups.map((item) => <Link href="/contact" key={item}>{item}<ArrowUpRight /></Link>)}
            </div>
          </div>
        </section>
        <PageCta title={<>Have a {page.eyebrow.toLowerCase()} requirement?</>} copy="Tell Pavneet what you want to acquire, lease, sell or develop and receive a practical next step." />
      </main>
    </SiteChrome>
  );
}

function IntelligencePage() {
  return <SiteChrome darkHeader><main id="main-content">
    <InnerHero eyebrow="Nova Scotia real estate intelligence" title={<>Real estate <em>insights.</em></>} copy="Practical perspective on investment, commercial, development and residential real estate in Nova Scotia." image="/images/halifax-aerial.jpg" index="INTELLIGENCE / 08" />
    <section className="blog-index-section section-space"><div className="shell">
      <SectionIntro eyebrow="Read the market" title={<>Ideas grounded in <em>real decisions.</em></>} copy="Explore the considerations behind buying, selling and investing, then discuss how they apply to your specific situation." />
      <div className="blog-card-grid">{blogPosts.map((post, index) => <Link className={`blog-card reveal reveal-delay-${index + 1}`} href={`/blog/${post.slug}`} key={post.slug} data-cursor-label="Read"><SiteImage src={post.image} alt="" /><div><span>{post.category} / {post.readTime}</span><h3>{post.title}</h3><p>{post.excerpt}</p><strong className="card-action">Read the article <ArrowUpRight /></strong></div></Link>)}</div>
    </div></section>
    <PageCta title={<>Need a market view for your <em>specific property?</em></>} copy="Share the property, location and decision you are considering. Pavneet can help identify the useful market questions." />
  </main></SiteChrome>;
}

function AboutPage() {
  const faqs = [
    ["What areas does Pavneet serve?", "Pavneet advises clients across Nova Scotia, with strong local context in Halifax, Bedford, Dartmouth, Hammonds Plains, Sackville, Truro, the Annapolis Valley, and Cape Breton."],
    ["Can Pavneet help newcomers buy a first home?", "Yes. Guidance can cover the purchase sequence, complete ownership budget, community fit, mortgage preparation, closing costs, and the local professionals involved in a Canadian transaction."],
    ["Does Pavneet work with investors and business owners?", "Yes. His advisory work includes income property, multi-unit assets, commercial acquisitions, owner-occupied real estate, industrial sites, and development land."],
  ];

  return (
    <SiteChrome darkHeader>
      <main id="main-content">
        <InnerHero
          eyebrow="About Pavneet Singh"
          title={<>Meet <em>Pavneet Singh.</em></>}
          copy="Pavneet Singh represents investors, developers, business owners and families in Nova Scotia real estate through Sutton Group Professional Realty."
          image="/images/pavneet-studio-portrait.jpg"
          imageAlt="Pavneet Singh, Nova Scotia commercial real estate advisor"
          index="ABOUT / 01"
          variant="portrait"
        />

        <section className="about-story section-space">
          <div className="shell about-story-grid">
            <div className="about-story-heading reveal">
              <p className="eyebrow">Local market knowledge. Investment mindset.</p>
              <h2>Real estate. <em>Personal.</em></h2>
            </div>
            <div className="about-story-copy reveal reveal-delay">
              <p className="lead-copy">A practical approach to buying, selling and developing property across Nova Scotia.</p>
              <p>From family homes to commercial acquisitions, Pavneet brings local relationships and a perspective shaped by property, finance and construction.</p>

              <p className="property-disclosure">In addition to his brokerage practice, Pavneet has separate real estate development interests. Those activities are not real estate trading services offered through Sutton Group Professional Realty. NSREC consumer protections for brokerage trading, including regulatory oversight, Errors and Omissions Insurance and the Real Estate Recovery Fund, do not apply to those separate non-trading activities.</p>
            </div>
          </div>
        </section>

        <section className="community-story section-space">
          <div className="shell">
            <SectionIntro
              eyebrow="Community in action"
              title={<>Local relationships, <em>lived.</em></>}
              copy="Community service and showing up for people are part of the same long-term approach Pavneet brings to every client relationship."
            />
            <div className="community-collage">
              <figure className="reveal">
                <SiteImage src="/images/pavneet-community-in-action.jpg" alt="Pavneet Singh, Nova Scotia REALTOR®" />
                <figcaption><span>01</span>Community leadership</figcaption>
              </figure>
              <figure className="reveal reveal-delay">
                <SiteImage src="/images/pavneet-community.jpg" alt="Pavneet Singh supporting a local community initiative" />
                <figcaption><span>02</span>Showing up locally</figcaption>
              </figure>
              <figure className="community-portrait-card reveal reveal-delay-2">
                <div className="community-portrait-media"><SiteImage src="/images/pavneet-transparent-headshot.png" alt="Pavneet Singh" /></div>
                <figcaption><span>03</span>Serving all of Nova Scotia</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="credentials-section soft-section section-space">
          <div className="shell credentials-grid">
            <div className="reveal">
              <p className="eyebrow">Professional foundation</p>
              <h2>Advice backed by a wider <em>professional lens.</em></h2>
            </div>
            <div className="credential-list reveal reveal-delay">
              <div><span>Brokerage</span><strong>Sutton Group Professional Realty</strong></div>
              <div><span>Service area</span><strong>All of Nova Scotia</strong></div>
              <div><span>Client spectrum</span><strong>Families, newcomers, investors & entrepreneurs</strong></div>
            </div>
          </div>
        </section>

        <section className="faq-section section-space">
          <div className="shell faq-grid">
            <div className="reveal">
              <p className="eyebrow">Frequently asked</p>
              <h2>Good questions deserve <em>clear answers.</em></h2>
            </div>
            <div className="faq-list reveal reveal-delay">
              {faqs.map((faq, index) => (
                <details key={faq[0]} open={index === 0}>
                  <summary><span>0{index + 1}</span>{faq[0]}<i>+</i></summary>
                  <p>{faq[1]}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <PageCta title={<>Create opportunities for <em>generations.</em></>} />
      </main>
    </SiteChrome>
  );
}

function ServicesPage() {
  const detail = [
    {
      ...services[0],
      id: "residential",
      headline: "A home decision guided by the life around it.",
      points: ["Market analysis and valuation", "Neighbourhood and community insight", "Personalized shortlist", "Offer and negotiation strategy"],
      deliverables: ["Comparative market context", "Complete budget clarity", "Transaction roadmap"],
    },
    {
      ...services[1],
      id: "investment",
      headline: "Durable value, tested before emotion.",
      points: ["Income-producing property", "Multi-unit opportunities", "Rental and operating context", "Portfolio growth planning"],
      deliverables: ["Cash-flow lens", "Risk and return review", "Acquisition strategy"],
    },
    {
      ...services[2],
      id: "commercial",
      headline: "Real estate that supports the business objective.",
      points: ["Owner-occupied property", "Retail and office opportunities", "Mixed-use assets", "Location and use context"],
      deliverables: ["Lease-versus-own framing", "Location review", "Negotiation plan"],
    },
    {
      ...services[3],
      id: "land",
      headline: "Site decisions built around feasibility and growth.",
      points: ["Industrial property sourcing", "Strategic land acquisition", "Servicing and zoning context", "Development opportunity review"],
      deliverables: ["Comparative site context", "Feasibility questions", "Due-diligence coordination"],
    },
  ];

  return (
    <SiteChrome darkHeader>
      <main id="main-content">
        <InnerHero
          eyebrow="Real estate advisory in Nova Scotia"
          title={<>Strategy for every stage of your <em>journey.</em></>}
          copy="Analytical, personalized guidance across residential, investment, commercial, industrial, and development real estate."
          image="/images/halifax-aerial.jpg"
          index="ADVISORY / 02"
        />

        <section className="service-details section-space">
          <div className="shell">
            <SectionIntro
              eyebrow="Four advisory pillars"
              title={<>Make the opportunity fit the <em>objective.</em></>}
              copy="Local knowledge becomes valuable when it is applied to a clear understanding of your goals."
            />
            <div className="service-detail-list">
              {detail.map((item) => (
                <article className="service-detail reveal" id={item.id} key={item.id}>
                  <div className="service-detail-image"><SiteImage src={item.image} alt="" /><span>{item.number}</span></div>
                  <div className="service-detail-content">
                    <p className="eyebrow">{item.subtitle}</p>
                    <h3>{item.title}</h3>
                    <h4>{item.headline}</h4>
                    <p>{item.copy}</p>
                    <div className="detail-columns">
                      <div><span>Scope</span><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
                      <div><span>What you receive</span><ul>{item.deliverables.map((point) => <li key={point}>{point}</li>)}</ul></div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relocation-section dark-section section-space">
          <div className="shell relocation-grid">
            <div className="relocation-heading reveal">
              <p className="eyebrow light">Nova Scotia relocation concierge</p>
              <h2>Moving here? <em>Start here.</em></h2>
              <p>Guidance extends beyond property into the community, cost, timing, and practical decisions that shape a successful move.</p>
            </div>
            <div className="relocation-list">
              {[
                ["01", "Neighbourhood matching", "Compare commute, schools, lifestyle, services, and budget across urban, suburban, and rural communities."],
                ["02", "Financial orientation", "Understand the complete purchase budget, local taxes, ongoing costs, and the financing sequence."],
                ["03", "Remote purchase support", "Coordinate consultation, video tours, inspections, document flow, and the professionals involved from a distance."],
                ["04", "Settlement context", "Connect the property choice to transportation, schools, healthcare, services, and community resources."],
              ].map((item, index) => (
                <article className={`reveal reveal-delay-${(index % 3) + 1}`} key={item[0]}>
                  <span>{item[0]}</span><div><h3>{item[1]}</h3><p>{item[2]}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PageCta title={<>Bring the whole decision into <em>one conversation.</em></>} />
      </main>
    </SiteChrome>
  );
}

function PropertiesPage() {
  return <SiteChrome darkHeader><main id="main-content">
    <InnerHero eyebrow="Properties / Nova Scotia" title={<>Find property with a <em>clear brief.</em></>} copy="Tell Pavneet what you are looking for, or search current public inventory through REALTOR.ca while an approved on-site listing feed is being arranged." image="/images/halifax-aerial.jpg" index="PROPERTIES / 06" />
    <section className="advisory-simple shell"><p className="revamp-kicker">Current properties</p><h2>Start with the <em>right search.</em></h2><p>Browse active public listings on REALTOR.ca. For commercial, investment or development requirements, share your criteria so Pavneet can help define a more focused search.</p><div className="revamp-actions"><a className="revamp-button dark" href="https://www.realtor.ca/ns/real-estate" target="_blank" rel="noreferrer">Search current listings <ArrowUpRight /></a><Link className="revamp-button dark" href="/invest">Submit your criteria <ArrowUpRight /></Link></div></section>
    <PageCta title={<>Looking for a property with a <em>specific purpose?</em></>} copy="Share your budget, location, asset type and timeline with Pavneet to begin a tailored search." />
  </main></SiteChrome>;
}

function NeighbourhoodsPage() {
  return (
    <SiteChrome darkHeader>
      <main id="main-content">
        <InnerHero
          eyebrow="Nova Scotia neighbourhood guides"
          title={<>Find the community that fits your <em>life.</em></>}
          copy="Every community has its own character, strengths, pace, and property context. Start with what matters to you."
          image="/images/nova-scotia-coast.webp"
          index="PLACES / 04"
        />
        <section className="communities-section section-space">
          <div className="shell">
            <SectionIntro
              eyebrow="Community profiles"
              title={<>Eight places. Eight ways to feel <em>at home.</em></>}
              copy="Local context turns a property search into a decision about where to build your everyday life."
            />
            <div className="communities-grid">
              {communities.map((community, index) => (
                <article className={`community-card reveal reveal-delay-${(index % 3) + 1}`} key={community.name}>
                  <div className="community-card-image"><SiteImage src={community.image} alt={community.name} /><span>0{index + 1}</span></div>
                  <div className="community-card-copy">
                    <small>{community.type}</small><h3>{community.name}</h3><p>{community.description}</p>
                    <div>{community.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <PageCta title={<>Which community fits your <em>goals?</em></>} copy="Share your commute, lifestyle, school, investment, and budget priorities to receive tailored community guidance." />
      </main>
    </SiteChrome>
  );
}

function GuidesPage() {
  return (
    <SiteChrome darkHeader>
      <main id="main-content">
        <InnerHero
          eyebrow="Buyer & seller resources"
          title={<>Two journeys. One clear place to <em>begin.</em></>}
          copy="Practical Nova Scotia guidance for purchasing with confidence or positioning a property for its strongest outcome."
          image="/images/halifax-aerial.jpg"
          index="GUIDES / 05"
        />
        <section className="guide-choices section-space">
          <div className="shell">
            <SectionIntro eyebrow="Choose your path" title={<>Know what comes <em>next.</em></>} copy="Focused roadmaps that connect the key decisions before the process becomes emotional or urgent." />
            <div className="guide-choice-grid">
              <Link className="guide-choice reveal" href="/buying-guide">
                <SiteImage src="/images/halifax-aerial.jpg" alt="Halifax waterfront and neighbourhoods" /><div className="guide-choice-film" />
                <span className="guide-choice-kicker">01 / Buyer&apos;s Guide</span>
                <h3>Buying Guide</h3>
                <p>Plan your budget, pre-approval, search, offer, due diligence, and closing steps before the right home appears.</p>
                <span className="guide-choice-cta">Read the buying guide <ArrowUpRight /></span>
                <i aria-hidden="true"><ArrowUpRight /></i>
              </Link>
              <Link className="guide-choice reveal reveal-delay" href="/selling-guide">
                <SiteImage src="/images/nova-scotia-coast.webp" alt="Nova Scotia coastal community" /><div className="guide-choice-film" />
                <span className="guide-choice-kicker">02 / Seller&apos;s Guide</span>
                <h3>Selling Guide</h3>
                <p>Prepare, price, launch, negotiate, and close with a coordinated plan built to protect your leverage.</p>
                <span className="guide-choice-cta">Read the selling guide <ArrowUpRight /></span>
                <i aria-hidden="true"><ArrowUpRight /></i>
              </Link>
            </div>
          </div>
        </section>
        <section className="decision-notes soft-section section-space">
          <div className="shell">
            <SectionIntro eyebrow="Decision notes" title={<>Questions worth answering <em>early.</em></>} />
            <div className="decision-grid">
              {[
                ["Buying", "What should happen before the first showing?", "Align goals, comfortable budget, financing, timing, and the true non-negotiables."],
                ["Selling", "Which preparation protects your leverage?", "Make presentation, pricing, timing, and launch strategy work together."],
                ["Investing", "Does this opportunity fit the objective?", "Test income, risk, location, operations, and long-term portfolio fit."],
                ["Relocating", "Which community supports the whole move?", "Connect the home search to commute, services, schools, and everyday life."],
              ].map((item, index) => (
                <article className={`reveal reveal-delay-${(index % 3) + 1}`} key={item[0]}>
                  <span>0{index + 1} / {item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <PageCta title={<>Turn information into a <em>clear plan.</em></>} />
      </main>
    </SiteChrome>
  );
}

function BlogPage() {
  const featured = blogPosts[0];
  const remaining = blogPosts.slice(1);

  return (
    <SiteChrome darkHeader>
      <main id="main-content">
        <InnerHero
          eyebrow="Nova Scotia real estate blog"
          title={<>Insights for clearer <em>decisions.</em></>}
          copy="Buyer, seller, relocation, and investment guidance for people planning a real estate move across Nova Scotia."
          image="/images/halifax-aerial.jpg"
          index="BLOG / 08"
        />

        <section className="blog-index-section section-space">
          <div className="shell">
            <SectionIntro
              eyebrow="Latest insights"
              title={<>Practical reading before the <em>next step.</em></>}
              copy="Short, structured notes built around the decisions clients ask about most often."
            />
            <Link className="blog-featured-card reveal" href={`/blog/${featured.slug}`} data-cursor-label="Read">
              <div className="blog-featured-image">
                <SiteImage src={featured.image} alt="" />
                <span>{featured.category}</span>
              </div>
              <div className="blog-featured-copy">
                <p className="eyebrow">{featured.date} / {featured.readTime}</p>
                <h3>{featured.title}</h3>
                <p>{featured.excerpt}</p>
                <strong className="card-action">Read featured insight <ArrowUpRight /></strong>
              </div>
            </Link>
            <div className="blog-card-grid">
              {remaining.map((post, index) => (
                <Link
                  className={`blog-card reveal reveal-delay-${index + 1}`}
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  data-cursor-label="Read"
                >
                  <SiteImage src={post.image} alt="" />
                  <div>
                    <span>{post.category} / {post.readTime}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <strong className="card-action">Read insight <ArrowUpRight /></strong>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="decision-notes soft-section section-space">
          <div className="shell">
            <SectionIntro eyebrow="Topic tracks" title={<>Built around the questions that <em>repeat.</em></>} />
            <div className="decision-grid">
              {[
                ["Buyers", "What should be clear before the first showing?", "Budget, financing, non-negotiables, community fit, offer conditions, and closing costs."],
                ["Sellers", "What should be ready before the listing goes live?", "Preparation, pricing evidence, launch timing, showing plan, and negotiation priorities."],
                ["Relocation", "Which community supports the whole move?", "Commute, services, schools, lifestyle, property type, and future flexibility."],
                ["Investment", "Does the property fit the objective?", "Cash flow, condition, operations, risk, location, and long-term portfolio value."],
              ].map((item, index) => (
                <article className={`reveal reveal-delay-${(index % 3) + 1}`} key={item[0]}>
                  <span>0{index + 1} / {item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PageCta title={<>Need context for a decision you are making <em>now?</em></>} />
      </main>
    </SiteChrome>
  );
}

function StepGuide({ type }: { type: "buy" | "sell" }) {
  const buying = type === "buy";
  const steps = buying ? buyerSteps : sellerSteps;
  return (
    <SiteChrome darkHeader>
      <main id="main-content">
        <InnerHero
          eyebrow={buying ? "Nova Scotia home buying guide" : "Nova Scotia home selling guide"}
          title={buying ? <>A clearer path to <em>homeownership.</em></> : <>Position your home for its <em>best outcome.</em></>}
          copy={buying ? "From first priorities to closing day, understand the steps that turn a home search into a confident purchase." : "A considered strategy across preparation, pricing, marketing, negotiation, and closing, designed around your goals."}
          image={buying ? "/images/halifax-aerial.jpg" : "/images/nova-scotia-coast.webp"}
          index={buying ? "BUY / 06" : "SELL / 07"}
        />
        <section className="step-guide section-space">
          <div className="shell step-guide-layout">
            <div className="step-guide-intro reveal">
              <p className="eyebrow">The complete roadmap</p>
              <h2>{buying ? <>From brief to <em>keys.</em></> : <>From plan to <em>sold.</em></>}</h2>
              <p>{buying ? "Keep financing, fit, local context, negotiation, and due diligence connected from the beginning." : "Protect your leverage by connecting preparation, position, exposure, offer analysis, and closing."}</p>
              <Link className="primary-button ink-button" href="/contact">Build my plan <ArrowUpRight /></Link>
            </div>
            <div className="guide-steps">
              {steps.map((step, index) => (
                <article className={`reveal reveal-delay-${(index % 3) + 1}`} key={step[0]}>
                  <span>Step {step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p><i aria-hidden="true">↘</i>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="guide-checklist dark-section section-space">
          <div className="shell guide-checklist-grid">
            <div className="reveal">
              <p className="eyebrow light">Plan for the complete decision</p>
              <h2>{buying ? <>What belongs in the <em>budget?</em></> : <>What shapes the <em>outcome?</em></>}</h2>
            </div>
            <div className="checklist-grid">
              {(buying ? [
                ["Purchase funds", "Down payment, deposit, legal work, inspection, tax adjustments, and moving."],
                ["Ownership costs", "Mortgage, property tax, insurance, utilities, maintenance, and potential upgrades."],
                ["Property context", "Condition, neighbourhood value, commute, services, resale, and future fit."],
                ["Due diligence", "Inspection, disclosure, financing, title, documents, and professional advice."],
              ] : [
                ["Market position", "Comparable sales, active competition, property condition, timing, and demand."],
                ["Presentation", "Repairs, decluttering, staging, photography, and a clear first impression."],
                ["Offer quality", "Price, deposit, financing confidence, conditions, timing, and buyer strength."],
                ["Net result", "Selling costs, legal work, mortgage obligations, adjustments, and the next move."],
              ]).map((item, index) => (
                <article className={`reveal reveal-delay-${(index % 3) + 1}`} key={item[0]}>
                  <span>0{index + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <PageCta title={buying ? <>Start the search with a <em>stronger brief.</em></> : <>Plan the sale before the listing goes <em>live.</em></>} />
      </main>
    </SiteChrome>
  );
}

export function BlogArticlePage({ post }: { post: BlogPost }) {
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <SiteChrome darkHeader>
      <main id="main-content">
        <InnerHero
          eyebrow={`${post.category} insight`}
          title={post.title}
          copy={post.excerpt}
          image={post.image}
          index="BLOG / READ"
        />

        <section className="blog-article-section section-space">
          <div className="shell blog-article-layout">
            <aside className="blog-article-meta reveal">
              <p className="eyebrow">Article details</p>
              <div><span>Category</span><strong>{post.category}</strong></div>
              <div><span>Published</span><strong>{post.date}</strong></div>
              <div><span>Reading time</span><strong>{post.readTime}</strong></div>
              <Link className="line-link" href="/blog">Back to insights <ArrowUpRight /></Link>
            </aside>
            <article className="blog-article-copy reveal reveal-delay">
              <div className="article-takeaways">
                <span>Key takeaways</span>
                <ul>
                  {post.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
                </ul>
              </div>
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </section>
              ))}
              <div className="article-disclaimer">
                <span>Note</span>
                <p>This article is general real estate education. Details should be confirmed against current market information, legal documents, financing advice, and property-specific due diligence.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="related-insights soft-section section-space">
          <div className="shell">
            <SectionIntro eyebrow="Keep reading" title={<>More guidance for the <em>next step.</em></>} />
            <div className="blog-card-grid">
              {related.map((item, index) => (
                <Link
                  className={`blog-card reveal reveal-delay-${index + 1}`}
                  href={`/blog/${item.slug}`}
                  key={item.slug}
                  data-cursor-label="Read"
                >
                  <SiteImage src={item.image} alt="" />
                  <div>
                    <span>{item.category} / {item.readTime}</span>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <strong className="card-action">Read insight <ArrowUpRight /></strong>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageCta title={<>Turn reading into a <em>practical plan.</em></>} />
      </main>
    </SiteChrome>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  const consultationGoals = [
    "Buying a home",
    "Selling a property",
    "Residential investment",
    "Commercial or industrial",
    "Land or development",
    "Relocating to Nova Scotia",
  ];

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const interest = String(data.get("interest") || "Real estate enquiry");
    const timeline = String(data.get("timeline") || "Not specified");
    const contactMethod = String(data.get("contactMethod") || "No preference");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`${interest}: ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\nTimeline: ${timeline}\nPreferred contact: ${contactMethod}\n\n${message}`);
    setSent(true);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <SiteChrome darkHeader>
      <main id="main-content">
        <section className="contact-hero dark-section">
          <div className="contact-orbits" aria-hidden="true"><i /><i /><i /></div>
          <div className="shell contact-hero-grid">
            <div className="contact-hero-copy">
              <p className="eyebrow light hero-enter delay-1">A private real estate conversation</p>
              <h1 className="hero-enter delay-2">Let&apos;s plan your <em>next move.</em></h1>
              <p className="hero-enter delay-3">Share what you are considering. Pavneet will review the details personally and respond with a practical next step.</p>
              <div className="contact-promises hero-enter delay-3" aria-label="Consultation benefits">
                <span><i />Confidential</span>
                <span><i />No pressure</span>
                <span><i />Clear next steps</span>
              </div>
              <div className="contact-direct hero-enter delay-4">
                <div><span>Direct line</span><a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a></div>
                <div><span>Professional email</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
                <div><span>Office</span><address>{site.office}</address></div>
              </div>
            </div>
            <form className="contact-form hero-enter delay-3" onSubmit={submit}>
              <div className="consultation-form-head">
                <div>
                  <span>Private consultation</span>
                  <h2>Tell Pavneet what comes next.</h2>
                </div>
                <p><i />A direct conversation with Pavneet</p>
              </div>
              <div className="consultation-form-body">
                <div className="consultation-section-title"><span>01</span><p>Your details</p></div>
                <div className="consultation-fields">
                  <label className="consultation-field"><span>Your name *</span><input name="name" required autoComplete="name" placeholder="Full name" /></label>
                  <label className="consultation-field"><span>Email address *</span><input name="email" type="email" required autoComplete="email" placeholder="name@example.com" /></label>
                  <label className="consultation-field"><span>Phone number</span><input name="phone" type="tel" autoComplete="tel" placeholder="Your best contact number" /></label>
                  <label className="consultation-field"><span>Preferred contact</span><select name="contactMethod" defaultValue="Phone call"><option>Phone call</option><option>Email</option><option>WhatsApp</option><option>No preference</option></select></label>
                </div>

                <fieldset className="consultation-goals">
                  <legend><span>02</span>What are you planning? *</legend>
                  <div>
                    {consultationGoals.map((goal, index) => (
                      <label className="consultation-choice" key={goal}>
                        <input type="radio" name="interest" value={goal} defaultChecked={index === 0} required />
                        <span>{goal}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="consultation-section-title"><span>03</span><p>Your timing and priorities</p></div>
                <div className="consultation-fields consultation-fields-final">
                  <label className="consultation-field">
                    <span>Ideal timeline</span>
                    <select name="timeline" defaultValue="Within 3 months">
                      <option>As soon as possible</option>
                      <option>Within 3 months</option>
                      <option>Within 3 to 6 months</option>
                      <option>Within 6 to 12 months</option>
                      <option>Just exploring</option>
                    </select>
                  </label>
                  <label className="consultation-field consultation-message">
                    <span>What would you like help with? *</span>
                    <textarea name="message" rows={5} required placeholder="Tell Pavneet about your goals, preferred area, budget, property, or the decision you are working through." />
                  </label>
                </div>

                <label className="consultation-consent">
                  <input type="checkbox" required />
                  <span>I agree to be contacted about this enquiry. My details will be used only to respond to my request.</span>
                </label>

                <button className="primary-button consultation-submit" type="submit">Prepare private enquiry <ArrowUpRight /></button>
                <p className="form-note" aria-live="polite">{sent ? "Review the prepared message in your email app and send it to complete your enquiry." : "This opens your email app with your enquiry prepared. Nothing is sent until you send the message."}</p>
              </div>
            </form>
          </div>
        </section>
        <section className="contact-process section-space">
          <div className="shell">
            <SectionIntro eyebrow="Turning opportunities into results" title={<>A plan designed around your <em>goals.</em></>} />
            <div className="contact-process-grid">
              {[
                ["01", "Discover", "Clarify your goal, timing, preferred areas, risk tolerance, and long-term priorities."],
                ["02", "Strategize", "Turn market context, financial thinking, and local knowledge into a tailored plan."],
                ["03", "Execute", "Coordinate viewings, negotiations, due diligence, legal work, and closing with purpose."],
              ].map((item, index) => <article className={`reveal reveal-delay-${index + 1}`} key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}
            </div>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}

function LegalPage({ type }: { type: "privacy" | "terms" }) {
  const privacy = type === "privacy";
  return (
    <SiteChrome darkHeader>
      <main id="main-content">
        <InnerHero
          eyebrow="Website information"
          title={privacy ? <>Privacy <em>policy.</em></> : <>Terms of <em>use.</em></>}
          copy={privacy ? "How information shared through this website is handled." : "Important information governing use of this real estate website."}
          image="/images/halifax-aerial.jpg"
          index={privacy ? "LEGAL / P" : "LEGAL / T"}
          align="center"
        />
        <section className="legal-section section-space">
          <article className="legal-copy reveal">
            <p className="legal-updated">Last updated: September 30, 2026</p>
            {privacy ? (
              <>
                <h2>Information you choose to share</h2>
                <p>This website may collect information you voluntarily provide when contacting Pavneet, such as your name, email address, phone number, real estate interests, and message. The contact form prepares an email in your own email application; the website does not maintain an independent contact database.</p>
                <h2>How information is used</h2>
                <p>Information you send may be used to respond to your enquiry, understand your real estate needs, provide requested guidance, coordinate a consultation, and maintain professional correspondence.</p>
                <h2>Third-party services</h2>
                <p>Links to phone, email, WhatsApp, social media, brokerage, mapping, or property-information services are governed by the privacy practices of those providers. Review their policies before sharing personal information.</p>
                <h2>Your choices</h2>
                <p>You may contact Pavneet directly to ask about personal information you have shared, request a correction, or ask that non-required correspondence be deleted, subject to professional and legal record-keeping obligations.</p>
              </>
            ) : (
              <>
                <h2>General information only</h2>
                <p>Content on this website is provided for general information and initial real estate education. It is not legal, tax, accounting, engineering, inspection, lending, immigration, or other specialized professional advice.</p>
                <h2>Property and market information</h2>
                <p>Property references, prices, measurements, availability, neighbourhood information, and market observations may change or contain information supplied by third parties. All material facts must be independently verified before making a decision.</p>
                <h2>No representation agreement</h2>
                <p>Using this website, sending an enquiry, or reviewing information does not by itself create an agency, representation, fiduciary, or brokerage relationship. Any formal relationship must be documented as required by applicable law and professional standards.</p>
                <h2>Trademarks</h2>
                <p>REALTOR®, MLS®, Multiple Listing Service® and associated marks are owned or controlled by the Canadian Real Estate Association and are used to identify professionals and services meeting CREA standards.</p>
              </>
            )}
            <h2>Contact</h2>
            <p>Questions may be directed to <a href={`mailto:${site.email}`}>{site.email}</a> or <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>.</p>
          </article>
        </section>
      </main>
    </SiteChrome>
  );
}

export default function ContentPage({ slug }: { slug: string }) {
  switch (slug) {
    case "invest": return <AdvisoryPage kind="invest" />;
    case "submit-opportunity": return <AdvisoryPage kind="submit" />;
    case "commercial-real-estate": return <AdvisoryPage kind="commercial" />;
    case "transactions": return <AdvisoryPage kind="transactions" />;
    case "media": return <AdvisoryPage kind="media" />;
    case "opportunities": return <PropertiesPage />;
    case "investors": return <AdvisoryPage kind="invest" />;
    case "owners": return <AdvisoryPage kind="submit" />;
    case "commercial": return <AdvisoryPage kind="commercial" />;
    case "industrial": return <AssetPage type="industrial" />;
    case "multifamily": return <AssetPage type="multifamily" />;
    case "development-land": return <AssetPage type="development-land" />;
    case "development": return <AssetPage type="development" />;
    case "residential": return <AssetPage type="residential" />;
    case "track-record": return <AdvisoryPage kind="transactions" />;
    case "intelligence": return <IntelligencePage />;
    case "about": return <AboutPage />;
    case "services": return <ServicesPage />;
    case "properties": return <PropertiesPage />;
    case "neighbourhoods": return <NeighbourhoodsPage />;
    case "guides": return <GuidesPage />;
    case "blog": return <BlogPage />;
    case "buying-guide": return <StepGuide type="buy" />;
    case "selling-guide": return <StepGuide type="sell" />;
    case "contact": return <ContactPage />;
    case "privacy-policy": return <LegalPage type="privacy" />;
    case "terms": return <LegalPage type="terms" />;
    default: return null;
  }
}
