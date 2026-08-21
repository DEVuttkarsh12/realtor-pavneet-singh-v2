import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "../components/InnerPages";
import { pageMeta } from "../data";

export function generateStaticParams() {
  return Object.keys(pageMeta).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = pageMeta[slug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: "en_CA",
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
  if (!pageMeta[slug]) notFound();
  return <ContentPage slug={slug} />;
}
