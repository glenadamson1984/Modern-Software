import React, { useState } from "react";
import CallToActionButton from "../buttons/action/CallToActionButton";
import Link from "next/link";

// ✅ ADD THIS: Import static data
import allPortfolioData from "../../../data/portfolio.json";

const PortfolioCard = () => {
  // ✅ CHANGED: Filter and sort portfolio data (exclude priority=1, sort by priority)
  const portfolioItems = allPortfolioData
    .filter((item) => item.attributes.priority !== 1)
    .sort((a, b) => a.attributes.priority - b.attributes.priority);

  const [displayCount, setDisplayCount] = useState(3);

  // ❌ REMOVED: All this fetching logic
  // const [portfolioData, setPortfolioData] = useState([]);
  // const [page, setPage] = useState(1);
  // const [totalRecord, setTotalRecore] = useState(0);
  // useEffect(() => { fetchPortfolio(page); }, [page]);
  // const fetchPortfolio = async (page) => { ... };

  // Get items to display based on current count
  const displayedItems = portfolioItems.slice(0, displayCount);
  const hasMore = displayCount < portfolioItems.length;

  return (
    <>
      {displayedItems?.map((item, index) => (
        <div
          key={item.id}
          className="case-study u-pad-bottom-x3 u-pad-bottom-x4@m u-pad-bottom-x5@l"
        >
          <div className="o-wrap">
            <div className="c-card +default">
              <Link
                href={`/portfolio/${item?.id}`}
                className="c-media-box +offset"
              >
                {/* ✅ CHANGED: Simplified image URL */}
                <img
                  src={item?.attributes?.image?.url}
                  alt={item?.attributes?.title}
                />
              </Link>
              <div className="c-card__content +centered">
                <div className="u-marg-bottom">
                  <span className="c-pill ">Project</span>
                </div>
                <h2 className="c-heading +h3">
                  <Link
                    href={`/portfolio/${item?.id}`}
                  >{`${item?.attributes?.title}`}</Link>
                </h2>
                <p className="u-beta@m">{item.attributes?.description}</p>
                <p className="u-lighten-short">
                  {item.attributes?.short_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {hasMore && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <CallToActionButton
            onClick={() => {
              setDisplayCount(displayCount + 3);
            }}
          >
            See More
          </CallToActionButton>
        </div>
      )}
    </>
  );
};

export default PortfolioCard;
