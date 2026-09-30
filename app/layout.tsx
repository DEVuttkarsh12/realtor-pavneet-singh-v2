import type { Metadata } from "next";
import { getSiteUrl } from "./site-url";
import "./globals.css";

const siteUrl = getSiteUrl();
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pavneet Singh",
  jobTitle: "REALTOR®",
  url: siteUrl.toString(),
  telephone: "+1-902-809-9399",
  worksFor: { "@type": "Organization", name: "Sutton Group Professional Realty" },
  areaServed: { "@type": "AdministrativeArea", name: "Nova Scotia" },
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Pavneet Singh | Nova Scotia Real Estate Advisor",
  description:
    "Investment, commercial, development land and residential real estate representation across Nova Scotia with Pavneet Singh, REALTOR® at Sutton Group Professional Realty.",
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
    title: "Pavneet Singh | Nova Scotia Real Estate Advisor",
    description:
      "Real estate strategy for people building something bigger. Investment, commercial, development land and residential representation across Nova Scotia.",
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Pavneet Singh Real Estate",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Pavneet Singh, Nova Scotia Real Estate Advisor.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavneet Singh | Nova Scotia Real Estate Advisor",
    description: "Investment, commercial, development land and residential representation across Nova Scotia.",
    images: ["/og.png"],
  },
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />{children}</body>
    </html>
  );
}
