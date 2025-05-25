// ProjectCard.tsx
// This component renders a single project card for the work experience section in the CV document.
// Displays project name, company, period, title, client problem, achievements, and skills.
// Each card includes a timeline visualization with a vertical line and markers.
//
// Props (ProjectCardProps):
// - projectName: string — Name of the project (displayed in cyan color)
// - from: string — Start date of the project
// - to: string — End date of the project
// - title: string — Role/title for the project (displayed prominently)
// - company: string (optional) — Company name (displayed alongside project name)
// - clientProblem: ReactNode — Description of the client's problem
// - achievements: ReactNode[] — List of achievements with cyan bullet points
// - skills: string[] — Skills used in the project (comma-separated list)
// - isLastItem: boolean (optional) — If true, adjusts timeline line rendering
// - isLastPage: boolean (optional) — If true, adds extra bottom padding
//
// Visual styling:
// - Timeline with cyan vertical line (#42C7E5) and circular markers
// - Project name and company in cyan (#42C7E5) and bold
// - Bulleted list for achievements with cyan bullets
// - Proper spacing between sections and consistent typography
// - Special handling for last items to prevent visual cutoff
//
// Usage: Used in RightSection to display a list of projects with consistent styling and layout.

import React, {ReactNode} from "react";
import {StyleSheet, View} from "@react-pdf/renderer";
import Text from "../elements/Text";

export interface ProjectCardProps {
  projectName: string;
  from: string;
  to: string;
  title: string;
  company?: string;
  clientProblem: ReactNode;
  achievements: ReactNode[];
  skills: string[],
  isLastItem?: boolean;
  isLastPage?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  from,
  to,
  title,
  company,
  clientProblem,
  achievements,
  skills,
  isLastItem,
  isLastPage,
}) => {
  const rightColumnStyle = styles.rightColumn //isLastItem
    // ? styles.rightColumn
    // : {...styles.rightColumn, paddingBottom: 16};
  const timelineLineStyle = isLastItem
    ? {...styles.timelineLine, bottom: 5, minHeight: 20} // Ensure minimum height for last item
    : styles.timelineLine
  return (
    <View style={styles.container} wrap={false}>
      <View style={rightColumnStyle}>
        <View style={timelineLineStyle} />
        <View style={styles.timelineMarker} />
        <View style={styles.rightHeading}>
          <Text style={styles.title}>{title} </Text>
          <Text style={styles.period}>{from} - {to}</Text>
        </View>        <View style={styles.content}>
          <Text style={styles.projectName} color="#42C7E5" isBold>
            {projectName}
            {!!company && <Text color="#42C7E5" isBold> | {company}</Text>}
          </Text>

          <Text style={styles.clientProblem}>{clientProblem}</Text>          <View style={styles.achievementsContainer}>
            {achievements.map((achievement, key) => (
              <Text key={key} style={styles.achievement}><Text style={styles.bulletPoint} color="#42C7E5">{'• '}</Text>{achievement}</Text>
            ))}
          </View><View style={styles.skillsContainer}>
            <Text style={styles.skill}>Skills: {skills.join(', ')}</Text>
          </View>
          {/* Add bottom padding for the last item to prevent trimming */}
          {isLastItem && <View style={{ marginBottom: isLastPage ? 60 : 40 }} />}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  // leftColumn: {
  //   width: '25%',
  //   paddingRight: 10,
  //   alignItems: 'flex-end',
  //   paddingVertical: 8,
  // },
  rightColumn: {
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 8,
    paddingTop: 12
  },  timelineLine: {
    position: 'absolute',
    left: 0,
    top: 16,
    bottom: -16,
    width: 1,
    backgroundColor: '#42C7E5',
  },
  timelineMarker: {
    position: 'absolute',
    width: 9,
    height: 9,
    backgroundColor: '#42C7E5',
    borderRadius: 9,
    left: -4,
    top: 16,
  },
  projectName: {
    fontSize: 10,
    marginBottom: 5
  },
  period: {
    fontSize: 10,
    opacity: 0.8
  },
  rightHeading: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 4,
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 14,
  },
  // company: {
  //   fontSize: 9,
  // },
  content: {
    minHeight: 100
  },

  clientProblem: {
    opacity: 0.7
  },
  achievementsContainer: {
    marginTop: 14,
    opacity: 0.7
  },
  bulletPoint: {
    letterSpacing: 5,
    textIndent: 10
  },
  achievement: {
    marginBottom: 5,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    opacity: 0.7,
  },
  skill: {

  }
});

export default ProjectCard;

