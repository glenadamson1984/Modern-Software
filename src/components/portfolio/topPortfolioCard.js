import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";


const TopPortfolioCard = () => {

    let apiCall = useRef();

    const [topPortfolioData, setTopPortfolioData] = useState(Object)

    useEffect(() => {
        fetchTopPortfolio()
    }, [])

    const fetchTopPortfolio = async () => {

        try {
            let queryPrams = `populate=*&filters[priority][$eq]=1`
            const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/portfolios?${queryPrams}`, {
                method: "GET",
                headers: { Accept: "application/json, text/plain, */*", "Content-Type": "application/json" }
            });

            if (response.status === 200) {
                const res = await response?.json();
                setTopPortfolioData(res?.data[0])
            }
        } catch (e) {
            toast.error("Please try again later.", { theme: "colored" });
        }
    };


    return (
        <>
            {
                Object.keys(topPortfolioData)?.length > 0 &&
                <div className="grid gap-20 mt-40">
                    <div className="case-study u-pad-bottom-x3 u-pad-bottom-x4@m u-pad-bottom-x5@l">
                        <div className="o-wrap">
                            <div className="c-card +default +featured">

                                <Link href={`/portfolio/${topPortfolioData?.id}`} className="c-media-box +offset">
                                    <img src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${topPortfolioData?.attributes?.image?.data?.attributes?.url}`} />
                                </Link>

                                <div className="c-card__content +centered">
                                    <div className="u-marg-bottom">
                                        <span className="c-pill u-fill-primary">Project</span>
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
            }
        </>
    )
};

export default TopPortfolioCard;
