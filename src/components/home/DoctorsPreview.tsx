import Link from "next/link";
import { doctors } from "@/content/doctors";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Section, SectionHeader } from "@/components/ui/Section";

export function DoctorsPreview() {
  return (
    <Section tone="white">
      <div className="container">
        <SectionHeader
          eyebrow="The MAAHI family"
          title="Meet our neonatologists"
          aside={
            <ButtonLink href="/our-doctors" variant="outline">
              View all doctors
              <Icon name="arrow-right" size={18} />
            </ButtonLink>
          }
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {doctors.map((doctor) => (
            <Link
              key={doctor.id}
              href={`/our-doctors#${doctor.id}`}
              className="flex flex-col gap-2.5 text-ink no-underline"
            >
              <Photo
                src={doctor.image}
                alt={doctor.name}
                sizes="(min-width: 1101px) 20vw, (min-width: 641px) 50vw, 100vw"
                className="mb-1.5 h-70 sm:h-105 lg:aspect-2/3 lg:h-auto"
              />
              <h3 className="text-2xl">{doctor.name}</h3>
              <p className="text-sm font-bold text-pink">{doctor.role}</p>
              <p className="text-sm leading-normal text-muted">{doctor.qualifications}</p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
