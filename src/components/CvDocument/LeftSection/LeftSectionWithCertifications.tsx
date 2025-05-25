// LeftSectionWithCertifications.tsx
// This component renders the certifications and blog contributions sections for the second page of the full CV.
// It maintains the same styling and layout approach as the main LeftSection but with different content.
//
// Key features:
// - Displays certifications with their dates in a consistent format
// - Shows blog contributions with proper URL formatting
// - Maintains the same 30% width and gray background as other left sections
// - Uses the same cyan color (#42C7E5) for section titles
//
// Usage: Used on the second page of the CV document to provide continuity while showing different content.

import {StyleSheet, View} from "@react-pdf/renderer";
import React from "react";
import LeftSectionPanel from "./LeftSectionPanel";
import CertificationItem from "./CertificationItem";
import BlogContributionItem from "./BlogContributionItem";

// Define the component as a named function component (React.FC)
const LeftSectionWithCertifications: React.FC = () => {  return (
    <View style={[styles.container]}>
      {/* Certifications section */}
      <LeftSectionPanel title="CERTIFICATIONS" titleColor="#42C7E5">
        <CertificationItem name="Microsoft Most Valuable Profesional" date="Mar 2025" />
        <CertificationItem name="AI for Product Management" date="Apr 2024" />
        <CertificationItem name="Product Management Basics Certification" date="Apr 2024" />
        <CertificationItem name="Product Analytics Certification" date="Jul 2023" />
        <CertificationItem name="Product-led Certification" date="Jul 2023" />
        <CertificationItem name="Azure Fundamentals" date="Jun 2021" />
        <CertificationItem name="Situational leadership" date="May 2021" />
        <CertificationItem name="M001: MongoDB Basics" date="Oct 2018" />
        <CertificationItem name="70-483: Programming in C#" date="Nov 2017" />
        <CertificationItem name="MCSA: Web Applications" date="Nov 2017" />
        <CertificationItem name="MCSD: App Builder" date="Nov 2017" />
        <CertificationItem name="70-486 Developing ASP.NET MVC Web Applications" date="Oct 2016" />
        <CertificationItem name="Constructive Feedback" date="Oct 2015" />
        <CertificationItem name="Belbin Team Roles" date="Jun 2015" />      </LeftSectionPanel>      
      {/* Blog Contributions section */}
      <LeftSectionPanel title="CONTRIBUTIONS TO SOFTWARE BLOGS" titleColor="#42C7E5">
        <BlogContributionItem url="https://blog.devgenius.io/" />
        <BlogContributionItem url="https://awstip.com/" />
        <BlogContributionItem url="https://bootcamp.uxdesign.cc/" />
        <BlogContributionItem url="https://towardsdev.com/" />
      </LeftSectionPanel></View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#434244',
    width: '30%',
  }
})

export default LeftSectionWithCertifications;
