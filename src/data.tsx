// data.tsx
// This file contains the data and configuration for the CV document, including project details and enabled project lists.
//
// Exports:
// - enabledProjectsAll: string[] — All project keys to show in the full CV
// - enabledProjectsOnePage: string[] — Project keys for the one-page CV
// - projectsByName: object — Project details keyed by project name, including name, period, title, company, client problem, achievements, and skills
//
// Usage: Imported by CvDocument and CvDocumentOnePage to provide project data for rendering.

import React from "react";
import Text from "./components/CvDocument/elements/Text";

export type EnabledProjects = (keyof typeof projectsByName)[];

export const enabledProjectsAll: EnabledProjects = [
  'mek',
  'now',
  'medcom',
  'lms',
  'cgm',
  'dr',
  'webrella',
  'insite',
  'woz',
  'suite4care',
  'vast',
];

export const enabledProjectsOnePage: EnabledProjects = [
  'now',
  'insite',
  'woz'
]


export const projectsByName = {
  mek: {
    projectName: 'MEK',
    from: 'Jan 2025',
    to: 'Present',
    title: 'Senior .NET Azure developer (Feature Lead)',
    company: 'Arnia Software',
    clientProblem: 'The client, which is a German energy provider, needed a custom wrapper over Auth0 to centralize configuration and extend functionalities that couldn’t be handled directly in Auth0. Also, the second aim of the project was to have a centralized authentification and authorization system for all the apps',
    achievements: [
      <><Text isBold>Increased the client base by more than 2x</Text> by filling a niche in the market by providing offline capabilities and automatic synchronization on network reachability.</>,
      <><Text isBold>Reduced development time by more than 5x</Text> and highly increased data quality by designing and implementing a mobile oriented app with much better UX compared to out of the box solutions provided by the SAP platform.</>,
    ],
    skills: ['.NET Core', 'CosmosDb', 'DDD', 'CQRS', 'Auth0', 'Azure DevOps', 'Azure Services', 'Bicep', 'Serverless'],
  },
  now: {
    projectName: 'Now',
    from: 'May 2023',
    to: 'Jan 2025',
    title: 'Senior .NET Azure developer',
    company: 'Arnia Software',
    clientProblem: 'The client, a German energy grid provider, was losing money by not having digital processes available for its customers. Most of the processes were manual, took time and needed human interaction',
    achievements: [
      <><Text isBold>Improved security 2X</Text> by implementing a single system that was accountable for contract credentials.</>,
      <><Text isBold>Increased development speed by 30%</Text> by implementing trivial systems using the same patterns and keeping creation templates updated</>,
    ],
    skills: ['C#', '.NET Core', 'EF Core', 'Azure Functions', 'Cosmos DB', 'Azure Services', 'Azure DevOps', 'ARM templates',
       'EventGrid', 'Distributed Systems', 'Serverles'],
  },
  medcom: {
    projectName: 'MedCom',
    from: 'Jan 2023',
    to: 'May 2023',
    title: '.NET Solution Architect',
    company: '',
    clientProblem: 'The client, a medical clinic that needed a way to help people that wanted a second opinion or didn’t have urgent matters, to get fast contact with a doctor, online, without getting into the clinic.',
    achievements: [
      <><Text isBold>Increased user satisfaction by 60%</Text> by implementing a user-friendly and easy-to-use user interface.</>,
      <><Text isBold>Boosted user retention by 2x</Text> by implementing an easy way to identify the user’s journey and enabling admins to provide vouchers and offers exactly for the user’s needs.</>,
      <><Text isBold>Decreased clinic costs by 20%</Text> since most of the customers started to get online consultations and not come physically to the clinic.</>,
    ],
    skills: ['.NET Core', 'PostgreSQL', 'DDD', 'CQRS', 'Auth0', 'Orchard', 'Blazor', 'HangFire', 'Polly', 'Docker', 'Azure DevOps'],
  },
  lms: {
    projectName: 'Leads management system',
    from: 'Sept 2021',
    to: 'Dec 2022',
    title: 'Senior .NET Fullstack developer (Shadow leading)',
    company: 'Arnia Software',
    clientProblem: ' The client, one of the largest energy supply companies in Germany, was struggling with converting leads into customers due to a lead management system that had overcomplicated and long-running processes.',
    achievements: [
      <><Text isBold>Reduced to almost 0 the number of implementation bugs</Text> by increasing the test code coverage and introducing new ways of testing the domain core concepts.</>,
      <><Text isBold>Increased performance for the processes that took more than 5 min to </Text> by splitting the system into smaller pieces based on the type of processes they worked with and upgrading the framework to the latest version.</>,
    ],
    skills: ['.NET Core', 'Angular', ' MassTransit', 'SQL', 'CosmosDB', 'Azure Services', 'Azure Functions', 'Service Bus', 'SonarQube', 'NexusIQ', 'Azure DevOps', 'ARM Templates', 'Distributed Systems', 'CQRS'],
  },
  cgm: {
    projectName: 'CGM',
    from: 'Nov 2020',
    to: 'Sept 2021',
    title: 'Head of .NET Functional Area',
    clientProblem: 'The client, a German company, provided medical software for 13 countries and needed someone in the development centre from Romania to guide all the projects and people who worked on the dotnet discipline.',
    achievements: [
      <><Text isBold>Increased developers’ satisfaction</Text> by having regular one-to-one meetings, organizing a “Learning group” in which they have technical and soft skills presentations, and setting and monitoring technical objectives for them to evolve.</>,
      <><Text isBold>Increased development speed 3x</Text> by doing regular audits of the projects from the Romanian centre and suggesting patterns and architectures types that could be implemented to improve the products.</>,
    ],
    skills: ['Communication', 'Leadership', 'Team Management', 'Situational Leadership', 'Management'],
  },
  dr: {
    projectName: 'DR App',
    from: 'May 2020',
    to: 'Sept 2021',
    title: 'Senior .NET Fullstack developer (Team lead)',
    company: 'CGM',
    clientProblem: 'The client, was a German company that provided medical software which aimed to digitize Dutch pharmacy processes, reducing human errors and saving lives by eliminating paper prescriptions.',
    achievements: [
      <><Text isBold>Led a team of 8 people,</Text> from a Team lead position.</>,
      <><Text isBold>Increased client satisfaction 3x</Text> by delivering a fast solution that uses real-time communication with a modern-looking user interface.</>,
      <><Text isBold>Kept a maintainability index over 60</Text> by decoupling each part of the system into modules, which led to a reduction of development effort in maintenance.</>,
    ],
    skills: ['.NET Core', '.Net Framework', 'WPF', 'Angular', 'Typescript', 'IdentityServer4', 'SignalR', 'ngRX', 'WireMock .NET', 'Team Management', 'Situational Leadership'],
  },
  webrella: {
    projectName: 'Webrella',
    from: 'Apr 2019',
    to: 'May 2020',
    title: 'Senior .NET Azure developer (Team lead)',
    company: 'Enea Global Services',
    clientProblem: 'The client, one of the top producers worldwide of infrared and thermal cameras needed a way to enable its customers to be able to work on their images, without any dependency on the devices or the operating systems they had.',
    achievements: [
            <><Text isBold>Led a team of 3 people,</Text>, by being a tech lead, scrum master, proxy product owner, developer, and solution architect for the team</>,
            <><Text isBold>Increased client satisfaction 2x</Text> by delivering a fast solution, even for people with poor internet connection.</>,
            <><Text isBold>Reduced the number of implementation bugs to 0</Text> by introducing mutation testing and having a code coverage of over 85% system into modules, which led to a reduction of development effort in maintenance.</>,
    ],
    skills: ['.NET', 'Communication', 'Leadership', 'Team Management', 'Scrum master', 'Agile', 'Xunit', 'Moq', 'CQS', 'Azure', 'Jenkins', 'Software Architecture'],
  },
  insite: {
    projectName: 'Insite',
    from: 'Feb 2018',
    to: 'Apr 2019',
    title: ' Senior .NET Fullstack Azure developer',
    company: 'Enea Global Services',
    clientProblem: 'The client, one of the top producers worldwide of infrared and thermal cameras was trying to increase the user satisfaction of their users who were thermal inspectors by digitalizing the creation of reports done by them and increasing their productivity',
    achievements: [
      <><Text isBold>Boosted client satisfaction 2x</Text> by creating a way for them to be able to create both printed documents but also save in a cloud their reports and assets after and during the inspection.</>,
      <><Text isBold>Increased customer retention by 5x</Text> by introducing an easier-to-use solution for their processes while they are on the field, away from a computer.</>,
      <><Text isBold>Kept a maintainability index over 60,</Text> by decoupling each part of the system into modules, which led to a reduction of development effort in maintenance.</>,

    ],
    skills: ['.NET Core', 'Xunit', 'Moq', 'CQRS', 'React', 'Redux', 'Azure ServiceBus', 'Azure B2B', 'Azure SQL Server', 'Unit, Integration and Mutation tests'],
  },
  woz: {
    projectName: 'WOZ',
    from: 'Aug 2017',
    to: 'Feb 2018',
    title: '.NET Backend developer (shadow leading)',
    company: 'Centric IT Solutions',
    clientProblem: 'The client, one of the biggest software companies from the Netherlands, provided a suite of products for the municipalities and needed a product so that the taxes for waterboards could be easily calculated and sent both to the paying people and the government.',
    achievements: [
      <><Text isBold>Boosted product stability by 50%</Text> by creating nightly builds in which all the tests were run and introduced static code analysis with rules agreed upon at the suite level</>,
      <><Text isBold>Shadow led a team of 7,</Text> and increased the communication and decision-making process by being the mediator between the dev team and architects and between team members</>,
      <><Text isBold>Reduced the number of production criticalbugs to 0</Text> by increasing the code-coverage from 30% to 60% and introducing well-known patterns instead of custom implementation</>,

    ],
    skills: ['.NET Famework', 'Windows Services', 'WCF Services', 'Windows Forms', 'MassTransit', 'RabbitMQ', 'Oracle', 'Azure DevOps', 'SonarQube', 'Selenium'],
  },
  suite4care: {
    projectName: 'Suite4Care',
    from: 'Aug 2015',
    to: 'Jul 2017',
    title: '.NET FullStack developer',
    company: 'Centric IT Solutions',
    clientProblem: 'The client, one of the biggest software companies from the Netherlands, provided a suite of products for the private healthcare system from its country, and it was struggling to get new customers due to old-looking and working applications.',
    achievements: [
      <><Text isBold>Increased performance by 20%</Text> by splitting the monoliths into multiple services and implementing clean architecture and well-known patterns</>,
      <><Text isBold>Decreased the number of critical bugs by 50%</Text> by becoming like a "fireman" and getting involved in all critical bugs from the suite.</>,
    ],
    skills: ['.NET', 'CQRS', 'Web API', 'MVC', 'MSSql', 'nHibernate', 'Entity Framework', 'Dapper', 'Release Management (VSTS)', 'PowerShell'],
  },
  vast: {
    projectName: 'Vast Visibility',
    from: 'Jul 2011',
    to: 'Jul 2015',
    title: '.NET Fullstack developer',
    clientProblem: 'The client, one of the top 3 software insurance comparison companies from the UK, was struggling to increase its conversion rate from leads to customers due to an immature product.',
    achievements: [
      <><Text isBold>ncreased the NET Promoter Score from 7 to 9</Text> by implementing multiple brokers so that the end users received more offers.</>,
      <><Text isBold>Enhanced user retention by 3x</Text> by improving the insurance renewal and failed to get results systems</>,
    ],
    skills: ['.NET Framework', 'MVC', 'JQuery', 'REST API', 'Web Forms', 'Windows Forms', 'SQL', 'Entity Framework', 'ADO .NET', 'Stored Procedures'],
  }
}
