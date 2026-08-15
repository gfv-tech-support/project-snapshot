# GFV Training — Project Rules

> **This file is the project's source of truth for development.**
> Follow these rules for every future change unless a later instruction
> explicitly overrides one.
>
> Before any implementation work, read this file in full.

---

## 1. Design system is the single source of truth

All visual decisions must use the centralized GFV design-token system defined in
`src/styles.css`.

Do not introduce one-off visual values when an existing token can be used.

---

## 2. Color tokens

Never use hard-coded colors directly in components, routes, or page styles.
Always use the centralized theme tokens (`bg-card`, `text-muted-foreground`,
`border-border`, `text-primary`, etc.).

If a genuinely new color is required:

1. Add it to the centralized theme first (`src/styles.css`).
2. Give it a meaningful semantic name.
3. Then reference that token in the component.

Never introduce one-off colors.

---

## 3. Radius tokens

Never use hard-coded border-radius values or arbitrary radius utilities.

Always use the centralized semantic radius tokens:
`rounded-xs`, `rounded-sm`, `rounded-button`, `rounded-card`, `rounded-input`,
`rounded-lg`, `rounded-pill`.

If a genuinely new radius is required:

1. Add it to the centralized radius system first (`src/styles.css`).
2. Give it a meaningful semantic name.
3. Then use that token.

Never introduce one-off radius values.

---

## 4. Typography

Use the GFV typography system:

- **Inter** → headings / display text.
- **Roboto** → body / supporting text.

Do not introduce another font without explicitly adding it to the design
system first.

---

## 5. shadcn/ui

Use the existing shadcn/ui component system where appropriate.

Do not introduce another component library when an existing shadcn component
can solve the problem.

Customize shadcn components through the GFV design tokens rather than creating
inconsistent one-off styles.

---

## 6. Responsive design

Every UI change must consider:

- Mobile
- Tablet
- Desktop

Do not design desktop first and simply shrink it for mobile.

---

## 7. Accessibility

Use semantic HTML, accessible contrast, keyboard navigation, visible focus
states, meaningful labels, and appropriate ARIA attributes where necessary.

Never sacrifice readability for visual effects.

---

## 8. Visual quality

GFV should feel:

- Premium
- Modern
- Athletic
- Strong
- Clean
- Confident

Avoid generic AI-generated SaaS patterns, excessive gradients, excessive
cards, excessive rounded containers, and unnecessary decoration.

---

## 9. Architecture

Keep the project simple and maintainable.

Do not introduce unnecessary:

- dependencies
- abstractions
- state management
- backend services
- APIs
- database integrations

The landing website is primarily a static marketing experience.

---

## 10. Incremental development

Do not make large unrelated changes.

Implement one meaningful piece at a time, verify it, and keep existing
functionality working.

Do not modify unrelated files or components.

---

## 11. Existing functionality

Before changing an existing component or configuration, understand how it is
currently being used.

Do not remove existing functionality unless it is explicitly requested or
clearly unnecessary.

---

## 12. Code quality

Keep TypeScript strict and maintainable.

Avoid:

- duplicated logic
- unnecessary abstractions
- unused imports
- unused dependencies
- dead code
- magic values when a design token should be used

---

## 13. Verification

After meaningful changes:

- Run type checking.
- Check for build errors.
- Verify responsive behavior when UI is changed.
- Check that design tokens are being used correctly.
