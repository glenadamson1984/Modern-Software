import styled from "styled-components";
import { colours, media } from "../../../utils/style.utils";
import Link from "next/link";

export const StyledContainer = styled.div`
  background-color: ${colours.green};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

export const StyledSubTitle = styled.div`
  padding: 2rem 0;
  font: normal normal medium 20px/26px Roboto;
`;

export const StyledLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 2rem;
  font: normal normal normal 18px/24px Roboto;

  > div {
    margin: 2em;
  }

  > span {
    color: ${colours.pink};
  }
`;

export const StyledAddressContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 2rem;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${colours.grey};
`;

export const StyledOfficeLocationContainer = styled.div`
  font: normal normal medium 20px/26px Roboto;
  padding-bottom: 1rem;
`;

export const StyledAddress = styled.div`
  font: normal normal normal 16px/26px Roboto;
  color: ${colours.darkWhite};
`;

export const StyledLogoTitle = styled.div`
  font-family: Roboto, sans-serif;
  color: ${colours.white};
  font-size: 16px;
`;

export const StyledContainerDesktop = styled.div`
  position: relative;
`;

export const StyledBackgroundImageDesktop = styled.div`
  position: absolute;
  opacity: 0.3;
`;

export const StyledFooterContentContainerDesktop = styled.div`
  display: flex;
  flex-direction: column;

  ${media.forDesktop} {
    padding: 1rem 8rem 0 8rem;
  }

  ${media.forDesktopWideScreen} {
    padding: 3rem 8rem 0 8rem;
  }

  ${media.forBigDesktopAndUp} {
    padding: 3rem 17rem 0 17rem;
  }
`;

export const StyledFooterContentRowDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledFooterContentSocialsRowDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1rem;
  align-items: center;
`;

export const StyledNormalFontContainerDesktop = styled.div`
  position: relative;
  font: normal normal normal 18px/24px Roboto;
`;

export const StyledContactUsContainerDesktop = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledAddressContainerDesktop = styled.div`
  font: normal normal normal 16px/26px Roboto;
  color: ${colours.white};
`;

export const StyledSocialIconsContainerDesktop = styled.div`
  padding: 2rem 4rem;
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled.div`
  font: normal normal normal 16px/26px Roboto;
  color: ${colours.pink};
  z-index: 1;
`;
