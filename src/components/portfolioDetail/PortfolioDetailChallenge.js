import React from "react";

const PortfolioDetailChallenge = (props) => {

    return (
        <div className="grids-section grids-s-72f4ddcd-bf8e-4e04-aa68-efca29a7ad2a +narrow grids-is-stretch alignwide">
            <div className="grids-s-w_i">
                <div className="grids-area grids-a-f8d92a1c-f3f3-48ce-8037-915d660093ad">

                    <div className=" c-heading s-cms-content u-marg-bottom">
                        <h3 className="has-text-align-center">What was the challenge?</h3>
                    </div>
                    <p className="has-text-align-center has-medium-font-size">{`${props?.portfolioData?.attributes?.what_challenge}`}&nbsp;</p>

                    <div className="grids-section grids-s-95d108e4-4b61-4f66-9b6b-66beaa2c20f2 grids-is-stretch">
                        <div className="grids-s-w_i">
                            <div className="grids-area grids-a-38a1d58f-2ac5-4e27-a045-3056201ecb34">
                                <div className=" c-heading s-cms-content u-marg-bottom">
                                    <h1 className="has-text-align-center">1.</h1>
                                </div>
                                <p className="has-text-align-center">{`${props?.portfolioData?.attributes?.challenge_1}`}&nbsp;</p>
                            </div>
                            <div className="grids-area grids-a-5a78b234-211f-4f99-8eee-6fd5c8c9bf1e">
                                <div className=" c-heading s-cms-content u-marg-bottom">
                                    <h1 className="has-text-align-center">2.</h1>
                                </div>
                                <p className="has-text-align-center">{`${props?.portfolioData?.attributes?.challenge_2}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PortfolioDetailChallenge;
