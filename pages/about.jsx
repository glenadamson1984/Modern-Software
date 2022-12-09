import React from "react";
import { useRouter } from "next/router";
import SubPageLayout from "../src/components/layout/SubPageLayout";
import { RemoveSlashFromURl } from "../src/components/layout/navigation/NavigationPaths";
import styled from "styled-components";
import { colours } from "../src/utils/style.utils";
import useWindowSize from "../src/hooks/useWindowSize";
import CallToActionButton from "../src/components/buttons/action/CallToActionButton";
import Image from "next/image";

const About = () => {
  const { pathname } = useRouter();
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  if (!isDesktop) {
    return (
      <SubPageLayout subTitle="Who are we?">
        <div className="font-baloo text-pink text-4xl pt-16 sm:pt-8 px-6 font-thin sm:flex-1">
          Modern Software was established in 2021 with the aim to provide modern
          software solutions to everyday businesses.
        </div>
        <div className="font-baloo text-xl pt-16 sm:pt-8 px-6 font-thin">
          Too often have we came across the off-the-shelf solution that needs
          huge amount of customisation just to make it fit in with the business.
        </div>

        <div className="font-baloo text-xl pt-16 px-6 font-thin">
          The alternative bespoke solutions we see are usually rushed to the
          market to meet the pricing model agreed up front.
        </div>
        <div className="font-baloo  text-xl pt-16 px-6 font-thin">
          <span className="font-baloo text-pink">Modern Software </span> changes
          all of this. We believe in agile and in co-operation.
        </div>
        <div className="flex w-screen justify-center py-10">
          <div className="relative overflow-hidden w-96 h-96 rounded-full">
            <Image
              src="/images/colab.jpg"
              alt="We work better together"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="font-baloo text-xl pt-16 px-6 font-thin">
          Feel free to check out of brochure below.
        </div>
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "5rem 0",
          }}
        >
          <a
            href="/ebrochure.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CallToActionButton variant="secondary" onClick={() => null}>
              Download Brochure
            </CallToActionButton>
          </a>
        </div>
        <div className="font-baloo text-xl pt-8 px-6 font-thin">
          Our model works with the premise of an{" "}
          <span className="font-baloo text-pink">
            MVP (minimal viable product).
          </span>
        </div>
        <div className="font-baloo text-xl pt-16 px-6 font-thin">
          We discuss up front what your solution might look like in basic terms
          and we strip out the unnecessary features that can be added later on.
          We then work together in a{" "}
          <span className="font-baloo text-pink">fully agile</span> fashion
          following the principles of{" "}
          <span className="font-baloo text-pink">scrum</span> to deliver your
          MVP.
        </div>
        <div className="font-baloo text-xl pt-16 px-6 font-thin">
          Once your MVP is delivered the benefits are enormous, you can see your
          solution start to take shape and begin to get a feel for the more
          refined requirements.
        </div>
        <div className="font-baloo text-xl pt-16 px-6 font-thin">
          We then proceed to a second phase of the software delivery which looks
          in building upon the MVP to create your{" "}
          <span className="font-baloo text-pink">final solution.</span>
        </div>
        <div className="flex w-screen justify-center py-10">
          <div className="relative overflow-hidden w-80 h-80 rounded-full">
            <div className="absolute">
              <Image
                src="/images/fun.png"
                alt="Hello from me!"
                width={455}
                height={479}
              />
            </div>
          </div>
        </div>
      </SubPageLayout>
    );
  }

  return (
    <SubPageLayout subTitle="Who are we?">
      <div className="flex flex-row">
        <div className="flex-1 flex-col pl-20">
          <div className="font-baloo text-pink text-4xl pt-8 px-6 font-thin ">
            Modern Software was established in 2021 with the aim to provide
            modern software solutions to everyday businesses.
          </div>
          <div className="flex flex-1 justify-center pt-16 px-6">
            <div className="relative overflow-hidden w-96 h-96 rounded-full hover:animate-zoom">
              <Image
                src="/images/colab.jpg"
                alt="We work better together"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 pr-20">
          <div className="font-baloo text-xl pt-16 sm:pt-8 px-6 font-thin ">
            Too often have we came across the off-the-shelf solution that needs
            huge amount of customisation just to make it fit in with the
            business.
          </div>
          <div className="font-baloo text-xl pt-8 px-6 font-thin">
            The alternative bespoke solutions we see are usually rushed to the
            market to meet the pricing model agreed up front.
          </div>
          <div className="font-baloo  text-xl pt-8 px-6 font-thin">
            <span className="font-baloo text-pink">Modern Software </span>{" "}
            changes all of this. We believe in agile and in co-operation.
          </div>
          <div className="font-baloo text-xl pt-8 px-6 font-thin">
            Feel free to check out of brochure below.
          </div>
          <div className="w-96 pl-5 pt-16">
            <a
              href="/ebrochure.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CallToActionButton variant="secondary" onClick={() => null}>
                Download Brochure
              </CallToActionButton>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-row pb-16">
        <div className="flex-1 flex-col pl-20">
          <div className="font-baloo text-xl pt-16 px-6 font-thin">
            Our model works with the premise of an{" "}
            <span className="font-baloo text-pink">
              MVP (minimal viable product).
            </span>
          </div>
          <div className="font-baloo text-xl pt-8 px-6 font-thin">
            We discuss up front what your solution might look like in basic
            terms and we strip out the unnecessary features that can be added
            later on. We then work together in a{" "}
            <span className="font-baloo text-pink">fully agile</span> fashion
            following the principles of{" "}
            <span className="font-baloo text-pink">scrum</span> to deliver your
            MVP.
          </div>
          <div className="font-baloo text-xl pt-8 px-6 font-thin">
            Once your MVP is delivered the benefits are enormous, you can see
            your solution start to take shape and begin to get a feel for the
            more refined requirements.
          </div>
          <div className="font-baloo text-xl pt-8 px-6 font-thin">
            We then proceed to a second phase of the software delivery which
            looks in building upon the MVP to create your{" "}
            <span className="font-baloo text-pink">final solution.</span>
          </div>
        </div>

        <div className="flex flex-col flex-1 pr-20">
          <div className="flex flex-1 justify-center pt-16">
            <div className="relative overflow-hidden w-80 h-80 rounded-full">
              <div className="absolute hover:animate-zoom">
                <Image
                  src="/images/fun.png"
                  alt="Hello from me!"
                  width={455}
                  height={479}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
};

export default About;
