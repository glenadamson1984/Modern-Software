import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import styled from "styled-components";
import { colours, media } from "../../utils/style.utils";

const StyledContainer = styled.div`
  background-color: ${colours.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const StyledSubTitle = styled.div`
  padding: 2rem 0;
  font: normal normal medium 20px/26px Roboto;
`;

const StyledLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 2rem;
  font: normal normal normal 18px/24px Roboto;

  > div {
    margin: 2em;
  }

  > span {
    color: ${colours.red};
  }
`;

const StyledAddressContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 2rem;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${colours.grey};
`;

const StyledOfficeLocationContainer = styled.div`
  font: normal normal medium 20px/26px Roboto;
  padding-bottom: 1rem;
`;

const StyledAddress = styled.div`
  font: normal normal normal 16px/26px Roboto;
  color: ${colours.darkWhite};
`;

const StyledLogoTitle = styled.div`
  font-family: Roboto, sans-serif;
  color: ${colours.white};
  font-size: 16px;
`;

const StyledContainerDesktop = styled.div`
  position: relative;

  ${media.forDesktop} {
    margin: 4rem 8rem;
  }

  ${media.forDesktopWideScreen} {
    margin: 4rem 8rem;
  }

  ${media.forBigDesktopAndUp} {
    margin: 4rem 17rem;
  }
`;

const Footer = () => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  if (isDesktop) {
    return (
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", opacity: "0.3" }}>
          <Image
            src="/images/footer-bg.png"
            alt="Modern Software"
            width={1920}
            height={391}
            position="absolute"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "3rem 17rem 0 17rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Image
                src="/images/1-only.png"
                alt="Modern Software"
                width={95}
                height={82.5}
              />
              <StyledLogoTitle>Modern Software</StyledLogoTitle>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <StyledSubTitle>Contact Us</StyledSubTitle>
              <div>
                <div style={{ font: "normal normal normal 18px/24px Roboto" }}>
                  <span style={{ color: `${colours.red}` }}>
                    Start a Project
                  </span>
                </div>
                <div style={{ font: "normal normal normal 18px/24px Roboto" }}>
                  info@modern-software.co.uk
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
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
            <div style={{ display: "flex", flexDirection: "column" }}>
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
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "1rem",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "400px",
              }}
            />
            <div
              style={{
                font: "normal normal normal 16px/21px Roboto",
                color: "#BFBFBF",
              }}
            >
              Copyright @2022 Modern Software
            </div>
            <div
              style={{
                padding: "2rem 4rem",
                width: "400px",
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
          </div>
        </div>
      </div>
    );
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
