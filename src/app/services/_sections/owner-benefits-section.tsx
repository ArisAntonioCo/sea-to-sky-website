import Image from "next/image";

import { Reveal } from "@/components/motion";

import { ownerBenefits } from "./services-content";

export function OwnerBenefitsSection() {
  return (
    <section className="bg-sea-50 py-24 sm:py-32 lg:py-40">
      <div className="section-shell grid gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <p className="text-base font-medium text-sea-700">Built for owners</p>
            <h2 className="mt-5 max-w-xl text-5xl font-medium leading-[1.02] text-ink-950 sm:text-7xl">
              No stress, just cheques.
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-ink-700">
              Our services are designed to make short-term rental management stress-free and rewarding.
            </p>
            <div className="relative mt-10 aspect-[5/4] max-w-lg overflow-hidden rounded-[1.5rem] bg-sea-100">
              <Image
                src="/chequesa.png"
                alt="A property owner meeting with a Sea to Sky representative"
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover object-[center_62%]"
              />
            </div>
          </div>
        </Reveal>

        <div className="border-t border-sea-900/16">
          {ownerBenefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.07}>
              <article className="grid gap-5 border-b border-sea-900/16 py-9 sm:grid-cols-[5.5rem_1fr] sm:items-start sm:py-11">
                <span className="relative block size-20 shrink-0 overflow-hidden rounded-full" aria-hidden="true">
                  <Image
                    src="/check.png"
                    alt=""
                    fill
                    sizes="80px"
                    className="scale-[1.42] object-contain [filter:hue-rotate(-28deg)_saturate(0.48)_contrast(0.96)]"
                  />
                </span>
                <div>
                  <h3 className="text-3xl font-medium text-ink-950">{benefit.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-ink-700 sm:text-lg">{benefit.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
