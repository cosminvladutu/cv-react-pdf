# TD-3 / IMP-1: Merge Duplicated LeftSection Variants into One Parametric Component

## Type: Tech Debt + Improvement
## Priority: High
## Related: IMP-1 (same feature — TD-3 is the problem, IMP-1 is the solution)

---

## Problem

`LeftSection.tsx` and `LeftSectionOnePage.tsx` are virtually identical components. Every section — 6 contact items with inline SVG icons, 22 skill items, and the education block — is duplicated verbatim. The only differences are three minor style values:

| Property | LeftSection | LeftSectionOnePage |
|---|---|---|
| `profilePictureContainer.width` | `'90%'` | `'80%'` |
| `profilePictureContainer.marginBottom` | `15` | `10` |
| `profilePicture.transform` | `'translateY(10px)'` | `'translateY(8px)'` |

Currently any change to a contact detail, skill, or education entry must be made in **both files**. They will inevitably drift.

---

## Affected Files

- `src/components/CvDocument/LeftSection/LeftSection.tsx` — will become the merged component
- `src/components/CvDocument/LeftSection/LeftSectionOnePage.tsx` — to be deleted
- `src/components/CvDocument/LeftSection/index.ts` — update exports
- `src/components/CvDocument/CvDocumentOnePage.tsx` — update import

---

## Proposed Solution

Add a `compact?: boolean` prop to `LeftSection`. When `compact={true}`, apply the slightly smaller profile picture styles used by the one-page variant.

```tsx
interface LeftSectionProps {
  compact?: boolean;
}

const LeftSection: React.FC<LeftSectionProps> = ({ compact = false }) => {
  const picContainerStyle = compact
    ? styles.profilePictureContainerCompact
    : styles.profilePictureContainer;

  const picStyle = compact
    ? styles.profilePictureCompact
    : styles.profilePicture;

  return (
    <View style={styles.container}>
      <View style={picContainerStyle}>
        <Image style={picStyle} src="/images/DSC_8292 test.jpg" />
      </View>
      {/* ... same panels for both variants ... */}
    </View>
  );
};

const styles = StyleSheet.create({
  // existing styles...
  profilePictureContainer: {
    width: '90%',
    marginHorizontal: 'auto',
    marginBottom: 15,
  },
  profilePictureContainerCompact: {
    width: '80%',
    marginHorizontal: 'auto',
    marginBottom: 10,
  },
  profilePicture: {
    borderRadius: 9999,
    transform: 'translateY(10px)',
  },
  profilePictureCompact: {
    borderRadius: 9999,
    transform: 'translateY(8px)',
  },
});
```

### Usage after the change

```tsx
// CvDocument.tsx — page 1 (unchanged usage)
<LeftSection />

// CvDocumentOnePage.tsx — was LeftSectionOnePage, now:
<LeftSection compact />
```

### Cleanup

1. Delete `src/components/CvDocument/LeftSection/LeftSectionOnePage.tsx`
2. Remove `LeftSectionOnePage` from `src/components/CvDocument/LeftSection/index.ts`
3. Update `CvDocumentOnePage.tsx`:
   - Remove `import { LeftSectionOnePage } from "./LeftSection"`
   - Add/update `import LeftSection from "./LeftSection/LeftSection"` (or via index)
   - Replace `<LeftSectionOnePage />` with `<LeftSection compact />`

---

## Notes

- This task is a prerequisite for or can be combined with **TD-5** (extracting personal data) and **TD-6** (extracting SVG icons), since those will also touch both LeftSection files.
- If TD-5 and TD-6 are done first, the merge becomes trivial (styles are the only diff).

---

## Acceptance Criteria

- [ ] `LeftSectionOnePage.tsx` deleted
- [ ] `LeftSection.tsx` accepts `compact` prop
- [ ] One-page PDF renders with the compact style (smaller profile picture)
- [ ] Full-page PDF renders with the normal style
- [ ] No duplication of contact items, skill items, or education blocks
- [ ] `npm run build` passes
