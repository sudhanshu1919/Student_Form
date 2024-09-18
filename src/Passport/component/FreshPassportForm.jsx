import React, { useState } from "react";
import styled from "styled-components";
// import axios from "axios"; // You can use fetch or axios for sending data to the server

// Styled Components for form styling
const FormContainer = styled.div`
  background-color: #1b263b;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  margin: 2rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SectionTitle = styled.h3`
  color: #e0e1dd;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  color: #e0e1dd;
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: none;
`;

const Button = styled.button`
  background-color: #415a77;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  &:hover {
    background-color: #e0e1dd;
    color: #415a77;
  }
`;

// Main Form Component
function FreshPassportForm() {
  const [formData, setFormData] = useState({
    contactNo: "",
    emergencyContact: "",
    email: "",
    education: "",
    profession: "",
    placeOfBirth: "",
    policeStation: "",
    motherName: "",
    fatherName: "",
    spouseName: "",
    aadhaarFile: null,
    panFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // console.log("Form Data Submitted:", formData);
    // // Sending data to the server (Example with axios)
    // const formDataToSend = new FormData();
    // Object.keys(formData).forEach((key) => {
    //   formDataToSend.append(key, formData[key]);
    // });
    // try {
    //   const response = await axios.post(
    //     "http://localhost:5000/api/passport",
    //     formDataToSend,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );
    //   console.log("Server Response:", response.data);
    // } catch (error) {
    //   console.error("Error sending form data", error);
    // }
  };

  return (
    <FormContainer>
      <SectionTitle>Fresh Passport Application</SectionTitle>
      <form onSubmit={handleSubmit}>
        {/* Contact Information Section */}
        <div>
          <Label>Contact No:</Label>
          <Input
            type="text"
            name="contactNo"
            placeholder="Enter Contact No"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Emergency Contact:</Label>
          <Input
            type="text"
            name="emergencyContact"
            placeholder="Enter Emergency Contact"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Email ID:</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />
        </div>

        {/* Personal Information Section */}
        <div>
          <Label>Education:</Label>
          <Input
            type="text"
            name="education"
            placeholder="Enter Education"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Profession:</Label>
          <Input
            type="text"
            name="profession"
            placeholder="Enter Profession"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Place of Birth:</Label>
          <Input
            type="text"
            name="placeOfBirth"
            placeholder="Enter Place of Birth"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Area Police Station:</Label>
          <Input
            type="text"
            name="policeStation"
            placeholder="Enter Police Station Name"
            onChange={handleChange}
          />
        </div>

        {/* Family Information Section */}
        <div>
          <Label>Mother's Name:</Label>
          <Input
            type="text"
            name="motherName"
            placeholder="Enter Mother's Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Father's Name:</Label>
          <Input
            type="text"
            name="fatherName"
            placeholder="Enter Father's Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Wife's/Husband's Name (if married):</Label>
          <Input
            type="text"
            name="spouseName"
            placeholder="Enter Spouse's Name"
            onChange={handleChange}
          />
        </div>

        {/* Document Upload Section */}
        <div>
          <Label>Aadhaar Card:</Label>
          <Input type="file" name="aadhaarFile" onChange={handleChange} />
        </div>
        <div>
          <Label>PAN Card:</Label>
          <Input type="file" name="panFile" onChange={handleChange} />
        </div>

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
}

export default FreshPassportForm;
