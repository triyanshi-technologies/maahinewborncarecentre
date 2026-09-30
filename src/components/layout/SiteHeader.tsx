import Image from "next/image";
import Link from "next/link";
import { mailtoHref, siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import { SiteNav } from "./SiteNav";

function TopBar() {
  return (
    <div className="bg-navy-dark text-sm text-white">
      <div className="container flex min-h-11 items-center justify-between gap-4">
        {/* Phones: one line with a short label and the number as a call pill on the right. */}
        <p className="flex min-w-0 items-center gap-2.5 max-sm:flex-1 max-sm:justify-between max-sm:text-xs">
          <span className="flex min-w-0 items-center gap-2.5">
            <span className="shrink-0 rounded-full bg-pink px-2.5 py-0.75 text-2xs font-bold">
              24x7
            </span>
            {/* Very small screens show only the badge and the call pill. */}
            <span className="truncate max-[23rem]:hidden sm:hidden">Neonatal emergency</span>
            <span className="max-sm:hidden">Neonatal Emergency &amp; NICU on Wheels:</span>
          </span>
          <a
            href={siteConfig.phone.href}
            className="inline-flex shrink-0 items-center gap-1.5 font-bold text-white no-underline hover:text-white max-sm:rounded-full max-sm:bg-white/10 max-sm:px-3 max-sm:py-1.5 max-sm:hover:no-underline"
          >
            <Icon name="phone" size={14} className="sm:hidden" />
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
