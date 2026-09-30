"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isActivePath, mainNav } from "@/config/navigation";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-12 cursor-pointer items-center justify-center rounded-sm border border-line bg-white text-navy md:hidden"
      >
        <Icon name="menu" />
      </button>

      <nav
        id="site-nav"
        aria-label="Main"
        className={cn(
          "flex items-center gap-8.5",
          "max-md:absolute max-md:inset-x-0 max-md:top-full max-md:flex-col max-md:items-stretch max-md:gap-4 max-md:border-b max-md:border-line max-md:bg-white max-md:px-6 max-md:pt-4 max-md:pb-6",
          "max-md:transition-[opacity,translate,visibility] max-md:duration-200",
          !open &&
            "max-md:pointer-events-none max-md:invisible max-md:-translate-y-2 max-md:opacity-0",
        )}
      >
        <ul className="flex gap-5 max-md:flex-col max-md:gap-0 lg:gap-6.5">
          {mainNav.map(({ label, href }) => {
            const active = isActivePath(pathname, href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={close}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block py-2.5 whitespace-nowrap no-underline max-md:border-b max-md:py-3.5 md:border-b-2",
                    active
                      ? "border-pink font-bold text-pink"
                      : "font-medium text-ink hover:text-pink max-md:border-line md:border-transparent",
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <ButtonLink href="/contact" onClick={close}>
          Book Appointment
          <Icon name="calendar" size={18} />
        </ButtonLink>
      </nav>
    </>
  );
}
