import Link from "next/link";
import { SiteChrome } from "./components/SiteChrome";

export default function NotFound() {
  return (
    <SiteChrome>
      <main className="not-found-page">
        <div className="shell">
          <p className="eyebrow">404 | Page not found</p>
          <h1>This address isn&apos;t on the map.</h1>
          <p>The page may have moved, but your next step is still easy to find.</p>
          <Link className="primary-button ink-button" href="/">Return home →</Link>
        </div>
      </main>
    </SiteChrome>
  );
}
