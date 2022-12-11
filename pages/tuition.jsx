import React from "react";
import { useRouter } from "next/router";
import SubPageLayout from "../src/components/layout/SubPageLayout";
import { RemoveSlashFromURl } from "../src/components/layout/navigation/NavigationPaths";
import useWindowSize from "../src/hooks/useWindowSize";
import Article from "../src/components/article/Article";
import CallToActionButton from "../src/components/buttons/action/CallToActionButton";

const Tuition = () => {
  const { pathname } = useRouter();
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();
  const router = useRouter();

  return (
    <SubPageLayout subTitle={RemoveSlashFromURl(pathname)}>
      <Article
        isDesktop={isDesktop}
        headline="Modern Sofware offers an authentic read world experience that prepares individuals and groups for working in the software industry through a series of courses."
        headlinePosition="left"
        imagePosition="left"
        sentence1="We believe that to learn software it's best to learn from those who are lived and breathed it everyday."
        sentence2="We are passionate about what we do. We offer agile coaching, front-end, back-end and design tuition"
        sentence3="Our 8 week preparation course is designed to teach your the skills and domain knowledge to kick start your journey into Software Development "
        sentence4="The full 8 week course costs just £400."
        imageUrl="/images/teacher.jpg"
        imageAlt="Let's get started!"
        imageHeight={400}
        imageWidth={600}
      >
        {isDesktop ? (
          <div className="w-96 pl-5 pt-16">
            <CallToActionButton onClick={() => router.push("/contactus")}>
              Get in Touch
            </CallToActionButton>
          </div>
        ) : null}
      </Article>
    </SubPageLayout>
  );
};

export default Tuition;
