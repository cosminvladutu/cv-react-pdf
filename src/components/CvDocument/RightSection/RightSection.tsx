// RightSection.tsx
// This component renders the right section of the CV document, including the user's name, titles, about section, and work experience/projects.
// It takes up 70% of the page width and contains the main content of the CV.
//
// Props:
// - projects: Array of project objects to display (see ProjectCardProps)
// - workExperienceTitle: String title for the work experience section
// - hideHeader: Boolean (optional) - If true, hides the name/title/about section (used on pages after the first)
// - isLastPage: Boolean (optional) - If true, applies special styling for the last page
//
// Visual features:
// - Header with name and professional titles (displayed only on first page)
// - About Me section with professional summary (displayed only on first page)
// - Work Experience section with project cards
// - Consistent padding and spacing throughout
// - Special handling for diacritical characters in the name
// - Responsive layout that works with the project distribution across pages
//
// Usage: Used as part of the CvDocument layout to display main content and project history.

import {StyleSheet, View} from "@react-pdf/renderer";
import React from "react";
import Text from "../elements/Text";
import Hr from "./Hr";
import ProjectCard, {ProjectCardProps} from "./ProjectCard";
import Title from "../elements/Title";
import { DiacriticalText } from "../elements";

const titleItems = [
  'Senior .NET Developer',
  'Leader',
  'Contractor',
  'Freelancer',
];

// "JavaScript, NodeJS, PostgreSQL, ReactJS, Redux, Docker, AWS, Jenkins CI/CD, GitHub, Jira".split(', ').map(i => `'${i}'`).join(', ')

export interface RightSectionProps {
  projects: ProjectCardProps[];
  workExperienceTitle: string;
  hideHeader?: boolean;
  isLastPage?: boolean;
}

const RightSection: React.FC<RightSectionProps> = ({ projects, workExperienceTitle, hideHeader = false, isLastPage = false }) => {
  const containerStyle = isLastPage ? [styles.container, styles.lastPageContainer] : styles.container;
  
  return (
    <View style={containerStyle}>
      {!hideHeader && (
        <>          <View style={styles.header}>
            <View style={styles.nameContainer}>
              <DiacriticalText style={styles.name}>
                COSMIN VLĂDUȚU
              </DiacriticalText>
            </View>
            <View style={styles.titleContainer}>
              {titleItems.map((titleItem, index) => {
                return (
                  <View key={titleItem} style={styles.titleItemContainer}>
                    {!!index && <Text style={styles.titleSeparator}>•</Text>}
                    <Text style={styles.titleItem}>{titleItem}</Text>
                  </View>
                )
              })}
            </View>
          </View>

          <Hr />

          <Title style={styles.aboutMeTitle}>About Me</Title>
          <Text style={styles.aboutMeDescription}>I am a Microsoft MVP and certified (MCSD and Azure) Senior .NET lead / developer / contractor / freelancer with <Text style={{fontWeight: 'black'}}>14+ years of experience</Text>. . My expertise lies in both front-end and back-end development, and I 
have a keen interest in Azure.</Text>
          <Text style={styles.aboutMeDescription}>I assist clients in accomplishing their objectives by crafting, architecting, and executing clean and resilient software solutions while also assembling, nurturing and leading high-performing teams.</Text>
          <Text style={styles.aboutMeDescription}><Text style={{fontWeight: 'black'}}>Drop me a message</Text> if you think my expertise could help your organization!</Text>
        </>
      )}

      {!hideHeader && workExperienceTitle && (
        <Title style={styles.workExperience}>{workExperienceTitle}</Title>
      )}
      
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.projectName} 
          isLastItem={index === projects.length - 1} 
          {...project} 
          isLastPage={isLastPage && index === projects.length - 1}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 10, // Reduced from 20 to 10 to move everything higher
    flex: 1
  },  header: {
    alignItems: 'center'
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 32,
    textTransform: 'uppercase',
    marginTop: 0,
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center'
  },
  titleItemContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleItem: {
    fontSize: 12,
  },
  titleSeparator: {
    paddingHorizontal: 2
  },

  aboutMeTitle: {
    marginBottom: 5
  },  aboutMeDescription: {
    opacity: 0.7,
    marginTop: 2,
    marginBottom: 3,
  },

  workExperience: {
    marginTop: 15,
  },
    lastPageContainer: {
    minHeight: '100%', // Ensure it takes the full height of the page
    paddingBottom: 50, // Add extra padding at the bottom for the last page
    display: 'flex',
    flexDirection: 'column',
  },

})

export default RightSection;
