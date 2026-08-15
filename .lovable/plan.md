# Plan: GFV Project Rules File & Agent Knowledge Base

## Goal

Create a centralized, repo-committed rules file that is the source of truth for all future development, plus a lightweight directory structure the agent can read/write across sessions to save tokens (plans, chat summaries, lessons learned, knowledge/patterns). No UI, theme, components, routes, or dependencies are touched.

## Directory structure

Create a top-level `docs/` directory (none exists today):

```text
docs/
├── README.md              # Index + how-to-use this knowledge base
├── PROJECT_RULES.md       # The 13 development & design rules (source of truth)
├── plans/                 # Saved plan records for future reference
│   └── .gitkeep
├── chat-history/          # Conversation summaries (token-saving recall)
│   └── .gitkeep
├── learning/              # Lessons learned / mistakes to avoid repeating
│   └── .gitkeep
└── knowledge/             # Patterns, solutions, reusable references
    └── .gitkeep
```

Location rationale: `docs/` is conventional, visible to the user, keeps the root uncluttered (root already has `AGENTS.md`, `README.md`), and is committed to git so it persists across sessions and environments.

## Files to create

### 1. `docs/PROJECT_RULES.md`

The authoritative rules file containing all 13 rules, verbatim in intent:

1. Design system is the single source of truth — all visual decisions use the centralized GFV design-token system; no one-off visual values when a token exists.
2. Color tokens — never hard-code colors; always use centralized theme tokens; if a genuinely new color is needed, add it to the theme first with a meaningful semantic name, then reference it; never one-off colors.
3. Radius tokens — never hard-code border-radius or arbitrary radius utilities; always use centralized semantic radius tokens; if a new radius is needed, add it to the radius system first with a meaningful name, then use it; never one-off radius values.
4. Typography — Inter for headings/display, Roboto for body/supporting text; no new font without adding it to the design system first.
5. shadcn/ui — use existing shadcn/ui components where appropriate; do not introduce another component library when shadcn solves it; customize through GFV design tokens, not one-off styles.
6. Responsive design — every UI change considers mobile, tablet, desktop; do not design desktop-first and shrink.
7. Accessibility — semantic HTML, accessible contrast, keyboard navigation, visible focus states, meaningful labels, appropriate ARIA; never sacrifice readability for visual effects.
8. Visual quality — premium, modern, athletic, strong, clean, confident; avoid generic AI/SaaS patterns, excessive gradients/cards/rounded containers, unnecessary decoration.
9. Architecture — keep it simple and maintainable; no unnecessary dependencies, abstractions, state management, backend services, APIs, database integrations; the landing site is primarily static marketing.
10. Incremental development — one meaningful piece at a time, verify it, keep existing functionality working; no unrelated changes.
11. Existing functionality — understand current usage before changing; do not remove functionality unless explicitly requested or clearly unnecessary.
12. Code quality — strict, maintainable TypeScript; avoid duplicated logic, unnecessary abstractions, unused imports/deps, dead code, magic values when a design token should be used.
13. Verification — after meaningful changes: type-check, check build errors, verify responsive behavior when UI changes, confirm design tokens are used correctly.

Each rule gets its own section with a short heading and the rule text. A header note states: "This file is the project's source of truth for development. Follow these rules for every future change unless a later instruction explicitly overrides one."

### 2. `docs/README.md`

A short index that explains the knowledge-base structure, what each folder is for, and that `PROJECT_RULES.md` must be read before any implementation work. Includes a quick table of contents linking to each rule and folder.

### 3. `.gitkeep` placeholders

In `plans/`, `chat-history/`, `learning/`, and `knowledge/` so the empty directories are tracked by git.

## Memory integration (so future sessions actually read the rules)

Repo files are not auto-injected into the agent context — `mem://` is. To guarantee future sessions read the rules file, add one Core entry to `mem://index.md`:

> Read `docs/PROJECT_RULES.md` before any implementation change; follow its 13 rules.

This keeps the always-in-context Core line short while pointing to the full rules in the repo. The existing GFV Core rules and the brand-tokens memory remain unchanged.

## What is NOT modified

- No changes to `src/` (UI, theme, components, routes, hooks, lib).
- No new dependencies, no installs, no builds, no refactors.
- No changes to `package.json`, `vite.config.ts`, `tsconfig.json`, `components.json`.
- The existing `mem://` design memory (`gfv-brand-tokens`) is left intact; only one Core pointer line is added to `index.md`.

## Verification after creation

- Confirm `docs/PROJECT_RULES.md` exists and contains all 13 rules.
- Confirm the four subdirectories exist with `.gitkeep`.
- Confirm no file under `src/` was modified (git status clean for `src/`).
- Report the file path, the rules added, and explicit confirmation that the UI/implementation was not touched.

## Report back

After implementation, report:
- The file path of the rules file.
- What rules were added (the 13 categories).
- Confirmation that no UI or implementation was modified.
