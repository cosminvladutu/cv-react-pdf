# TD-10: Remove Dead and Unused Code

## Type: Tech Debt
## Priority: Medium

---

## Problem

Several files and code fragments are present in the codebase but serve no purpose. They increase maintenance burden, risk confusion, and can bloat the bundle.

### Unused/Dead Code List

- `pages/api/hello.ts` — Next.js template stub, not used by the app.
- `src/fonts/Lato-Black-subset.js`, `src/fonts/Lato-Bold-subset.js`, `src/fonts/Lato-Regular-subset.js` — each just re-exports a font path string, never imported anywhere.
- `FontDebugger.tsx` — debug/test component, not rendered anywhere.
- Unused imports: `Image` in `pages/index.tsx`; `Text`, `View`, `Image` in both `CvDocument.tsx` and `CvDocumentOnePage.tsx`.
- Unused styles: `fullHeight`, `section` in `CvDocument.tsx` styles.
- Commented-out `useEffect` block in `pages/index.tsx`.
- Unused styles: `section` in `CvDocumentOnePage.tsx`; `contactItemContainer` and `contactIcon` in `LeftSection.tsx`; and the empty `text` style in `ContactItem.tsx`.
- The decorative profile image in both left-section variants lacks `alt=""`, producing the current `jsx-a11y/alt-text` lint warning without adding useful PDF content.

---

## Affected Files

- `pages/api/hello.ts`
- `src/fonts/Lato-Black-subset.js`
- `src/fonts/Lato-Bold-subset.js`
- `src/fonts/Lato-Regular-subset.js`
- `src/components/CvDocument/RightSection/FontDebugger.tsx`
- `pages/index.tsx`
- `src/components/CvDocument/CvDocument.tsx`
- `src/components/CvDocument/CvDocumentOnePage.tsx`
- `src/components/CvDocument/LeftSection/LeftSection.tsx`
- `src/components/CvDocument/LeftSection/LeftSectionOnePage.tsx` (until TD-3 merges it)
- `src/components/CvDocument/LeftSection/ContactItem.tsx`

---

## Proposed Solution

1. **Delete** the following files:
   - `pages/api/hello.ts`
   - `src/fonts/Lato-Black-subset.js`
   - `src/fonts/Lato-Bold-subset.js`
   - `src/fonts/Lato-Regular-subset.js`
   - `src/components/CvDocument/RightSection/FontDebugger.tsx`

2. **Remove unused imports**:
   - `Image` from `pages/index.tsx`
   - `Text`, `View`, `Image` from both `CvDocument.tsx` and `CvDocumentOnePage.tsx` (if not used)

3. **Remove unused styles**:
   - `fullHeight`, `section` from `CvDocument.tsx` styles

4. **Remove commented-out code**:
   - The `useEffect` block in `pages/index.tsx`

5. **Remove remaining unused styles**:
   - `section` from `CvDocumentOnePage.tsx`
   - `contactItemContainer`, `contactIcon` from `LeftSection.tsx`
   - the empty `text` style from `ContactItem.tsx`

6. **Resolve the decorative-image lint warning**:
   - Add `alt=""` to the profile `Image` in the merged `LeftSection` (or both variants before TD-3).
   - This is intentionally decorative metadata, so it does not alter the PDF's visual output or layout.

---

## Acceptance Criteria

- [ ] All listed files deleted
- [ ] No unused imports or styles in the codebase
- [ ] `npm run build` passes and `npm run lint` completes with no warnings
- [ ] No change in app functionality
