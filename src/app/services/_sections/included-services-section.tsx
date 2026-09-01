import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion";

import { includedServices } from "./services-content";

export function IncludedServicesSection() {
  return (
    <section className="relative overflow-hidden bg-sea-950 py-24 text-white sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute -right-48 -top-48 size-[34rem] rounded-full border border-white/10" />
      <div className="section-shell relative">
        <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-base font-medium text-white/58">What we include</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
              Turn-key support, thoughtfully delivered.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/65 lg:justify-self-end">
            We enable turn-key, hands-off service to our short-term rental customers. These are the most common areas where we go above and beyond.
          </p>
        </Reveal>

        <div className="mt-16 grid border-t border-white/18 md:grid-cols-2 lg:grid-cols-3">
          {includedServices.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 0.06}>
              <article className="group flex min-h-72 flex-col border-b border-white/18 py-8 md:px-7 md:odd:border-r lg:min-h-80 lg:border-r lg:p-9 lg:[&:nth-child(3n)]:border-r-0">
                <div className="flex items-center justify-between text-sm text-white/42">
                  <span>0{index + 1}</span>
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <h3 className="mt-auto pt-12 text-3xl font-medium">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/62">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
