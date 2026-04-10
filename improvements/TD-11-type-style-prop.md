# TD-11: Replace style?: any with Proper Type

## Type: Tech Debt
## Priority: Medium

---

## Problem

The `style` prop in core element components (`Text`, `DiacriticalText`, `Title`) is typed as `any`. This disables type safety and can lead to runtime errors or subtle bugs, especially as the codebase grows or is refactored.

---

## Affected Files

- `src/components/CvDocument/elements/Text.tsx`
- `src/components/CvDocument/elements/DiacriticalText.tsx`
- `src/components/CvDocument/elements/Title.tsx`

---

## Proposed Solution

1. Import the `Style` type from `@react-pdf/types` in each file:
   ```ts
   import type { Style } from '@react-pdf/types';
   ```
2. Change the `style` prop type from `any` to `Style` (or `Style | undefined`):
   ```ts
   style?: Style;
   ```
3. Update all usages to ensure the correct type is passed. If any custom style objects are not compatible, refactor them to match the `Style` type.

---

## Acceptance Criteria

- [ ] All `style` props in the above components are typed as `Style` (not `any`)
- [ ] No type errors in usage
- [ ] `npm run build` and `npm run lint` pass
