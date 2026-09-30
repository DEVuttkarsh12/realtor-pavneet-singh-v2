import Link from "next/link";
import { blogPosts, site } from "../data";
import { ArrowUpRight, SiteChrome } from "./SiteChrome";

const pathways = [
  { label: "For investors", title: "Build with a clearer view of the market.", copy: "Multifamily, income property, commercial assets and portfolio acquisitions.", href: "/invest", image: "/images/halifax-aerial.jpg" },
  { label: "For developers & landowners", title: "See what a site could become.", copy: "Development sites, land assemblies, acquisition representation and disposition strategy.", href: "/development-land", image: "/images/halifax-hero-poster.webp" },
  { label: "For business owners", title: "Property that moves business forward.", copy: "Buy, sell or lease retail, office, industrial and other business real estate.", href: "/commercial-real-estate", image: "/images/halifax-aerial.jpg" },
  { label: "For home buyers & sellers", title: "The right move deserves a real strategy.", copy: "Homes, relocation, new construction and residential investment across Nova Scotia.", href: "/residential", image: "/images/nova-scotia-coast.webp" },
];

export default function HomeExperience() {
  return <SiteChrome darkHeader><main className="revamp-home">
    <section className="revamp-hero" aria-labelledby="home-title">
      <video autoPlay muted loop playsInline preload="metadata" poster="/images/halifax-hero-poster.webp" aria-hidden="true"><source src="/videos/halifax-drone-hero.mp4" type="video/mp4" /></video>
      <div className="revamp-hero-shade" />
      <div className="shell revamp-hero-inner">
        <p className="revamp-kicker light">Pavneet Singh <span /> Nova Scotia Real Estate Advisor</p>
        <h1 id="home-title">Real estate strategy for people <em>building something bigger.</em></h1>
        <p className="revamp-hero-copy">Investment, commercial, development land and residential representation across Nova Scotia.</p>
        <div className="revamp-actions"><Link className="revamp-button gold" href="/properties">Explore opportunities <ArrowUpRight /></Link><Link className="revamp-button outline" href="/contact">Work with Pavneet <ArrowUpRight /></Link></div>
        <div className="revamp-hero-caption">REALTOR® <i /> Sutton Group Professional Realty</div>
      </div>
      <a className="revamp-scroll" href="#introduction">Discover the approach <span>↓</span></a>
    </section>

    <section className="revamp-intro shell" id="introduction"><div className="revamp-intro-label">01 / The perspective</div><div><p className="revamp-kicker">Connecting capital, property and opportunity</p><h2>One province. Many kinds of <em>possibility.</em></h2></div><div className="revamp-intro-copy"><p>Pavneet works with investors, developers, business owners, landowners and families making significant property decisions in Nova Scotia.</p><p>His brokerage practice brings a broad real estate perspective to every conversation, from a first home to a commercial acquisition or development site.</p></div></section>

    <section className="revamp-pathways"><div className="shell revamp-section-head"><p className="revamp-kicker">Find your starting point</p><h2>Where can we help you <em>move forward?</em></h2></div><div className="shell revamp-pathway-grid">{pathways.map((path, index) => <Link href={path.href} className="revamp-pathway" key={path.label}><img src={path.image} alt="" loading="lazy" /><div className="revamp-pathway-overlay" /><div className="revamp-pathway-content"><span>0{index + 1} / {path.label}</span><h3>{path.title}</h3><p>{path.copy}</p><strong>Explore this path <ArrowUpRight /></strong></div></Link>)}</div></section>

    <section className="revamp-opportunity shell"><div className="revamp-opportunity-image"><img src="/images/halifax-aerial.jpg" alt="Aerial view of Halifax and its waterfront" loading="lazy" /><span>Halifax / Nova Scotia</span></div><div className="revamp-opportunity-copy"><p className="revamp-kicker">The opportunity desk</p><h2>Bring the <em>brief.</em> We&apos;ll help define the search.</h2><p>Looking for an apartment building, a place to grow your business, or land for the next project? Share your criteria with Pavneet. Relevant opportunities can be discussed when available and authorized for marketing.</p><div className="revamp-inline-links"><Link href="/invest">Submit investment criteria <ArrowUpRight /></Link><Link href="/submit-opportunity">Submit a property <ArrowUpRight /></Link></div></div></section>

    <section className="revamp-approach"><div className="shell"><div className="revamp-section-head"><p className="revamp-kicker light">A considered process</p><h2>Good decisions begin <em>before the offer.</em></h2></div><div className="revamp-approach-grid">{[
      ["01", "Understand the objective", "The property is only part of the decision. Begin with goals, timing, capital and constraints."],
      ["02", "Find the right path", "Review the public market, authorized opportunities and the people who know the local landscape."],
      ["03", "Move with clarity", "Coordinate the transaction and involve legal, tax, financing, planning or technical specialists when needed."],
    ].map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="revamp-profile shell"><div className="revamp-profile-image"><img src="/images/pavneet-official-headshot.jpg" alt="Pavneet Singh" loading="lazy" /></div><div className="revamp-profile-copy"><p className="revamp-kicker">Meet Pavneet Singh</p><h2>Local relationships. <em>Broader perspective.</em></h2><p>Pavneet brings together residential representation, commercial real estate conversations and firsthand exposure to development through separate business interests. The result is a practical view of property from more than one angle.</p><p>For legal, tax, engineering, surveying, financing and planning questions, the right specialist belongs at the table.</p><p className="revamp-profile-disclosure">Separate development activities are outside Sutton Group Professional Realty&apos;s brokerage services. NSREC consumer protections for real estate trading do not apply to those separate activities.</p><Link className="revamp-text-link" href="/about">More about Pavneet <ArrowUpRight /></Link></div></section>

    <section className="revamp-intelligence"><div className="shell"><div className="revamp-section-head split"><div><p className="revamp-kicker">Nova Scotia real estate intelligence</p><h2>Read the market with <em>context.</em></h2></div><Link className="revamp-text-link" href="/intelligence">Explore all insights <ArrowUpRight /></Link></div><div className="revamp-article-grid">{blogPosts.slice(0, 3).map((post, index) => <Link href={`/blog/${post.slug}`} className="revamp-article" key={post.slug}><img src={["/images/halifax-aerial.jpg", "/images/halifax-hero-poster.webp", "/images/nova-scotia-coast.webp"][index]} alt="" loading="lazy" /><div><span>{post.category} · {post.readTime}</span><h3>{post.title}</h3><strong>Read the insight <ArrowUpRight /></strong></div></Link>)}</div></div></section>

    <section className="revamp-submit shell"><div><p className="revamp-kicker">For owners and brokers</p><h2>Have land or an investment property <em>to discuss?</em></h2></div><div><p>Tell Pavneet about the property, your objectives and the level of confidentiality you need. Every submission starts with a direct conversation.</p><Link className="revamp-button dark" href="/submit-opportunity">Submit an opportunity <ArrowUpRight /></Link></div></section>

    <section className="revamp-contact"><div className="shell"><p className="revamp-kicker light">A direct conversation</p><h2>Let&apos;s talk about <em>what&apos;s next.</em></h2><p>Whether the move is personal or complex, start with the objective. Pavneet will help identify the next useful step.</p><div className="revamp-actions"><Link className="revamp-button gold" href="/contact">Work with Pavneet <ArrowUpRight /></Link><a className="revamp-button outline" href={`tel:${site.phoneHref}`}>Call {site.phoneDisplay} <ArrowUpRight /></a></div></div></section>
  </main></SiteChrome>;
}
