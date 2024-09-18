import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1b263b;
  color: #e0e1dd;
  text-align: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ErrorImage = styled.img`
  width: 150px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const Heading = styled.h1`
  font-size: 4rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subheading = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  background-color: #415a77;
  color: #e0e1dd;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #334d6e;
  }
`;

function NoPage() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <ErrorImage src="https://www.example.com/404.svg" alt="404 Error" />
      <Heading>404</Heading>
      <Subheading>Page Not Found</Subheading>
      <Button onClick={handleBackToHome}>Back to Home</Button>
    </Container>
  );
}

export default NoPage;
