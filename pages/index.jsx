import React from "react";
import useWindowSize from "../src/hooks/useWindowSize";
import Image from "next/image";
import CallToActionButton from "../src/components/buttons/action/CallToActionButton";
import { useRouter } from "next/router";
import portfolioData from "../data/portfolio.json";
import SEO from "../src/components/SEO";
import { colours } from "../src/utils/style.utils";
import {
  StyledHeroBackground,
  StyledHeroContainer,
  StyledHeroTitle,
  StyledHeroDescription,
  StyledHeroButtons,
  StyledTrustBadges,
  StyledTwoColumnLayout,
  StyledMainContent,
  StyledSidebar,
  StyledFeaturesSection,
  StyledFeaturesContainer,
  StyledSectionTitle,
  StyledSectionDescription,
  StyledFeaturesGrid,
  StyledFeatureCard,
  StyledFeatureIcon,
  StyledFeatureTitle,
  StyledFeatureDescription,
  StyledFeaturedWorkSection,
  StyledFeaturedWorkTitle,
  StyledFeaturedWorkDescription,
  StyledProjectList,
  StyledProjectItem,
  StyledProjectBullet,
  StyledProjectContent,
  StyledProjectTitle,
  StyledProjectDescription,
  StyledProjectTags,
  StyledTag,
  StyledProjectImage,
  StyledProcessSection,
  StyledProcessContainer,
  StyledProcessDescription,
  StyledProcessGrid,
  StyledProcessStep,
  StyledProcessNumber,
  StyledProcessTitle,
} from "../page-styles/index.styles";

