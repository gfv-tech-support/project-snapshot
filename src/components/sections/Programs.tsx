import { Dumbbell, StretchHorizontal, Swords } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/SectionHeading";

const PROGRAMS = [
  {
    key: "striking",
    icon: Swords,
    title: "Muay Thai & Striking",
    body: "8-week structured courses with technical breakdowns, combinations, and sparring exchange craft.",
  },
  {
    key: "strength",
    icon: Dumbbell,
    title: "Strength & Conditioning",
    body: "Fighter-specific power, endurance circuits, and functional strength built around your fight calendar.",
  },
  {
    key: "mobility",
    icon: StretchHorizontal,
    title: "Stretching & Mobility",
    body: "Daily mobility routines, injury prevention work, and post-training recovery sessions.",
  },
] as const;

/** Core training programs — what athletes get. */
export function Programs() {
  return (
    <section id="programs" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="What athletes get"
          title="Everything you need to compete and progress"
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
