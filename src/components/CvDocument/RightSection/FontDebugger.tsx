import React from 'react';
import { Text, StyleSheet, View } from '@react-pdf/renderer';

/**
 * A component that renders multiple versions of the Romanian name using different font approaches
 * This is helpful for debugging font issues - it will appear at the bottom of the PDF
 * and can be removed once the appropriate solution is found
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
