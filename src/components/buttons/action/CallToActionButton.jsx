import React from "react";
import styled from "styled-components";
import { colours } from "../../../utils/style.utils";

const StyledCallToAction = styled.div.attrs((props) => ({
  "data-variant": props.variant,
}))`
  background: ${(props) => {
    const variant = props["data-variant"] || "primary";
    return variant === "darkGreen"
      ? `${colours.darkGreen}`
      : variant === "secondary"
      ? `${colours.white}`
      : `${colours.pink}`;
  }};
  border-radius: 30px;
  opacity: 1;
  padding: 1rem;
  cursor: pointer;
  color: ${(props) => {
    const variant = props["data-variant"] || "primary";
    return variant === "secondary" ? `${colours.black}` : `${colours.white}`;
  }};
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => {
      const variant = props["data-variant"] || "primary";
      return variant === "secondary"
        ? `${colours.darkGreen}`
        : variant === "darkGreen"
        ? `${colours.pink}`
        : `${colours.darkGreen}`;
    }};
    color: ${(props) => {
      const variant = props["data-variant"] || "primary";
      return variant === "secondary" ? `${colours.white}` : `${colours.white}`;
    }};
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
`;

const StyledCallToActionText = styled.div`
  text-align: center;
  font: normal normal medium 20px/26px Inter;
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
      data-variant={variant}
      onClick={onClick}
    >
      <StyledCallToActionText>{children}</StyledCallToActionText>
    </StyledCallToAction>
  );
};

export default CallToActionButton;
