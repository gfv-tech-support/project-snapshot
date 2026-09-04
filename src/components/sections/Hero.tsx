import heroGym from "@/assets/hero-gym.jpg";
import appMockup from "@/assets/app-mockup.png";
import { StoreButtons } from "@/components/sections/StoreButtons";

/** Centered, image-backed hero with the three primary conversion actions. */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Moody training-facility backdrop */}
      <img
        src={heroGym}
        alt="Fighter wrapping hands in a dimly lit Muay Thai training facility"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 size-full object-cover object-center opacity-30 sm:opacity-40"
      />
      {/* Side + bottom fade so the photo settles into the page instead of framing it */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--background)_0%,transparent_35%,transparent_65%,var(--background)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--background)_70%,transparent)_0%,transparent_35%,var(--background)_92%)]"
      />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-8 pt-10 text-center sm:px-6 sm:pb-10 sm:pt-20">
        <p className="inline-flex w-fit items-center gap-2 rounded-pill border border-border bg-card/70 px-3 py-1.5 text-[11px] text-muted-foreground sm:px-4 sm:text-xs">
          <span className="size-1.5 shrink-0 rounded-pill bg-primary" aria-hidden="true" />
          <span className="sm:hidden">Train, book, recover — one app</span>
          <span className="hidden sm:inline">
            Muay Thai, strength and recovery — plus the gyms near you
          </span>
        </p>

        <h1 className="mt-5 font-display text-[1.9rem] font-black leading-[1.08] tracking-tight text-foreground sm:mt-6 sm:text-5xl md:text-6xl">
          Where are you training{" "}
          <span className="text-primary">tonight?</span>
        </h1>

        <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground sm:mt-5 sm:max-w-2xl sm:text-lg">
          Your sessions, your gym and your coach in one place. Follow a program, book a
          class, or find a therapist when something hurts.
        </p>

        <div className="mt-7 w-full max-w-2xl sm:mt-8">
          <StoreButtons />
        </div>

        <p className="mt-4 text-[11px] text-muted-foreground sm:text-xs">
          Free to browse · No card needed
        </p>

        {/* Slightly wider than the viewport on phones so the screens stay legible. */}
        <img
          src={appMockup}
          alt="GFV mobile workout player with interval timers next to the GFV web training dashboard"
          width={1536}
          height={1024}
          className="mt-8 w-[124%] max-w-none [mask-image:linear-gradient(to_bottom,black_72%,transparent_100%)] drop-shadow-2xl sm:mt-14 sm:w-full sm:max-w-3xl"
        />
      </div>
    </section>
  );
}
