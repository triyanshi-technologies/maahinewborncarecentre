import { successStats } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Stack } from "@/components/ui/Typography";

export function SuccessStory() {
  return (
    <Section>
      <div className="container grid items-center gap-[clamp(40px,6vw,72px)] md:grid-cols-2">
        <Photo
          src="/images/team.jpg"
          alt="Baby discharge celebration with Team MAAHI"
          className="h-70 sm:h-120"
        />
        <Stack>
          <Eyebrow>Success stories</Eyebrow>
          <Heading>Every gram is a victory</Heading>
          <p>
            Team MAAHI recently celebrated the intact survival of a 26-week, 850-gram extremely low
            birth weight (ELBW) baby - without a single episode of sepsis throughout a 52-day NICU
            stay.
          </p>
          <dl className="grid gap-4 sm:grid-cols-3">
            {successStats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col rounded-md border border-line bg-white p-5.5"
              >
                <dt className="font-display text-5xl font-bold text-pink">{value}</dt>
                <dd className="text-sm text-muted">{label}</dd>
              </div>
            ))}
          </dl>
          <div>
            <ButtonLink href="/news" variant="navy">
              Read more stories
              <Icon name="arrow-right" size={18} />
            </ButtonLink>
          </div>
        </Stack>
      </div>
    </Section>
  );
}
