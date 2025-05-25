# CV Website built with React and @react-pdf/renderer

This project is a professional CV/resume web application built with Next.js and React, utilizing @react-pdf/renderer to generate beautiful PDF resumes that can be viewed directly in the browser or downloaded.

This is a fork of Radu Nemerenco's project, which can be found at https://github.com/radunemerenco/cv-react-pdf . It has been enhanced with a more colorful design, additional sections for certifications and technical blog contributions, extensive refactoring, and added technical documentation. Given the big differences in both appearance and structure, I’ve decided to maintain it as a separate project rather than submitting a pull request to the original repository.

## Project Features

- **Multi-page PDF Generation**: Creates professional resumes in PDF format with proper A4 layout
- **Two CV Formats**: Option to view a full multi-page CV or a condensed one-page summary
- **Custom Font Handling**: Special support for Romanian diacritical characters (Ă, Ș, Ț)
- **Responsive UI**: Clean landing page with PDF viewer integration
- **Component-Based Architecture**: Reusable components for all CV sections
- **Timeline Visualization**: Visual timeline for work experience with consistent styling
- **Comprehensive Documentation**: All components are fully documented for easier maintenance

## Project Structure

The application is organized into these main sections:

- `/pages` - Next.js page components (index page and API examples)
- `/src/components/CvDocument` - All PDF generation components
  - `/LeftSection` - Left sidebar components (contact info, skills, etc.)
  - `/RightSection` - Main content components (projects, work experience)
  - `/elements` - Shared UI elements (text, titles with proper font handling)
- `/src/utils` - Utility functions (e.g., handling diacritical characters)
- `/public/fonts` - Font files for proper PDF rendering with special character support

## Key Technical Solutions

- **Diacritical Characters**: Custom utility to detect and properly render Romanian special characters
- **PDF Generation**: Uses @react-pdf/renderer for professional PDF document creation
- **Font Configuration**: Explicit Unicode range configuration for proper character display
- **Timeline Visualization**: Custom implementation with SVG for project history display
- **Responsive Layout**: Properly structured multi-page PDF layout
>>>>>>> 250cd8cc1d8cb952507cf6795112aa82ab9b5f4c

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the CV website.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [@react-pdf/renderer Documentation](https://react-pdf.org/) - learn about PDF generation in React.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
