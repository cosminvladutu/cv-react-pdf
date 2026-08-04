# TD-12: Strengthen the ContactItem Content Contract

## Type: Tech Debt
## Priority: Medium

---

## Problem

`ContactItem` currently accepts both optional `text` and optional `children`, plus an optional `link`. This permits ambiguous combinations that the component cannot represent consistently:

- `link` is applied only when `text` is present; a caller that supplies `children` and `link` silently gets unlinked content.
- The `if (children)` branch drops valid but falsy content such as an empty string or `0`.
- `isDiacriticalText(content: any)` bypasses the project's strict TypeScript settings.
- The linked and non-linked paths duplicate the diacritical-text decision.

All current `ContactItem` call sites pass a string through `text`; none use `children`. The API can therefore be simplified without changing the rendered sidebar.

---

## Affected Files

- `src/components/CvDocument/LeftSection/ContactItem.tsx`
- `src/components/CvDocument/LeftSection/LeftSection.tsx`
- `src/components/CvDocument/LeftSection/LeftSectionOnePage.tsx` (until TD-3 merges it)

---

## Proposed Solution

1. Make the normal text mode explicit and safe:
   ```ts
   interface TextContactItemProps {
     icon: ReactNode;
     text: string;
     link?: string;
   }
   ```
2. Remove `children` if arbitrary child content is not a real requirement. If it is needed later, add a separate discriminated-union mode that does not permit a `link` at the same time.
3. Replace the `any` parameter with a string-only diacritic helper and determine the text component once before optionally wrapping it in `Link`.
4. Preserve the current icon, text, link URL, wrapper order, and styles so the PDF output remains unchanged.

---

## Acceptance Criteria

- [ ] Invalid `text`/`children`/`link` combinations are rejected by TypeScript
- [ ] No `any` remains in `ContactItem.tsx`
- [ ] Every current contact entry renders identical text, icon, and link target
- [ ] `npm run build` passes and `npm run lint` completes with no warnings