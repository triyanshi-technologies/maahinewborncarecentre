import type { IconName } from "@/components/ui/Icon";
import { createMetadata } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import { FacilitiesGrid } from "@/components/sections/FacilitiesGrid";
import { PageHero } from "@/components/sections/PageHero";
import { IconTile } from "@/components/ui/IconTile";
import { Photo } from "@/components/ui/Photo";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Eyebrow, Heading, Stack } from "@/components/ui/Typography";

export const metadata = createMetadata({
  title: "About MAAHI | Exclusive Neonatal Centre, Rajkot",
  description:
    "MAAHI (Medical Academy and Advanced Healthcare Institute) has cared for Saurashtra's newborns since 2015 with a 42-bed Level III NICU.",
  path: "/about-us",
});

const values: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "clock",
    title: "Expert care, round the clock",
    text: "Four neonatologists share 24 × 7 × 365 cover, so a specialist is always at the bedside.",
  },
  {
    icon: "cross",
    title: "Technology first in the region",
    text: "From inhaled nitric oxide to whole-body cooling, we bring advanced therapies to Saurashtra.",
  },
  {
    icon: "book",
    title: "An academy for newborn care",
    text: "Our doctors are active in academics and training, including the Navjaat Shishu Suraksha Karyakram (NSSK).",
  },
];

const gallery = [
  { src: "/images/reception.jpg", alt: "Reception and waiting area" },
  { src: "/images/nicu-image.jpg", alt: "NICU incubators" },
  { src: "/images/nicu-on-wheels-ambulance.jpg", alt: "NICU on Wheels ambulance" },
  { src: "/images/team-2.jpg", alt: "Team MAAHI" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About MAAHI Newborn Care Centre"
        description="The first dedicated, exclusive neonatal centre of Saurashtra and Kutch - caring for Rajkot's newborns since 2015."
        breadcrumbs={[{ label: "About Us" }]}
        image={{ src: "/images/maahi-building.jpg", alt: "MAAHI Newborn Care Centre building" }}
      />

      <Section>
        <div className="container grid items-center gap-[clamp(40px,6vw,72px)] md:grid-cols-2">
          <Stack>
            <Eyebrow>Our story</Eyebrow>
            <Heading>Built for one purpose: the best start in life for every newborn</Heading>
            <p>
              MAAHI Newborn Care Centre was established in 2015 as the first exclusive neonatal
              centre in Saurashtra and Kutch. Today we run a spacious 42-bed Level III nursery,
              equipped with every major life-support technology a sick or premature baby may need.
            </p>
            <p>
              Our centre is led by four full-time neonatologists - each fellowship-trained in
              neonatology - who are available 24 × 7 × 365. Together they have cared for babies
              weighing as little as 500 grams.
            </p>
          </Stack>
          <div className="grid gap-6 sm:grid-cols-2">
            <Photo
              src="/images/nicu-ward.jpg"
              alt="Level III NICU ward"
              sizes="(min-width: 961px) 25vw, (min-width: 641px) 50vw, 100vw"
              className="h-70 sm:h-120"
            />
            <div className="flex flex-col gap-5">
              <Photo
                src="/images/team.jpg"
                alt="Nursing team at work"
                sizes="(min-width: 961px) 25vw, (min-width: 641px) 50vw, 100vw"
                className="h-57.5"
              />
              <Photo
                src="/images/hero-mother-newborn.jpg"
                alt="Mother and newborn receiving care"
                sizes="(min-width: 961px) 25vw, (min-width: 641px) 50vw, 100vw"
                className="h-57.5"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <div className="flex flex-col gap-11 rounded-[40px] bg-navy p-[clamp(32px,5vw,72px)]">
            <SectionHeader
              align="center"
              tone="light"
              eyebrow="What MAAHI stands for"
              title="Medical Academy and Advanced Healthcare Institute"
              description="MAAHI is not just a hospital but an institute - where advanced clinical care and continuous learning go hand in hand."
              className="mb-0"
            />
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {values.map(({ icon, title, text }) => (
                <div
                  key={title}
                  className="flex flex-col gap-3.5 rounded-lg border border-white/14 bg-white/7 p-8.5"
                >
                  <IconTile icon={icon} iconSize={26} tone="solid-pink" />
                  <h3 className="text-2xl text-white">{title}</h3>
                  <p className="text-base text-on-dark">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <SectionHeader
            eyebrow="Facilities"
            title="Everything a critically ill newborn needs, in-house"
          />
          <FacilitiesGrid />
        </div>
      </Section>

      <Section>
        <div className="container">
          <Heading size="md" className="mb-8">
            Inside MAAHI
          </Heading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map(({ src, alt }) => (
              <Photo
                key={alt}
                src={src}
                alt={alt}
                sizes="(min-width: 1101px) 25vw, (min-width: 641px) 50vw, 100vw"
                className="h-65"
              />
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
