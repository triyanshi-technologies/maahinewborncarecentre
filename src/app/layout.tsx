import type { Metadata, Viewport } from "next";
import { Figtree, Outfit } from "next/font/google";
import { siteConfig } from "@/config/site";
import { medicalClinicSchema } from "@/lib/schema";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Level III NICU in Rajkot`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [{ url: siteConfig.ogImage }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${figtree.variable} ${outfit.variable}`}>
      <body>
        <a
          href="#main"
          className="absolute top-2 left-[-9999px] z-100 rounded-lg bg-navy px-4 py-2.5 text-white focus:left-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <ScrollReveal />
        <JsonLd data={medicalClinicSchema()} />
      </body>
    </html>
  );
}
