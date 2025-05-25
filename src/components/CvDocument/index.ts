/**
 * CvDocument/index.ts
 * 
 * This index file exports the main CvDocument component as the default export.
 * It serves as the entry point for importing the PDF document generator component.
 * 
 * Using this barrel file pattern simplifies imports in other components,
 * especially in the main pages where the PDF is rendered, by providing a cleaner
 * import path without having to specify the exact file location.
 * 
 * Usage example:
 * ```
 * import CvDocument from '../src/components/CvDocument';
 * ```
 */
import CvDocument from "./CvDocument";

export default CvDocument;
