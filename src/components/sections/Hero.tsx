import { Zap } from "lucide-react";

import heroGym from "@/assets/hero-gym.jpg";
import appMockup from "@/assets/app-mockup.png";
import { StoreButtons } from "@/components/sections/StoreButtons";

/** Centered, image-backed hero with the three primary conversion actions. */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Moody training-facility backdrop with vignette overlay */}
      <img
        src={heroGym}
        alt="Fighter wrapping hands in a dimly lit Muay Thai training facility"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 size-full object-cover object-center opacity-45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_75%)]"
      />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-24 sm:pt-24">
        <p className="inline-flex items-center gap-2 rounded-pill bg-primary/10 px-4 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
          <Zap className="size-3.5" aria-hidden="true" />
          The all-in-one combat &amp; fitness platform
        </p>

        <h1 className="mt-6 font-display text-4xl font-black uppercase leading-[1.05] tracking-[0.01em] text-foreground sm:text-5xl md:text-6xl">
          Train harder. Recover faster.{" "}
          <span className="text-primary">Find your gym.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Access structured Muay Thai, strength, and recovery programs — or discover verified
          gyms, coaches, and physical therapists in your city.
        </p>

        <div className="mt-8 w-full max-w-2xl">
          <StoreButtons />
        </div>

        <img
          src={appMockup}
          alt="GFV mobile workout player with interval timers next to the GFV web training dashboard"
          width={1536}
          height={1024}
          className="mt-12 w-full max-w-3xl drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
