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
        src="/images/Logo/ModernSoftwareLogo.png"
        alt="Modern Software Logo"
        width={355}
        height={112.5}
      />
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
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          {/* <StyledOfficeLocationContainer>
            NI Office
          </StyledOfficeLocationContainer> */}
          <div
            style={{
              font: "normal normal normal 16px/26px Inter",
              color: "#FFFFFF",
            }}
          >
            <Image
              src="/images/map-pin.png"
              alt="Modern Software"
              width={20}
              height={20}
            />
            43B Newry Street
            <div style={{ paddingLeft: "20px" }}>Banbridge</div>
            <div style={{ paddingLeft: "20px" }}>Co. Down</div>
            <div style={{ paddingLeft: "20px" }}>BT32 3EA</div>
            <div
              style={{
                font: "normal normal normal 16px/26px Inter",
                paddingTop: "1rem",
                color: "#FFFFFF",
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
            width={50}
            height={44}
          />
        </a>
      </div>
      {/*commenting these links out for now*/}
      {/*<div>contact privacy notice cookie policy</div>*/}
      <div
        style={{
          font: "normal normal normal 16px/21px Inter",
          color: "#FFFFFF",
        }}
      >
        Copyright @2023 Modern Software
      </div>
    </StyledContainer>
  );
};

export default Footer;
