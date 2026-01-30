import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { colours } from "../../src/utils/style.utils";

const StyledPage = styled.div`
  min-height: 100vh;
  background: ${colours.darkGrey};
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMessage = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  color: ${colours.white};
  opacity: 0.9;
  max-width: 520px;
  line-height: 1.6;

  code {
    font-family: ui-monospace, monospace;
    font-size: 15px;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.2em 0.4em;
    border-radius: 4px;
  }
`;

export default function ProposalsIndex() {
  return (
    <>
      <Head>
        <title>Proposals | Modern Software</title>
      </Head>
      <StyledPage>
        <StyledMessage>
          If you have received a proposal from Modern Software, a direct link
          (slug) should have been provided — for example{" "}
          <code>/proposals/your-project-name</code> or{" "}
          <code>/proposals/acme-corp</code>. Please use the full URL you were
          sent to view your proposal.
        </StyledMessage>
      </StyledPage>
    </>
  );
}
