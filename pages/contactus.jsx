import React, { useState, useEffect, useRef } from "react";
import SubPageLayout from "../src/components/layout/SubPageLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faEnvelope,
  faPen,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import useWindowSize from "../src/hooks/useWindowSize";
import {
  StyledContactForm,
  StyledTitle,
  StyledContactDetailValue,
  StyledContactDetail,
  StyledContactDetails,
  StyledFieldSet,
  StyledIcon,
  StyledInput,
  StyledTextArea,
  StyledContactDetailTypeTitle,
  StyledContactDetailType,
  StyledContactDetailsContainer,
  StyledSentMessage,
  StyledMessageContainer,
  StyledErrorMessage,
} from "../page-styles/contactus.styles";
import CallToActionButton from "../src/components/buttons/action/CallToActionButton";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

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
        nameRef.current.value = "";
        phoneRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      }
    } catch (e) {
      // we will throw up an alert modal here
      console.log({ e });
    }
  };

  if (submitted) {
    return (
      <SubPageLayout subTitle="Contact Us">
        <StyledMessageContainer>
          <FontAwesomeIcon
            style={{
              height: "100px",
              width: "100px",
              color: "red",
              marginBottom: "50px",
            }}
            icon={faCheck}
          />
          <StyledSentMessage>Message Sent Successfully</StyledSentMessage>
        </StyledMessageContainer>
      </SubPageLayout>
    );
  }

  return (
    <SubPageLayout subTitle="Contact Us">
      <StyledContactForm>
        <StyledTitle>
          Send A <span>Message</span>
        </StyledTitle>
        {isError && (
          <StyledErrorMessage>
            *** Please complete all sections of this form
          </StyledErrorMessage>
        )}

        <form>
          <StyledFieldSet>
            <StyledIcon icon={faUser} />
            <StyledInput
              ref={nameRef}
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </StyledFieldSet>
          <StyledFieldSet>
            <StyledIcon icon={faPhone} />
            <StyledInput
              ref={phoneRef}
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
            />
          </StyledFieldSet>
          <StyledFieldSet>
            <StyledIcon icon={faEnvelope} />
            <StyledInput
              ref={emailRef}
              type="text"
              name="email"
              placeholder="Email Address"
              required
            />
          </StyledFieldSet>
          <StyledFieldSet>
            <StyledIcon icon={faPen} />
            <StyledTextArea
              ref={messageRef}
              name="message"
              rows="4"
              placeholder="Tell us a little about your project idea or requirements"
              required
            />
          </StyledFieldSet>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CallToActionButton
              onClick={async (e) => {
                await handleSubmit(e);
              }}
            >
              Send
            </CallToActionButton>
          </div>
        </form>
      </StyledContactForm>
      {isDesktop && (
        <StyledContactDetails>
          <StyledTitle>
            Or You <span>Can ...</span>
          </StyledTitle>
          <StyledContactDetailsContainer>
            <StyledContactDetailType>
              <FontAwesomeIcon
                style={{ height: "25px", width: "25px", color: "red" }}
                icon={faPhone}
              />
              <StyledContactDetailTypeTitle>
                Phone me
              </StyledContactDetailTypeTitle>
            </StyledContactDetailType>
            <StyledContactDetail>
              <StyledContactDetailValue>07921568808</StyledContactDetailValue>
            </StyledContactDetail>

            <StyledContactDetailType>
              <FontAwesomeIcon
                style={{ height: "25px", width: "25px", color: "red" }}
                icon={faEnvelope}
              />
              <StyledContactDetailTypeTitle>
                Email me
              </StyledContactDetailTypeTitle>
            </StyledContactDetailType>
            <StyledContactDetail>
              <StyledContactDetailValue>
                info@modern-software.co.uk
              </StyledContactDetailValue>
            </StyledContactDetail>
          </StyledContactDetailsContainer>
        </StyledContactDetails>
      )}
    </SubPageLayout>
  );
};

export default ContactUs;
