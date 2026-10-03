"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { site } from "../data";
import { ArrowUpRight, SiteChrome } from "./SiteChrome";

import PageHero from "./PageHero";

type Kind = "invest" | "submit" | "commercial" | "transactions" | "media";

function Intro({ label, title, copy, image }: { label: string; title: string; copy: string; image: string }) {
  return <PageHero eyebrow={label} title={title} copy={copy} image={image} />;
}

function PageEnd() {
  return <section className="advisory-end"><div className="shell"><p className="revamp-kicker light">A direct conversation</p><h2>Let&apos;s review the <em>possibility.</em></h2><Link className="revamp-button gold" href="/contact">Work with Pavneet <ArrowUpRight /></Link></div></section>;
}

function Field({ label, name, required = false, children }: { label: string; name: string; required?: boolean; children?: ReactNode }) {
  return <label className="advisory-field"><span>{label}{required && " *"}</span>{children || <input name={name} required={required} />}</label>;
}

function Select({ name, options }: { name: string; options: string[] }) {
  return <select name={name} defaultValue=""><option value="">Select an option</option>{options.map((option) => <option key={option}>{option}</option>)}</select>;
}

function EmailForm({ kind }: { kind: "invest" | "submit" }) {
  const [opened, setOpened] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const asset = String(data.get(kind === "invest" ? "assetClass" : "propertyType") || "").toLowerCase();
    const range = String(data.get("investmentRange") || "");
    const category = kind === "invest"
      ? (range === "$10M–$25M" || range === "$25M+" ? "INV-HNW" : asset === "multifamily" ? "INV-MF" : "INV")
      : asset === "development land" ? "DEV-LAND" : asset === "industrial" ? "INDUSTRIAL" : "COMM-SELL";
    const rows = [`Lead category: ${category}`, `Source: website ${window.location.pathname}`, ...Array.from(data.entries()).map(([key, value]) => `${key.replace(/([A-Z])/g, " $1")}: ${String(value)}`)];
    const subject = `${category} | ${kind === "invest" ? "Investment criteria enquiry" : "Property opportunity submission"}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(rows.join("\n"))}`;
    setOpened(true);
  }
  return <form className="advisory-form" onSubmit={submit}>
    <div className="advisory-form-head"><span>{kind === "invest" ? "Investment criteria" : "Property details"}</span><h2>{kind === "invest" ? "Your investment brief." : "Your property details."}</h2></div>
    <div className="advisory-form-grid">
      {kind === "submit" && <><Field label="Property address" name="address" required /><Field label="Property type" name="propertyType"><Select name="propertyType" options={["Development land", "Multifamily", "Commercial", "Industrial", "Residential", "Other"]} /></Field><Field label="Asking price, if known" name="askingPrice" /><Field label="Your timeline" name="closing" /></>}
      {kind === "invest" && <><Field label="Investment range" name="investmentRange"><Select name="investmentRange" options={["$500K–$1M", "$1M–$3M", "$3M–$10M", "$10M–$25M", "$25M+"]} /></Field><Field label="Property type" name="assetClass"><Select name="assetClass" options={["Multifamily", "Commercial", "Industrial", "Development land", "Mixed use", "Residential income", "Portfolio"]} /></Field><Field label="Preferred area" name="geography" /><Field label="Timeline" name="timeline"><Select name="timeline" options={["Immediately", "0–3 months", "3–6 months", "6–12 months", "Exploring"]} /></Field></>}
      <Field label="Name" name="name" required /><Field label="Email" name="email" required><input name="email" type="email" autoComplete="email" required /></Field><Field label="Phone" name="phone"><input name="phone" type="tel" autoComplete="tel" /></Field>
      <label className="advisory-field wide"><span>Anything else Pavneet should know?</span><textarea name="details" rows={4} /></label>
    </div>
    <label className="advisory-check"><input type="checkbox" required /><span>I agree to be contacted about this enquiry. See the <Link href="/privacy-policy">privacy policy</Link>.</span></label>
    <button className="revamp-button dark" type="submit">Prepare email to Pavneet <ArrowUpRight /></button>
    <p className="advisory-form-note" aria-live="polite">{opened ? "Review the prepared message in your email app and send it to complete your enquiry." : "This opens your email app with the details prepared. No information is sent until you send the email."}</p>
  </form>;
}

