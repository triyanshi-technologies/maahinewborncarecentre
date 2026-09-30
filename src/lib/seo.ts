import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Route path, e.g. "/about-us". Used for the canonical URL. */
  path: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
  type = "website",
  noIndex = false,
}: PageMetadataInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title,
      description,
      url: path,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}
