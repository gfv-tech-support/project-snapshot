import { Check } from "lucide-react";

const BADGES = [
  "Licences checked by hand",
  "Your training syncs everywhere, instantly",
  "Payments handled securely by Stripe",
] as const;

/** Horizontal row of platform trust badges. */
export function TrustBadges() {
  return (
    <section aria-label="Platform benefits" className="border-t border-border bg-card/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <ul className="grid gap-4 sm:grid-cols-3">
          {BADGES.map((badge) => (
            <li
              key={badge}
              className="flex min-w-0 items-center justify-center gap-2 rounded-pill border border-border bg-card px-4 py-3 text-center text-sm text-muted-foreground"
            >
              <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{badge}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
