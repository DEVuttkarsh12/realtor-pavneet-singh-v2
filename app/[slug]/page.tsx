import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "../components/InnerPages";
import { canonicalPagePaths, pageAliases, pageMeta } from "../data";

export function generateStaticParams() {
  return [...Object.keys(pageMeta), ...Object.keys(pageAliases)].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pageSlug = pageAliases[slug] ?? slug;
  const meta = pageMeta[pageSlug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: canonicalPagePaths[pageSlug] ?? `/${pageSlug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: "en_CA",
      url: canonicalPagePaths[pageSlug] ?? `/${pageSlug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageSlug = pageAliases[slug] ?? slug;
  if (!pageMeta[pageSlug]) notFound();
  return <ContentPage slug={pageSlug} />;
}
