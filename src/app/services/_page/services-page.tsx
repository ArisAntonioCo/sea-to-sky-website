import { SiteFooter, SiteHeader } from "@/components/layout";

import {
  IncludedServicesSection,
  OwnerBenefitsSection,
  ProtectionSection,
  ServicesCtaSection,
  ServicesHeroSection,
} from "../_sections";

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <ServicesHeroSection />
        <ProtectionSection />
        <IncludedServicesSection />
        <OwnerBenefitsSection />
        <ServicesCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
