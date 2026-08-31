import { SiteFooter, SiteHeader } from "@/components/layout";

import {
  ContactSection,
  EstimateSection,
  FaqSection,
  HeroSection,
  ProcessSection,
  PropertiesSection,
  RevenueSection,
  SatisfactionSection,
  TestimonialsSection,
} from "../_sections";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProcessSection />
        <SatisfactionSection />
        <RevenueSection />
        <PropertiesSection />
        <TestimonialsSection />
        <FaqSection />
        <EstimateSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
