import React, { useState, useEffect, useRef } from "react";
import SubPageLayout from "../src/components/layout/SubPageLayout";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          setSubmitted(true);
          // we will throw up a success modal here
          nameRef.current.value = "";
          phoneRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
        }
      })
      .catch((e) => {
        // we will throw up an alert modal here
        console.log({ e });
      });
  };

  return (
    <SubPageLayout subTitle="Contact Us">
      <div>
        Send A Message
        <form>
          <fieldset>
            <label htmlFor="name">Name</label>
            <input ref={nameRef} type="text" name="name" />
          </fieldset>
          <fieldset>
            <label htmlFor="phone">Phone</label>
            <input ref={phoneRef} type="text" name="phone" />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="text" name="email" />
          </fieldset>
          <fieldset>
            <label htmlFor="message">Message</label>
            <input ref={messageRef} type="text" name="message" />
          </fieldset>
          <input
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          />
        </form>
      </div>
    </SubPageLayout>
  );
};

export default ContactUs;
