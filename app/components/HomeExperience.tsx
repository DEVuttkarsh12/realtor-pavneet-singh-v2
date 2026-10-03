import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, SiteChrome } from "./SiteChrome";

const pathways = [
  { number: "01", title: "Buy a home", copy: "Find the right place for your next chapter.", href: "/residential", image: "/images/home-exterior.jpg", alt: "A detached home and its landscaped grounds", width: 1600, height: 1067 },
  { number: "02", title: "Sell your property", copy: "A clear plan for pricing, presentation and sale.", href: "/selling-guide", image: "/images/interior-kitchen.jpg", alt: "A bright, thoughtfully finished home interior", width: 1600, height: 1067 },
  { number: "03", title: "Land & development", copy: "Explore sites, new construction and what comes next.", href: "/development-land", image: "/images/development.jpg", alt: "An aerial view of a residential neighbourhood", width: 1600, height: 900 },
  { number: "04", title: "Commercial & investment", copy: "Property that works for your business and portfolio.", href: "/commercial-real-estate", image: "/images/halifax-aerial.jpg", alt: "Halifax buildings and waterfront from above", width: 1600, height: 1200 },
];

export default function HomeExperience() {
  return (
    <SiteChrome>
      <main className="property-home" id="main-content">
        <section className="property-hero" aria-labelledby="home-title">
          <div className="property-hero-media">
            <video autoPlay muted loop playsInline preload="metadata" poster="/images/halifax-hero-poster.webp" aria-hidden="true">
              <source src="/videos/halifax-drone-hero.mp4" type="video/mp4" />
            </video>
            <div className="property-hero-shade" />
          </div>
          <div className="shell property-hero-content">
            <p className="eyebrow light">Pavneet Singh · Nova Scotia real estate</p>
            <h1 id="home-title">Your next home.<br />Your next investment.<br /><em>Your next possibility.</em></h1>
            <p>Buy. Sell. Build your next chapter.<br />Local guidance for homes, commercial property and development land.</p>
            <div className="revamp-actions">
              <Link className="revamp-button gold" href="/properties">Explore properties <ArrowUpRight /></Link>
              <Link className="revamp-button outline" href="/contact">Let’s talk <ArrowUpRight /></Link>
            </div>
          </div>
          <div className="property-hero-bottom shell"><span>Halifax & across Nova Scotia</span><a href="#your-next-move">Find your next move <span aria-hidden="true">↓</span></a></div>
        </section>

        <section className="property-paths shell" id="your-next-move">
          <div className="property-section-heading"><div><p className="eyebrow">Real estate, built around you</p><h2>What’s your <em>next move?</em></h2></div><p>From the first showing to a new development, start with the right plan.</p></div>
          <div className="property-path-grid">{pathways.map((path) => (
            <Link className="property-path" href={path.href} key={path.number}>
              <div className="property-path-image"><Image src={path.image} alt={path.alt} width={path.width} height={path.height} unoptimized loading="lazy" /><span>{path.number}</span></div>
              <div className="property-path-copy"><h3>{path.title}<ArrowUpRight /></h3><p>{path.copy}</p></div>
            </Link>
          ))}</div>
        </section>

        <section className="property-development">
          <div className="shell property-development-grid">
            <div className="property-development-image"><Image src="/images/development.jpg" alt="Homes, streets and sites viewed from above" width={1600} height={900} unoptimized loading="lazy" /><span>Land · New construction · Development</span></div>
            <div className="property-development-copy"><p className="eyebrow light">See the potential</p><h2>A place to live.<br />A place to <em>build.</em></h2><p>Land acquisition, new construction and development opportunities. Bring your vision, and let’s work through the site, the market and the next step.</p><Link className="revamp-button gold" href="/development-land">Explore land & development <ArrowUpRight /></Link><Link className="property-secondary-link" href="/submit-opportunity">Have a site or property to sell? <ArrowUpRight /></Link></div>
          </div>
        </section>

        <section className="property-profile shell">
          <div className="property-profile-image"><Image src="/images/pavneet-studio-portrait.jpg" alt="Pavneet Singh, REALTOR®" width={1361} height={1600} unoptimized loading="lazy" /></div>
          <div className="property-profile-copy"><p className="eyebrow">Meet your REALTOR®</p><h2>Local knowledge.<br /><em>Personal commitment.</em></h2><p>Pavneet Singh helps buyers, sellers and investors move forward across Nova Scotia, bringing a practical perspective on property and development to every conversation.</p><div className="property-profile-signature"><strong>Pavneet Singh</strong><span>REALTOR® · Sutton Group Professional Realty</span></div><Link className="revamp-button dark" href="/about">Meet Pavneet <ArrowUpRight /></Link><p className="property-disclosure">Separate development interests are outside Sutton’s brokerage services and NSREC protections for real estate trading.</p></div>
        </section>

        <section className="property-resources soft-section"><div className="shell"><div className="property-section-heading"><div><p className="eyebrow">A clear way forward</p><h2>Know what comes <em>next.</em></h2></div><Link className="line-link" href="/guides">All guides <ArrowUpRight /></Link></div><div className="property-resource-grid">{[
          { number: "01", title: "Buying a home", copy: "Budget, search, offer and closing.", href: "/buying-guide" },
          { number: "02", title: "Selling a property", copy: "Prepare, price and make your move.", href: "/selling-guide" },
          { number: "03", title: "Investing in property", copy: "Define your criteria and explore the market.", href: "/invest" },
        ].map((item) => <Link className="property-resource" href={item.href} key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p><ArrowUpRight /></Link>)}</div></div></section>
      </main>
    </SiteChrome>
  );
}
