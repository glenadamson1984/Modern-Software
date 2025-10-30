import React from "react";
import { useRouter } from "next/router";
import { RemoveSlashFromURl } from "../../src/components/layout/navigation/NavigationPaths";
import SubPageLayout from "../../src/components/layout/SubPageLayout";
import ImageCard from "../../src/components/image-card/ImageCard";
import styled from "styled-components";
import { colours } from "../../src/utils/style.utils";
import ServiceCard from "../../src/components/image-card/ServiceCard";
import CallToActionButton from "../../src/components/buttons/action/CallToActionButton";

import servicesData from "../../data/services.json";

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

  return (
    <SubPageLayout subTitle={"What we do"}>
      {servicesData?.map((item, index) => (
        <div key={index} className="grid gap-20">
          <div className="case-study u-pad-bottom-x3 u-pad-bottom-x4@m u-pad-bottom-x5@l">
            <div className="o-wrap">
              <div className="c-card +default +featured">
                <a
                  href={`/services/${item?.id}`}
                  className="c-media-box +offset"
                >
                  <img
                    src={item?.attributes?.service_image?.url}
                    alt={item?.attributes?.title}
                  />
                </a>
                <div className="c-card__content +centered">
                  <div className="u-marg-bottom">
                    <span className="c-pill u-fill-primary">Service</span>
                  </div>
                  <h2 className="c-heading +h3">
                    <a href={`/services/${item?.id}`}>
                      {item?.attributes?.title}
                    </a>
                  </h2>
                  <p className="u-lighten">
                    Mobile App Development, Native iOS Android Apps, Platform
                    Integrations, UX/UI Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </SubPageLayout>
  );
};

export default Services;
