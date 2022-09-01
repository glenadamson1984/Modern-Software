import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colours } from "../../../utils/style.utils";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  StyledContainer,
  StyledIconContainer,
  StyledNavigationContainer,
  StyledNavigationLink,
} from "./mobile-menu.styles";
import { ConvertPathNameToURL, NavigationItemsMobile } from "./NavigationPaths";
import { useRouter } from "next/router";

const MobileMenu = ({ showMenu, onMenuClick }) => {
  const router = useRouter();

  const navigateToPath = (path) => {
    router
      .push(path === "Home" ? "/" : ConvertPathNameToURL(path))
      .then(onMenuClick(!showMenu));
  };

  return (
    <StyledContainer>
      <StyledIconContainer>
        <div onClick={() => onMenuClick(!showMenu)}>
          <FontAwesomeIcon size="2x" color={colours.black} icon={faXmark} />
        </div>
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
  );
};

export default MobileMenu;
