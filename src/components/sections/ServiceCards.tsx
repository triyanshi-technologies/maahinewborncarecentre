import Link from "next/link";
import { services } from "@/content/services";
import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";

export function ServiceCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {services.map(({ slug, icon, card }) => (
        <Link
          key={slug}
          href={`/services/${slug}`}
          className="flex min-h-72.5 flex-col gap-4.5 rounded-lg border border-line bg-white p-8.5 text-ink no-underline transition-[border-color,translate] duration-200 hover:-translate-y-0.75 hover:border-navy hover:text-ink"
        >
          <IconTile icon={icon} />
          <h3 className="text-3xl leading-[1.25]">{card.title}</h3>
          <p className="grow text-base text-muted">{card.description}</p>
          <span className="inline-flex items-center gap-2 text-md font-bold text-pink">
            Learn more
            <Icon name="arrow-right" size={16} />
          </span>
        </Link>
      ))}
    </div>
  );
}
