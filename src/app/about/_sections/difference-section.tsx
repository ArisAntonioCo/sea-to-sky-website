import { ArrowDownRight } from "lucide-react";

import { Reveal } from "@/components/motion";

import { differences } from "./about-content";

export function DifferenceSection() {
  return (
    <section className="relative overflow-hidden bg-sea-950 py-24 text-white sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute -right-56 -top-56 size-[38rem] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-32 -top-32 size-[25rem] rounded-full border border-white/10" />

      <div className="section-shell relative grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <p className="text-base font-medium text-white/58">What makes us different</p>
            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[1.05] sm:text-6xl">
              Local care. Professional performance.
            </h2>
          </div>
        </Reveal>

        <div className="border-t border-white/18">
          {differences.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <article className="grid gap-5 border-b border-white/18 py-9 sm:grid-cols-[4rem_1fr_auto] sm:py-11">
                <p className="text-sm text-white/45">0{index + 1}</p>
                <div>
                  <h3 className="text-3xl font-medium">{item.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-white/65 sm:text-lg">{item.description}</p>
                </div>
                <ArrowDownRight className="size-5 text-white/45" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
