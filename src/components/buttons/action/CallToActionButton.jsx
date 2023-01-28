import React from "react";
import styled from "styled-components";
import { colours } from "../../../utils/style.utils";

const StyledCallToAction = styled.div`
  background: ${colours.pink};
  border-radius: 30px;
  opacity: 1;
  padding: 1rem;
  cursor: pointer;
  color: ${colours.white};

  &:hover {
    background: ${(props) =>
      props.variant === "secondary" ? `${colours.white}` : `${colours.black}`};
    color: ${(props) =>
      props.variant === "secondary" ? `${colours.black}` : `${colours.white}`};
  }
`;

const StyledCallToActionText = styled.div`
  text-align: center;
  font: normal normal medium 20px/26px Baloo;
  font-weight: bold;
  font-size: 20px;
  padding: 0 1rem;
`;

const CallToActionButton = ({
  children,
  variant = "primary",
  onClick,
  animate = false,
}) => {
  return (
    <StyledCallToAction
      className={animate ? "animate-bounce" : null}
      variant={variant}
      onClick={onClick}
      disable={true}
    >
      <StyledCallToActionText>{children}</StyledCallToActionText>
    </StyledCallToAction>
  );
};

export default CallToActionButton;
