import Link from "next/link";
import type { ReactNode } from "react";
import SiteImage from "./SiteImage";
import { ArrowUpRight } from "./SiteChrome";

export default function PageHero({ eyebrow, title, copy, image, imageAlt = "", portrait = false }: {
  eyebrow: string; title: ReactNode; copy: string; image: string; imageAlt?: string; portrait?: boolean;
}) {
  return (
    <section className={`inner-hero ${portrait ? "has-portrait-media" : ""}`}>
      <div className="shell shared-hero-grid">
        <div className="inner-hero-content">
          <p className="eyebrow light">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{copy}</p>
          <Link className="revamp-button gold" href="/contact">Let’s discuss your plans <ArrowUpRight /></Link>
        </div>
        <div className="shared-hero-image"><SiteImage src={image} alt={imageAlt} loading="eager" /></div>
      </div>
    </section>
  );
}
