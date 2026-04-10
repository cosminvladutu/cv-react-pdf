# TD-15: Remove Invalid PDF Style Units (vh)

## Type: Tech Debt
## Priority: Low

---

## Problem

The `LeftSectionEmpty.tsx` component uses `height: '100vh'` in a PDF context. The `vh` (viewport height) unit is a web/CSS concept and has no meaning in PDF rendering via `@react-pdf/renderer`. This can cause layout bugs or unpredictable results.

---

## Affected Files

- `src/components/CvDocument/LeftSection/LeftSectionEmpty.tsx`

---

## Proposed Solution

- Replace `height: '100vh'` with a fixed height (e.g., `height: '100%'` or a specific point value) or remove the style entirely if not needed.
- Ensure the container uses `minHeight: '100%'` or similar to fill the page as intended.

---

## Acceptance Criteria

- [ ] No usage of `vh` units in any PDF-rendered component
- [ ] `LeftSectionEmpty` fills the intended space in the PDF
- [ ] `npm run build` and `npm run lint` pass
