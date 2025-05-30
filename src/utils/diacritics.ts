/**
 * diacritics.ts
 * Utilities for handling Romanian diacritical characters in PDF documents.
 * 
 * This module provides helper functions for detecting and processing Romanian
 * diacritical characters (like Ă, Ș, Ț) to ensure proper display in PDF documents.
 * 
 * The approach splits text into segments with and without diacritical characters,
 * allowing the PDF renderer to apply the appropriate font only where needed.
 */

/**
 * Romanian diacritical characters that require special font handling
 */
export const ROMANIAN_DIACRITICAL_CHARS = ['ă', 'Ă', 'â', 'Â', 'î', 'Î', 'ș', 'Ș', 'ț', 'Ț'];

/**
 * Checks if a string contains Romanian diacritical characters
 * 
 * @param text The text to check
 * @returns True if the text contains at least one Romanian diacritical character
 * 
 * Usage:
 * ```
 * if (hasDiacriticalChars("Iași, România")) {
 *   // Use special handling
 * }
 * ```
 */
export const hasDiacriticalChars = (text: string): boolean => {
  if (!text) return false;
  return ROMANIAN_DIACRITICAL_CHARS.some(char => text.includes(char));
};

/**
 * Splits a string into parts based on whether each character is a diacritical character
 * This enables mixed-font rendering where only the diacritical portions use the special font.
 * 
 * @param text The text to split
 * @returns An array of { text, isDiacritical } parts that can be rendered with different fonts
 * 
 * Example output for "VLĂDUȚU":
 * [
 *   { text: "VL", isDiacritical: false },
 *   { text: "Ă", isDiacritical: true },
 *   { text: "DU", isDiacritical: false },
 *   { text: "Ț", isDiacritical: true },
 *   { text: "U", isDiacritical: false }
 * ]
 */
export const splitByDiacriticals = (text: string): Array<{ text: string, isDiacritical: boolean }> => {
  if (!text) return [];
  
  const parts: Array<{ text: string, isDiacritical: boolean }> = [];
  let currentText = '';
  let currentIsDiacritical = false;
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const isDiacritical = ROMANIAN_DIACRITICAL_CHARS.includes(char);
    
    // If we're starting a new part
    if (currentText === '' || isDiacritical !== currentIsDiacritical) {
      if (currentText !== '') {
        parts.push({
          text: currentText,
          isDiacritical: currentIsDiacritical
        });
      }
      currentText = char;
      currentIsDiacritical = isDiacritical;
    } else {
      // Continue current part
      currentText += char;
    }
  }
  
  // Push final part
  if (currentText !== '') {
    parts.push({
      text: currentText,
      isDiacritical: currentIsDiacritical
    });
  }
  
  return parts;
};
