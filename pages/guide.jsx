import React from "react";
import styled from "styled-components";
import { colours } from "../src/utils/style.utils";
import SEO from "../src/components/SEO";

const StyledGuidePage = styled.div`
  min-height: 100vh;
  background: ${colours.white};
`;

const StyledHero = styled.div`
  background: ${colours.darkGrey};
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 64, 139, 0.1), rgba(26, 77, 58, 0.1));
    z-index: 1;
  }
`;

const StyledHeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const StyledHeroTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: ${colours.white};
  margin: 0 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledHeroSubtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  color: ${colours.white};
  opacity: 0.9;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const StyledSection = styled.section`
  margin-bottom: 3rem;
`;

const StyledSectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: ${colours.darkGrey};
  margin: 0 0 1.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${colours.pink};
`;

const StyledStep = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: ${colours.lightGrey};
  border-radius: 12px;
  border-left: 4px solid ${colours.darkGreen};
`;

const StyledStepNumber = styled.div`
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  background: ${colours.pink};
  color: ${colours.white};
  border-radius: 50%;
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  line-height: 2.5rem;
  margin-right: 1rem;
  vertical-align: top;
`;

const StyledStepTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colours.darkGrey};
  margin: 0 0 0.75rem 0;
  display: inline-block;
`;

const StyledStepContent = styled.div`
  margin-left: 3.5rem;
`;

const StyledStepDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: ${colours.darkGrey};
  line-height: 1.6;
  margin: 0 0 1rem 0;
`;

const StyledStepList = styled.ul`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: ${colours.darkGrey};
  line-height: 1.8;
  margin: 0;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.5rem;
  }
`;

const StyledHighlight = styled.span`
  background: rgba(255, 64, 139, 0.15);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-weight: 600;
`;

const StyledTip = styled.div`
  background: rgba(26, 77, 58, 0.1);
  border-left: 4px solid ${colours.darkGreen};
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  color: ${colours.darkGrey};
`;

