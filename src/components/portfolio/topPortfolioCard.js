import Link from "next/link";
import React from "react";
import portfolioData from "../../../data/portfolio.json";

const TopPortfolioCard = () => {
  const topPortfolioData = portfolioData.find(
    (p) => p.attributes.priority === 1
  );

  return (
    <>
      {topPortfolioData && (
        <div className="grid gap-20">
          <div className="case-study u-pad-bottom-x3 u-pad-bottom-x4@m u-pad-bottom-x5@l">
            <div className="o-wrap">
              <div className="c-card +default +featured">
                <Link
                  href={`/portfolio/${topPortfolioData?.id}`}
                  className="c-media-box +offset"
                >
                  <img
                    src={topPortfolioData?.attributes?.image?.url}
                    alt={topPortfolioData?.attributes?.title}
                  />
                </Link>

                <div
                  style={{ marginLeft: "10px" }}
                  className="c-card__content +centered"
                >
                  <div className="u-marg-bottom">
                    <span className="c-pill u-fill-primary">Projects</span>
                  </div>
                  <h2 className="c-heading +h3">
                    <Link href={`/portfolio/${topPortfolioData?.id}`}>
                      {`${topPortfolioData?.attributes?.title}`}
                    </Link>
                  </h2>
                  <p className="u-beta@m">
                    {topPortfolioData?.attributes?.description}
                  </p>
                  <p className="u-lighten">
                    {topPortfolioData?.attributes?.short_description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopPortfolioCard;
