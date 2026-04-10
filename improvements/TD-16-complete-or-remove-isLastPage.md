# TD-16: Complete or Remove isLastPage Prop Logic

## Type: Tech Debt
## Priority: Low–Medium

---

## Problem

The `isLastPage` prop is defined on `ProjectCardProps` and `RightSectionProps` and is partially wired into the layout logic (adds extra margin to the last project card on the last page). However, `CvDocument.tsx` never actually passes `isLastPage={true}` to any `RightSection` instance, so the feature is half-implemented and has no effect.

---

## Affected Files

- `src/components/CvDocument/CvDocument.tsx`
- `src/components/CvDocument/RightSection/RightSection.tsx`
- `src/components/CvDocument/RightSection/ProjectCard.tsx`

---

## Proposed Solution

- Decide if the extra margin for the last project card on the last page is needed. If so, pass `isLastPage={true}` to the final `RightSection` in `CvDocument.tsx`:
  ```tsx
  <RightSection
    projects={thirdPageProjects}
    workExperienceTitle=""
    hideHeader={true}
    isLastPage={true}
  />
  ```
- If not needed, remove the `isLastPage` prop and all related logic from the codebase.

---

## Acceptance Criteria

- [ ] If the feature is kept, the last project card on the last page has extra margin as intended
- [ ] If removed, no dead prop or logic remains
- [ ] `npm run build` and `npm run lint` pass
