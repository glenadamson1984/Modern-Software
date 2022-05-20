import React from "react";
import styled from "styled-components";
import useWindowSize from "../src/hooks/useWindowSize";
import mobileImage from "../public/images/mobile-hero-ninja.png";
import desktopImage from "../public/images/hero-img-full.png";

const StyledHeroBackgroundMobile = styled.div`
  background-image: url("${mobileImage.src}");
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 773px;
`;

const StyledHeroBackgroundDesktop = styled.div`
  background-image: url("${desktopImage.src}");
  position: absolute;
  top: 125px;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 756px;
`;

const Home = () => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();
  return (
    <>
      {isDesktop ? (
        <StyledHeroBackgroundDesktop />
      ) : (
        <StyledHeroBackgroundMobile />
      )}
    </>
  );
};

export default Home;
