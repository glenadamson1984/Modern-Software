import React from "react";
import styled from "styled-components";
import useWindowSize from "../src/hooks/useWindowSize";
import Image from "next/image";
import { colours, media } from "../src/utils/style.utils";
import CallToActionButton from "../src/components/buttons/action/CallToActionButton";

const StyledHeroBackground = styled.div`
  position: relative;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${(props) => (props.isDesktop ? "756px" : "773px")};
`;

const StyledHeroContainer = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.isDesktop ? "flex-start" : "center")};
  top: ${(props) => (props.isDesktop ? "15rem" : "2rem")};
  width: ${(props) => (props.isDesktop ? "40%" : "100%")};
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

const StyledOurServicesContainer = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.isDesktop ? "flex-start" : "center")};
  flex-direction: column;
  background: white;
  padding-bottom: 2rem;
`;

const StyledOurServicesContainerDesktop = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  padding-bottom: 2rem;
`;

const StyledRedLine = styled.div`
  border-top: 5px solid ${colours.red};
  width: ${(props) => (props.isDesktop ? "10%" : "30%")};
`;

const StyledRedLineDesktop = styled.div`
  border-top: 5px solid ${colours.red};
  width: 30%;
  position: relative;
  left: 6rem;
`;

const StyledHeroTitle = styled.div`
  text-align: center;
  font: normal normal bold 32px/42px Roboto;
  letter-spacing: 0px;
  color: ${colours.white};
  margin-top: 2rem;
`;

const StyledOurServicesTitle = styled.div`
  text-align: center;
  font: normal normal bold 32px/42px Roboto;
  letter-spacing: 0px;
  color: black;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const StyledOurServicesTitleDesktop = styled.div`
  text-align: center;
  font: normal normal bold 48px/63px Roboto;
  letter-spacing: 0px;
  color: #232323;
  margin-top: 2rem;
  margin-bottom: 1rem;
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
  margin: 2rem 0.25rem;
`;

const StyledHeroDescriptionDesktop = styled.div`
  text-align: left;
  font: normal normal normal 18px/30px Roboto;
  letter-spacing: 0px;
  color: #bfbfbf;
  opacity: 1;
  margin: 2rem 0;
`;

const StyledOurServicesDescriptionDesktop = styled.div`
  text-align: center;
  font: normal normal normal 18px/30px Roboto;
  letter-spacing: 0px;
  color: #bfbfbf;
  opacity: 1;

  ${media.forDesktop} {
    margin: 0 18rem;
  }

  ${media.forDesktopWideScreen} {
    margin: 0 18rem;
  }

  ${media.forBigDesktopAndUp} {
    margin: 0 27rem;
  }
`;

const StyledServiceRow = styled.div`
  display: flex;
  justify-content: space-around;
  color: black;
  margin-bottom: 5rem;
`;

const StyledServiceRowDesktop = styled.div`
  display: flex;
  justify-content: space-around;
  color: black;
  margin: 5rem 10rem;
`;

const StyledServiceGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const StyledServiceGridTitle = styled.div`
  text-align: center;
  font: normal normal bold 20px/30px Roboto;
  letter-spacing: 0px;
  color: #232323;
  opacity: 1;
  margin-top: 0.5rem;
`;

const StyledNinjaContainerDesktop = styled.div`
  display: flex;
  position: absolute;
  height: 700px;
  width: 700px;
  right: 100px;
  justify-content: center;
  align-items: center;
  z-index: 0;
  margin-top: 2rem;
`;

const StyledNinjaContainer = styled.div`
  display: flex;
  position: relative;
  height: 350px;
  justify-content: center;
  align-items: center;
  z-index: 0;
  margin-top: 2rem;
