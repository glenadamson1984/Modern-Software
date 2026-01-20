import React from "react";
import styled from "styled-components";
import { colours } from "../../utils/style.utils";
import Image from "next/image";

const StyledPartnersSection = styled.section`
  padding: 4rem 2rem;
  background: ${colours.lightGrey};
  width: 100%;
`;

const StyledPartnersContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledPartnersTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colours.darkGrey};
  text-align: center;
  margin: 0 0 1rem 0;
`;

const StyledPartnersSubtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  color: ${colours.grey};
  text-align: center;
  margin: 0 0 3rem 0;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
`;

const StyledPartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const StyledPartnerCard = styled.a`
  background: ${colours.white};
  border: 2px solid ${colours.lightGrey};
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    border-color: ${colours.pink};
  }
`;

const StyledPartnerLogoWrapper = styled.div`
  width: 100%;
  max-width: 200px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
`;

const StyledPartnerLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(0);
  transition: all 0.3s ease;
`;

const StyledPartnerName = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colours.darkGrey};
  margin: 0 0 0.5rem 0;
`;

const StyledPartnerDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  color: ${colours.grey};
  line-height: 1.6;
  margin: 0;
`;

const StyledCredentialsText = styled.div`
  background: ${colours.white};
  border-radius: 16px;
  padding: 2rem;
  margin-top: 2rem;
  text-align: center;
  border-left: 4px solid ${colours.darkGreen};
`;

const StyledCredentialsTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colours.darkGrey};
  margin: 0 0 1rem 0;
`;

const StyledCredentialsDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: ${colours.darkGrey};
  line-height: 1.8;
  margin: 0;
`;

const PartnersSection = () => {
  return (
    <StyledPartnersSection>
      <StyledPartnersContainer>
        <StyledPartnersTitle>Our Partners & Credentials</StyledPartnersTitle>
        <StyledPartnersSubtitle>
          We&apos;re proud to be connected with leading business support programs in Northern Ireland
        </StyledPartnersSubtitle>

        <StyledPartnersGrid>
          <StyledPartnerCard
            href="https://www.armaghbanbridgecraigavon.gov.uk/business/gosucceed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledPartnerLogoWrapper>
              <StyledPartnerLogo
                src="/images/partners/abc-council-logo.png"
                alt="ABC Council Go Succeed Programme"
                onError={(e) => {
                  // Fallback to text if logo not found
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<div style="font-size: 2rem; color: #1a4d3a; font-weight: bold;">ABC Council</div>';
                }}
              />
            </StyledPartnerLogoWrapper>
            <StyledPartnerName>Go Succeed Programme</StyledPartnerName>
            <StyledPartnerDescription>
              Armagh City, Banbridge & Craigavon Borough Council&apos;s business support service
              helping entrepreneurs start, grow, and scale their businesses.
            </StyledPartnerDescription>
          </StyledPartnerCard>

          <StyledPartnerCard
            href="https://www.investni.com/support-for-business/innovation-research-and-development/techstart-ventures-proof-of-concept-grant-fund"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledPartnerLogoWrapper>
              <StyledPartnerLogo
                src="/images/partners/invest-ni-logo.png"
                alt="Invest NI TechStart"
                onError={(e) => {
                  // Fallback to text if logo not found
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<div style="font-size: 2rem; color: #1a4d3a; font-weight: bold;">Invest NI</div>';
                }}
              />
            </StyledPartnerLogoWrapper>
            <StyledPartnerName>Invest NI TechStart</StyledPartnerName>
            <StyledPartnerDescription>
              Proof of Concept Grant Fund supporting entrepreneurs to test the viability and
              commercial potential of innovative tech ideas.
            </StyledPartnerDescription>
          </StyledPartnerCard>
        </StyledPartnersGrid>

        <StyledCredentialsText>
          <StyledCredentialsTitle>Our Journey</StyledCredentialsTitle>
          <StyledCredentialsDescription>
            Modern Software successfully completed the Go Succeed programme, which provided us with
            invaluable mentorship, business planning support, and guidance that helped shape our
            company. This first-hand experience means we understand the application process and can
            guide you through it with confidence. We&apos;re committed to supporting local businesses
            in Northern Ireland and helping them access the same opportunities that helped us grow.
          </StyledCredentialsDescription>
        </StyledCredentialsText>
      </StyledPartnersContainer>
    </StyledPartnersSection>
  );
};

export default PartnersSection;
