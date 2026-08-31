import { SiteFooter, SiteHeader } from "@/components/layout";

import {
  ContactSection,
  EstimateSection,
  HeroSection,
  PartnersSection,
  ProcessSection,
  PropertiesSection,
  RevenueSection,
  SatisfactionSection,
  TestimonialsSection,
} from "../_sections";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-sand-50">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProcessSection />
        <PartnersSection />
        <RevenueSection />
        <SatisfactionSection />
        <PropertiesSection />
        <TestimonialsSection />
        <EstimateSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
