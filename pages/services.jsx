import React from "react";
import { useRouter } from "next/router";
import { RemoveSlashFromURl } from "../src/components/layout/navigation/NavigationPaths";
import SubPageLayout from "../src/components/layout/SubPageLayout";
import ImageCard from "../src/components/image-card/ImageCard";
import Image from "next/image";
import styled from "styled-components";
import { colours } from "../src/utils/style.utils";
import ServiceCard from "../src/components/image-card/ServiceCard";

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;

  @media only screen and (max-width: 600px) {
    width: 90%;
    flex-direction: column;
    display: flex;
  }
`;

const Services = () => {
  const { pathname } = useRouter();

  return (
    <SubPageLayout subTitle={"What we do"}>
      <StyledRow>
        <ServiceCard
          imageUrl="/images/10168.jpg"
          title="Custom Software Development"
        />
        <ServiceCard
          imageUrl="/images/45.jpg"
          title="Web Application Development"
        />
      </StyledRow>
      <StyledRow>
        <ServiceCard imageUrl="/images/42.jpg" title="Mobile App Development" />
        <ServiceCard imageUrl="/images/36.jpg" title="UX & UI Design" />
      </StyledRow>
      <StyledRow>
        <ServiceCard imageUrl="/images/8600.jpg" title="Software Tuition" />
      </StyledRow>
    </SubPageLayout>
  );
};

export default Services;
