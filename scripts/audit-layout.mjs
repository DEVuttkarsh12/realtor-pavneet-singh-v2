import { mkdir, writeFile } from "node:fs/promises";

const baseUrl = process.env.AUDIT_BASE_URL ?? "http://127.0.0.1:3010";
const debugUrl = process.env.CHROME_DEBUG_URL ?? "http://127.0.0.1:9222";
const mode = process.argv[2] ?? "all";
const saveScreenshots = process.argv.includes("--screenshots");
const fullScreenshots = process.argv.includes("--full");

const allRoutes = [
  "/",
  "/invest",
  "/commercial-real-estate",
  "/submit-opportunity",
  "/transactions",
  "/media",
  "/intelligence",
  "/about",
  "/industrial",
  "/multifamily",
  "/development-land",
  "/residential",
  "/guides",
  "/neighbourhoods",
  "/properties",
  "/blog",
  "/buying-guide",
  "/selling-guide",
  "/services",
  "/contact",
  "/privacy-policy",
  "/terms",
];

const representativeRoutes = [
  "/",
  "/invest",
  "/submit-opportunity",
  "/commercial-real-estate",
  "/transactions",
  "/media",
  "/contact",
  "/properties",
  "/about",
  "/development-land",
  "/residential",
];

const cases = mode === "single"
  ? [{
      name: process.env.AUDIT_NAME ?? "single",
      width: Number(process.env.AUDIT_WIDTH ?? 390),
      height: Number(process.env.AUDIT_HEIGHT ?? 844),
      routes: [process.env.AUDIT_ROUTE ?? "/owners"],
    }]
  : mode === "mobile"
  ? [{ name: "mobile", width: 390, height: 844, routes: allRoutes }]
  : mode === "responsive"
    ? [
        { name: "tablet", width: 768, height: 900, routes: representativeRoutes },
        { name: "desktop", width: 1280, height: 900, routes: representativeRoutes },
      ]
    : mode === "smoke"
      ? [{ name: "smoke", width: 390, height: 844, routes: ["/", "/owners"] }]
      : [
          { name: "mobile", width: 390, height: 844, routes: allRoutes },
          { name: "tablet", width: 768, height: 900, routes: representativeRoutes },
          { name: "desktop", width: 1280, height: 900, routes: representativeRoutes },
        ];

class CdpClient {
  constructor(url) {
    this.url = url;
    this.id = 0;
    this.pending = new Map();
    this.waiters = new Map();
  }

  async connect() {
    this.socket = new WebSocket(this.url);
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error("Timed out connecting to Chrome")), 10_000);
      this.socket.addEventListener("open", () => {
        clearTimeout(timeout);
        resolve();
      }, { once: true });
      this.socket.addEventListener("error", reject, { once: true });
    });
    this.socket.addEventListener("message", ({ data }) => {
      const message = JSON.parse(data);
      if (message.id) {
        const request = this.pending.get(message.id);
        if (!request) return;
        this.pending.delete(message.id);
        if (message.error) request.reject(new Error(message.error.message));
        else request.resolve(message.result);
        return;
      }
      const waiters = this.waiters.get(message.method);
      if (!waiters?.length) return;
      this.waiters.set(message.method, []);
      for (const waiter of waiters) waiter(message.params);
    });
  }

  send(method, params = {}) {
    const id = ++this.id;
    this.socket.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`Timed out waiting for ${method}`));
      }, 120_000);
      this.pending.set(id, {
        resolve: (value) => {
          clearTimeout(timeout);
          resolve(value);
        },
        reject: (error) => {
          clearTimeout(timeout);
          reject(error);
        },
      });
    });
  }

  waitFor(method, timeoutMs = 120_000) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error(`Timed out waiting for ${method}`)), timeoutMs);
      const waiter = (params) => {
        clearTimeout(timeout);
        resolve(params);
      };
      this.waiters.set(method, [...(this.waiters.get(method) ?? []), waiter]);
    });
  }

  close() {
    this.socket.close();
  }
}

