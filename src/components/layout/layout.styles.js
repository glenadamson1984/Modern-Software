import styled from "styled-components";
import { media } from "../../utils/style.utils";

export const StyledBody = styled.body`
  display: flex;
  flex-direction: column;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0.5rem 1rem;

  ${media.forDesktop} {
    margin: 1rem 8rem;
  }

  ${media.forDesktopWideScreen} {
    margin: 1rem 8rem;
  }

  ${media.forBigDesktopAndUp} {
    margin: 1rem 17rem;
  }
`;

export const StyledNavigationContainer = styled.div`
  display: flex;
  align-items: center;
`;
