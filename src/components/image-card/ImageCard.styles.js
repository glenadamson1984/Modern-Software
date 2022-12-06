import styled from "styled-components";
import { colours } from "../../utils/style.utils";

export const StyledTitle = styled.div`
  text-align: center;
  font: normal normal bold 28px/28px Baloo;
  letter-spacing: 0px;
  color: ${colours.pink};
`;

export const StyledDescription = styled.div`
  padding: 0.5rem;
  margin: ${(props) => (props.isDesktop ? "5rem" : "0")};
  text-align: center;
  font: normal normal normal 22px/22px Baloo;
  letter-spacing: 0px;
  color: ${colours.black};
`;
