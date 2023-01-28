import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";


export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    display: flex;
  }
`;

const Detail = () => {
  const router = useRouter();
  const [portfolioData, setPortfolioData] = useState(Object)
  const [threePortfolioData, setThreePortfolioData] = useState([])

  let { id } = router.query

  useEffect(() => {
    if (id) {
      fetchPortfolio()
      fetchThreePortfolio()
    }
  }, [router.query])

  const fetchPortfolio = async () => {

    try {
      let queryPrams = `populate=*`
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/portfolios/${id}?${queryPrams}`, {
        method: "GET",
        headers: { Accept: "application/json, text/plain, */*", "Content-Type": "application/json" }
      });

      if (response.status === 200) {
        const res = await response?.json();
        setPortfolioData(res?.data)
      }
    } catch (e) {
      toast.error("Please try again later.", { theme: "colored" });
    }
  };

  const fetchThreePortfolio = async (page) => {
    try {
      let queryPrams = `populate=*&pagination[page]=${1}&pagination[pageSize]=3`
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/portfolios?${queryPrams}`,
        {
          method: "GET",
          headers: { Accept: "application/json, text/plain, */*", "Content-Type": "application/json" }
        });

      if (response.status === 200) {
        const res = await response?.json();
        setThreePortfolioData(res?.data)
      }
    } catch (e) {
      toast.error("Please try again later.", { theme: "colored" });
    }
  };

  return (
    <>
      <div className="casestudy-template-default single single-casestudy">
        <div className="u-fill-site " style={{ backgroundColor: "#80cea7" }}>

          <div className="o-wrap +case-study">
            <div className="c-hero">
              <div className="u-marg-bottom-x2">
                <div className="c-breadcrumb breadcrumbs js-anim a-slide-up-fade +white">
                  <p>
                    <span><span>
                      <a href="">Home</a> &raquo;
                      <span><a href="">Case Studies</a> &raquo;
                        <span className="breadcrumb_last" aria-current="page">Independent, News &#038; Media</span>
                      </span></span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="o-grid-box@m +cols-8@m +loose">
                <div className="o-grid-item +span-6@m u-align-self-center@m">
                  <div className="u-marg-bottom"><span className="c-pill u-fill-shade-dark">Project</span></div>
                  <h1 className="c-heading +case-study">
                    {`${portfolioData?.attributes?.title}`} </h1>
                  <p>
                    <p className="u-beta">
                      {`${portfolioData?.attributes?.description}`}
                    </p>
                  </p>
                </div>
                <div className="o-grid-item +span-2@m u-hide@m-">
                  <div className="u-fill-shade">
                    <div className="u-pad-x2 u-fill-shade u-align-center">
                      <img src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${portfolioData?.attributes?.image?.data?.attributes?.url}`}
                        className="style-svg c-hero__logo  " alt=" logo" />
                    </div>
                    <div className="u-hide@m- u-pad-x2">
                      <strong className="u-block u-marg-bottom-half">What we did:</strong>
                      <ul className="u-milli">
                        <li>{`${portfolioData?.attributes?.short_description}`}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="u-fill-site case-study-content ">
            <div className="o-wrap +case-study u-pad-top-x4@l u-pad-top-x2">
              <div className="c-hero__image">
                <img src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${portfolioData?.attributes?.image?.data?.attributes?.url}`} />
              </div>
            </div>
          </div>

          <div className="s-cms-content">

            <div className="grids-section grids-s-72f4ddcd-bf8e-4e04-aa68-efca29a7ad2a +narrow grids-is-stretch alignwide">
              <div className="grids-s-w_i">
                <div className="grids-area grids-a-f8d92a1c-f3f3-48ce-8037-915d660093ad">

                  <div className=" c-heading s-cms-content u-marg-bottom">
                    <h3 className="has-text-align-center">What was the challenge?</h3>
                  </div>
                  <p className="has-text-align-center has-medium-font-size">{`${portfolioData?.attributes?.what_challenge}`}&nbsp;</p>

                  <div className="grids-section grids-s-95d108e4-4b61-4f66-9b6b-66beaa2c20f2 grids-is-stretch">
                    <div className="grids-s-w_i">
                      <div className="grids-area grids-a-38a1d58f-2ac5-4e27-a045-3056201ecb34">
                        <div className=" c-heading s-cms-content u-marg-bottom">
                          <h1 className="has-text-align-center">1.</h1>
                        </div>
                        <p className="has-text-align-center">{`${portfolioData?.attributes?.challenge_1}`}&nbsp;</p>
                      </div>
                      <div className="grids-area grids-a-5a78b234-211f-4f99-8eee-6fd5c8c9bf1e">
                        <div className=" c-heading s-cms-content u-marg-bottom">
                          <h1 className="has-text-align-center">2.</h1>
                        </div>
                        <p className="has-text-align-center">{`${portfolioData?.attributes?.challenge_2}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grids-section grids-s-ea5812f3-e147-4bb6-8859-92a56ccf1902 +narrow grids-is-stretch alignwide">
              <div className="grids-s-w_i">
                <div className="grids-area grids-a-646fdc2f-f4aa-418c-b7de-160cbeb65666">
                  <div className="c-heading s-cms-content u-marg-bottom">
                    <h3 className="has-text-align-center">The Solution</h3>
                  </div>

                  <p className="has-text-align-center has-medium-font-size">A reimagined and redesigned collection of native apps were developed and launched, for use across both iOS and Android mobile and tablet devices.</p>

                  <div style={{ height: "37px" }} aria-hidden="true" className="wp-block-spacer"></div>

                  <div className="wp-block-image">
                    <figure className="aligncenter size-large">
                      <img
                        decoding="async"
                        alt="INM apps"
                        src="https://gcdtech.com/wp-content/uploads/2020/12/Group-44-1-1920x1181.png"
                      />
                    </figure>
                  </div>

                  <div style={{ height: "37px" }} aria-hidden="true" className="wp-block-spacer"></div>

                  <div className="wp-block-image">
                    <figure className="aligncenter size-large is-resized">
                      <img
                        decoding="async"
                        alt="kotlin swift logo"
                        src="https://gcdtech.com/wp-content/uploads/2020/12/kotlin-swift-logos-1200x145.png"
                      />
                    </figure>
                  </div>

                  <div style={{ height: "37px" }} aria-hidden="true" className="wp-block-spacer"></div>

                  <p className="has-text-align-center has-medium-font-size">
                    Developed in Swift &amp; Kotlin respectively, the new apps were designed with user experience at their core. The apps provide readers with access to the latest breaking news, as well as local and international news articles
                    across all sectors, including sport, business, lifestyle and entertainment from both the Irish Independent and the Sunday Independent.
                  </p>

                  <div style={{ height: "37px" }} aria-hidden="true" className="wp-block-spacer"></div>

                  <div className="c-heading s-cms-content u-marg-bottom">
                    <h4 className="has-text-align-center">Key features include:</h4>
                  </div>

                  <div className="grids-section grids-s-de4e424a-7381-430b-a89d-40730c1e9996 grids-is-stretch">
                    <div className="grids-s-w_i">
                      <div className="grids-area grids-a-2ba1bad9-c3e4-4f3c-9406-d69424137fb8">
                        <div className="wp-block-image">
                          <figure className="aligncenter size-large">
                            <img
                              decoding="async"
                              className="wp-image-5223 ls-is-cached lazyloaded"
                              src="https://gcdtech.com/wp-content/uploads/2020/12/breaking.png"
                            />
                          </figure>
                        </div>

                        <p className="has-text-align-center has-medium-font-size">Breaking news alerts</p>
                      </div>

                      <div className="grids-area grids-a-d8e319e4-ed8f-4d17-abd0-bd7b8a115645">
                        <div className="wp-block-image">
                          <figure className="aligncenter size-large">
                            <img
                              decoding="async"
                              alt="app notifications"
                              src="https://gcdtech.com/wp-content/uploads/2020/12/notifications.png"
                            />
                          </figure>
                        </div>

                        <p className="has-text-align-center has-medium-font-size">Push notifications&nbsp;</p>
                      </div>

                      <div className="grids-area grids-a-3849c978-6a06-4856-ab4e-a4c8628411ec">
                        <div className="wp-block-image">
                          <figure className="aligncenter size-large">
                            <img
                              decoding="async"
                              src="https://gcdtech.com/wp-content/uploads/2020/12/settings.png"
                            />
                          </figure>
                        </div>

                        <p className="has-text-align-center has-medium-font-size">Personalised news</p>
                      </div>
                    </div>
                  </div>

                  <div className="grids-section grids-s-a26457d6-5d54-419a-a328-e08a1d7ab354 grids-is-stretch">
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
                  </div>

                  <div style={{ height: "37px" }} aria-hidden="true" className="wp-block-spacer"></div>

                  <p className="has-text-align-center has-medium-font-size">
                    To drive purchases of news subscriptions, an <strong>in app purchase experience</strong> was designed and implemented across both apps to enable readers to frictionlessly sign up and subscribe to read additional and premium
                    content directly within the app itself. This purchasing option was deemed essential due to its ease of use, the immediate access it grants and the fact that it remains the most popular method by which people purchase within
                    apps.
                  </p>

                  <div style={{ height: "37px" }} aria-hidden="true" className="wp-block-spacer"></div>

                  <div className="wp-block-image">
                    <figure className="aligncenter size-large">
                      <img
                        decoding="async"
                        alt="INM subscription"
                        src="https://gcdtech.com/wp-content/uploads/2020/12/inm-subscribe.png"
                        className="wp-image-5198 lazyload"
                      />
                    </figure>
                  </div>

                  <div style={{ height: "37px" }} aria-hidden="true" className="wp-block-spacer"></div>

                  <p className="has-text-align-center has-medium-font-size">
                    To cater for those readers who subscribed outside of the app and to provide a consistent experience across all platforms, a login function was developed within the app itself to allow subscribers to login using their
                    existing web credentials and access their premium content.&nbsp;&nbsp;
                  </p>
                </div>
              </div>
            </div>

            <div className="grids-section grids-s-6af060bc-79a4-4ae1-82a1-8ab96ccee0d6 +narrow grids-is-stretch alignwide">
              <div className="grids-s-w_i">
                <div className="grids-area grids-a-820565c0-e2fb-4262-9dad-ef5bd3931535">
                  <div className="c-heading s-cms-content u-marg-bottom">
                    <h3 className="has-text-align-center">The Results</h3>
                  </div>

                  <p className="has-text-align-center has-medium-font-size">The apps have proved to be a resounding success for Independent.ie.&nbsp;</p>

                  <p className="has-text-align-center has-medium-font-size">
                    The apps are delivering the most engaged audience across all Independent.ie digital platforms, with app users visiting <strong>more frequently</strong> (x5 times more) and <strong>reading&nbsp;50% more articles</strong> on
                    every visit, compared to web.
                  </p>

                  <div className="grids-section grids-s-de11c13e-a9d9-435b-911c-67cdb7e12b6d grids-is-stretch">
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
                  </div>

                  <p className="has-text-align-center has-medium-font-size">
                    The introduction of in-app purchasing has also proven to be the most effective driver for purchases of news subscriptions, with over <strong>42%</strong> of all subscriptions originating via in-app purchases, despite the
                    apps accounting for only <strong>9%</strong> of overall digital readership. The frictionless method, coupled with the highly engaged behaviour, is a recipe for success it would seem!&nbsp;&nbsp;
                  </p>

                  <p className="has-text-align-center has-medium-font-size">To top it all off, the Independent.ie app has been recognised and awarded as ‘News App of the Year’ at the prestigious UK App Awards.&nbsp;</p>

                  <div style={{ height: "33px" }} aria-hidden="true" className="wp-block-spacer"></div>

                  <div className="wp-block-image">
                    <figure className="aligncenter size-large is-resized">
                      <img
                        decoding="async"
                        alt="UK App Awards Logo"
                        className="wp-image-4984 ls-is-cached lazyloaded"
                        src="https://gcdtech.com/wp-content/uploads/2020/11/uk-app-awards-2020-logo-1.png"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div id="" className="c-quote u-pad-x3 u-pad u-pad-x4@m u-pad-x5@l u-fill-grey">
              <blockquote className="o-wrap +narrow">
                <span className="c-quote__authors-pic">
                  <img
                    decoding="async"
                    alt="Henry Minogue Profile Picture"
                    className="ls-is-cached lazyloaded"
                    src="https://gcdtech.com/wp-content/uploads/2020/12/1517721650930-100x80.jpg"
                  />
                </span>
                <footer className="c-quote__details">
                  <p className="c-quote__quote u-beta@m">
                    I am delighted that our technology partner GCD has been recognised for the great work they do alongside our internal technology and product team here in INM, as we collectively mature our digital offerings to be where our
                    customers expect us to be, while exceeding their expectations when we get there. A well merited recognition for the GCD team.
                  </p>
                  <div className="u-translucent u-marg-top">
                    <strong>Henry Minogue</strong>
                    <p>CIO at Independent News &amp; Media</p>
                  </div>
                </footer>
              </blockquote>
            </div>

            <div className="u-pad-top-x3 u-pad-top-x4@m u-pad-top-x5@l u-pad-bottom-x3 u-pad-bottom-x4@m u-pad-bottom-x5@l u-fill-white">
              <div className="o-wrap">
                <div className="c-media-text u-white +contents-flipped u-align-items-center +one-fifth" style={{ backgroundColor: "#006834" }}>
                  <div className="c-media-text__content">
                    <h3 className="c-heading +h4 +1">Company Overview</h3>
                    <div className="c-media-text__text">
                      <p>
                        <span style={{ fontWeight: "400" }}>
                          Independent.ie is the online publication for the Irish Independent, delivering both national and global news across various websites and app platforms. Owned and operated by Independent News &amp; Media (a subsidiary
                          of the international media organisation MediaHuis), the publication is one of many publishing brands within the group, which includes Belfast Telegraph, Sunday Independent, Sunday World, Evening Herald and a range of
                          regional titles.
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

            <div className="u-pad-top-x3 u-pad-top-x4@m u-pad-top-x5@l u-fill-white  u-pad-bottom-x3 " id="carousel-block_5ea757ba010b1">
              <div className="o-wrap">
                <h2 className="c-heading +h3 u-align-center u-marg-bottom u-marg-bottom-x2@m">More Success Stories</h2>
                {threePortfolioData.length && threePortfolioData?.map(item => (

                  <div className="glide glide--ltr glide--slider glide--swipeable">
                    <div className="glide__track" data-glide-el="track">
                      <ul className="glide__slides" style={{ listStyle: "none", margin: "0px", transition: "transform 0ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s", width: "1296px", transform: "translate3d(0px, 0px, 0px)" }}>
                        <li className="glide__slide glide__slide--active" style={{ width: "410.667px", marginRight: "16px" }}>
                          <div className="c-card">
                            <div className="c-card +stacked is-in-view">
                              <Link href={`/portfolio/${item.id}`}>
                                <div className="c-media-box">
                                  <svg xmlns="http://www.w3.org/2000/svg" id="" data-name="Layer 1" viewBox="0 0 583.554 246.667" className="c-card__logo style-svg u-fill-svg-white +on-top replaced-svg svg-replaced-2">
                                    <defs></defs>
                                    <path d="M169.836 102.755a121.356 121.356 0 01237.857 0h-25.618a96.366 96.366 0 00-186.62 0z"></path>
                                    <path
                                      d="M207.67 102.755a84.582 84.582 0 01162.19 0h-25.6a60.44 60.44 0 00-110.981 0zM380.014 207.65h-8.6l8.6-.012a23.1 23.1 0 01-.6-5.417v-30.545c0-16.422-8.978-23.251-25.608-23.251-17.122 0-25.265 6.915-25.265 6.915l5.478 10.637a32.108 32.108 0 0115.168-4.176c3 0 12.123.172 12.123 10.28-1.351-.025-2.665-.037-3.93-.012-21.027.258-29.711 6.411-32.241 14.837v.012a21.4 21.4 0 00-.835 6.116 19.707 19.707 0 005.944 14.616l20.512-.012h10.71a13.276 13.276 0 001.056-.909c.1.319.184.614.282.909v.012a11.52 11.52 0 002 4.029H381.6a12.9 12.9 0 01-1.586-4.029zm-18.718-11.2a23.067 23.067 0 01-10.538 3c-5.6 0-8.966-3.194-8.966-7.235a6.56 6.56 0 012.468-5.293h-4.421l4.421-.012c3.316-2.776 9.273-3.28 13.191-3.28 2.26 0 3.845.172 3.845.172z"
                                    ></path>
                                    <path
                                      d="M345.169 213.017c-6.374 0-11.4-2.051-14.923-5.367h31.222a26.745 26.745 0 01-16.299 5.367zM105.913 207.65h-8.6l8.6-.012a23.1 23.1 0 01-.6-5.417v-30.545c0-16.422-8.966-23.251-25.6-23.251-17.122 0-25.277 6.915-25.277 6.915l5.49 10.637A32.05 32.05 0 0175.1 161.8c2.984 0 12.122.172 12.122 10.28-1.351-.025-2.665-.037-3.93-.012-21.04.258-29.723 6.411-32.253 14.837v.012a21.394 21.394 0 00-.823 6.116 19.743 19.743 0 005.932 14.616l20.524-.012h10.71a13.276 13.276 0 001.056-.909c.086.319.184.614.27.909v.012a11.624 11.624 0 002.015 4.029h16.789a12.7 12.7 0 01-1.599-4.028zm-18.706-11.2a23.105 23.105 0 01-10.538 3c-5.613 0-8.979-3.194-8.979-7.235a6.536 6.536 0 012.481-5.293h-1.793l1.793-.012c3.317-2.776 9.273-3.28 13.191-3.28 2.26 0 3.845.172 3.845.172z"
                                    ></path>
                                    <path
                                      d="M71.068 213.017c-6.362 0-11.4-2.051-14.923-5.367h31.234a26.786 26.786 0 01-16.311 5.367zM583.554 150.4l-14.014 36.518-7.971 20.732-3.231 8.426c-8.708 22.673-22.3 33.039-46.524 23.348 2.517-6.571 4.974-12.786 4.974-12.786 10.906 4.741 19.086 2.53 25.854-14.959l-1.867-4.029-9.654-20.732-16.986-36.518 10.452-.025c6.546 0 8.487 2.359 11.128 8.156l13.35 28.384 1.683 3.562 1.363-3.562 10.895-28.384c2.432-6.326 5.416-8.156 11.962-8.156z"
                                    ></path>
                                    <path
                                      d="M474.771 186.918c-.086-.369-.172-.737-.258-1.118l33.5-.024h7.259c0-29.6-16-37.363-29.035-37.363-21.162 0-29.416 18.718-29.416 31.688a47.34 47.34 0 00.455 6.805v.012c1.461 10.317 6.264 16.8 11.963 20.732l40.261-.012a28.794 28.794 0 002.6-1.474l-4.09-11.25c-18.673 8.45-30.169 3.856-33.239-7.996zm11.582-25.6c8.781 0 10.918 10.157 10.918 12.184-3.1 0-22.844.073-22.844.073 1.547-9.475 6.497-12.253 11.926-12.253zM487.028 213.017a32.058 32.058 0 01-17.784-5.367h40.261a50.485 50.485 0 01-22.477 5.367zM455.156 210.143c-9.3 4.213-20.045 4.09-25.793-2.493-2.554-2.935-4.126-7.148-4.126-12.835v-75.793h18.018v71.249c0 5.65 2.5 8.622 8.634 6.718l2.653 10.661zM419.575 210.143c-9.3 4.213-20.045 4.09-25.793-2.493-2.555-2.935-4.127-7.148-4.127-12.835v-75.793h18.018v71.249c0 5.65 2.506 8.622 8.634 6.718l2.653 10.661zM332.6 125.618l-25.141 61.3-8.5 20.732-2.2 5.367h-14.732l-2.2-5.367-8.5-20.732-25.142-61.3h13.326c5.736 0 7.738 3.832 9.937 9.211L289.4 183.54l19.946-48.711c2.2-5.379 4.2-9.211 9.936-9.211zM213.32 213.017a32.058 32.058 0 01-17.784-5.367H235.8a50.485 50.485 0 01-22.48 5.367zM201.063 186.918c-.086-.369-.172-.737-.258-1.118l33.5-.024h7.259c0-29.6-16-37.363-29.035-37.363-21.162 0-29.428 18.718-29.428 31.688a47.277 47.277 0 00.467 6.805v.012c1.461 10.317 6.264 16.8 11.963 20.732l40.261-.012a28.794 28.794 0 002.6-1.474l-4.09-11.25c-18.673 8.45-30.181 3.856-33.239-7.996zm11.582-25.6c8.781 0 10.918 10.157 10.918 12.184-3.095 0-22.844.073-22.844.073 1.547-9.475 6.481-12.253 11.926-12.253zM175.786 169v42.681h-18.092v-39.833c0-7.394-6.215-12.639-17.944-7.1a43.476 43.476 0 00-4.938 2.788v44.142h-18.091v-61.3h18.091v4.3c21.988-14.961 40.974-5.835 40.974 14.322zM21.362 140.27v20.536h25.031v14.726H21.362v36.147H3.271v-86.061h50.3c0 9.678-6.289 14.652-15 14.652z"
                                    ></path>
                                  </svg>
                                  <img
                                    decoding="async"
                                    alt="Fane Valley"
                                    className="ls-is-cached lazyloaded"
                                    src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${item?.attributes?.image?.data?.attributes?.url}`}
                                  />
                                </div>
                              </Link>
                              <div className="c-card__content +centered">
                                <h2 className="c-heading +h4 u-pad-bottom"><Link href={`/portfolio/${item.id}`}>{`${item?.attributes?.title}`}</Link></h2>
                                {`${item?.attributes?.description}`}
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="c-start-a-project u-fill-white a-color-wipe u-white +on-white-background u-pos-rel is-in-view" id="start-a-project-block_5ea757f1010b2">
              <div className="o-wrap u-flex u-align-items-center u-pos-rel">
                <div className="c-start-a-project__content is-in-view">
                  {/* <span className="c-morse-logo u-primary u-milli a-slide-up-fade a-stacked__child +500 is-in-view"></span> */}
                  <p className="u-bold u-delta u-epsilon@l u-3/4@l u-marg-top-bottom u-pad-right-x2 a-slide-up-fade a-stacked__child +600 is-in-view">Let’s build something incredible together</p>
                  <p className="u-beta u-marg-bottom-x2 u-3/4@l u-pad-right-x2 a-slide-up-fade a-stacked__child +700 is-in-view">With a few details we’ll be able to kickstart your custom software project.</p>
                  <a className="c-button +arrow-animation +1 +large@m" href="https://gcdtech.com/start-a-project/" target="_self">Start a Project</a>
                </div>
                <div className="c-start-a-project__image u-hide@m- a-bounce-in-bottom js-anim a-stacked__child +600">
                  <img
                    alt="Retro boy with robot"
                    className="ls-is-cached lazyloaded"
                    src="https://gcdtech.com/wp-content/themes/gcdtech-theme/images/retro-collection/retro-boy.png"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>

  );
};
export default Detail;