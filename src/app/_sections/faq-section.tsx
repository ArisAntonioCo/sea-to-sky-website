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
          <Accordion defaultValue={["faq-0"]} className="border-t border-sea-900/16">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="border-sea-900/16"
              >
                <AccordionTrigger className="gap-6 rounded-none py-6 text-xl leading-snug text-ink-950 hover:no-underline sm:py-8 sm:text-2xl">
                  <span className="flex items-start gap-5 sm:gap-8">
                    <span className="mt-1 text-sm font-medium tabular-nums text-sea-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-7 pl-10 pr-12 text-base leading-8 text-ink-700 sm:pb-9 sm:pl-16 sm:pr-16 sm:text-lg">
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
