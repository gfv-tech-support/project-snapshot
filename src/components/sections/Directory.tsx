import { BadgeCheck, HeartPulse, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/SectionHeading";

const ENTRIES = [
  {
    key: "gyms",
    icon: BadgeCheck,
    title: "Verified Gyms",
    body: "Browse gyms near you, see the class timetable, and pay for a membership without leaving the app.",
  },
  {
    key: "coaches",
    icon: Users,
    title: "Certified Coaches",
    body: "Book one-to-one striking, boxing or strength sessions with a coach who works the way you want to train.",
  },
  {
    key: "therapists",
    icon: HeartPulse,
    title: "Licensed Physical Therapists",
    body: "Get a proper assessment when something hurts, and a plan to get back to training.",
  },
] as const;

/** Verified directory — who you connect with. */
export function Directory() {
  return (
    <section id="directory" className="scroll-mt-20 border-t border-border bg-card/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="The network"
          title="Everyone here is checked before you see them"
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ENTRIES.map(({ key, icon: Icon, title, body }) => (
            <li key={key}>
              <Card className="h-full border-border bg-card transition-colors hover:border-primary/40">
                <CardHeader>
                  <span
                    className="grid size-11 place-items-center rounded-button bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="mt-4 font-display text-base font-extrabold uppercase tracking-[0.06em]">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
