import Logo from "./Logo";
import NavigationControl from "./NavigationControl";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { colours, media } from "../../utils/style.utils";
import useWindowSize from "../../hooks/useWindowSize";
import CallToActionButton from "../buttons/action/CallToActionButton";
import Image from "next/image";
import Footer from "./Footer";

const StyledBody = styled.body`
  display: flex;
  flex-direction: column;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0.5rem 1rem;

  ${media.forDesktop} {
    margin: 1rem 8rem;
  }

  ${media.forDesktopWideScreen} {
    margin: 1rem 8rem;
  }

  ${media.forBigDesktopAndUp} {
    margin: 1rem 17rem;
  }
`;

const StyledNavigationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Layout = ({ children }) => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  return (
    <>
      <head>
        <title>Modern Software</title>
        <meta name="description" content="Modern Software" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <StyledBody>
        <StyledContainer>
          <Logo />
          {isDesktop ? (
            <StyledNavigationContainer>
              <NavigationControl />
              <CallToActionButton>Get in Touch</CallToActionButton>
            </StyledNavigationContainer>
          ) : (
            <FontAwesomeIcon size="2x" color={colours.red} icon={faBars} />
          )}
        </StyledContainer>
        {children}
        <Footer />
      </StyledBody>
    </>
  );
};

export default Layout;
