import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";

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
 * All visuals come from the centralized GFV design tokens
 * (src/styles.css). No hard-coded colors or radii.
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo / wordmark */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`${SITE_NAME} home`}
        >
          <span
            className="grid size-8 shrink-0 place-items-center rounded-button bg-primary font-display text-sm font-extrabold text-primary-foreground"
            aria-hidden="true"
          >
            G
          </span>
          <span className="font-display text-base font-bold tracking-tight text-foreground">
            {SITE_NAME}
          </span>
        </Link>

        {/* Desktop primary nav */}
        <nav
          aria-label="Primary"
          className="hidden min-w-0 items-center justify-center gap-1 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              to={link.to}
              activeProps={{
                className: "text-foreground",
              }}
              inactiveProps={{
                className: "text-muted-foreground",
              }}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-sm px-3 py-2 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden shrink-0 md:block">
          <Button asChild size="sm">
            <a href={GFV_WEB_APP_URL} target="_blank" rel="noopener noreferrer">
              Open Web App
            </a>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden">
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
              {/* Visually-hidden title for the dialog (a11y). */}
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex h-16 items-center border-b border-border px-4">
                <span
                  className="grid size-8 shrink-0 place-items-center rounded-button bg-primary font-display text-sm font-extrabold text-primary-foreground"
                  aria-hidden="true"
                >
                  G
                </span>
                <span className="ml-2 font-display text-base font-bold tracking-tight text-foreground">
                  {SITE_NAME}
                </span>
              </div>

              <nav
                aria-label="Mobile primary"
                className="flex flex-col gap-1 px-2 py-4"
              >
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.key}>
                    <Link
                      to={link.to}
                      activeProps={{ className: "text-foreground bg-accent" }}
                      inactiveProps={{ className: "text-muted-foreground" }}
                      activeOptions={{ exact: link.to === "/" }}
                      className={cn(
                        "rounded-sm px-3 py-2.5 text-sm font-medium transition-colors",
                        "hover:bg-accent hover:text-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      )}
                    >
                      {link.label}
                    </Link>
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
