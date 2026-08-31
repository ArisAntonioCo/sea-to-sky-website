import { servicePillars } from "./home-content";

export function ServicesSection() {
  return (
    <section className="section-shell py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-sea-700">
            Service Pillars
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Structure sections by business narrative, not by random components.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-700">
            This layout keeps the prototype aligned to actual page messaging so each section
            can evolve independently during design review.
          </p>
        </div>
        <div className="grid gap-5">
          {servicePillars.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-black/6 bg-white p-7 shadow-[0_18px_70px_rgba(23,33,43,0.05)]"
            >
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-base leading-8 text-slate-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
