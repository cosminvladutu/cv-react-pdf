# TD-2: Remove Dead Type Definitions

## Type: Tech Debt
## Priority: Low–Medium

---

## Problem

`src/types.ts` defines two constructs that are either unused or misaligned with the actual codebase:

### 1. `Skill` union type — fully unused and wrong

The `Skill` type lists front-end/JS-focused skills that bear no relation to the actual CV content:

```ts
// Current — irrelevant to this .NET CV
export type Skill = 'JavaScript' | 'NodeJS' | 'PostgreSQL' | 'ReactJS' | 'Redux'
  | 'Docker' | 'AWS' | 'Jenkins CI/CD' | 'GitHub' | 'Jira' | 'TypeScript'
  | 'React Native' | 'Apple Pay' | ...
```

The actual skills used in `src/data.tsx` (e.g. `'.NET Core'`, `'CosmosDb'`, `'DDD'`, `'CQRS'`, `'Bicep'`, `'Azure Functions'`) are all plain `string[]` — none are typed via `Skill`. The union is never imported anywhere in the project.

```ts
// In data.tsx — ProjectCard props use string[], not Skill[]
skills: ['.NET Core', 'CosmosDb', 'DDD', 'CQRS', 'Auth0', ...],
```

### 2. `Project` interface — duplicate of `ProjectCardProps`, never used

```ts
// In src/types.ts — never imported
export interface Project {
  projectName: string;
  from: string;
  to: string;
  title: string;
  company?: string;
  clientProblem: ReactNode;
  achievements: ReactNode[];
  skills: Skill[],        // <-- uses the dead Skill union
  isLastItem?: boolean;
}
```

```ts
// In src/components/CvDocument/RightSection/ProjectCard.tsx — actually used
export interface ProjectCardProps {
  projectName: string;
  from: string;
  to: string;
  title: string;
  company?: string;
  clientProblem: ReactNode;
  achievements: ReactNode[];
  skills: string[],       // <-- plain string, decoupled from Skill union
  isLastItem?: boolean;
  isLastPage?: boolean;
}
```

`ProjectCardProps` is the real contract used throughout the app. `Project` in `types.ts` is stale.

---

## Affected Files

- `src/types.ts` — primary change
- `src/data.tsx` — `EnabledProjects` type stays, verify no `Skill` import slips in

---

## What To Do

1. Delete the `Skill` union type entirely from `src/types.ts`.
2. Delete the `Project` interface from `src/types.ts`.
3. The file will be empty (only imports `ReactNode` which will no longer be needed). **Delete `src/types.ts` entirely** if nothing else uses it.
4. Run a global search for any imports of `Skill` or `Project` from `types.ts` to confirm nothing breaks.
5. Optionally: if a typed skill list is desired in the future, add the actual .NET/cloud skills to `ProjectCardProps` as a proper union — but this is out of scope here.

---

## Verification

```bash
# Confirm no usages
grep -r "from.*types" src/
grep -r "Skill" src/
grep -r "Project " src/   # space to avoid matching ProjectCard etc.
```

---

## Acceptance Criteria

- [ ] `src/types.ts` deleted (or emptied if other types exist)
- [ ] No broken imports across the codebase
- [ ] `npm run build` and `npm run lint` pass
