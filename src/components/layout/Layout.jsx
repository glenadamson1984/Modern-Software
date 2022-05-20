import Logo from "./Logo";
import NavigationControl from "./NavigationControl";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { colours, media } from "../../utils/style.utils";
import useWindowSize from "../../hooks/useWindowSize";

const StyledBody = styled.body`
  display: flex;
  flex-direction: column;

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

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNavigationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCallToAction = styled.div`
  background: ${colours.red};
  border-radius: 30px;
  opacity: 1;
  padding: 1rem;

  &:hover {
    background: ${colours.white};
    color: ${colours.red};
`;

const StyledCallToActionText = styled.div`
  text-align: center;
  font: normal normal medium 20px/26px Roboto;
  font-weight: bold;
  font-size: 20px;
  padding: 0 1rem;
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
      <StyledBody>
        <StyledContainer>
          <Logo />
          {isDesktop ? (
            <StyledNavigationContainer>
              <NavigationControl />
              <StyledCallToAction>
                <StyledCallToActionText>Get in Touch</StyledCallToActionText>
              </StyledCallToAction>
            </StyledNavigationContainer>
          ) : (
            <FontAwesomeIcon size="2x" color={colours.red} icon={faBars} />
          )}
        </StyledContainer>
        {children}
      </StyledBody>
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
