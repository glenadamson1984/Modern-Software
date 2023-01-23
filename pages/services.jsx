import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RemoveSlashFromURl } from "../src/components/layout/navigation/NavigationPaths";
import SubPageLayout from "../src/components/layout/SubPageLayout";
import ImageCard from "../src/components/image-card/ImageCard";
import Image from "next/image";
import styled from "styled-components";
import { colours } from "../src/utils/style.utils";
import ServiceCard from "../src/components/image-card/ServiceCard";
import { toast } from "react-toastify";
import CallToActionButton from "../src/components/buttons/action/CallToActionButton";

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
const Services = () => {
  const { pathname } = useRouter();
  const [servicesData, setServicesData] = useState([])

  useEffect(() => {
    fetchServices()
  }, [])


  const fetchServices = async () => {

    try {
      const response = await fetch(`http://localhost:1337/api/services?populate=*`, {
        method: "GET",
        headers: { Accept: "application/json, text/plain, */*", "Content-Type": "application/json" }
      });

      if (response.status === 200) {
        const res = await response?.json();
        setServicesData(res?.data)
        toast.success("Email sent successfully.", { theme: "colored" });
      }
    } catch (e) {
      toast.error("Problem sending email. Please try again later.", { theme: "colored" });
    }
  };

  return (
    <SubPageLayout subTitle={"What we do"}>
      {
        servicesData?.map((item) =>
        (

          <div className="grid gap-20 mt-40">
            <div className="case-study u-pad-bottom-x3 u-pad-bottom-x4@m u-pad-bottom-x5@l">
              <div className="o-wrap">
                <div className="c-card +default +featured">

                  <a href="" className="c-media-box +offset">
                    <img src={`http://localhost:1337${item.attributes.service_image.data.attributes.url}`} />
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
                      {item.attributes.service_description}
                    </p>
                    {/* <p className="u-lighten">
                  Mobile App Development,
                  Native iOS Android Apps,
                  Platform Integrations,
                  UX/UI Design
                </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        )

      }
      {/* <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
        <CallToActionButton
          onClick={async (e) => {
            // await handleSubmit(e);
          }}
        >
          Expand
        </CallToActionButton>
      </div> */}

      {/* <StyledRow>
        <ServiceCard
          imageUrl="/images/10168.jpg"
          title="Custom Software Development"
        />
        <ServiceCard
          imageUrl="/images/45.jpg"
          title="Web Application Development"
        />
      </StyledRow>
      <StyledRow>
        <ServiceCard imageUrl="/images/42.jpg" title="Mobile App Development" />
        <ServiceCard imageUrl="/images/36.jpg" title="UX & UI Design" />
      </StyledRow>
      <StyledRow>
        <ServiceCard imageUrl="/images/8600.jpg" title="Software Tuition" />
      </StyledRow> */}


    </SubPageLayout>
  );
};
export default Services;