const GuidePage = () => {
  return (
    <StyledGuidePage>
      <SEO
        title="Leads Management Guide - Modern Software"
        description="Step-by-step guide for using the Modern Software leads management system"
        keywords="leads management, CRM guide, business development"
      />
      <StyledHero>
        <StyledHeroContent>
          <StyledHeroTitle>Leads Management Guide</StyledHeroTitle>
          <StyledHeroSubtitle>
            Learn how to effectively manage leads and grow your business
          </StyledHeroSubtitle>
        </StyledHeroContent>
      </StyledHero>

      <StyledContainer>
        <StyledSection>
          <StyledSectionTitle>Getting Started</StyledSectionTitle>
          <StyledStep>
            <StyledStepNumber>1</StyledStepNumber>
            <StyledStepTitle>Adding Leads</StyledStepTitle>
            <StyledStepContent>
              <StyledStepDescription>
                To add a new lead, fill out the form at the top of the leads page. Required fields
                are marked with an asterisk (*).
              </StyledStepDescription>
              <StyledStepList>
                <li>
                  <StyledHighlight>Business Name</StyledHighlight>: The company name
                </li>
                <li>
                  <StyledHighlight>Contact Name</StyledHighlight>: The primary contact person
                </li>
                <li>
                  <StyledHighlight>Email</StyledHighlight>: Contact email address
                </li>
                <li>
                  <StyledHighlight>Town</StyledHighlight>: Location of the business
                </li>
                <li>
                  <StyledHighlight>Website</StyledHighlight>: Company website (optional)
                </li>
                <li>
                  <StyledHighlight>Source</StyledHighlight>: How you found the lead (Outbound, Ads,
                  or Referral)
                </li>
                <li>
                  <StyledHighlight>Status</StyledHighlight>: Current status (Sent, Replied, Won,
                  Lost)
                </li>
                <li>
                  <StyledHighlight>Notes</StyledHighlight>: Any additional information
                </li>
              </StyledStepList>
            </StyledStepContent>
          </StyledStep>
        </StyledSection>

        <StyledSection>
          <StyledSectionTitle>Managing Leads</StyledSectionTitle>
          <StyledStep>
            <StyledStepNumber>2</StyledStepNumber>
            <StyledStepTitle>Updating Status and Notes</StyledStepTitle>
            <StyledStepContent>
              <StyledStepDescription>
                You can update the status and notes for any lead directly in the table. Changes are
                saved when you click the <StyledHighlight>Update</StyledHighlight> button.
              </StyledStepDescription>
              <StyledStepList>
                <li>Select a new status from the dropdown</li>
                <li>Edit notes in the notes field</li>
                <li>Click "Update" to save your changes</li>
              </StyledStepList>
              <StyledTip>
                <strong>Tip:</strong> The Update button is only enabled when you make changes to a
                lead.
              </StyledTip>
            </StyledStepContent>
          </StyledStep>

          <StyledStep>
            <StyledStepNumber>3</StyledStepNumber>
            <StyledStepTitle>Filtering Leads</StyledStepTitle>
            <StyledStepContent>
              <StyledStepDescription>
                Use the filter dropdown at the top of the table to view leads by status. You can
                filter by:
              </StyledStepDescription>
              <StyledStepList>
                <li>All leads</li>
                <li>Sent</li>
                <li>Replied</li>
                <li>Won</li>
                <li>Lost</li>
              </StyledStepList>
            </StyledStepContent>
          </StyledStep>

          <StyledStep>
            <StyledStepNumber>4</StyledStepNumber>
            <StyledStepTitle>Pagination</StyledStepTitle>
            <StyledStepContent>
              <StyledStepDescription>
                The leads table displays 20 leads per page. Use the pagination controls at the
                bottom to navigate between pages.
              </StyledStepDescription>
              <StyledStepList>
                <li>Click page numbers to jump to a specific page</li>
                <li>Use "Previous" and "Next" buttons to navigate</li>
                <li>The pagination shows "Showing X-Y of Z leads"</li>
              </StyledStepList>
            </StyledStepContent>
          </StyledStep>
        </StyledSection>

        <StyledSection>
          <StyledSectionTitle>Follow-up Reminders</StyledSectionTitle>
          <StyledStep>
            <StyledStepNumber>5</StyledStepNumber>
            <StyledStepTitle>10+ Day Highlight</StyledStepTitle>
            <StyledStepContent>
              <StyledStepDescription>
                Leads older than 10 days are automatically highlighted to remind you to follow up.
                The highlight color alternates between pink and green for easy identification.
              </StyledStepDescription>
              <StyledStepList>
                <li>Pink highlight: Even-numbered days (12, 14, 16, etc.)</li>
                <li>Green highlight: Odd-numbered days (11, 13, 15, etc.)</li>
                <li>A badge shows the exact number of days since creation</li>
              </StyledStepList>
              <StyledTip>
                <strong>Tip:</strong> Prioritize following up with highlighted leads to maintain
                engagement.
              </StyledTip>
            </StyledStepContent>
          </StyledStep>
        </StyledSection>

        <StyledSection>
          <StyledSectionTitle>AI Research Tools</StyledSectionTitle>
          <StyledStep>
            <StyledStepNumber>6</StyledStepNumber>
            <StyledStepTitle>Using ChatGPT Research</StyledStepTitle>
            <StyledStepContent>
              <StyledStepDescription>
                The <StyledHighlight>Research</StyledHighlight> button uses AI to find company
                email addresses and websites. Click it next to any lead to start research.
              </StyledStepDescription>
              <StyledStepList>
                <li>Click "Research" button in the Actions column</li>
                <li>Click "Start Research" in the modal</li>
                <li>Review the found email and website</li>
                <li>Check the outreach strategy recommendation</li>
                <li>Click "Update Lead" to save the information</li>
              </StyledStepList>
              <StyledTip>
                <strong>Note:</strong> Research results include an automatic outreach strategy based
                on what was found.
              </StyledTip>
            </StyledStepContent>
          </StyledStep>

          <StyledStep>
            <StyledStepNumber>7</StyledStepNumber>
            <StyledStepTitle>Understanding Outreach Strategies</StyledStepTitle>
            <StyledStepContent>
              <StyledStepDescription>
                The system automatically determines the best outreach strategy based on research
                results:
              </StyledStepDescription>
              <StyledStepList>
                <li>
                  <StyledHighlight>High Priority - First Website Opportunity</StyledHighlight> (Green
                  badge): Company has an email but no website. Great opportunity to offer website
                  development.
                </li>
                <li>
                  <StyledHighlight>Website Review Needed</StyledHighlight> (Yellow badge):
                  Company has both email and website. Review their website quality to determine if
                  you should offer an upgrade or introduce other services.
                </li>
                <li>
                  <StyledHighlight>Low Priority - Move On</StyledHighlight> (Grey badge): No email
                  or website found. Consider using Companies House lookup or moving on.
                </li>
              </StyledStepList>
            </StyledStepContent>
          </StyledStep>
        </StyledSection>

        <StyledSection>
          <StyledSectionTitle>Companies House Lookup</StyledSectionTitle>
          <StyledStep>
            <StyledStepNumber>8</StyledStepNumber>
            <StyledStepTitle>Searching Companies House</StyledStepTitle>
            <StyledStepContent>
              <StyledStepDescription>
                The <StyledHighlight>Companies House</StyledHighlight> button in the header opens
                a filtered search for active companies. This is useful for finding new leads in
                specific locations.
              </StyledStepDescription>
              <StyledStepList>
                <li>Click "Companies House" button in the header</li>
                <li>The search opens in a new tab</li>
                <li>Results are filtered for active companies from 2020 onwards</li>
                <li>You can further filter by location, company type, etc.</li>
              </StyledStepList>
              <StyledTip>
                <strong>Tip:</strong> Use Companies House to find new businesses in your target
                areas that might need web design or software services.
              </StyledTip>
            </StyledStepContent>
          </StyledStep>
        </StyledSection>

        <StyledSection>
          <StyledSectionTitle>Best Practices</StyledSectionTitle>
          <StyledStep>
            <StyledStepNumber>9</StyledStepNumber>
            <StyledStepTitle>Effective Lead Management</StyledStepTitle>
            <StyledStepContent>
              <StyledStepList>
                <li>
                  <StyledHighlight>Regular Follow-ups:</StyledHighlight> Check highlighted leads
                  (10+ days) daily and follow up promptly
                </li>
                <li>
                  <StyledHighlight>Update Notes:</StyledHighlight> Keep detailed notes about
                  conversations and next steps
                </li>
                <li>
                  <StyledHighlight>Use Research:</StyledHighlight> Research leads before reaching
                  out to personalize your approach
                </li>
                <li>
                  <StyledHighlight>Track Status:</StyledHighlight> Keep lead statuses up to date
                  to maintain accurate pipeline visibility
                </li>
                <li>
                  <StyledHighlight>Review Strategies:</StyledHighlight> Follow the AI-recommended
                  outreach strategies for better conversion rates
                </li>
              </StyledStepList>
            </StyledStepContent>
          </StyledStep>
        </StyledSection>
      </StyledContainer>
    </StyledGuidePage>
  );
};

export default GuidePage;
