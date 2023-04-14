import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SubPageLayout from "../../src/components/layout/SubPageLayout";
import { RemoveSlashFromURl } from "../../src/components/layout/navigation/NavigationPaths";
import ImageCard from "../../src/components/image-card/ImageCard";
import PortfolioCard from '../../src/components/portfolio/portfolioCard'
import TopPortfolioCard from "../../src/components/portfolio/topPortfolioCard";


const Index = () => {
  const { pathname } = useRouter();
  return (
    <SubPageLayout subTitle={RemoveSlashFromURl(pathname)}>
      <TopPortfolioCard />
      <PortfolioCard />
    </SubPageLayout>
  );
};

export default Index;
