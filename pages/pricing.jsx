import React from "react";
import useWindowSize from "../src/hooks/useWindowSize";
import {
  StyledSubHeader,
  StyledUnderline,
} from "../src/components/layout/subpage-layout";

const Pricing = () => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();
  return (
    <>
      <StyledSubHeader>
        <div>Pricing</div>
        <StyledUnderline />
      </StyledSubHeader>

      {isDesktop ? (
        <div className="flex flex-row justify-center px-20 pb-24 bg-white">
          {/* <div className="flex">
            At Modern Software, we believe in transparency as the cornerstone of
            successful software development partnerships. We understand the
            importance of clear and upfront pricing for our clients, as it
            fosters trust and enables informed decision-making. With us, you can
            expect a transparent pricing model that ensures you have a
            comprehensive understanding of costs, allowing you to plan and
            budget effectively. We prioritize open communication and strive to
            eliminate any hidden fees or surprises, ensuring that you receive
            the best value for your investment. With Modern Software, you can
            trust that our pricing reflects our commitment to honesty,
            integrity, and delivering exceptional results.
          </div> */}
          <div className="flex flex-col items-center justify-center w-full rounded bg-green">
            <div
              className="pt-10"
              style={{ font: "normal normal normal 36px/36px Inter" }}
            >
              Pricing Model
            </div>
            <div
              className="p-10"
              style={{ font: "normal normal normal 18px/18px Inter" }}
            >
              Complete pricing transparency for your convience. NDA&#39;s signed
              for every project.
            </div>
            <div className="flex justify-between w-3/5 p-10 mb-10 text-black bg-white rounded-t">
              <div className="w-2/5">
                <div style={{ font: "normal normal normal 24px Inter" }}>
                  Hire a resource
                </div>
                <div className="flex justify-between">
                  <div>ReactJS</div>
                  <div>£300/day</div>
                </div>
                <div className="flex justify-between">
                  <div>React Native</div>
                  <div>£300/day</div>
                </div>
                <div className="flex justify-between">
                  <div>AWS architecture</div>
                  <div>£300/day</div>
                </div>
                <div className="flex justify-between">
                  <div>UI Design</div>
                  <div>£250/day</div>
                </div>
              </div>

              <div className="w-2/5">
                <div style={{ font: "normal normal normal 24px Inter" }}>
                  Hire a Package
                </div>
                <div className="flex justify-between">
                  <div>Fullstack ReactJS + Node JS</div>
                  <div>£400/day</div>
                </div>
                <div className="flex justify-between">
                  <div>Fullstack React Native + Node JS</div>
                  <div>£400/day</div>
                </div>
                <div className="flex justify-between">
                  <div>Fullstack with Architecture</div>
                  <div>£400/day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" bg-green">
          <div
            className="p-10"
            style={{ font: "normal normal normal 18px/18px Inter" }}
          >
            Complete pricing transparency for your convience. NDA&#39;s signed
            for every project.
          </div>
          <div className="flex flex-col justify-between p-10 mb-10 text-black bg-white rounded-t">
            <div>
              <div style={{ font: "normal normal normal 24px Inter" }}>
                Hire a resource
              </div>
              <div className="flex justify-between">
                <div>ReactJS</div>
                <div>£300/day</div>
              </div>
              <div className="flex justify-between">
                <div>React Native</div>
                <div>£300/day</div>
              </div>
              <div className="flex justify-between">
                <div>AWS architecture</div>
                <div>£300/day</div>
              </div>
              <div className="flex justify-between">
                <div>UI Design</div>
                <div>£250/day</div>
              </div>
            </div>

            <div className="mt-10">
              <div style={{ font: "normal normal normal 24px Inter" }}>
                Hire a Package
              </div>
              <div className="flex justify-between">
                <div>Fullstack ReactJS + Node JS</div>
                <div>£400/day</div>
              </div>
              <div className="flex justify-between">
                <div>Fullstack React Native + Node JS</div>
                <div>£400/day</div>
              </div>
              <div className="flex justify-between">
                <div>Fullstack with Architecture</div>
                <div>£400/day</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pricing;
