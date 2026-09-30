import { siteConfig } from "@/config/site";
import { Section, SectionHeader } from "@/components/ui/Section";
import { JotformWidget } from "./JotformWidget";

export function ReviewsSection() {
  return (
    <Section tone="sky">
      <div className="container">
        <SectionHeader eyebrow="Parent reviews" title="Trusted by families across Saurashtra" />
        <JotformWidget widgetId={siteConfig.reviewsWidgetId} />
      </div>
    </Section>
  );
}
