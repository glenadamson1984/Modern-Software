import React from "react";
import styled from "styled-components";
import useWindowSize from "../src/hooks/useWindowSize";

const StyledHeroBackgroundMobile = styled.div`
  background-image: url("/images/mobile-hero-ninja.png");
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 773px;
`;

const StyledHeroBackgroundDesktop = styled.div`
  background-image: url("/images/hero-img-full.png");
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
