import Link from "next/link";
import React from "react";
import useWindowSize from "../../hooks/useWindowSize";

const PortfolioDetailSuccessStories = (props) => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();
  return (
    <div
      className="u-pad-top-x3 u-pad-top-x4@m u-pad-top-x5@l u-fill-white  u-pad-bottom-x3 "
      id="carousel-block_5ea757ba010b1"
    >
      <div className="o-wrap">
        <h2 className="c-heading +h3 u-align-center u-marg-bottom u-marg-bottom-x2@m">
          More Success Stories
        </h2>
        <div className="flex gap-10">
          {props?.threePortfolioData.length &&
            props?.threePortfolioData?.map((item, index) => (
              <div key={index} style={{ flex: "1" }}>
                <div className="c-card">
                  <div className="c-card +stacked is-in-view">
                    <Link href={`/portfolio/${item.id}`}>
                      <div className="c-media-box">
                        <img
                          decoding="async"
                          className="ls-is-cached lazyloaded"
                          src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${item?.attributes?.image?.data?.attributes?.url}`}
                        />
                      </div>
                    </Link>
                    <div className="c-card__content +centered">
                      <h2 className="c-heading +h4 u-pad-bottom">
                        <Link
                          href={`/portfolio/${item.id}`}
                        >{`${item?.attributes?.title}`}</Link>
                      </h2>
                      {isDesktop && `${item?.attributes?.description}`}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailSuccessStories;
