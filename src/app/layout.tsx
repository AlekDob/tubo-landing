import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://tubo.app";
const SITE_NAME = "Tubo";
const TITLE = "Tubo — Native YouTube App for macOS | PiP, Tabs & Liquid Glass";
const DESCRIPTION =
  "Tubo is a free native macOS YouTube desktop app with Picture-in-Picture, multi-tab browsing, media keys, and Liquid Glass UI. No Electron, no bloat — pure Apple performance.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  keywords: [
    "youtube app for mac",
    "youtube desktop app macos",
    "youtube wrapper mac",
    "youtube pip macos",
    "youtube picture in picture mac",
    "youtube native app mac",
    "youtube floating window mac",
    "youtube always on top mac",
    "youtube senza pubblicità mac",
    "app youtube macos",
    "liquid glass youtube",
    "macos youtube client",
  ],
  authors: [{ name: "Alek Dobrohotov" }],
  creator: "Alek Dobrohotov",
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  category: "Productivity",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "it_IT",
    url: "/",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tubo — Native YouTube App for macOS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  other: {
    "theme-color": "#0a0a0a",
    "apple-mobile-web-app-title": SITE_NAME,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  description: DESCRIPTION,
  url: SITE_URL,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "macOS 13+",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Alek Dobrohotov",
  },
  softwareVersion: "1.0",
  downloadUrl: `${SITE_URL}/#download`,
  featureList: [
    "Multi-Tab YouTube Browsing",
    "Picture-in-Picture (PiP)",
    "Native Media Keys & Now Playing",
    "Liquid Glass UI (macOS Tahoe)",
    "Zero External Dependencies",
    "Privacy-First — No Tracking",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
