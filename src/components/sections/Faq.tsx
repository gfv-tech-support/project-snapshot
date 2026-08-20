import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/sections/SectionHeading";

const FAQS = [
  {
    key: "devices",
    q: "Which devices can I train on?",
    a: "GFV runs in any web browser and on iPhone and Android. Your programs, logs, and progress sync instantly across every device.",
  },
  {
    key: "verified",
    q: "What does “verified” mean for gyms and professionals?",
    a: "Every gym, coach, and physical therapist submits business documentation and licensing before their profile goes live on the directory.",
  },
  {
    key: "memberships",
    q: "How do memberships and bookings get paid?",
    a: "Memberships, private sessions, and rehab appointments are billed securely through Stripe inside the GFV web app.",
  },
  {
    key: "beginners",
    q: "Do I need combat sports experience to start?",
    a: "No. Programs are structured in progressive blocks, so beginners start with fundamentals while experienced fighters jump into advanced courses.",
  },
] as const;

/** Frequently asked questions. */
export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <Accordion type="single" collapsible className="mt-10 w-full">
          {FAQS.map(({ key, q, a }) => (
            <AccordionItem key={key} value={key}>
              <AccordionTrigger className="text-left font-display text-sm font-bold uppercase tracking-[0.04em]">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
