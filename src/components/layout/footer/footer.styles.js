import styled from "styled-components";
import { colours, media } from "../../../utils/style.utils";
import Link from "next/link";

export const StyledContainer = styled.div`
  background-color: ${colours.darkGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem 2rem;
`;

export const StyledSubTitle = styled.div`
  padding: 2rem 0;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${colours.white};
`;

export const StyledLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 2rem;
  font: normal normal normal 18px/24px Inter;

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
  font: normal normal medium 20px/26px Inter;
  padding-bottom: 1rem;
`;

export const StyledAddress = styled.div`
  font: normal normal normal 16px/26px Inter;
  color: ${colours.darkWhite};
`;

export const StyledLogoTitle = styled.div`
  font-family: Inter, sans-serif;
  color: ${colours.white};
  font-size: 16px;
`;

export const StyledContainerDesktop = styled.div`
  position: relative;
  background-color: ${colours.darkGrey};
  padding: 4rem 0 2rem;
`;

export const StyledBackgroundImageDesktop = styled.div`
  position: absolute;
  opacity: 0.3;
`;

export const StyledFooterContentContainerDesktop = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colours.green};
  ${media.forDesktop} {
    padding: 1rem 4rem 0 4rem;
  }

  ${media.forDesktopWideScreen} {
    padding: 1rem 6rem 0 6rem;
  }

  ${media.forBigDesktopAndUp} {
    padding: 1rem 8rem 0 8rem;
  }
`;

export const StyledFooterContentRowDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledFooterContentSocialsRowDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 1rem;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const StyledNormalFontContainerDesktop = styled.div`
  position: relative;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  line-height: 24px;
  color: ${colours.white};
  opacity: 0.9;
`;

export const StyledContactUsContainerDesktop = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledAddressContainerDesktop = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: ${colours.white};
  opacity: 0.9;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const StyledSocialIconsContainerDesktop = styled.div`
  padding: 2rem 4rem;
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${colours.pink};
  z-index: 1;
  transition: opacity 0.2s ease;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const StyledFooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 0 1rem;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: ${colours.white};
  opacity: 0.9;

  a {
    color: inherit;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
      color: ${colours.pink};
    }
  }
`;
