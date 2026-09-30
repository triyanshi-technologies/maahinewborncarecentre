import Link from "next/link";
import { cn } from "@/lib/cn";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  tone?: "light" | "dark";
  className?: string;
};

/** Visible breadcrumb trail plus matching BreadcrumbList structured data. */
export function Breadcrumbs({ items, tone = "light", className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <JsonLd data={breadcrumbSchema(items)} />
      <ol
        className={cn(
          "flex flex-wrap gap-2.5 text-md",
          tone === "light" ? "text-on-dark" : "justify-center text-muted",
        )}
      >
        {items.map(({ label, href }) => (
          <li key={label} className="not-first:before:mr-2.5 not-first:before:content-['/']">
            {href ? (
              <Link
                href={href}
                className={cn(
                  "font-semibold no-underline",
                  tone === "light" ? "text-white" : "text-navy",
                )}
              >
                {label}
              </Link>
            ) : (
              <span aria-current="page">{label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
