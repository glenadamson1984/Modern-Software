import React from "react";
import styled from "styled-components";
import useWindowSize from "../src/hooks/useWindowSize";
import Image from "next/image";
import { colours, media } from "../src/utils/style.utils";
import CallToActionButton from "../src/components/buttons/action/CallToActionButton";

const StyledHeroBackgroundMobile = styled.div`
  position: relative;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 773px;
`;

const StyledHeroBackgroundDesktop = styled.div`
  position: relative;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 940px;
`;

const StyledHeroContainer = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 25rem;
  flex-direction: column;
`;

const StyledHeroContainerDesktop = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 15rem;
  width: 40%;
  flex-direction: column;

  ${media.forDesktop} {
    margin: 0 8rem;
  }

  ${media.forDesktopWideScreen} {
    margin: 0 8rem;
  }

  ${media.forBigDesktopAndUp} {
    margin: 0 17rem;
  }
`;

const StyledRedLineMobile = styled.div`
  border-top: 5px solid ${colours.red};
  width: 30%;
`;

const StyledRedLineDesktop = styled.div`
  border-top: 5px solid ${colours.red};
  width: 10%;
`;

const StyledHeroTitle = styled.div`
  text-align: center;
  font: normal normal bold 32px/42px Roboto;
  letter-spacing: 0px;
  color: ${colours.white};
  margin-top: 2rem;
`;

const StyledHeroDesktop = styled.div`
  text-align: left;
  font: normal normal bold 60px/79px Roboto;
  letter-spacing: 0px;
  opacity: 1;
`;

const StyledHeroTitleRed = styled.span`
  color: ${colours.red};
`;

const StyledHeroDescription = styled.div`
  text-align: center;
  font: normal normal normal 18px/30px Roboto;
  letter-spacing: 0px;
  color: #bfbfbf;
  opacity: 1;
  margin: 2rem 0;
`;

const StyledHeroDescriptionDesktop = styled.div`
  text-align: left;
  font: normal normal normal 18px/30px Roboto;
  letter-spacing: 0px;
  color: #bfbfbf;
  opacity: 1;
  margin: 2rem 0;
`;

const Home = () => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();
  return (
    <>
      {isDesktop ? (
        <>
          <StyledHeroBackgroundDesktop>
            <Image
              src="/images/hero-img-full.png"
              alt="Modern Software"
              width={375}
              height={773}
              layout="fill"
            />
            <StyledHeroContainerDesktop>
              <StyledRedLineDesktop />
              <StyledHeroDesktop>
                Building modern software for
                <StyledHeroTitleRed> Modern Companies</StyledHeroTitleRed>
              </StyledHeroDesktop>
              <StyledHeroDescriptionDesktop>
                We specialise in building software in an agile way. We provide
                solutions across the stack with an emphasis on quality frontend
                design.
              </StyledHeroDescriptionDesktop>
              <CallToActionButton>Discuss Your Project</CallToActionButton>
            </StyledHeroContainerDesktop>
          </StyledHeroBackgroundDesktop>
        </>
      ) : (
        <>
          <StyledHeroBackgroundMobile>
            <Image
              src="/images/mobile-hero-ninja.png"
              alt="Modern Software"
              width={375}
              height={773}
              layout="fill"
              position="absolute"
            />
            <StyledHeroContainer>
              <StyledRedLineMobile />
              <StyledHeroTitle>
                Building modern software for
                <StyledHeroTitleRed> Modern Companies</StyledHeroTitleRed>
              </StyledHeroTitle>
              <StyledHeroDescription>
                We specialise in building software in an agile way. We provide
                solutions across the stack with an emphasis on quality frontend
                design.
              </StyledHeroDescription>
              <CallToActionButton>Discuss Your Project</CallToActionButton>
            </StyledHeroContainer>
          </StyledHeroBackgroundMobile>
          <div style={{ position: "relative" }}>Our Services</div>
        </>
      )}
    </>
  );
};

export default Home;
