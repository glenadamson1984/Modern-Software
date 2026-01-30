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
  opacity: 0.8;
`;

export default function ProposalsIndex() {
  return (
    <>
      <Head>
        <title>Proposals | Modern Software</title>
      </Head>
      <StyledPage>
        <StyledMessage>
          Proposals are shared by direct link. No proposals are listed here.
        </StyledMessage>
      </StyledPage>
    </>
  );
}
