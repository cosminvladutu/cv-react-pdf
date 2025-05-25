// CvDocumentOnePage.tsx
// This component defines a single-page PDF CV document using @react-pdf/renderer.
// It provides a condensed version of the full CV by showing only selected key projects.
//
// Key features:
// - Uses the same LeftSection as the full CV but with fewer projects in the RightSection
// - Maintains the same visual style and layout as the full CV for consistency
// - Truncates achievements to show only the first two for each project
// - Same font configuration and diacritical character support as the full CV
// - Optimized for A4 printing with proper dimensions
//
// Technical implementation:
// - Registers fonts with Unicode support for Romanian diacritical characters
// - Configures Unicode ranges explicitly for better language support
// - Maps only projects from enabledProjectsOnePage in data.tsx
//
// Usage: Used to render a one-page version of the CV for situations requiring a brief overview.

import React from 'react';
import {Page, Text, View, Document, StyleSheet, Image, Font} from '@react-pdf/renderer';
import { LeftSectionOnePage } from "./LeftSection";
import RightSection from "./RightSection";
import {enabledProjectsOnePage, projectsByName} from "../../data";
import {ProjectCardProps} from "./RightSection/ProjectCard";

// Register all weights of Lato font with proper language support for diacritical characters
// Use the full absolute path to ensure fonts are properly embedded and Unicode support works
Font.registerHyphenationCallback(word => [word]);

Font.register({
  family: 'Lato',
  fonts: [
    { src: `${process.cwd()}/public/fonts/Lato/Lato-Regular.ttf`, fontStyle: 'normal', fontWeight: 'normal' },
    { src: `${process.cwd()}/public/fonts/Lato/Lato-Bold.ttf`, fontStyle: 'normal', fontWeight: 'bold' },
    { src: `${process.cwd()}/public/fonts/Lato/Lato-Black.ttf`, fontStyle: 'normal', fontWeight: 'black' },
    { src: `${process.cwd()}/public/fonts/Lato/Lato-Italic.ttf`, fontStyle: 'italic', fontWeight: 'normal' },
    { src: `${process.cwd()}/public/fonts/Lato/Lato-BoldItalic.ttf`, fontStyle: 'italic', fontWeight: 'bold' },
    { src: `${process.cwd()}/public/fonts/Lato/Lato-BlackItalic.ttf`, fontStyle: 'italic', fontWeight: 'black' },
  ],
  langSystems: ['latn'],
  unicodeRanges: [
    'U+0000-00FF', // Latin Basic
    'U+0100-017F', // Latin Extended-A (includes Romanian diacritics like Ă)
    'U+0180-024F', // Latin Extended-B (includes Ț and other diacritics)
  ],
});


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },
  section: {
    padding: 10
  },
});

// Create Document Component
const CvDocumentOnePage = () => {
  // Map only the enabled projects for the one-page CV
  // Limit achievements to only the first 2 for each project to save space
  const projects: ProjectCardProps[] = enabledProjectsOnePage.map(projectName => ({
    ...projectsByName[projectName],
    achievements: projectsByName[projectName].achievements.slice(0, 2),
  }));  return (
    <Document>
      <Page size="A4" style={styles.page} wrap={false}>
        <LeftSectionOnePage />
        <RightSection
          projects={projects}
          workExperienceTitle="Most Relevant Work Experience"
        />
      </Page>
    </Document>
  );
}

export default CvDocumentOnePage;
