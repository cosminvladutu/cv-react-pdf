// Text.tsx
// This component wraps @react-pdf/renderer Text to provide custom styling for the CV document.
// Supports contrast (white text) and bold (black font weight) options, with default Lato font and justified alignment.
//
// Props:
// - contrast: boolean (optional) — sets text color to white
// - isBold: boolean (optional) — sets font weight to black
// - style: custom style overrides
// - All other @react-pdf/renderer TextProps
//
// Usage: Used throughout the CV for consistent text rendering.

import ReactPDF, {StyleSheet, Text as PdfText} from '@react-pdf/renderer';
import type {Style} from '@react-pdf/types';
import React from "react";

interface TextProps extends ReactPDF.TextProps {
  contrast?: boolean;
  isBold?: boolean;
}

const Text: React.FC<TextProps> = ({ contrast, isBold, style, ...props}) => {
  const defaultStylesInternal: Style = {...defaultStyle.text};

  if (contrast) {
    defaultStylesInternal.color = '#FFF';
  }

  if (isBold) {
    defaultStylesInternal.fontWeight = 'black'
  }

  const styles = style
    ? { ...defaultStylesInternal, ...style}
    : defaultStylesInternal;

  return <PdfText style={styles} {...props} />
}

const defaultStyle = StyleSheet.create({
  text: {
    fontFamily: 'Lato',
    color: '#242424',
    fontSize: 9,
    textAlign: 'justify'
  },
});

export default Text;
