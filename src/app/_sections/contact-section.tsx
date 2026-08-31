import { Button } from "@/components/ui/button";

import { contactFields } from "./homepage-content";

export function ContactSection() {
  return (
    <section className="section-shell py-24">
      <div className="grid gap-10 rounded-[2rem] bg-white p-8 shadow-[0_24px_90px_rgba(23,33,43,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-sea-700">
            Contact Us
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Are you interested in working together?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            This scaffold preserves the owner-focused CTA and contact-form area from the live
            homepage without locking in final form behavior yet.
          </p>
        </div>
        <div>
          <div className="grid gap-4">
            {contactFields.map((field) => (
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
            className="mt-6 rounded-none bg-sea-700 text-white hover:bg-sea-500"
          >
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
