import { Dumbbell, StretchHorizontal, Swords } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Training"
          title="Pick a program, follow it through"
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map(({ key, icon: Icon, title, body }) => (
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
