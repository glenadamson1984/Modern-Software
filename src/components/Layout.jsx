import Logo from "./Logo";
import NavigationControl from "./NavigationControl";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { colours, media } from "../utils/style.utils";
import useWindowSize from "../hooks/useWindowSize";

const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 1rem;

  ${media.forDesktop} {
    margin: 0.5rem 8rem;
  }

  ${media.forDesktopWideScreen} {
    margin: 0.5rem 8rem;
  }

  ${media.forBigDesktopAndUp} {
    margin: 0.5rem 17rem;
  }
`;

const Layout = ({ children }) => {
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  return (
    <>
      <head>
        <title>Modern Software</title>
        <meta name="description" content="Modern Software" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <StyledContainer>
        <Logo />
        {isDesktop ? (
          <NavigationControl />
        ) : (
          <FontAwesomeIcon size="2x" color={colours.red} icon={faBars} />
        )}
      </StyledContainer>

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
