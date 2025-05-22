// LeftSectionEmpty.tsx
// This component renders an empty left section for additional pages of the CV beyond the second page.
// It maintains the consistent visual layout by preserving the gray sidebar without any content.
//
// Key features:
// - Maintains the same 30% width and gray background (#434244) as other left sections
// - Uses a height spacer to ensure the background extends to fill the entire page height
// - Contains no content, serving only as a visual element for consistency
//
// Usage: Used on the third page and beyond to maintain the CV's visual structure.

import {StyleSheet, View} from "@react-pdf/renderer";
import React from "react";

// Define the component as a named function component (React.FC)
const LeftSectionEmpty: React.FC = () => {
  return (
    <View style={[styles.container]}>
      {/* Empty section - just the gray background */}
      {/* Add a spacer to ensure the section fills the entire height */}
      <View style={{ height: '100vh' }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#434244',
    width: '30%',
    minHeight: '100%', // Ensure it takes up the full height of the page
  }
})

export default LeftSectionEmpty;
