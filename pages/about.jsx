import React from "react";
import SubPageLayout from "../src/components/layout/SubPageLayout";
import useWindowSize from "../src/hooks/useWindowSize";
import CallToActionButton from "../src/components/buttons/action/CallToActionButton";
import Article from "../src/components/article/Article";

const About = () => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  return (
    <SubPageLayout subTitle="Who are we?">
      <Article
        isDesktop={isDesktop}
        headline="Modern Software was established in 2021 with the aim to provide modern software solutions to everyday businesses."
        headlinePosition="left"
        imagePosition="left"
        sentence1="Too often have we came across the off-the-shelf solution that needs huge amount of customisation just to make it fit in with the business."
        sentence2="The alternative bespoke solutions we see are usually rushed to the market to meet the pricing model agreed up front."
        sentence3="Modern Software changes all of this. We believe in agile and in co-operation."
        sentence4="Feel free to check out of brochure below."
        imageUrl="/images/colab.jpg"
        imageAlt="We work better together"
        imageHeight={400}
        imageWidth={400}
      >
        <div className="w-96 pl-5 pt-16">
          <a
            href="/modern-software-brochure.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CallToActionButton onClick={() => null}>
              Download Brochure
            </CallToActionButton>
          </a>
        </div>
      </Article>
      <Article
        isDesktop={isDesktop}
        imagePosition="right"
        sentence1="Our model works with the premise of an MVP (minimal viable product)."
        sentence2="We discuss up front what your solution might look like in basic terms and we strip out the unnecessary features that can be added later on. We then work together in a fully agile following the principles of scrum to deliver your MVP."
        sentence3="Once your MVP is delivered the benefits are enormous, you can see your solution start to take shape and begin to get a feel for the more refined requirements."
        sentence4="We then proceed to a second phase of the software delivery which looks in building upon the MVP to create your final solution."
        imageUrl="/images/fun.png"
        imageAlt="Hello from me!"
        imageHeight={479}
        imageWidth={455}
      />
    </SubPageLayout>
  );
};

export default About;
