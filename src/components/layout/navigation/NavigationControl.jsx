import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { colours } from "../../../utils/style.utils";
import { useRouter } from "next/router";
import { StyledContainer, StyledNav } from "./navigation-control.styles";
import { ConvertPathNameToURL, NavigationItems } from "./NavigationPaths";

const NavigationControl = () => {
  const { pathname } = useRouter();

  return (
    <StyledContainer>
      {NavigationItems.map((navigationItem, index) => (
        <StyledNav
          key={index}
          active={
            navigationItem === "Home"
              ? pathname === "/"
              : pathname === `/${ConvertPathNameToURL(navigationItem)}`
          }
        >
          <Link
            href={
              navigationItem === "Home"
                ? "/"
                : `/${ConvertPathNameToURL(navigationItem)}`
            }
          >
            <a>{navigationItem}</a>
          </Link>
        </StyledNav>
      ))}
    </StyledContainer>
  );
};

export default NavigationControl;
