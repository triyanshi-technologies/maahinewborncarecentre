import { siteConfig } from "@/config/site";
import type { Doctor } from "@/content/doctors";
import type { Faq } from "@/content/faqs";
import type { Article } from "@/content/news";
import type { Service } from "@/content/services";
import { absoluteUrl } from "@/lib/seo";

export type BreadcrumbItem = { label: string; href?: string };

const organizationRef = { "@type": "MedicalClinic", name: siteConfig.name };

export function medicalClinicSchema() {
  const { address } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: siteConfig.name,
    alternateName: siteConfig.legalName,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/images/logo.png"),
    image: absoluteUrl(siteConfig.ogImage),
    telephone: siteConfig.phone.e164,
    email: siteConfig.email,
    foundingDate: String(siteConfig.foundingYear),
    medicalSpecialty: ["Neonatology", "Pediatrics"],
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: siteConfig.areaServed,
    sameAs: [siteConfig.social.facebook],
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function physicianSchema(doctor: Doctor) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    medicalSpecialty: "Neonatology",
    description: doctor.bio,
    image: absoluteUrl(doctor.image),
    url: absoluteUrl(`/our-doctors#${doctor.id}`),
    worksFor: organizationRef,
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.schemaName,
    description: service.seo.description,
    url: absoluteUrl(`/services/${service.slug}`),
  };
}

export function articleSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.seo.description,
    image: absoluteUrl(article.image.src),
    url: absoluteUrl(`/news/${article.slug}`),
    ...(article.publishedAt && { datePublished: article.publishedAt }),
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/images/logo.png") },
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href && { item: absoluteUrl(item.href) }),
    })),
  };
}
