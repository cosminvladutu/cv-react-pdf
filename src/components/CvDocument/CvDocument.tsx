// CvDocument.tsx
// This component defines the main (multi-page) PDF CV document using @react-pdf/renderer.
// It composes LeftSection and RightSection, passing the full list of projects for detailed display.
//
// Usage: Used to render the full version of the CV.

import React from 'react';
import {Page, Text, View, Document, StyleSheet, Image, Font} from '@react-pdf/renderer';
import LeftSection from "./LeftSection/LeftSection";
import { LeftSectionWithCertifications } from "./LeftSection";
import RightSection from "./RightSection";
import {enabledProjectsAll, projectsByName} from "../../data";
import {ProjectCardProps} from "./RightSection/ProjectCard";

// Register all weights of Lato font with proper language support for diacritical characters
// Use the full absolute path to ensure fonts are properly embedded and Unicode support works
Font.registerHyphenationCallback(word => [word]);

// Configure fonts to properly support Romanian diacritics like Ă and Ț
// Register Lato font
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

// Register OpenSans font which has better Unicode support for Romanian diacritics
Font.register({
  family: 'OpenSans',
  src: `/fonts/OpenSans/OpenSans-Regular.woff2`,
  fontWeight: 'normal',
  fontStyle: 'normal',
});

// Register Noto Sans font which has excellent Unicode support including Romanian diacritical characters
Font.register({
  family: 'NotoSans',
  src: `/fonts/NotoSans-Regular.ttf`,
  fontWeight: 'normal',
  fontStyle: 'normal',
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
const CvDocument = () => {
  const projects: ProjectCardProps[] = enabledProjectsAll.map(projectName => projectsByName[projectName]);
  
  // Divide projects between pages
  const firstPageProjects = projects.slice(0, 3); // First 3 projects on first page
  const secondPageProjects = projects.slice(3);   // Remaining projects on second page
  
  return (
    <Document>
      {/* First page with standard layout */}
      <Page size="A4" style={styles.page} wrap={false}>
        <LeftSection/>
        <RightSection
          projects={firstPageProjects}
          workExperienceTitle="Work Experience"
        />
      </Page>
      
      {/* Second page with certifications in left section */}      
      <Page size="A4" style={styles.page} wrap={false}>
        <LeftSectionWithCertifications/>
        <RightSection
          projects={secondPageProjects}
          workExperienceTitle=""
          hideHeader={true}
        />
      </Page>
    </Document>
  );
}

export default CvDocument;
