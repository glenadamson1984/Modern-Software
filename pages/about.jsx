import React, { useState } from "react";
import Image from "next/image";
import useWindowSize from "../src/hooks/useWindowSize";
import CallToActionButton from "../src/components/buttons/action/CallToActionButton";
import styled from "styled-components";
import { colours, media } from "../src/utils/style.utils";
import SEO from "../src/components/SEO";
import PartnersSection from "../src/components/partners/PartnersSection";

// About Hero Section
const StyledAboutHero = styled.section.withConfig({
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

const StyledAboutHeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledAboutHeroTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "72px" : "48px")};
  line-height: 1.1;
  font-weight: 700;
  color: ${colours.white};
  margin: 0 0 1.5rem 0;
`;

const StyledAboutHeroSubtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "22px" : "18px")};
  line-height: 1.6;
  color: ${colours.white};
  opacity: 0.9;
  margin: 0;
`;

const StyledAboutSection = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  background: ${colours.white};
  padding: ${(props) => (props.isDesktop ? "6rem 4rem" : "4rem 2rem")};
  width: 100%;
`;

const StyledAboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledAboutIntro = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const StyledAboutTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "48px" : "36px")};
  font-weight: 700;
  color: ${colours.black};
  margin-bottom: 1.5rem;
`;

const StyledAboutText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "20px" : "18px")};
  line-height: 1.6;
  color: ${colours.black};
  opacity: 0.8;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const StyledVideoContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }
`;

const StyledVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  background: ${colours.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPlayButton = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: ${(props) => (props.show ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;
  z-index: 2;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledPlayIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 24px solid ${colours.darkGreen};
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
  margin-left: 4px;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledVideoCaption = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: ${colours.grey};
`;

const StyledVideoHint = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-family: "Inter", sans-serif;
  font-size: 14px;
  display: ${(props) => (props.show ? "none" : "block")};
  z-index: 2;
`;

// About Content Sections
const StyledAboutContentSection = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  background: ${colours.white};
  padding: ${(props) => (props.isDesktop ? "6rem 4rem" : "4rem 2rem")};
  width: 100%;
`;

const StyledAboutContentContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const StyledAboutContentGrid = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isDesktop ? "1fr 1fr" : "1fr"};
  gap: ${(props) => (props.isDesktop ? "4rem" : "3rem")};
  align-items: ${(props) => (props.isDesktop ? "center" : "flex-start")};
`;

const StyledAboutContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledAboutContentHeadline = styled.h2.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "42px" : "32px")};
  line-height: 1.2;
  font-weight: 700;
  color: ${colours.black};
  margin: 0 0 1.5rem 0;
`;

const StyledAboutContentText = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  font-family: "Inter", sans-serif;
  font-size: ${(props) => (props.isDesktop ? "18px" : "16px")};
  line-height: 1.8;
  color: ${colours.grey};
  margin: 0;
`;

const StyledAboutImageWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDesktop",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isDesktop
      ? ""
      : `
    order: -1;
    margin-bottom: 2rem;
  `}
`;

const StyledAboutImage = styled.div`
  position: relative;
  width: ${(props) => (props.isDesktop ? "400px" : "300px")};
  height: ${(props) => (props.isDesktop ? "400px" : "300px")};
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }

  img,
  span {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`;

const StyledBrochureButtonWrapper = styled.div`
  margin-top: 1rem;
`;

