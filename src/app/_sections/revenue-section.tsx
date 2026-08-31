import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/motion";

import { revenuePillars } from "./homepage-content";

export function RevenueSection() {
  return (
    <section className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="section-shell">
        <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-base font-medium text-sea-700">Performance, thoughtfully managed</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] text-ink-950 sm:text-6xl lg:text-7xl">
              More revenue without losing the human touch.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-ink-700 lg:justify-self-end">
            Data informs every decision, while local knowledge and responsive guest care turn those decisions into stronger stays.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div className="relative min-h-[40rem] overflow-hidden rounded-[1.75rem]">
            <Image
              src="/Images/performance-section.png"
              alt="A property manager reviewing performance information on a phone"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(11,43,50,0.58)_100%)]" />
              <div className="absolute bottom-24 left-8 right-8 rounded-2xl border border-white/30 bg-white/12 p-6 text-white backdrop-blur-md sm:left-auto sm:w-72">
                <p className="text-sm text-white/66">Thoughtful oversight</p>
                <p className="mt-2 text-xl leading-7">Property details, local context, and a sense of place.</p>
              </div>
          </div>

          <div className="self-center">
            {revenuePillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.06}>
                <article className="group grid grid-cols-[auto_1fr_auto] gap-5 border-t border-sea-900/16 py-7">
                  <span className="pt-1 text-sm text-sea-600">0{index + 1}</span>
                  <div>
                    <h3 className="text-2xl font-medium text-ink-950 sm:text-3xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-base leading-7 text-ink-700">
                      {pillar.description}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 size-5 text-sea-700 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
