import styled from "styled-components";
import { colours } from "../../../utils/style.utils";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledNav = styled.div`
  text-align: left;
  font: normal normal normal 20px/26px Roboto;
  letter-spacing: 0px;
  color: ${(props) => (props.active ? colours.pink : colours.white)};
  text-transform: capitalize;
  margin: 0 1rem;
  border-top: ${(props) => (props.active ? "2px solid" : "none")};
  border-bottom: ${(props) => (props.active ? "2px solid" : "none")};
  padding: 0.25rem;
  border-color: ${(props) => (props.active ? colours.pink : colours.white)};

  &:hover {
    border-top: 2px solid;
    border-bottom: 2px solid;
  }
`;
