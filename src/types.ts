// types.ts
// This file defines TypeScript types and interfaces for the CV document data model.
// It provides strong typing for the data structure used throughout the application.
//
// Exports:
// - Skill: Union type of all possible skill strings used in project descriptions
// - Project: Interface describing the structure of a project entry for the CV
//
// The Project interface defines the exact shape required for each project entry,
// ensuring consistent data structure across all project descriptions.
//
// Usage: Used for type safety in project data and component props throughout the CV codebase.

import {ReactNode} from "react";

export type Skill = 'JavaScript'
  | 'NodeJS'
  | 'PostgreSQL'
  | 'ReactJS'
  | 'Redux'
  | 'Docker'
  | 'AWS'
  | 'Jenkins CI/CD'
  | 'GitHub'
  | 'Jira'
  | 'TypeScript'
  | 'React Native'
  | 'Apple Pay'
  | 'REST API'
  | 'Google Analytics'
  | 'Target Process'
  | 'React'
  | 'WebPack'
  | 'SAP'
  | 'OAuth'
  | 'Styled Components'
  | 'Rest API'
  | 'WebSocket'
  | 'Socket.IO'
  | 'NextJS'
  | 'SCSS'
  | 'GraphQL'
  | 'AWS EC2'
  | 'AWS RDS'
  | 'React Animations'
  | 'Stripe'
  | 'PayU'
  | 'GitLab'
  | 'Java'
  | 'MongoDB'
  | 'TensorFlow'
  | 'BitBucket'
  | 'AngularJS'
  | 'Elastic Search'
  | 'Grunt'
  | 'Bower'
  | 'Twitter Bootstrap'
  | 'Spring Framework'
  | 'Documentum';

export interface Project {
  projectName: string;    // Display name of the project
  from: string;           // Start date in string format (e.g., "Jan 2020")
  to: string;             // End date in string format (e.g., "Apr 2022" or "Present")
  title: string;          // Job title/role on the project
  company?: string;       // Optional company name associated with the project
  clientProblem: ReactNode; // Description of the client problem/project context
  achievements: ReactNode[]; // List of accomplishments on the project
  skills: Skill[],        // Array of skills used (from the Skill union type)
  isLastItem?: boolean;   // Flag for layout/styling when this is the last project in a list
}
