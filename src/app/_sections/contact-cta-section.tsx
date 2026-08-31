import Link from "next/link";

export function ContactCtaSection() {
  return (
    <section className="section-shell py-20">
      <div className="grain-overlay overflow-hidden rounded-[2rem] bg-sea-700 px-8 py-14 text-white shadow-[0_30px_100px_rgba(36,70,80,0.34)] sm:px-12">
        <p className="text-sm uppercase tracking-[0.28em] text-white/70">
          Prototype Call To Action
        </p>
        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Build the redesign around a clear owner conversion path first.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/78">
              This section is structured for fast iteration once messaging and form
              requirements are approved.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-sea-700 transition-transform hover:-translate-y-0.5"
          >
            Open contact page
          </Link>
        </div>
      </div>
    </section>
  );
}
