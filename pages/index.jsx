import React from "react";
import styled from "styled-components";
import useWindowSize from "../src/hooks/useWindowSize";
import Image from "next/image";

const StyledHeroBackgroundMobile = styled.div`
  position: absolute;
  top: 85px;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 773px;
`;

const StyledHeroBackgroundDesktop = styled.div`
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
        <StyledHeroBackgroundDesktop>
          <Image
            src="/images/hero-img-full.png"
            alt="Modern Software"
            width={375}
            height={773}
            layout="fill"
          />
        </StyledHeroBackgroundDesktop>
      ) : (
        <StyledHeroBackgroundMobile>
          <Image
            src="/images/mobile-hero-ninja.png"
            alt="Modern Software"
            width={375}
            height={773}
            layout="fill"
          />
        </StyledHeroBackgroundMobile>
      )}
    </>
  );
};

export default Home;
