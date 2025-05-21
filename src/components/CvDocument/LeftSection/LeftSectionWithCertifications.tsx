// LeftSectionWithCertifications.tsx
// This component renders only the certifications section for the second page of the full CV.

import {StyleSheet, View} from "@react-pdf/renderer";
import React from "react";
import LeftSectionPanel from "./LeftSectionPanel";
import CertificationItem from "./CertificationItem";

// Define the component as a named function component (React.FC)
const LeftSectionWithCertifications: React.FC = () => {
  return (
    <View style={[styles.container]}>
      {/* Only include the Certifications section */}
      <LeftSectionPanel title="CERTIFICATIONS">
        <CertificationItem name="Product Analytics Certification" date="Jul 2023" />
        <CertificationItem name="Product-led Certification" date="Jul 2023" />
        <CertificationItem name="Azure Fundamentals" date="Jun 2021" />
        <CertificationItem name="Situational leadership" date="May 2021" />
      </LeftSectionPanel>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#434244',
    width: '30%',
  }
})

export default LeftSectionWithCertifications;