`;

const Home = () => {
  const { checkIsDesktop, checkIsTablet } = useWindowSize();
  const isDesktop = checkIsDesktop();

  return (
    <>
      {isDesktop ? (
        <>
          <StyledHeroBackground isDesktop={true}>
            <Image
              src="/images/hero-img-half.png"
              alt="Modern Software"
              width={1920}
              height={756}
              layout="fill"
            />
            <StyledNinjaContainerDesktop>
              <Image
                src="/images/hero-img.png"
                alt="Modern Software"
                width={675}
                height={567}
                layout="fill"
                position="absolute"
                objectFit="contain"
              />
            </StyledNinjaContainerDesktop>
            <StyledHeroContainer isDesktop={true}>
              <StyledRedLine isDesktop={true} />
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
            </StyledHeroContainer>
          </StyledHeroBackground>
          <StyledOurServicesContainerDesktop isDesktop={true}>
            <StyledOurServicesTitleDesktop>
              Our
              <StyledHeroTitleRed> Services</StyledHeroTitleRed>
              <StyledRedLineDesktop isDesktop={true} />
            </StyledOurServicesTitleDesktop>
            <StyledOurServicesDescriptionDesktop>
              Our services focus on offering the best software engineering
              experience. We offer bespoke software solutions to fit your needs.
              We focus on the entire lifecycle from design, through
              implementation right through to production using the best
              methodologies which are proven in the software industry.
            </StyledOurServicesDescriptionDesktop>
            <StyledServiceRowDesktop>
              <StyledServiceGrid>
                <Image
                  src="/images/1ser.png"
                  alt="Modern Software"
                  width={100}
                  height={90}
                />
                <StyledServiceGridTitle>
                  Custom Software Development
                </StyledServiceGridTitle>
              </StyledServiceGrid>
              <StyledServiceGrid>
                <Image
                  src="/images/2ser.png"
                  alt="Modern Software"
                  width={100}
                  height={90}
                />
                <StyledServiceGridTitle>
                  Web Application Development
                </StyledServiceGridTitle>
              </StyledServiceGrid>
              <StyledServiceGrid>
                <Image
                  src="/images/3ser.png"
                  alt="Modern Software"
                  width={100}
                  height={90}
                />
                <StyledServiceGridTitle>
                  Mobile App Development
                </StyledServiceGridTitle>
              </StyledServiceGrid>
              <StyledServiceGrid>
                <Image
                  src="/images/4ser.png"
                  alt="Modern Software"
                  width={100}
                  height={90}
                />
                <StyledServiceGridTitle>UX & UI Design</StyledServiceGridTitle>
              </StyledServiceGrid>
              <StyledServiceGrid>
                <Image
                  src="/images/5ser.png"
                  alt="Modern Software"
                  width={100}
                  height={90}
                />
                <StyledServiceGridTitle>
                  Software Tuition
                </StyledServiceGridTitle>
              </StyledServiceGrid>
            </StyledServiceRowDesktop>
            <CallToActionButton>View All Services</CallToActionButton>
          </StyledOurServicesContainerDesktop>
        </>
      ) : (
        <>
          <StyledHeroBackground isDesktop={false}>
            <Image
              src="/images/hero-img-half.png"
              alt="Modern Software"
              width={375}
              height={773}
              layout="fill"
              position="absolute"
              style={{ zIndex: -1 }}
            />
            <StyledNinjaContainer>
              <Image
                src="/images/hero-img.png"
                alt="Modern Software"
                width={675}
                height={567}
                layout="fill"
                position="absolute"
                objectFit="contain"
              />
            </StyledNinjaContainer>
            <StyledHeroContainer isDesktop={false}>
              <StyledRedLine isDesktop={false} />
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
          </StyledHeroBackground>
          <StyledOurServicesContainer isDesktop={false}>
            <StyledOurServicesTitle>
              Our
              <StyledHeroTitleRed> Services</StyledHeroTitleRed>
            </StyledOurServicesTitle>
            <StyledRedLine isDesktop={false} />
            <StyledHeroDescription>
              Our services focus on offering the best software engineering
              experience. We offer bespoke software solutions to fit your needs.
              We focus on the entire lifecycle from design, through
              implementation right through to production using the best
              methodologies which are proven in the software industry.
            </StyledHeroDescription>
            <StyledServiceRow>
              <StyledServiceGrid>
                <Image
                  src="/images/1ser.png"
                  alt="Modern Software"
                  width={100}
                  height={90}
                />
                <StyledServiceGridTitle>
                  Custom Software Development
                </StyledServiceGridTitle>
              </StyledServiceGrid>
              <StyledServiceGrid>
                <Image
                  src="/images/2ser.png"
                  alt="Modern Software"
                  width={100}
                  height={90}
                />
                <StyledServiceGridTitle>
                  Web Application Development
                </StyledServiceGridTitle>
              </StyledServiceGrid>
            </StyledServiceRow>
            <StyledServiceRow>
              <StyledServiceGrid>
                <Image
                  src="/images/3ser.png"
                  alt="Modern Software"
                  width={100}
                  height={90}
                />
                <StyledServiceGridTitle>
                  Mobile App Development
                </StyledServiceGridTitle>
              </StyledServiceGrid>
              <StyledServiceGrid>
                <Image
                  src="/images/4ser.png"
                  alt="Modern Software"
                  width={100}
                  height={90}
                />
                <StyledServiceGridTitle>UX & UI Design</StyledServiceGridTitle>
              </StyledServiceGrid>
            </StyledServiceRow>
            <StyledServiceRow>
              <StyledServiceGrid>
                <Image
                  src="/images/5ser.png"
                  alt="Modern Software"
                  width={100}
                  height={90}
                />
                <StyledServiceGridTitle>
                  Software Tuition
                </StyledServiceGridTitle>
              </StyledServiceGrid>
            </StyledServiceRow>

            <CallToActionButton>View All Services</CallToActionButton>
          </StyledOurServicesContainer>
        </>
      )}
    </>
  );
};

export default Home;
