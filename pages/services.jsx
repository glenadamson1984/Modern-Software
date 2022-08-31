import React from "react";
import { colours } from "../src/utils/style.utils";

const Services = () => {
  return (
    <>
      <div
        style={{
          height: "200px",
          background: `#262626`,
          textAlign: "center",
          font: "normal normal bold 48px/63px Roboto",
          letterSpacing: "0px",
          color: "#FFFFFF",
          opacity: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Services</div>
        <div
          style={{
            width: "100px",
            borderBottom: "5px solid",
            borderBottomColor: `${colours.red}`,
          }}
        />
      </div>
      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Services Page - Currently under construction
      </div>
    </>
  );
};

export default Services;
