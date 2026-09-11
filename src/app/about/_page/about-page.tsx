import { SiteFooter, SiteHeader } from "@/components/layout";

import {
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
        <DifferenceSection />
        <AboutTestimonialsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
