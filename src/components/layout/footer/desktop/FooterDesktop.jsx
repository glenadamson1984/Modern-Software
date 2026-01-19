import React from "react";
import {
  StyledAddressContainerDesktop,
  StyledBackgroundImageDesktop,
  StyledContactUsContainerDesktop,
  StyledContainerDesktop,
  StyledFooterContentContainerDesktop,
  StyledFooterContentRowDesktop,
  StyledFooterContentSocialsRowDesktop,
  StyledLink,
  StyledNormalFontContainerDesktop,
  StyledOfficeLocationContainer,
  StyledSocialIconsContainerDesktop,
  StyledSubTitle,
  StyledFooterLinks,
} from "../footer.styles";
import Image from "next/image";
import { StyledLogoTitle } from "../../logo/logo.styles";
import { colours } from "../../../../utils/style.utils";
import useWindowSize from "../../../../hooks/useWindowSize";
import { useRouter } from "next/router";
import Link from "next/link";
import { NavigationItems, ConvertPathNameToURL } from "../../navigation/NavigationPaths";

const FooterDesktop = () => {
  const { checkIsDesktop, checkIsDesktopWideScreen } = useWindowSize();
  const router = useRouter();
  const isDesktop = checkIsDesktop();
  const isDesktopWideScreen = checkIsDesktopWideScreen();

  return (
    <StyledContainerDesktop>
      {/*<StyledBackgroundImageDesktop>*/}
      {/*  <Image*/}
      {/*    src="/images/footer-bg.png"*/}
      {/*    alt="Modern Software"*/}
      {/*    width={1920}*/}
      {/*    height={391}*/}
      {/*    position="absolute"*/}
      {/*  />*/}
      {/*</StyledBackgroundImageDesktop>*/}
      <StyledFooterContentContainerDesktop>
        <StyledFooterContentRowDesktop>
          <div 
            style={{ 
              cursor: "pointer",
              background: colours.darkGrey,
              borderRadius: "12px",
              padding: "0.75rem 1rem",
              display: "inline-block",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              overflow: "hidden",
              alignSelf: "flex-start"
            }} 
            onClick={() => router.push("/")}
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
              alt="Modern Software"
              width={355}
              height={112.5}
              style={{ 
                borderRadius: "8px",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                filter: "brightness(1.05) contrast(1.05)"
              }}
            />
          </div>
          <StyledContactUsContainerDesktop>
            <StyledSubTitle>Contact Us</StyledSubTitle>
            <div>
              <StyledNormalFontContainerDesktop>
                <StyledLink>
                  <Link href="/contactus">
                    <a>Start A Project</a>
                  </Link>
                </StyledLink>
              </StyledNormalFontContainerDesktop>
              <StyledNormalFontContainerDesktop>
                <a href="mailto:info@modern-software.co.uk">
                  info@modern-software.co.uk
                </a>
              </StyledNormalFontContainerDesktop>
            </div>
          </StyledContactUsContainerDesktop>
          <StyledContactUsContainerDesktop>
            <StyledOfficeLocationContainer>
              Northern Ireland
            </StyledOfficeLocationContainer>
            <StyledAddressContainerDesktop>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                <Image
                  src="/images/map-pin.png"
                  alt="Modern Software"
                  width={20}
                  height={20}
                  style={{ marginTop: "2px", flexShrink: 0 }}
                />
                <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.6" }}>
                  <div>43B Newry Street</div>
                  <div>Banbridge</div>
                  <div>Co. Down</div>
                  <div>BT32 3EA</div>
                </div>
              </div>
            </StyledAddressContainerDesktop>
            <StyledAddressContainerDesktop
              style={{
                paddingTop: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Image
                  src="/images/phone.png"
                  alt="Modern Software"
                  width={20}
                  height={20}
                />
                <div>02838334830</div>
              </div>
            </StyledAddressContainerDesktop>
          </StyledContactUsContainerDesktop>
          {/*<div style={{ display: "flex", flexDirection: "column" }}>*/}
          {/*  <StyledOfficeLocationContainer>*/}
          {/*    England*/}
          {/*  </StyledOfficeLocationContainer>*/}
          {/*  <StyledAddressContainerDesktop>*/}
          {/*    <Image*/}
          {/*      src="/images/map-pin.png"*/}
          {/*      alt="Modern Software"*/}
          {/*      width={20}*/}
          {/*      height={20}*/}
          {/*    />*/}
          {/*    320 Firecrest Court*/}
          {/*    <div style={{ paddingLeft: "20px" }}>Centre Park</div>*/}
          {/*    <div style={{ paddingLeft: "20px" }}>Warrington</div>*/}
          {/*    <div style={{ paddingLeft: "20px" }}>Cheshire</div>*/}
          {/*    <div style={{ paddingLeft: "20px" }}>WA1 1RG</div>*/}
          {/*  </StyledAddressContainerDesktop>*/}
          {/*  <StyledAddressContainerDesktop*/}
          {/*    style={{*/}
          {/*      paddingTop: "1rem",*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <Image*/}
          {/*      src="/images/phone.png"*/}
          {/*      alt="Modern Software"*/}
          {/*      width={20}*/}
          {/*      height={20}*/}
          {/*    />*/}
          {/*    07921568808*/}
          {/*  </StyledAddressContainerDesktop>*/}
          {/*</div>*/}
        </StyledFooterContentRowDesktop>
        <StyledFooterContentSocialsRowDesktop>
          {isDesktopWideScreen && (
            <div
              style={{
                width: "400px",
              }}
            />
          )}
          <StyledAddressContainerDesktop>
            Copyright @2023 Modern Software
          </StyledAddressContainerDesktop>
          <StyledSocialIconsContainerDesktop>
            {/*<Image*/}
            {/*  src="/images/facebook.png"*/}
            {/*  alt="Modern Software"*/}
            {/*  width={isDesktop && !isDesktopWideScreen ? 20 : 40}*/}
            {/*  height={isDesktop && !isDesktopWideScreen ? 20 : 40}*/}
            {/*/>*/}
            {/*<Image*/}
            {/*  src="/images/instagram.png"*/}
            {/*  alt="Modern Software"*/}
            {/*  width={isDesktop && !isDesktopWideScreen ? 20 : 40}*/}
            {/*  height={isDesktop && !isDesktopWideScreen ? 20 : 40}*/}
            {/*/>*/}
            {/*<Image*/}
            {/*  src="/images/twitter.png"*/}
            {/*  alt="Modern Software"*/}
            {/*  width={isDesktop && !isDesktopWideScreen ? 20 : 40}*/}
            {/*  height={isDesktop && !isDesktopWideScreen ? 20 : 40}*/}
            {/*/>*/}
            <a href="https://www.linkedin.com/company/modern-software">
              <Image
                src="/images/linkedin.png"
                alt="Modern Software"
                width={50}
                height={44}
              />
            </a>
          </StyledSocialIconsContainerDesktop>
        </StyledFooterContentSocialsRowDesktop>
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
        </StyledFooterLinks>
      </StyledFooterContentContainerDesktop>
    </StyledContainerDesktop>
  );
};

export default FooterDesktop;
