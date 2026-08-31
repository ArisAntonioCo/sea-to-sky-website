import { revenuePillars } from "./homepage-content";

export function RevenueSection() {
  return (
    <section className="section-shell py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-sea-700">
            We Maximize Your Revenue
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Revenue scaffolding built around the site&apos;s existing service narrative.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            The live site emphasizes expert strategies, dynamic pricing, optimized
            listings, and local market insight as the core levers for occupancy and return.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {revenuePillars.map((pillar) => (
            <article
              key={pillar}
              className="rounded-[1.75rem] border border-border bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-sea-700">
                Revenue Pillar
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">{pillar}</h3>
              <p className="mt-3 text-base leading-8 text-slate-700">
                Replace this scaffold text with the approved explanation for{" "}
                {pillar.toLowerCase()}.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
