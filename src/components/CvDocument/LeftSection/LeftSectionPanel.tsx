// LeftSectionPanel.tsx
// This component renders a titled panel for grouping related content in the left section of the CV document.
//
// Props:
// - title: string — The panel's title
// - children: ReactNode — Content to display inside the panel
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
