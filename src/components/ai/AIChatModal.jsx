import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { colours } from "../../utils/style.utils";
import AIChatMessage from "./AIChatMessage";
import useWindowSize from "../../hooks/useWindowSize";

const StyledFloatingButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colours.pink}, ${colours.darkGreen});
  color: ${colours.white};
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 1199px) {
    display: none;
  }
`;

const StyledModal = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: ${(props) => (props.$isDesktop ? "400px" : "90vw")};
  max-width: 500px;
  height: ${(props) => (props.$isDesktop ? "600px" : "70vh")};
  background: ${colours.white};
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 1199px) {
    display: none;
  }
`;

const StyledModalHeader = styled.div`
  background: linear-gradient(135deg, ${colours.pink}, ${colours.darkGreen});
  color: ${colours.white};
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledModalTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

const StyledCloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${colours.white};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }
`;

const StyledMessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background: ${colours.offWhite};
`;

const StyledInputContainer = styled.div`
  padding: 1rem 1.5rem;
  background: ${colours.white};
  border-top: 1px solid ${colours.lightGrey};
  display: flex;
  gap: 0.75rem;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid ${colours.lightGrey};
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  color: ${colours.darkGrey};
  background: ${colours.white};

  &:focus {
    outline: none;
    border-color: ${colours.pink};
    box-shadow: 0 0 0 3px rgba(255, 64, 139, 0.1);
  }

  &::placeholder {
    color: ${colours.grey};
    opacity: 0.6;
  }
`;

const StyledSendButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${colours.darkGreen};
  color: ${colours.white};
  border: none;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: ${colours.pink};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const StyledLoading = styled.div`
  padding: 1rem;
  text-align: center;
  color: ${colours.grey};
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
`;

const AIChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your AI assistant for Modern Software. How can I help you today?",
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { checkIsDesktop } = useWindowSize();
  const isDesktop = checkIsDesktop();

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || loading) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
    setLoading(true);

    try {
      const response = await fetch("/api/chatgpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conversationHistory: [
            ...messages.map((msg) => ({
              role: msg.isUser ? "user" : "assistant",
              content: msg.text,
            })),
            {
              role: "user",
              content: userMessage,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.message, isUser: false }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm having trouble connecting. Please try again later.",
          isUser: false,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isDesktop) {
    return null;
  }

  return (
    <>
      {!isOpen && (
        <StyledFloatingButton onClick={() => setIsOpen(true)} title="Ask AI">
          AI
        </StyledFloatingButton>
      )}

      {isOpen && (
        <StyledModal $isDesktop={isDesktop}>
          <StyledModalHeader>
            <StyledModalTitle>Ask AI</StyledModalTitle>
            <StyledCloseButton onClick={() => setIsOpen(false)}>×</StyledCloseButton>
          </StyledModalHeader>
          <StyledMessagesContainer>
            {messages.map((message, index) => (
              <AIChatMessage key={index} message={message.text} isUser={message.isUser} />
            ))}
            {loading && <StyledLoading>AI is thinking...</StyledLoading>}
            <div ref={messagesEndRef} />
          </StyledMessagesContainer>
          <StyledInputContainer>
            <StyledInput
              type="text"
              placeholder="Ask me anything about web design, software, or our services..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
            />
            <StyledSendButton onClick={handleSend} disabled={loading || !inputValue.trim()}>
              Send
            </StyledSendButton>
          </StyledInputContainer>
        </StyledModal>
      )}
    </>
  );
};

export default AIChatModal;
