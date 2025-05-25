// LeftSection.tsx
// This component renders the left section of the CV document, including profile picture, contact information, skills, and education.
// It uses custom elements and panels for structured display in a PDF format using @react-pdf/renderer.
//
// Main sections:
// - Profile picture (with rounded border and proper positioning)
// - Contact information (phone, email, location, LinkedIn, Skype, etc., each with custom SVG icons)
// - Skills list (with years of experience displayed in a tabular format)
// - Education details (with proper handling of diacritical characters)
//
// Styling:
// - Dark gray background (#434244) provides contrast with the right section
// - Width is set to 30% of the page width
// - SVG icons and content are styled for consistent alignment and spacing
// - Special handling for diacritical characters (Romanian text) using DiacriticalText component
// - Title elements colored with #42C7E5 for visual hierarchy
//
// Props: None (static content)
//
// Usage: Used as part of the CvDocument layout.

import {Image, StyleSheet, View, Svg, Path, G} from "@react-pdf/renderer";
import React from "react";
import Text from "../elements/Text";
import { DiacriticalText } from "../elements";
import LeftSectionPanel from "./LeftSectionPanel";
import SkillItem from "./SkillItem";
import ContactItem from "./ContactItem";

const LeftSection = () => {
  return (
    <View style={[styles.container]}>      <View style={styles.profilePictureContainer}>
        <Image style={styles.profilePicture} src="/images/DSC_8292 test.jpg" />
      </View>
      <LeftSectionPanel title={'Contact'} titleColor="#42C7E5">
        <ContactItem
          icon={(
            <Svg width="10px" height="10px">
              <G transform="scale(0.235)">
                <Path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                      d="M37.812,40.633 C38.437,40.633 38.958,40.421 39.374,39.998 C39.791,39.575 39.999,39.46 39.999,38.412 L39.999,38.412 L39.999,30.481 C39.999,29.846 39.791,29.317 39.374,28.895 C38.958,28.471 38.437,28.260 37.812,28.260 C35.243,28.260 32.604,27.837 29.895,26.991 C28.923,26.709 28.194,26.885 27.708,27.520 L27.708,27.520 L22.812,32.490 C16.354,29.106 11.458,24.136 8.124,17.579 L8.124,17.579 L13.20,12.609 C13.645,11.975 13.819,11.234 13.541,10.388 C12.638,7.850 12.187,5.136 12.187,2.246 C12.187,1.611 11.979,1.82 11.562,0.659 C11.145,0.236 10.624,0.24 9.999,0.24 L9.999,0.24 L2.187,0.24 C1.562,0.24 1.41,0.236 0.624,0.659 C0.208,1.82 0.0,1.611 0.0,2.246 C0.0,12.891 3.680,21.950 11.41,29.423 C18.402,36.896 27.326,40.633 37.812,40.633 Z"/>
              </G>
            </Svg>
          )}
          text={'(+40) 749 084 655'}
          link={'tel:+40749084655'}
        />

        <ContactItem
          icon={(
            <Svg width="10px" height="10px">
              <G transform="scale(0.23)">
                <Path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                      d="M42.723,34.830 C41.871,35.698 40.889,36.133 39.776,36.133 L4.223,36.133 C3.110,36.133 2.127,35.698 1.276,34.830 C0.425,33.962 0.0,32.960 0.0,31.825 L0.0,5.175 C0.0,4.40 0.425,3.38 1.276,2.170 C2.127,1.302 3.110,0.867 4.223,0.867 L39.776,0.867 C40.889,0.867 41.871,1.302 42.723,2.170 C43.574,3.38 43.999,4.40 43.999,5.175 L43.999,31.825 C43.999,32.960 43.574,33.962 42.723,34.830 ZM39.368,5.570 L21.999,17.604 L4.631,5.570 L4.631,9.992 L21.999,22.26 L39.368,9.992 L39.368,5.570 Z"/>
              </G>
            </Svg>
          )}
          text={'cosmin.vladutu@gmail.com'}
          link={'mailto:cosmin.vladutu@gmail.com'}
        />        <ContactItem
          icon={(
            <Svg width="6.4px" height="10px">
              <G transform="scale(0.185)">
                <Path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                      d="M31.885,27.771 C30.662,31.591 29.321,34.956 27.864,37.869 C26.406,40.781 24.713,43.741 22.784,46.749 C20.856,49.757 19.516,51.786 18.764,52.836 C18.11,53.887 17.400,54.698 16.929,55.271 L12.697,49.542 C9.875,45.627 7.54,40.519 4.232,34.217 C1.410,27.914 0.0,22.328 0.0,17.459 C0.0,12.685 1.669,8.626 5.8,5.284 C8.347,1.942 12.321,0.271 16.929,0.271 C21.538,0.271 25.489,1.942 28.781,5.284 C32.73,8.626 33.719,12.685 33.719,17.459 C33.719,20.514 33.107,23.952 31.885,27.771 ZM22.502,12.16 C20.950,10.393 19.93,9.581 16.929,9.581 C14.766,9.581 12.885,10.393 11.286,12.16 C9.687,13.639 8.888,15.549 8.888,17.745 C8.888,19.941 9.687,21.827 11.286,23.403 C12.885,24.978 14.766,25.766 16.929,25.766 C19.93,25.766 20.974,25.2 22.573,23.474 C24.78,21.851 24.830,19.941 24.830,17.745 C24.830,15.549 24.54,13.639 22.502,12.16 Z"/>
              </G>
            </Svg>
          )}
          text="Iași, România"
        />

        <ContactItem
          icon={(
            <Svg width="10px" height="10px">
              <G transform="scale(0.2)">
                <Path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                      d="M42.968,43.574 C42.281,44.350 41.440,44.737 40.447,44.737 L3.781,44.737 C2.788,44.737 1.909,44.350 1.145,43.574 C0.381,42.799 0.0,41.907 0.0,40.899 L0.0,3.558 C0.0,2.550 0.362,1.716 1.88,1.57 C1.814,0.398 2.711,0.69 3.781,0.69 L40.447,0.69 C41.440,0.69 42.281,0.398 42.968,1.57 C43.656,1.716 43.999,2.550 43.999,3.558 L43.999,40.899 C43.999,41.907 43.656,42.799 42.968,43.574 ZM7.333,37.293 L13.635,37.293 L13.635,17.401 L7.333,17.401 L7.333,37.293 ZM13.177,8.502 C12.565,7.843 11.763,7.513 10.770,7.513 C9.777,7.513 8.956,7.843 8.307,8.502 C7.657,9.161 7.333,9.995 7.333,11.3 C7.333,11.934 7.638,12.748 8.249,13.446 C8.860,14.66 9.663,14.376 10.656,14.376 C11.649,14.376 12.470,14.47 13.119,13.388 C13.769,12.729 14.93,11.934 14.93,11.3 C14.93,9.995 13.788,9.161 13.177,8.502 ZM36.666,25.660 C36.666,22.791 35.998,20.619 34.661,19.146 C33.324,17.672 31.586,16.936 29.447,16.936 C27.156,16.936 25.246,18.21 23.718,20.193 L23.718,17.401 L17.416,17.401 L17.416,37.293 L23.718,37.293 L23.718,26.9 C23.718,25.234 23.795,24.691 23.947,24.380 C24.558,22.829 25.628,22.54 27.156,22.54 C29.295,22.54 30.364,23.489 30.364,26.358 L30.364,37.293 L36.666,37.293 L36.666,25.660 Z"/>
              </G>
            </Svg>
          )}
          text={'in/cosmin-vladutu'}
          link={'https://www.linkedin.com/in/cosmin-vladutu'}
        />        <ContactItem
    icon={(
            <Svg width="10px" height="10px">
              <G transform="scale(0.2)">
                <Path fill-rule="evenodd" fill="rgb(255, 255, 255)" 
                      d="M38.645,5.637h-9.768v11.012h-3.759v-11.012h-9.768v3.671h6.098v23.059h7.329V9.308h6.098v10.781a6.788,6.788 0 0,0 7.329,-6.783V9.08a3.443,3.443 0 0,0 -3.559,-3.443z M31.323,0A6.79,6.79 0 0,0 24.53,6.783v2.294h3.759V6.783a3.02,3.02 0 0,1 3.034,-3.034h7.329a6.768,6.768 0 0,1 6.098,6.783v7.329a3.02,3.02 0 0,1 -3.034,3.034h-3.073v3.748h3.073a6.783,6.783 0 0,0 6.783,-6.783V10.54A10.54,10.54 0 0,0 38.0,0h-6.677z M20.761,20.089H9.769a3.02,3.02 0 0,1 -3.034,-3.034V10.54a6.768,6.768 0 0,1 6.098,-6.783h7.329a3.02,3.02 0 0,1 3.034,3.034v2.294h3.759V6.783A6.79,6.79 0 0,0 20.156,0h-7.329A10.54,10.54 0 0,0 0,10.54v6.515a6.783,6.783 0 0,0 6.783,6.783h13.989v-3.748z"/>
              </G>
            </Svg>
          )}
               text={'Cosmin Vladutu'}
          link={'https://teams.microsoft.com/l/chat/0/0?users=cosmin.vladutu@gmail.com'}
        />

        <ContactItem
            icon={(
              <Svg width="10px" height="10px">
                <G transform="scale(0.2)">
                  <Path fill-rule="evenodd" fill="rgb(255, 255, 255)" 
                        d="M0,0 L0,45 L45,45 L45,0 L0,0 Z M37.1442,10.6277 L34.8822,12.7965 C34.6692,12.9622 34.5702,13.2312 34.6222,13.4956 L34.6222,31.5022 C34.5702,31.7691 34.6692,32.0379 34.8822,32.2012 L37.0992,34.3724 L37.0992,34.9238 L25.6938,34.9238 L25.6938,34.3724 L27.9942,32.1561 C28.2344,31.9157 28.2344,31.8422 28.2344,31.5022 L28.2344,17.1778 L21.3714,34.8787 L20.2464,34.8787 L12.2682,17.1778 L12.2682,28.6378 C12.1954,29.0971 12.3382,29.5636 12.6582,29.8914 L15.6522,34.3274 L15.6522,34.9238 L7.0158,34.9238 L7.0158,34.3724 L10.0074,29.8914 C10.3298,29.5636 10.4574,29.0947 10.3754,28.6378 L10.3754,15.3026 C10.4178,14.9497 10.2894,14.5991 10.0308,14.3616 L7.4082,10.6277 L7.4082,10.0762 L15.8042,10.0762 L22.7382,25.5254 L28.8414,10.0762 L36.9174,10.0762 L36.9174,10.6277 L37.1442,10.6277 Z" />
                </G>
              </Svg>
            )}
            text={'@cosmin-vladutu'}
            link={'https://medium.com/@cosmin-vladutu'}
        />      </LeftSectionPanel>

      <LeftSectionPanel title="Skills" titleColor="#42C7E5">
        <SkillItem years={14} name="C#" />
        <SkillItem years={14} name=".NET" />
        <SkillItem years={13} name="SQL Server" />
        <SkillItem years={10} name="Entity framework" />
        <SkillItem years={10} name="Unit & Integration Tests" />
        <SkillItem years={4} name="Azure Functions" />
        <SkillItem years={4} name="Mutation Tests" />
        <SkillItem years={6} name="CQRS" />
        <SkillItem years={7} name="Azure DevOps" />
        <SkillItem years={6} name="Azure Services" />
        <SkillItem years={4} name="CosmosDB" />
        <SkillItem years={4} name="Distributed Systems" />
        <SkillItem years={4} name="Serverless" />
        <SkillItem years={4} name="ARM Templates & Bicep" />
        <SkillItem years={3} name="SonarQube" />
        <SkillItem years={2} name="Windows Services" />
        <SkillItem years={2} name="IdentityServer" />
        <SkillItem years={2} name="Polly" />
        <SkillItem years={2} name="MassTransit" />
        <SkillItem years={2} name="ServiceBus" />
        <SkillItem years={2} name="Angular" />
        <SkillItem years={2} name="React" />
      </LeftSectionPanel>      <LeftSectionPanel title="Education" titleColor="#42C7E5">
        <Text contrast isBold>Alexandru Ioan-Cuza University</Text>
        <Text contrast>Bachelor in Computer Science</Text>
        <DiacriticalText contrast>Iași, România, 2007 - 2010</DiacriticalText>
      </LeftSectionPanel>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#434244',
    width: '30%',
  },
  profilePictureContainer: {
    width: '90%',
    marginHorizontal: 'auto',
    marginBottom: 15
  },
  profilePicture: {
    borderRadius: 9999,
    transform: 'translateY(10px)',
  },
  contactItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  contactIcon: {
    width: 15,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default LeftSection;
