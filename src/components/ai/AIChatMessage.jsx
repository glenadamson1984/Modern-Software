import React from "react";
import styled from "styled-components";
import { colours } from "../../utils/style.utils";

const StyledMessage = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  justify-content: ${(props) => (props.$isUser ? "flex-end" : "flex-start")};
`;

const StyledMessageBubble = styled.div`
  max-width: 70%;
  padding: 1rem 1.25rem;
  border-radius: 16px;
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  word-wrap: break-word;

  background: ${(props) => (props.$isUser ? colours.pink : colours.lightGrey)};
  color: ${(props) => (props.$isUser ? colours.white : colours.darkGrey)};
  border-bottom-right-radius: ${(props) => (props.$isUser ? "4px" : "16px")};
  border-bottom-left-radius: ${(props) => (props.$isUser ? "16px" : "4px")};
`;

const AIChatMessage = ({ message, isUser }) => {
  return (
    <StyledMessage $isUser={isUser}>
      <StyledMessageBubble $isUser={isUser}>{message}</StyledMessageBubble>
    </StyledMessage>
  );
};

export default AIChatMessage;
