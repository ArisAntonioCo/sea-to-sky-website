import { homeStats } from "./home-content";

export function StatsSection() {
  return (
    <section className="section-shell py-10">
      <div className="grid gap-4 rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_20px_80px_rgba(23,33,43,0.05)] sm:grid-cols-2 lg:grid-cols-4">
        {homeStats.map((item) => (
          <article key={item.label} className="rounded-[1.4rem] bg-sand-50 p-6">
            <p className="text-3xl font-semibold tracking-tight text-slate-950">
              {item.value}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
