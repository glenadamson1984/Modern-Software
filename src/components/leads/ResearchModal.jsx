import React, { useState } from "react";
import styled from "styled-components";
import { colours } from "../../utils/style.utils";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 1rem;
`;

const StyledModalContent = styled.div`
  background: ${colours.white};
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${colours.darkGrey};
  padding: 0.5rem;
  line-height: 1;
  transition: all 0.3s ease;

  &:hover {
    color: ${colours.pink};
    transform: rotate(90deg);
  }
`;

const StyledTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colours.darkGrey};
  margin: 0 0 1.5rem 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${colours.darkGrey};
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${colours.lightGrey};
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  background: ${colours.white};
  color: ${colours.darkGrey};
  transition: all 0.3s ease;

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

const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${(props) => (props.$variant === "primary" ? colours.darkGreen : colours.lightGrey)};
  color: ${(props) => (props.$variant === "primary" ? colours.white : colours.darkGrey)};
  border: none;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.$variant === "primary" ? colours.pink : colours.grey)};
    color: ${colours.white};
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
  padding: 2rem;
  text-align: center;
  color: ${colours.darkGrey};
  font-family: "Inter", sans-serif;
`;

const StyledResultSection = styled.div`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: ${colours.lightGrey};
  border-radius: 8px;
`;

const StyledResultLabel = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${colours.grey};
  margin-bottom: 0.5rem;
`;

const StyledResultValue = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: ${colours.darkGrey};
  padding: 0.75rem;
  background: ${colours.white};
  border-radius: 8px;
  word-break: break-all;
`;

const StyledLink = styled.a`
  color: ${colours.pink};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledCopyButton = styled.button`
  padding: 0.25rem 0.5rem;
  background: ${colours.darkGreen};
  color: ${colours.white};
  border: none;
  border-radius: 4px;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  margin-left: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${colours.pink};
  }
`;

const StyledStrategyBadge = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
  background: ${(props) => {
    if (props.$priority === "high") return "rgba(26, 77, 58, 0.15)";
    if (props.$priority === "medium") return "rgba(255, 193, 7, 0.15)";
    return "rgba(108, 117, 125, 0.15)";
  }};
  color: ${(props) => {
    if (props.$priority === "high") return colours.darkGreen;
    if (props.$priority === "medium") return "#856404";
    return colours.grey;
  }};
  border: 2px solid
    ${(props) => {
      if (props.$priority === "high") return colours.darkGreen;
      if (props.$priority === "medium") return "#ffc107";
      return colours.grey;
    }};
`;

const StyledStrategyMessage = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  color: ${colours.darkGrey};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: ${colours.white};
  border-radius: 8px;
  border-left: 4px solid
    ${(props) => {
      if (props.$priority === "high") return colours.darkGreen;
      if (props.$priority === "medium") return "#ffc107";
      return colours.grey;
    }};
`;

const StyledActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

const ResearchModal = ({ isOpen, onClose, onAddLead }) => {
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const determineStrategy = (email, website) => {
    if (!website && email) {
      return {
        priority: "high",
        title: "High Priority - First Website Opportunity",
        message: "Great lead! They have an email but no website. Offer to build their first website.",
        action: "Update lead status to 'High Priority' or add to notes",
      };
    } else if (website && email) {
      return {
        priority: "medium",
        title: "Website Review Needed",
        message:
          "Review their website quality. If poor quality, suggest upgrade. If good quality, introduce yourself and offer AI/other services.",
        action: "Add website review task to notes",
      };
    } else {
      return {
        priority: "low",
        title: "Low Priority - Move On",
        message: "Insufficient contact information. Consider moving on or trying Companies House lookup.",
        action: "Mark for review or skip",
      };
    }
  };

  const handleResearch = async (e) => {
    e.preventDefault();
    if (!companyName || !location) {
      setError("Company name and location are required");
      return;
    }

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const response = await fetch("/api/chatgpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName,
          location,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch company information");
      }

      const data = await response.json();
      const strategy = determineStrategy(data.email, data.website);

      setResults({
        ...data,
        strategy,
      });
    } catch (err) {
      setError(err.message || "Failed to research company. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleAddAsLead = async () => {
    if (!results || !onAddLead) return;

    const leadData = {
      businessName: companyName,
      contactName: "", // Will need to be filled manually
      email: results.email || "",
      town: location,
      website: results.website || "",
      source: "Outbound",
      status: results.strategy.priority === "high" ? "High Priority" : "Sent",
      notes: results.analysis || "",
    };

    try {
      await onAddLead(leadData);
      alert("Lead added successfully!");
      // Reset form and close modal
      setCompanyName("");
      setLocation("");
      setResults(null);
      onClose();
    } catch (error) {
      alert("Failed to add lead. Please try again.");
    }
  };

  const handleClose = () => {
    setCompanyName("");
    setLocation("");
    setResults(null);
    setError(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <StyledModal onClick={handleClose}>
      <StyledModalContent onClick={(e) => e.stopPropagation()}>
        <StyledCloseButton onClick={handleClose}>×</StyledCloseButton>
        <StyledTitle>Research Company</StyledTitle>

        {!results && !loading && (
          <StyledForm onSubmit={handleResearch}>
            <StyledField>
              <StyledLabel>Company Name *</StyledLabel>
              <StyledInput
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter company name from Companies House"
                required
              />
            </StyledField>

            <StyledField>
              <StyledLabel>Location (Town/City) *</StyledLabel>
              <StyledInput
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location from Companies House"
                required
              />
            </StyledField>

            {error && (
              <div style={{ color: "#E51F28", marginBottom: "1rem" }}>Error: {error}</div>
            )}

            <StyledButton type="submit" $variant="primary">
              Research Company
            </StyledButton>
          </StyledForm>
        )}

        {loading && <StyledLoading>Researching company information...</StyledLoading>}

        {results && (
          <>
            <StyledResultSection>
              <StyledResultLabel>Email Address</StyledResultLabel>
              {results.email ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <StyledResultValue>{results.email}</StyledResultValue>
                  <StyledCopyButton onClick={() => handleCopy(results.email)}>Copy</StyledCopyButton>
                </div>
              ) : (
                <StyledResultValue>Not found</StyledResultValue>
              )}
            </StyledResultSection>

            <StyledResultSection>
              <StyledResultLabel>Website</StyledResultLabel>
              {results.website ? (
                <div>
                  <StyledLink href={results.website} target="_blank" rel="noopener noreferrer">
                    {results.website}
                  </StyledLink>
                </div>
              ) : (
                <StyledResultValue>Not found</StyledResultValue>
              )}
            </StyledResultSection>

            {results.analysis && (
              <StyledResultSection>
                <StyledResultLabel>Analysis</StyledResultLabel>
                <StyledResultValue>{results.analysis}</StyledResultValue>
              </StyledResultSection>
            )}

            <StyledStrategyBadge $priority={results.strategy.priority}>
              {results.strategy.title}
            </StyledStrategyBadge>

            <StyledStrategyMessage $priority={results.strategy.priority}>
              <strong>Strategy:</strong> {results.strategy.message}
              <br />
              <br />
              <strong>Action:</strong> {results.strategy.action}
            </StyledStrategyMessage>

            <StyledActionButtons>
              <StyledButton $variant="primary" onClick={handleAddAsLead}>
                Add as Lead
              </StyledButton>
              <StyledButton onClick={() => setResults(null)}>Research Another</StyledButton>
              <StyledButton onClick={handleClose}>Close</StyledButton>
            </StyledActionButtons>
          </>
        )}
      </StyledModalContent>
    </StyledModal>
  );
};

export default ResearchModal;
