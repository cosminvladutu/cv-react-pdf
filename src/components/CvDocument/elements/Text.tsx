// Text.tsx
// This component wraps @react-pdf/renderer Text to provide custom styling and enhanced functionality for the CV document.
// It adds support for contrast options, bold text, custom colors, and handles Romanian diacritical characters.
//
// Props:
// - contrast: boolean (optional) - If true, renders white text (for dark backgrounds)
// - isBold: boolean (optional) - If true, applies bold (weight 900) styling
// - color: string (optional) - Custom text color (overrides contrast setting)
// - style: object (optional) - Additional custom styles to apply
// - children: ReactNode - The text content to render
//
// Key features:
// - Default styling with Lato font, proper text size, and justify alignment
// - Automatic detection of Romanian diacritical characters and font switching
// - Support for customizing text color for headers and highlighted elements
// - Consistent typography throughout the document
//
// Usage example:
// <Text contrast isBold color="#42C7E5">Highlighted text</Text>

import {StyleSheet, Text as PdfText} from '@react-pdf/renderer';
import type {Style} from '@react-pdf/types';
import React from "react";

interface TextProps {
  contrast?: boolean;
  isBold?: boolean;
  color?: string;
  style?: any;
  children?: React.ReactNode;
  [key: string]: any;
}

const Text: React.FC<TextProps> = ({ contrast, isBold, color, style, ...props}) => {
  const defaultStylesInternal: Style = {...defaultStyle.text};

  if (color) {
    defaultStylesInternal.color = color;
  } else if (contrast) {
    defaultStylesInternal.color = '#FFF';
  }

  if (isBold) {
    defaultStylesInternal.fontWeight = 900;
  }
  
  const combinedStyle = style
    ? { ...defaultStylesInternal, ...style}
    : defaultStylesInternal;
    // Special handling for Romanian diacritical characters
  const enhancedProps = {...props};
  
  // If the text contains Romanian diacritical characters, use NotoSans font
  if (typeof props.children === 'string' && /[ĂȚăț]/.test(props.children)) {
    combinedStyle.fontFamily = 'NotoSans';
  }
  
  return <PdfText style={combinedStyle} {...enhancedProps} />;
};

const defaultStyle = StyleSheet.create({
  text: {
    fontFamily: 'Lato',
    color: '#242424',
    fontSize: 9,
    textAlign: 'justify'
  },
});

export default Text;
