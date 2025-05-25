// CertificationItem.tsx
// This component renders a single certification item for the CV document.
// It handles proper text wrapping for certification names that are too long for a single line.
//
// Props:
// - name: string — Name of the certification
// - date: string — Date of the certification (displayed in the right column)
//
// Visual features:
// - Smart text wrapping with line breaks at word boundaries
// - Two-column layout with certification on left, date on right
// - Increased spacing for multi-line items
// - Proper contrast for dark background (using white text)
// - Line height adjustment for better readability
//
// Usage: Used in LeftSectionWithCertifications to display a list of certifications.

import React from "react";
import {StyleSheet, View} from "@react-pdf/renderer";
import Text from "../elements/Text";

interface CertificationItemProps {
  name: string;
  date: string;
}

const CertificationItem: React.FC<CertificationItemProps> = ({name, date}) => {
  // Function to split text into lines of approximately 30 characters
  const splitIntoLines = (text: string, maxCharsPerLine = 30): string[] => {
    // If text is shorter than the limit, return it as is
    if (text.length <= maxCharsPerLine) {
      return [text];
    }

    const lines: string[] = [];
    let remainingText = text;

    while (remainingText.length > 0) {
      if (remainingText.length <= maxCharsPerLine) {
        lines.push(remainingText);
        break;
      }

      // Find the last space before maxCharsPerLine
      const breakPoint = remainingText.substring(0, maxCharsPerLine).lastIndexOf(' ');
      
      // If no space found or breakpoint is at beginning, cut at maxCharsPerLine
      const splitAt = breakPoint > 0 ? breakPoint : maxCharsPerLine;
      
      lines.push(remainingText.substring(0, splitAt));
      remainingText = remainingText.substring(splitAt + (breakPoint > 0 ? 1 : 0));
    }

    return lines;
  };

  // Split the name into lines if it's longer than 30 characters
  const nameLines = splitIntoLines(name);
  const isMultiline = nameLines.length > 1;

  return (
    <View style={isMultiline ? styles.containerMultiline : styles.container}>
      <View style={styles.nameContainer}>
        {nameLines.map((line, index) => (
          <Text key={index} contrast style={styles.name}>{line}</Text>
        ))}
      </View>
      <View style={styles.date}>
        <Text contrast style={styles.dateText}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  containerMultiline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8, // Increased spacing for multiline items
  },
  nameContainer: {
    flex: 1,
    marginRight: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Left align the content
  },
  name: {
    lineHeight: 1.2, // Add line height for better readability
    textAlign: 'left', // Ensure text is left-aligned
  },
  date: {
    width: 50,
    alignItems: 'flex-end',
    alignSelf: 'flex-start', // Align date with top of multiline text
  },
  dateText: {
    textAlign: 'right',
  },
});

export default CertificationItem;
