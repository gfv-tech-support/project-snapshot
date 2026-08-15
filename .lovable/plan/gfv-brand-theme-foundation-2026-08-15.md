# GFV Brand Theme Foundation

Establish the GFV dark-first design token system (color, typography, radius) and wire it into the existing shadcn/ui components. No navbar, hero, sections, or landing content in this step.

## Project-wide rules (enforced from now on)

- No hard-coded colors in components or page styles — only semantic theme tokens. A genuinely new color is added to the theme with a semantic name first, then used via that token.
- No hard-coded or arbitrary radius values — only the semantic radius tokens. A genuinely new radius is added to the radius system first.


## 1. Color tokens

Convert the GFV palette to oklch and set it as the single theme in `src/styles.css`. GFV is dark-first, so the dark values become the default (`:root`), and the app shell renders in dark mode.

| Token | Value | Semantic use |
|---|---|---|
| background | #0A0A0A | page background |
| card / popover | #141414 | surfaces, dialogs, dropdowns |
| primary | #D4AF37 | gold accent, primary actions |
| primary-foreground | #0A0A0A | text on gold |
| foreground | #E7E6E1 | main text |
| muted-foreground | #9CA3AF | supporting text |
| success | #10B981 | new token |
| skeleton | #1A1A1A | skeleton on background |
| skeleton-card | #242424 | skeleton on card |
| ghost-hover / accent | #1F1F1F | ghost button hover |
| ghost-active | #2A2A2A | ghost button pressed |

Also aligned: `secondary`, `muted`, `border`, `input`, `ring` (gold-tinted focus ring), sidebar tokens, and chart tokens (gold-led athletic ramp) so no shadcn component falls back to slate.

Gold stays restrained: primary actions, focus rings, and small accents only — not large filled areas.

## 2. Typography

- Load Inter (headings/display) and Roboto (body) via a `<link>` in the root route head.
- Register `--font-display: Inter` and `--font-sans: Roboto` in `@theme`, set `body` to Roboto and `h1–h6` to Inter with tighter tracking for an athletic feel.

## 3. Radius token system

Single source of truth in `@theme`:

```text
--radius-xs      4px    small accents
--radius-sm      8px    compact controls, badges
--radius-button  12px
--radius-card    12px
--radius-input   12px
--radius-lg      16px   prominent containers
--radius-pill    999px
```

This generates semantic utilities: `rounded-button`, `rounded-card`, `rounded-input`, `rounded-xs`, `rounded-sm`, `rounded-lg`, `rounded-pill`.

## 4. shadcn/ui radius audit

Sweep all 46 files in `src/components/ui/` (95 `rounded-*` occurrences) plus the two `rounded-md` buttons in `src/routes/__root.tsx`, replacing every hard-coded/default radius with the correct semantic token:

- Buttons, toggles, toggle-group items → `rounded-button`
- Cards, dialogs, alert-dialog, drawer, sheet, popover, hover-card, dropdown/context/menubar/select content, command palette, tooltip container → `rounded-card`
- Inputs, textarea, input-otp slots, select/command trigger, form controls → `rounded-input`
- Badges, menu items, tabs triggers/list, checkbox, small chips → `rounded-sm`
- Avatars, switch thumbs, slider thumb/track, progress, pagination pills, radio → `rounded-pill`
- Tiny accents (indicators, separator caps) → `rounded-xs`
- Skeleton → `rounded-sm` with the GFV skeleton surface color

After the sweep, no `rounded-md`, `rounded-xl`, `rounded-2xl`, `rounded-[Npx]`, or raw `border-radius` values remain in project source, so changing a token updates components globally.

## 5. Verification

- Grep the project for leftover non-semantic radius utilities and hard-coded hex colors.
- Typecheck, then screenshot the current page to confirm the dark theme renders with no unstyled fallback.

## Out of scope

No navbar, hero, sections, cards content, or page copy. `src/routes/index.tsx` keeps its placeholder until the UI step.
