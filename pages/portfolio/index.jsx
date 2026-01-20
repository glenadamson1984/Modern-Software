import React from "react";
import useWindowSize from "../../src/hooks/useWindowSize";
import portfolioData from "../../data/portfolio.json";
import testimonialsData from "../../data/testimonials.json";
import Image from "next/image";
import Link from "next/link";
import SEO from "../../src/components/SEO";
import {
  StyledFeaturedWorkHero,
  StyledFeaturedWorkContent,
  StyledFeaturedWorkTitle,
  StyledFeaturedWorkSubtitle,
  StyledTestimonialTicker,
  StyledTickerContainer,
  StyledTickerTrack,
  StyledTestimonialCard,
  StyledTestimonialStars,
  StyledTestimonialQuote,
  StyledTestimonialAuthor,
  StyledTestimonialName,
  StyledTestimonialCompany,
  StyledPortfolioSection,
  StyledPortfolioContainer,
  StyledPortfolioSectionHeader,
  StyledPortfolioSectionTitle,
  StyledPortfolioSectionSubtitle,
  StyledProjectCard,
  StyledProjectContent,
  StyledProjectHeader,
  StyledProjectTitleContainer,
  StyledProjectTitle,
  StyledProjectDescription,
  StyledProjectTags,
  StyledProjectTag,
  StyledProjectImage,
} from "../../page-styles/portfolio.styles";

const Portfolio = () => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  // Get all portfolio items sorted by priority
  const portfolioItems = portfolioData.sort(
    (a, b) => a.attributes.priority - b.attributes.priority
  );

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  // Calculate duration based on number of testimonials
  const tickerDuration = `${testimonialsData.length * 8}s`;

  const renderStars = (rating) => {
    return "★".repeat(rating);
  };

  return (
    <>
      <SEO
        title="Portfolio - Website Design Projects Northern Ireland | Web Designer Portadown"
        description="View our portfolio of website design and custom software projects for businesses across Northern Ireland. See how we've helped local businesses in Portadown, Banbridge, and beyond grow with professional websites."
        keywords="website design portfolio Northern Ireland, web designer portfolio Portadown, web design projects NI, small business websites Northern Ireland, local web designer projects"
        canonicalUrl="/portfolio"
      />
      {/* Featured Work Hero Section */}
      <StyledFeaturedWorkHero isDesktop={isDesktop}>
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
          <source src="/videos/7989732-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <StyledFeaturedWorkContent>
          <StyledFeaturedWorkTitle isDesktop={isDesktop}>
            Featured Work
          </StyledFeaturedWorkTitle>
          <StyledFeaturedWorkSubtitle isDesktop={isDesktop}>
            Custom software that drives efficiency, clarity & scale
          </StyledFeaturedWorkSubtitle>
        </StyledFeaturedWorkContent>
      </StyledFeaturedWorkHero>

      {/* Testimonial Ticker Section */}
      <StyledTestimonialTicker isDesktop={isDesktop}>
        <StyledTickerContainer>
          <StyledTickerTrack duration={tickerDuration}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <StyledTestimonialCard key={`${testimonial.id}-${index}`} isDesktop={isDesktop}>
                <StyledTestimonialStars>
                  {renderStars(testimonial.rating)}
                </StyledTestimonialStars>
                <StyledTestimonialQuote isDesktop={isDesktop}>
                  &ldquo;{testimonial.quote}&rdquo;
                </StyledTestimonialQuote>
                <StyledTestimonialAuthor>
                  <StyledTestimonialName>
                    {testimonial.name}
                  </StyledTestimonialName>
                  <StyledTestimonialCompany>
                    {testimonial.company}
                  </StyledTestimonialCompany>
                </StyledTestimonialAuthor>
              </StyledTestimonialCard>
            ))}
          </StyledTickerTrack>
        </StyledTickerContainer>
      </StyledTestimonialTicker>

      {/* Portfolio Projects Section */}
      <StyledPortfolioSection isDesktop={isDesktop}>
        <StyledPortfolioContainer>
          <StyledPortfolioSectionHeader isDesktop={isDesktop}>
            <StyledPortfolioSectionTitle isDesktop={isDesktop}>
              Our Portfolio
            </StyledPortfolioSectionTitle>
            <StyledPortfolioSectionSubtitle isDesktop={isDesktop}>
              Explore our recent projects and see how we&apos;ve helped businesses transform their operations
            </StyledPortfolioSectionSubtitle>
          </StyledPortfolioSectionHeader>
          {portfolioItems.map((item) => (
            <Link key={item.id} href={`/portfolio/${item.id}`}>
              <StyledProjectCard isDesktop={isDesktop}>
                <StyledProjectContent>
                  <StyledProjectHeader>
                    <StyledProjectTitleContainer>
                      <StyledProjectTitle isDesktop={isDesktop}>
                        {item.attributes.title}
                      </StyledProjectTitle>
                      <StyledProjectDescription isDesktop={isDesktop}>
                        {item.attributes.description ||
                          item.attributes.short_description}
                      </StyledProjectDescription>
                      <StyledProjectTags>
                        {item.attributes.key_feature_description_1 && (
                          <StyledProjectTag>
                            {item.attributes.key_feature_description_1}
                          </StyledProjectTag>
                        )}
                        {item.attributes.key_feature_description_2 && (
                          <StyledProjectTag>
                            {item.attributes.key_feature_description_2}
                          </StyledProjectTag>
                        )}
                        {item.attributes.key_feature_description_3 && (
                          <StyledProjectTag>
                            {item.attributes.key_feature_description_3}
                          </StyledProjectTag>
                        )}
                      </StyledProjectTags>
                    </StyledProjectTitleContainer>
                  </StyledProjectHeader>
                </StyledProjectContent>
                {item.attributes.image?.url && (
                  <StyledProjectImage isDesktop={isDesktop}>
                    <Image
                      src={item.attributes.image.url}
                      alt={item.attributes.title}
                      width={500}
                      height={300}
                      style={{ objectFit: "cover" }}
                    />
                  </StyledProjectImage>
                )}
              </StyledProjectCard>
            </Link>
          ))}
        </StyledPortfolioContainer>
      </StyledPortfolioSection>
    </>
  );
};

export default Portfolio;
