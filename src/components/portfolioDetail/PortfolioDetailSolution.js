import React from "react";

const PortfolioDetailSolution = (props) => {
  return (
    <div className="grids-section grids-s-ea5812f3-e147-4bb6-8859-92a56ccf1902 +narrow grids-is-stretch alignwide">
      <div className="grids-s-w_i">
        <div className="grids-area grids-a-646fdc2f-f4aa-418c-b7de-160cbeb65666">
          <div className="c-heading s-cms-content u-marg-bottom">
            <h3 className="has-text-align-center">The Solution</h3>
          </div>

          <p className="has-text-align-center has-medium-font-size">{`${props?.portfolioData?.attributes?.solution_description}`}</p>

          <div
            style={{ height: "37px" }}
            aria-hidden="true"
            className="wp-block-spacer"
          ></div>

          <div className="wp-block-image">
            <figure className="aligncenter size-large">
              {/* ✅ CHANGED: Simplified image URL */}
              <img
                decoding="async"
                alt="INM apps"
                src={props?.portfolioData?.attributes?.solution_image_1?.url}
              />
            </figure>
          </div>

          <div
            style={{ height: "37px" }}
            aria-hidden="true"
            className="wp-block-spacer"
          ></div>

          {/*<div className="wp-block-image">*/}
          {/*  <figure className="aligncenter size-large is-resized">*/}
          {/*    <img*/}
          {/*      decoding="async"*/}
          {/*      alt="kotlin swift logo"*/}
          {/*      src="https://gcdtech.com/wp-content/uploads/2020/12/kotlin-swift-logos-1200x145.png"*/}
          {/*    />*/}
          {/*  </figure>*/}
          {/*</div>*/}

          <div
            style={{ height: "37px" }}
            aria-hidden="true"
            className="wp-block-spacer"
          ></div>

          {/* <p className="has-text-align-center has-medium-font-size">
                    Developed in Swift &amp; Kotlin respectively, the new apps were designed with user experience at their core. The apps provide readers with access to the latest breaking news, as well as local and international news articles
                    across all sectors, including sport, business, lifestyle and entertainment from both the Irish Independent and the Sunday Independent.
                  </p> */}

          <div
            style={{ height: "37px" }}
            aria-hidden="true"
            className="wp-block-spacer"
          ></div>

          <div className="c-heading s-cms-content u-marg-bottom">
            <h4 className="has-text-align-center">Key features include:</h4>
          </div>

          <div className="grids-section grids-s-de4e424a-7381-430b-a89d-40730c1e9996 grids-is-stretch">
            <div className="grids-s-w_i">
              <div className="grids-area grids-a-2ba1bad9-c3e4-4f3c-9406-d69424137fb8">
                <div className="wp-block-image">
                  <figure className="aligncenter size-large">
                    {/* ✅ CHANGED: Simplified image URL */}
                    <img
                      decoding="async"
                      className="wp-image-5223 ls-is-cached lazyloaded"
                      src={
                        props?.portfolioData?.attributes?.key_feature_image_1
                          ?.url
                      }
                    />
                  </figure>
                </div>

                <p className="has-text-align-center has-medium-font-size">{`${props?.portfolioData?.attributes?.key_feature_description_1}`}</p>
              </div>

              <div className="grids-area grids-a-d8e319e4-ed8f-4d17-abd0-bd7b8a115645">
                <div className="wp-block-image">
                  <figure className="aligncenter size-large">
                    {/* ✅ CHANGED: Simplified image URL */}
                    <img
                      decoding="async"
                      alt="app notifications"
                      src={
                        props?.portfolioData?.attributes?.key_feature_image_2
                          ?.url
                      }
                    />
                  </figure>
                </div>

                <p className="has-text-align-center has-medium-font-size">
                  {`${props?.portfolioData?.attributes?.key_feature_description_2}`}
                  &nbsp;
                </p>
              </div>

              <div className="grids-area grids-a-3849c978-6a06-4856-ab4e-a4c8628411ec">
                <div className="wp-block-image">
                  <figure className="aligncenter size-large">
                    {/* ✅ CHANGED: Simplified image URL */}
                    <img
                      decoding="async"
                      src={
                        props?.portfolioData?.attributes?.key_feature_image_3
                          ?.url
                      }
                    />
                  </figure>
                </div>

                <p className="has-text-align-center has-medium-font-size">{`${props?.portfolioData?.attributes?.key_feature_description_3}`}</p>
              </div>
            </div>
          </div>

          {/* <div className="grids-section grids-s-a26457d6-5d54-419a-a328-e08a1d7ab354 grids-is-stretch">
                    <div className="grids-s-w_i">
                      <div className="grids-area grids-a-2e43797d-a240-403b-8a8b-a3c7b510514c">
                        <div className="wp-block-image">
                          <figure className="aligncenter size-large">
                            <img
                              decoding="async"
                              className="wp-image-5224 ls-is-cached lazyloaded"
                              src="https://gcdtech.com/wp-content/uploads/2020/12/bookmark.png"
                            />
                          </figure>
                        </div>

                        <p className="has-text-align-center has-medium-font-size">Bookmarking for later reading&nbsp;</p>
                      </div>

                      <div className="grids-area grids-a-4430cec7-b9be-4d66-9a39-0562a9b6812b">
                        <div className="wp-block-image">
                          <figure className="aligncenter size-large">
                            <img
                              decoding="async"
                              className="wp-image-5221 ls-is-cached lazyloaded"
                              src="https://gcdtech.com/wp-content/uploads/2020/12/text-size.png"
                            />
                          </figure>
                        </div>

                        <p className="has-text-align-center has-medium-font-size">Text resizing to assist with readability&nbsp;</p>
                      </div>

                      <div className="grids-area grids-a-a887b068-6e3a-420a-a508-a86e6ac0bdc5"></div>
                    </div>
                  </div> */}

          <div
            style={{ height: "37px" }}
            aria-hidden="true"
            className="wp-block-spacer"
          ></div>

          {/* <p className="has-text-align-center has-medium-font-size">
                    To drive purchases of news subscriptions, an <strong>in app purchase experience</strong> was designed and implemented across both apps to enable readers to frictionlessly sign up and subscribe to read additional and premium
                    content directly within the app itself. This purchasing option was deemed essential due to its ease of use, the immediate access it grants and the fact that it remains the most popular method by which people purchase within
                    apps.
                  </p> */}

          <div
            style={{ height: "37px" }}
            aria-hidden="true"
            className="wp-block-spacer"
          ></div>

          {/* <div className="wp-block-image">
                    <figure className="aligncenter size-large">
                      <img
                        decoding="async"
                        alt="INM subscription"
                        src="https://gcdtech.com/wp-content/uploads/2020/12/inm-subscribe.png"
                        className="wp-image-5198 lazyload"
                      />
                    </figure>
                  </div> */}

          <div
            style={{ height: "37px" }}
            aria-hidden="true"
            className="wp-block-spacer"
          ></div>

          {/* <p className="has-text-align-center has-medium-font-size">
                    To cater for those readers who subscribed outside of the app and to provide a consistent experience across all platforms, a login function was developed within the app itself to allow subscribers to login using their
                    existing web credentials and access their premium content.&nbsp;&nbsp;
                  </p> */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailSolution;
