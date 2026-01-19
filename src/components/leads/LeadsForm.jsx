import React, { useState } from "react";
import styled from "styled-components";
import { colours } from "../../utils/style.utils";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${colours.lightGrey};
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  background-color: ${colours.white};
  color: ${colours.darkGrey};
  transition: all 0.3s ease;

  &::placeholder {
    color: ${colours.darkGrey};
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border-color: ${colours.pink};
    box-shadow: 0 0 0 3px rgba(255, 64, 139, 0.1);
    background-color: ${colours.white};
    color: ${colours.darkGrey};
  }
`;

const StyledSelect = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid ${colours.lightGrey};
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  background: ${colours.white};
  color: ${colours.darkGrey};
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colours.pink};
    box-shadow: 0 0 0 3px rgba(255, 64, 139, 0.1);
    background: ${colours.white};
    color: ${colours.darkGrey};
  }
`;

const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${colours.darkGreen};
  color: ${colours.white};
  border: none;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

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

const StyledLabel = styled.label`
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${colours.darkGrey};
  margin-bottom: 0.25rem;
`;

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeadsForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    town: "",
    website: "",
    source: "Outbound",
    status: "Sent",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await onSubmit(formData);
      // Reset form
      setFormData({
        businessName: "",
        contactName: "",
        email: "",
        town: "",
        website: "",
        source: "Outbound",
        status: "Sent",
        notes: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to add lead. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledField>
        <StyledLabel>Business Name *</StyledLabel>
        <StyledInput
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          required
        />
      </StyledField>

      <StyledField>
        <StyledLabel>Contact Name *</StyledLabel>
        <StyledInput
          type="text"
          name="contactName"
          value={formData.contactName}
          onChange={handleChange}
          required
        />
      </StyledField>

      <StyledField>
        <StyledLabel>Email *</StyledLabel>
        <StyledInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </StyledField>

      <StyledField>
        <StyledLabel>Town *</StyledLabel>
        <StyledInput
          type="text"
          name="town"
          value={formData.town}
          onChange={handleChange}
          required
        />
      </StyledField>

      <StyledField>
        <StyledLabel>Website</StyledLabel>
        <StyledInput
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="https://example.com"
        />
      </StyledField>

      <StyledField>
        <StyledLabel>Source *</StyledLabel>
        <StyledSelect
          name="source"
          value={formData.source}
          onChange={handleChange}
          required
        >
          <option value="Outbound">Outbound</option>
          <option value="Ads">Ads</option>
          <option value="Referral">Referral</option>
        </StyledSelect>
      </StyledField>

      <StyledField>
        <StyledLabel>Status *</StyledLabel>
        <StyledSelect
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="Sent">Sent</option>
          <option value="Replied">Replied</option>
          <option value="Won">Won</option>
          <option value="Lost">Lost</option>
        </StyledSelect>
      </StyledField>

      <StyledField>
        <StyledLabel>Notes</StyledLabel>
        <StyledInput
          type="text"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Any additional notes..."
        />
      </StyledField>

      <StyledButton type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Lead"}
      </StyledButton>
    </StyledForm>
  );
};

export default LeadsForm;