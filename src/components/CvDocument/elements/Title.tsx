// Title.tsx
// This component wraps @react-pdf/renderer Text to provide custom styling for titles in the CV document.
// Supports contrast (white text) option, with default Lato font and left alignment.

import {StyleSheet} from '@react-pdf/renderer';
import React from "react";
import Text from "./Text";

interface TitleProps {
  contrast?: boolean;
  style?: any;
  children?: React.ReactNode;
  [key: string]: any;
}

const Title: React.FC<TitleProps> = ({ contrast, style, ...props}) => {
  const combinedStyles = style ? {...styles.title, ...style} : styles.title;
  
  return (
    <Text 
      style={combinedStyles} 
      contrast={contrast} 
      {...props} 
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'left', // Explicitly set left alignment to override default justify
  }
});

export default Title;