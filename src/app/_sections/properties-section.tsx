import { properties } from "./homepage-content";

export function PropertiesSection() {
  return (
    <section className="section-shell py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-sea-700">
          Some Of Our Properties
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Property showcase scaffold for the locations currently listed on the live homepage.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {properties.map((property) => (
          <article
            key={`${property.type}-${property.location}`}
            className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-sm"
          >
            <div className="h-56 bg-[linear-gradient(160deg,#2a4654_0%,#7ea6bc_100%)]" />
            <div className="p-6">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-sea-700">
                {property.type}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">
                {property.location}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
