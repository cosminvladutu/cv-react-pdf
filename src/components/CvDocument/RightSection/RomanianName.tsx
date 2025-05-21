import React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import { DiacriticalText } from '../elements';

/**
 * A special component to render Romanian character names correctly
 * using the reusable DiacriticalText component
 */
interface RomanianNameProps {
  style?: any;
}

const RomanianName: React.FC<RomanianNameProps> = ({ style }) => {
  const combinedStyle = style ? { ...styles.name, ...style } : styles.name;
  
  return (
    <View style={styles.container}>
      <DiacriticalText style={combinedStyle}>
        COSMIN VLĂDUȚU
      </DiacriticalText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0, // Removed margin to align with other adjustments
  },
  name: {
    fontFamily: 'Lato',
    fontSize: 32,
    textTransform: 'uppercase',
  },
});

export default RomanianName;
