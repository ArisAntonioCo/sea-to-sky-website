import { Reveal } from "@/components/motion";

import { processSteps } from "./homepage-content";

export function ProcessSection() {
  return (
    <section id="approach" className="bg-sand-50 py-24 sm:py-32 lg:py-40">
      <div className="section-shell grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <Reveal>
            <p className="text-base font-medium text-sea-700">Our approach</p>
            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[1.05] text-ink-950 sm:text-6xl">
              From first conversation to effortless hosting.
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-ink-700">
              A clear, hands-on process built around your property, your goals, and a better guest experience.
            </p>
          </Reveal>
        </div>

        <div>
          {processSteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.08}>
              <article className="grid gap-5 border-t border-sea-900/18 py-9 sm:grid-cols-[5rem_1fr] sm:py-11">
                <p className="text-sm text-sea-700">{item.step}</p>
                <div>
                  <h3 className="text-3xl font-medium text-ink-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-ink-700 sm:text-lg">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
