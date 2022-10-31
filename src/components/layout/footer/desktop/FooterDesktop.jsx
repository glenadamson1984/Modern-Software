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
} from "../footer.styles";
import Image from "next/image";
import { StyledLogoTitle } from "../../logo/logo.styles";
import { colours } from "../../../../utils/style.utils";
import useWindowSize from "../../../../hooks/useWindowSize";
import { useRouter } from "next/router";
import Link from "next/link";

const FooterDesktop = () => {
  const { checkIsDesktop, checkIsDesktopWideScreen } = useWindowSize();
  const router = useRouter();
  const isDesktop = checkIsDesktop();
  const isDesktopWideScreen = checkIsDesktopWideScreen();

  return (
    <StyledContainerDesktop>
      <StyledBackgroundImageDesktop>
        <Image
          src="/images/footer-bg.png"
          alt="Modern Software"
          width={1920}
          height={391}
          position="absolute"
        />
      </StyledBackgroundImageDesktop>
      <StyledFooterContentContainerDesktop>
        <StyledFooterContentRowDesktop>
          <div style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
            <Image
              src="/images/1-only.png"
              alt="Modern Software"
              width={95}
              height={82.5}
            />
            <StyledLogoTitle>Modern Software</StyledLogoTitle>
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
              NI Office
            </StyledOfficeLocationContainer>
            <StyledAddressContainerDesktop>
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
            </StyledAddressContainerDesktop>
            <StyledAddressContainerDesktop
              style={{
                paddingTop: "1rem",
              }}
            >
              <Image
                src="/images/phone.png"
                alt="Modern Software"
                width={20}
                height={20}
              />
              02838334830
            </StyledAddressContainerDesktop>
          </StyledContactUsContainerDesktop>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <StyledOfficeLocationContainer>
              NI Office
            </StyledOfficeLocationContainer>
            <StyledAddressContainerDesktop>
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
            </StyledAddressContainerDesktop>
            <StyledAddressContainerDesktop
              style={{
                paddingTop: "1rem",
              }}
            >
              <Image
                src="/images/phone.png"
                alt="Modern Software"
                width={20}
                height={20}
              />
              07921568808
            </StyledAddressContainerDesktop>
          </div>
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
            Copyright @2022 Modern Software
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
                width={isDesktop && !isDesktopWideScreen ? 20 : 40}
                height={isDesktop && !isDesktopWideScreen ? 20 : 40}
              />
            </a>
          </StyledSocialIconsContainerDesktop>
        </StyledFooterContentSocialsRowDesktop>
      </StyledFooterContentContainerDesktop>
    </StyledContainerDesktop>
  );
};

export default FooterDesktop;
