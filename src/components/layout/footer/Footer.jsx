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
  StyledFooterLinks,
} from "./footer.styles";
import { StyledLogoTitle } from "../logo/logo.styles";
import FooterDesktop from "./desktop/FooterDesktop";
import Link from "next/link";
import { NavigationItems, ConvertPathNameToURL } from "../navigation/NavigationPaths";
import { colours } from "../../../utils/style.utils";

const Footer = () => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  if (isDesktop) {
    return <FooterDesktop />;
  }

  return (
    <StyledContainer>
      <div
        style={{
          background: colours.darkGrey,
          borderRadius: "12px",
          padding: "0.75rem 1rem",
          display: "inline-block",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(255, 64, 139, 0.3), 0 0 20px rgba(255, 64, 139, 0.1)";
          const img = e.currentTarget.querySelector("img");
          if (img) {
            img.style.filter = "brightness(1.15) contrast(1.1)";
            img.style.transform = "scale(1.02)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)";
          const img = e.currentTarget.querySelector("img");
          if (img) {
            img.style.filter = "brightness(1.05) contrast(1.05)";
            img.style.transform = "scale(1)";
          }
        }}
      >
        <Image
          src="/images/Logo/logoonwhite2.png"
          alt="Modern Software Logo"
          width={355}
          height={112.5}
          style={{ 
            borderRadius: "8px",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            filter: "brightness(1.05) contrast(1.05)"
          }}
        />
      </div>
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
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", justifyContent: "center" }}>
              <Image
                src="/images/map-pin.png"
                alt="Modern Software"
                width={20}
                height={20}
                style={{ marginTop: "2px", flexShrink: 0 }}
              />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.6", textAlign: "left" }}>
                <div>43B Newry Street</div>
                <div>Banbridge</div>
                <div>Co. Down</div>
                <div>BT32 3EA</div>
              </div>
            </div>
            <div
              style={{
                font: "normal normal normal 16px/26px Inter",
                paddingTop: "1rem",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <Image
                src="/images/phone.png"
                alt="Modern Software"
                width={20}
                height={20}
              />
              <div>02838334830</div>
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
      <StyledFooterLinks>
        {NavigationItems.map((item, index) => (
          <Link
            key={index}
            href={
              item === "Home"
                ? "/"
                : `/${ConvertPathNameToURL(item)}`
            }
          >
            <a>{item}</a>
          </Link>
        ))}
        <Link href="/contactus">
          <a>Contact</a>
        </Link>
        <a 
          href="https://www.modern-investor.co.uk" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Modern Investor
        </a>
      </StyledFooterLinks>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          color: "#FFFFFF",
          opacity: 0.8,
          paddingTop: "1rem",
        }}
      >
        Copyright @2023 Modern Software
      </div>
    </StyledContainer>
  );
};

export default Footer;
