// Divider.tsx
// This component renders a horizontal or vertical divider for section separation in the CV document.
// It provides flexible options for either horizontal or vertical separators with customizable positioning.
//
// Props: 
// - isVertical: boolean (optional) - When true, renders a vertical divider instead of horizontal
// - extendToBottom: boolean (optional) - When true with isVertical, extends the divider to the bottom of the page
//
// Visual features:
// - Horizontal mode: 1px height, full width, 10px vertical margins
// - Vertical mode: 1px width, positioned 15px from left edge
// - Extended vertical mode: 100vh height for full-page coverage
// - Consistent light gray color (#9b9b9b) matching other separators
//
// Usage: Used primarily in timeline presentations for the work experience section.

import React from "react";
import {StyleSheet, View} from "@react-pdf/renderer";

interface DividerProps {
  isVertical?: boolean;
  extendToBottom?: boolean;
}

const Divider: React.FC<DividerProps> = ({ isVertical = false, extendToBottom = false }) => {
  if (isVertical) {
    const style = extendToBottom 
      ? [styles.verticalDivider, styles.extendedVerticalDivider] 
      : styles.verticalDivider;
    return <View style={style} />;
  }
  
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    marginVertical: 10,
    backgroundColor: "#9b9b9b",
    width: '100%',
  },
  verticalDivider: {
    width: 1,
    height: "100%",
    position: "absolute",
    left: 15,
    top: 0,
    backgroundColor: "#9b9b9b",
  },
  extendedVerticalDivider: {
    height: "100vh", // Make it full page height
  }
})

export default Divider;
