/**
 * LeftSection/index.ts
 * 
 * This index file exports LeftSection components for the CV document.
 * It serves as a barrel file that simplifies imports by providing a single entry point
 * for related components from this directory.
 * 
 * Exports:
 * - LeftSection (default): Main left section for the first page
 * - LeftSectionWithCertifications: Left section variant for the second page showing certifications
 * - LeftSectionEmpty: Empty left section used for additional pages beyond the second
 * - LeftSectionOnePage: Compact left section optimized for the one-page CV
 * - BlogContributionItem: Component for showing blog contribution links
 * 
 * Usage example:
 * ```
 * import LeftSection, { LeftSectionWithCertifications, LeftSectionEmpty } from './LeftSection';
 * ```
 */
import LeftSection from "./LeftSection";
import LeftSectionWithCertifications from "./LeftSectionWithCertifications";
import LeftSectionEmpty from "./LeftSectionEmpty";
import LeftSectionOnePage from "./LeftSectionOnePage";
import BlogContributionItem from "./BlogContributionItem";

export default LeftSection;
export { LeftSectionWithCertifications, LeftSectionEmpty, LeftSectionOnePage, BlogContributionItem };
