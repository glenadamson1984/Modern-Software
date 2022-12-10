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
            <StyledNinjaContainerDesktop>
              <Image
                src="/images/Logo/ModernSoftware.png"
                alt="Modern Software"
                width={600}
                height={450}
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
                Transform your ideas into reality. At Modern Software, we
                specialize in creating unique, tailored software to help your
                business stand out from the competition. With our expert team
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                and cutting-edge technology, we'll bring your vision to life.
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Contact us today to get started!"
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
                  src="/images/11ser.jpg"
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
                  src="/images/2ser.jpg"
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
                  src="/images/3ser.jpg"
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
                  src="/images/4ser.jpg"
                  alt="Modern Software"
                  width={100}
                  height={90}
                />
                <StyledServiceGridTitle>UX & UI Design</StyledServiceGridTitle>
              </StyledServiceGrid>
              <StyledServiceGrid>
                <Image
                  src="/images/5ser.jpg"
                  alt="Modern Software"
                  width={100}
                  height={90}
                />
                <StyledServiceGridTitle>
                  Software Tuition
                </StyledServiceGridTitle>
              </StyledServiceGrid>
            </StyledServiceRowDesktop>
            <CallToActionButton onClick={() => router.push("/services")}>
              View All Services
            </CallToActionButton>
          </StyledOurServicesContainerDesktop>
        </>
      ) : (
        <>
          <StyledHeroBackground isDesktop={false}>
            <StyledNinjaContainer>
              <Image
                src="/images/Logo/ModernSoftware.png"
                alt="Modern Software"
                width={600}
                height={450}
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
                Modern Software has a vast background of technology expertise
                and provides high-quality and cost-efficient Software
                Development Services. It allows startups, mid-sized, and
                enterprise-grade businesses to achieve their goals with the help
                of a fantastic team.
              </StyledHeroDescription>
              <CallToActionButton
                variant="secondary"
                onClick={() => router.push("/contactus")}
              >
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
                  src="/images/11ser.jpg"
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
                  src="/images/2ser.jpg"
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
                  src="/images/3ser.jpg"
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
                  src="/images/4ser.jpg"
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
                  src="/images/5ser.jpg"
                  alt="Modern Software"
                  width={100}
                  height={90}
                />
                <StyledServiceGridTitle>
                  Software Tuition
                </StyledServiceGridTitle>
              </StyledServiceGrid>
            </StyledServiceRow>

            <CallToActionButton onClick={() => router.push("/services")}>
              View All Services
            </CallToActionButton>
          </StyledOurServicesContainer>
        </>
      )}
    </>
  );
};

export default Home;
