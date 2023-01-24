import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SubPageLayout from "../src/components/layout/SubPageLayout";
import { RemoveSlashFromURl } from "../src/components/layout/navigation/NavigationPaths";
import ImageCard from "../src/components/image-card/ImageCard";
import { toast } from "react-toastify";
import CallToActionButton from "../src/components/buttons/action/CallToActionButton";

const Portfolio = () => {
  const { pathname } = useRouter();
  const [portfolioData, setPortfolioData] = useState([])
  useEffect(() => {
    fetchPortfolio()
  }, [])

  const fetchPortfolio = async () => {

    try {
      const response = await fetch(`http://localhost:1337/api/portfolios?populate=*`, {
        method: "GET",
        headers: { Accept: "application/json, text/plain, */*", "Content-Type": "application/json" }
      });

      if (response.status === 200) {
        const res = await response?.json();
        setPortfolioData(res?.data)
        toast.success("Email sent successfully.", { theme: "colored" });
      }
    } catch (e) {
      toast.error("Problem sending email. Please try again later.", { theme: "colored" });
    }
  };


  return (
    <SubPageLayout subTitle={RemoveSlashFromURl(pathname)}>
      {
        portfolioData?.map((item) =>
        (

          <div className="grid gap-20 mt-40">
            <div className="case-study u-pad-bottom-x3 u-pad-bottom-x4@m u-pad-bottom-x5@l">
              <div className="o-wrap">
                <div className="c-card +default +featured">

                  <a href="" className="c-media-box +offset">
                    <img src={`http://localhost:1337${item?.attributes?.image.data.attributes.url}`} />
                  </a>

                  <div className="c-card__content +centered">
                    <div className="u-marg-bottom">
                      <span className="c-pill u-fill-primary">Service</span>
                    </div>
                    <h2 className="c-heading +h3">
                      <a href="">
                        {item.attributes.title}
                      </a>
                    </h2>
                    <p className="u-beta@m">
                      {item.attributes.description}
                    </p>
                    <p className="u-lighten">
                  Mobile App Development,
                  Native iOS Android Apps,
                  Platform Integrations,
                  UX/UI Design
                </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        )

      }
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
        <CallToActionButton
          onClick={async (e) => {
          }}
        >
          Expand
        </CallToActionButton>
      </div>

{/*       
        <ImageCard
          position="right"
          height={412}
          width={604}
          title="Find My Coach"
          imageUrl="/images/fmc.png"
          description="We delivered a full end to end project to build out a brand new product - Find My Coach. UX/UI design via Figma, Dynamodb database, NextJS project utilising NextAuthJs and deployed via Vercel."
        />
      <ImageCard
        position="left"
        height={346}
        width={584}
        title="My Golf Buddy"
        imageUrl="/images/mgb.png"
        description="A complete UI/UX design for a new app concept - My Golf Buddy. So far a design consultation has taken place followed by a delivery of a figma design for a sales website and the mobile application itself. Looking forward to building out the MVP."
      />
      <a href="https://www.terraquest.co.uk/">
        <ImageCard
          position="right"
          height={340}
          width={540}
          title="Terraquest"
          imageUrl="/images/terraquest.png"
          description="We delivered a fully frontend service to help build out the new Northern Ireland Planning Portal suite of web applications. Due for release in 2023 - ReactJS, NextJS, StoryBook"
        />
      </a>
      <a href="https://loughgallfc.co.uk/youth">
        <ImageCard
          position="left"
          title="Loughall Youth FC"
          height={300}
          width={300}
          imageUrl="/images/loughall.png"
          description="Due to the ever increasing popularity of Loughgall Youth F.C the administration to run the club was stopping them from spending the time where they needed it most. Following a few seasons of struggling with paper consent forms they approached use to fully automate this experience saving endless hours for this year and many more to come."
        />
      </a>
      <a href={"https://sensoteq.com/"}>
        <ImageCard
          position="right"
          height={220}
          width={600}
          title="Sensoteq"
          imageUrl="/images/sensoteq.png"
          description="A full stack offering including Frontend and backend development. Consulting on scrum best practices to aid them in getting the best out of their agile processes and aided with architecture discussions to future proof their offering."
        />
      </a>
        <ImageCard
          position="left"
          title="Office Gadgets"
          height={330}
          width={508}
          imageUrl="/images/gadget.png"
          description="A shopify project to deliver a client with a store for dropshipping. We customised the theme, set up the content and hooked into the dropshipping providers for a quick and easy online store."
        /> */}
    </SubPageLayout>
  );
};

export default Portfolio;
