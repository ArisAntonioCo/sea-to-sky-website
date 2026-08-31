import Image from "next/image";

import { Reveal } from "@/components/motion";

import { specialties } from "./about-content";

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

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {specialties.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <article className={index === 1 ? "lg:mt-20" : ""}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-sea-100">
                  <Image
                    src={item.image}
                    alt={`${item.title} managed by Sea to Sky`}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                  />
                </div>
                <p className="mt-6 text-sm text-sea-600">0{index + 1}</p>
                <h3 className="mt-3 text-3xl font-medium text-ink-950">{item.title}</h3>
                <p className="mt-4 max-w-md text-base leading-7 text-ink-700">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
