import { Button } from "@/components/ui/button";

import { estimateFields } from "./homepage-content";

export function EstimateSection() {
  return (
    <section className="bg-sand-100 py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-sea-700">
            Get A Personalized Income Estimate
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Form scaffold for the revenue estimate CTA on the current homepage.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            The live site appears to use a short qualification form. This scaffold keeps the
            layout ready for shadcn form components once the final fields and logic are approved.
          </p>
        </div>
        <div className="rounded-[2rem] border border-border bg-white p-8 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            {estimateFields.map((field) => (
              <div
                key={field}
                className="rounded-2xl border border-dashed border-slate-300 px-5 py-4 text-sm text-slate-500"
              >
                {field}
              </div>
            ))}
          </div>
          <Button
            size="lg"
            className="mt-6 w-full rounded-none bg-slate-950 text-white hover:bg-slate-800"
          >
            Request estimate
          </Button>
        </div>
      </div>
    </section>
  );
}
