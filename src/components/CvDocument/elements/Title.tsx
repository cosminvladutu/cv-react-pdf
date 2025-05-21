// Title.tsx
// This component renders a styled title text for the CV document using @react-pdf/renderer.
// It extends the custom Text component and applies uppercase transformation and font size styling.
//
// Props: Inherits all props from the custom Text component, plus optional style overrides.
//
// Usage: Used for section titles in the PDF layout.

import {StyleSheet} from '@react-pdf/renderer';
import type {Style} from '@react-pdf/types';
import React from "react";
import Text from "./Text";

interface TitleProps extends React.ComponentProps<typeof Text> {}

const Title: React.FC<TitleProps> = ({ style, ...props}) => {
  const defaultStylesInternal: Style = {...defaultStyle.title};

  const styles = style
    ? { ...defaultStylesInternal, ...style}
    : defaultStylesInternal;

  return <Text style={styles} {...props} />
}

const defaultStyle = StyleSheet.create({
  title: {
    textTransform: 'uppercase',
    fontSize: 12,
  },
});

export default Title;