const Home = () => {
  const { checkIsDesktop } = useWindowSize();
  const router = useRouter();
  const isDesktop = checkIsDesktop();

  // Get top 3 portfolio items for featured work
  const featuredProjects = portfolioData
    .sort((a, b) => a.attributes.priority - b.attributes.priority)
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Modern Software",
    url: "https://modernsoftware.co.uk",
    logo: "https://modernsoftware.co.uk/images/Logo/logoonwhite2.png",
    description:
      "Software Northern Ireland - Custom software development and web design company based in Northern Ireland",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressRegion: "Northern Ireland",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@modernsoftware.co.uk",
      contactType: "Customer Service",
    },
    sameAs: [],
  };

  return (
    <>
      <SEO
        title="Software Northern Ireland | Custom Software Development | Web Designer Portadown"
        description="Software Northern Ireland - Professional custom software development and website design for small businesses. Based in Northern Ireland, serving Portadown, Banbridge, Lurgan, Armagh, and Craigavon. Expert software solutions and web design services."
        keywords="software northern ireland, custom software northern ireland, software company northern ireland, software development northern ireland, web designer Portadown, website designer Northern Ireland, website designer Banbridge, website designer Armagh, website designer Craigavon, small business website NI, small business web design Northern Ireland, local business website designer, affordable website design NI, website for small business Northern Ireland, web designer Lurgan, custom software development Northern Ireland"
        canonicalUrl="/"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <StyledHeroBackground isDesktop={isDesktop}>
        {isDesktop && (
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
            <source src="/assets/coder.mp4" type="video/mp4" />
          </video>
        )}
        <StyledHeroContainer isDesktop={isDesktop}>
          <StyledHeroTitle isDesktop={isDesktop}>
            Software Northern Ireland | Custom Software & Web Design
          </StyledHeroTitle>
          <StyledHeroDescription isDesktop={isDesktop}>
            Professional custom software development and website design for
            small businesses in Northern Ireland. Serving Portadown, Banbridge,
            Lurgan, Armagh, and Craigavon. Expert software solutions and modern
            web design to help your business grow.
          </StyledHeroDescription>
          <StyledHeroButtons>
            <CallToActionButton
              variant="darkGreen"
              onClick={() => router.push("/contactus")}
            >
              Discuss a project
            </CallToActionButton>
            <CallToActionButton
              variant="darkGreen"
              onClick={() => router.push("/portfolio")}
            >
              See our work
            </CallToActionButton>
          </StyledHeroButtons>
          <StyledTrustBadges>
            <span>Trusted by businesses</span>
            <span>•</span>
            <span>.NET</span>
            <span>•</span>
            <span>AWS</span>
            <span>•</span>
            <span>React</span>
            <span>•</span>
            <span>Northern Ireland</span>
          </StyledTrustBadges>
        </StyledHeroContainer>
      </StyledHeroBackground>

      {/* Two Column Layout */}
      <StyledTwoColumnLayout isDesktop={isDesktop}>
        {/* Main Content */}
        <StyledMainContent isDesktop={isDesktop}>
          {/* Features Section */}
          <StyledFeaturesSection isDesktop={isDesktop}>
            {isDesktop && (
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
                <source
                  src="/videos/7263301-uhd_3840_2160_25fps.mp4"
                  type="video/mp4"
                />
              </video>
            )}
            <StyledFeaturesContainer>
              <StyledSectionTitle isDesktop={isDesktop}>
                Custom Software Development in Northern Ireland
              </StyledSectionTitle>
              <StyledSectionDescription isDesktop={isDesktop}>
                We design focused software solutions for businesses across
                Northern Ireland. No off-the-shelf solutions. Just smart,
                scalable systems designed for your business.
              </StyledSectionDescription>
              <StyledFeaturesGrid isDesktop={isDesktop}>
                <StyledFeatureCard>
                  <StyledFeatureIcon>💻</StyledFeatureIcon>
                  <StyledFeatureTitle>
                    Custom Software Development
                  </StyledFeatureTitle>
                  <StyledFeatureDescription>
                    Tailored solutions built specifically for your business
                    needs, ensuring optimal performance and scalability.
                  </StyledFeatureDescription>
                </StyledFeatureCard>
                <StyledFeatureCard>
                  <StyledFeatureIcon>⚙️</StyledFeatureIcon>
                  <StyledFeatureTitle>Scalable Architecture</StyledFeatureTitle>
                  <StyledFeatureDescription>
                    Future-proof systems that grow with your business, built on
                    modern, reliable technologies.
                  </StyledFeatureDescription>
                </StyledFeatureCard>
                <StyledFeatureCard>
                  <StyledFeatureIcon>❤️</StyledFeatureIcon>
                  <StyledFeatureTitle>User-Centered Design</StyledFeatureTitle>
                  <StyledFeatureDescription>
                    Intuitive interfaces that your team will love to use,
                    reducing training time and increasing productivity.
                  </StyledFeatureDescription>
                </StyledFeatureCard>
                <StyledFeatureCard>
                  <StyledFeatureIcon>📄</StyledFeatureIcon>
                  <StyledFeatureTitle>Ongoing Support</StyledFeatureTitle>
                  <StyledFeatureDescription>
                    Continuous maintenance and updates to keep your systems
                    running smoothly and securely.
                  </StyledFeatureDescription>
                </StyledFeatureCard>
              </StyledFeaturesGrid>
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <CallToActionButton
                  variant="darkGreen"
                  onClick={() => router.push("/contactus")}
                >
                  Book a discovery call →
                </CallToActionButton>
              </div>
            </StyledFeaturesContainer>
          </StyledFeaturesSection>
        </StyledMainContent>

        {/* Sidebar */}
        <StyledSidebar isDesktop={isDesktop}>
          <StyledFeaturedWorkSection>
            <StyledFeaturedWorkTitle>Featured Work</StyledFeaturedWorkTitle>
            <StyledFeaturedWorkDescription>
              Custom software that drives efficiency, clarity & scale.
            </StyledFeaturedWorkDescription>
            <StyledProjectList>
              {featuredProjects.map((project) => (
                <StyledProjectItem key={project.id}>
                  <StyledProjectBullet />
                  <StyledProjectContent>
                    <StyledProjectTitle>
                      {project.attributes.title}
                    </StyledProjectTitle>
                    <StyledProjectDescription>
                      {project.attributes.short_description ||
                        project.attributes.description.substring(0, 100) +
                          "..."}
                    </StyledProjectDescription>
                    <StyledProjectTags>
                      {project.attributes.key_feature_description_1 && (
                        <StyledTag>
                          {project.attributes.key_feature_description_1}
                        </StyledTag>
                      )}
                      {project.attributes.key_feature_description_2 && (
                        <StyledTag>
                          {project.attributes.key_feature_description_2}
                        </StyledTag>
                      )}
                      {project.attributes.key_feature_description_3 && (
                        <StyledTag>
                          {project.attributes.key_feature_description_3}
                        </StyledTag>
                      )}
                    </StyledProjectTags>
                  </StyledProjectContent>
                  {project.attributes.image?.url && (
                    <StyledProjectImage>
                      <Image
                        src={project.attributes.image.url}
                        alt={project.attributes.title}
                        width={120}
                        height={80}
                        style={{ objectFit: "cover" }}
                      />
                    </StyledProjectImage>
                  )}
                </StyledProjectItem>
              ))}
            </StyledProjectList>
            <div style={{ marginTop: "2rem" }}>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  color: "#6B6B6B",
                  marginBottom: "1rem",
                }}
              >
                Have a similar project in mind?
              </p>
              <CallToActionButton
                variant="darkGreen"
                onClick={() => router.push("/contactus")}
              >
                Discuss your project
              </CallToActionButton>
            </div>
          </StyledFeaturedWorkSection>
        </StyledSidebar>
      </StyledTwoColumnLayout>

      {/* Process Section */}
      <StyledProcessSection isDesktop={isDesktop}>
        {isDesktop && (
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
            <source
              src="/videos/853878-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
        )}
        <StyledProcessContainer>
          <StyledSectionTitle isDesktop={isDesktop}>
            How We Help Small Businesses in Northern Ireland
          </StyledSectionTitle>
          <StyledProcessDescription
            isDesktop={isDesktop}
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              color: colours.white,
              opacity: 0.9,
            }}
          >
            From Portadown to Banbridge, we work with local businesses across
            Northern Ireland to create professional websites that drive growth.
          </StyledProcessDescription>
          <StyledProcessGrid isDesktop={isDesktop}>
            <StyledProcessStep>
              <StyledProcessNumber>1</StyledProcessNumber>
              <StyledProcessTitle>Discovery</StyledProcessTitle>
              <StyledProcessDescription>
                We start by understanding your business, goals, and challenges
                to create a tailored solution strategy.
              </StyledProcessDescription>
            </StyledProcessStep>
            <StyledProcessStep>
              <StyledProcessNumber>2</StyledProcessNumber>
              <StyledProcessTitle>Prototype</StyledProcessTitle>
              <StyledProcessDescription>
                Rapid prototyping and iterative design to validate concepts
                before full development begins.
              </StyledProcessDescription>
            </StyledProcessStep>
            <StyledProcessStep>
              <StyledProcessNumber>3</StyledProcessNumber>
              <StyledProcessTitle>Build & Launch</StyledProcessTitle>
              <StyledProcessDescription>
                Agile development with regular updates, ensuring quality and
                timely delivery of your solution.
              </StyledProcessDescription>
            </StyledProcessStep>
            <StyledProcessStep>
              <StyledProcessNumber>4</StyledProcessNumber>
              <StyledProcessTitle>Ongoing Support</StyledProcessTitle>
              <StyledProcessDescription>
                Continuous monitoring, updates, and optimization to keep your
                systems performing at their best.
              </StyledProcessDescription>
            </StyledProcessStep>
          </StyledProcessGrid>
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ maxWidth: "300px", width: "100%" }}>
              <CallToActionButton
                variant="darkGreen"
                onClick={() => router.push("/contactus")}
              >
                Start your project
              </CallToActionButton>
            </div>
          </div>
        </StyledProcessContainer>
      </StyledProcessSection>
    </>
  );
};

export default Home;
