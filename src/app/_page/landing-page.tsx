import { SiteFooter, SiteHeader } from "@/components/layout";

import {
  ContactCtaSection,
  HeroSection,
  ProcessSection,
  ServicesSection,
  StatsSection,
  TestimonialsSection,
} from "../_sections";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-sand-50">
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
