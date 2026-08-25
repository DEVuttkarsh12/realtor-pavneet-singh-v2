import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OpportunityDetail } from "../../components/InnerPages";
import { opportunities } from "../../data";
import { getSiteUrl } from "../../site-url";

export function generateStaticParams() {
  return opportunities.map((opportunity) => ({ opportunity: opportunity.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ opportunity: string }>;
}): Promise<Metadata> {
  const { opportunity: slug } = await params;
  const opportunity = opportunities.find((item) => item.slug === slug);
  if (!opportunity) return {};
  const title = `${opportunity.title} | Pavneet Singh`;
  const description = `${opportunity.location}. ${opportunity.summary}`;
  const image = new URL(opportunity.image, getSiteUrl()).toString();
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_CA",
      images: [{ url: image, alt: opportunity.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ opportunity: string }>;
}) {
  const { opportunity: slug } = await params;
  const opportunity = opportunities.find((item) => item.slug === slug);
  if (!opportunity) notFound();
  return <OpportunityDetail opportunity={opportunity} />;
}
