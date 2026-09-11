"use client";

import { ArrowRight } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FooterSignupForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <p className="mt-7 text-base font-medium text-white" role="status">
        You’re on the list. We’ll be in touch.
      </p>
    );
  }

  return (
    <form className="mt-7" onSubmit={handleSubmit}>
      <div className="flex max-w-lg flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="footer-email">
          Email address
        </label>
        <Input
          id="footer-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          required
          className="h-13 flex-1 rounded-xl border border-white/12 bg-white/7 px-4 text-base text-white shadow-none placeholder:text-white/32 focus-visible:border-white/30 focus-visible:ring-2 focus-visible:ring-white/20"
        />
        <Button
          type="submit"
          className="h-13 rounded-full bg-white px-6 text-base font-medium !text-sea-950 hover:bg-white/88"
        >
          Sign me up
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </form>
  );
}
