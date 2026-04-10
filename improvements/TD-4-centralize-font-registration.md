# TD-4: Centralize and Fix Font Registration

## Type: Tech Debt
## Priority: High

---

## Problem

Font registration is duplicated — once in `CvDocument.tsx` and again in `CvDocumentOnePage.tsx` — and the two registrations use **different path strategies**, making them inconsistent and fragile:

### CvDocument.tsx — relative URL paths (works in browser)
```ts
Font.register({
  family: 'Lato',
  fonts: [
    { src: `/fonts/Lato/Lato-Regular.ttf`, fontStyle: 'normal', fontWeight: 'normal' },
    { src: `/fonts/Lato/Lato-Bold.ttf`, fontStyle: 'normal', fontWeight: 'bold' },
    { src: `/fonts/Lato/Lato-Black.ttf`, fontStyle: 'normal', fontWeight: 900 },
    // ...
  ],
});
Font.register({ family: 'OpenSans', src: `/fonts/OpenSans/OpenSans-Regular.woff2` });
Font.register({ family: 'NotoSans', src: `/fonts/NotoSans-Regular.ttf` });
```

### CvDocumentOnePage.tsx — absolute filesystem paths (works in Node/SSR only)
```ts
Font.register({
  family: 'Lato',
  fonts: [
    { src: `${process.cwd()}/public/fonts/Lato/Lato-Regular.ttf`, ... },
    { src: `${process.cwd()}/public/fonts/Lato/Lato-Bold.ttf`, ... },
    // ...
  ],
});
// NOTE: NotoSans and OpenSans are NOT registered here at all.
```

**Critical gap**: `CvDocumentOnePage.tsx` does not register `NotoSans`, but it uses `DiacriticalText` (via `LeftSectionOnePage`) which explicitly sets `fontFamily: 'NotoSans'` for Romanian diacritical characters. This means diacritical characters silently fallback to a wrong font in the one-page PDF.

Also, `Font.registerHyphenationCallback(word => [word])` is called in both files separately.

---

## Affected Files

- `src/components/CvDocument/CvDocument.tsx`
- `src/components/CvDocument/CvDocumentOnePage.tsx`
- New file: `src/fonts/registerFonts.ts` (to be created)

---

## Proposed Solution

Create a single `src/fonts/registerFonts.ts` module:

```ts
// src/fonts/registerFonts.ts
import { Font } from '@react-pdf/renderer';

export function registerFonts() {
  Font.registerHyphenationCallback(word => [word]);

  Font.register({
    family: 'Lato',
    fonts: [
      { src: `/fonts/Lato/Lato-Regular.ttf`, fontStyle: 'normal', fontWeight: 'normal' },
      { src: `/fonts/Lato/Lato-Bold.ttf`, fontStyle: 'normal', fontWeight: 'bold' },
      { src: `/fonts/Lato/Lato-Black.ttf`, fontStyle: 'normal', fontWeight: 900 },
      { src: `/fonts/Lato/Lato-Italic.ttf`, fontStyle: 'italic', fontWeight: 'normal' },
      { src: `/fonts/Lato/Lato-BoldItalic.ttf`, fontStyle: 'italic', fontWeight: 'bold' },
      { src: `/fonts/Lato/Lato-BlackItalic.ttf`, fontStyle: 'italic', fontWeight: 900 },
    ],
  });

  Font.register({
    family: 'OpenSans',
    src: `/fonts/OpenSans/OpenSans-Regular.woff2`,
    fontWeight: 'normal',
    fontStyle: 'normal',
  });

  Font.register({
    family: 'NotoSans',
    src: `/fonts/NotoSans-Regular.ttf`,
    fontWeight: 'normal',
    fontStyle: 'normal',
  });
}
```

Then in both document components, replace all `Font.register*` calls with a single import:

```ts
// CvDocument.tsx and CvDocumentOnePage.tsx
import { registerFonts } from '../../fonts/registerFonts';

registerFonts();
```

### Path strategy decision

Stick with relative URL paths (`/fonts/...`) — these work correctly in the browser context where `PDFViewer` renders. The `process.cwd()` approach in `CvDocumentOnePage.tsx` was an attempt to support server-side rendering or node-based PDF generation, but that is not the current use case (both documents are rendered client-side via `PDFViewer`).

If server-side PDF generation is needed in the future, the `registerFonts` function can accept an optional `basePath` parameter.

---

## Notes

- The three `src/fonts/Lato-*-subset.js` files (see **TD-10**) just re-export path strings and are never imported — they are separate dead code to remove.
- The `public/fonts/` directory must contain all font files referenced above for this to work.

---

## Acceptance Criteria

- [ ] `src/fonts/registerFonts.ts` created with all three font families registered
- [ ] Both `CvDocument.tsx` and `CvDocumentOnePage.tsx` use `registerFonts()` with no inline `Font.register*` calls
- [ ] Diacritical characters (Ă, Ț, etc.) render correctly in both the full and one-page PDFs
- [ ] `npm run build` passes
