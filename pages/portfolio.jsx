import React from "react";
import { useRouter } from "next/router";
import SubPageLayout from "../src/components/layout/SubPageLayout";
import { RemoveSlashFromURl } from "../src/components/layout/navigation/NavigationPaths";
import ImageCard from "../src/components/image-card/ImageCard";

const Portfolio = () => {
  const { pathname } = useRouter();

  return (
    <SubPageLayout subTitle={RemoveSlashFromURl(pathname)}>
      <a href="https://www.terraquest.co.uk/">
        <ImageCard
          position="right"
          height={191}
          width={584}
          title="Terraquest"
          imageUrl="/images/TerraQuest.png"
          description="We delivered a fully frontend service to help build out the new Northern Ireland Planning Portal suite of web applications. Due for release in 2023 - ReactJS, NextJS, StoryBook"
        />
      </a>
      <a href="https://loughgallfc.co.uk/youth">
        <ImageCard
          position="left"
          title="Loughall Youth FC"
          height={300}
          width={300}
          imageUrl="/images/loughgall.jpg"
          description="Due to the ever increasing popularity of Loughgall Youth F.C the administration to run the club was stopping them from spending the time where they needed it most. Following a few seasons of struggling with paper consent forms they approached use to fully automate this experience saving endless hours for this year and many more to come."
        />
      </a>
      <a href={"http://find-my-coach.co.uk/"}>
        <ImageCard
          position="right"
          height={366}
          width={584}
          title="Find My Coach"
          imageUrl="/images/findmycoach.png"
          description="We delivered a full end to end project to build out a brand new product - Find My Coach. UX/UI design via Figma, Dynamodb database, NextJS project utilising NextAuthJs and deployed via Vercel."
        />
      </a>
      <a href={"https://office-gadgets.co.uk/"}>
        <ImageCard
          position="left"
          title="Office Gadgets"
          height={330}
          width={508}
          imageUrl="/images/officegadgets.png"
          description="A shopify project to deliver a client with a store for dropshipping. We customised the theme, set up the content and hooked into the dropshipping providers for a quick and easy online store."
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
    </SubPageLayout>
  );
};

export default Portfolio;
