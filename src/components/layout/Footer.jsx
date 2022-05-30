import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";

const Footer = () => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  if (isDesktop) {
    return <></>;
  }

  return (
    <div
      style={{
        backgroundColor: "#232323",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0",
      }}
    >
      {/*logo needs to be bigger here*/}
      <Logo />
      <div
        style={{
          padding: "2rem 0",
          font: "normal normal medium 20px/26px Roboto",
        }}
      >
        Contact Us
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "2rem 2rem",
          font: "normal normal normal 18px/24px Roboto",
        }}
      >
        <div style={{ maxWidth: "50%", color: "#E51F28" }}>Start a Project</div>
        <div style={{ maxWidth: "50%" }}>info@modern-software.co.uk</div>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "2rem 2rem",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "#6B6B6B",
        }}
      >
        <div>
          <div
            style={{
              font: "normal normal medium 20px/26px Roboto",
              paddingBottom: "1rem",
            }}
          >
            NI Office
          </div>
          <div
            style={{
              font: "normal normal normal 16px/26px Roboto",
              color: "#BFBFBF",
            }}
          >
            <Image
              src="/images/map-pin.png"
              alt="Modern Software"
              width={20}
              height={20}
            />
            home address
            <div style={{ paddingLeft: "20px" }}>portadown, bt66666</div>
          </div>
          <div
            style={{
              font: "normal normal normal 16px/26px Roboto",
              paddingTop: "1rem",
              color: "#BFBFBF",
            }}
          >
            <Image
              src="/images/phone.png"
              alt="Modern Software"
              width={20}
              height={20}
            />
            02938735647
          </div>
        </div>
        <div>
          <div
            style={{
              font: "normal normal medium 20px/26px Roboto",
              paddingBottom: "1rem",
            }}
          >
            England Office
          </div>

          <div
            style={{
              font: "normal normal normal 16px/26px Roboto",
              color: "#BFBFBF",
            }}
          >
            <Image
              src="/images/map-pin.png"
              alt="Modern Software"
              width={20}
              height={20}
            />
            home address
            <div style={{ paddingLeft: "20px" }}>portadown, bt66666</div>
          </div>
          <div
            style={{
              font: "normal normal normal 16px/26px Roboto",
              paddingTop: "1rem",
              color: "#BFBFBF",
            }}
          >
            <Image
              src="/images/phone.png"
              alt="Modern Software"
              width={20}
              height={20}
            />
            02938735647
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "2rem 4rem",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Image
          src="/images/facebook.png"
          alt="Modern Software"
          width={40}
          height={40}
        />
        <Image
          src="/images/instagram.png"
          alt="Modern Software"
          width={40}
          height={40}
        />
        <Image
          src="/images/twitter.png"
          alt="Modern Software"
          width={40}
          height={40}
        />
        <Image
          src="/images/linkedin.png"
          alt="Modern Software"
          width={40}
          height={40}
        />
      </div>
      {/*commenting these links out for now*/}
      {/*<div>contact privacy notice cookie policy</div>*/}
      <div
        style={{
          font: "normal normal normal 16px/21px Roboto",
          color: "#BFBFBF",
        }}
      >
        Copyright @2022 Modern Software
      </div>
    </div>
  );
};

export default Footer;
