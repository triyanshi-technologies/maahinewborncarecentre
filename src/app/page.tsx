import { siteConfig } from "@/config/site";
import { keyStats } from "@/content/home";
import { createMetadata } from "@/lib/seo";
import { AboutSection } from "@/components/home/AboutSection";
import { DoctorsPreview } from "@/components/home/DoctorsPreview";
import { FaqSection } from "@/components/home/FaqSection";
import { Hero } from "@/components/home/Hero";
import { NicuOnWheelsBand } from "@/components/home/NicuOnWheelsBand";
import { OutcomesTimeline } from "@/components/home/OutcomesTimeline";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { StatsStrip } from "@/components/home/StatsStrip";
import { SuccessStory } from "@/components/home/SuccessStory";
import { CtaBand } from "@/components/sections/CtaBand";
import { FacilitiesGrid } from "@/components/sections/FacilitiesGrid";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeader, SectionHeaderAside } from "@/components/ui/Section";

export const metadata = createMetadata({
  title: `${siteConfig.name} | Level III NICU in Rajkot`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section reveal={false} className="pt-5">
        <div className="container">
          <StatsStrip stats={keyStats} />
        </div>
      </Section>

      <AboutSection />

      <Section tone="sky">
        <div className="container">
          <SectionHeader
            align="center"
            eyebrow="Care at a glance"
            title="Outcomes that reflect our commitment"
          />
          <OutcomesTimeline />
        </div>
      </Section>

      <Section tone="white">
        <div className="container">
          <SectionHeader
            eyebrow="Our services"
            title="Complete neonatal care under one roof"
            aside={
              <SectionHeaderAside>
                <p>
                  From the delivery room to follow-up visits, every service is led by neonatologists
                  who specialise only in newborns.
                </p>
                <ButtonLink href="/services" variant="outline">
                  View all services
                  <Icon name="arrow-right" size={18} />
                </ButtonLink>
              </SectionHeaderAside>
            }
          />
          <ServiceCards />
        </div>
      </Section>

      <NicuOnWheelsBand />

      <Section>
        <div className="container">
          <SectionHeader
            align="center"
            eyebrow="Technology & facilities"
            title="State-of-the-art equipment for the tiniest patients"
            description="Every critical therapy a newborn may need is available in-house, with neonatologists at the bedside day and night."
          />
          <FacilitiesGrid />
        </div>
      </Section>

      <DoctorsPreview />
      <SuccessStory />
      <ReviewsSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
