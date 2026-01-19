import styled from "styled-components";
import { colours, media } from "../../../utils/style.utils";

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9998;
  backdrop-filter: blur(4px);
`;

export const StyledContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 85%;
  max-width: 400px;
  background: ${colours.darkGrey};
  z-index: 9999;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
`;

export const StyledIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const StyledCloseButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(90deg);
  }
`;

export const StyledNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  flex: 1;
`;

export const StyledNavigationLink = styled.div`
  color: ${colours.white};
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  padding: 1.25rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
  letter-spacing: 0.3px;

  &:hover {
    color: ${colours.pink};
    background: rgba(255, 255, 255, 0.05);
    border-left-color: ${colours.pink};
    padding-left: 2.5rem;
  }

  &:active {
    background: rgba(255, 255, 255, 0.08);
  }
`;
