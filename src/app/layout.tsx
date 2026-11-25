import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { OpenPanelComponent } from "@openpanel/nextjs";
import { APP_VERSION, AUTHOR, DOWNLOAD_URL, OPENPANEL, SITE_NAME, SITE_URL } from "@/lib/site";
import { MotionProvider } from "@/components/MotionProvider";
import { DownloadModalProvider } from "@/components/DownloadModal";
import "./globals.css";
import "./motion.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const TITLE = "Tubo — A native Mac app for YouTube | Tabs, PiP & Liquid Glass";
const DESCRIPTION =
  "Tubo is a free, native macOS app for watching YouTube and YouTube Music. Browser-style tabs, Picture-in-Picture, media keys and a Liquid Glass look on macOS Tahoe.";
const OG_IMAGE = { url: "/og-image.jpg", width: 1200, height: 630, alt: "Tubo running on a MacBook" };

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  keywords: [
    "youtube app for mac",
    "youtube desktop app macos",
    "youtube picture in picture mac",
    "youtube music mac app",
    "youtube floating window mac",
    "youtube always on top mac",
    "liquid glass youtube",
    "macos youtube client",
  ],
  authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
  creator: AUTHOR.name,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  category: "Entertainment",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE.url] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  other: { "apple-mobile-web-app-title": SITE_NAME },
};

export const viewport: Viewport = { themeColor: "#0b0a0a" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  description: DESCRIPTION,
  url: SITE_URL,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "macOS 13 or later",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: { "@type": "Person", name: AUTHOR.name, url: AUTHOR.url },
  softwareVersion: APP_VERSION,
  downloadUrl: `${SITE_URL}${DOWNLOAD_URL}`,
  screenshot: `${SITE_URL}${OG_IMAGE.url}`,
  featureList: [
    "Browser-style tabs for YouTube and YouTube Music",
    "Native Picture-in-Picture",
    "Media keys and Now Playing",
    "Liquid Glass design on macOS Tahoe",
    "Always-on-top floating window",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <OpenPanelComponent
          {...OPENPANEL}
          trackScreenViews
          trackOutgoingLinks
          trackAttributes
        />
        <MotionProvider>
          <DownloadModalProvider>{children}</DownloadModalProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
