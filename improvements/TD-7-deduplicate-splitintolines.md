# TD-7: Deduplicate splitIntoLines Utility

## Type: Tech Debt
## Priority: Medium

---

## Problem

The `splitIntoLines` function, which splits a string into lines of a maximum character length (with word/character break logic), is defined separately in both `BlogContributionItem.tsx` and `CertificationItem.tsx`. The logic is nearly identical, but duplicated code is harder to maintain and risks subtle divergence.

---

## Affected Files

- `src/components/CvDocument/LeftSection/BlogContributionItem.tsx`
- `src/components/CvDocument/LeftSection/CertificationItem.tsx`
- New file: `src/utils/splitIntoLines.ts` (to be created)

---

## Proposed Solution

1. Create a new utility file:

```ts
// src/utils/splitIntoLines.ts
export function splitIntoLines(text: string, maxCharsPerLine = 30, breakChars: string[] = ['/', '.', ' ']): string[] {
  if (text.length <= maxCharsPerLine) return [text];
  const lines: string[] = [];
  let remainingText = text;
  while (remainingText.length > 0) {
    if (remainingText.length <= maxCharsPerLine) {
      lines.push(remainingText);
      break;
    }
    let breakPoint = -1;
    for (const char of breakChars) {
      const idx = remainingText.substring(0, maxCharsPerLine).lastIndexOf(char);
      if (idx > breakPoint) breakPoint = idx;
    }
    const splitAt = breakPoint > 0 ? breakPoint + 1 : maxCharsPerLine;
    lines.push(remainingText.substring(0, splitAt));
    remainingText = remainingText.substring(splitAt);
  }
  return lines;
}
```

2. Replace the local `splitIntoLines` functions in both components with an import from the utility:

```ts
import { splitIntoLines } from '../../../utils/splitIntoLines';
```

3. Adjust usage as needed (the utility is more general, but defaults match the current logic).

---

## Acceptance Criteria

- [ ] Only one implementation of `splitIntoLines` exists (in `src/utils/splitIntoLines.ts`)
- [ ] Both `BlogContributionItem.tsx` and `CertificationItem.tsx` import and use the shared utility
- [ ] No change in PDF output
- [ ] `npm run build` passes
