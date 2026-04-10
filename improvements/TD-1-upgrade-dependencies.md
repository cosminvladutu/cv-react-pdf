# TD-1: Upgrade Outdated Dependencies

## Type: Tech Debt
## Priority: Medium

---

## Problem

The project runs on severely outdated major versions across all core dependencies. This creates security exposure, missing performance improvements, and eventual incompatibility with ecosystem tooling.

| Package | Current | Latest (Apr 2026) |
|---|---|---|
| `next` | 12.0.8 | 15.x |
| `react` | 17.0.2 | 19.x |
| `react-dom` | 17.0.2 | 19.x |
| `typescript` | 4.5.4 | 5.x |
| `@types/react` | 17.0.38 | 19.x |
| `@types/node` | 17.0.10 | 22.x |
| `eslint` | 8.7.0 | 9.x |
| `eslint-config-next` | 12.0.8 | 15.x |

---

## Affected Files

- `package.json`
- `tsconfig.json` (may need `moduleResolution` updated to `bundler`)
- `pages/_app.tsx` (Next 13+ App Router migration optional but worth planning)
- `pages/index.tsx` (check for deprecated `NextPage` type)

---

## Steps

1. **Upgrade TypeScript first** (non-breaking for this codebase):
   ```bash
   npm install typescript@latest @types/node@latest @types/react@latest --save-dev
   ```
   Fix any new strict errors that surface.

2. **Upgrade React 17 → 19**:
   ```bash
   npm install react@latest react-dom@latest
   ```
   - React 19 removes `children` from `FC` implicit props — `LeftSectionPanel` will need `children: ReactNode` explicitly added to its props interface (see also TD-14 / TD-11).
   - `AppProps` from Next should still work.

3. **Upgrade Next.js 12 → 15**:
   ```bash
   npm install next@latest eslint-config-next@latest
   ```
   - Use the Next.js codemods: `npx @next/codemod@latest upgrade`
   - The `pages/` directory still works in Next 15 (App Router is optional).
   - `Image` import from `next/image` API changed in Next 13 — `pages/index.tsx` imports `Image` but never uses it (see TD-10), so no impact.
   - Check `next.config.js` for deprecated options.

4. **Update tsconfig.json**:
   - Change `"moduleResolution": "node"` → `"moduleResolution": "bundler"` for Next 15.
   - Consider changing `"target": "es5"` → `"es2017"` or later.

5. **Run lint and build** after each step to verify:
   ```bash
   npm run lint
   npm run build
   ```

---

## Acceptance Criteria

- [ ] All packages on current major versions
- [ ] `npm run build` succeeds with no errors
- [ ] `npm run lint` passes
- [ ] PDF rendering works correctly in browser for both document types
