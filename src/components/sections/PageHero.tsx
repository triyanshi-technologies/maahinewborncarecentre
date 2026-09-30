import type { BreadcrumbItem } from "@/lib/schema";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "./Breadcrumbs";

type PageHeroProps = {
  title: string;
  description: string;
  /** Trail after "Home"; the last item is the current page. */
  breadcrumbs: BreadcrumbItem[];
  image?: { src: string; alt: string };
};

/** Navy intro card used at the top of every inner page. */
export function PageHero({ title, description, breadcrumbs, image }: PageHeroProps) {
  return (
    <Section className="pt-8 pb-0">
      <div className="container">
        <div className="flex flex-col items-stretch gap-14 rounded-xl bg-navy px-[clamp(28px,5vw,72px)] py-[clamp(36px,5vw,64px)] md:flex-row md:items-center md:justify-between">
          <div className="flex max-w-175 flex-col gap-4.5">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, ...breadcrumbs]} />
            <h1 className="text-display-lg leading-[1.08] text-white">{title}</h1>
            <p className="text-xl text-on-navy">{description}</p>
          </div>
          {image && (
            <Photo
              src={image.src}
              alt={image.alt}
              tone="dark"
              preload
              sizes="(min-width: 1101px) 440px, (min-width: 961px) 320px, 100vw"
              className="h-62.5 w-full shrink-0 rounded-md md:w-80 lg:w-110"
            />
          )}
        </div>
      </div>
    </Section>
  );
}
