// LeftSectionPanel.tsx
// This component renders a titled panel for grouping related content in the left section of the CV document.
// Each panel includes a title with proper styling and a content area with consistent spacing.
//
// Props:
// - title: string — The panel's title, displayed in uppercase
// - titleColor: string (optional) — Custom color for the title (defaults to white if contrast=true)
// - children: ReactNode — Content to display inside the panel
//
// Visual features:
// - Bottom border separates panels (2px solid #8e8e8f)
// - Consistent spacing (10px padding for content)
// - Title text in uppercase with bold styling
// - Supports custom title color for visual hierarchy
//
// Usage: Used in LeftSection to group contact info, skills, and education.

import React from "react";
import {StyleSheet, View} from '@react-pdf/renderer'
import Text from "../elements/Text";
import Title from "../elements/Title";

interface LeftSectionPanelProps {
  title: string;
  titleColor?: string;
}

const LeftSectionPanel: React.FC<LeftSectionPanelProps> = ({title, titleColor, children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Title contrast color={titleColor}>{title}</Title>
      </View>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: '20px 10px'
  },
  heading: {
    paddingBottom: 10,
    borderBottom: '2px solid #8e8e8f'
  },
  content: {
    paddingTop: 10,
  }
})


export default LeftSectionPanel;