const auditExpression = String.raw`
(async () => {
  await document.fonts.ready;
  await Promise.all(Array.from(document.images, (image) => {
    if (image.complete) return Promise.resolve();
    return new Promise((resolve) => {
      image.addEventListener("load", resolve, { once: true });
      image.addEventListener("error", resolve, { once: true });
      setTimeout(resolve, 2500);
    });
  }));

  const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  for (let y = 0; y < document.documentElement.scrollHeight; y += Math.max(600, innerHeight * 0.8)) {
    scrollTo(0, y);
    await pause(20);
  }
  scrollTo(0, 0);
  await pause(500);

  const selector = (element) => {
    if (!element) return "unknown";
    if (element.id) return "#" + element.id;
    const classes = Array.from(element.classList ?? []).slice(0, 3);
    return element.tagName.toLowerCase() + (classes.length ? "." + classes.join(".") : "");
  };
  const visible = (element) => {
    const rect = element.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return false;
    const closedDetails = element.closest("details:not([open])");
    if (closedDetails && !element.closest("summary")) return false;
    for (let current = element; current; current = current.parentElement) {
      const style = getComputedStyle(current);
      if (
        current.getAttribute("aria-hidden") === "true" ||
        style.display === "none" ||
        style.visibility === "hidden" ||
        Number(style.opacity) <= 0
      ) return false;
    }
    return true;
  };
  const directText = (element) => Array.from(element.childNodes)
    .filter((node) => node.nodeType === Node.TEXT_NODE)
    .map((node) => node.textContent.trim())
    .filter(Boolean)
    .join(" ");
  const summarize = (text) => text.replace(/\s+/g, " ").trim().slice(0, 80);
  const elements = Array.from(document.body.querySelectorAll("*"));
  const textElements = elements.filter((element) => visible(element) && directText(element));

  const smallText = textElements
    .map((element) => ({
      selector: selector(element),
      text: summarize(directText(element)),
      size: Number.parseFloat(getComputedStyle(element).fontSize),
    }))
    .filter((item) => item.size < 10.95)
    .slice(0, 12);

  const tightLineHeight = textElements
    .map((element) => {
      const style = getComputedStyle(element);
      const fontSize = Number.parseFloat(style.fontSize);
      const lineHeight = Number.parseFloat(style.lineHeight);
      return { selector: selector(element), text: summarize(directText(element)), ratio: lineHeight / fontSize };
    })
    .filter((item) => Number.isFinite(item.ratio) && item.ratio < 0.99)
    .slice(0, 12);

  const horizontalEscape = textElements
    .filter((element) => !element.closest(".motion-ribbon"))
    .filter((element) => {
      for (let current = element.parentElement; current && current !== document.body; current = current.parentElement) {
        if (["auto", "scroll"].includes(getComputedStyle(current).overflowX)) return false;
      }
      return true;
    })
    .map((element) => {
      const rect = element.getBoundingClientRect();
      return { selector: selector(element), text: summarize(directText(element)), left: rect.left, right: rect.right };
    })
    .filter((item) => item.left < -1 || item.right > innerWidth + 1)
    .slice(0, 12);

  const nowrapOverflow = textElements
    .filter((element) => getComputedStyle(element).whiteSpace === "nowrap" && element.scrollWidth > element.clientWidth + 1)
    .map((element) => ({
      selector: selector(element),
      text: summarize(directText(element)),
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
    }))
    .slice(0, 12);

  const textRects = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const text = node.textContent.replace(/\s+/g, " ").trim();
    const parent = node.parentElement;
    if (!text || !parent || !visible(parent) || parent.closest(".motion-ribbon, .mobile-contact-bar")) continue;
    const range = document.createRange();
    range.selectNodeContents(node);
    for (const rect of range.getClientRects()) {
      if (rect.width < 1 || rect.height < 1) continue;
      textRects.push({ parent, text: summarize(text), rect });
    }
  }

  const collisions = [];
  for (let a = 0; a < textRects.length && collisions.length < 12; a += 1) {
    for (let b = a + 1; b < textRects.length && collisions.length < 12; b += 1) {
      const first = textRects[a];
      const second = textRects[b];
      if (first.parent === second.parent || first.parent.contains(second.parent) || second.parent.contains(first.parent)) continue;
      const firstHeading = first.parent.closest("h1, h2, h3, h4");
      const secondHeading = second.parent.closest("h1, h2, h3, h4");
      if (firstHeading && firstHeading === secondHeading) continue;
      const overlapX = Math.min(first.rect.right, second.rect.right) - Math.max(first.rect.left, second.rect.left);
      const overlapY = Math.min(first.rect.bottom, second.rect.bottom) - Math.max(first.rect.top, second.rect.top);
      if (overlapX > 1.5 && overlapY > 1.5) {
        collisions.push({
          first: selector(first.parent) + ": " + first.text,
          second: selector(second.parent) + ": " + second.text,
          overlapX: Math.round(overlapX),
          overlapY: Math.round(overlapY),
          top: Math.round(Math.min(first.rect.top, second.rect.top) + scrollY),
        });
      }
    }
  }

  const brokenImages = Array.from(document.images)
    .filter((image) => image.complete && image.naturalWidth === 0)
    .map((image) => image.currentSrc || image.src)
    .slice(0, 12);

  const overlay = document.querySelector("[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay");
  return {
    title: document.title,
    textLength: document.body.innerText.trim().length,
    interactiveCount: document.querySelectorAll("a, button, input, select, textarea").length,
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: document.documentElement.clientWidth,
    documentHeight: document.documentElement.scrollHeight,
    overlay: overlay ? summarize(overlay.textContent) : null,
    smallText,
    tightLineHeight,
    horizontalEscape,
    nowrapOverflow,
    collisions,
    brokenImages,
  };
})()
`;

