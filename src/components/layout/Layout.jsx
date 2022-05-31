import Logo from "./logo/Logo";
import NavigationControl from "./navigation/NavigationControl";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { colours } from "../../utils/style.utils";
import useWindowSize from "../../hooks/useWindowSize";
import CallToActionButton from "../buttons/action/CallToActionButton";
import Footer from "./footer/Footer";
import {
  StyledBody,
  StyledContainer,
  StyledNavigationContainer,
} from "./layout.styles";

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
