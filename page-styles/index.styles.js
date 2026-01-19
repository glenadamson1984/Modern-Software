import styled from "styled-components";
import { colours, media } from "../src/utils/style.utils";

// Hero Section Styles
export const StyledHeroBackground = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  position: relative;
  width: 100%;
  min-height: ${(props) => (props.isDesktop ? "90vh" : "80vh")};
  background: ${colours.darkGrey};
  display: flex;
  align-items: center;
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

export const StyledHeroContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: ${(props) =>
    props.isDesktop ? "8rem 4rem 4rem" : "4rem 2rem 2rem"};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledHeroTitle = styled.h1`
  font-family: "Baloo", serif;
  font-size: ${(props) => (props.isDesktop ? "72px" : "42px")};
  line-height: ${(props) => (props.isDesktop ? "1.1" : "1.2")};
  font-weight: 700;
  color: ${colours.white};
  margin: 0 0 2rem 0;
  max-width: ${(props) => (props.isDesktop ? "800px" : "100%")};
`;

export const StyledHeroDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "22px" : "18px")};
  line-height: ${(props) => (props.isDesktop ? "1.6" : "1.5")};
  color: ${colours.white};
  margin: 0 0 3rem 0;
  max-width: ${(props) => (props.isDesktop ? "700px" : "100%")};
  opacity: 0.95;
`;

export const StyledHeroButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

export const StyledTrustBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: ${colours.white};
  opacity: 0.8;
  margin-top: 2rem;
`;

// Two Column Layout
export const StyledTwoColumnLayout = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  display: flex;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  gap: ${(props) => (props.isDesktop ? "4rem" : "0")};
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  padding: ${(props) => (props.isDesktop ? "4rem" : "2rem 1rem")};
`;

export const StyledMainContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  flex: ${(props) => (props.isDesktop ? "1.4" : "1")};
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const StyledSidebar = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  flex: ${(props) => (props.isDesktop ? "0.6" : "1")};
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

// Features Section
export const StyledFeaturesSection = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  position: relative;
  background: ${colours.lightGrey};
  padding: ${(props) => (props.isDesktop ? "6rem 4rem" : "4rem 2rem")};
  width: 100%;
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
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0.8) 100%
    );
    z-index: 1;
  }
`;

export const StyledFeaturesContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledSectionTitle = styled.h2.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop" && prop !== "light",
})`
  font-family: "Baloo", serif;
  font-size: ${(props) => (props.isDesktop ? "56px" : "36px")};
  line-height: 1.2;
  font-weight: 700;
  color: ${(props) => (props.light ? colours.white : colours.black)};
  margin: 0 0 1.5rem 0;
`;

export const StyledSectionDescription = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop" && prop !== "light",
})`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "20px" : "18px")};
  line-height: 1.6;
  color: ${(props) => (props.light ? colours.white : colours.black)};
  margin: 0 0 3rem 0;
  opacity: ${(props) => (props.light ? "0.9" : "0.8")};
`;

export const StyledFeaturesGrid = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isDesktop ? "repeat(2, 1fr)" : "1fr"};
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const StyledFeatureCard = styled.div`
  background: ${colours.white};
  padding: 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledFeatureIcon = styled.div`
  font-size: 48px;
  margin-bottom: 1rem;
`;

export const StyledFeatureTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: ${colours.black};
  margin: 0;
`;

export const StyledFeatureDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: ${colours.grey};
  margin: 0;
`;

// Featured Work Section (Sidebar)
export const StyledFeaturedWorkSection = styled.div`
  position: relative;
  background: ${colours.white};
  padding: 3rem 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
`;

export const StyledFeaturedWorkTitle = styled.h2`
  font-family: "Baloo", serif;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 700;
  color: ${colours.black};
  margin: 0 0 1rem 0;
`;

export const StyledFeaturedWorkDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: ${colours.grey};
  margin: 0 0 2rem 0;
`;

export const StyledProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const StyledProjectItem = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${colours.whiteBorder};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const StyledProjectBullet = styled.div`
  width: 8px;
  height: 8px;
  background: ${colours.darkGreen};
  border-radius: 50%;
  margin-top: 8px;
  flex-shrink: 0;
`;

export const StyledProjectContent = styled.div`
  flex: 1;
`;

export const StyledProjectTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: ${colours.black};
  margin: 0 0 0.5rem 0;
