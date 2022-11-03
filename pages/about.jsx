import React from "react";
import { useRouter } from "next/router";
import SubPageLayout from "../src/components/layout/SubPageLayout";
import { RemoveSlashFromURl } from "../src/components/layout/navigation/NavigationPaths";
import styled from "styled-components";
import { colours } from "../src/utils/style.utils";
import useWindowSize from "../src/hooks/useWindowSize";
import CallToActionButton from "../src/components/buttons/action/CallToActionButton";

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

const About = () => {
  const { pathname } = useRouter();
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  return (
    <SubPageLayout subTitle={RemoveSlashFromURl(pathname)}>
      <StyledContainer isDesktop={isDesktop}>
        <StyledSentence>
          <span>Modern Software</span> was established in 2021 with the aim to
          provide modern software solutions to everyday businesses.
        </StyledSentence>
        <StyledSentence>
          Too often have we came across the off the shelf solution that needs
          huge amount of customisation just to make it fit in with the business.
        </StyledSentence>
        <StyledSentence>
          The alternative bespoke solutions we see are usually rushed to the
          market to meet the pricing model agreed up front.
        </StyledSentence>
        <StyledSentence>
          <span>
            Modern Software changes all of this. We believe in agile and in
            co-operation.
          </span>
        </StyledSentence>
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "5rem 0",
          }}
        >
          {isDesktop ? (
            <div
              style={{
                flex: "1",
                display: "flex",
                width: "20rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="/ebrochure.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CallToActionButton variant="secondary" onClick={() => null}>
                  Download Brochure
                </CallToActionButton>
              </a>
            </div>
          ) : (
            <a
              href="/ebrochure.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CallToActionButton variant="secondary" onClick={() => null}>
                Download Brochure
              </CallToActionButton>
            </a>
          )}
        </div>
        <StyledSentence>
          Our model works with the premise of an{" "}
          <span>MVP (minimal viable product).</span>
        </StyledSentence>
        <StyledSentence>
          We discuss up front what your solution might look like in basic terms
          and we strip out the unnecessary features that can be added later on.
          We then work together in a <span>fully agile</span> fashion following
          the principles of <span>scrum</span> to deliver your MVP.
        </StyledSentence>
        <StyledSentence>
          Once your MVP is delivered the benefits are enormous, you can see your
          solution start to take shape and begin to get a feel for the more
          refined requirements.
        </StyledSentence>
        <StyledSentence>
          We then proceed to a second phase of the software delivery which looks
          in building upon the MVP to create your <span>final solution.</span>
        </StyledSentence>
        <StyledSentence>
          <span>
            We are delighted that you have visited our page, now please feel
            free to take the next step and get in touch!
          </span>
        </StyledSentence>
      </StyledContainer>
    </SubPageLayout>
  );
};

export default About;
