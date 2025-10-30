import React from "react";
import { useRouter } from "next/router";
import SubPageLayout from "../../src/components/layout/SubPageLayout";
import useWindowSize from "../../src/hooks/useWindowSize";

// ✅ ADD THIS: Import static data
import servicesData from "../../data/services.json";

const Detail = () => {
  const router = useRouter();
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  let { id } = router.query;

  // ✅ CHANGED: Find service by ID from static data
  const serviceData = servicesData.find((s) => s.id === parseInt(id));

  // ❌ REMOVED: All this fetching logic
  // const [servicesData, setServicesData] = useState("");
  // useEffect(() => {
  //   const fetchServices = async () => { ... };
  //   fetchServices();
  // }, [id]);

  // Handle case where service doesn't exist
  if (!serviceData) {
    return <div>Service not found</div>;
  }

  if (!isDesktop) {
    return (
      <SubPageLayout subTitle={"How we work?"}>
        <div className="pb-10">
          <div className="px-6 pt-16 text-4xl font-Inter text-pink sm:pt-8 sm:flex-1">
            {serviceData?.attributes?.title}
          </div>

          <div className="px-6 pt-16 text-xl font-Inter sm:pt-8">
            {serviceData?.attributes?.service_description}
          </div>
        </div>
        <div className="flex flex-row items-center pb-10">
          <div className="flex-col flex-1">
            <div className="px-6 pt-8 text-4xl font-Inter text-pink ">
              How we work
            </div>
            <div className="flex flex-col justify-between px-6">
              <div className="flex flex-col">
                <div className="pt-4 text-xl font-Inter">
                  <span className="text-pink">Planning</span>
                </div>
                <div className="text-xl font-Inter">
                  Define the project scope, objectives, and requirements,
                  establish a timeline, and allocate resources.
                </div>
                <div className="pt-4 text-xl font-Inter">
                  <span className="text-pink">Team Building</span>
                </div>
                <div className="text-xl font-Inter">
                  Form a team of experienced and qualified professionals with
                  the necessary skills and expertise to develop the software
                  application.
                </div>
                <div className="pt-4 text-xl font-Inter">
                  <span className="text-pink">Communication</span>
                </div>
                <div className="text-xl font-Inter">
                  Establish clear communication channels and set up regular
                  meetings to ensure that all stakeholders are informed of
                  project progress.
                </div>
                <div className="pt-4 text-xl font-Inter">
                  <span className="text-pink">Agile Development</span>
                </div>
                <div className="text-xl font-Inter">
                  Adopt an agile development methodology that enables the team
                  to respond to changes in requirements and make necessary
                  adjustments throughout the project lifecycle.
                </div>
              </div>
              <div className="flex flex-col">
                <div className="pt-4 text-xl font-Inter">
                  <span className="text-pink">Testing</span>
                </div>
                <div className="text-xl font-Inter">
                  Conduct thorough testing to ensure that the software
                  application meets all requirements and functions as intended.
                </div>
                <div className="pt-4 text-xl font-Inter">
                  <span className="text-pink">Deployment</span>
                </div>
                <div className="text-xl font-Inter">
                  Deploy the software application to the target environment and
                  ensure that all necessary configurations and integrations are
                  in place.
                </div>
                <div className="pt-4 text-xl font-Inter">
                  <span className="text-pink">Maintenance and Support</span>
                </div>
                <div className="text-xl font-Inter">
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
          <div className="px-6 pt-8 text-4xl font-Inter text-pink ">
            {serviceData?.attributes?.title}
          </div>
          <div className="px-6 pt-16 text-xl font-Inter sm:pt-8 ">
            {serviceData?.attributes?.service_description}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center pb-10">
        <div className="flex-col flex-1 px-20">
          <div className="px-6 pt-8 text-4xl font-Inter text-pink ">
            How we work
          </div>
          <div className="flex flex-row justify-between px-6">
            <div className="flex flex-col w-2/4 mr-16">
              <div className="pt-4 text-xl font-Inter">
                <span className="text-pink">Planning</span>
              </div>
              <div className="text-xl font-Inter">
                Define the project scope, objectives, and requirements,
                establish a timeline, and allocate resources.
              </div>
              <div className="pt-4 text-xl font-Inter">
                <span className="text-pink">Team Building</span>
              </div>
              <div className="text-xl font-Inter">
                Form a team of experienced and qualified professionals with the
                necessary skills and expertise to develop the software
                application.
              </div>
              <div className="pt-4 text-xl font-Inter">
                <span className="text-pink">Communication</span>
              </div>
              <div className="text-xl font-Inter">
                Establish clear communication channels and set up regular
                meetings to ensure that all stakeholders are informed of project
                progress.
              </div>
              <div className="pt-4 text-xl font-Inter">
                <span className="text-pink">Agile Development</span>
              </div>
              <div className="text-xl font-Inter">
                Adopt an agile development methodology that enables the team to
                respond to changes in requirements and make necessary
                adjustments throughout the project lifecycle.
              </div>
            </div>
            <div className="flex flex-col w-2/4">
              <div className="pt-4 text-xl font-Inter">
                <span className="text-pink">Testing</span>
              </div>
              <div className="text-xl font-Inter">
                Conduct thorough testing to ensure that the software application
                meets all requirements and functions as intended.
              </div>
              <div className="pt-4 text-xl font-Inter">
                <span className="text-pink">Deployment</span>
              </div>
              <div className="text-xl font-Inter">
                Deploy the software application to the target environment and
                ensure that all necessary configurations and integrations are in
                place.
              </div>
              <div className="pt-4 text-xl font-Inter">
                <span className="text-pink">Maintenance and Support</span>
              </div>
              <div className="text-xl font-Inter">
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
