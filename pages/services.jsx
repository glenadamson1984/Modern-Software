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
          <div className="container-fluid d-flex">
            <div className="row border">
              <div className="col-6">
                <div className="img">
                  <img src={`http://localhost:1337${item.attributes.service_image.data.attributes.url}`} width="100%" />
                </div>
              </div>
              <div className="col-6">
                <span className="nav-link bg-dark text-light w-50 p-1 mt-2 text-center">success story</span>
                <h2 className="h-2 mt-2">{item.attributes.title}</h2>
                <p className="text-dark">{item.attributes.service_description}</p>
              </div>
            </div>
          </div>
        )
        )
      }

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
      </StyledRow> */}
      
      <StyledRow>
        <ServiceCard imageUrl="/images/8600.jpg" title="Software Tuition" />
      </StyledRow>
    </SubPageLayout>
  );
};
export default Services;