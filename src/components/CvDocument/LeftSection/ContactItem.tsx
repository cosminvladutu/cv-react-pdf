// ContactItem.tsx
// This component renders a single contact item (icon + text/link) for the CV document.
//
// Props:
// - icon: ReactNode — Icon to display
// - text: ReactNode — Contact text
// - link: string (optional) — If provided, wraps text in a clickable link
//
// Usage: Used in LeftSection to display contact information.

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
