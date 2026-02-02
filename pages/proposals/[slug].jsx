import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import { colours } from "../../src/utils/style.utils";
import {
  getProposalBySlug,
  getAllProposalSlugs,
} from "../../data/proposals";

const StyledPageContainer = styled.div`
  min-height: 100vh;
  background: ${colours.darkGrey};
  padding: 4rem 2rem 6rem;
`;

const StyledContentContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const StyledSubtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: ${colours.grey};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.5rem 0;
`;

const StyledTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: ${colours.white};
  margin: 0 0 2rem 0;
  line-height: 1.3;
`;

const StyledMeta = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 15px;
  color: ${colours.white};
  opacity: 0.8;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  p {
    margin: 0 0 0.25rem 0;
  }
`;

const StyledSection = styled.section`
  margin-bottom: 2.5rem;
`;

const StyledSectionHeading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${colours.pink};
  margin: 0 0 0.75rem 0;
  letter-spacing: 0.02em;
`;

const StyledSectionSubheading = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${colours.white};
  opacity: 0.9;
  margin: 0 0 0.75rem 0;
`;

const StyledSectionContent = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: ${colours.white};
  opacity: 0.9;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const StyledScreenshotsSection = styled.section`
  margin-top: 3rem;
  margin-bottom: 2.5rem;
`;

const StyledScreenshotBlock = styled.div`
  margin-bottom: 2rem;
`;

const StyledScreenshotImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const StyledScreenshotLabel = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: ${colours.grey};
  margin: 0.5rem 0 0 0;
`;

export async function getStaticPaths() {
  const slugs = getAllProposalSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const proposal = getProposalBySlug(params.slug);
  if (!proposal) {
    return { notFound: true };
  }
  return { props: { proposal } };
}

export default function ProposalPage({ proposal }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <StyledPageContainer>
        <StyledContentContainer>
          <div style={{ color: colours.white, textAlign: "center" }}>
            Loading proposal...
          </div>
        </StyledContentContainer>
      </StyledPageContainer>
    );
  }

  if (!proposal) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{proposal.title} | Modern Software</title>
        <meta
          name="description"
          content={`Business proposal for ${proposal.preparedFor} — ${proposal.title}`}
        />
      </Head>
      <StyledPageContainer>
        <StyledContentContainer>
          <StyledSubtitle>{proposal.subtitle}</StyledSubtitle>
          <StyledTitle>{proposal.title}</StyledTitle>
          <StyledMeta>
            <p>Prepared for: {proposal.preparedFor}</p>
            <p>Prepared by: {proposal.preparedBy}</p>
          </StyledMeta>

          {proposal.sections.map((section, i) => (
            <StyledSection key={i}>
              <StyledSectionHeading>{section.heading}</StyledSectionHeading>
              {section.subheading && (
                <StyledSectionSubheading>
                  {section.subheading}
                </StyledSectionSubheading>
              )}
              <StyledSectionContent>{section.content}</StyledSectionContent>
            </StyledSection>
          ))}

          {proposal.screenshots && proposal.screenshots.length > 0 && (
            <StyledScreenshotsSection>
              <StyledSectionHeading>SCREEN MOCKUPS</StyledSectionHeading>
              {proposal.screenshots.map((shot, i) => (
                <StyledScreenshotBlock key={i}>
                  <StyledScreenshotImage
                    src={shot.src}
                    alt={shot.label}
                  />
                  <StyledScreenshotLabel>{shot.label}</StyledScreenshotLabel>
                </StyledScreenshotBlock>
              ))}
            </StyledScreenshotsSection>
          )}
        </StyledContentContainer>
      </StyledPageContainer>
    </>
  );
}
