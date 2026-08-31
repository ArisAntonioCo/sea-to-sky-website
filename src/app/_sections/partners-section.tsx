export function PartnersSection() {
  return (
    <section className="border-y border-border bg-white/80 py-14">
      <div className="section-shell">
        <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
          Our Partners
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Partner One", "Partner Two", "Partner Three", "Partner Four"].map((item) => (
            <div
              key={item}
              className="flex h-24 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-sand-50 text-sm font-medium uppercase tracking-[0.18em] text-slate-500"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
