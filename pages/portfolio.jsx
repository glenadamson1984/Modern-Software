import React from "react";
import { useRouter } from "next/router";
import SubPageLayout from "../src/components/layout/SubPageLayout";
import { RemoveSlashFromURl } from "../src/components/layout/navigation/NavigationPaths";
import ImageCard from "../src/components/image-card/ImageCard";

const Portfolio = () => {
  const { pathname } = useRouter();

  return (
    <SubPageLayout subTitle={RemoveSlashFromURl(pathname)}>
      <ImageCard
        position="right"
        title="Planning Portal NI"
        imageUrl="/images/planningportal.png"
        description="We delivered a fully frontend service to help build out the new planning portal website for Northern Ireland. Due for release in 2023 - ReactJS, NextJS, StoryBook"
      />
    </SubPageLayout>
  );
};

export default Portfolio;
