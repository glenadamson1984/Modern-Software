import styled from "styled-components";
import { colours } from "../../../utils/style.utils";

export const StyledContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  align-items: center;
  z-index: 1;
  background: white;
`;

export const StyledIconContainer = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
`;

export const StyledNavigationContainer = styled.div`
  position: fixed;
  left: 10px;
  top: 60px;
`;

export const StyledNavigationLink = styled.div`
  color: ${colours.black};
  font: normal normal normal 32px/42px Inter;
  width: 100vw;
  border-bottom: 2px solid;
  margin-top: 2px;
  border-color: ${colours.whiteBorder};

  &:hover {
    color: ${colours.pink};
  }
`;
