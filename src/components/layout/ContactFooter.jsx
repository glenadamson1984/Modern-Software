import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import CallToActionButton from "../buttons/action/CallToActionButton";
import { useRouter } from "next/router";
import {
  StyledContactSection,
  StyledContactContainer,
  StyledContactInfo,
  StyledContactItem,
  StyledSectionTitle,
} from "../../../page-styles/index.styles";

const ContactFooter = () => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();
  const router = useRouter();

  return (
    <StyledContactSection isDesktop={isDesktop}>
      <StyledContactContainer>
        <StyledSectionTitle isDesktop={isDesktop} light>
          Let&apos;s discuss your project
        </StyledSectionTitle>
        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
          <div style={{ maxWidth: "300px", width: "100%" }}>
            <CallToActionButton
              variant="darkGreen"
              onClick={() => router.push("/contactus")}
            >
              Book a discovery call
            </CallToActionButton>
          </div>
        </div>
        <StyledContactInfo>
          <StyledContactItem>
            <span>📧</span>
            <span>info@modernsoftware.co.uk</span>
          </StyledContactItem>
          <StyledContactItem>
            <span>📞</span>
            <span>+44 28 3037 3007</span>
          </StyledContactItem>
          <StyledContactItem>
            <span>📍</span>
            <span>Northern Ireland, UK</span>
          </StyledContactItem>
        </StyledContactInfo>
      </StyledContactContainer>
    </StyledContactSection>
  );
};

export default ContactFooter;
