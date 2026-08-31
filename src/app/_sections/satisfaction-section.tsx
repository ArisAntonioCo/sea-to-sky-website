import { Reveal } from "@/components/motion";

import { satisfactionStats } from "./homepage-content";

export function SatisfactionSection() {
  return (
    <section className="relative overflow-hidden bg-sea-950 py-24 text-white sm:py-32 lg:py-40">
      <div className="absolute -right-56 -top-56 size-[38rem] rounded-full border border-white/8" />
      <div className="absolute -right-20 -top-20 size-[22rem] rounded-full border border-white/8" />
      <div className="section-shell relative">
        <Reveal className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-base font-medium text-sea-400">Care you can measure</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
              A calmer experience for owners and guests.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/68 lg:justify-self-end">
            Reliable operations, thoughtful communication, and always-on support create better stays and stronger long-term performance.
          </p>
        </Reveal>

        <div className="mt-20 grid border-t border-white/18 sm:grid-cols-2 lg:grid-cols-5">
          {satisfactionStats.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06}>
              <article className="min-h-48 border-b border-white/18 py-8 pr-6 sm:min-h-52 sm:border-r lg:border-b-0 lg:pl-6 first:pl-0">
                <p className="text-4xl font-medium sm:text-5xl">{item.value}</p>
                <p className="mt-5 max-w-40 text-sm leading-6 text-white/62">{item.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
