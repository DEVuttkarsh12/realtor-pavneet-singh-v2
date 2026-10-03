import Image from "next/image";
import type { ComponentProps } from "react";

const dimensions: Record<string, [number, number]> = {
  "halifax-aerial.jpg": [1600, 1200],
  "halifax-hero-poster.webp": [1440, 810],
  "nova-scotia-coast.webp": [1024, 1024],
  "home-exterior.jpg": [1600, 1067],
  "interior-kitchen.jpg": [1600, 1067],
  "commercial.jpg": [1600, 1068],
  "industrial.jpg": [1600, 2397],
  "development.jpg": [1600, 900],
  "pavneet-studio-portrait.jpg": [1361, 1600],
  "pavneet-community-in-action.jpg": [1537, 2048],
  "pavneet-community-leadership.jpg": [1200, 1200],
  "pavneet-community.jpg": [1200, 832],
  "pavneet-transparent-headshot.png": [330, 330],
  "pavneet-official-headshot.jpg": [330, 330],
};

type Props = Omit<ComponentProps<typeof Image>, "src" | "width" | "height"> & { src: string };

// Vinext serves these local assets directly; intrinsic dimensions preserve their framing.
export default function SiteImage({ src, alt, loading = "lazy", ...props }: Props) {
  const [width, height] = dimensions[src.split("/").pop() ?? ""] ?? [1600, 900];
  return <Image {...props} src={src} alt={alt} width={width} height={height} unoptimized loading={loading} />;
}
