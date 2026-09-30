import { doctors } from "@/content/doctors";
import { physicianSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import { DoctorTabs } from "@/components/doctors/DoctorTabs";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section, SectionHeader, SectionHeaderAside } from "@/components/ui/Section";

export const metadata = createMetadata({
  title: "Neonatologists in Rajkot | Meet the MAAHI Family",
  description:
    "Meet Dr. Kunal Ahya, Dr. Alpesh Desai, Dr. Jatin Unadkat and Dr. Satish Sanja - fellowship-trained neonatologists available 24x7.",
  path: "/our-doctors",
});

export default function OurDoctorsPage() {
  return (
    <>
      <JsonLd data={doctors.map(physicianSchema)} />
      <PageHero
        title="Meet the MAAHI family"
        description="Five full-time, fellowship-trained neonatologists - available 24 × 7 × 365 for Rajkot's newborns."
        breadcrumbs={[{ label: "Our Doctors" }]}
        image={{ src: "/images/team-2.jpg", alt: "Team MAAHI group photo" }}
      />

      <Section>
        <div className="container">
          <SectionHeader
            eyebrow="Our neonatologists"
            title="Directors & Consultant Neonatologists"
            aside={
              <SectionHeaderAside>
                <p>Select a doctor to read their profile.</p>
              </SectionHeaderAside>
            }
          />
          <DoctorTabs doctors={doctors} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
