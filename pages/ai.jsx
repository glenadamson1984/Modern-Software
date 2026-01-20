import React from "react";
import useWindowSize from "../src/hooks/useWindowSize";
import CallToActionButton from "../src/components/buttons/action/CallToActionButton";
import styled from "styled-components";
import { colours, media } from "../src/utils/style.utils";
import SEO from "../src/components/SEO";

const StyledAIHero = styled.section.withConfig({
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

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
    z-index: 0;
    pointer-events: none;
  }
`;

const StyledAIHeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledAIHeroTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "72px" : "48px")};
  line-height: 1.1;
  font-weight: 700;
  color: ${colours.white};
  margin: 0 0 1.5rem 0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`;

const StyledAIHeroSubtitle = styled.p`
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

const StyledAISection = styled.section`
  padding: ${(props) => (props.isDesktop ? "6rem 4rem" : "4rem 2rem")};
  background: ${colours.white};
`;

const StyledAIContainer = styled.div`
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

const StyledServicesGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isDesktop ? "repeat(3, 1fr)" : "repeat(1, 1fr)"};
  gap: 2rem;
  margin-bottom: 4rem;
`;

const StyledServiceCard = styled.div`
  background: ${colours.white};
  border: 2px solid ${colours.lightGrey};
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    border-color: ${colours.pink};
  }
`;

const StyledServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${colours.pink}, ${colours.darkGreen});
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${colours.white};
`;

const StyledServiceTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colours.darkGrey};
  margin: 0 0 1rem 0;
`;

const StyledServiceDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: ${colours.grey};
  line-height: 1.6;
  margin: 0;
`;

const StyledSeminarsSection = styled.div`
  background: ${colours.lightGrey};
  border-radius: 16px;
  padding: 3rem;
  margin-bottom: 4rem;
`;

const StyledSeminarsTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: ${colours.darkGrey};
  margin: 0 0 1.5rem 0;
`;

const StyledSeminarsDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  color: ${colours.darkGrey};
  line-height: 1.8;
  margin: 0 0 2rem 0;
`;

