import React from "react";
import useWindowSize from "../src/hooks/useWindowSize";
import CallToActionButton from "../src/components/buttons/action/CallToActionButton";
import styled from "styled-components";
import { colours, media } from "../src/utils/style.utils";
import SEO from "../src/components/SEO";
import PartnersSection from "../src/components/partners/PartnersSection";

const StyledTechStartHero = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  position: relative;
  width: 100%;
  min-height: ${(props) => (props.isDesktop ? "60vh" : "50vh")};
  background: ${colours.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.isDesktop ? "6rem 4rem" : "4rem 2rem")};
  text-align: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(35, 35, 35, 0.75) 0%,
      rgba(38, 38, 38, 0.7) 100%
    );
    z-index: 1;
  }
`;

const StyledTechStartHeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledTechStartHeroTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "72px" : "48px")};
  line-height: 1.1;
  font-weight: 700;
  color: ${colours.white};
  margin: 0 0 1.5rem 0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`;

const StyledTechStartHeroSubtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "24px" : "18px")};
  line-height: 1.6;
  color: ${colours.white};
  opacity: 0.95;
  margin: 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledTechStartSection = styled.section`
  padding: ${(props) => (props.isDesktop ? "6rem 4rem" : "4rem 2rem")};
  background: ${colours.white};
`;

const StyledTechStartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledSectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "48px" : "36px")};
  font-weight: 700;
  color: ${colours.darkGrey};
  text-align: center;
  margin: 0 0 1rem 0;
`;

const StyledSectionSubtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "20px" : "18px")};
  color: ${colours.grey};
  text-align: center;
  margin: 0 0 3rem 0;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
`;

const StyledContentCard = styled.div`
  background: ${colours.lightGrey};
  border-radius: 16px;
  padding: 3rem;
  margin-bottom: 3rem;
  border-left: 4px solid ${colours.pink};
`;

const StyledContentTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: ${colours.darkGrey};
  margin: 0 0 1.5rem 0;
`;

const StyledContentDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  color: ${colours.darkGrey};
  line-height: 1.8;
  margin: 0 0 1.5rem 0;
`;

const StyledContentList = styled.ul`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: ${colours.darkGrey};
  line-height: 2;
  margin: 0;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.5rem;
  }
`;

const StyledStepsGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isDesktop ? "repeat(2, 1fr)" : "repeat(1, 1fr)"};
  gap: 2rem;
  margin-bottom: 3rem;
`;

const StyledStepCard = styled.div`
  background: ${colours.white};
  border: 2px solid ${colours.lightGrey};
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    border-color: ${colours.darkGreen};
  }
`;

const StyledStepNumber = styled.div`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  background: ${colours.pink};
  color: ${colours.white};
  border-radius: 50%;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  line-height: 3rem;
  margin-bottom: 1rem;
`;

const StyledStepTitle = styled.h4`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colours.darkGrey};
  margin: 0 0 1rem 0;
`;

const StyledStepDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: ${colours.grey};
  line-height: 1.6;
  margin: 0;
`;

const StyledBenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isDesktop ? "repeat(3, 1fr)" : "repeat(1, 1fr)"};
  gap: 2rem;
  margin-bottom: 3rem;
`;

const StyledBenefitIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const StyledBenefitTitle = styled.h4`
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colours.darkGrey};
  margin: 0 0 0.75rem 0;
  transition: color 0.3s ease;
`;

const StyledBenefitDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: ${colours.grey};
  line-height: 1.6;
  margin: 0;
  transition: color 0.3s ease;
`;

const StyledBenefitCard = styled.div`
  background: ${colours.white};
  border: 2px solid ${colours.darkGreen};
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    background: ${colours.darkGreen};
    color: ${colours.white};

    ${StyledBenefitTitle}, ${StyledBenefitDescription} {
      color: ${colours.white};
    }
  }
`;

const StyledCTAWrapper = styled.div`
  text-align: center;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  
  > div {
    max-width: 300px;
    width: 100%;
  }
`;

