import styled from "styled-components";
import { colours } from "../src/utils/style.utils";

export const StyledSaaSHero = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  position: relative;
  min-height: ${(props) => (props.isDesktop ? "70vh" : "60vh")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.isDesktop ? "6rem 2rem" : "4rem 2rem")};
  overflow: hidden;
  background: ${colours.darkGrey};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: 1;
  }
`;

export const StyledSaaSHeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`;

export const StyledSaaSHeroTitle = styled.h1.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "3.5rem" : "2.5rem")};
  font-weight: 700;
  color: ${colours.white};
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
`;

export const StyledSaaSHeroSubtitle = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "1.25rem" : "1.1rem")};
  color: ${colours.lightGrey};
  margin: 0;
  line-height: 1.6;
`;

export const StyledSaaSSection = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  padding: ${(props) => (props.isDesktop ? "6rem 2rem" : "4rem 2rem")};
  background: ${colours.white};
  width: 100%;
`;

export const StyledSaaSContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledSaaSIntro = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`;

export const StyledSaaSIntroTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${colours.darkGrey};
  margin: 0 0 1rem 0;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const StyledSaaSIntroDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  color: ${colours.grey};
  line-height: 1.8;
  margin: 0;
`;

export const StyledSaaSGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledSaaSCard = styled.div`
  background: ${colours.white};
  border: 2px solid ${colours.lightGrey};
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    border-color: ${colours.pink};
  }
`;

export const StyledSaaSIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`;

export const StyledSaaSBadge = styled.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  background: ${colours.pink};
  color: ${colours.white};
  border-radius: 20px;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  width: fit-content;
`;

export const StyledSaaSTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colours.darkGrey};
  margin: 0 0 1rem 0;
`;

export const StyledSaaSDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: ${colours.grey};
  line-height: 1.7;
  margin: 0 0 1.5rem 0;
  flex-grow: 1;
`;

export const StyledSaaSFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

export const StyledSaaSFeature = styled.li`
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  color: ${colours.darkGrey};
  margin: 0 0 0.75rem 0;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: ${colours.darkGreen};
    font-weight: bold;
  }
`;

export const StyledSaaSCallToAction = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid ${colours.lightGrey};
`;
