import { processSteps } from "./homepage-content";

export function ProcessSection() {
  return (
    <section className="section-shell py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-sea-700">
          Our Process
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          A simple three-step flow from inquiry to active management.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {processSteps.map((item) => (
          <article
            key={item.step}
            className="rounded-[1.75rem] border border-border bg-card p-8 shadow-sm"
          >
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-sea-700">
              Step {item.step}
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-card-foreground">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-700">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
