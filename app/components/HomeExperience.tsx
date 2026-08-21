"use client";

import { useEffect, useRef, useState } from "react";
import { journeys, properties, services, site } from "../data";
import { ArrowUpRight, SiteChrome } from "./SiteChrome";

const testimonials = [
  {
    quote:
      "Pavneet made a complicated move feel manageable. The advice was direct, patient, and always centred on what was right for our family.",
    person: "Newcomer family",
    context: "Relocation to Bedford",
  },
  {
    quote:
      "Every cost, condition, and next step was explained before we had to make a decision. That clarity changed the entire first-home experience.",
    person: "First-time buyer",
    context: "Halifax Regional Municipality",
  },
  {
    quote:
      "The numbers and the building were evaluated together. We moved forward with confidence because the strategy was grounded in real operating reality.",
    person: "Property investor",
    context: "Multi-unit acquisition",
  },
];

function AnimatedNumber({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [value, setValue] = useState(0);
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

function JourneySwitcher() {
  const [active, setActive] = useState(0);
  const journey = journeys[active];

  return (
    <div className="journey-stage reveal">
      <div className="journey-image-wrap">
        {journeys.map((item, index) => (
          <img
            key={item.id}
            className={index === active ? "is-active" : ""}
            src={item.image}
            alt=""
          />
        ))}
        <div className="journey-image-label">
          <span>{journey.number}</span>
          <small>{journey.eyebrow}</small>
        </div>
      </div>
      <div className="journey-content">
        <div className="journey-tabs" role="tablist" aria-label="Choose your real estate goal">
          {journeys.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === active}
              className={index === active ? "is-active" : ""}
              onClick={() => setActive(index)}
            >
              <span>{item.number}</span>{item.short}
            </button>
          ))}
        </div>
        <div className="journey-copy" key={journey.id}>
          <p className="eyebrow">{journey.eyebrow}</p>
          <h3>{journey.title}</h3>
          <p>{journey.copy}</p>
          <ul>
            {journey.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
          <a className="line-link" href={journey.href}>{journey.cta}<ArrowUpRight /></a>
        </div>
      </div>
    </div>
  );
}

function TestimonialStage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % testimonials.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[active];

  return (
    <div className="testimonial-stage reveal">
      <div className="testimonial-quote-mark" aria-hidden="true">“</div>
      <blockquote key={active}>{testimonial.quote}</blockquote>
      <div className="testimonial-bottom">
        <div>
          <strong>{testimonial.person}</strong>
          <span>{testimonial.context}</span>
        </div>
        <div className="testimonial-controls" aria-label="Testimonial controls">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
          >←</button>
          <span>0{active + 1} / 0{testimonials.length}</span>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setActive((active + 1) % testimonials.length)}
          >→</button>
        </div>
      </div>
    </div>
  );
}

