# IMP-8: Make BlogContributionItem URLs Clickable in PDF

## Type: Improvement
## Priority: Medium

---

## Problem

Currently, `BlogContributionItem.tsx` renders blog URLs as plain text. In a PDF, these should be clickable links using the `Link` component from `@react-pdf/renderer` for better usability.

---

## Affected Files

- `src/components/CvDocument/LeftSection/BlogContributionItem.tsx`

---

## Proposed Solution

- Replace the plain text rendering of the URL with a `Link` component:
  ```tsx
  import { Link } from '@react-pdf/renderer';
  // ...
  <Link src={url} style={styles.url}>{line}</Link>
  ```
- Ensure the style matches the current appearance (font size, color, etc.).
- Optionally, add `aria-label` or similar for accessibility if supported.

---

## Acceptance Criteria

- [ ] All blog URLs in the PDF are clickable links
- [ ] Visual style is preserved
- [ ] `npm run build` passes
