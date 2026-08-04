# TD-13: Add PDF Rendering Regression Tests

## Type: Tech Debt
## Priority: High

---

## Problem

The repository has no automated test files or test script. The planned refactors in TD-3 through TD-7 change shared PDF composition, fonts, data, and SVGs. A successful TypeScript build cannot prove that both CV variants still render, retain their links and Romanian diacritics, or keep the intended page layout.

---

## Affected Files

- `package.json`
- New test configuration and test files
- `src/components/CvDocument/CvDocument.tsx`
- `src/components/CvDocument/CvDocumentOnePage.tsx`

---

## Proposed Solution

1. Add a test runner compatible with the project's TypeScript and React versions, along with an `npm test` script.
2. Add renderer tests for the full and one-page document components that generate PDF output and fail on rendering errors.
3. Assert stable, user-visible invariants in the generated output: both documents render, the expected page count is retained, key contact links remain present, and Romanian diacritical text is preserved.
4. Add a visual-regression stage that rasterizes generated PDF pages and compares them to approved baselines with an explicit tolerance. Run it in CI and require an intentional baseline update for accepted layout changes.
5. Keep the tests focused on output contracts, not private implementation details, so component cleanup remains easy.

---

## Acceptance Criteria

- [ ] `npm test` runs the PDF regression suite locally and in CI
- [ ] Both CV variants are rendered by automated tests
- [ ] Tests detect missing text, missing links, rendering failures, and unexpected page-count changes
- [ ] Visual comparisons protect the approved layout with a documented tolerance
- [ ] Existing PDFs render identically before and after TD-3 through TD-7