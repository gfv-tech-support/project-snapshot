/**
 * Centralized configuration for GFV website-wide information.
 *
 * Import these values instead of hard-coding URLs or labels in components
 * or routes. Replace placeholder URLs with the real ones when available.
 */

/** Public-facing name of the site / brand. */
export const SITE_NAME = "GFV Training";

/**
 * Canonical origin of this marketing website.
 * TODO: replace with the real production URL once deployed.
 */
export const SITE_URL = "https://gfvtraining.com";

/**
 * URL of the GFV Web App (the actual product, separate from this site).
 * TODO: replace with the real Web App URL when available.
 */
export const GFV_WEB_APP_URL = "https://app.gfvtraining.com";

/**
 * Apple App Store listing for the GFV app.
 * TODO: replace with the real App Store URL when available.
 */
export const APP_STORE_URL = "https://apps.apple.com/app/gfv-training";

/**
 * Google Play Store listing for the GFV app.
 * TODO: replace with the real Play Store URL when available.
 */
export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.gfv.training";

/** A single navigation entry rendered in the header / footer. */
export interface NavLink {
  /** Stable key for React lists and active-state matching. */
  readonly key: string;
  /** Accessible label shown to users. */
  readonly label: string;
  /** TanStack Router `to` target. Must match a route path exactly. */
  readonly to: string;
}

/**
 * Primary navigation links for the site header.
 * Keep this in sync with the route files under `src/routes/`.
 */
export const NAV_LINKS: readonly NavLink[] = [
  { key: "home", label: "Home", to: "/" },
  { key: "about", label: "About", to: "/about" },
  { key: "coaches", label: "Coaches", to: "/coaches" },
  { key: "gyms", label: "Gyms", to: "/gyms" },
  { key: "programs", label: "Programs", to: "/programs" },
  { key: "exercises", label: "Exercises", to: "/exercises" },
] as const;
