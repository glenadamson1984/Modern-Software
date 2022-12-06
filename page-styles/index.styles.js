import styled from "styled-components";
import { colours, media } from "../src/utils/style.utils";

export const StyledHeroBackground = styled.div`
  position: relative;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${(props) => (props.isDesktop ? "756px" : "773px")};
`;

export const StyledHeroContainer = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.isDesktop ? "flex-start" : "center")};
  top: ${(props) => (props.isDesktop ? "15rem" : "2rem")};
  width: ${(props) => (props.isDesktop ? "40%" : "100%")};
  flex-direction: column;

  ${media.forDesktop} {
    margin: 0 8rem;
  }

  ${media.forDesktopWideScreen} {
    margin: 0 8rem;
  }

  ${media.forBigDesktopAndUp} {
    margin: 0 17rem;
  }
`;

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

export const StyledHeroTitle = styled.div`
  text-align: center;
  font: normal normal bold 32px/42px Baloo;
  letter-spacing: 0px;
  color: ${colours.white};
  margin-top: 2rem;
`;

export const StyledOurServicesTitle = styled.div`
  text-align: center;
  font: normal normal bold 32px/42px Baloo;
  letter-spacing: 0px;
  color: black;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const StyledOurServicesTitleDesktop = styled.div`
  text-align: center;
  font: normal normal bold 48px/63px Baloo;
  letter-spacing: 0px;
  color: #232323;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const StyledHeroDesktop = styled.div`
  text-align: left;
  font: normal normal bold 60px/79px Baloo;
  letter-spacing: 0px;
  opacity: 1;
`;

export const StyledHeroTitleRed = styled.span`
  color: ${colours.pink};
`;

export const StyledHeroDescription = styled.div`
  text-align: center;
  font: normal normal normal 18px/30px Baloo;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin: 2rem 0.25rem;
`;

export const StyledHeroDescriptionDesktop = styled.div`
  text-align: left;
  font: normal normal normal 18px/30px Baloo;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin: 2rem 0;
`;

export const StyledOurServicesDescriptionDesktop = styled.div`
  text-align: center;
  font: normal normal normal 18px/30px Baloo;
  letter-spacing: 0px;
  color: #bfbfbf;
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
  font: normal normal bold 20px/30px Baloo;
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
  margin-top: 2rem;
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
