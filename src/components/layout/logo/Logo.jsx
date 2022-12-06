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
        src="/images/Logo/cover2_1.png"
        alt="Modern Software"
        width={isDesktop ? 668 : 223}
        height={isDesktop ? 113 : 38}
      />
    </StyledLogo>
  );
};

export default Logo;
