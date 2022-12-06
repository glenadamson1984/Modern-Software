import styled from "styled-components";
import { colours } from "../../utils/style.utils";

export const StyledSubHeader = styled.div`
  height: 200px;
  background: ${colours.green};
  text-align: center;
  font: normal normal bold 48px/63px Baloo;
  letter-spacing: 0px;
  color: ${colours.white};
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledUnderline = styled.div`
  width: 100px;
  border-bottom: 5px solid;
  border-bottom-color: ${colours.pink};
`;
