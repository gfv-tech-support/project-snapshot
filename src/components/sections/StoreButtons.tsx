import { Apple, ArrowUpRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { APP_STORE_URL, GFV_WEB_APP_URL, GOOGLE_PLAY_URL } from "@/lib/site";

/**
 * The three primary conversion actions, reused in the hero and the final CTA.
 *
 * Mobile: full-width primary action, with the two store links sharing a row.
 * Desktop: all three inline.
 */
export function StoreButtons() {
  return (
    <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
      <Button asChild size="lg" className="w-full font-semibold sm:w-auto">
        <a href={GFV_WEB_APP_URL} target="_blank" rel="noopener noreferrer">
          Try Web App
          <ArrowUpRight aria-hidden="true" />
        </a>
      </Button>

      <div className="grid grid-cols-2 gap-3 sm:contents">
        <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            <Apple aria-hidden="true" />
            <span className="sm:hidden">iOS</span>
            <span className="hidden sm:inline">Download for iOS</span>
          </a>
        </Button>
        <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
          <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
            <Play aria-hidden="true" />
            <span className="sm:hidden">Android</span>
            <span className="hidden sm:inline">Download for Android</span>
          </a>
        </Button>
      </div>
    </div>
  );
}
