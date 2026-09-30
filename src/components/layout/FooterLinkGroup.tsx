"use client";

import Link from "next/link";
import { useId, useState } from "react";
import type { NavLink } from "@/config/navigation";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

type FooterLinkGroupProps = {
  title: string;
  links: NavLink[];
  linkClassName: string;
};

/** Footer link column. Collapses into an accordion on phones; always expanded from `sm` up. */
export function FooterLinkGroup({ title, links, linkClassName }: FooterLinkGroupProps) {
  const [open, setOpen] = useState(false);
  const listId = useId();

  return (
    <div className="max-sm:border-t max-sm:border-white/15">
      <h2 className="mb-3.5 text-lg text-white max-sm:hidden">{title}</h2>
      <h2 className="text-lg text-white sm:hidden">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full cursor-pointer items-center justify-between py-4 text-left"
        >
          {title}
          <Icon
            name="chevron-down"
            size={20}
            className={cn("transition-[rotate] duration-200", open && "rotate-180")}
          />
        </button>
      </h2>

      {/* Animates height via grid rows; `invisible` keeps collapsed links out of the tab order. */}
      <div
        id={listId}
        className={cn(
          "grid transition-[grid-template-rows,visibility] duration-250 ease-in-out",
          open ? "grid-rows-[1fr]" : "max-sm:invisible max-sm:grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-3 max-sm:pb-5">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className={linkClassName}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
