import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/motion";

import { properties } from "./homepage-content";

export function PropertiesSection() {
  return (
    <section id="properties" className="bg-sand-100 py-24 sm:py-32 lg:py-40">
      <div className="section-shell">
        <Reveal className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-base font-medium text-sea-700">A selection of stays</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] text-ink-950 sm:text-6xl lg:text-7xl">
              Properties with a strong sense of place.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-ink-700">
            A considered portfolio spanning coastal escapes, mountain homes, and city stays.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {properties.map((property, index) => {
            const widthClass =
              property.size === "large"
                ? "lg:col-span-7"
                : property.size === "wide"
                  ? "lg:col-span-8"
                  : "lg:col-span-5";

            return (
              <Reveal key={`${property.type}-${property.location}`} className={widthClass} delay={(index % 2) * 0.08}>
                <article className="group">
                  <div
                    className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] sm:aspect-[16/11]"
                  >
                    <Image
                      src={property.image}
                      alt={`${property.type} in ${property.location}`}
                      fill
                      sizes="(min-width: 1024px) 58vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sea-950/45 via-transparent to-transparent" />
                    <span className="absolute right-4 top-4 rounded-full border border-white/35 bg-white/14 p-3 text-white backdrop-blur-md">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-5 pt-5">
                    <div>
                      <p className="text-sm text-sea-700">{property.type}</p>
                      <h3 className="mt-1 text-2xl font-medium text-ink-950">{property.location}</h3>
                    </div>
                    <span className="text-sm text-ink-700">0{index + 1}</span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
