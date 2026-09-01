import { Clock3, Mail, MapPin } from "lucide-react";

import { Reveal } from "@/components/motion";

import { ContactForm } from "./contact-form";

const contactDetails = [
  { icon: Mail, label: "Email", value: "hello@seatoskyrental.com" },
  { icon: MapPin, label: "Service area", value: "Sea to Sky corridor and select markets" },
  { icon: Clock3, label: "Response time", value: "Within one business day" },
];

export function ContactHeroSection() {
  return (
    <section className="bg-white pb-24 pt-36 sm:pb-32 sm:pt-44 lg:pb-40">
      <div className="section-shell grid gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
        <Reveal>
          <div className="lg:sticky lg:top-36">
            <p className="text-base font-medium text-sea-700">Contact Sea to Sky</p>
            <h1 className="mt-5 max-w-2xl text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-ink-950 sm:text-7xl">Let’s talk about your property.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ink-700">Share where your property is today and where you want it to go. We’ll outline how thoughtful management can improve the experience for you and your guests.</p>

            <div className="mt-10 space-y-5 border-t border-sea-900/15 pt-7">
              {contactDetails.map(({ icon: Icon, label, value }) => (
                <div key={label} className="grid grid-cols-[2rem_1fr] gap-3">
                  <Icon className="mt-0.5 size-5 text-sea-700" strokeWidth={1.7} />
                  <div>
                    <p className="text-sm text-ink-700/65">{label}</p>
                    <p className="mt-1 text-base text-ink-950">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="border-t border-sea-900/15 pt-8">
            <p className="text-sm font-medium text-sea-700">Property enquiry</p>
            <h2 className="mt-3 text-3xl font-medium leading-tight text-ink-950 sm:text-4xl">Tell us what you’re working with.</h2>
            <div className="mt-8"><ContactForm /></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
