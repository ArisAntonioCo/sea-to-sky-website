import { Reveal } from "@/components/motion";
import {
  PropertiesCoverflow,
  type CoverflowItem,
} from "@/app/_sections/properties-coverflow";

import { specialties } from "./about-content";

const specialtySlides: CoverflowItem[] = specialties.map((item, index) => ({
  type: `0${index + 1}`,
  location: item.title,
  description: item.description,
  image: item.image,
}));

export function SpecialtiesSection() {
  return (
    <section className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="section-shell">
        <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-base font-medium text-sea-700">Where we specialize</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] text-ink-950 sm:text-6xl lg:text-7xl">
              Every property deserves considered care.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-ink-700 lg:justify-self-end">
            Focused management for the homes people escape to, return to, and remember.
          </p>
        </Reveal>

      </div>

      <Reveal className="mt-12 w-full sm:mt-16" delay={0.08} distance={18}>
        <PropertiesCoverflow
          items={specialtySlides}
          ariaLabel="Property types managed by Sea to Sky"
        />
      </Reveal>
    </section>
  );
}
