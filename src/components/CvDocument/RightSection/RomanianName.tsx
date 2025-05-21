import React from 'react';
import { Text as PdfText, StyleSheet, View } from '@react-pdf/renderer';

/**
 * A special component to render Romanian character names correctly
 */
interface RomanianNameProps {
  style?: any;
}

const RomanianName: React.FC<RomanianNameProps> = ({ style }) => {
  // Use multiple approaches to increase the chance of rendering properly
  const combinedStyle = style ? { ...styles.name, ...style } : styles.name;
  
  return (
    <View style={styles.container}>
      {/* Primary approach: Full name in Noto Sans which has excellent diacritical support */}
      <PdfText style={{...combinedStyle, fontFamily: 'NotoSans'}}>
        COSMIN VLĂDUȚU
      </PdfText>
      
      {/* Fallback approach 1: Split name into segments with different fonts */}
      <View style={{ position: 'absolute', top: 0, left: 0, opacity: 0 }}>
        <PdfText style={combinedStyle}>COSMIN VL</PdfText>
        <PdfText style={{...combinedStyle, fontFamily: 'NotoSans'}}>Ă</PdfText>
        <PdfText style={combinedStyle}>DU</PdfText>
        <PdfText style={{...combinedStyle, fontFamily: 'NotoSans'}}>Ț</PdfText>
        <PdfText style={combinedStyle}>U</PdfText>
      </View>
      
      {/* Fallback approach 2: Include a backup approach with Unicode code points */}
      <View style={{ position: 'absolute', top: 0, left: 0, opacity: 0 }}>
        <PdfText style={combinedStyle}>
          COSMIN VL{String.fromCharCode(0x0102)}DU{String.fromCharCode(0x021A)}U
        </PdfText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  name: {
    fontFamily: 'Lato',
    fontSize: 32,
    textTransform: 'uppercase',
  },
});

export default RomanianName;
