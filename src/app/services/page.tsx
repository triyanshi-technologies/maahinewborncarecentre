import type { IconName } from "@/components/ui/Icon";
import { createMetadata } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { IconTile } from "@/components/ui/IconTile";
import { Section, SectionHeader, SectionHeaderAside } from "@/components/ui/Section";

export const metadata = createMetadata({
  title: "Neonatal & Paediatric Services in Rajkot | MAAHI",
  description:
    "Level III NICU, neonatal surgery care, High Risk OPD, OPD & vaccination, NICU on Wheels transport and bedside ultrasound in Rajkot.",
  path: "/services",
});

const emergencySteps: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "phone",
    title: "Call our 24×7 line",
    text: "Dial +91 78787 85108. A neonatologist speaks with the referring doctor or family immediately.",
  },
  {
    icon: "ambulance",
    title: "NICU on Wheels is dispatched",
    text: "Our neonatal ambulance reaches you with a neonatologist on board to stabilise the baby.",
  },
  {
    icon: "cross",
    title: "Direct NICU admission",
    text: "Your baby is admitted straight into our Level III NICU - no emergency-room detour.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Neonatal & paediatric services in Rajkot"
        description="Level III NICU, neonatal surgery care, high-risk follow-up, OPD and vaccination, NICU on Wheels and bedside ultrasound - all led by neonatologists."
        breadcrumbs={[{ label: "Services" }]}
        image={{ src: "/images/nicu-image.jpg", alt: "NICU incubator care" }}
      />

      <Section>
        <div className="container">
          <SectionHeader
            eyebrow="What we offer"
            title="Specialised care for every stage of your baby's journey"
            aside={
              <SectionHeaderAside>
                <p>
                  Select a service to see what it includes, the equipment we use and how to reach
                  our team.
                </p>
              </SectionHeaderAside>
            }
          />
          <ServiceCards />
        </div>
      </Section>

      <Section tone="white">
        <div className="container">
          <SectionHeader
            align="center"
            eyebrow="In an emergency"
            title="How to reach MAAHI when every minute counts"
          />
          <ol className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {emergencySteps.map(({ icon, title, text }, index) => (
              <li key={title} className="flex flex-col gap-4 rounded-lg bg-ground p-9">
                <div className="flex items-center justify-between">
                  <IconTile icon={icon} tone="navy" />
                  <span className="font-display text-7xl font-bold text-sky-strong">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-2xl">{title}</h3>
                <p className="text-base text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
