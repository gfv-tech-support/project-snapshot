import { Dumbbell, StretchHorizontal, Swords } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/SectionHeading";

const PROGRAMS = [
  {
    key: "striking",
    icon: Swords,
    title: "Muay Thai & Striking",
    body: "Eight-week courses that break down technique, combinations and the timing you only learn from sparring.",
  },
  {
    key: "strength",
    icon: Dumbbell,
    title: "Strength & Conditioning",
    body: "Power and endurance work planned around your fight camp, not a generic gym split.",
  },
  {
    key: "mobility",
    icon: StretchHorizontal,
    title: "Stretching & Mobility",
    body: "Short daily routines to stay loose, plus recovery sessions for the day after a hard round.",
  },
] as const;

/** Core training programs — what athletes get. */
export function Programs() {
  return (
    <section id="programs" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Training"
          title="Pick a program, follow it through"
        />

        <ul className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map(({ key, icon: Icon, title, body }) => (
            <li key={key}>
              <Card className="h-full border-border bg-card transition-colors hover:border-primary/40">
                <CardContent className="flex gap-4 p-5 sm:flex-col sm:gap-0 sm:p-6">
                  <span
                    className="grid size-10 shrink-0 place-items-center rounded-button bg-primary/10 text-primary sm:size-11"
                    aria-hidden="true"
                  >
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0 sm:mt-4">
                    <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.06em] text-foreground sm:text-base">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
