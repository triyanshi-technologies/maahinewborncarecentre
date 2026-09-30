import { aboutHighlights } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { Checklist } from "@/components/ui/Checklist";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Stack } from "@/components/ui/Typography";
import { StatTile } from "./StatTile";

const collageSizes = "(min-width: 961px) 25vw, (min-width: 641px) 50vw, 100vw";

export function AboutSection() {
  return (
    <Section>
      <div className="container grid items-center gap-[clamp(40px,6vw,72px)] md:grid-cols-2">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-5">
            <Photo
              src="/images/level-3-nursery.jpg"
              alt="Level III nursery at MAAHI"
              sizes={collageSizes}
              className="h-80"
            />
            <StatTile />
          </div>
          <div className="flex flex-col gap-5 sm:pt-15">
            <Photo
              src="/images/nicu-image.jpg"
              alt="Neonatologist examining a newborn"
              sizes={collageSizes}
              className="h-70 sm:h-110"
            />
          </div>
        </div>

        <Stack>
          <Eyebrow>About MAAHI</Eyebrow>
          <Heading>
            Not just a hospital - a Medical Academy and Advanced Healthcare Institute
          </Heading>
          <p>
            MAAHI stands for Medical Academy and Advanced Healthcare Institute. Established in 2015
            as the first exclusive neonatal centre in Saurashtra and Kutch, we combine a fully
            equipped Level III NICU with a team of neonatologists who are available 24 × 7 × 365.
          </p>
          <Checklist items={aboutHighlights} />
          <div>
            <ButtonLink href="/about-us" variant="navy">
              Discover our story
              <Icon name="arrow-right" size={18} />
            </ButtonLink>
          </div>
        </Stack>
      </div>
    </Section>
  );
}
