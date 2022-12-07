import styled from "styled-components";
import { colours } from "../../../utils/style.utils";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledNav = styled.div`
  @keyframes example {
    from {
      margin: 0 1rem;
    }
    to {
      margin: -0.5rem 1rem;
    }
  }

  text-align: left;
  font: normal normal normal 20px/26px Baloo;
  letter-spacing: 0px;
  color: ${(props) => (props.active ? colours.pink : colours.white)};
  color: ${colours.white};
  text-transform: capitalize;
  margin: 0 1rem;
  padding: 0.25rem;
  border-color: ${(props) => (props.active ? colours.pink : colours.white)};

  &:hover {
    color: ${colours.pink};
    animation-name: example;
    animation-duration: 1s;
  }
`;
