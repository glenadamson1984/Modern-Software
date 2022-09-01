import React from "react";
import { StyledSubHeader, StyledUnderline } from "./subpage-layout";
import PropTypes from "prop-types";

const SubPageLayout = ({ children, subTitle }) => {
  return (
    <>
      <StyledSubHeader>
        <div>{subTitle}</div>
        <StyledUnderline />
      </StyledSubHeader>
      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default SubPageLayout;

SubPageLayout.propTypes = {
  subTitle: PropTypes.string,
};
