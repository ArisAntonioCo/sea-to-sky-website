import { ArrowUpRight } from "lucide-react";
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
    <section className="bg-white pb-0 pt-28 sm:pt-32 lg:pt-32">
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
            <Accordion defaultValue={["faq-0"]} className="gap-3 sm:gap-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="group/faq-bar overflow-hidden rounded-[0.35rem] bg-[#f7f6f2] transition-[background-color,transform] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] not-last:border-b-0 data-open:-translate-y-0.5 data-open:bg-[#f4f2ec] hover:bg-[#f4f2ec] motion-reduce:transition-none motion-reduce:data-open:translate-y-0"
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

      </div>

      <Reveal className="relative mt-18 min-h-[21rem] w-full overflow-hidden sm:mt-24 sm:min-h-[23rem] lg:min-h-[25rem]">
        <Image
          src="/Images/properties/midcentury-2.png"
          alt="Bright mid-century living room managed by Sea to Sky"
          fill
          quality={75}
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-[58%_center] lg:object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,7,0.96)_0%,rgba(5,8,7,0.82)_38%,rgba(5,8,7,0.26)_66%,rgba(5,8,7,0.04)_100%)] sm:bg-[linear-gradient(90deg,rgba(5,8,7,0.94)_0%,rgba(5,8,7,0.76)_34%,rgba(5,8,7,0.18)_62%,rgba(5,8,7,0)_84%)]"
        />

        <div className="section-shell relative z-10 flex min-h-[21rem] items-center py-10 sm:min-h-[23rem] sm:py-12 lg:min-h-[25rem]">
          <div className="max-w-xl text-white">
            <h2 className="text-4xl font-medium leading-[1.04] sm:text-5xl lg:text-6xl">
              Have a question we didn&apos;t cover?
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              Our team is always happy to help. Reach out and we&apos;ll get back to you shortly.
            </p>
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              className="mt-7 h-13 rounded-full bg-white px-7 text-base font-medium !text-ink-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/90 motion-reduce:transform-none motion-reduce:transition-none"
            >
              Contact us
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
