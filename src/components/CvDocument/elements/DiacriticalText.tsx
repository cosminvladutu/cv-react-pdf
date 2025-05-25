import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';
import Text from './Text';
import { hasDiacriticalChars, splitByDiacriticals } from '../../../utils/diacritics';

/**
 * Props for the DiacriticalText component
 * @property {string} children - The text content to render with proper diacritical character support
 * @property {object} style - Optional styles to apply to the text
 * @property {boolean} contrast - Whether to render with contrast styles (default: false)
 */
interface DiacriticalTextProps {
  children: string;
  style?: any;
  contrast?: boolean;
}

/**
 * A specialized component for handling Romanian diacritical characters in PDF documents
 * 
 * This component solves the issue of displaying Romanian diacritical characters (like Ă, Ș, Ț, etc.)
 * in PDF documents created with @react-pdf/renderer.
 * 
 * The approach:
 * 1. It automatically detects diacritical characters in the text
 * 2. It splits the text into segments, separating normal and diacritical characters
 * 3. For regular text, it uses the default font (Lato)
 * 4. For diacritical characters only, it applies the NotoSans font which has better Unicode support
 * 
 * This technique creates a seamless reading experience even with mixed character sets,
 * ensuring proper display of Romanian names and locations throughout the CV.
 * 
 * Usage example:
 * <DiacriticalText>Iași, România</DiacriticalText>
 * <DiacriticalText contrast>VLĂDUȚU</DiacriticalText>
 * 
 * @param {DiacriticalTextProps} props - Component props
 */
const DiacriticalText: React.FC<DiacriticalTextProps> = ({ 
  children, 
  style,
  contrast = false,
}) => {
  if (!children) return null;
  
  // If no diacritics, just return regular text
  if (!hasDiacriticalChars(children)) {
    return contrast ? <Text contrast style={style}>{children}</Text> : <Text style={style}>{children}</Text>;
  }
  
  // Split text into parts based on diacritical characters
  const textParts = splitByDiacriticals(children);
  
  // Render the text parts
  return (
    <Text contrast={contrast} style={style}>
      {textParts.map((part, index) => {
        if (part.isDiacritical) {
          return (
            <Text 
              key={index} 
              contrast={contrast} 
              style={{...style, fontFamily: 'NotoSans'}}
            >
              {part.text}
            </Text>
          );
        }
        return part.text;
      })}
    </Text>  );
};

export default DiacriticalText;
