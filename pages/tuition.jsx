import React from "react";
import { useRouter } from "next/router";
import SubPageLayout from "../src/components/layout/SubPageLayout";
import { RemoveSlashFromURl } from "../src/components/layout/navigation/NavigationPaths";
import styled from "styled-components";
import { colours } from "../src/utils/style.utils";
import useWindowSize from "../src/hooks/useWindowSize";

const StyledContainer = styled.div`
  padding: ${(props) => (props.isDesktop ? "5rem" : "0")};
`;

const StyledSentence = styled.div`
  text-align: center;
  font: normal normal bold 28px/28px Roboto;
  letter-spacing: 0px;
  color: ${colours.black};
  padding: 0.5rem;
  > span {
    color: ${colours.red};
  }
`;

const Tuition = () => {
  const { pathname } = useRouter();
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  return (
    <SubPageLayout subTitle={RemoveSlashFromURl(pathname)}>
      <StyledContainer isDesktop={isDesktop}>
        <StyledSentence>
          <span>Modern Software</span> delivers a real world tuition experience.
        </StyledSentence>
        <StyledSentence>
          We aim to not only teach you how to code but work with you on a 1 to 1
          basis.
        </StyledSentence>
        <StyledSentence>
          Setting up a <span>unique course</span> tailored to your speed and
          skill set and what your unique aims are.
        </StyledSentence>
        <StyledSentence>
          <span>
            We run these courses followed the scrum methodology with a mix of
            code you must deliver and topics you need to investigate and provide
            feedback.
          </span>
        </StyledSentence>
        <StyledSentence>
          We will show talk you through the jargon you will encounter in the
          real working world, how to handle interviews, things you need to know
          and others which you can skim over.
        </StyledSentence>
        <StyledSentence>
          A four week course completely tailored costs around <span>£500 </span>
          but rest assured you will leave this tuition with the confidence to
          tackle the world of software at pace.
        </StyledSentence>
        <StyledSentence>
          <span>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            It's time to learn and gain that real experience you need so get in
            touch now!
          </span>
        </StyledSentence>
      </StyledContainer>
    </SubPageLayout>
  );
};

export default Tuition;
