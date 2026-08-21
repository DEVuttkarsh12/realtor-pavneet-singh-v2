import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyDetail } from "../../components/InnerPages";
import { properties } from "../../data";
import { getSiteUrl } from "../../site-url";

export function generateStaticParams() {
  return properties.map((property) => ({ property: property.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ property: string }>;
}): Promise<Metadata> {
  const { property: slug } = await params;
  const property = properties.find((item) => item.slug === slug);
  if (!property) return {};
  const title = `${property.title} | Pavneet Singh`;
  const description = `${property.location}. ${property.summary}`;
  const image = new URL(property.image, getSiteUrl()).toString();
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_CA",
      images: [{ url: image, alt: property.title }],
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
  params: Promise<{ property: string }>;
}) {
  const { property: slug } = await params;
  const property = properties.find((item) => item.slug === slug);
  if (!property) notFound();
  return <PropertyDetail property={property} />;
}
