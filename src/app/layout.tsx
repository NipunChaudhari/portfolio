import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { profile } from "@/data/profile";
import { SITE_URL } from "@/lib/site-config";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const SITE_TITLE = "Nipun Chaudhari — AI & Data Science Engineer";
const SITE_DESCRIPTION =
  "Portfolio of Chaudhari Nipun Pankaj — B.Tech AI & Data Science student, LLM intern at ethara.ai, and published AI researcher.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Nipun Chaudhari",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Nipun Chaudhari",
    "AI Engineer",
    "Machine Learning Engineer",
    "GenAI Developer",
    "LLM Engineer",
    "Sanjivani University",
    "AI Researcher",
    "IoT Developer",
  ],
  authors: [{ name: "Nipun Chaudhari" }],
  creator: "Nipun Chaudhari",
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Nipun Chaudhari — Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
};

// Person structured data (JSON-LD) — every field maps directly to verified
// resume/profile data, nothing invented (no fabricated image, birthDate, etc.)
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nipun Chaudhari",
  alternateName: "Chaudhari Nipun Pankaj",
  jobTitle: "AI & Data Science Student, LLM Intern",
  url: SITE_URL,
  sameAs: [`https://${profile.linkedin}`],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Sanjivani University",
  },
  worksFor: {
    "@type": "Organization",
    name: "ethara.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
