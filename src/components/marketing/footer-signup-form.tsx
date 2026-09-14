"use client";

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
      <div className="flex h-15 w-full max-w-lg items-center rounded-full border border-white/22 bg-white/[0.07] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-[border-color,box-shadow] duration-200 focus-within:border-white/45 focus-within:ring-3 focus-within:ring-white/12">
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
          className="h-full min-w-0 flex-1 rounded-full border-0 bg-transparent px-4 text-base text-white shadow-none outline-none placeholder:text-white/42 focus-visible:border-0 focus-visible:ring-0 sm:px-5"
        />
        <Button
          type="submit"
          className="h-full rounded-full bg-white px-5 text-sm font-medium !text-sea-950 shadow-[0_2px_12px_rgba(0,0,0,0.16)] hover:bg-white/88 sm:px-7 sm:text-base"
        >
          Sign me up
        </Button>
      </div>
    </form>
  );
}
