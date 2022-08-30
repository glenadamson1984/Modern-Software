import Logo from "./logo/Logo";
import NavigationControl from "./navigation/NavigationControl";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
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
  const [showMenu, setShowMenu] = useState(false);

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
              <CallToActionButton variant="secondary">
                Get in Touch
              </CallToActionButton>
            </StyledNavigationContainer>
          ) : (
            <div onClick={() => setShowMenu(!showMenu)}>
              <FontAwesomeIcon size="2x" color={colours.red} icon={faBars} />
            </div>
          )}
        </StyledContainer>
        {children}
        <Footer />
      </StyledBody>
      {showMenu && (
        <div
          style={{
            position: "fixed",
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            height: "100vh",
            width: "100vw",
            alignItems: "center",
            zIndex: "1",
            background: "white",
          }}
        >
          <div style={{ position: "fixed", right: "10px", top: "10px" }}>
            <div onClick={() => setShowMenu(!showMenu)}>
              <FontAwesomeIcon size="2x" color={colours.black} icon={faXmark} />
            </div>
          </div>
          <div style={{ position: "fixed", left: "10px", top: "60px" }}>
            <div
              style={{
                color: "black",
                font: "normal normal bold 32px/42px Roboto",
              }}
            >
              Home
            </div>
            <div
              style={{
                color: "black",
                font: "normal normal bold 32px/42px Roboto",
                width: "100vw",
              }}
            >
              Services
            </div>
            <div
              style={{
                color: "black",
                font: "normal normal bold 32px/42px Roboto",
                width: "100vw",
              }}
            >
              About
            </div>
            <div
              style={{
                color: "black",
                font: "normal normal bold 32px/42px Roboto",
                width: "100vw",
              }}
            >
              Portfolio
            </div>
            <div
              style={{
                color: "black",
                font: "normal normal bold 32px/42px Roboto",
                width: "100vw",
              }}
            >
              Tuition
            </div>
            <div
              style={{
                color: "black",
                font: "normal normal bold 32px/42px Roboto",
                width: "100vw",
              }}
            >
              Contact Us
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
