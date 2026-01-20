import Logo from "./logo/Logo";
import NavigationControl from "./navigation/NavigationControl";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { colours } from "../../utils/style.utils";
import useWindowSize from "../../hooks/useWindowSize";
import CallToActionButton from "../buttons/action/CallToActionButton";
import ContactFooter from "./ContactFooter";
import {
  StyledBody,
  StyledContainer,
  StyledNavigationContainer,
} from "./layout.styles";
import MobileMenu from "./navigation/MobileMenu";
import NewsletterPopup from "../newsletter/NewsletterPopup";
import MouseTrail from "../effects/MouseTrail";
import AIChatModal from "../ai/AIChatModal";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { checkIsDesktop } = useWindowSize();
  const router = useRouter();
  const isDesktop = checkIsDesktop();
  const [showMenu, setShowMenu] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    // Only show on desktop
    if (!isDesktop) return;

    // Check if user has already subscribed or dismissed recently
    const subscribed = localStorage.getItem("newsletterSubscribed");
    const dismissed = localStorage.getItem("newsletterDismissed");
    const shownThisSession = sessionStorage.getItem("newsletterShownThisSession");

    if (subscribed === "true") {
      return; // User already subscribed - never show again
    }

    if (dismissed) {
      const dismissedDate = new Date(dismissed);
      const now = new Date();
      if (now < dismissedDate) {
        return; // Still within dismissal period (24 hours)
      }
    }

    // Don't show again in the same session if already shown
    if (shownThisSession === "true") {
      return;
    }

    let timer;
    let hasShown = false;

    // Show popup after 5 seconds delay (increased from 3)
    timer = setTimeout(() => {
      if (!hasShown) {
        setShowNewsletter(true);
        sessionStorage.setItem("newsletterShownThisSession", "true");
        hasShown = true;
      }
    }, 5000);

    // Exit intent detection (mouse leaving viewport at top)
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShown) {
        setShowNewsletter(true);
        sessionStorage.setItem("newsletterShownThisSession", "true");
        hasShown = true;
        if (timer) {
          clearTimeout(timer);
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDesktop]);

  return (
    <>
      <StyledBody>
        <StyledContainer>
          <Logo />
          {isDesktop ? (
            <StyledNavigationContainer>
              <NavigationControl />
              <CallToActionButton
                animate={false}
                variant="primary"
                onClick={() => router.push("/contactus")}
              >
                Get In Touch
              </CallToActionButton>
            </StyledNavigationContainer>
          ) : (
            <div 
              onClick={() => setShowMenu(!showMenu)}
              style={{
                zIndex: 1001,
                position: "relative",
                cursor: "pointer",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "44px",
                minHeight: "44px",
              }}
            >
              <FontAwesomeIcon size="2x" color={colours.pink} icon={faBars} />
            </div>
          )}
        </StyledContainer>
        {children}
        <ContactFooter />
      </StyledBody>
      {showMenu && (
        <MobileMenu
          showMenu={showMenu}
          onMenuClick={(showMenu) => setShowMenu(showMenu)}
        />
      )}
      {showNewsletter && isDesktop && (
        <NewsletterPopup
          onClose={() => setShowNewsletter(false)}
          isDesktop={isDesktop}
        />
      )}
      <MouseTrail />
      <AIChatModal />
    </>
  );
};

export default Layout;
