import React from 'react';
import { Text, StyleSheet, View } from '@react-pdf/renderer';

/**
 * FontDebugger.tsx
 * 
 * A component that renders multiple versions of Romanian diacritical characters using different font approaches.
 * This is a development/debugging tool to test and compare different solutions for rendering 
 * Romanian special characters (Ă, Ț) in the PDF document.
 * 
 * Key features:
 * - Displays the same text with different font families (Lato, OpenSans, NotoSans)
 * - Tests Unicode code point approach for special characters
 * - Tests mixed-font approach (different font for each diacritical character)
 * 
 * Usage: Include this component at the bottom of a page during development to
 * debug font rendering issues with Romanian diacritical characters. Can be removed
 * in production once the appropriate font solution is implemented.
 */
const FontDebugger: React.FC = () => {  return (
    <View style={styles.container}>
      <Text style={styles.title}>Font Test (for debugging)</Text>
      
      {/* Test 1: Default font */}
      <Text style={styles.normal}>VLĂDUȚU with Lato</Text>
      
      {/* Test 2: OpenSans font */}
      <Text style={styles.openSans}>VLĂDUȚU with OpenSans</Text>
      
      {/* Test 3: Noto Sans font which has excellent Unicode support */}
      <Text style={styles.notoSans}>VLĂDUȚU with Noto Sans</Text>
      
      {/* Test 4: Using Unicode code points */}
      <Text style={styles.normal}>
        VL{String.fromCharCode(0x0102)}DU{String.fromCharCode(0x021A)}U using code points
      </Text>
      
      {/* Test 5: Individual character approach */}
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.normal}>VL</Text>
        <Text style={styles.notoSans}>Ă</Text>
        <Text style={styles.normal}>DU</Text>
        <Text style={styles.notoSans}>Ț</Text>
        <Text style={styles.normal}>U</Text>
        <Text style={styles.normal}> with mixed fonts</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  normal: {
    fontFamily: 'Lato',
    fontSize: 8,
    marginBottom: 3,
  },
  openSans: {
    fontFamily: 'OpenSans',
    fontSize: 8,
    marginBottom: 3,
  },
  notoSans: {
    fontFamily: 'NotoSans',
    fontSize: 8,
    marginBottom: 3,
  },
});

export default FontDebugger;
