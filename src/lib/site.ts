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
 */
export const GFV_WEB_APP_URL = "https://web.gfvtraining.com";

/** Service-provider onboarding / login entry point in the web app. */
export const GFV_PROVIDER_ONBOARDING_URL = "https://web.gfvtraining.com/login";

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
  /** Stable key for React lists. */
  readonly key: string;
  /** Accessible label shown to users. */
  readonly label: string;
  /** In-page anchor target on the single-page landing site. */
  readonly href: string;
}

/**
 * Primary navigation links for the site header.
 * Single-page landing site: each entry scrolls to a section on "/".
 */
export const NAV_LINKS: readonly NavLink[] = [
  { key: "programs", label: "Programs", href: "#programs" },
  { key: "directory", label: "Gyms & Coaches", href: "#directory" },
  { key: "business", label: "For Businesses", href: "#business" },
  { key: "faq", label: "FAQ", href: "#faq" },
] as const;

/** Footer utility links. */
export const FOOTER_LINKS: readonly NavLink[] = [
  { key: "terms", label: "Terms of Service", href: "#terms" },
  { key: "privacy", label: "Privacy Policy", href: "#privacy" },
  { key: "support", label: "Support", href: "#support" },
] as const;
