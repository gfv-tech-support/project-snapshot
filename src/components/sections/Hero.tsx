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
        className="absolute inset-0 -z-20 size-full object-cover object-center opacity-40"
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

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-12 pt-14 text-center sm:px-6 sm:pb-16 sm:pt-20">
        <p className="inline-flex items-center gap-2 rounded-pill border border-border bg-card/70 px-4 py-1.5 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-pill bg-primary" aria-hidden="true" />
          Muay Thai, strength and recovery — plus the gyms near you
        </p>

        <h1 className="mt-6 font-display text-[2.1rem] font-black leading-[1.06] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Where are you training{" "}
          <span className="text-primary">tonight?</span>
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          GFV keeps your sessions, your gym and your coach in one place. Follow a program,
          book a class, or find a therapist when something starts to hurt.
        </p>

        <div className="mt-8 w-full max-w-2xl">
          <StoreButtons />
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Free to browse · iPhone, Android and web · No card needed to look around
        </p>

        <img
          src={appMockup}
          alt="GFV mobile workout player with interval timers next to the GFV web training dashboard"
          width={1536}
          height={1024}
          className="mt-10 w-full max-w-3xl [mask-image:linear-gradient(to_bottom,black_72%,transparent_100%)] drop-shadow-2xl sm:mt-14"
        />
      </div>
    </section>
  );
}
