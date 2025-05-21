// SkillItem.tsx
// This component renders a single skill item with its name and years of experience for the CV document.
//
// Props:
// - name: string — Name of the skill
// - years: number — Years of experience
//
// Usage: Used in LeftSection to display a list of skills.

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
