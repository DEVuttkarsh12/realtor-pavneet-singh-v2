"use client";

import { useEffect, useState, type ReactNode } from "react";
import { navItems, site } from "../data";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty("--scroll-progress", String(progress));
      setScrolled(window.scrollY > 28);

      if (!reduced) {
        parallaxElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.bottom < -80 || rect.top > window.innerHeight + 80) return;
          const mode = element.dataset.parallax;
          const speed = mode === "wide" ? 0.045 : mode === "hero" ? 0.03 : 0.018;
          const limit = mode === "wide" ? 38 : mode === "hero" ? 32 : 16;
          const distance = rect.top + rect.height / 2 - window.innerHeight / 2;
          const offset = Math.max(-limit, Math.min(limit, distance * -speed));
          element.style.setProperty("--parallax-y", `${offset}px`);
        });
      }
    };

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
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    const root = document.documentElement;
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    document.body.classList.add("has-premium-cursor");

    const move = (event: MouseEvent) => {
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
      root.style.setProperty("--spotlight-x", `${(event.clientX / window.innerWidth) * 100}%`);
      root.style.setProperty("--spotlight-y", `${(event.clientY / window.innerHeight) * 100}%`);

      const magnetic = (event.target as HTMLElement).closest("[data-magnetic]") as HTMLElement | null;
      if (magnetic) {
        const rect = magnetic.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.1;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
        magnetic.style.setProperty("--magnetic-x", `${x}px`);
        magnetic.style.setProperty("--magnetic-y", `${y}px`);
      }
    };

    const over = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest(
        "a, button, [data-cursor-label]",
      ) as HTMLElement | null;
      document.body.classList.toggle("cursor-is-active", Boolean(target));
      const labelTarget = (event.target as HTMLElement).closest(
        "[data-cursor-label]",
      ) as HTMLElement | null;
      if (ring) ring.dataset.label = labelTarget?.dataset.cursorLabel ?? "";
    };

    const out = (event: MouseEvent) => {
      const magnetic = (event.target as HTMLElement).closest("[data-magnetic]") as HTMLElement | null;
      if (magnetic) {
        magnetic.style.setProperty("--magnetic-x", "0px");
        magnetic.style.setProperty("--magnetic-y", "0px");
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over, { passive: true });
    document.addEventListener("mouseout", out, { passive: true });
    return () => {
      document.body.classList.remove("has-premium-cursor", "cursor-is-active");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" data-label="" />

      <header
        className={`site-header ${darkHeader ? "on-hero" : ""} ${scrolled ? "is-scrolled" : ""}`}
      >
        <a className="brand" href="/" aria-label="Pavneet Singh home">
          <span className="brand-mark" aria-hidden="true">
            <img src="/images/pavneet-logo-nav.webp" alt="" />
          </span>
          <span className="brand-copy">
            <strong>Pavneet Singh</strong>
            <small>Nova Scotia REALTOR®</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="header-contact" href="/contact" data-magnetic>
          Private consultation <ArrowUpRight />
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <i />
          <i />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          <p>Navigate</p>
          {navItems.map((item, index) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{item.label}<ArrowUpRight />
            </a>
          ))}
          <a className="mobile-menu-cta" href="/contact" onClick={() => setMenuOpen(false)}>
            Request a consultation <ArrowUpRight />
          </a>
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
            <h2>Let&apos;s make it a <em>confident one.</em></h2>
            <a className="circle-link" href="/contact" aria-label="Request a private consultation" data-magnetic>
              <span>Request<br />a consultation</span><ArrowUpRight />
            </a>
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
            </div>
          </div>
        </div>
        <div className="footer-bottom shell">
          <span>© 2026 Pavneet Singh</span>
          <span>REALTOR® | Sutton Group Professional Realty</span>
          <div>
            <a href="/privacy-policy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
        <div className="footer-disclaimer shell">
          REALTOR® and MLS® are trademarks owned or controlled by the Canadian Real Estate Association and identify real estate professionals and services that meet CREA&apos;s standards. Property information is believed to be reliable but is not guaranteed.
        </div>
      </footer>

      <div className="floating-actions">
        <a href={`tel:${site.phoneHref}`} aria-label="Call Pavneet">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 3H4.8C3.8 3 3 3.8 3 4.8 3 13.7 10.3 21 19.2 21c1 0 1.8-.8 1.8-1.8V17l-4.8-1.1-1.2 2a15.6 15.6 0 0 1-8.9-8.9l2-1.2L7 3Z" /></svg>
          <span>Call</span>
        </a>
        <a className="whatsapp-action" href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="Message Pavneet on WhatsApp">
          <span>WA</span>
        </a>
      </div>
    </>
  );
}
