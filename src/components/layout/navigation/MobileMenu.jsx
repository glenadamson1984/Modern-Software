import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colours } from "../../../utils/style.utils";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  StyledBackdrop,
  StyledContainer,
  StyledIconContainer,
  StyledCloseButton,
  StyledNavigationContainer,
  StyledNavigationLink,
} from "./mobile-menu.styles";
import { ConvertPathNameToURL, NavigationItemsMobile } from "./NavigationPaths";
import { useRouter } from "next/router";

const MobileMenu = ({ showMenu, onMenuClick }) => {
  const router = useRouter();

  const navigateToPath = (path) => {
    let url = "/";
    if (path === "Home") {
      url = "/";
    } else if (path === "AI Services") {
      url = "/ai";
    } else if (path === "TechStart") {
      url = "/techstart";
    } else {
      url = `/${ConvertPathNameToURL(path)}`;
    }
    router.push(url).then(onMenuClick(false));
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onMenuClick(false);
    }
  };

  return (
    <>
      <StyledBackdrop onClick={handleBackdropClick} />
      <StyledContainer>
        <StyledIconContainer>
          <StyledCloseButton onClick={() => onMenuClick(false)}>
            <FontAwesomeIcon size="lg" color={colours.white} icon={faXmark} />
          </StyledCloseButton>
        </StyledIconContainer>
        <StyledNavigationContainer>
          {NavigationItemsMobile.map((navigationItem, index) => (
            <StyledNavigationLink
              key={index}
              onClick={() => navigateToPath(navigationItem)}
            >
              {navigationItem}
            </StyledNavigationLink>
          ))}
        </StyledNavigationContainer>
      </StyledContainer>
    </>
  );
};

export default MobileMenu;
