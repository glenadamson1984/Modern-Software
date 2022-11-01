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
      <ImageCard
        position="left"
        title="Loughall Youth FC"
        imageUrl="/images/loughgall.jpg"
        description="Due to the ever increasing popularity of Loughgall Youth F.C the administration to run the club was stopping them from spending the time where they needed it most. Following a few seasons of struggling with paper consent forms they approached use to fully automate this experience saving endless hours for this year and many more to come."
      />
    </SubPageLayout>
  );
};

export default Portfolio;
