import Link from "next/link";
import { footerQuickLinks } from "@/config/navigation";
import { mailtoHref, siteConfig } from "@/config/site";
import { services } from "@/content/services";
import { Icon } from "@/components/ui/Icon";

const linkClass = "text-on-dark no-underline hover:text-white";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="mb-3.5 text-lg text-white">{title}</h2>
      <ul className="flex flex-col gap-3">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link href={href} className={linkClass}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const { address } = siteConfig;
  const serviceLinks = services.map(({ navLabel, slug }) => ({
    label: navLabel,
    href: `/services/${slug}`,
  }));

  return (
    <footer className="bg-navy-dark pt-18 pb-8 text-md text-on-dark">
      <div className="container">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="flex flex-col items-start gap-4.5 sm:col-span-2 md:col-span-1">
            <Link
              href="/"
              aria-label={`${siteConfig.shortName} home`}
              className="flex items-center gap-3 no-underline"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-pink text-white">
                <Icon name="heart" size={26} />
              </span>
              <strong className="font-display text-4xl leading-none tracking-[0.04em] text-white">
                {siteConfig.shortName}
              </strong>
            </Link>
            <p className="max-w-100 leading-[1.7]">
              {siteConfig.legalName} - Rajkot&apos;s exclusive Level III neonatal centre serving
              Saurashtra and Kutch since {siteConfig.foundingYear}.
            </p>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MAAHI on Facebook"
              className="flex size-11 items-center justify-center rounded-full border border-white/30 text-white hover:text-white"
            >
              <Icon name="facebook" size={18} />
            </a>
          </div>

          <FooterColumn title="Quick links" links={footerQuickLinks} />
          <FooterColumn title="Services" links={serviceLinks} />

          <div>
            <h2 className="mb-3.5 text-lg text-white">Reach us</h2>
            <address className="flex flex-col gap-3 leading-[1.6] not-italic">
              <p>
                {address.street} ({address.landmark}), {address.city}, {address.region}{" "}
                {address.postalCode}
              </p>
              <p>
                <a href={siteConfig.phone.href} className="font-bold text-white no-underline">
                  {siteConfig.phone.display}
                </a>
              </p>
              <p>
                <a href={mailtoHref} className={linkClass}>
                  {siteConfig.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-white/15 pt-6 text-sm max-sm:flex-col">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}, {address.city}. All rights reserved.
          </p>
          <p className="flex gap-6">
            <Link href="/privacy-policy" className={linkClass}>
              Privacy Policy
            </Link>
            <a href="/sitemap.xml" className={linkClass}>
              Sitemap
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
