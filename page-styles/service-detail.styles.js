import styled from "styled-components";
import { colours, media } from "../src/utils/style.utils";

// Service Detail Hero Section
export const StyledServiceDetailHero = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  background: ${colours.white};
  padding: ${(props) => (props.isDesktop ? "6rem 4rem 4rem" : "4rem 2rem 3rem")};
  width: 100%;
`;

export const StyledServiceDetailHeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledServiceDetailTitle = styled.h1.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "56px" : "40px")};
  line-height: 1.2;
  font-weight: 700;
  color: ${colours.pink};
  margin: 0 0 2rem 0;
`;

export const StyledServiceDetailDescription = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "20px" : "18px")};
  line-height: 1.8;
  color: ${colours.grey};
  margin: 0;
  max-width: ${(props) => (props.isDesktop ? "800px" : "100%")};
`;

// How We Work Section
export const StyledHowWeWorkSection = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  background: ${colours.lightGrey};
  padding: ${(props) => (props.isDesktop ? "6rem 4rem" : "4rem 2rem")};
  width: 100%;
`;

export const StyledHowWeWorkContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const StyledHowWeWorkTitle = styled.h2.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "48px" : "36px")};
  line-height: 1.2;
  font-weight: 700;
  color: ${colours.black};
  margin: 0 0 ${(props) => (props.isDesktop ? "4rem" : "3rem")} 0;
  text-align: center;
`;

export const StyledProcessGrid = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isDesktop ? "repeat(2, 1fr)" : "1fr"};
  gap: ${(props) => (props.isDesktop ? "2.5rem" : "2rem")};
`;

// Process Step Card
export const StyledProcessStep = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  background: ${colours.white};
  border-radius: 16px;
  padding: ${(props) => (props.isDesktop ? "2.5rem" : "2rem")};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid ${colours.whiteBorder};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: ${colours.pink};
  }
`;

export const StyledProcessStepTitle = styled.h3.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "24px" : "20px")};
  font-weight: 700;
  color: ${colours.pink};
  margin: 0 0 1rem 0;
`;

export const StyledProcessStepDescription = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "16px" : "15px")};
  line-height: 1.7;
  color: ${colours.grey};
  margin: 0;
`;
