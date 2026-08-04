# IMP-8: Make BlogContributionItem URLs Clickable in PDF

## Type: Improvement
## Priority: Medium
## Status: Closed - Not Needed

---

## Resolution

Closed as not needed. In the generated PDF, blog URLs are already usable as links in common PDF viewers, so no code change is required for this item.

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

- [x] Item closed as not needed
- [x] No code changes required
- [x] Existing visual style preserved
