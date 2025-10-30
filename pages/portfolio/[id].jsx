import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import PortfolioDetailHeader from "../../src/components/portfolioDetail/PortfolioDetailHeader";
import PortfolioDetailChallenge from "../../src/components/portfolioDetail/PortfolioDetailChallenge";
import PortfolioDetailSolution from "../../src/components/portfolioDetail/PortfolioDetailSolution";
import PortfolioDetailResult from "../../src/components/portfolioDetail/PortfolioDetailResult";
import PortfolioDetailCompanyOverview from "../../src/components/portfolioDetail/PortfolioDetailCompanyOverview";
import PortfolioDetailSuccessStories from "../../src/components/portfolioDetail/PortfolioDetailSuccessStories";
import PortfolioDetailStartProject from "../../src/components/portfolioDetail/PortfolioDetailStartProject";

// ✅ ADD THIS: Import static data
import allPortfolioData from "../../data/portfolio.json";

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    display: flex;
  }
`;

const Detail = () => {
  const router = useRouter();
  let { id } = router.query;

  // ✅ CHANGED: Find the portfolio item by ID
  const portfolioData = allPortfolioData.find((p) => p.id === parseInt(id));

  // ✅ CHANGED: Get 3 portfolio items for "More Success Stories" (excluding current one)
  const threePortfolioData = allPortfolioData
    .filter((p) => p.id !== parseInt(id))
    .slice(0, 3);

  // ❌ REMOVED: All this fetching logic
  // const [portfolioData, setPortfolioData] = useState(Object);
  // const [threePortfolioData, setThreePortfolioData] = useState([]);
  // useEffect(() => {
  //   if (id) {
  //     fetchPortfolio();
  //     fetchThreePortfolio();
  //   }
  // }, [router.query]);
  // const fetchPortfolio = async () => { ... };
  // const fetchThreePortfolio = async () => { ... };

  // Handle case where portfolio item doesn't exist
  if (!portfolioData) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <>
      <div className="casestudy-template-default single single-casestudy">
        <div className="u-fill-site " style={{ backgroundColor: "#7bcda4" }}>
          <PortfolioDetailHeader portfolioData={portfolioData} />
          <div className="s-cms-content">
            <PortfolioDetailChallenge portfolioData={portfolioData} />
            <PortfolioDetailSolution portfolioData={portfolioData} />
            <PortfolioDetailResult portfolioData={portfolioData} />
            {/*<PortfolioDetailCompanyOverview portfolioData={portfolioData} />*/}
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
