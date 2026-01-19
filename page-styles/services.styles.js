import styled from "styled-components";
import { colours, media } from "../src/utils/style.utils";

// Services Hero Section
export const StyledServicesHero = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  position: relative;
  width: 100%;
  min-height: ${(props) => (props.isDesktop ? "50vh" : "40vh")};
  background: ${colours.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.isDesktop ? "6rem 4rem" : "4rem 2rem")};
  text-align: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(35, 35, 35, 0.65) 0%,
      rgba(38, 38, 38, 0.6) 100%
    );
    z-index: 1;
  }
`;

export const StyledServicesHeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledServicesHeroTitle = styled.h1.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "72px" : "48px")};
  line-height: 1.1;
  font-weight: 700;
  color: ${colours.white};
  margin: 0 0 1.5rem 0;
`;

export const StyledServicesHeroSubtitle = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "22px" : "18px")};
  line-height: 1.6;
  color: ${colours.white};
  opacity: 0.9;
  margin: 0;
`;

// Services Grid Section
export const StyledServicesSection = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  background: ${colours.white};
  padding: ${(props) => (props.isDesktop ? "6rem 4rem" : "4rem 2rem")};
  width: 100%;
`;

export const StyledServicesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const StyledServicesGrid = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isDesktop ? "repeat(2, 1fr)" : "1fr"};
  gap: ${(props) => (props.isDesktop ? "3rem" : "2rem")};
  margin-top: ${(props) => (props.isDesktop ? "4rem" : "2rem")};
`;

// Service Card
export const StyledServiceCard = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  display: flex;
  flex-direction: column;
  background: ${colours.white};
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid ${colours.whiteBorder};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
    border-color: ${colours.pink};
    
    img {
      transform: scale(1.05);
    }
  }
  
  &:active {
    transform: translateY(-4px);
  }
`;

export const StyledServiceImageWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  position: relative;
  width: 100%;
  height: ${(props) => (props.isDesktop ? "280px" : "220px")};
  overflow: hidden;
  background: ${colours.lightGrey};
`;

export const StyledServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledServiceContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  padding: ${(props) => (props.isDesktop ? "2.5rem" : "2rem")};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const StyledServiceBadge = styled.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(255, 64, 139, 0.1);
  color: ${colours.pink};
  border-radius: 20px;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: fit-content;
`;

export const StyledServiceTitle = styled.h2.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "28px" : "24px")};
  font-weight: 700;
  color: ${colours.black};
  margin: 0;
  line-height: 1.3;
  
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${colours.pink};
    }
  }
`;

export const StyledServiceDescription = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "16px" : "15px")};
  line-height: 1.7;
  color: ${colours.grey};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
