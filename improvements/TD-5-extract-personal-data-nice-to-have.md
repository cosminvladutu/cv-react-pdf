# TD-5: Extract Personal Profile Data to Data Layer

## Type: Tech Debt
## Priority: **NICE TO HAVE** ⭐
## Effort: Medium–High

---

## Problem

Personal profile information is hardcoded directly inside presentation components. Any factual update (e.g., new phone number, new skill, new certification) requires navigating and modifying component JSX rather than a data file.

### Data currently embedded in components

| Data | Component |
|---|---|
| Contact details (phone, email, location, LinkedIn, Teams, Medium) | `LeftSection.tsx`, `LeftSectionOnePage.tsx` |
| Skill name + years of experience (22 entries) | `LeftSection.tsx`, `LeftSectionOnePage.tsx` |
| Education (university, degree, location, years) | `LeftSection.tsx`, `LeftSectionOnePage.tsx` |
| Certifications (15 entries with name + date) | `LeftSectionWithCertifications.tsx` |
| Blog contribution URLs (6 entries) | `LeftSectionWithCertifications.tsx` |
| About-me paragraphs | `RightSection.tsx` |
| Professional title list (4 items) | `RightSection.tsx` |
| Full name | `RightSection.tsx` |

Current pattern (example from `LeftSection.tsx`):
```tsx
// Data directly in JSX
<SkillItem years={14} name="C#" />
<SkillItem years={14} name=".NET" />
<SkillItem years={13} name="SQL Server" />
// ... 19 more items
```

---

## Affected Files

- `src/data.tsx` — add profile data exports
- `src/components/CvDocument/LeftSection/LeftSection.tsx`
- `src/components/CvDocument/LeftSection/LeftSectionOnePage.tsx` (or merged variant after TD-3)
- `src/components/CvDocument/LeftSection/LeftSectionWithCertifications.tsx`
- `src/components/CvDocument/RightSection/RightSection.tsx`

---

## Proposed Solution

Add profile data constants to `src/data.tsx` (or a new `src/profileData.ts`):

```ts
// src/profileData.ts (new file — or add to data.tsx)

export const profileName = 'COSMIN VLĂDUȚU';

export const profileTitles = [
  'Software Cloud Architect',
  '.NET Lead',
  'Contractor',
  'Freelancer',
];

export const profileAbout = [
  <>I am a Microsoft MVP, Software Cloud Architect, and certified (MCSD and Azure) .NET lead / developer / contractor / freelancer with <Text style={{fontWeight: 'black'}}>14+ years of experience</Text>. My expertise lies in both front-end and back-end development, and I have a keen interest in Azure and AI.</>,
  <>I assist clients in accomplishing their objectives by crafting, architecting, and executing clean and resilient software solutions while also assembling, nurturing and leading high-performing teams.</>,
  <><Text style={{fontWeight: 'black'}}>Drop me a message</Text> if you think my expertise could help your organization!</>,
];

export const skills = [
  { name: 'C#', years: 14 },
  { name: '.NET', years: 14 },
  // ... all 22
];

export const certifications = [
  { name: 'Distributed Systems Design Fundamentals', date: 'Apr 2026' },
  { name: 'Microsoft Most Valuable Professional', date: 'Mar 2025' },
  // ... all 15
];

export const blogContributions = [
  'https://blog.devgenius.io/',
  'https://awstip.com/',
  // ...
];

export const contacts = [
  { type: 'phone', text: '(+40) 749 084 655', link: 'tel:+40749084655' },
  { type: 'email', text: 'cosmin.vladutu@gmail.com', link: 'mailto:cosmin.vladutu@gmail.com' },
  // ...
];

export const education = {
  university: 'Alexandru Ioan-Cuza University',
  degree: 'Bachelor in Computer Science',
  location: 'Iași, România',
  years: '2007 - 2010',
};
```

Components then map over these data arrays instead of listing items inline.

---

## Notes

- **This is a nice-to-have.** The current approach works fine and the data changes infrequently.
- This task is best done **after** TD-3 (merge LeftSection variants) and TD-6 (extract SVG icon components), as those tasks will already be refactoring the same files.
- If the about-me text stays as ReactNode (JSX), the `profileData.ts` file will still need to import `Text` from the elements — consider whether plain string + bold marker pattern (see IMP-10) is preferable first.
- Contact icons (inline SVGs) would also need to be extracted (TD-6) for this to be clean.

---

## Acceptance Criteria

- [ ] All profile data constants live in `src/profileData.ts` (or `src/data.tsx`)
- [ ] `LeftSection.tsx`, `LeftSectionWithCertifications.tsx`, and `RightSection.tsx` consume data from the data layer
- [ ] No personal information hardcoded in component JSX
- [ ] `npm run build` passes, PDFs render identically to before
