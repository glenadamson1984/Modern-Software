import React from "react";
import { StyledSubHeader, StyledUnderline } from "./subpage-layout";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colours } from "../../utils/style.utils";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: ${colours.white} 0 0 no-repeat padding-box;
  opacity: 1;
  color: ${colours.black};
`;

const SubPageLayout = ({ children, subTitle }) => {
  return (
    <>
      <StyledSubHeader>
        <div>{subTitle}</div>
        <StyledUnderline />
      </StyledSubHeader>
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};

export default SubPageLayout;

SubPageLayout.propTypes = {
  subTitle: PropTypes.string,
};
