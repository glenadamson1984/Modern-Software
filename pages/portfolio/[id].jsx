import React from "react";
import { useRouter } from "next/router";
import useWindowSize from "../../src/hooks/useWindowSize";
import PortfolioDetailHeader from "../../src/components/portfolioDetail/PortfolioDetailHeader";
import PortfolioDetailChallenge from "../../src/components/portfolioDetail/PortfolioDetailChallenge";
import PortfolioDetailSolution from "../../src/components/portfolioDetail/PortfolioDetailSolution";
import PortfolioDetailResult from "../../src/components/portfolioDetail/PortfolioDetailResult";
import PortfolioDetailSuccessStories from "../../src/components/portfolioDetail/PortfolioDetailSuccessStories";
import PortfolioDetailStartProject from "../../src/components/portfolioDetail/PortfolioDetailStartProject";
import SEO from "../../src/components/SEO";
import allPortfolioData from "../../data/portfolio.json";

const Detail = () => {
  const router = useRouter();
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();
  const { id } = router.query;

  const portfolioData = allPortfolioData.find((p) => p.id === parseInt(id));

  const threePortfolioData = allPortfolioData
    .filter((p) => p.id !== parseInt(id))
    .slice(0, 3);

  // Handle case where portfolio item doesn't exist
  if (!portfolioData) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <>
      <SEO
        title={`${portfolioData?.attributes?.title || "Portfolio"} - Modern Software`}
        description={portfolioData?.attributes?.description || "A custom software solution by Modern Software"}
        keywords={`${portfolioData?.attributes?.title}, custom software, web application, case study, ${portfolioData?.attributes?.tags?.join(", ") || ""}`}
        canonicalUrl={`/portfolio/${id}`}
        ogImage={portfolioData?.attributes?.main_image || "/images/Modern Software-2_Custom Software Development.jpg"}
      />
      <div 
        className="casestudy-template-default single single-casestudy" 
        style={{ marginTop: isDesktop ? "-70px" : "0" }}
      >
        <div className="u-fill-site " style={{ backgroundColor: "#7bcda4" }}>
          <PortfolioDetailHeader portfolioData={portfolioData} />
          <div className="s-cms-content">
            <PortfolioDetailChallenge portfolioData={portfolioData} />
            <PortfolioDetailSolution portfolioData={portfolioData} />
            <PortfolioDetailResult portfolioData={portfolioData} />
            <PortfolioDetailSuccessStories
              threePortfolioData={threePortfolioData}
            />
            <PortfolioDetailStartProject />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
