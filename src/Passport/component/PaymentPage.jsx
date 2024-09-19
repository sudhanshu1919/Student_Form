import React, { useState } from "react";
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
  font-family: "Roboto", sans-serif;
  color: #007bff;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const QRImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Instructions = styled.p`
  font-size: 1.25rem;
  font-family: "Roboto", sans-serif;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FeeDetails = styled.div`
  font-size: 1rem;
  margin-bottom: 2rem;
  font-family: "Roboto", sans-serif;
  color: #495057;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FeeText = styled.p`
  background-color: #e9ecef;
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

const FileInput = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const PaymentPage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Capture the uploaded file
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("paymentReceipt", file);

      // Log to the console (simulating sending data)
      console.log("Uploading receipt:", file.name);

      // Here, you'd send the formData to the server
      // Example (uncomment to use):
      // fetch('/upload-receipt', {
      //   method: 'POST',
      //   body: formData,
      // }).then(response => response.json())
      // .then(data => {
      //   console.log("Server response:", data);
      // });

      alert("Payment receipt uploaded successfully!");
    } else {
      alert("Please upload a receipt.");
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <Container>
      <Heading>Payment Page</Heading>
      <CompanyName>Your Company Name</CompanyName>
      <QRImage src={Qrimg} alt="PhonePay QR Code" />
      <Instructions>
        Scan the QR code with the PhonePay app to complete your payment.
      </Instructions>
      {/* File Upload */}
      <div>
        <Label htmlFor="paymentReceipt">
          Upload Payment Receipt (PhonePay, Google Pay, Paytm):
        </Label>
        <FileInput
          type="file"
          id="paymentReceipt"
          accept=".jpg,.jpeg,.png,.pdf" // File types
          onChange={handleFileChange}
        />

        {/* Submit Button */}
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      <FeeDetails>
        <FeeText>
          Fresh Passport and Re-issue Passport Normal Fee:{" "}
          <span
            style={{
              background: "#02BC7D",
              padding: "5px",
              color: "white",
              borderRadius: "5px",
            }}
          >
            <b> Rs: 2000/- </b>
          </span>{" "}
          ( Passport will be processed and delivered within 30 days after your
          appointment.)
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
            <b> Rs: 5000/- </b>
          </span>{" "}
          ( Passport will be processed and delivered within 5 days after your
          appointment.)
        </FeeText>
      </FeeDetails>
    </Container>
  );
};

export default PaymentPage;
