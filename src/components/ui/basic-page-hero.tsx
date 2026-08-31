type BasicPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function BasicPageHero({
  eyebrow,
  title,
  description,
}: BasicPageHeroProps) {
  return (
    <section className="section-shell">
      <div className="rounded-[2rem] border border-black/6 bg-white px-8 py-16 shadow-[0_20px_80px_rgba(23,33,43,0.08)] sm:px-12">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-sea-700">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          {description}
        </p>
      </div>
    </section>
  );
}
