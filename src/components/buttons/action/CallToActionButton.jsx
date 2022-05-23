import React from "react";
import styled from "styled-components";
import { colours } from "../../../utils/style.utils";

const StyledCallToAction = styled.div`
  background: ${colours.red};
  border-radius: 30px;
  opacity: 1;
  padding: 1rem;

  &:hover {
    background: ${colours.white};
    color: ${colours.red};
`;

const StyledCallToActionText = styled.div`
  text-align: center;
  font: normal normal medium 20px/26px Roboto;
  font-weight: bold;
  font-size: 20px;
  padding: 0 1rem;
`;

const CallToActionButton = ({ children }) => {
  return (
    <StyledCallToAction>
      <StyledCallToActionText>{children}</StyledCallToActionText>
    </StyledCallToAction>
  );
};

export default CallToActionButton;