function Invest() { return <><Intro label="Invest / Nova Scotia" title="Your next investment starts here." copy="Find income property, commercial assets and development opportunities that fit your goals." image="/images/halifax-aerial.jpg" /><section className="advisory-content shell"><div><p className="revamp-kicker">The investor network</p><h2>Define your <em>next investment.</em></h2><p>Share your budget, location and property type. Pavneet will help focus the search.</p><div className="advisory-tags"><span>Multifamily</span><span>Mixed use</span><span>Commercial</span><span>Industrial</span><span>Development land</span><span>Portfolio acquisitions</span></div><p className="advisory-note">Property information is for real estate discussion. Legal, tax, financing and investment advice should come from qualified professionals.</p></div><EmailForm kind="invest" /></section><PageEnd /></>; }
function Submit() { return <><Intro label="Submit an opportunity" title="Have land or an investment property?" copy="Owners, brokers and authorized representatives can introduce a property for a confidential initial discussion." image="/images/development.jpg" /><section className="advisory-content shell"><div><p className="revamp-kicker">For owners & brokers</p><h2>Your property. <em>Your plans.</em></h2><p>Share the location, property type and your plans. Pavneet will discuss the next step with you.</p><p className="advisory-note">For sensitive documents such as rent rolls, surveys or an offering memorandum, request a secure transfer method during the initial conversation.</p></div><EmailForm kind="submit" /></section><PageEnd /></>; }
function Commercial() { return <><Intro label="Commercial real estate" title="Real estate for business growth." copy="Acquire, sell or lease commercial property with attention to the business decision behind the transaction." image="/images/halifax-aerial.jpg" /><section className="advisory-list shell"><div className="revamp-section-head"><p className="revamp-kicker">Commercial pathways</p><h2>Find the right kind of <em>space or asset.</em></h2></div><div>{[["Multifamily", "Apartment buildings, mixed use and rental portfolios."],["Retail & business real estate", "Retail plazas, restaurant space and service commercial property."],["Industrial", "Warehouses, logistics facilities, flex space and industrial land."],["Development", "Land, redevelopment sites and approved projects where information is available."]].map(([title,copy],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="advisory-actions"><Link href="/contact">Buy <ArrowUpRight /></Link><Link href="/submit-opportunity">Sell <ArrowUpRight /></Link><Link href="/contact">Lease <ArrowUpRight /></Link><Link href="/submit-opportunity">Submit opportunity <ArrowUpRight /></Link></div></section><PageEnd /></>; }
function Transactions() { return <><Intro label="Selected transactions" title="The work should speak for itself." copy="A place for transactions and case studies once each example is documented, permissioned and approved for advertising." image="/images/halifax-aerial.jpg" /><section className="advisory-simple shell"><p className="revamp-kicker">Relevant experience</p><h2>Ask for examples that fit <em>your mandate.</em></h2><p>Pavneet can discuss relevant experience and his role in transactions directly. Public case studies will appear here when details and disclosure rights have been verified.</p><Link className="revamp-button dark" href="/contact">Request a conversation <ArrowUpRight /></Link></section><PageEnd /></>; }
function Media() { return <><Intro label="Media & perspective" title="Conversations about Nova Scotia real estate." copy="Pavneet's perspective on property, development, business and the communities shaping this province." image="/images/pavneet-community-leadership.jpg" /><section className="advisory-list shell"><div className="revamp-section-head"><p className="revamp-kicker">Editorial formats</p><h2>More useful real estate <em>conversations.</em></h2></div><div>{[["Market Brief", "A concise read on what is changing in Nova Scotia property markets."],["Property Tours", "A closer look at buildings, sites and homes where filming is authorized."],["Development Explained", "The real estate questions behind land, approvals and execution."],["Conversations", "Perspectives from builders, investors and the specialists behind complex decisions."]].map(([title,copy],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="advisory-note">Episodes and interviews will be added when produced and approved for publication.</p></section><PageEnd /></>; }

export default function AdvisoryPage({ kind }: { kind: Kind }) { return <SiteChrome darkHeader><main id="main-content" className="advisory-page">{kind === "invest" ? <Invest /> : kind === "submit" ? <Submit /> : kind === "commercial" ? <Commercial /> : kind === "transactions" ? <Transactions /> : <Media />}</main></SiteChrome>; }
