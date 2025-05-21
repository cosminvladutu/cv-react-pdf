// CertificationItem.tsx
// This component renders a single certification item for the CV document.
//
// Props:
// - name: string — Name of the certification
// - date: string — Date of the certification
//
// Usage: Used in LeftSection to display a list of certifications.

import React from "react";
import {StyleSheet, View} from "@react-pdf/renderer";
import Text from "../elements/Text";

interface CertificationItemProps {
  name: string;
  date: string;
}

const CertificationItem: React.FC<CertificationItemProps> = ({name, date}) => {
  return (
    <View style={styles.container}>
      <Text contrast style={styles.name}>{name}</Text>
      <View style={styles.date}>
        <Text contrast style={styles.dateText}>{date}</Text>
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
  name: {},
  date: {
    width: 50,
    alignItems: 'flex-end',
  },
  dateText: {
    textAlign: 'right',
  },
});

export default CertificationItem;
