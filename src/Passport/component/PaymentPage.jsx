import React from "react";
import styled from "styled-components";
import Qrimg from "../assets/Sudhanshu Portfolio .jpg";
import { useNavigate } from "react-router-dom";

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
  font-family: "Roboto", sans-serif; /* Professional font-family */

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CompanyName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-family: "Roboto", sans-serif; /* Professional font-family */
  color: #007bff; /* Brand color for the company name */

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const QRImage = styled.img`
  width: 200px; /* Adjust width for larger screens */
  height: 200px; /* Maintain aspect ratio */
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 150px; /* Adjust width for smaller screens */
    height: 150px; /* Maintain aspect ratio */
  }
`;

const Instructions = styled.p`
  font-size: 1.25rem;
  font-family: "Roboto", sans-serif; /* Professional font-family */
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FeeDetails = styled.div`
  font-size: 1rem;
  margin-bottom: 2rem;
  font-family: "Roboto", sans-serif; /* Professional font-family */
  color: #495057;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FeeText = styled.p`
  background-color: #e9ecef; /* Light gray background */
  padding: 0.5rem;
  border-radius: 5px;
  margin: 0.5rem 0;
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
const PaymentPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <Container>
      <Heading>Payment Page</Heading>
      <CompanyName>Your Company Name</CompanyName>
      <QRImage
        src={Qrimg} // Replace with your QR code image URL
        alt="PhonePay QR Code"
      />
      <Instructions>
        Scan the QR code with the PhonePay app to complete your payment.
      </Instructions>
      <FeeDetails>
        <FeeText>
          This is Fresh Passport and Re-issue Passport Normal fee:{" "}
          <span
            style={{
              background: "#02BC7D",
              padding: "5px",
              color: "white",
              borderRadius: "5px",
            }}
          >
            {" "}
            <b> Rs: 2000/- </b>
          </span>{" "}
          ( Passport will be processed and delivered within 30 days after your
          appointment.){" "}
        </FeeText>

        <FeeText>
          Tatkal Passport Fee:{" "}
          <span
            style={{
              background: "#02BC7D",
              padding: "5px",
              color: "white",
              borderRadius: "5px",
            }}
          >
            {" "}
            <b> Rs: 5000/- </b>
          </span>{" "}
          ( Passport will be processed and delivered within 5 days after your
          appointment.)
        </FeeText>
      </FeeDetails>
      <Button onClick={handleGoBack}>Go Back</Button>
    </Container>
  );
};

export default PaymentPage;
