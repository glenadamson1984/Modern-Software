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
  StyledSectionDescription,
} from "../../../page-styles/index.styles";

const ContactFooter = () => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();
  const router = useRouter();

  return (
    <StyledContactSection isDesktop={isDesktop}>
      <StyledContactContainer>
        <StyledSectionTitle isDesktop={isDesktop} light>
          Need a Professional Website for Your Small Business?
        </StyledSectionTitle>
        <StyledSectionDescription
          isDesktop={isDesktop}
          light
          style={{
            marginTop: "1rem",
            fontSize: isDesktop ? "18px" : "16px",
            opacity: 0.9,
          }}
        >
          Serving businesses across Northern Ireland including Portadown,
          Banbridge, Lurgan, Armagh, and Craigavon. Let&apos;s discuss how we
          can help your business grow.
        </StyledSectionDescription>
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
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
