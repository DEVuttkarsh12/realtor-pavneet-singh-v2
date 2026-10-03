import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders development preview metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

test("published About and guide URLs remain accessible alongside redesign links", async () => {
  const { default: worker } = await import("../dist/server/index.js");
  const pages = [
    ["/about-pavneet-singh", "/about-pavneet-singh", "A relationship built on"],
    ["/about", "/about-pavneet-singh", "A relationship built on"],
    ["/buying-a-home-guide", "/buying-a-home-guide", 'id="step-07"'],
    ["/buying-guide", "/buying-a-home-guide", 'id="step-07"'],
    ["/selling-a-home-guide", "/selling-a-home-guide", 'id="step-07"'],
    ["/selling-guide", "/selling-a-home-guide", 'id="step-07"'],
  ];

  for (const [path, canonical, content] of pages) {
    const response = await worker.fetch(
      new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
      { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
      { waitUntil() {}, passThroughOnException() {} },
    );
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.ok(html.includes(content), `${path}: expected page content`);
    assert.match(
      html,
      new RegExp(`<link(?=[^>]*rel="canonical")(?=[^>]*href="https://realtorpavneetsingh\\.ca${canonical}")[^>]*>`),
      `${path}: canonical published URL`,
    );
    assert.ok(html.includes('href="/about-pavneet-singh"'), `${path}: About navigation`);
    assert.ok(html.includes('href="/buying-a-home-guide"'), `${path}: buyer navigation`);
    assert.ok(html.includes('href="/selling-a-home-guide"'), `${path}: seller navigation`);
  }
});
