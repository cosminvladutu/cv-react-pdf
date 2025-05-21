import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import Text from '../elements/Text';

/**
 * Specialized component for rendering "Iași, România" with proper diacritical character support
 */
const RomanianLocation = () => {
  return (
    <Text contrast style={styles.text}>
      Ia
      <Text contrast style={{...styles.text, fontFamily: 'NotoSans'}}>ș</Text>
      i, Rom
      <Text contrast style={{...styles.text, fontFamily: 'NotoSans'}}>â</Text>
      nia
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 9,
  },
});

export default RomanianLocation;
