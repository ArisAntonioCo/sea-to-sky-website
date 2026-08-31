import { testimonials } from "./homepage-content";

export function TestimonialsSection() {
  return (
    <section className="section-shell py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-sea-700">
          Testimonials
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Review scaffold based on the owners currently shown on the live homepage.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-[1.75rem] border border-border bg-white p-8 shadow-sm"
          >
            <p className="text-lg leading-8 text-slate-950">“{item.quote}”</p>
            <div className="mt-6">
              <p className="font-semibold text-slate-950">{item.name}</p>
              <p className="text-sm text-slate-700">{item.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
