import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_LINKS, SITE_NAME, GFV_WEB_APP_URL } from "@/lib/site";

/**
 * GFV global header.
 *
 * Desktop:  logo (left) · primary nav (center) · Web App CTA (right)
 * Mobile:   logo (left) · menu trigger (right) → Sheet with nav + CTA
 *
 * All visuals come from the centralized GFV design tokens (src/styles.css).
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto grid h-16 w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 md:grid-cols-3">
        {/* Logo / wordmark */}
        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`${SITE_NAME} home`}
        >
          <span
            className="grid size-8 shrink-0 place-items-center rounded-button bg-primary font-display text-sm font-extrabold text-primary-foreground"
            aria-hidden="true"
          >
            G
          </span>
          <span className="truncate font-display text-sm font-extrabold uppercase tracking-[0.14em] text-foreground sm:text-base">
            GFV <span className="text-primary">Training</span>
          </span>
        </Link>

        {/* Desktop primary nav */}
        <nav
          aria-label="Primary"
          className="hidden min-w-0 items-center justify-center gap-1 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="whitespace-nowrap rounded-sm px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden shrink-0 justify-end md:flex">
          <Button asChild size="sm" variant="secondary" className="rounded-pill text-primary">
            <a href={GFV_WEB_APP_URL} target="_blank" rel="noopener noreferrer">
              Open Web App
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex justify-end md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
              >
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              id="mobile-navigation"
              side="right"
              className="w-3/4 max-w-xs gap-0 p-0"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex h-16 items-center border-b border-border px-4">
                <span
                  className="grid size-8 shrink-0 place-items-center rounded-button bg-primary font-display text-sm font-extrabold text-primary-foreground"
                  aria-hidden="true"
                >
                  G
                </span>
                <span className="ml-2 font-display text-sm font-extrabold uppercase tracking-[0.14em] text-foreground">
                  GFV <span className="text-primary">Training</span>
                </span>
              </div>

              <nav
                aria-label="Mobile primary"
                className="flex flex-col gap-1 px-2 py-4"
              >
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.key}>
                    <a
                      href={link.href}
                      className={cn(
                        "rounded-sm px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors",
                        "hover:bg-accent hover:text-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      )}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto border-t border-border p-4">
                <Button asChild size="sm" className="w-full">
                  <a
                    href={GFV_WEB_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Web App
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
