import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

const fieldClass =
  "h-14 rounded-none border-x-0 border-t-0 border-sea-900/22 bg-transparent px-0 text-base shadow-none focus-visible:border-sea-800 focus-visible:ring-0 md:text-base";

const selectClass =
  "w-full [&_select]:h-14 [&_select]:rounded-none [&_select]:border-x-0 [&_select]:border-t-0 [&_select]:border-sea-900/22 [&_select]:bg-transparent [&_select]:px-0 [&_select]:pr-9 [&_select]:text-base [&_select]:shadow-none [&_select:focus-visible]:border-sea-800 [&_select:focus-visible]:ring-0 [&_svg]:right-0";

export function EstimateSection() {
  return (
    <section id="estimate" className="scroll-mt-24 bg-white py-24 sm:py-32 lg:py-40">
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
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form>
            <fieldset className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              <legend className="mb-8 text-xl font-medium text-ink-950">Property details</legend>
              <div className="space-y-2">
                <Label htmlFor="property-type" className="text-ink-700">Property type</Label>
                <NativeSelect id="property-type" name="property-type" className={selectClass}>
                  <NativeSelectOption value="">Select a type</NativeSelectOption>
                  <NativeSelectOption value="house">House</NativeSelectOption>
                  <NativeSelectOption value="condo">Condo</NativeSelectOption>
                  <NativeSelectOption value="villa">Villa</NativeSelectOption>
                  <NativeSelectOption value="other">Other</NativeSelectOption>
                </NativeSelect>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location" className="text-ink-700">Property location</Label>
                <Input id="location" name="location" autoComplete="address-level2" placeholder="City, region" className={fieldClass} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bedrooms" className="text-ink-700">Bedrooms</Label>
                <Input id="bedrooms" name="bedrooms" type="number" min="0" placeholder="3" className={fieldClass} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bathrooms" className="text-ink-700">Bathrooms</Label>
                <Input id="bathrooms" name="bathrooms" type="number" min="0" step="0.5" placeholder="2" className={fieldClass} />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="estimate-email" className="text-ink-700">Email address</Label>
                <Input id="estimate-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={fieldClass} />
              </div>
            </fieldset>

            <div className="mt-10">
              <Button type="button" className="h-14 rounded-full bg-sea-800 px-8 text-base font-normal !text-white hover:bg-sea-700">
                Request estimate
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
