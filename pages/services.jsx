import React from "react";
import { useRouter } from "next/router";
import { RemoveSlashFromURl } from "../src/components/layout/navigation/NavigationPaths";
import SubPageLayout from "../src/components/layout/SubPageLayout";
import ImageCard from "../src/components/image-card/ImageCard";

const Services = () => {
  const { pathname } = useRouter();

  return (
    <SubPageLayout subTitle={RemoveSlashFromURl(pathname)}>
      <ImageCard
        position="right"
        title="Custom Software Development"
        imageUrl="/images/custom.jpg"
        description="Our business operates around the premise that your requirements are unique and to meet those unique requirement you need a unique solution. All our code is built custom for your needs."
      />
      <ImageCard
        position="left"
        title="Web Application Development"
        imageUrl="/images/web.jpg"
        description="We take pride in the design of our Software. We aim to make code functional but stylish. We believe strongly that a web application needs to feel pleasing and easy to use."
      />
      <ImageCard
        position="right"
        title="Mobile App Development"
        imageUrl="/images/mobile.jpg"
        description="Whether your simply want your web app to be responsive on the web or you want a fully native experience, we can do it all. From android to ios we can produce a solution on every platform."
      />
      <ImageCard
        position="left"
        title="UX & UI Design"
        imageUrl="/images/ux.jpg"
        description="There is no doubt that a well thought of design is better than thinking solely of functionality. Bring attention to the correct location in your app at the right time can be the difference between an easy to use app and one the user can't wait to close. We work hard on the user interface designs as well as the user experience."
      />
      <ImageCard
        position="right"
        title="Software Tuition"
        imageUrl="/images/tuition.jpg"
        description="We believe strongly in the profession of software engineering and therefore we do our best to promote the best standards for developers seeking a real experience. Our tuition teaches you more than how to code. We teach you how to be an engineer and how that feels in the real world."
      />
    </SubPageLayout>
  );
};

export default Services;
