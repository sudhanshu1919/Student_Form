import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import tick from "../assets/checkmark.png";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  color: #343a40;
  text-align: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #02bc7d; /* Updated color */
  font-family: "Roboto", sans-serif; /* Updated font-family */

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Message = styled.p`
  font-size: 1.25rem;
  margin: 0.5rem 0 2rem;
  font-family: "Roboto", sans-serif; /* Updated font-family */

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ArrowImage = styled.img`
  width: 30px; /* Adjust width for larger screens */
  margin-left: 0.5rem;

  @media (max-width: 768px) {
    width: 20px; /* Adjust width for smaller screens */
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
`;

// Main Component
const ThankYou = () => {
  const navigate = useNavigate();

  const handleReapply = () => {
    navigate("/apply"); // Adjust the route to your application page
  };

  return (
    <Container>
      <Heading>
        <ArrowImage src={tick} alt="✔" />
        Thank You for Your Passpor Application
      </Heading>
      <Message>
        We have received your passport application. Our team will review it and
        get in touch with you within the next 24 hours. We appreciate your
        patience and look forward to assisting you.
      </Message>
      <Button onClick={handleReapply}>Re-apply</Button>
    </Container>
  );
};

export default ThankYou;
