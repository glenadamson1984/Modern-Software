import Image from "next/image";
import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import { useRouter } from "next/router";
import styled from "styled-components";

export const StyledLogo = styled.div`
  cursor: pointer;
`;

const Logo = () => {
  const { checkIsDesktop } = useWindowSize();
  const router = useRouter();
  const isDesktop = checkIsDesktop();

  return (
    <StyledLogo onClick={() => router.push("/")}>
      <Image
        src="/images/Logo/ModernSoftwareLogo.png"
        alt="Modern Software Logo"
        width={isDesktop ? 710 : 355}
        height={isDesktop ? 225 : 112.5}
      />
    </StyledLogo>
  );
};

export default Logo;
