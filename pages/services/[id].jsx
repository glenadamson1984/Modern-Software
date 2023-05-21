import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import SubPageLayout from "../../src/components/layout/SubPageLayout";
import useWindowSize from "../../src/hooks/useWindowSize";

const Detail = () => {
  const router = useRouter();
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  let { id } = router.query;
  const [servicesData, setServicesData] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        let queryPrams = `populate=*`;
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/services/${id}?${queryPrams}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          const res = await response?.json();
          setServicesData(res?.data);
        }
      } catch (e) {
        toast.error("Please try again later.", { theme: "colored" });
      }
    };

    fetchServices();
  }, [id]);

  if (!isDesktop) {
    return (
      <SubPageLayout subTitle={"How we work?"}>
        <div className="pb-10">
          <div className="px-6 pt-16 text-4xl font-thin font-Inter text-pink sm:pt-8 sm:flex-1">
            {servicesData?.attributes?.title}
          </div>

          <div className="px-6 pt-16 text-xl font-thin font-Inter sm:pt-8">
            {servicesData?.attributes?.service_description}
          </div>
        </div>
        <div className="flex flex-row items-center pb-10">
          <div className="flex-col flex-1">
            <div className="px-6 pt-8 text-4xl font-thin font-Inter text-pink ">
              How we work
            </div>
            <div className="flex flex-col justify-between px-6">
              <div className="flex flex-col">
                <div className="pt-4 text-xl font-thin font-Inter">
                  <span className="text-pink">Planning</span>
                </div>
                <div className="text-xl font-thin font-Inter">
                  Define the project scope, objectives, and requirements,
                  establish a timeline, and allocate resources.
                </div>
                <div className="pt-4 text-xl font-thin font-Inter">
                  <span className="text-pink">Team Building</span>
                </div>
                <div className="text-xl font-thin font-Inter">
                  Form a team of experienced and qualified professionals with
                  the necessary skills and expertise to develop the software
                  application.
                </div>
                <div className="pt-4 text-xl font-thin font-Inter">
                  <span className="text-pink">Communication</span>
                </div>
                <div className="text-xl font-thin font-Inter">
                  Establish clear communication channels and set up regular
                  meetings to ensure that all stakeholders are informed of
                  project progress.
                </div>
                <div className="pt-4 text-xl font-thin font-Inter">
                  <span className="text-pink">Agile Development</span>
                </div>
                <div className="text-xl font-thin font-Inter">
                  Adopt an agile development methodology that enables the team
                  to respond to changes in requirements and make necessary
                  adjustments throughout the project lifecycle.
                </div>
              </div>
              <div className="flex flex-col">
                <div className="pt-4 text-xl font-thin font-Inter">
                  <span className="text-pink">Testing</span>
                </div>
                <div className="text-xl font-thin font-Inter">
                  Conduct thorough testing to ensure that the software
                  application meets all requirements and functions as intended.
                </div>
                <div className="pt-4 text-xl font-thin font-Inter">
                  <span className="text-pink">Deployment</span>
                </div>
                <div className="text-xl font-thin font-Inter">
                  Deploy the software application to the target environment and
                  ensure that all necessary configurations and integrations are
                  in place.
                </div>
                <div className="pt-4 text-xl font-thin font-Inter">
                  <span className="text-pink">Maintenance and Support</span>
                </div>
                <div className="text-xl font-thin font-Inter">
                  Provide ongoing maintenance and support to ensure that the
                  software application continues to function properly and meets
                  user needs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </SubPageLayout>
    );
  }

  return (
    <SubPageLayout subTitle={"How we work"}>
      <div className="flex flex-row items-center pb-10">
        <div className="flex-col flex-1 pl-20">
          <div className="px-6 pt-8 text-4xl font-thin font-Inter text-pink ">
            {servicesData?.attributes?.title}
          </div>
          <div className="px-6 pt-16 text-xl font-thin font-Inter sm:pt-8 ">
            {servicesData?.attributes?.service_description}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center pb-10">
        <div className="flex-col flex-1 px-20">
          <div className="px-6 pt-8 text-4xl font-thin font-Inter text-pink ">
            How we work
          </div>
          <div className="flex flex-row justify-between px-6">
            <div className="flex flex-col w-2/4 mr-16">
              <div className="pt-4 text-xl font-thin font-Inter">
                <span className="text-pink">Planning</span>
              </div>
              <div className="text-xl font-thin font-Inter">
                Define the project scope, objectives, and requirements,
                establish a timeline, and allocate resources.
              </div>
              <div className="pt-4 text-xl font-thin font-Inter">
                <span className="text-pink">Team Building</span>
              </div>
              <div className="text-xl font-thin font-Inter">
                Form a team of experienced and qualified professionals with the
                necessary skills and expertise to develop the software
                application.
              </div>
              <div className="pt-4 text-xl font-thin font-Inter">
                <span className="text-pink">Communication</span>
              </div>
              <div className="text-xl font-thin font-Inter">
                Establish clear communication channels and set up regular
                meetings to ensure that all stakeholders are informed of project
                progress.
              </div>
              <div className="pt-4 text-xl font-thin font-Inter">
                <span className="text-pink">Agile Development</span>
              </div>
              <div className="text-xl font-thin font-Inter">
                Adopt an agile development methodology that enables the team to
                respond to changes in requirements and make necessary
                adjustments throughout the project lifecycle.
              </div>
            </div>
            <div className="flex flex-col w-2/4">
              <div className="pt-4 text-xl font-thin font-Inter">
                <span className="text-pink">Testing</span>
              </div>
              <div className="text-xl font-thin font-Inter">
                Conduct thorough testing to ensure that the software application
                meets all requirements and functions as intended.
              </div>
              <div className="pt-4 text-xl font-thin font-Inter">
                <span className="text-pink">Deployment</span>
              </div>
              <div className="text-xl font-thin font-Inter">
                Deploy the software application to the target environment and
                ensure that all necessary configurations and integrations are in
                place.
              </div>
              <div className="pt-4 text-xl font-thin font-Inter">
                <span className="text-pink">Maintenance and Support</span>
              </div>
              <div className="text-xl font-thin font-Inter">
                Provide ongoing maintenance and support to ensure that the
                software application continues to function properly and meets
                user needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
};
export default Detail;