const About = () => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <SEO
        title="About Us - Local Web Designer Northern Ireland | Website Designer Portadown"
        description="Modern Software is a local website design company based in Northern Ireland, serving small businesses across Portadown, Banbridge, Lurgan, Armagh, and Craigavon. We help local businesses grow with professional, affordable websites."
        keywords="local web designer Northern Ireland, website designer Portadown, small business web designer NI, about Modern Software, Northern Ireland web design company"
        canonicalUrl="/about"
      />
      {/* About Hero Section */}
      <StyledAboutHero isDesktop={isDesktop}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            opacity: 0.6,
          }}
        >
          <source src="/videos/853878-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <StyledAboutHeroContent>
          <StyledAboutHeroTitle isDesktop={isDesktop}>
            Who are we?
          </StyledAboutHeroTitle>
          <StyledAboutHeroSubtitle isDesktop={isDesktop}>
            Modern software solutions designed with intent
          </StyledAboutHeroSubtitle>
        </StyledAboutHeroContent>
      </StyledAboutHero>

      {/* About Intro Section */}
      <StyledAboutSection isDesktop={isDesktop}>
        <StyledAboutContainer>
          <StyledAboutIntro>
            <StyledAboutTitle isDesktop={isDesktop}>
              Modern Software was established in 2021
            </StyledAboutTitle>
            <StyledAboutText isDesktop={isDesktop}>
              We aim to provide modern software solutions to everyday businesses.
              We believe in agile development and close collaboration with our
              clients.
            </StyledAboutText>
            <StyledAboutText
              isDesktop={isDesktop}
              style={{ fontWeight: 500, marginTop: "1rem", color: colours.black, opacity: 1 }}
            >
              Want to check out how we do things? Watch the video below to learn
              more about our approach and team.
            </StyledAboutText>
          </StyledAboutIntro>
          <StyledVideoContainer onClick={handleVideoClick}>
            <StyledVideoWrapper>
              <StyledVideo
                ref={videoRef}
                src="/assets/about.mp4"
                controls={isPlaying}
                onEnded={handleVideoEnd}
                playsInline
              />
              <StyledPlayButton show={isPlaying}>
                <StyledPlayIcon />
              </StyledPlayButton>
              <StyledVideoHint show={isPlaying}>
                Click to play video
              </StyledVideoHint>
            </StyledVideoWrapper>
          </StyledVideoContainer>
          <StyledVideoCaption>
            Learn about our process, team, and how we deliver exceptional
            software solutions
          </StyledVideoCaption>
        </StyledAboutContainer>
      </StyledAboutSection>
      {/* First Content Section */}
      <StyledAboutContentSection isDesktop={isDesktop}>
        <StyledAboutContentContainer>
          <StyledAboutContentGrid isDesktop={isDesktop}>
            <StyledAboutContentColumn>
              <StyledAboutContentHeadline isDesktop={isDesktop}>
                Modern Software was established in 2021 with the aim to provide
                modern software solutions to everyday businesses.
              </StyledAboutContentHeadline>
              <StyledAboutContentText isDesktop={isDesktop}>
                Too often have we came across the off-the-shelf solution that
                needs huge amount of customisation just to make it fit in with
                the business.
              </StyledAboutContentText>
              <StyledAboutContentText isDesktop={isDesktop}>
                The alternative bespoke solutions we see are usually rushed to
                the market to meet the pricing model agreed up front.
              </StyledAboutContentText>
              <StyledAboutContentText isDesktop={isDesktop}>
                Modern Software changes all of this. We believe in agile and in
                co-operation.
              </StyledAboutContentText>
              <StyledAboutContentText isDesktop={isDesktop}>
                Feel free to check out our brochure below.
              </StyledAboutContentText>
              <StyledBrochureButtonWrapper>
          <a
            href="/modern-software-brochure.pdf"
                  alt="Download brochure"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CallToActionButton onClick={() => null}>
              Download Brochure
            </CallToActionButton>
          </a>
              </StyledBrochureButtonWrapper>
            </StyledAboutContentColumn>
            <StyledAboutImageWrapper isDesktop={isDesktop}>
              <StyledAboutImage isDesktop={isDesktop}>
                <Image
                  src="/images/business_deal.jpg"
                  alt="We work better together"
                  width={400}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </StyledAboutImage>
            </StyledAboutImageWrapper>
          </StyledAboutContentGrid>
        </StyledAboutContentContainer>
      </StyledAboutContentSection>

      {/* Second Content Section */}
      <StyledAboutContentSection
        isDesktop={isDesktop}
        style={{ background: colours.lightGrey }}
      >
        <StyledAboutContentContainer>
          <StyledAboutContentGrid isDesktop={isDesktop}>
            <StyledAboutImageWrapper isDesktop={isDesktop}>
              <StyledAboutImage isDesktop={isDesktop}>
                <Image 
                  src="/images/Logo/simple.jpg" 
                  alt="Hello from me!" 
                  width={400}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </StyledAboutImage>
            </StyledAboutImageWrapper>
            <StyledAboutContentColumn>
              <StyledAboutContentText isDesktop={isDesktop}>
                Our model works with the premise of an MVP (minimal viable
                product).
              </StyledAboutContentText>
              <StyledAboutContentText isDesktop={isDesktop}>
                We discuss up front what your solution might look like in basic
                terms and we strip out the unnecessary features that can be
                added later on. We then work together in a fully agile following
                the principles of scrum to deliver your MVP.
              </StyledAboutContentText>
              <StyledAboutContentText isDesktop={isDesktop}>
                Once your MVP is delivered the benefits are enormous, you can
                see your solution start to take shape and begin to get a feel
                for the more refined requirements.
              </StyledAboutContentText>
              <StyledAboutContentText isDesktop={isDesktop}>
                We then proceed to a second phase of the software delivery
                which looks in building upon the MVP to create your final
                solution.
              </StyledAboutContentText>
            </StyledAboutContentColumn>
          </StyledAboutContentGrid>
        </StyledAboutContentContainer>
      </StyledAboutContentSection>

      {/* Modern Investor Section */}
      <StyledAboutContentSection
        isDesktop={isDesktop}
        style={{ background: colours.darkGrey }}
      >
        <StyledAboutContentContainer>
          <StyledAboutContentGrid isDesktop={isDesktop}>
            <StyledAboutContentColumn>
              <StyledAboutContentHeadline 
                isDesktop={isDesktop}
                style={{ color: colours.white }}
              >
                Modern Investor
              </StyledAboutContentHeadline>
              <StyledAboutContentText 
                isDesktop={isDesktop}
                style={{ color: colours.white, opacity: 0.9 }}
              >
                In addition to software development, we also operate Modern Investor - 
                an investment network based in Northern Ireland. Modern Investor provides 
                transparent performance tracking, live trade updates, expert coaching, and 
                investment insights to help investors grow their portfolios.
              </StyledAboutContentText>
              <StyledAboutContentText 
                isDesktop={isDesktop}
                style={{ color: colours.white, opacity: 0.9 }}
              >
                Whether you&apos;re looking to track investment performance, learn from live trades, 
                or access professional investment coaching, Modern Investor offers a comprehensive 
                platform for investors at all levels.
              </StyledAboutContentText>
              <StyledBrochureButtonWrapper>
                <a
                  href="https://www.modern-investor.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", display: "inline-block", maxWidth: "300px", width: "100%" }}
                >
                  <CallToActionButton>
                    Visit Modern Investor →
                  </CallToActionButton>
                </a>
              </StyledBrochureButtonWrapper>
            </StyledAboutContentColumn>
            <StyledAboutImageWrapper isDesktop={isDesktop}>
              <div style={{
                width: isDesktop ? "400px" : "300px",
                height: isDesktop ? "400px" : "300px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Image
                  src="/images/Modern-investor-logo.png"
                  alt="Modern Investor Logo"
                  width={isDesktop ? 400 : 300}
                  height={isDesktop ? 150 : 112}
                  style={{ 
                    objectFit: "contain",
                    maxWidth: "100%",
                    height: "auto"
                  }}
                />
              </div>
            </StyledAboutImageWrapper>
          </StyledAboutContentGrid>
        </StyledAboutContentContainer>
      </StyledAboutContentSection>

      <PartnersSection />
    </>
  );
};

export default About;
