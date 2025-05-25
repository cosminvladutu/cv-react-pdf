// Hr.tsx
// This component renders a horizontal rule (divider) for section separation in the CV document.
// It creates a simple visual separator between different content sections.
//
// Visual features:
// - Full width (100%) gray line
// - 1px height for a subtle appearance
// - Consistent vertical margins (15px) to create proper spacing
// - Light gray color (#9b9b9b) that complements the overall design
//
// Props: None
//
// Usage: Used to visually separate sections in the RightSection (between header and about, 
// or between about and work experience).

import React from "react";
import {StyleSheet, View} from "@react-pdf/renderer";

const Hr: React.FC = () =>{
  return (
    <View style={styles.container} />
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#9b9b9b',
    height: 1,
    marginVertical: 15,
  }
})

export default Hr;
