import React, { useState, useEffect, useRef } from "react";
import SubPageLayout from "../src/components/layout/SubPageLayout";
import styled from "styled-components";
import { colours, media } from "../src/utils/style.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faEnvelope,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import useWindowSize from "../src/hooks/useWindowSize";

const StyledContactForm = styled.div`
  ${media.forDesktop} {
    background: #ffffff 0 0 no-repeat padding-box;
    box-shadow: 0 0 40px #00000014;
    opacity: 1;
    padding: 50px;
  }

  border-radius: 15px;
`;

const StyledContactDetails = styled.div`
  background: ${colours.offWhite} 0 0 no-repeat padding-box;
  opacity: 1;
`;

const StyledContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledContactDetailType = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 50px;
`;

const StyledContactDetail = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StyledContactDetailValue = styled.div`
  width: 100%;
  margin-left: 75px;
  color: ${colours.grey};
`;

const StyledContactDetailTypeTitle = styled.div`
  margin-left: 50px;
  color: ${colours.red};
  font-size: 20px;
  font: normal normal bold 20px/30px Roboto;
`;

const StyledTitle = styled.div`
  /* UI Properties */
  text-align: center;
  font: normal normal bold 48px/36px Roboto;
  letter-spacing: 0px;
  color: #232323;
  text-transform: capitalize;
  margin: 0 100px 25px 100px;

  > span {
    color: ${colours.red};
  }
`;

const StyledFieldSet = styled.fieldset`
  border: none;
  width: 100%;
  margin-bottom: 10px;
`;

const StyledSubmit = styled.input`
  background: #e51f28 0 0 no-repeat padding-box;
  border-radius: 30px;
  color: white;
  border: none;
  width: 60%;
  height: 40px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  padding: 10px;
  height: 20px;
  width: 20px;
  color: ${colours.grey};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 0px 10px 50px;
  border: none;
  background: ${colours.offWhite};
  font-size: 20px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px 0px 10px 50px;
  border: none;
  background: ${colours.offWhite};
  font-size: 20px;
`;

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

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

  return (
    <SubPageLayout subTitle="Contact Us">
      <StyledContactForm>
        <StyledTitle>
          Send A <span>Message</span>
        </StyledTitle>

        <form>
          <StyledFieldSet>
            <StyledIcon icon={faUser} />
            <StyledInput
              ref={nameRef}
              type="text"
              name="name"
              placeholder="Name"
            />
          </StyledFieldSet>
          <StyledFieldSet>
            <StyledIcon icon={faPhone} />
            <StyledInput
              ref={phoneRef}
              type="text"
              name="phone"
              placeholder="Phone Number"
            />
          </StyledFieldSet>
          <StyledFieldSet>
            <StyledIcon icon={faEnvelope} />
            <StyledInput
              ref={emailRef}
              type="text"
              name="email"
              placeholder="Email Address"
            />
          </StyledFieldSet>
          <StyledFieldSet>
            <StyledIcon icon={faPen} />
            <StyledTextArea
              ref={messageRef}
              name="message"
              rows="4"
              placeholder="Tell us a little about your project idea or requirements"
            />
          </StyledFieldSet>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StyledSubmit
              type="submit"
              onClick={async (e) => {
                await handleSubmit(e);
              }}
              value="Send"
            />
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
