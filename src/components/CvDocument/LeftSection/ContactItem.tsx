// ContactItem.tsx
// This component renders a single contact item (icon + text/link) for the CV document.
// It supports special handling for links and Romanian diacritical characters.
//
// Props:
// - icon: ReactNode — SVG icon to display
// - text: ReactNode — Contact text content
// - link: string (optional) — If provided, wraps text in a clickable link with appropriate styling
// - children: ReactNode (optional) — Alternative to text prop for more complex content
//
// Visual features:
// - Row layout with icon on left, text/link on right
// - Consistent vertical spacing (2px margins)
// - Center alignment for clean presentation
// - Automatic detection and handling of diacritical characters
// - Clickable links with subtle styling indicators
// - Proper contrast for dark background (using white text)
//
// Implementation details:
// - Intelligently switches between Text and DiacriticalText based on content
// - Wraps content in Link component when link prop is provided
// - Supports SVG icons with consistent sizing
//
// Usage: Used in LeftSection to display contact information (phone, email, location, etc.).

import React, {ReactNode} from "react";
import {StyleSheet, View, Link} from "@react-pdf/renderer";
import { Text, DiacriticalText } from "../elements";
import { hasDiacriticalChars } from "../../../utils/diacritics";

interface ContactItemProps {
  icon: ReactNode;
  text?: ReactNode;
  link?: string;
  children?: ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  text,
  link,
  children,
}) => {
  // Extract diacritical text detection to a reusable function
  const isDiacriticalText = (content: any): boolean => {
    return (typeof content === 'string' && hasDiacriticalChars(content));
  };

  const renderText = () => {
    if (children) {
      return children;
    }
    
    if (isDiacriticalText(text) && typeof text === 'string') {
      return <DiacriticalText contrast>{text}</DiacriticalText>;
    }
    
    return <Text contrast>{text}</Text>;
  };  const textElementToRender = link && text
    ? (
      <Link src={link}>
        {isDiacriticalText(text) && typeof text === 'string'
          ? <DiacriticalText contrast style={styles.linkText}>{text}</DiacriticalText>
          : <Text contrast style={styles.linkText}>{text}</Text>
        }
      </Link>
    )
    : renderText();

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {icon}
      </View>
      {textElementToRender}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2
  },
  icon: {
    width: 10,
    height: 10,
    alignItems: 'center',
    marginRight: 10,
  },  linkText: {
    // textDecoration: 'none', doesn't work. The line should not be displayed
    textDecoration: 'line-through underline',
  },
  text: {
    // Default text style
  }
})

export default ContactItem;
