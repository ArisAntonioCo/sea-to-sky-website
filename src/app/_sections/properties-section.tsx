import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion";

import { properties } from "./homepage-content";

const placeholderBackgrounds = [
  "linear-gradient(150deg, #aeb4a3 0%, #647a67 45%, #263f3b 100%)",
  "linear-gradient(150deg, #d7c2a3 0%, #9b8264 42%, #475654 100%)",
  "linear-gradient(150deg, #b7cad0 0%, #577987 48%, #1d424d 100%)",
  "linear-gradient(150deg, #bcc8ca 0%, #6d8990 48%, #243d44 100%)",
  "linear-gradient(150deg, #d3c9b7 0%, #87928c 46%, #314a4a 100%)",
];

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
            Photography remains intentionally replaceable during this prototype phase.
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
                    role="img"
                    aria-label={`${property.type} in ${property.location} media placeholder`}
                    className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] sm:aspect-[16/11]"
                    style={{ background: placeholderBackgrounds[index] }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(255,255,255,0.38),transparent_19%),linear-gradient(180deg,transparent_48%,rgba(13,42,46,0.44))] transition-transform duration-700 group-hover:scale-[1.025]" />
                    <span className="absolute right-4 top-4 rounded-full border border-white/35 bg-white/14 p-3 text-white backdrop-blur-md">
                      <ArrowUpRight className="size-5" />
                    </span>
                    <span className="absolute bottom-4 left-4 text-xs text-white/68">Property media placeholder</span>
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
