export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Our Doctors", href: "/our-doctors" },
  { label: "News & Stories", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Doctors", href: "/our-doctors" },
  { label: "News & Stories", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
