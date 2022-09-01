import Image from "next/image";
import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import { StyledLogoTitle } from "./logo.styles";
import { useRouter } from "next/router";

const Logo = () => {
  const { checkIsDesktop } = useWindowSize();
  const router = useRouter();
  const isDesktop = checkIsDesktop();

  return (
    <div style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
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
