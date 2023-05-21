import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { colours } from "../../utils/style.utils";

export const StyledImageContainer = styled.div`
  @keyframes zoom {
    from {
      top: 0px;
    }
    to {
      top: -20px;
    }
  }

  position: absolute;

  &:hover {
    cursor: pointer;
    animation-name: zoom;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
`;

export const StyledCard = styled.div`
  border: 1px solid black;
  overflow: hidden;
  width: 600px;
  height: 300px;
  position: relative;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 200px;
  }
`;
export const StyledTitle = styled.div`
  text-align: center;
  font: normal normal bold 28px/28px Inter;
  letter-spacing: 0px;
  color: ${colours.pink};
  padding-bottom: 1rem;
`;

export const StyledContainer = styled.div`
  padding: 2.5rem 0;
`;

const ServiceCard = ({ title, imageUrl }) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledCard>
        <StyledImageContainer>
          <Image src={imageUrl} alt={title} width={600} height={400} />
        </StyledImageContainer>
      </StyledCard>
    </StyledContainer>
  );
};

export default ServiceCard;
