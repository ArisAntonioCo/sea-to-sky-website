import { SiteFooter, SiteHeader } from "@/components/layout";

import {
  AboutCtaSection,
  AboutHeroSection,
  AboutTestimonialsSection,
  DifferenceSection,
  SpecialtiesSection,
} from "../_sections";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <AboutHeroSection />
        <SpecialtiesSection />
        <AboutTestimonialsSection />
        <DifferenceSection />
        <AboutCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
