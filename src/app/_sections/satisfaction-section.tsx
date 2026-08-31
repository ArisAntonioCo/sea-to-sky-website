import { satisfactionStats } from "./homepage-content";

export function SatisfactionSection() {
  return (
    <section className="bg-sea-700 py-24 text-white">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/70">
            We Ensure Guaranteed Satisfaction
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Seamless, stress-free support positioned as a trust and conversion block.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {satisfactionStats.map((item) => (
            <article
              key={item.label}
              className="rounded-[1.5rem] bg-white/10 p-6 backdrop-blur-sm"
            >
              <p className="text-4xl font-semibold tracking-tight">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-white/78">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
