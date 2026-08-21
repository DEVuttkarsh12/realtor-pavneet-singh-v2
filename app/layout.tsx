import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pavneet-singh-realtor.criyx-ai.chatgpt.site"),
  title: "Pavneet Singh | Nova Scotia Realtor",
  description:
    "Residential, investment, commercial, land, and relocation guidance across Nova Scotia with Pavneet Singh, REALTOR®.",
  applicationName: "Pavneet Singh Real Estate",
  keywords: [
    "Nova Scotia realtor",
    "Halifax real estate",
    "Pavneet Singh realtor",
    "Nova Scotia investment property",
    "Halifax homes",
  ],
  icons: {
    icon: "/images/pavneet-logo-icon.png",
    shortcut: "/images/pavneet-logo-icon.png",
    apple: "/images/pavneet-logo-icon.png",
  },
  openGraph: {
    title: "Pavneet Singh | Nova Scotia Realtor",
    description:
      "Your next move, made with clarity. Real estate guidance across Nova Scotia.",
    type: "website",
    locale: "en_CA",
    url: "https://pavneet-singh-realtor.criyx-ai.chatgpt.site",
    siteName: "Pavneet Singh Real Estate",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Pavneet Singh. Your next move, made with clarity.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavneet Singh | Nova Scotia Realtor",
    description: "Your next move, made with clarity.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  );
}
