import Link from "next/link";

export function HeroSection() {
  return (
    <section className="section-shell pb-16 pt-10 sm:pt-14">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-[2rem] border border-black/6 bg-white px-8 py-12 shadow-[0_24px_90px_rgba(23,33,43,0.08)] sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-sea-700">
            Sea to Sky Prototype
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl">
            A cleaner Next.js foundation for a faster marketing site redesign.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            This prototype is structured for fast page iteration, clear section ownership,
            and an easier handoff once design direction is approved.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Prototype contact flow
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-950 hover:text-white"
            >
              View services page
            </Link>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="rounded-[2rem] bg-[linear-gradient(160deg,#244650_0%,#3b6978_62%,#d7c19f_100%)] p-8 text-white shadow-[0_24px_90px_rgba(36,70,80,0.28)]">
            <p className="text-sm uppercase tracking-[0.24em] text-white/74">
              Motion Strategy
            </p>
            <p className="mt-4 text-2xl font-semibold tracking-tight">
              Default to CSS and Motion. Add GSAP only where the design earns it.
            </p>
          </div>
          <div className="rounded-[2rem] border border-black/6 bg-sand-100 px-8 py-8">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-700">
              Handoff Priority
            </p>
            <p className="mt-4 text-base leading-8 text-slate-950">
              Shared site chrome, page folders, and page-specific sections make this easier
              to extend without turning the prototype into a monolith.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
