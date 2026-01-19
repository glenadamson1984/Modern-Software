import styled from "styled-components";
import { colours, media } from "../src/utils/style.utils";

// Featured Work Hero Section
export const StyledFeaturedWorkHero = styled.section.withConfig({
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

export const StyledFeaturedWorkContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledFeaturedWorkTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "72px" : "48px")};
  line-height: 1.1;
  font-weight: 700;
  color: ${colours.white};
  margin: 0 0 1.5rem 0;
`;

export const StyledFeaturedWorkSubtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "22px" : "18px")};
  line-height: 1.6;
  color: ${colours.white};
  opacity: 0.9;
  margin: 0;
`;

// Portfolio Projects Section
export const StyledPortfolioSection = styled.section`
  background: ${colours.white};
  padding: ${(props) =>
    props.isDesktop ? "3rem 4rem 6rem" : "2rem 2rem 4rem"};
  width: 100%;
`;

export const StyledPortfolioContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const StyledPortfolioSectionHeader = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  text-align: center;
  margin-bottom: ${(props) => (props.isDesktop ? "3rem" : "2rem")};
`;

export const StyledPortfolioSectionTitle = styled.h2.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "48px" : "36px")};
  line-height: 1.2;
  font-weight: 700;
  color: ${colours.black};
  margin: 0 0 0.5rem 0;
`;

export const StyledPortfolioSectionSubtitle = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "18px" : "16px")};
  line-height: 1.6;
  color: ${colours.grey};
  margin: 0;
`;

// Portfolio Project Card
export const StyledProjectCard = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  display: flex;
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  gap: ${(props) => (props.isDesktop ? "4rem" : "2rem")};
  align-items: ${(props) => (props.isDesktop ? "center" : "flex-start")};
  padding: ${(props) => (props.isDesktop ? "4rem 2rem" : "3rem 1rem")};
  border-bottom: 1px solid ${colours.whiteBorder};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    transform: translateY(-8px);
    background: ${colours.lightGrey};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
    border-bottom-color: transparent;
  }

  &:active {
    transform: translateY(-4px);
  }
`;

export const StyledProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const StyledProjectHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0;
`;

export const StyledProjectTitleContainer = styled.div`
  flex: 1;
`;

export const StyledProjectTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "48px" : "36px")};
  line-height: 1.2;
  font-weight: 700;
  color: ${colours.black};
  margin: 0 0 1rem 0;
  transition: color 0.3s ease;
`;

export const StyledProjectDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "18px" : "16px")};
  line-height: 1.6;
  color: ${colours.grey};
  margin: 0;
`;

export const StyledProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const StyledProjectTag = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${colours.black};
  background: ${colours.lightGrey};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  display: inline-block;
`;

export const StyledProjectImage = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  flex: ${(props) => (props.isDesktop ? "0 0 500px" : "1")};
  max-width: ${(props) => (props.isDesktop ? "500px" : "100%")};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  background: ${colours.lightGrey};
  line-height: 0;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    vertical-align: bottom;
  }
`;

// Testimonial Ticker Section
export const StyledTestimonialTicker = styled.section`
  background: ${colours.white};
  padding: ${(props) => (props.isDesktop ? "2rem 0" : "1.5rem 0")};
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const StyledTickerContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const StyledTickerTrack = styled.div`
  display: flex;
  gap: 3rem;
  animation: scroll ${(props) => props.duration || "60s"} linear infinite;
  width: fit-content;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  &:hover {
    animation-play-state: paused;
  }
`;

export const StyledTestimonialCard = styled.div`
  flex-shrink: 0;
  background: ${colours.lightGrey};
  border-radius: 16px;
  padding: ${(props) => (props.isDesktop ? "2rem 2.5rem" : "1.5rem 2rem")};
  min-width: ${(props) => (props.isDesktop ? "450px" : "320px")};
  max-width: ${(props) => (props.isDesktop ? "450px" : "320px")};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid ${colours.whiteBorder};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

export const StyledTestimonialStars = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
  color: #ffd700;
  font-size: 18px;
`;

export const StyledTestimonialQuote = styled.p`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "16px" : "14px")};
  line-height: 1.6;
  color: ${colours.black};
  margin: 0 0 1.5rem 0;
  font-style: italic;
`;

export const StyledTestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const StyledTestimonialName = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${colours.black};
`;

export const StyledTestimonialCompany = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: ${colours.grey};
`;
