import React from "react";
import { useRouter } from "next/router";
import useWindowSize from "../../src/hooks/useWindowSize";
import servicesData from "../../data/services.json";
import SEO from "../../src/components/SEO";
import {
  StyledServiceDetailHero,
  StyledServiceDetailHeroContainer,
  StyledServiceDetailTitle,
  StyledServiceDetailDescription,
  StyledHowWeWorkSection,
  StyledHowWeWorkContainer,
  StyledHowWeWorkTitle,
  StyledProcessGrid,
  StyledProcessStep,
  StyledProcessStepTitle,
  StyledProcessStepDescription,
} from "../../page-styles/service-detail.styles";

const Detail = () => {
  const { query } = useRouter();
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  const { id } = query;

  // Find service by ID from static data
  const serviceData = servicesData.find((s) => s.id === parseInt(id));

  // Handle case where service doesn't exist
  if (!serviceData) {
    return <div>Service not found</div>;
  }

  const processSteps = [
    {
      title: "Planning",
      description:
        "Define the project scope, objectives, and requirements, establish a timeline, and allocate resources.",
    },
    {
      title: "Team Building",
      description:
        "Form a team of experienced and qualified professionals with the necessary skills and expertise to develop the software application.",
    },
    {
      title: "Communication",
      description:
        "Establish clear communication channels and set up regular meetings to ensure that all stakeholders are informed of project progress.",
    },
    {
      title: "Agile Development",
      description:
        "Adopt an agile development methodology that enables the team to respond to changes in requirements and make necessary adjustments throughout the project lifecycle.",
    },
    {
      title: "Testing",
      description:
        "Conduct thorough testing to ensure that the software application meets all requirements and functions as intended.",
    },
    {
      title: "Deployment",
      description:
        "Deploy the software application to the target environment and ensure that all necessary configurations and integrations are in place.",
    },
    {
      title: "Maintenance and Support",
      description:
        "Provide ongoing maintenance and support to ensure that the software application continues to function properly and meets user needs.",
    },
  ];

  return (
    <>
      <SEO
        title={`${serviceData?.attributes?.title || "Service"} - Modern Software`}
        description={serviceData?.attributes?.description || "Custom software development service by Modern Software"}
        keywords={`${serviceData?.attributes?.title}, software development, custom software, web development, mobile app development`}
        canonicalUrl={`/services/${id}`}
      />
      {/* Service Detail Hero Section */}
      <StyledServiceDetailHero isDesktop={isDesktop}>
        <StyledServiceDetailHeroContainer>
          <StyledServiceDetailTitle isDesktop={isDesktop}>
            {serviceData?.attributes?.title}
          </StyledServiceDetailTitle>
          <StyledServiceDetailDescription isDesktop={isDesktop}>
            {serviceData?.attributes?.service_description}
          </StyledServiceDetailDescription>
        </StyledServiceDetailHeroContainer>
      </StyledServiceDetailHero>

      {/* How We Work Section */}
      <StyledHowWeWorkSection isDesktop={isDesktop}>
        <StyledHowWeWorkContainer>
          <StyledHowWeWorkTitle isDesktop={isDesktop}>
            How we work
          </StyledHowWeWorkTitle>
          <StyledProcessGrid isDesktop={isDesktop}>
            {processSteps.map((step, index) => (
              <StyledProcessStep key={index} isDesktop={isDesktop}>
                <StyledProcessStepTitle isDesktop={isDesktop}>
                  {step.title}
                </StyledProcessStepTitle>
                <StyledProcessStepDescription isDesktop={isDesktop}>
                  {step.description}
                </StyledProcessStepDescription>
              </StyledProcessStep>
            ))}
          </StyledProcessGrid>
        </StyledHowWeWorkContainer>
      </StyledHowWeWorkSection>
    </>
  );
};

export default Detail;
