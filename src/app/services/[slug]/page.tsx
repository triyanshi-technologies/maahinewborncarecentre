import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/content/services";
import { cn } from "@/lib/cn";
import { serviceSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import { EmergencyCard } from "@/components/sections/EmergencyCard";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { PointGrid } from "@/components/ui/Checklist";
import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Typography";

type ServicePageProps = PageProps<"/services/[slug]">;

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return createMetadata({
    ...service.seo,
    path: `/services/${service.slug}`,
    image: service.image.src,
  });
}

function ServicesSideNav({ currentSlug }: { currentSlug: string }) {
  return (
    <nav aria-label="All services" className="rounded-lg border border-line bg-white p-6">
      <h2 className="px-2 pt-1 pb-3 text-xl">All services</h2>
      <ul className="flex flex-col gap-2">
        {services.map(({ slug, navLabel }) => {
          const active = slug === currentSlug;
          return (
            <li key={slug}>
              <Link
                href={`/services/${slug}`}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-14 items-center justify-between rounded-2xl px-4.5 font-semibold no-underline",
                  active
                    ? "bg-navy text-white hover:text-white"
                    : "bg-ground text-ink hover:bg-sky hover:text-navy",
                )}
              >
                {navLabel}
                <Icon name="arrow-right" size={16} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <PageHero
        title={service.hero.title}
        description={service.hero.description}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.navLabel }]}
      />

      <Section>
        <div className="container grid items-start gap-10 md:grid-cols-[4fr_8fr]">
          <aside className="flex flex-col gap-6 max-md:order-2 md:sticky md:top-39">
            <ServicesSideNav currentSlug={service.slug} />
            <EmergencyCard />
          </aside>

          <article className="flex flex-col gap-7">
            <Photo
              src={service.image.src}
              alt={service.image.alt}
              preload
              sizes="(min-width: 961px) 66vw, 100vw"
              className="h-70 rounded-4xl sm:h-105"
            />
            <Heading size="md">{service.heading}</Heading>
            <p className="text-xl text-muted">{service.lead}</p>
            <h3 className="text-3xl">What&apos;s included</h3>
            <PointGrid items={service.features} />
            <div className="flex items-start gap-4.5 rounded-3xl bg-sky px-8 py-7">
              <IconTile icon="star" iconSize={22} tone="navy" size="sm" />
              <div>
                <h3 className="mb-1.5 text-xl text-navy">{service.highlight.title}</h3>
                <p>{service.highlight.text}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3.5">
              <ButtonLink href="/contact">
                Book an appointment
                <Icon name="calendar" size={18} />
              </ButtonLink>
              <ButtonLink href="/services" variant="outline">
                All services
                <Icon name="arrow-right" size={18} />
              </ButtonLink>
            </div>
          </article>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
