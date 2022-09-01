import React from "react";
import useWindowSize from "../src/hooks/useWindowSize";
import Image from "next/image";
import CallToActionButton from "../src/components/buttons/action/CallToActionButton";
import { useRouter } from "next/router";
import {
  StyledHeroBackground,
  StyledHeroContainer,
  StyledHeroDescription,
  StyledHeroDescriptionDesktop,
  StyledHeroDesktop,
  StyledHeroTitle,
  StyledHeroTitleRed,
  StyledNinjaContainer,
  StyledNinjaContainerDesktop,
  StyledOurServicesContainer,
  StyledOurServicesContainerDesktop,
  StyledOurServicesDescriptionDesktop,
  StyledOurServicesTitle,
  StyledOurServicesTitleDesktop,
  StyledRedLine,
  StyledRedLineDesktop,
  StyledServiceGrid,
  StyledServiceGridTitle,
  StyledServiceRow,
  StyledServiceRowDesktop,
} from "../page-styles/index.styles";

const Home = () => {
  const { checkIsDesktop } = useWindowSize();
  const router = useRouter();
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
              <CallToActionButton
                variant="secondary"
                onClick={() => router.push("/contactus")}
              >
                Discuss Your Project
              </CallToActionButton>
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
              <CallToActionButton variant="secondary">
                Discuss Your Project
              </CallToActionButton>
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
