import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { colours } from "../../utils/style.utils";
import { useRouter } from "next/router";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledNav = styled.div`
  text-align: left;
  font: normal normal normal 20px/26px Roboto;
  letter-spacing: 0px;
  color: ${(props) => (props.active ? colours.red : colours.white)};
  text-transform: capitalize;
  margin: 0 1rem;
  border-top: ${(props) => (props.active ? "2px solid" : "none")};
  border-bottom: ${(props) => (props.active ? "2px solid" : "none")};
  padding: 0.25rem;
  border-color: ${(props) => (props.active ? colours.red : colours.white)};

  &:hover {
    border-top: 2px solid;
    border-bottom: 2px solid;
  }
`;

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
