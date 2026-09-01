import Image from "next/image";

import { Reveal } from "@/components/motion";

import { protectionServices } from "./services-content";

export function ProtectionSection() {
  return (
    <section className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <Reveal>
          <div className="relative min-h-[38rem] overflow-hidden rounded-[1.75rem] lg:sticky lg:top-32">
            <Image
              src="/Images/properties/Squamish-BC.png"
              alt="A well-maintained Sea to Sky property in Squamish"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sea-950/55 via-transparent to-transparent" />
            <p className="absolute bottom-7 left-7 max-w-xs text-2xl font-medium leading-tight text-white sm:bottom-9 sm:left-9">
              Peace of mind, from arrival to departure.
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-base font-medium text-sea-700">Property protection</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-[1.05] text-ink-950 sm:text-6xl">
              Care that never clocks out.
            </h2>
          </Reveal>
          <div className="mt-12 border-t border-sea-900/16">
            {protectionServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06}>
                <article className="grid gap-5 border-b border-sea-900/16 py-8 sm:grid-cols-[4rem_1fr] sm:py-10">
                  <p className="text-sm text-sea-600">0{index + 1}</p>
                  <div>
                    <h3 className="text-2xl font-medium text-ink-950 sm:text-3xl">{service.title}</h3>
                    <p className="mt-4 max-w-xl text-base leading-8 text-ink-700">{service.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
