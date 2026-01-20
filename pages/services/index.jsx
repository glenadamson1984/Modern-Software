import React from "react";
import { useRouter } from "next/router";
import useWindowSize from "../../src/hooks/useWindowSize";
import servicesData from "../../data/services.json";
import Link from "next/link";
import SEO from "../../src/components/SEO";
import {
  StyledServicesHero,
  StyledServicesHeroContent,
  StyledServicesHeroTitle,
  StyledServicesHeroSubtitle,
  StyledServicesSection,
  StyledServicesContainer,
  StyledServicesGrid,
  StyledServiceCard,
  StyledServiceImageWrapper,
  StyledServiceImage,
  StyledServiceContent,
  StyledServiceBadge,
  StyledServiceTitle,
  StyledServiceDescription,
} from "../../page-styles/services.styles";

const Services = () => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();
  const router = useRouter();

  return (
    <>
      <SEO
        title="Website Design Services Northern Ireland | Small Business Web Design NI"
        description="Professional website design and development services for small businesses in Northern Ireland. Serving Portadown, Banbridge, Lurgan, Armagh, and Craigavon. Affordable web design, custom software, and business solutions."
        keywords="website design services Northern Ireland, small business web design NI, web designer Portadown, web designer Banbridge, web designer Lurgan, affordable website design, custom software Northern Ireland, local web designer"
        canonicalUrl="/services"
      />
      {/* Services Hero Section */}
      <StyledServicesHero isDesktop={isDesktop}>
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
        <StyledServicesHeroContent>
          <StyledServicesHeroTitle isDesktop={isDesktop}>
            Our Services
          </StyledServicesHeroTitle>
          <StyledServicesHeroSubtitle isDesktop={isDesktop}>
            Tailored software solutions designed to drive your business forward
          </StyledServicesHeroSubtitle>
        </StyledServicesHeroContent>
      </StyledServicesHero>

      {/* Services Grid Section */}
      <StyledServicesSection isDesktop={isDesktop}>
        <StyledServicesContainer>
          <StyledServicesGrid isDesktop={isDesktop}>
            {servicesData?.map((item) => (
              <StyledServiceCard
                key={item.id}
                isDesktop={isDesktop}
                onClick={() => router.push(`/services/${item.id}`)}
              >
                <StyledServiceImageWrapper isDesktop={isDesktop}>
                  <StyledServiceImage
                    src={item?.attributes?.service_image?.url}
                    alt={item?.attributes?.title}
                  />
                </StyledServiceImageWrapper>
                <StyledServiceContent isDesktop={isDesktop}>
                  <StyledServiceBadge>Service</StyledServiceBadge>
                  <StyledServiceTitle isDesktop={isDesktop}>
                    {item?.attributes?.title}
                  </StyledServiceTitle>
                  <StyledServiceDescription isDesktop={isDesktop}>
                    {item?.attributes?.service_description}
                  </StyledServiceDescription>
                </StyledServiceContent>
              </StyledServiceCard>
            ))}
          </StyledServicesGrid>
        </StyledServicesContainer>
      </StyledServicesSection>
    </>
  );
};

export default Services;
