import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { colours, media } from "../../utils/style.utils";
import useWindowSize from "../../hooks/useWindowSize";

const StyledLogoTitle = styled.div`
  font-family: Roboto, sans-serif;
  color: ${colours.white};
  font-size: 10px;

  ${media.forDesktop} {
    font-size: 16px;
  }
`;

const Logo = () => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  return (
    <div>
      <Image
        src="/images/1-only.png"
        alt="Modern Software"
        width={isDesktop ? 95 : 65}
        height={isDesktop ? 82.5 : 44}
      />
      <StyledLogoTitle>Modern Software</StyledLogoTitle>
    </div>
  );
};

export default Logo;
