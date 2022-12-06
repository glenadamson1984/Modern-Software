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
        src="/images/Logo/cover2_1.png"
        alt="Modern Software"
        width={isDesktop ? 668 : 223}
        height={isDesktop ? 113 : 38}
      />
    </div>
  );
};

export default Logo;
