import Link from "next/link";

import { faqs } from "@/app/_sections/homepage-content";
import { Reveal } from "@/components/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function FaqListSection() {
  return (
    <section className="bg-white pb-24 pt-32 sm:pb-32 sm:pt-36 lg:pb-40 lg:pt-40">
      <div className="section-shell">
        <Reveal className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-base font-medium text-sea-700">Frequently asked questions</p>
            <h1 className="mt-5 text-[clamp(2.25rem,6vw,5.5rem)] font-medium leading-[1.02] text-ink-950">
              <span className="block whitespace-nowrap">Clear answers,</span>
              <span className="block whitespace-nowrap">before we begin.</span>
            </h1>
          </div>
          <div className="border-t border-sea-900/16 pt-6 lg:mb-2">
            <p className="max-w-lg text-lg leading-8 text-ink-700">
              Learn how we care for properties, support guests, manage compliance, and protect your time as an owner.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-12 lg:mt-28 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="text-sm text-sea-600">Five essentials</p>
              <p className="mt-4 max-w-xs text-2xl font-medium leading-8 text-ink-950">
                The practical details behind confident ownership.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Accordion defaultValue={["faq-0"]} className="border-t border-sea-900/16">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="border-sea-900/16">
                <AccordionTrigger className="gap-6 rounded-none py-7 text-xl leading-snug text-ink-950 hover:no-underline sm:py-9 sm:text-2xl">
                  <span className="flex items-start gap-5 sm:gap-8">
                    <span className="mt-1 text-sm font-medium tabular-nums text-sea-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pl-10 pr-12 text-base leading-8 text-ink-700 sm:pb-10 sm:pl-16 sm:pr-16 sm:text-lg">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
            </Accordion>
          </Reveal>
        </div>

        <Reveal className="mt-24 flex flex-col items-center border-t border-sea-900/12 pt-20 text-center sm:mt-32 sm:pt-24">
          <h2 className="max-w-2xl text-4xl font-medium leading-tight text-ink-950 sm:text-5xl">
            Still have a question?
          </h2>
          <Button
            render={<Link href="/#contact" />}
            nativeButton={false}
            className="mt-7 h-13 rounded-full bg-sea-800 px-7 text-base font-normal !text-white hover:bg-sea-700"
          >
            Contact us
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
