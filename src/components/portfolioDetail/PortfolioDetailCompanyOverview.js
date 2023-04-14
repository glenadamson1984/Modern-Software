import React from "react";

const PortfolioDetailCompanyOverview = (props) => {

    return (
        <div className="u-pad-top-x3 u-pad-top-x4@m u-pad-top-x5@l u-pad-bottom-x3 u-pad-bottom-x4@m u-pad-bottom-x5@l u-fill-white">
              <div className="o-wrap">
                <div className="c-media-text u-white +contents-flipped u-align-items-center +one-fifth" style={{ backgroundColor: "#006834" }}>
                  <div className="c-media-text__content">
                    <h3 className="c-heading +h4 +1">Company Overview</h3>
                    <div className="c-media-text__text">
                      <p>
                        <span style={{ fontWeight: "400" }}>
                        {`${props?.portfolioData?.attributes?.company_description}`}

                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="c-media-text__media">
                    <div className="+is-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" id="" x="0" y="0" viewBox="0 0 333.3 333.3" className="style-svg u-fill-svg-white replaced-svg svg-replaced-1">
                        <path
                          id="SVGID-3"
                          className="st0"
                          d="M166.7 32.4c-46.8 0-90.2 24.3-114.6 64.3h27.7c28.4-35.2 75.2-49.8 118.6-37-24.3 3.3-46.1 16.8-60 37h24.7c22.2-21.3 56-25 82.3-9.1 2.9 2.9 5.6 5.9 8.2 9.1h28.3c-1.5-2.2-3.1-4.2-4.7-6.3-25.1-36.3-66.4-58-110.5-58zm45.3 83.2h-24.6v102.1H212v-58.1l24.5 34.7 19-29.5v53h24.6V115.6h-24.6v2l-20.3 39-23.2-40.5v-.5zm-136.1 0H51.3v102.1h24.6V115.6zm45.4 0H96.7v102.1h24.6v-52.5l24.6 50.6v1.9h24.6V115.6h-24.6v51.1l-24.6-50.5v-.6zM87.4 240.4h-33c40.7 62 124 79.2 186 38.4 15.3-10.1 28.4-23.1 38.4-38.4h-28.5c-21.2 24.1-51.7 37.9-83.7 37.8-5.7 0-11.4-.4-17.1-1.3 22.8-4 43-16.9 56.3-35.9l.4-.6h-24.7c-26.2 25.2-67.7 25.2-94.1 0zM166.7 5.9c88.8 0 160.7 72 160.7 160.7s-72 160.7-160.7 160.7S5.9 255.4 5.9 166.7c0-88.8 72-160.8 160.8-160.8z"
                        ></path>
                        <path
                          className="st1"
                          d="M166.7 32.4c-46.8 0-90.2 24.3-114.6 64.3h27.7c28.4-35.2 75.2-49.8 118.6-37-24.3 3.3-46.1 16.8-60 37h24.7c22.2-21.3 56-25 82.3-9.1 2.9 2.9 5.6 5.9 8.2 9.1h28.3c-1.5-2.2-3.1-4.2-4.7-6.3-25.1-36.3-66.4-58-110.5-58zm45.3 83.2h-24.6v102.1H212v-58.1l24.5 34.7 19-29.5v53h24.6V115.6h-24.6v2l-20.3 39-23.2-40.5v-.5zm-136.1 0H51.3v102.1h24.6V115.6zm45.4 0H96.7v102.1h24.6v-52.5l24.6 50.6v1.9h24.6V115.6h-24.6v51.1l-24.6-50.5v-.6zM87.4 240.4h-33c40.7 62 124 79.2 186 38.4 15.3-10.1 28.4-23.1 38.4-38.4h-28.5c-21.2 24.1-51.7 37.9-83.7 37.8-5.7 0-11.4-.4-17.1-1.3 22.8-4 43-16.9 56.3-35.9l.4-.6h-24.7c-26.2 25.2-67.7 25.2-94.1 0zM166.7 5.9c88.8 0 160.7 72 160.7 160.7s-72 160.7-160.7 160.7S5.9 255.4 5.9 166.7c0-88.8 72-160.8 160.8-160.8z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
};

export default PortfolioDetailCompanyOverview;
