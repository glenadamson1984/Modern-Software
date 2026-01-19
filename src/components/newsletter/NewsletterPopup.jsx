import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import styled from "styled-components";
import { colours, media } from "../../utils/style.utils";
import CallToActionButton from "../buttons/action/CallToActionButton";

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledModal = styled.div`
  background: ${colours.white};
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  ${media.forPhoneOnly} {
    padding: 2rem 1.5rem;
  }
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colours.grey};
  transition: all 0.3s ease;
  border-radius: 8px;

  &:hover {
    color: ${colours.black};
    background: ${colours.lightGrey};
    transform: rotate(90deg);
  }
`;

const StyledIconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, ${colours.pink}, ${colours.darkGreen});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
`;

const StyledTitle = styled.h2`
  font-family: "Baloo", sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: ${colours.black};
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.2;

  ${media.forPhoneOnly} {
    font-size: 24px;
  }
`;

const StyledDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: ${colours.grey};
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid ${colours.whiteBorder};
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${colours.pink};
    box-shadow: 0 0 0 3px rgba(255, 64, 139, 0.1);
  }

  &::placeholder {
    color: ${colours.grey};
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
  flex-direction: column;

  ${media.forDesktop} {
    flex-direction: row;
  }
`;

const StyledButtonContainer = styled.div`
  flex: 1;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const NewsletterPopup = ({ onClose, isDesktop }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.", {
        theme: "colored",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.status === 200) {
        toast.success("Thank you for subscribing!", {
          theme: "colored",
        });
        setEmail("");
        // Store in localStorage that user has subscribed
        localStorage.setItem("newsletterSubscribed", "true");
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        toast.error(data.message || "Something went wrong. Please try again.", {
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        theme: "colored",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    // Store dismissal in localStorage (expires after 24 hours)
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 24);
    localStorage.setItem("newsletterDismissed", expiryDate.toISOString());
    onClose();
  };

  return (
    <StyledBackdrop onClick={(e) => e.target === e.currentTarget && handleClose()}>
      <StyledModal>
        <StyledCloseButton onClick={handleClose} aria-label="Close">
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </StyledCloseButton>
        
        <StyledIconWrapper>
          <FontAwesomeIcon icon={faEnvelope} size="2x" color={colours.white} />
        </StyledIconWrapper>

        <StyledTitle>Stay in the Loop</StyledTitle>
        <StyledDescription>
          Get the latest updates on custom software solutions, industry insights, and exclusive content delivered to your inbox.
        </StyledDescription>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
          />
          <StyledButtonWrapper>
            <StyledButtonContainer disabled={isSubmitting}>
              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
                disabled={isSubmitting}
              >
                <CallToActionButton variant="darkGreen">
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </CallToActionButton>
              </button>
            </StyledButtonContainer>
            <StyledButtonContainer>
              <CallToActionButton
                variant="secondary"
                onClick={handleClose}
              >
                Maybe Later
              </CallToActionButton>
            </StyledButtonContainer>
          </StyledButtonWrapper>
        </StyledForm>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default NewsletterPopup;
