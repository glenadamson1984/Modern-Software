import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { media } from "../utils/style.utils";
import useWindowSize from "../hooks/useWindowSize";

const StyledContainer = styled.div`
  margin-top: 0.5rem;
  margin-left: 1rem;
`;

const StyledLogoTitle = styled.div`
  font-family: Roboto, sans-serif;
  color: #fff;
  font-size: 10px;

  ${media.forDesktop} {
    font-size: 16px;
  }
`;

const Logo = () => {
  const { checkIsDesktop } = useWindowSize();

  const isDesktop = checkIsDesktop();

  return (
    <StyledContainer>
      <Image
        src="/images/1-only.png"
        alt="Modern Software"
        width={isDesktop ? 95 : 65}
        height={isDesktop ? 82.5 : 44}
      />
      <StyledLogoTitle>Modern Software</StyledLogoTitle>
    </StyledContainer>
  );
};

export default Logo;
