"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="flex min-h-[32rem] flex-col items-center justify-center text-center" role="status">
        <span className="flex size-14 items-center justify-center rounded-full bg-sea-800 text-white">
          <Check className="size-6" />
        </span>
        <h2 className="mt-6 text-3xl font-medium text-ink-950">Thank you for reaching out.</h2>
        <p className="mt-3 max-w-md text-base leading-7 text-ink-700">
          Your details have been received in this prototype. We’ll follow up with next steps once the form is connected.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2.5">
          <Label htmlFor="contact-name">Name</Label>
          <Input id="contact-name" name="name" autoComplete="name" placeholder="Your name" required className="h-13 rounded-xl border-sea-900/12 bg-white px-4 text-base shadow-none md:text-base" />
        </div>
        <div className="space-y-2.5">
          <Label htmlFor="contact-page-email">Email address</Label>
          <Input id="contact-page-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required className="h-13 rounded-xl border-sea-900/12 bg-white px-4 text-base shadow-none md:text-base" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2.5">
          <Label htmlFor="contact-phone">Phone number</Label>
          <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" className="h-13 rounded-xl border-sea-900/12 bg-white px-4 text-base shadow-none md:text-base" />
        </div>
        <div className="space-y-2.5">
          <Label htmlFor="property-location">Property location</Label>
          <Input id="property-location" name="propertyLocation" autoComplete="street-address" placeholder="City or region" required className="h-13 rounded-xl border-sea-900/12 bg-white px-4 text-base shadow-none md:text-base" />
        </div>
      </div>

      <div className="space-y-2.5">
        <Label htmlFor="contact-message">Tell us about your property</Label>
        <Textarea id="contact-message" name="message" placeholder="Property type, goals, and anything else we should know" required rows={5} className="min-h-36 resize-none rounded-xl border-sea-900/12 bg-white px-4 py-3 text-base shadow-none md:text-base" />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-sm leading-5 text-ink-700/70">We’ll only use your details to respond to this enquiry.</p>
        <Button type="submit" className="h-13 rounded-full bg-sea-900 px-7 !text-white hover:bg-sea-800">
          Send enquiry
          <ArrowUpRight className="size-4" />
        </Button>
      </div>
    </form>
  );
}
