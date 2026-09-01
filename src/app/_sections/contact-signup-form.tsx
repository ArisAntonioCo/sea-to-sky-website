"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactSignupForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <p className="mt-8 text-lg font-medium text-ink-900" role="status">
        You’re on the list. We’ll be in touch.
      </p>
    );
  }

  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      <div className="flex max-w-2xl flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="contact-email">
          Email address
        </label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          required
          className="h-16 flex-1 rounded-xl border-0 bg-white/45 px-5 text-xl font-normal text-ink-950 shadow-none placeholder:font-normal placeholder:text-ink-950/30 focus-visible:ring-2 focus-visible:ring-sea-700/40 sm:text-2xl md:text-2xl"
        />
        <Button
          type="submit"
          className="h-16 rounded-full bg-white/58 px-8 text-base font-medium !text-ink-950 hover:bg-white/80"
        >
          Sign me up
          <ArrowRight className="size-4" />
        </Button>
      </div>
      <p className="mt-3 max-w-xl text-sm leading-5 text-ink-700/75">
        We’ll never share your details. By signing up, you agree to receive occasional updates from Sea to Sky.
      </p>
    </form>
  );
}
