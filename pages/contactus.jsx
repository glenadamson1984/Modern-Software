import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faEnvelope,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import useWindowSize from "../src/hooks/useWindowSize";
import SEO from "../src/components/SEO";
import {
  StyledContactHero,
  StyledContactHeroContent,
  StyledContactHeroTitle,
  StyledContactHeroSubtitle,
  StyledContactSection,
  StyledContactContainer,
  StyledContactForm,
  StyledFormTitle,
  StyledFieldSet,
  StyledIcon,
  StyledInput,
  StyledTextArea,
  StyledErrorMessage,
  StyledContactDetails,
  StyledContactDetailsTitle,
  StyledContactDetailsContainer,
  StyledContactDetailItem,
  StyledContactDetailIcon,
  StyledContactDetailContent,
  StyledContactDetailType,
  StyledContactDetailValue,
} from "../page-styles/contactus.styles";
import CallToActionButton from "../src/components/buttons/action/CallToActionButton";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();
  const router = useRouter();

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    let data = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    if (
      data.name === "" ||
      data.email === "" ||
      data.message === "" ||
      data.phone === ""
    ) {
      setIsError(true);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        setSubmitted(true);
        // we will throw up a success modal here
        toast.success("Email sent successfully.", {
          theme: "colored",
        });

        nameRef.current.value = "";
        phoneRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      }
    } catch (e) {
      toast.error("Problem sending email. Please try again later.", {
        theme: "colored",
      });
    }
  };

  if (submitted) {
    setTimeout(() => {
      router.push("/");
    }, "2000");
  }

  return (
    <>
      <SEO
        title="Contact Us - Web Designer Portadown | Get a Quote for Your Website"
        description="Get in touch with Modern Software for professional website design in Northern Ireland. Based in Northern Ireland, serving Portadown, Banbridge, Lurgan, Armagh, and Craigavon. Free consultation for small businesses."
        keywords="contact web designer Portadown, get website quote Northern Ireland, small business web design consultation NI, local web designer contact, affordable website design quote"
        canonicalUrl="/contactus"
      />
      <ToastContainer />
      {/* Contact Hero Section */}
      <StyledContactHero isDesktop={isDesktop}>
        <StyledContactHeroContent>
          <StyledContactHeroTitle isDesktop={isDesktop}>
            Get In <span>Touch</span>
          </StyledContactHeroTitle>
          <StyledContactHeroSubtitle isDesktop={isDesktop}>
            Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </StyledContactHeroSubtitle>
        </StyledContactHeroContent>
      </StyledContactHero>

      {/* Contact Form and Details Section */}
      <StyledContactSection isDesktop={isDesktop}>
        <StyledContactContainer isDesktop={isDesktop}>
          {/* Contact Form */}
          <StyledContactForm isDesktop={isDesktop}>
            <StyledFormTitle isDesktop={isDesktop}>
              Send A <span>Message</span>
            </StyledFormTitle>
            {isError && (
              <StyledErrorMessage>
                Please complete all sections of this form
              </StyledErrorMessage>
            )}

            <form>
              <StyledFieldSet>
                <StyledIcon>
                  <FontAwesomeIcon icon={faUser} />
                </StyledIcon>
                <StyledInput
                  ref={nameRef}
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </StyledFieldSet>
              <StyledFieldSet>
                <StyledIcon>
                  <FontAwesomeIcon icon={faPhone} />
                </StyledIcon>
                <StyledInput
                  ref={phoneRef}
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
              </StyledFieldSet>
              <StyledFieldSet>
                <StyledIcon>
                  <FontAwesomeIcon icon={faEnvelope} />
                </StyledIcon>
                <StyledInput
                  ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </StyledFieldSet>
              <StyledFieldSet>
                <StyledIcon>
                  <FontAwesomeIcon icon={faPen} />
                </StyledIcon>
                <StyledTextArea
                  ref={messageRef}
                  name="message"
                  rows="4"
                  placeholder="Tell us a little about your project idea or requirements"
                  required
                />
              </StyledFieldSet>
              <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
                <div style={{ maxWidth: "300px", width: "100%" }}>
                  <CallToActionButton
                    variant="darkGreen"
                    onClick={async (e) => {
                      await handleSubmit(e);
                    }}
                  >
                    Send Message
                  </CallToActionButton>
                </div>
              </div>
            </form>
          </StyledContactForm>

          {/* Contact Details */}
          <StyledContactDetails>
            <StyledContactDetailsTitle isDesktop={isDesktop}>
              Or You <span>Can...</span>
            </StyledContactDetailsTitle>
            <StyledContactDetailsContainer>
              <StyledContactDetailItem>
                <StyledContactDetailIcon>
                  <FontAwesomeIcon icon={faPhone} />
                </StyledContactDetailIcon>
                <StyledContactDetailContent>
                  <StyledContactDetailType>Phone us</StyledContactDetailType>
                  <StyledContactDetailValue>+44 28 3037 3007</StyledContactDetailValue>
                </StyledContactDetailContent>
              </StyledContactDetailItem>

              <StyledContactDetailItem>
                <StyledContactDetailIcon>
                  <FontAwesomeIcon icon={faEnvelope} />
                </StyledContactDetailIcon>
                <StyledContactDetailContent>
                  <StyledContactDetailType>Email us</StyledContactDetailType>
                  <StyledContactDetailValue>
                    <a href="mailto:info@modernsoftware.co.uk">
                      info@modernsoftware.co.uk
                    </a>
                  </StyledContactDetailValue>
                </StyledContactDetailContent>
              </StyledContactDetailItem>
            </StyledContactDetailsContainer>
          </StyledContactDetails>
        </StyledContactContainer>
      </StyledContactSection>
    </>
  );
};

export default ContactUs;
