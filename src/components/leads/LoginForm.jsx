import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { colours } from "../../utils/style.utils";

const StyledLoginContainer = styled.div`
  max-width: 400px;
  margin: 4rem auto;
  padding: 3rem;
  background: ${colours.white};
  border: 1px solid ${colours.lightGrey};
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${colours.darkGrey};
  margin: 0 0 1rem 0;
  text-align: center;
`;

const StyledSubtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: ${colours.darkGrey};
  opacity: 0.7;
  margin: 0 0 2rem 0;
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${colours.lightGrey};
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
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

const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${colours.pink};
  color: ${colours.white};
  border: none;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${colours.darkGreen};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const StyledError = styled.div`
  padding: 0.75rem 1rem;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c33;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
`;

const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
    } catch (err) {
      setError(err.message || "Failed to sign in. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledLoginContainer>
      <StyledTitle>Leads Management</StyledTitle>
      <StyledSubtitle>Sign in to manage your leads</StyledSubtitle>

      <StyledForm onSubmit={handleSubmit}>
        {error && <StyledError>{error}</StyledError>}

        <StyledInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <StyledButton type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </StyledButton>
      </StyledForm>
    </StyledLoginContainer>
  );
};

export default LoginForm;