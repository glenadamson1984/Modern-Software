import React from "react";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import { StyledDescription, StyledTitle } from "./ImageCard.styles";

const ImageCard = ({
  position,
  imageUrl,
  title,
  description,
  height,
  width,
}) => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  const flexDirectionResult = isDesktop ? "row" : "column";

  if (!isDesktop) {
    position = "left";
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: flexDirectionResult,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "5rem",
      }}
    >
      {position === "left" ? (
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription isDesktop={isDesktop}>
            {description}
          </StyledDescription>
        </div>
      ) : null}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
        }}
      >
        <div
          style={{
            padding: "0.5rem",
          }}
        >
          <Image
            src={imageUrl}
            alt={title}
            width={width ? width : 400}
            height={height ? height : 300}
          />
        </div>
      </div>
      {position === "right" ? (
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription isDesktop={isDesktop}>
            {description}
          </StyledDescription>
        </div>
      ) : null}
    </div>
  );
};

export default ImageCard;
