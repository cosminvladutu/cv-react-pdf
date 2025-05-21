// Hr.tsx
// This component renders a horizontal rule (divider) for section separation in the CV document.
//
// Props: None
//
// Usage: Used to visually separate sections in the PDF layout.

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
