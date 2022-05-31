import React from "react";
import Image from "next/image";
import useWindowSize from "../../../hooks/useWindowSize";
import {
  StyledAddressContainer,
  StyledLinks,
  StyledOfficeLocationContainer,
  StyledSubTitle,
  StyledContainer,
} from "./footer.styles";
import { StyledLogoTitle } from "../logo/logo.styles";
import FooterDesktop from "./desktop/FooterDesktop";

const Footer = () => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  if (isDesktop) {
    return <FooterDesktop />;
  }

  return (
    <StyledContainer>
      <Image
        src="/images/1-only.png"
        alt="Modern Software"
        width={95}
        height={82.5}
      />
      <StyledLogoTitle>Modern Software</StyledLogoTitle>
      <StyledSubTitle>Contact Us</StyledSubTitle>
      <StyledLinks>
        <div>
          <span>Start a Project</span>
        </div>
        <div>info@modern-software.co.uk</div>
      </StyledLinks>
      <StyledAddressContainer>
        <div>
          <StyledOfficeLocationContainer>
            NI Office
          </StyledOfficeLocationContainer>
          <div
            style={{
              font: "normal normal normal 16px/26px Roboto",
              color: "#BFBFBF",
            }}
          >
            <Image
              src="/images/map-pin.png"
              alt="Modern Software"
              width={20}
              height={20}
            />
            home address
            <div style={{ paddingLeft: "20px" }}>portadown, bt66666</div>
          </div>
          <div
            style={{
              font: "normal normal normal 16px/26px Roboto",
              paddingTop: "1rem",
              color: "#BFBFBF",
            }}
          >
            <Image
              src="/images/phone.png"
              alt="Modern Software"
              width={20}
              height={20}
            />
            02938735647
          </div>
        </div>
        <div>
          <StyledOfficeLocationContainer>
            England Office
          </StyledOfficeLocationContainer>

          <div
            style={{
              font: "normal normal normal 16px/26px Roboto",
              color: "#BFBFBF",
            }}
          >
            <Image
              src="/images/map-pin.png"
              alt="Modern Software"
              width={20}
              height={20}
            />
            home address
            <div style={{ paddingLeft: "20px" }}>portadown, bt66666</div>
          </div>
          <div
            style={{
              font: "normal normal normal 16px/26px Roboto",
              paddingTop: "1rem",
              color: "#BFBFBF",
            }}
          >
            <Image
              src="/images/phone.png"
              alt="Modern Software"
              width={20}
              height={20}
            />
            02938735647
          </div>
        </div>
      </StyledAddressContainer>
      <div
        style={{
          padding: "2rem 4rem",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Image
          src="/images/facebook.png"
          alt="Modern Software"
          width={40}
          height={40}
        />
        <Image
          src="/images/instagram.png"
          alt="Modern Software"
          width={40}
          height={40}
        />
        <Image
          src="/images/twitter.png"
          alt="Modern Software"
          width={40}
          height={40}
        />
        <Image
          src="/images/linkedin.png"
          alt="Modern Software"
          width={40}
          height={40}
        />
      </div>
      {/*commenting these links out for now*/}
      {/*<div>contact privacy notice cookie policy</div>*/}
      <div
        style={{
          font: "normal normal normal 16px/21px Roboto",
          color: "#BFBFBF",
        }}
      >
        Copyright @2022 Modern Software
      </div>
    </StyledContainer>
  );
};

export default Footer;
