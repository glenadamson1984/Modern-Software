import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CallToActionButton from "../buttons/action/CallToActionButton";
import Link from "next/link";

const PortfolioCard = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalRecord, setTotalRecore] = useState(0);

  useEffect(() => {
    fetchPortfolio(page);
  }, [page]);

  const fetchPortfolio = async (page) => {
    try {
      let queryPrams = `populate=*&sort[0]=priority%3Aasc&pagination[page]=${page}&pagination[pageSize]=3`;
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
        setPortfolioData([...portfolioData, ...res?.data]);
        setTotalRecore(res?.meta?.pagination?.total);
      }
    } catch (e) {
      toast.error("Please try again later.", { theme: "colored" });
    }
  };

  return (
    <>
      {portfolioData?.map((item, index) => (
        <>
          {item?.attributes?.priority != 1 && (
            <div className="case-study u-pad-bottom-x3 u-pad-bottom-x4@m u-pad-bottom-x5@l">
              <div className="o-wrap">
                <div className="c-card +default">
                  <Link
                    href={`/portfolio/${item?.id}`}
                    className="c-media-box +offset"
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${item?.attributes?.image?.data?.attributes?.url}`}
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
          )}
        </>
      ))}

      {totalRecord !== portfolioData.length && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <CallToActionButton
            onClick={async (e) => {
              setPage(page + 1);
            }}
          >
            see more
          </CallToActionButton>
        </div>
      )}
    </>
  );
};

export default PortfolioCard;