const TechStartPage = () => {
  const { isDesktop } = useWindowSize();

  return (
    <>
      <SEO
        title="TechStart Program - Modern Software | Invest NI TechStart Partner"
        description="Partner with Modern Software for the Invest NI TechStart program. We guide tech startups through the application process and become your tech partner."
        keywords="TechStart, Invest NI, tech startup, Northern Ireland, tech partner, startup funding, Invest NI TechStart"
      />
      <StyledTechStartHero isDesktop={isDesktop}>
        <StyledTechStartHeroContent>
          <StyledTechStartHeroTitle isDesktop={isDesktop}>
            TechStart Program
          </StyledTechStartHeroTitle>
          <StyledTechStartHeroSubtitle isDesktop={isDesktop}>
            Partner with Modern Software to navigate the Invest NI TechStart program and accelerate
            your tech startup journey
          </StyledTechStartHeroSubtitle>
        </StyledTechStartHeroContent>
      </StyledTechStartHero>

      <StyledTechStartSection isDesktop={isDesktop}>
        <StyledTechStartContainer>
          <StyledContentCard>
            <StyledContentTitle>What is TechStart?</StyledContentTitle>
            <StyledContentDescription>
              TechStart is Invest NI&apos;s flagship program designed to support early-stage tech
              startups in Northern Ireland. The program provides funding, mentorship, and resources
              to help innovative technology companies grow and succeed.
            </StyledContentDescription>
            <StyledContentList>
              <li>
                <strong>Funding Support:</strong> Access to grant funding for product development
                and market entry
              </li>
              <li>
                <strong>Mentorship:</strong> Guidance from experienced entrepreneurs and industry
                experts
              </li>
              <li>
                <strong>Networking:</strong> Connect with other startups, investors, and potential
                partners
              </li>
              <li>
                <strong>Resources:</strong> Access to co-working spaces, workshops, and training
                programs
              </li>
              <li>
                <strong>Eligibility:</strong> Open to tech startups in Northern Ireland with
                innovative products or services
              </li>
            </StyledContentList>
          </StyledContentCard>

          <StyledSectionTitle isDesktop={isDesktop}>How We Help</StyledSectionTitle>
          <StyledSectionSubtitle isDesktop={isDesktop}>
            Step-by-step guidance through the TechStart application process
          </StyledSectionSubtitle>

          <StyledStepsGrid isDesktop={isDesktop}>
            <StyledStepCard>
              <StyledStepNumber>1</StyledStepNumber>
              <StyledStepTitle>Initial Assessment</StyledStepTitle>
              <StyledStepDescription>
                We evaluate your startup&apos;s eligibility and readiness for the TechStart program,
                identifying strengths and areas for improvement.
              </StyledStepDescription>
            </StyledStepCard>

            <StyledStepCard>
              <StyledStepNumber>2</StyledStepNumber>
              <StyledStepTitle>Application Preparation</StyledStepTitle>
              <StyledStepDescription>
                We help you prepare a compelling application, including business plan development,
                financial projections, and technical documentation.
              </StyledStepDescription>
            </StyledStepCard>

            <StyledStepCard>
              <StyledStepNumber>3</StyledStepNumber>
              <StyledStepTitle>Submission Support</StyledStepTitle>
              <StyledStepDescription>
                We guide you through the submission process, ensuring all requirements are met and
                deadlines are adhered to.
              </StyledStepDescription>
            </StyledStepCard>

            <StyledStepCard>
              <StyledStepNumber>4</StyledStepNumber>
              <StyledStepTitle>Ongoing Partnership</StyledStepTitle>
              <StyledStepDescription>
                Once accepted, we continue to support your startup with technical development,
                strategic guidance, and business growth initiatives.
              </StyledStepDescription>
            </StyledStepCard>
          </StyledStepsGrid>

          <StyledSectionTitle isDesktop={isDesktop}>Become Your Tech Partner</StyledSectionTitle>
          <StyledSectionSubtitle isDesktop={isDesktop}>
            Why choose Modern Software as your TechStart partner
          </StyledSectionSubtitle>

          <StyledBenefitsGrid isDesktop={isDesktop}>
            <StyledBenefitCard>
              <StyledBenefitIcon>💻</StyledBenefitIcon>
              <StyledBenefitTitle>Technical Expertise</StyledBenefitTitle>
              <StyledBenefitDescription>
                Years of experience building scalable web applications and software solutions for
                startups
              </StyledBenefitDescription>
            </StyledBenefitCard>

            <StyledBenefitCard>
              <StyledBenefitIcon>🚀</StyledBenefitIcon>
              <StyledBenefitTitle>Rapid Development</StyledBenefitTitle>
              <StyledBenefitDescription>
                Fast turnaround times to help you meet TechStart milestones and deadlines
              </StyledBenefitDescription>
            </StyledBenefitCard>

            <StyledBenefitCard>
              <StyledBenefitIcon>🤝</StyledBenefitIcon>
              <StyledBenefitTitle>Long-term Partnership</StyledBenefitTitle>
              <StyledBenefitDescription>
                We&apos;re committed to your success beyond the TechStart program, supporting your
                growth journey
              </StyledBenefitDescription>
            </StyledBenefitCard>

            <StyledBenefitCard>
              <StyledBenefitIcon>📊</StyledBenefitIcon>
              <StyledBenefitTitle>Strategic Guidance</StyledBenefitTitle>
              <StyledBenefitDescription>
                Business and technical advice to help you make informed decisions and maximize
                growth
              </StyledBenefitDescription>
            </StyledBenefitCard>

            <StyledBenefitCard>
              <StyledBenefitIcon>💰</StyledBenefitIcon>
              <StyledBenefitTitle>Cost-Effective</StyledBenefitTitle>
              <StyledBenefitDescription>
                Competitive rates designed for startups, helping you make the most of your
                TechStart funding
              </StyledBenefitDescription>
            </StyledBenefitCard>

            <StyledBenefitCard>
              <StyledBenefitIcon>🎯</StyledBenefitIcon>
              <StyledBenefitTitle>Proven Track Record</StyledBenefitTitle>
              <StyledBenefitDescription>
                Successfully helped multiple startups navigate TechStart and achieve their business
                goals
              </StyledBenefitDescription>
            </StyledBenefitCard>
          </StyledBenefitsGrid>

          <StyledContentCard>
            <StyledContentTitle>Success Stories</StyledContentTitle>
            <StyledContentDescription>
              We&apos;ve helped numerous tech startups successfully apply for and benefit from the
              TechStart program. Our partners have gone on to secure additional funding, launch
              successful products, and grow their teams.
            </StyledContentDescription>
            <StyledContentDescription>
              Whether you&apos;re building a SaaS platform, mobile app, or innovative tech solution,
              we have the expertise and experience to help you succeed with TechStart.
            </StyledContentDescription>
          </StyledContentCard>

          <StyledCTAWrapper>
            <div>
              <CallToActionButton variant="darkGreen" href="/contactus">
                Apply for TechStart with Us
              </CallToActionButton>
            </div>
          </StyledCTAWrapper>
        </StyledTechStartContainer>
      </StyledTechStartSection>

      <PartnersSection />
    </>
  );
};

export default TechStartPage;
