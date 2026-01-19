import React from "react";

const PortfolioDetailHeader = (props) => {
  return (
    <>
      <div className="o-wrap +case-study">
        <div className="c-hero">
          <div className="o-grid-box@m +cols-8@m +loose">
            <div className="o-grid-item +span-6@m u-align-self-center@m">
              <div className="u-marg-bottom">
                <span className="c-pill u-fill-shade-dark">Project</span>
              </div>
              <h1 className="c-heading +case-study">
                {`${props?.portfolioData?.attributes?.title}`}{" "}
              </h1>
              <p>
                <p className="u-beta">
                  {`${props?.portfolioData?.attributes?.description}`}
                </p>
              </p>
            </div>
            <div className="o-grid-item +span-2@m u-hide@m-">
              <div className="u-fill-shade">
                <div className="u-pad-x2 u-fill-shade u-align-center" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "120px" }}>
                  {/* ✅ CHANGED: Simplified image URL */}
                  {props?.portfolioData?.attributes?.client_website ? (
                    <a
                      href={props?.portfolioData?.attributes?.client_website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        display: "block", 
                        cursor: "pointer",
                        maxWidth: "100%",
                        width: "100%",
                        textAlign: "center"
                      }}
                      aria-label={`Visit ${props?.portfolioData?.attributes?.title} website`}
                    >
                      <img
                        src={props?.portfolioData?.attributes?.right_logo?.url}
                        className="style-svg c-hero__logo"
                        alt={`${props?.portfolioData?.attributes?.title} logo`}
                        style={{ 
                          transition: "opacity 0.3s ease",
                          maxWidth: "100%",
                          maxHeight: "120px",
                          height: "auto !important",
                          width: "auto !important",
                          objectFit: "contain",
                          display: "block",
                          margin: "0 auto"
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                      />
                    </a>
                  ) : (
                    <img
                      src={props?.portfolioData?.attributes?.right_logo?.url}
                      className="style-svg c-hero__logo"
                      alt={`${props?.portfolioData?.attributes?.title} logo`}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "120px",
                        height: "auto !important",
                        width: "auto !important",
                        objectFit: "contain",
                        display: "block",
                        margin: "0 auto"
                      }}
                    />
                  )}
                </div>
                <div className="u-hide@m- u-pad-x2">
                  <strong className="u-block u-marg-bottom-half">
                    What we did:
                  </strong>
                  <ul className="u-milli">
                    <li>{`${props?.portfolioData?.attributes?.short_description}`}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-fill-site case-study-content" style={{ backgroundColor: "#7bcda4" }}>
        <div className="o-wrap +case-study u-pad-top-x4@l u-pad-top-x2">
          <div className="c-hero__image">
            {/* ✅ CHANGED: Simplified image URL */}
            <img
              src={props?.portfolioData?.attributes?.image?.url}
              alt={props?.portfolioData?.attributes?.title}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailHeader;
