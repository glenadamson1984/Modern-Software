import React from "react";
import {
  StyledAddressContainerDesktop,
  StyledBackgroundImageDesktop,
  StyledContactUsContainerDesktop,
  StyledContainerDesktop,
  StyledFooterContentContainerDesktop,
  StyledFooterContentRowDesktop,
  StyledFooterContentSocialsRowDesktop,
  StyledNormalFontContainerDesktop,
  StyledOfficeLocationContainer,
  StyledSocialIconsContainerDesktop,
  StyledSubTitle,
} from "../footer.styles";
import Image from "next/image";
import { StyledLogoTitle } from "../../logo/logo.styles";
import { colours } from "../../../../utils/style.utils";
import useWindowSize from "../../../../hooks/useWindowSize";

const FooterDesktop = () => {
  const { checkIsDesktop, checkIsDesktopWideScreen } = useWindowSize();
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
          <div>
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
                <span style={{ color: `${colours.red}` }}>Start a Project</span>
              </StyledNormalFontContainerDesktop>
              <StyledNormalFontContainerDesktop>
                info@modern-software.co.uk
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
              home address
              <div style={{ paddingLeft: "20px" }}>portadown, bt66666</div>
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
              02938735647
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
              home address
              <div style={{ paddingLeft: "20px" }}>portadown, bt66666</div>
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
              02938735647
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
            <Image
              src="/images/facebook.png"
              alt="Modern Software"
              width={isDesktop && !isDesktopWideScreen ? 20 : 40}
              height={isDesktop && !isDesktopWideScreen ? 20 : 40}
            />
            <Image
              src="/images/instagram.png"
              alt="Modern Software"
              width={isDesktop && !isDesktopWideScreen ? 20 : 40}
              height={isDesktop && !isDesktopWideScreen ? 20 : 40}
            />
            <Image
              src="/images/twitter.png"
              alt="Modern Software"
              width={isDesktop && !isDesktopWideScreen ? 20 : 40}
              height={isDesktop && !isDesktopWideScreen ? 20 : 40}
            />
            <Image
              src="/images/linkedin.png"
              alt="Modern Software"
              width={isDesktop && !isDesktopWideScreen ? 20 : 40}
              height={isDesktop && !isDesktopWideScreen ? 20 : 40}
            />
          </StyledSocialIconsContainerDesktop>
        </StyledFooterContentSocialsRowDesktop>
      </StyledFooterContentContainerDesktop>
    </StyledContainerDesktop>
  );
};

export default FooterDesktop;
