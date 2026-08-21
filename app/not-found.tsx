import { SiteChrome } from "./components/SiteChrome";

export default function NotFound() {
  return (
    <SiteChrome>
      <main className="not-found-page">
        <div className="shell">
          <p className="eyebrow">404 | Page not found</p>
          <h1>This address isn&apos;t on the map.</h1>
          <p>The page may have moved, but your next step is still easy to find.</p>
          <a className="primary-button ink-button" href="/">Return home →</a>
        </div>
      </main>
    </SiteChrome>
  );
}
