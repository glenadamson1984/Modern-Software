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
import { NavigationItemsMobile } from "./NavigationPaths";

const MobileMenu = ({ showMenu, onMenuClick }) => {
  return (
    <StyledContainer>
      <StyledIconContainer>
        <div onClick={() => onMenuClick(!showMenu)}>
          <FontAwesomeIcon size="2x" color={colours.black} icon={faXmark} />
        </div>
      </StyledIconContainer>
      <StyledNavigationContainer>
        {NavigationItemsMobile.map((navigationItem, index) => (
          <StyledNavigationLink key={index}>
            {navigationItem}
          </StyledNavigationLink>
        ))}
      </StyledNavigationContainer>
    </StyledContainer>
  );
};

export default MobileMenu;
