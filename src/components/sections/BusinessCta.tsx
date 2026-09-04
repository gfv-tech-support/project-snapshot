import { ArrowUpRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GFV_PROVIDER_ONBOARDING_URL } from "@/lib/site";

const BULLETS = [
  {
    key: "gyms",
    label: "Gym Owners",
    body: "Publish your gym profile, set membership plans, and manage members.",
  },
  {
    key: "coaches",
    label: "Coaches & Trainers",
    body: "Build your client roster and deliver training programs.",
  },
  {
    key: "therapists",
    label: "Physical Therapists",
    body: "Connect with athletes needing licensed sports rehab.",
  },
] as const;

/** Conversion block for gyms, coaches, and physical therapists. */
export function BusinessCta() {
  return (
    <section id="business" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 sm:py-24">
        <div className="rounded-lg border border-primary/40 bg-card p-6 text-center sm:p-10">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            For gyms, coaches and therapists
          </p>
          <h2 className="mt-3 font-display text-xl font-black uppercase leading-tight tracking-[0.01em] text-foreground sm:text-3xl">
            Run a gym or coach on the side?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Put your gym on the map, sell memberships, or take private clients — and reach athletes who already train every week.
          </p>

          <ul className="mx-auto mt-8 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
            {BULLETS.map(({ key, label, body }) => (
              <li
                key={key}
                className="rounded-card border border-border bg-background p-4"
              >
                <p className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.06em] text-foreground">
                  <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button asChild size="lg" className="w-full font-semibold sm:w-auto">
              <a
                href={GFV_PROVIDER_ONBOARDING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply as a Service Provider
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
