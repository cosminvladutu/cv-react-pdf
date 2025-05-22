// BlogContributionItem.tsx
// This component renders a single blog contribution item for the CV document.
//
// Props:
// - url: string — URL of the blog where contributions were made
//
// Usage: Used in LeftSection to display a list of blog contributions.

import React from "react";
import {StyleSheet, View} from "@react-pdf/renderer";
import Text from "../elements/Text";

interface BlogContributionItemProps {
  url: string;
}

const BlogContributionItem: React.FC<BlogContributionItemProps> = ({url}) => {
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

      // Find the last slash or dot before maxCharsPerLine as good break points for URLs
      let breakPoint = remainingText.substring(0, maxCharsPerLine).lastIndexOf('/');
      if (breakPoint <= 0) {
        breakPoint = remainingText.substring(0, maxCharsPerLine).lastIndexOf('.');
      }
      
      // If no good break point, cut at maxCharsPerLine
      const splitAt = breakPoint > 0 ? breakPoint + 1 : maxCharsPerLine;
      
      lines.push(remainingText.substring(0, splitAt));
      remainingText = remainingText.substring(splitAt);
    }

    return lines;
  };

  // Split the URL into lines if it's longer than 30 characters
  const urlLines = splitIntoLines(url);

  return (
    <View style={styles.container}>
      <View style={styles.urlContainer}>
        {urlLines.map((line, index) => (
          <Text key={index} contrast style={styles.url}>{line}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  urlContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Left align the content
  },
  url: {
    lineHeight: 1.2, // Add line height for better readability
    textAlign: 'left', // Ensure text is left-aligned
    fontSize: 9, // Slightly smaller font for URLs
  },
});

export default BlogContributionItem;
