// CvDocumentOnePage.tsx
// This component defines a single-page PDF CV document using @react-pdf/renderer.
// It composes LeftSection and RightSection, passing a filtered list of projects for compact display.
//
// Usage: Used to render a one-page version of the CV.

import React from 'react';
import {Page, Text, View, Document, StyleSheet, Image, Font} from '@react-pdf/renderer';
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection";
import {enabledProjectsOnePage, projectsByName} from "../../data";
import {ProjectCardProps} from "./RightSection/ProjectCard";

Font.register({ family: 'Lato', src: '/fonts/Lato/Lato-Regular.ttf', fontStyle: 'normal', fontWeight: 'normal' });
Font.register({ family: 'Lato', src: '/fonts/Lato/Lato-Black.ttf', fontStyle: 'normal', fontWeight: 'black' });


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
  const projects: ProjectCardProps[] = enabledProjectsOnePage.map(projectName => ({
    ...projectsByName[projectName],
    achievements: projectsByName[projectName].achievements.slice(0, 2),
  }));

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <LeftSection />
        <RightSection
          projects={projects}
          workExperienceTitle="Most Relevant Work Experience"
        />
      </Page>
    </Document>
  );
}

export default CvDocumentOnePage;
