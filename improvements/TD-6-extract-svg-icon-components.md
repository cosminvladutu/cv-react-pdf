# TD-6: Extract SVG Icon Components for Contacts

## Type: Tech Debt
## Priority: Medium–High

---

## Problem

SVG icon paths for contact methods (phone, email, location, LinkedIn, Teams, Medium) are duplicated inline in both `LeftSection.tsx` and `LeftSectionOnePage.tsx` (or the merged variant). This makes the code verbose, hard to maintain, and error-prone if icons need to be updated or reused elsewhere.

---

## Affected Files

- `src/components/CvDocument/LeftSection/LeftSection.tsx` (and/or merged variant)
- `src/components/CvDocument/LeftSection/LeftSectionOnePage.tsx` (to be deleted after merge)
- New file: `src/components/CvDocument/LeftSection/ContactIcons.tsx`

---

## Proposed Solution

1. Create a new file `ContactIcons.tsx` in the same folder:

```tsx
// src/components/CvDocument/LeftSection/ContactIcons.tsx
import React from 'react';
import { Svg, Path, G } from '@react-pdf/renderer';

export const PhoneIcon = () => (
  <Svg width="10px" height="10px">
    <G transform="scale(0.235)">
      <Path fillRule="evenodd" fill="#FFF" d="..." />
    </G>
  </Svg>
);
// ...repeat for EmailIcon, LocationIcon, LinkedInIcon, TeamsIcon, MediumIcon
```

2. Replace all inline SVGs in `LeftSection` with the named icon components:

```tsx
import { PhoneIcon, EmailIcon, ... } from './ContactIcons';

<ContactItem icon={<PhoneIcon />} ... />
```

3. If/when profile data is extracted (TD-5), icons can be mapped by type.

---

## Notes

- This task is best done after or together with TD-3 (merge LeftSection variants) and TD-5 (extract personal data), as all three touch the same code.
- The extracted icon components can be reused in other places (e.g., a web version of the CV, or a contact page).

---

## Acceptance Criteria

- [ ] All contact SVG icons are defined as named components in `ContactIcons.tsx`
- [ ] `LeftSection.tsx` (and merged variant) uses named icon components, not inline SVG
- [ ] No SVG path duplication in the codebase
- [ ] `npm run build` passes, PDFs render identically to before
