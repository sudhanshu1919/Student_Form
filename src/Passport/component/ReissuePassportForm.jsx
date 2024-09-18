import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const FormContainer = styled.div`
  background-color: #1b263b;
  padding: 2rem;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  color: #e0e1dd;
  margin-bottom: 0.5rem;
  display: block;
`;

const Input = styled.input`
  width: 48%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FullWidthInput = styled(Input)`
  width: 100%;
`;

// Main Component
function ReissuePassportForm() {
  const [formData, setFormData] = useState({
    aadhaarCard: null,
    panCard: null,
    birthCertificate: null,
    passportPhotoFront: null,
    passportPhotoBack: null,
    contactNo: "",
    emergencyContact: "",
    email: "",
    education: "",
    profession: "",
    policeStation: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can use fetch or axios to send this data to your backend here
  };

  return (
    <FormContainer>
      <h2>Re-issue Passport Application</h2>
      <form onSubmit={handleSubmit}>
        <Section>
          <div>
            <Label>Aadhaar Card Photo:</Label>
            <Input type="file" name="aadhaarCard" onChange={handleChange} />
          </div>
          <div>
            <Label>PAN Card Photo:</Label>
            <Input type="file" name="panCard" onChange={handleChange} />
          </div>
        </Section>
        <Section>
          <div>
            <Label>Birth Certificate (If child):</Label>
            <Input
              type="file"
              name="birthCertificate"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Passport Photo (Front):</Label>
            <Input
              type="file"
              name="passportPhotoFront"
              onChange={handleChange}
            />
          </div>
        </Section>
        <Section>
          <div>
            <Label>Passport Photo (Back):</Label>
            <FullWidthInput
              type="file"
              name="passportPhotoBack"
              onChange={handleChange}
            />
          </div>
        </Section>
        <Section>
          <Input
            type="text"
            name="contactNo"
            placeholder="Enter Contact No"
            onChange={handleChange}
            value={formData.contactNo}
          />
          <Input
            type="text"
            name="emergencyContact"
            placeholder="Enter Emergency Contact"
            onChange={handleChange}
            value={formData.emergencyContact}
          />
        </Section>
        <Section>
          <Input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            value={formData.email}
          />
          <Input
            type="text"
            name="education"
            placeholder="Enter Education"
            onChange={handleChange}
            value={formData.education}
          />
        </Section>
        <Section>
          <Input
            type="text"
            name="profession"
            placeholder="Enter Profession"
            onChange={handleChange}
            value={formData.profession}
          />
          <Input
            type="text"
            name="policeStation"
            placeholder="Enter Police Station Name"
            onChange={handleChange}
            value={formData.policeStation}
          />
        </Section>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </FormContainer>
  );
}

export default ReissuePassportForm;
