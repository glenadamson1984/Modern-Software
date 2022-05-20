import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
`;

const StyledNav = styled.div`
  text-align: left;
  font: normal normal normal 20px/26px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: capitalize;
`;

const NavigationControl = () => {
  return (
    <StyledContainer>
      <StyledNav>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </StyledNav>
      <StyledNav>
        <Link href="/about">
          <a>About</a>
        </Link>
      </StyledNav>
      <StyledNav>
        <Link href="/contactus">
          <a>Contact us</a>
        </Link>
      </StyledNav>
    </StyledContainer>
  );
};

export default NavigationControl;
