"use client";

import { useRef, useSyncExternalStore } from "react";
import type { Doctor } from "@/content/doctors";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Heading, Stack } from "@/components/ui/Typography";

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

const getHash = () => window.location.hash.slice(1);
const getServerHash = () => "";

/** Doctor picker. The URL hash is the source of truth, so profiles are deep-linkable. */
export function DoctorTabs({ doctors }: { doctors: Doctor[] }) {
  const panelsRef = useRef<HTMLDivElement>(null);
  const hash = useSyncExternalStore(subscribeToHash, getHash, getServerHash);
  const selectedId = doctors.some((doctor) => doctor.id === hash) ? hash : doctors[0]?.id;

  function select(id: string) {
    window.history.replaceState(null, "", `#${id}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    panelsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <div
        role="tablist"
        aria-label="Our neonatologists"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
      >
        {doctors.map((doctor) => {
          const selected = doctor.id === selectedId;
          return (
            <button
              key={doctor.id}
              id={`tab-${doctor.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={doctor.id}
              onClick={() => select(doctor.id)}
              className={cn(
                "flex cursor-pointer flex-col gap-3.5 rounded-[30px] border-2 bg-white p-3.5 text-left",
                selected ? "border-pink" : "border-line",
              )}
            >
              <Photo
                src={doctor.image}
                alt={doctor.name}
                sizes="(min-width: 1101px) 20vw, (min-width: 641px) 50vw, 100vw"
                className="h-75 w-full lg:aspect-5/6 lg:h-auto"
              />
              <span className="flex flex-col gap-1.5 px-2 pb-2">
                <strong className="font-display text-2xl leading-[1.12] font-semibold lg:text-xl">{doctor.name}</strong>
                <small className="text-sm leading-[1.45] text-muted">{doctor.qualifications}</small>
              </span>
            </button>
          );
        })}
      </div>

      <div ref={panelsRef} className="scroll-mt-40">
        {doctors.map((doctor) => (
          <article
            key={doctor.id}
            id={doctor.id}
            role="tabpanel"
            aria-labelledby={`tab-${doctor.id}`}
            hidden={doctor.id !== selectedId}
            className="mt-11 grid gap-12 rounded-xl border border-line bg-white p-[clamp(28px,4vw,56px)] md:grid-cols-[4fr_8fr]"
          >
            <Photo
              src={doctor.image}
              alt={`${doctor.name} portrait`}
              sizes="(min-width: 961px) 33vw, 100vw"
              className="h-70 sm:h-115"
            />
            <Stack>
              <p className="text-sm font-bold text-pink">{doctor.role}</p>
              <Heading size="md">{doctor.name}</Heading>
              <p className="text-body font-semibold text-navy">{doctor.qualifications}</p>
              <p>{doctor.bio}</p>
              <ul className="flex flex-wrap gap-2.5">
                {doctor.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-sky px-4 py-2.25 text-sm font-semibold text-navy"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div>
                <ButtonLink href="/contact">
                  Book a consultation
                  <Icon name="calendar" size={18} />
                </ButtonLink>
              </div>
            </Stack>
          </article>
        ))}
      </div>
    </>
  );
}
