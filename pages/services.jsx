import React from "react";
import { useRouter } from "next/router";
import { RemoveSlashFromURl } from "../src/components/layout/navigation/NavigationPaths";
import SubPageLayout from "../src/components/layout/SubPageLayout";

const Services = () => {
  const { pathname } = useRouter();

  return (
    <SubPageLayout subTitle={RemoveSlashFromURl(pathname)}>
      Currently under construction
    </SubPageLayout>
  );
};

export default Services;
