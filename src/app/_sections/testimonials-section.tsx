import { testimonials } from "./home-content";

export function TestimonialsSection() {
  return (
    <section className="section-shell py-20">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-sea-700">
          Testimonials
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Prototype content blocks are in place, ready for real approved copy.
        </h2>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-[1.75rem] border border-black/6 bg-white p-8 shadow-[0_18px_70px_rgba(23,33,43,0.06)]"
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
