import { Reveal } from "@/components/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs } from "./homepage-content";

export function FaqSection() {
  return (
    <section id="faq" className="bg-sea-50 py-24 sm:py-32 lg:py-40">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <p className="text-base font-medium text-sea-700">Common questions</p>
            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[1.05] text-ink-950 sm:text-6xl">
              Everything you need to know.
            </h2>
            <p className="mt-7 max-w-md text-lg leading-8 text-ink-700">
              Clear answers about your property, your guests, and how Sea to Sky handles the details.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <Accordion defaultValue={["faq-0"]} className="gap-3 sm:gap-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="group/faq-bar overflow-hidden rounded-[0.35rem] bg-white/70 transition-[background-color,transform] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] not-last:border-b-0 data-open:-translate-y-0.5 data-open:bg-white hover:bg-white motion-reduce:transition-none motion-reduce:data-open:translate-y-0"
              >
                <AccordionTrigger className="min-h-20 items-center gap-5 rounded-none px-5 py-5 text-lg leading-snug text-ink-950 hover:no-underline sm:min-h-24 sm:px-7 sm:text-2xl">
                  <span className="pr-3">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-6 pr-16 text-base leading-8 text-ink-700 sm:px-7 sm:pb-8 sm:pr-24 sm:text-lg">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
