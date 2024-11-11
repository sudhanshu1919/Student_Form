import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function Account() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: null,
    signature: null,
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo" && files) {
      setPhotoPreview(URL.createObjectURL(files[0]));
    } else if (name === "signature" && files) {
      setSignaturePreview(URL.createObjectURL(files[0]));
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("photo", formData.photo);
    formDataObj.append("signature", formData.signature);

    try {
      const response = await axios.post(
        "http://localhost:1100/upload",
        formDataObj,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <Wrapper>
      <Card>
        <h2>Student Infromation</h2>
        <p>All infromation must be required..!</p>
        <Form onSubmit={handleSubmit}>
          <FormTable>
            <tbody>
              <tr>
                <LabelCell>Name:</LabelCell>
                <InputCell>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </InputCell>
              </tr>
              <tr>
                <LabelCell>Email:</LabelCell>
                <InputCell>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </InputCell>
              </tr>
              <tr>
                <LabelCell>Photo:</LabelCell>
                <InputCell>
                  <Input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </InputCell>
              </tr>
              <tr>
                <LabelCell>Signature:</LabelCell>
                <InputCell>
                  <Input
                    type="file"
                    name="signature"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </InputCell>
              </tr>
            </tbody>
          </FormTable>
          <PreviewTable>
            <tbody>
              <tr>
                <LabelCell>Name:</LabelCell>
                <PreviewCell>{formData.name}</PreviewCell>
              </tr>
              <tr>
                <LabelCell>Email:</LabelCell>
                <PreviewCell>{formData.email}</PreviewCell>
              </tr>
              {photoPreview && (
                <tr>
                  <LabelCell>Photo Preview:</LabelCell>
                  <PreviewCell>
                    <img src={photoPreview} alt="Photo Preview" width="30%" />
                  </PreviewCell>
                </tr>
              )}
              {signaturePreview && (
                <tr>
                  <LabelCell>Signature Preview:</LabelCell>
                  <PreviewCell>
                    <img
                      src={signaturePreview}
                      alt="Signature Preview"
                      width="30%"
                    />
                  </PreviewCell>
                </tr>
              )}
            </tbody>
          </PreviewTable>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </Card>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Card = styled.div`
  width: 600px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: #000;
  text-align: center;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const FormTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid #ccc;
  }
`;

const PreviewTable = styled(FormTable)``;

const LabelCell = styled.td`
  text-align: left;
  padding: 10px;
  font-size: 0.9rem;
  color: #333;
`;

const InputCell = styled.td`
  padding: 10px;
`;

const PreviewCell = styled.td`
  padding: 10px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 100%;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #0882b3;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #046e98;
  }
`;

export default Account;
