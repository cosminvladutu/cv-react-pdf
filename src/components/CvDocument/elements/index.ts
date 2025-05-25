/**
 * elements/index.ts
 * 
 * This index file exports all text-related elements in a single module for easier importing.
 * Using this barrel file pattern simplifies imports in other components, allowing for cleaner code.
 * 
 * Exports:
 * - Text: Base text component with custom styling and diacritical character detection
 * - Title: Special text component for section headings with uppercase and bold styling
 * - DiacriticalText: Enhanced text component with Romanian diacritical character support
 *
 * Usage example:
 * ```
 * import { Text, Title, DiacriticalText } from '../elements';
 * ```
 */
import Text from './Text';
import Title from './Title';
import DiacriticalText from './DiacriticalText';

export { Text, Title, DiacriticalText };
