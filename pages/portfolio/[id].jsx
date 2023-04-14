import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";
import PortfolioDetailHeader from "../../src/components/portfolioDetail/PortfolioDetailHeader";
import PortfolioDetailChallenge from "../../src/components/portfolioDetail/PortfolioDetailChallenge";
import PortfolioDetailSolution from "../../src/components/portfolioDetail/PortfolioDetailSolution";
import PortfolioDetailResult from "../../src/components/portfolioDetail/PortfolioDetailResult";
import PortfolioDetailCompanyOverview from "../../src/components/portfolioDetail/PortfolioDetailCompanyOverview";
import PortfolioDetailSuccessStories from "../../src/components/portfolioDetail/PortfolioDetailSuccessStories";
import PortfolioDetailStartProject from "../../src/components/portfolioDetail/PortfolioDetailStartProject";

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
  const [portfolioData, setPortfolioData] = useState(Object);
  const [threePortfolioData, setThreePortfolioData] = useState([]);

  let { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchPortfolio();
      fetchThreePortfolio();
    }
  }, [router.query]);

  const fetchPortfolio = async () => {
    try {
      let queryPrams = `populate=*`;
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/portfolios/${id}?${queryPrams}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const res = await response?.json();
        setPortfolioData(res?.data);
      }
    } catch (e) {
      toast.error("Please try again later.", { theme: "colored" });
    }
  };

  const fetchThreePortfolio = async () => {
    try {
      let queryPrams = `populate=*&pagination[page]=${1}&pagination[pageSize]=3`;
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/portfolios?${queryPrams}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const res = await response?.json();
        setThreePortfolioData(res?.data);
      }
    } catch (e) {
      toast.error("Please try again later.", { theme: "colored" });
    }
  };

  return (
    <>
      {Object.keys(portfolioData)?.length > 0 && (
        <div className="casestudy-template-default single single-casestudy">
          <div className="u-fill-site " style={{ backgroundColor: "#80cea7" }}>
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
      )}
    </>
  );
};
export default Detail;
