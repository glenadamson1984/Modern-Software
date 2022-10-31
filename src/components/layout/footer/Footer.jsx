import React from "react";
import Image from "next/image";
import useWindowSize from "../../../hooks/useWindowSize";
import {
  StyledAddressContainer,
  StyledLinks,
  StyledOfficeLocationContainer,
  StyledSubTitle,
  StyledContainer,
  StyledLink,
} from "./footer.styles";
import { StyledLogoTitle } from "../logo/logo.styles";
import FooterDesktop from "./desktop/FooterDesktop";
import Link from "next/link";

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
        <StyledLink>
          <Link href="/contactus">
            <a>Start A Project</a>
          </Link>
        </StyledLink>
        <div>
          <a href="mailto:info@modern-software.co.uk">
            info@modern-software.co.uk
          </a>
        </div>
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
            1 Lisnagrilly Manor
            <div style={{ paddingLeft: "20px" }}>Portadown</div>
            <div style={{ paddingLeft: "20px" }}>Craigavon</div>
            <div style={{ paddingLeft: "20px" }}>Co. Armagh</div>
            <div style={{ paddingLeft: "20px" }}>BT63 5ZX</div>
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
            02838334830
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
            320 Firecrest Court
            <div style={{ paddingLeft: "20px" }}>Centre Park</div>
            <div style={{ paddingLeft: "20px" }}>Warrington</div>
            <div style={{ paddingLeft: "20px" }}>Cheshire</div>
            <div style={{ paddingLeft: "20px" }}>WA1 1RG</div>
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
            07921568808
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
        {/*<Image*/}
        {/*  src="/images/facebook.png"*/}
        {/*  alt="Modern Software"*/}
        {/*  width={40}*/}
        {/*  height={40}*/}
        {/*/>*/}
        {/*<Image*/}
        {/*  src="/images/instagram.png"*/}
        {/*  alt="Modern Software"*/}
        {/*  width={40}*/}
        {/*  height={40}*/}
        {/*/>*/}
        {/*<Image*/}
        {/*  src="/images/twitter.png"*/}
        {/*  alt="Modern Software"*/}
        {/*  width={40}*/}
        {/*  height={40}*/}
        {/*/>*/}
        <a href="https://www.linkedin.com/company/modern-software">
          <Image
            src="/images/linkedin.png"
            alt="Modern Software"
            width={40}
            height={40}
          />
        </a>
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
