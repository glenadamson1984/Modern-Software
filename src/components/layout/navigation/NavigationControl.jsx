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
              : navigationItem === "AI Services"
              ? pathname === "/ai"
              : navigationItem === "TechStart"
              ? pathname === "/techstart"
              : pathname === `/${ConvertPathNameToURL(navigationItem)}`
          }
        >
          <Link
            href={
              navigationItem === "Home"
                ? "/"
                : navigationItem === "AI Services"
                ? "/ai"
                : navigationItem === "TechStart"
                ? "/techstart"
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
