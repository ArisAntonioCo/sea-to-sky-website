import { Reveal } from "@/components/motion";
import { PropertiesCoverflow } from "./properties-coverflow";

export function PropertiesSection() {
  return (
    <section id="properties" className="scroll-mt-24 bg-sand-100 py-24 sm:py-32 lg:py-36">
      <div className="section-shell">
        <Reveal className="grid gap-6 md:grid-cols-[minmax(0,1fr)_22rem] md:items-end md:gap-12">
          <div>
            <p className="text-base font-medium text-sea-700">A selection of stays</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.05] text-ink-950 sm:text-6xl lg:text-7xl">
              Properties with a strong sense of place.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-ink-700 md:pb-1">
            A considered portfolio spanning coastal escapes, mountain homes, and city stays.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 w-full sm:mt-16">
        <Reveal>
          <PropertiesCoverflow />
        </Reveal>
      </div>
    </section>
  );
}