const StyledSeminarsList = styled.ul`
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

const AIPage = () => {
  const { isDesktop } = useWindowSize();

  return (
    <>
      <SEO
        title="AI Consulting Services - Modern Software"
        description="Professional AI consulting services including inventory optimization, predictive analytics, and AI strategy. Join our Belfast-based AI seminars."
        keywords="AI consulting, artificial intelligence, predictive analytics, inventory optimization, AI seminars Belfast, AI strategy consulting"
      />
      <StyledAIHero isDesktop={isDesktop}>
        <video autoPlay muted loop playsInline>
          <source src="/videos/7263301-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        <StyledAIHeroContent>
          <StyledAIHeroTitle isDesktop={isDesktop}>AI Consulting Services</StyledAIHeroTitle>
          <StyledAIHeroSubtitle isDesktop={isDesktop}>
            Transform your business with cutting-edge artificial intelligence solutions. From
            inventory optimization to predictive analytics, we help you harness the power of AI.
          </StyledAIHeroSubtitle>
        </StyledAIHeroContent>
      </StyledAIHero>

      <StyledAISection isDesktop={isDesktop}>
        <StyledAIContainer>
          <StyledSectionTitle isDesktop={isDesktop}>Our AI Services</StyledSectionTitle>
          <StyledSectionSubtitle isDesktop={isDesktop}>
            Comprehensive AI solutions tailored to your business needs
          </StyledSectionSubtitle>

          <StyledServicesGrid isDesktop={isDesktop}>
            <StyledServiceCard>
              <StyledServiceIcon>📊</StyledServiceIcon>
              <StyledServiceTitle>Inventory Optimization</StyledServiceTitle>
              <StyledServiceDescription>
                Leverage AI to optimize your inventory levels, reduce waste, and improve supply
                chain efficiency. Our predictive models help you maintain optimal stock levels while
                minimizing costs.
              </StyledServiceDescription>
            </StyledServiceCard>

            <StyledServiceCard>
              <StyledServiceIcon>🔮</StyledServiceIcon>
              <StyledServiceTitle>Predictive Analytics</StyledServiceTitle>
              <StyledServiceDescription>
                Make data-driven decisions with advanced predictive analytics. Forecast demand,
                identify trends, and anticipate market changes to stay ahead of the competition.
              </StyledServiceDescription>
            </StyledServiceCard>

            <StyledServiceCard>
              <StyledServiceIcon>🎯</StyledServiceIcon>
              <StyledServiceTitle>AI Strategy Consulting</StyledServiceTitle>
              <StyledServiceDescription>
                Develop a comprehensive AI strategy aligned with your business goals. We help you
                identify opportunities, plan implementation, and maximize ROI from AI investments.
              </StyledServiceDescription>
            </StyledServiceCard>
          </StyledServicesGrid>

          <StyledSeminarsSection>
            <StyledSeminarsTitle>AI Seminars in Belfast</StyledSeminarsTitle>
            <StyledSeminarsDescription>
              Join our regular AI seminars and workshops in Belfast to learn about the latest
              developments in artificial intelligence and how they can benefit your business.
            </StyledSeminarsDescription>
            <StyledSeminarsList>
              <li>
                <strong>Introduction to AI for Business:</strong> Learn the fundamentals of AI
                and how it can transform your operations
              </li>
              <li>
                <strong>Predictive Analytics Workshop:</strong> Hands-on session on building and
                deploying predictive models
              </li>
              <li>
                <strong>AI Strategy Development:</strong> Learn how to create and implement an
                effective AI strategy
              </li>
              <li>
                <strong>Case Studies & Best Practices:</strong> Real-world examples of successful
                AI implementations
              </li>
            </StyledSeminarsList>
            <StyledCTAWrapper>
              <div>
                <CallToActionButton variant="primary" href="/contactus">
                  Register for Upcoming Seminars
                </CallToActionButton>
              </div>
            </StyledCTAWrapper>
          </StyledSeminarsSection>

          <StyledSectionTitle isDesktop={isDesktop} style={{ marginTop: "4rem" }}>
            Consulting Packages
          </StyledSectionTitle>
          <StyledSectionSubtitle isDesktop={isDesktop}>
            Flexible consulting options to suit businesses of all sizes
          </StyledSectionSubtitle>

          <StyledServicesGrid isDesktop={isDesktop}>
            <StyledServiceCard>
              <StyledServiceIcon>🚀</StyledServiceIcon>
              <StyledServiceTitle>Starter Package</StyledServiceTitle>
              <StyledServiceDescription>
                Perfect for small businesses getting started with AI. Includes initial assessment,
                basic strategy development, and implementation roadmap.
              </StyledServiceDescription>
            </StyledServiceCard>

            <StyledServiceCard>
              <StyledServiceIcon>💼</StyledServiceIcon>
              <StyledServiceTitle>Professional Package</StyledServiceTitle>
              <StyledServiceDescription>
                Comprehensive AI consulting for growing businesses. Includes full strategy
                development, model implementation, and ongoing support.
              </StyledServiceDescription>
            </StyledServiceCard>

            <StyledServiceCard>
              <StyledServiceIcon>🏆</StyledServiceIcon>
              <StyledServiceTitle>Enterprise Package</StyledServiceTitle>
              <StyledServiceDescription>
                Complete AI transformation for large organizations. Custom solutions, dedicated
                support, and enterprise-grade implementations.
              </StyledServiceDescription>
            </StyledServiceCard>
          </StyledServicesGrid>

          <StyledCTAWrapper>
            <div>
              <CallToActionButton variant="darkGreen" href="/contactus">
                Get Started with AI Consulting
              </CallToActionButton>
            </div>
          </StyledCTAWrapper>
        </StyledAIContainer>
      </StyledAISection>
    </>
  );
};

export default AIPage;
