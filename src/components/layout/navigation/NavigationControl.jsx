import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { colours } from "../../../utils/style.utils";
import { useRouter } from "next/router";
import { StyledContainer, StyledNav } from "./navigation-control.styles";

const NavigationControl = () => {
  const { pathname } = useRouter();

  return (
    <StyledContainer>
      <StyledNav active={pathname === "/"}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </StyledNav>
      <StyledNav active={pathname === "/services"}>
        <Link href="/services">
          <a>Services</a>
        </Link>
      </StyledNav>
      <StyledNav active={pathname === "/about"}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </StyledNav>
      <StyledNav active={pathname === "/portfolio]"}>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </StyledNav>
      <StyledNav active={pathname === "/tuition"}>
        <Link href="/tuition">
          <a>Tuition</a>
        </Link>
      </StyledNav>
      <StyledNav>
        <Link href="/contactus">
          <a>Contact Us</a>
        </Link>
      </StyledNav>
    </StyledContainer>
  );
};

export default NavigationControl;
