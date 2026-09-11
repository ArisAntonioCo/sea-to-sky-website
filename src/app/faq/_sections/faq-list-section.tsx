import Image from "next/image";
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
    <section className="bg-white pb-24 pt-28 sm:pb-32 sm:pt-32 lg:pb-40 lg:pt-32">
      <div className="section-shell">
        <Reveal className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-base font-medium text-sea-700">Frequently asked questions</p>
            <h1 className="mt-5 text-[clamp(2.25rem,6vw,5.5rem)] font-medium leading-[1.02] text-ink-950">
              <span className="block whitespace-nowrap">Clear answers,</span>
              <span className="block whitespace-nowrap">before we begin.</span>
            </h1>
          </div>
          <div className="relative h-44 overflow-hidden sm:h-52 lg:h-60">
            <Image
              src="/Images/Question.png"
              alt="Questions about Sea to Sky property management"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="translate-y-5 scale-[1.48] object-contain object-bottom [filter:hue-rotate(-28deg)_saturate(0.48)_contrast(0.96)] sm:scale-[1.56] lg:translate-y-8 lg:scale-[1.68]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-10 -bottom-10 h-28 bg-gradient-to-t from-white via-white/78 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_0%,black_52%,transparent_100%)]"
            />
          </div>
        </Reveal>

        <div className="relative z-10 mt-10 grid gap-12 sm:mt-12 lg:mt-16 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20">
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
