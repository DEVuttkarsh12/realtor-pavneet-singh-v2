import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "../../data";
import { BlogArticlePage } from "../../components/InnerPages";
import { getSiteUrl } from "../../site-url";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ post: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ post: string }>;
}): Promise<Metadata> {
  const { post: slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const image = new URL(post.image, getSiteUrl()).toString();
  return {
    title: `${post.title} | Pavneet Singh`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "en_CA",
      images: [{ url: image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ post: string }> }) {
  const { post: slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  return <BlogArticlePage post={post} />;
}
