// Title.tsx
// This component wraps @react-pdf/renderer Text to provide custom styling for titles in the CV document.
// It extends the Text component with specific styling for section headers and important labels.
//
// Props:
// - contrast: boolean (optional) - If true, renders white text (for dark backgrounds)
// - color: string (optional) - Custom title color, useful for visual hierarchy and section differentiation
// - style: object (optional) - Additional custom styles to apply
// - children: ReactNode - The title text content to render
//
// Visual styling:
// - Larger font size (14pt) for better visibility
// - UPPERCASE text transformation for emphasis
// - Bold weight for visual hierarchy
// - Left alignment for consistent header positioning
// - Inherits all Text component functionality including color customization
//
// Usage example:
// <Title contrast color="#42C7E5">Section Header</Title>

import {StyleSheet} from '@react-pdf/renderer';
import React from "react";
import Text from "./Text";

interface TitleProps {
  contrast?: boolean;
  color?: string;
  style?: any;
  children?: React.ReactNode;
  [key: string]: any;
}

const Title: React.FC<TitleProps> = ({ contrast, color, style, ...props}) => {
  const combinedStyles = style ? {...styles.title, ...style} : styles.title;
  
  return (
    <Text 
      style={combinedStyles} 
      contrast={contrast}
      color={color}
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