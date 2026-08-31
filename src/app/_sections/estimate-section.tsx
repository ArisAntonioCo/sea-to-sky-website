import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

export function EstimateSection() {
  return (
    <section id="estimate" className="bg-sand-50 py-24 sm:py-32 lg:py-40">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <p className="text-base font-medium text-sea-700">Personalized income estimate</p>
            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[1.05] text-ink-950 sm:text-6xl">
              See what your property could earn.
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-ink-700">
              Share a few details and we’ll prepare a tailored view of your property’s short-term rental potential.
            </p>
            <p className="mt-10 text-sm leading-6 text-ink-700">
              Prototype form only. Submission handling will be added after the design is approved.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="grid gap-x-6 gap-y-7 border-t border-sea-900/18 pt-8 sm:grid-cols-2">
            <div className="space-y-3">
              <Label htmlFor="property-type">Property type</Label>
              <NativeSelect id="property-type" name="property-type" className="w-full">
                <NativeSelectOption value="">Select a type</NativeSelectOption>
                <NativeSelectOption value="house">House</NativeSelectOption>
                <NativeSelectOption value="condo">Condo</NativeSelectOption>
                <NativeSelectOption value="villa">Villa</NativeSelectOption>
                <NativeSelectOption value="other">Other</NativeSelectOption>
              </NativeSelect>
            </div>
            <div className="space-y-3">
              <Label htmlFor="location">Property location</Label>
              <Input id="location" name="location" placeholder="City, region" className="h-12 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="bedrooms">Bedrooms</Label>
              <Input id="bedrooms" name="bedrooms" type="number" min="0" placeholder="3" className="h-12 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="bathrooms">Bathrooms</Label>
              <Input id="bathrooms" name="bathrooms" type="number" min="0" step="0.5" placeholder="2" className="h-12 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0" />
            </div>
            <div className="space-y-3 sm:col-span-2">
              <Label htmlFor="estimate-email">Email address</Label>
              <Input id="estimate-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className="h-12 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0" />
            </div>
            <Button type="button" className="mt-3 h-13 w-fit rounded-full bg-sea-800 px-7 text-white hover:bg-sea-700 sm:col-span-2">
              Request estimate
              <ArrowRight className="size-4" />
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
