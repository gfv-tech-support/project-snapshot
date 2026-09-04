import { StoreButtons } from "@/components/sections/StoreButtons";

/** Final centered conversion banner. */
export function FinalCta() {
  return (
    <section className="border-t border-border bg-card/30">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24">
        <h2 className="font-display text-xl font-black uppercase leading-tight tracking-[0.01em] text-foreground sm:text-4xl">
          Ready for your next session?
        </h2>
        <p className="mt-4 text-sm text-muted-foreground sm:text-base">
          Open GFV in your browser or grab the app — it takes a minute.
        </p>
        <div className="mt-8 w-full">
          <StoreButtons />
        </div>
      </div>
    </section>
  );
}
