// SkillItem.tsx
// This component renders a single skill item with its name and years of experience for the CV document.
// It uses a two-column layout for clean presentation of skills and experience levels.
//
// Props:
// - name: string — Name of the skill (left column)
// - years: number — Years of experience (right column)
//
// Visual features:
// - Two-column layout with skill name on left, years on right
// - Proper spacing between rows (5px margin)
// - Justified content with space-between for clean alignment
// - Consistent width for years column (50px) ensuring alignment
// - Proper contrast for dark background (using white text)
//
// Usage: Used in LeftSection to display a list of skills with experience levels.

import React from "react";
import {StyleSheet, View} from "@react-pdf/renderer";
import Text from "../elements/Text";

interface SkillItemProps {
  name: string;
  years: number;
}

const SkillItem: React.FC<SkillItemProps> = ({name, years}) => {
  return (
    <View style={styles.container}>
      <Text contrast style={styles.name}>{name}</Text>
      <View style={styles.years}>
        <Text contrast>{`${years} years`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
  },
  years: {
    width: 50,
    alignItems: 'flex-end'
  },
});

export default SkillItem;
