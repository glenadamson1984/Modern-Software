import styled from "styled-components";
import { colours, media } from "../../../utils/style.utils";

export const StyledLogoTitle = styled.div`
  font-family: Inter, sans-serif;
  color: ${colours.white};
  font-size: 10px;

  ${media.forDesktop} {
    font-size: 16px;
  }
`;
