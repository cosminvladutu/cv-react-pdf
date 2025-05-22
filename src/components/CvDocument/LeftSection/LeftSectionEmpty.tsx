// LeftSectionEmpty.tsx
// This component renders an empty left section for additional pages of the CV beyond the second page.

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
