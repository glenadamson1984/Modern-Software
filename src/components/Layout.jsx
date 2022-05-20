import Logo from "./Logo";
import NavigationControl from "./NavigationControl";
import Link from "next/link";
import React, { useState } from "react";
import BackgroundDesign from "./BackgroundDesign";

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div>
        <head>
          <title>Modern Software</title>
          <meta name="description" content="Modern Software" />
          <link rel="icon" href="/favicon.ico" />
        </head>
        {/*<BackgroundDesign />*/}
        <div>
          <Logo />
          {/*<div className="flex text-3xl">*/}
          {/*  <NavigationControl*/}
          {/*    isOpen={isMobileMenuOpen}*/}
          {/*    onOpen={() => setIsMobileMenuOpen(!isMobileMenuOpen)}*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
      {/*{isMobileMenuOpen && (*/}
      {/*  <div className="flex justify-end h-full text-2xl sm:hidden bg-slate-800">*/}
      {/*    <div className="flex flex-col gap-4 m-5">*/}
      {/*      <h1 style={{ cursor: "pointer" }} className="title">*/}
      {/*        <Link href="/projects">*/}
      {/*          <a>Projects</a>*/}
      {/*        </Link>*/}
      {/*      </h1>*/}
      {/*      <h1 className="title">*/}
      {/*        <Link href="/about">*/}
      {/*          <a>About</a>*/}
      {/*        </Link>*/}
      {/*      </h1>*/}
      {/*      <h1 className="title">*/}
      {/*        <Link href="/contactus">*/}
      {/*          <a>Contact us</a>*/}
      {/*        </Link>*/}
      {/*      </h1>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </>
  );
};

export default Layout;
