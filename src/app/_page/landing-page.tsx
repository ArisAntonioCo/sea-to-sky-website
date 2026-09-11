import { SiteFooter, SiteHeader } from "@/components/layout";

import {
  EstimateSection,
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
        <EstimateSection />
      </main>
      <SiteFooter />
    </div>
  );
}