export default function HomeExperience() {
  return (
    <SiteChrome darkHeader>
      <main>
        <section className="home-hero" aria-labelledby="hero-title">
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
              <i /> Pavneet Singh <span /> Private real estate advisory
            </div>
            <h1 id="hero-title" className="hero-enter delay-2">
              <span className="hero-line"><span>Your next move,</span></span>
              <span className="hero-line hero-line-offset"><span>made with <em>clarity.</em></span></span>
            </h1>
            <div className="hero-lower hero-enter delay-3">
              <p>
                Buy, sell or invest across Nova Scotia with direct advice, local context and one trusted point of contact from first conversation to closing.
              </p>
              <div className="hero-actions">
                <a className="primary-button light-button" href="/contact" data-magnetic>
                  Request a private consultation <ArrowUpRight />
                </a>
                <a className="hero-call" href={`tel:${site.phoneHref}`}>
                  <span>Direct line</span>{site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="hero-brand-signature hero-enter delay-4" aria-label="Pavneet Singh, Sutton Group Professional Realty">
            <span>PAVNEET SINGH</span>
            <small>Sutton Group Professional Realty</small>
          </div>

          <div className="hero-stats hero-enter delay-4" aria-label="Pavneet Singh at a glance">
            <div className="hero-stats-topline">
              <span>Experience at a glance</span>
              <a href="#introduction">Explore the story <b aria-hidden="true">↓</b></a>
            </div>
            <div className="hero-stats-grid">
              <div className="hero-stat">
                <small>01</small>
                <AnimatedNumber end={100} suffix="+" />
                <span>Units represented</span>
              </div>
              <div className="hero-stat">
                <small>02</small>
                <strong>All NS</strong>
                <span>Province-wide guidance</span>
              </div>
              <div className="hero-stat">
                <small>03</small>
                <AnimatedNumber end={6} />
                <span>Languages for clearer advice</span>
              </div>
            </div>
          </div>
        </section>

        <section className="editorial-intro section-space" id="introduction">
          <div className="shell intro-layout">
            <div className="intro-index reveal">
              <span>01</span>
              <p>More than property</p>
            </div>
            <div className="intro-statement reveal reveal-delay">
              <p className="eyebrow">Pavneet Singh | REALTOR®</p>
              <h2>
                Real estate is a decision about <em>family, freedom,</em> and what comes next.
              </h2>
            </div>
            <div className="intro-body reveal reveal-delay-2">
              <p>
                Pavneet helps families, newcomers, professionals, business owners, and investors navigate Nova Scotia with honest advice, thoughtful strategy, and a relationship built to last beyond closing day.
              </p>
              <a className="line-link" href="/about">The story behind the service <ArrowUpRight /></a>
            </div>
          </div>
        </section>

        <div className="motion-ribbon" aria-hidden="true">
          <div className="motion-ribbon-track">
            {[0, 1].map((copy) => (
              <div className="motion-ribbon-group" key={copy}>
                <span>Nova Scotia</span><i>✦</i><span>Residential</span><i>✦</i>
                <span>Commercial</span><i>✦</i><span>Investment</span><i>✦</i>
                <span>Land &amp; development</span><i>✦</i><span>Relocation</span><i>✦</i>
              </div>
            ))}
          </div>
        </div>

        <section className="journeys-section section-space">
          <div className="shell section-heading reveal">
            <div>
              <p className="eyebrow">Tailored guidance</p>
              <h2>What are you looking to <em>achieve?</em></h2>
            </div>
            <p>
              One considered process, adapted to the decision in front of you.
            </p>
          </div>
          <div className="shell"><JourneySwitcher /></div>
        </section>

        <section className="services-section section-space dark-section">
          <div className="shell section-heading light-heading reveal">
            <div>
              <p className="eyebrow light">The advisory spectrum</p>
              <h2>Strategy for every kind of <em>opportunity.</em></h2>
            </div>
            <a className="line-link light-link" href="/services">Explore all advisory services <ArrowUpRight /></a>
          </div>
          <div className="shell services-grid">
            {services.map((service, index) => (
              <article className={`service-tile reveal reveal-delay-${(index % 3) + 1}`} key={service.title} data-cursor-label="Explore">
                <img src={service.image} alt="" data-parallax="soft" />
                <div className="service-shade" />
                <div className="service-top"><span>{service.number}</span><ArrowUpRight /></div>
                <div className="service-copy">
                  <small>{service.subtitle}</small>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="profile-section section-space">
          <div className="shell profile-layout">
            <div className="profile-visual reveal">
              <div className="profile-photo-frame">
                <img src="/images/pavneet-transparent-headshot.png" alt="Pavneet Singh, Nova Scotia REALTOR®" />
                <span className="profile-seal"><b>PS</b><small>Trusted family REALTOR®</small></span>
              </div>
              <div className="profile-caption">
                <span>Pavneet Singh</span>
                <span>Sutton Group Professional Realty</span>
              </div>
            </div>
            <div className="profile-content reveal reveal-delay">
              <p className="eyebrow">Local knowledge. Straight answers.</p>
              <h2>A plan built around <em>you.</em></h2>
              <p className="profile-lead">
                Every journey is different. You deserve advice that respects both the numbers and the life behind them.
              </p>
              <blockquote>
                “My goal is not simply to complete a transaction. It is to help you make an informed decision that creates lasting value.”
              </blockquote>
              <div className="profile-facts">
                <div><strong>Finance</strong><span>Cash-flow and closing-cost clarity</span></div>
                <div><strong>Construction</strong><span>A practical eye on condition and feasibility</span></div>
                <div><strong>Relocation</strong><span>Empathetic guidance for newcomers</span></div>
              </div>
              <div className="language-line" aria-label="Six languages spoken">
                <strong>6 languages</strong>
                <div><span>English</span><span>Punjabi</span><span>Hindi</span><span>Urdu</span><span>Gujarati</span><span>Spanish</span></div>
              </div>
                <a className="primary-button ink-button" href="/about" data-magnetic>Meet Pavneet <ArrowUpRight /></a>
            </div>
          </div>
        </section>

        <section className="properties-section section-space soft-section">
          <div className="shell section-heading reveal">
            <div>
              <p className="eyebrow">Curated market preview</p>
              <h2>Opportunities worth a <em>closer look.</em></h2>
            </div>
            <a className="line-link" href="/properties">Explore the marketplace <ArrowUpRight /></a>
          </div>
          <div className="shell property-row">
            {properties.slice(0, 3).map((property, index) => (
              <a
                className={`property-card reveal reveal-delay-${index + 1}`}
                href={`/properties/${property.slug}`}
                key={property.slug}
                data-cursor-label="View"
              >
                <div className="property-image">
                  <img src={property.image} alt={property.title} />
                  <span>{property.category}</span>
                  <i><ArrowUpRight /></i>
                </div>
                <div className="property-copy">
                  <p>{property.location}</p>
                  <h3>{property.title}</h3>
                  <strong>{property.price}</strong>
                  <div><span>{property.beds}</span><span>{property.baths}</span><span>{property.area}</span></div>
                </div>
              </a>
            ))}
          </div>
          <p className="property-note shell reveal">
            Public market references for design and discovery. Availability and listing details must be confirmed directly.
          </p>
        </section>

        <section className="process-section section-space">
          <div className="shell process-layout">
            <div className="process-heading reveal">
              <p className="eyebrow">A clear plan of action</p>
              <h2>From ambition to <em>address.</em></h2>
              <p>Thoughtful coordination through negotiation, due diligence, closing day, and everything between.</p>
              <a className="line-link" href="/contact">Build your plan <ArrowUpRight /></a>
            </div>
            <div className="process-steps">
              {[
                ["01", "Discover", "Define your goals, timing, priorities, and the opportunities that align."],
                ["02", "Strategize", "Turn market context and careful analysis into a practical next-move plan."],
                ["03", "Execute", "Coordinate viewings, negotiations, conditions, legal work, and closing."],
              ].map((step, index) => (
                <article className={`reveal reveal-delay-${index + 1}`} key={step[0]}>
                  <span>{step[0]}</span>
                  <h3>{step[1]}</h3>
                  <p>{step[2]}</p>
                  <i aria-hidden="true">↘</i>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="proof-section section-space dark-section">
          <div className="shell proof-layout">
            <div className="proof-image reveal">
              <img src="/images/pavneet-community-leadership.jpg" alt="Pavneet Singh at a Canadian community leadership event" data-parallax="soft" />
              <span>Community in action</span>
            </div>
            <div className="proof-content">
              <p className="eyebrow light reveal">Experience & community</p>
              <h2 className="reveal">A record built through <em>service.</em></h2>
              <div className="proof-stats reveal reveal-delay">
                <div><strong>100+</strong><span>Units represented</span></div>
                <div><strong>Top 25</strong><span>RE/MAX Nova, 2023</span></div>
                <div><strong>2024</strong><span>Good Deeds recognition</span></div>
              </div>
              <p className="proof-copy reveal reveal-delay-2">
                Recognition matters most when it reflects consistent work: showing up, protecting the client&apos;s interests, and contributing to the community.
              </p>
            </div>
          </div>
        </section>

        <section className="testimonials-section section-space">
          <div className="shell testimonial-layout">
            <div className="testimonial-heading reveal">
              <p className="eyebrow">Client perspective</p>
              <h2>Trust is the real <em>result.</em></h2>
              <div className="five-stars" aria-label="Five star client experiences">★★★★★</div>
            </div>
            <TestimonialStage />
          </div>
        </section>

        <section className="province-section">
          <img src="/images/nova-scotia-coast.webp" alt="Coastal community in Nova Scotia" data-parallax="wide" />
          <div className="province-film" />
          <div className="shell province-content reveal">
            <p className="eyebrow light">Serving all of Nova Scotia</p>
            <h2>One province.<br /><em>Many possibilities.</em></h2>
            <p>From Halifax&apos;s urban core to growing coastal and rural communities, local context turns a search into a confident decision.</p>
            <div className="province-tags">
              {['Halifax', 'Bedford', 'Dartmouth', 'Hammonds Plains', 'Sackville', 'Truro', 'Annapolis Valley', 'Cape Breton'].map((place) => <span key={place}>{place}</span>)}
            </div>
            <a className="primary-button light-button" href="/neighbourhoods" data-magnetic>Explore communities <ArrowUpRight /></a>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
