import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: { absolute: `Page not found | ${siteConfig.name}` },
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="py-30 text-center">
      <div className="container flex flex-col items-center gap-5.5">
        <p
          aria-hidden="true"
          className="font-display text-display-2xl leading-none font-bold text-sky-strong"
        >
          404
        </p>
        <h1 className="text-h1">This page has wandered off</h1>
        <p className="max-w-140 text-lg text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved. If you need urgent
          newborn care, please call <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <ButtonLink href="/">
            Back to home
            <Icon name="arrow-right" size={18} />
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Contact us
            <Icon name="arrow-right" size={18} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