`;

export const StyledProjectDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${colours.grey};
  margin: 0 0 0.75rem 0;
`;

export const StyledProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const StyledTag = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  color: ${colours.darkGreen};
  background: ${colours.lightGrey};
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
`;

export const StyledProjectImage = styled.div`
  width: 120px;
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;
  background: ${colours.lightGrey};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Process Section
export const StyledProcessSection = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  position: relative;
  background: ${colours.lightGrey};
  padding: ${(props) => (props.isDesktop ? "6rem 4rem" : "4rem 2rem")};
  width: 100%;
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
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0.8) 100%
    );
    z-index: 1;
  }
`;

export const StyledProcessContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const StyledProcessGrid = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isDesktop ? "repeat(2, 1fr)" : "1fr"};
  gap: 2rem;
  margin: 3rem 0;
`;

export const StyledProcessStep = styled.div`
  background: ${colours.white};
  padding: 2.5rem;
  border-radius: 8px;
  text-align: left;
`;

export const StyledProcessNumber = styled.div`
  font-family: "Baloo", serif;
  font-size: 48px;
  font-weight: 700;
  color: ${colours.darkGreen};
  margin-bottom: 1rem;
`;

export const StyledProcessTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: ${colours.black};
  margin: 0 0 0.75rem 0;
`;

export const StyledProcessDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: ${colours.grey};
  margin: 0;
`;

// Contact CTA Section
export const StyledContactSection = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  background: ${colours.darkGrey};
  padding: ${(props) => (props.isDesktop ? "6rem 4rem" : "4rem 2rem")};
  width: 100%;
  text-align: center;
`;

export const StyledContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: ${colours.white};
  opacity: 0.9;
`;

export const StyledContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

// Legacy styles for backward compatibility
export const StyledOurServicesContainer = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.isDesktop ? "flex-start" : "center")};
  flex-direction: column;
  background: white;
  padding-bottom: 2rem;
`;

export const StyledOurServicesContainerDesktop = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  padding-bottom: 2rem;
`;

export const StyledRedLine = styled.div`
  border-top: 5px solid ${colours.pink};
  width: ${(props) => (props.isDesktop ? "10%" : "30%")};
`;

export const StyledRedLineDesktop = styled.div`
  border-top: 5px solid ${colours.pink};
  width: 30%;
  position: relative;
  left: 6rem;
`;

export const StyledOurServicesTitle = styled.div`
  text-align: center;
  font: normal normal bold 32px/42px Inter;
  letter-spacing: 0px;
  color: black;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const StyledOurServicesTitleDesktop = styled.div`
  text-align: center;
  font: normal normal bold 48px/63px Inter;
  letter-spacing: 0px;
  color: #232323;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const StyledHeroDesktop = styled.div`
  text-align: left;
  font: normal normal bold 60px/79px Inter;
  letter-spacing: 0px;
  opacity: 1;
  color: ${colours.black};
`;

export const StyledHeroTitleRed = styled.span`
  color: ${colours.pink};
`;

export const StyledOurServicesDescriptionDesktop = styled.div`
  text-align: center;
  font: normal normal normal 18px/30px Inter;
  letter-spacing: 0px;
  color: ${colours.black};
  opacity: 1;

  ${media.forDesktop} {
    margin: 0 18rem;
  }

  ${media.forDesktopWideScreen} {
    margin: 0 18rem;
  }

  ${media.forBigDesktopAndUp} {
    margin: 0 27rem;
  }
`;

export const StyledServiceRow = styled.div`
  display: flex;
  justify-content: space-around;
  color: black;
  margin-bottom: 5rem;
`;

export const StyledServiceRowDesktop = styled.div`
  display: flex;
  justify-content: space-around;
  color: black;
  margin: 5rem 10rem;
`;

export const StyledServiceGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const StyledServiceGridTitle = styled.div`
  text-align: center;
  font: normal normal bold 20px/30px Inter;
  letter-spacing: 0px;
  color: #232323;
  opacity: 1;
  margin-top: 0.5rem;
`;

export const StyledNinjaContainerDesktop = styled.div`
  display: flex;
  position: absolute;
  height: 700px;
  width: 700px;
  right: 100px;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

export const StyledNinjaContainer = styled.div`
  display: flex;
  position: relative;
  height: 350px;
  justify-content: center;
  align-items: center;
  z-index: 0;
  margin-top: 2rem;
`;
