"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { navItems, secondaryNavItems, site } from "../data";

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      {down ? (
        <path d="M10 3v13m0 0 5-5m-5 5-5-5" />
      ) : (
        <path d="M4 16 16 4m0 0H7m9 0v9" />
      )}
    </svg>
  );
}

export function ArrowUpRight() {
  return <Arrow />;
}

export function SiteChrome({
  children,
  darkHeader = false,
}: {
  children: ReactNode;
  darkHeader?: boolean;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 28);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    const revealTimer = window.setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    }, 80);

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.clearTimeout(revealTimer);
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) return;
    const menu = document.querySelector<HTMLElement>(".mobile-menu");
    const toggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
    const links = Array.from(menu?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
    links[0]?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMenuOpen(false); toggle?.focus(); }
      if (event.key === "Tab") {
        const controls = [toggle, ...links].filter((element): element is HTMLButtonElement | HTMLAnchorElement => element !== null);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", keydown);
    };
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header
        className={`site-header ${darkHeader ? "on-hero" : ""} ${scrolled ? "is-scrolled" : ""}`}
      >
        <Link className="brand" href="/" aria-label="Pavneet Singh home">
          <span className="brand-copy"><strong>Sutton Group Professional Realty</strong><small>Pavneet Singh, REALTOR®</small></span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
        </nav>

        <div className="header-actions">

          <Link className="header-contact" href="/contact" data-magnetic>Let’s talk <ArrowUpRight /></Link>
        </div>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <i />
          <i />
        </button>
      </header>

      <div id="site-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen} inert={!menuOpen}>
        <div className="mobile-menu-inner">
          <p>Your next move</p>
          {navItems.map((item, index) => (
            <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{item.label}<ArrowUpRight />
            </Link>
          ))}
          <div className="mobile-menu-secondary">
            {secondaryNavItems.map((item) => (
              <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>
            ))}
          </div>
          <Link className="mobile-menu-cta" href="/submit-opportunity" onClick={() => setMenuOpen(false)}>
            Submit an opportunity <ArrowUpRight />
          </Link>
          <div className="mobile-menu-contact">
            <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </div>

      {children}

      <footer className="site-footer">
        <div className="footer-orbit" aria-hidden="true"><i /></div>
        <div className="footer-top shell">
          <div className="footer-pitch reveal">
            <p className="eyebrow light">Your next move</p>
            <h2>Let’s make your <em>next move.</em></h2>
            <Link className="footer-cta" href="/contact" aria-label="Request a private consultation" data-magnetic>
              <span>Start a conversation</span><ArrowUpRight />
            </Link>
          </div>
          <div className="footer-info reveal reveal-delay">
            <div>
              <p>Direct</p>
              <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div>
              <p>Office</p>
              <address>{site.office}</address>
            </div>
            <div>
              <p>Follow</p>
              <a href={site.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
              <a href={site.facebook} target="_blank" rel="noreferrer">Facebook ↗</a>
              <a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
            </div>
            <div>
              <p>Explore</p>
              <Link href="/invest">Investment enquiry</Link>
              <Link href="/submit-opportunity">Submit a Property</Link>
              <Link href="/properties">Properties</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom shell">
          <span>© 2026 Pavneet Singh</span>
          <span>Pavneet Singh, REALTOR® | Sutton Group Professional Realty</span>
          <div>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
        <div className="footer-disclaimer shell">
          REALTOR® and MLS® are trademarks owned or controlled by the Canadian Real Estate Association and identify real estate professionals and services that meet CREA&apos;s standards. Property information is believed to be reliable but is not guaranteed.
        </div>
      </footer>

      <div className="mobile-contact-bar" aria-label="Quick contact">
        <a href={`tel:${site.phoneHref}`}>Call</a>
        <a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        <a href={`mailto:${site.email}`}>Email</a>
      </div>

    </>
  );
}
