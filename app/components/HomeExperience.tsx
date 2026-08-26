"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  assetClasses,
  blogPosts,
  intelligenceTopics,
  marketSnapshot,
  opportunities,
  site,
  trackRecord,
} from "../data";
import { ArrowUpRight, SiteChrome } from "./SiteChrome";

const valuePillars = [
  ["Source", "Identify public and select off-market opportunities aligned with investor, owner and developer criteria."],
  ["Analyze", "Review market position, income characteristics, site context and development potential before momentum builds."],
  ["Negotiate", "Structure acquisitions and dispositions with the commercial objective, confidentiality and timeline in mind."],
  ["Execute", "Coordinate transaction requirements and appropriate professional advisors through due diligence and closing."],
] as const;

const investorTypes = [
  "Private investors",
  "Family offices",
  "Developers",
  "Business owners",
  "Corporations",
  "International investors",
] as const;

function AnimatedNumber({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [value, setValue] = useState(end);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (reduced) {
          setValue(end);
          return;
        }
        setValue(0);
        const started = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - started) / 1300, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(end * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.7 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [end]);

  return <strong ref={ref}>{value}{suffix}</strong>;
}

export default function HomeExperience() {
  return (
    <SiteChrome darkHeader>
      <main>
        <section className="home-hero investment-hero" aria-labelledby="hero-title">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/halifax-aerial.jpg"
            aria-hidden="true"
          >
            <source src="/videos/halifax-drone-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-film" aria-hidden="true" />
          <div className="hero-grain" aria-hidden="true" />

          <div className="hero-side-note" aria-hidden="true">
            <span>44.6488° N</span><i /><span>63.5752° W</span>
          </div>

          <div className="home-hero-content shell">
            <div className="hero-kicker hero-enter delay-1">
              <i /> Pavneet Singh <span /> Commercial Real Estate & Investment Advisory
            </div>
            <h1 id="hero-title" className="hero-enter delay-2">
              <span className="hero-line"><span>Capital.</span></span>
              <span className="hero-line hero-line-offset"><span>Real estate.</span></span>
              <span className="hero-line"><span><em>Opportunity.</em></span></span>
            </h1>
            <div className="hero-lower hero-enter delay-3">
              <p>
                Connecting investors, developers, property owners and businesses with strategic commercial real estate opportunities across Nova Scotia.
              </p>
              <div className="hero-actions">
                <Link className="primary-button light-button" href="/opportunities" data-magnetic>
                  Explore opportunities <ArrowUpRight />
                </Link>
                <Link className="hero-call hero-link-card" href="/investors">
                  <span>Deploy capital</span>Submit investment criteria
                </Link>
                <Link className="hero-call hero-link-card" href="/owners">
                  <span>Selling an asset?</span>Request confidential review
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-brand-signature hero-enter delay-4" aria-label="Pavneet Singh, Sutton Group Professional Realty">
            <span>PAVNEET SINGH</span>
            <small>Sutton Group Professional Realty</small>
          </div>

          <div className="hero-stats hero-enter delay-4" aria-label="Pavneet Singh commercial advisory at a glance">
            <div className="hero-stats-topline">
              <span>Authority at a glance</span>
              <a href="#asset-classes">Explore asset classes <b aria-hidden="true">↓</b></a>
            </div>
            <div className="hero-stats-grid">
              <div className="hero-stat">
                <small>01</small>
                <AnimatedNumber end={330} suffix="+" />
                <span>Acres acquired</span>
              </div>
              <div className="hero-stat">
                <small>02</small>
                <AnimatedNumber end={100} suffix="+" />
                <span>Units dealt with</span>
              </div>
              <div className="hero-stat">
                <small>03</small>
                <strong>All NS</strong>
                <span>Province-wide coverage</span>
              </div>
            </div>
          </div>
        </section>

        <div className="motion-ribbon" aria-hidden="true">
          <div className="motion-ribbon-track">
            {[0, 1].map((copy) => (
              <div className="motion-ribbon-group" key={copy}>
                <span>Multifamily</span><i>*</i><span>Development land</span><i>*</i>
                <span>Industrial</span><i>*</i><span>Commercial</span><i>*</i>
                <span>Self storage</span><i>*</i><span>Off-market assets</span><i>*</i>
                <span>Portfolio acquisitions</span><i>*</i><span>Residential</span><i>*</i>
              </div>
            ))}
          </div>
        </div>

        <section className="asset-entry-section section-space" id="asset-classes">
          <div className="shell section-heading reveal">
            <div>
              <p className="eyebrow">Asset-class navigation</p>
              <h2>Choose the opportunity type that fits the <em>mandate.</em></h2>
            </div>
            <p>
              The site now routes visitors by revenue-producing intent: acquire, sell, develop, lease, invest or review residential options.
            </p>
          </div>
          <div className="shell asset-class-grid">
            {assetClasses.map((asset, index) => (
              <Link
                className={`asset-class-card reveal reveal-delay-${(index % 3) + 1}`}
                href={asset.href}
                key={asset.title}
                data-cursor-label="Explore"
              >
                <img src={asset.image} alt="" />
                <div className="asset-class-film" />
                <span>{asset.number}</span>
                <div>
                  <small>{asset.subtitle}</small>
                  <h3>{asset.title}</h3>
                  <p>{asset.copy}</p>
                  <strong className="card-action card-action-dark">Explore {asset.title}<ArrowUpRight /></strong>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="what-we-do-section dark-section section-space">
          <div className="shell advisory-layout">
            <div className="reveal">
              <p className="eyebrow light">What we do</p>
              <h2>Real estate opportunities are not always listed. <em>Sometimes they have to be found.</em></h2>
            </div>
            <div className="advisory-copy reveal reveal-delay">
              <p>
                Pavneet Singh provides commercial real estate and investment advisory services for investors, developers, businesses and property owners across Nova Scotia.
              </p>
              <p>
                The focus extends beyond public inventory to strategic acquisitions, development opportunities, commercial assets, land, select off-market transactions and qualified buyer matching.
              </p>
            </div>
          </div>
          <div className="shell value-pillar-grid">
            {valuePillars.map((item, index) => (
              <article className={`reveal reveal-delay-${index + 1}`} key={item[0]}>
                <span>0{index + 1}</span>
                <h3>{item[0]}</h3>
                <p>{item[1]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="featured-opportunities section-space soft-section">
          <div className="shell section-heading reveal">
            <div>
              <p className="eyebrow">Private & public opportunities</p>
              <h2>Current opportunities built for <em>qualified action.</em></h2>
            </div>
            <Link className="line-link" href="/opportunities">View all opportunities <ArrowUpRight /></Link>
          </div>
          <div className="shell opportunity-feature-list">
            {opportunities.slice(0, 4).map((opportunity, index) => (
              <Link
                className={`opportunity-feature-card reveal reveal-delay-${(index % 3) + 1}`}
                href={`/opportunities/${opportunity.slug}`}
                key={opportunity.slug}
                data-cursor-label="Request"
              >
                <div className="opportunity-feature-image">
                  <img src={opportunity.image} alt="" />
                  <span>{opportunity.assetClass}</span>
                </div>
                <div className="opportunity-feature-copy">
                  <p className="eyebrow">{opportunity.transaction}</p>
                  <h3>{opportunity.title}</h3>
                  <div className="opportunity-metrics">
                    <span>{opportunity.location}</span>
                    <span>{opportunity.scale}</span>
                    <span>{opportunity.price}</span>
                    <span>{opportunity.status}</span>
                  </div>
                  <p>{opportunity.summary}</p>
                  <strong className="card-action">Request information <ArrowUpRight /></strong>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="investor-network-band dark-section section-space">
          <div className="shell investor-network-grid">
            <div className="reveal">
              <p className="eyebrow light">Private investor network</p>
              <h2>Some of the best opportunities never reach the <em>open market.</em></h2>
            </div>
            <div className="reveal reveal-delay">
              <p>
                Join Pavneet Singh&apos;s private real estate network and submit the acquisition criteria that matter: capital range, asset class, geography, strategy and timeline.
              </p>
              <div className="investor-type-row">
                {investorTypes.map((type) => <span key={type}>{type}</span>)}
              </div>
              <Link className="primary-button light-button" href="/investors" data-magnetic>Join private investor network <ArrowUpRight /></Link>
            </div>
          </div>
        </section>

        <section className="track-record-preview section-space">
          <div className="shell section-heading reveal">
            <div>
              <p className="eyebrow">Transaction experience</p>
              <h2>Evidence should look like <em>transactions.</em></h2>
            </div>
            <Link className="line-link" href="/track-record">Explore track record <ArrowUpRight /></Link>
          </div>
          <div className="shell track-record-grid">
            {trackRecord.slice(0, 4).map((item, index) => (
              <Link className={`track-card reveal reveal-delay-${(index % 3) + 1}`} href="/track-record" key={item.title}>
                <img src={item.image} alt="" />
                <div>
                  <strong>{item.metric}<small>{item.unit}</small></strong>
                  <span>{item.asset} / {item.location}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="owner-funnel-section section-space soft-section">
          <div className="shell owner-funnel-grid">
            <div className="reveal">
              <p className="eyebrow">For owners & developers</p>
              <h2>Own a commercial property? <em>There may already be a buyer looking for it.</em></h2>
            </div>
            <div className="reveal reveal-delay">
              <p>
                Confidential disposition advisory for multifamily, commercial, industrial, development land, businesses with real estate and select residential income assets throughout Nova Scotia.
              </p>
              <Link className="primary-button ink-button" href="/owners" data-magnetic>Request confidential asset review <ArrowUpRight /></Link>
            </div>
          </div>
        </section>

        <section className="market-snapshot-section section-space dark-section" id="market-stats">
          <div className="shell market-snapshot-layout">
            <div className="market-snapshot-copy reveal">
              <p className="eyebrow light">Weekly market stats</p>
              <h2>{marketSnapshot.title}: <em>{marketSnapshot.period}</em></h2>
              <p>{marketSnapshot.summary}</p>
              <div className="market-source-row">
                <span>{marketSnapshot.region}</span>
                <a href={marketSnapshot.sourceHref} target="_blank" rel="noreferrer">
                  {marketSnapshot.sourceLabel} <ArrowUpRight />
                </a>
              </div>
            </div>

            <div className="market-snapshot-panel reveal reveal-delay">
              <div className="market-snapshot-panel-header">
                <span>{marketSnapshot.period}</span>
                <strong>Halifax pulse</strong>
              </div>
              <div className="market-metric-grid">
                {marketSnapshot.metrics.map((metric) => (
                  <article key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                    <p>{metric.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="shell market-snapshot-bottom reveal">
            <div>
              <span>Compared with the week before</span>
              {marketSnapshot.weekComparison.map((item) => <p key={item}>{item}</p>)}
            </div>
            <p>{marketSnapshot.takeaway}</p>
            <Link className="primary-button light-button" href="/contact" data-magnetic>
              Request a street-level breakdown <ArrowUpRight />
            </Link>
          </div>
        </section>

        <section className="intelligence-preview section-space">
          <div className="shell section-heading reveal">
            <div>
              <p className="eyebrow">Nova Scotia intelligence</p>
              <h2>Market authority should create <em>qualified conversations.</em></h2>
            </div>
            <Link className="line-link" href="/intelligence">View intelligence <ArrowUpRight /></Link>
          </div>
          <div className="shell intelligence-grid">
            {intelligenceTopics.map((topic, index) => (
              <article className={`reveal reveal-delay-${(index % 3) + 1}`} key={topic}>
                <span>0{index + 1}</span>
                <h3>{topic}</h3>
                <p>Investor-focused reporting designed to support acquisition criteria, seller positioning and market confidence.</p>
              </article>
            ))}
          </div>
          <div className="shell insight-grid intelligence-article-row">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Link
                className={`insight-card reveal reveal-delay-${index + 1}`}
                href={`/blog/${post.slug}`}
                key={post.slug}
                data-cursor-label="Read"
              >
                <div className="insight-card-image">
                  <img src={post.image} alt="" />
                  <span>{post.category}</span>
                </div>
                <div className="insight-card-copy">
                  <div><span>{post.date}</span><span>{post.readTime}</span></div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <strong className="card-action">Read intelligence <ArrowUpRight /></strong>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="profile-section section-space dark-section">
          <div className="shell profile-layout">
            <div className="profile-visual reveal">
              <div className="profile-photo-frame">
                <img src="/images/pavneet-transparent-headshot.png" alt="Pavneet Singh, Nova Scotia commercial real estate advisor" />
                <span className="profile-seal"><b>PS</b><small>Commercial advisory</small></span>
              </div>
              <div className="profile-caption">
                <span>Pavneet Singh</span>
                <span>Sutton Group Professional Realty</span>
              </div>
            </div>
            <div className="profile-content reveal reveal-delay">
              <p className="eyebrow light">Commercial real estate. Investment. Development.</p>
              <h2>Local market knowledge with an <em>investment mindset.</em></h2>
              <p className="profile-lead">
                Pavneet works with investors, developers, business owners and property owners across Nova Scotia on commercial acquisitions, dispositions, development land and investment real estate.
              </p>
              <div className="profile-facts">
                <div><strong>Finance</strong><span>Cash-flow, budget and transaction context</span></div>
                <div><strong>Construction</strong><span>A practical eye on condition and feasibility</span></div>
                <div><strong>Network</strong><span>Investor, owner and local market relationships</span></div>
              </div>
              <div className="language-line" aria-label="Six languages spoken">
                <strong>6 languages</strong>
                <div><span>English</span><span>Punjabi</span><span>Hindi</span><span>Urdu</span><span>Gujarati</span><span>Spanish</span></div>
              </div>
              <Link className="primary-button light-button" href="/about" data-magnetic>Meet Pavneet <ArrowUpRight /></Link>
            </div>
          </div>
        </section>

        <section className="final-pathways section-space">
          <div className="shell section-heading reveal">
            <div>
              <p className="eyebrow">Let&apos;s discuss the opportunity</p>
              <h2>Every visitor should have a <em>clear path.</em></h2>
            </div>
          </div>
          <div className="shell pathway-grid">
            {[
              ["I want to acquire", "Submit your capital range, target asset classes, markets and acquisition timeline.", "/investors", "Submit investment criteria"],
              ["I want to sell", "Request a confidential review for a commercial, multifamily, industrial, land or income asset.", "/owners", "Request asset review"],
              ["I have a requirement", "Tell Pavneet what you need to buy, lease, invest in or develop across Nova Scotia.", "/contact", "Discuss requirement"],
            ].map((path, index) => (
              <Link className={`pathway-card reveal reveal-delay-${index + 1}`} href={path[2]} key={path[0]}>
                <span>0{index + 1}</span>
                <h3>{path[0]}</h3>
                <p>{path[1]}</p>
                <strong className="card-action">{path[3]} <ArrowUpRight /></strong>
              </Link>
            ))}
          </div>
          <div className="shell final-contact-strip reveal">
            <a href={`tel:${site.phoneHref}`}>Call {site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}>Email Pavneet</a>
            <a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            <Link href="/contact">Book / request a call</Link>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
