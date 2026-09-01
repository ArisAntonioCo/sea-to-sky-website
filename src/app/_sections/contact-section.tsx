import { Reveal } from "@/components/motion";

import { ContactSignupForm } from "./contact-signup-form";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="section-shell">
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] bg-[linear-gradient(108deg,#f4f5f6_0%,#f4f5f6_36%,#e4eff3_50%,#87c7df_74%,#1687b8_100%)] px-7 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-14">
            <div className="max-w-[46rem]">
              <h2 className="text-xl font-normal leading-[1.12] tracking-[-0.025em] text-ink-950 sm:text-2xl">
                Ready for a better way to host?
              </h2>
              <p className="mt-2 max-w-2xl text-xl font-normal leading-[1.12] tracking-[-0.025em] text-[#9a9ea2] sm:text-2xl">
                Get thoughtful hosting insights, property guidance, and Sea to Sky updates delivered occasionally.
              </p>
              <ContactSignupForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
