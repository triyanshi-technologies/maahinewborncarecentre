import Image from "next/image";
import Link from "next/link";
import { mailtoHref, siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import { SiteNav } from "./SiteNav";

function TopBar() {
  return (
    <div className="bg-navy-dark text-sm text-white">
      <div className="container flex min-h-11 items-center justify-between gap-4">
        <p className="flex flex-wrap items-center gap-2.5 max-sm:py-2 max-sm:text-xs">
          <span className="rounded-full bg-pink px-2.5 py-0.75 text-2xs font-bold">24×7</span>
          Neonatal Emergency &amp; NICU on Wheels:
          <a href={siteConfig.phone.href} className="font-bold text-white no-underline">
            {siteConfig.phone.display}
          </a>
        </p>
        <p className="hidden gap-6 text-on-dark md:flex">
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-2 font-medium text-on-dark no-underline"
          >
            <Icon name="mail" size={16} />
            {siteConfig.email}
          </a>
          <span className="hidden items-center gap-2 font-medium lg:inline-flex">
            <Icon name="map-pin" size={16} />
            {siteConfig.address.short}
          </span>
        </p>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <TopBar />
      <div className="border-b border-line">
        <div className="relative container flex min-h-22 items-center justify-between gap-6">
          <Link href="/" aria-label={`${siteConfig.name} home`} className="flex items-center">
            <Image
              src="/images/logo.png"
              alt=""
              width={180}
              height={53}
              preload
              className="h-12 w-auto"
            />
          </Link>
          <SiteNav />
        </div>
      </div>
    </header>
  );
}
