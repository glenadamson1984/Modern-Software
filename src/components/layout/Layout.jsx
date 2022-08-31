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
import MobileMenu from "./navigation/MobileMenu";

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
        <MobileMenu
          showMenu={showMenu}
          onMenuClick={(showMenu) => setShowMenu(showMenu)}
        />
      )}
    </>
  );
};

export default Layout;
