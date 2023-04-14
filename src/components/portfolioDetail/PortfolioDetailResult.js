import React from "react";

const PortfolioDetailResult = (props) => {

    return (
        <div className="grids-section grids-s-6af060bc-79a4-4ae1-82a1-8ab96ccee0d6 +narrow grids-is-stretch alignwide">
              <div className="grids-s-w_i">
                <div className="grids-area grids-a-820565c0-e2fb-4262-9dad-ef5bd3931535">
                  <div className="c-heading s-cms-content u-marg-bottom">
                    <h3 className="has-text-align-center">The Results</h3>
                  </div>

                  {/* <p className="has-text-align-center has-medium-font-size">The apps have proved to be a resounding success for Independent.ie.&nbsp;</p> */}

                  <p className="has-text-align-center has-medium-font-size">
                  {`${props?.portfolioData?.attributes?.result_discription}`}
                  </p>

                  {/* <div className="grids-section grids-s-de11c13e-a9d9-435b-911c-67cdb7e12b6d grids-is-stretch">
                    <div className="grids-s-w_i">
                      <div className="grids-area grids-a-ee7204e5-2f72-47d9-8bf1-c5a7d204b807">
                        <div className="c-heading s-cms-content u-marg-bottom">
                          <h2 className="has-text-align-center">x5</h2>
                        </div>

                        <p className="has-text-align-center">more visits</p>
                      </div>

                      <div className="grids-area grids-a-a538c50d-621b-4dfc-8d7e-76bf16f32c95">
                        <div className="c-heading s-cms-content u-marg-bottom">
                          <h2 className="has-text-align-center">50%</h2>
                        </div>

                        <p className="has-text-align-center">more articles read</p>
                      </div>
                    </div>
                  </div> */}

                  {/* <p className="has-text-align-center has-medium-font-size">
                    The introduction of in-app purchasing has also proven to be the most effective driver for purchases of news subscriptions, with over <strong>42%</strong> of all subscriptions originating via in-app purchases, despite the
                    apps accounting for only <strong>9%</strong> of overall digital readership. The frictionless method, coupled with the highly engaged behaviour, is a recipe for success it would seem!&nbsp;&nbsp;
                  </p> */}

                  {/* <p className="has-text-align-center has-medium-font-size">To top it all off, the Independent.ie app has been recognised and awarded as ‘News App of the Year’ at the prestigious UK App Awards.&nbsp;</p> */}

                  <div style={{ height: "33px" }} aria-hidden="true" className="wp-block-spacer"></div>

                  <div className="wp-block-image">
                    <figure className="aligncenter size-large is-resized">
                      <img
                        decoding="async"
                        alt="UK App Awards Logo"
                        className="wp-image-4984 ls-is-cached lazyloaded"
                        src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${props?.portfolioData?.attributes?.result_image?.data?.attributes?.url}`}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
    )
};

export default PortfolioDetailResult;