async function main() {
  const targets = await fetch(`${debugUrl}/json/list`).then((response) => response.json());
  const target = targets.find((item) => item.type === "page");
  if (!target?.webSocketDebuggerUrl) throw new Error("No Chrome page target is available");

  const cdp = new CdpClient(target.webSocketDebuggerUrl);
  await cdp.connect();
  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  await cdp.send("Network.enable");
  await cdp.send("Emulation.setEmulatedMedia", {
    media: "screen",
    features: [{ name: "prefers-reduced-motion", value: "reduce" }],
  });

  const consoleErrors = [];
  cdp.socket.addEventListener("message", ({ data }) => {
    const message = JSON.parse(data);
    if (message.method === "Runtime.exceptionThrown") {
      consoleErrors.push(message.params.exceptionDetails?.text ?? "Runtime exception");
    }
    if (message.method === "Runtime.consoleAPICalled" && message.params.type === "error") {
      consoleErrors.push(message.params.args.map((arg) => arg.value ?? arg.description ?? "").join(" "));
    }
  });

  const results = [];
  for (const viewport of cases) {
    await cdp.send("Emulation.setDeviceMetricsOverride", {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: 1,
      mobile: viewport.width < 600,
      screenWidth: viewport.width,
      screenHeight: viewport.height,
    });

    for (const route of viewport.routes) {
      consoleErrors.length = 0;
      const loaded = cdp.waitFor("Page.loadEventFired");
      const navigation = await cdp.send("Page.navigate", { url: `${baseUrl}${route}` });
      if (navigation.errorText) throw new Error(`${route}: ${navigation.errorText}`);
      await loaded;
      const evaluation = await cdp.send("Runtime.evaluate", {
        expression: auditExpression,
        awaitPromise: true,
        returnByValue: true,
      });
      if (evaluation.exceptionDetails) {
        throw new Error(`${route}: ${evaluation.exceptionDetails.text}`);
      }
      const value = evaluation.result.value;
      const result = {
        viewport: viewport.name,
        route,
        ...value,
        consoleErrors: [...consoleErrors],
      };
      results.push(result);
      console.log(JSON.stringify(result));

      if (saveScreenshots && representativeRoutes.includes(route)) {
        const capture = await cdp.send("Page.captureScreenshot", {
          format: "png",
          fromSurface: true,
          captureBeyondViewport: fullScreenshots,
        });
        const directory = `/tmp/pavneet-layout-audit/${viewport.name}`;
        await mkdir(directory, { recursive: true });
        const filename = route === "/" ? "home" : route.slice(1).replaceAll("/", "--");
        await writeFile(`${directory}/${filename}.png`, Buffer.from(capture.data, "base64"));
      }
    }
  }

  const failures = results.filter((result) =>
    !result.textLength ||
    result.overlay ||
    result.documentWidth > result.viewportWidth + 1 ||
    result.smallText.length ||
    result.tightLineHeight.length ||
    result.horizontalEscape.length ||
    result.nowrapOverflow.length ||
    result.collisions.length ||
    result.brokenImages.length ||
    result.consoleErrors.length
  );
  console.log(JSON.stringify({ summary: { checked: results.length, failed: failures.length } }));
  cdp.close();
  if (failures.length) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error.stack ?? error);
  process.exitCode = 1;
});
