import { processSteps } from "./home-content";

export function ProcessSection() {
  return (
    <section className="section-shell py-20">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-sea-700">
          Process Structure
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          The homepage is already organized around reusable content sections.
        </h2>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {processSteps.map((item) => (
          <article
            key={item.step}
            className="rounded-[1.75rem] border border-black/6 bg-white p-8 shadow-[0_18px_70px_rgba(23,33,43,0.06)]"
          >
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-sea-700">
              {item.step}
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">
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
