# IMP-1: Merge LeftSection and LeftSectionOnePage (see TD-3)

## Type: Improvement
## Priority: High

---

## Problem

See TD-3 for full context. The two LeftSection variants are nearly identical and should be merged into a single parametric component with a `compact` prop.

---

## Solution

- Add a `compact?: boolean` prop to `LeftSection`.
- Use conditional styles for the profile picture container and image.
- Delete `LeftSectionOnePage.tsx` and update all usages to use `<LeftSection compact />` where needed.

---

## Acceptance Criteria

- [ ] No code duplication between LeftSection variants
- [ ] Both PDF types render correctly
- [ ] `npm run build` passes
