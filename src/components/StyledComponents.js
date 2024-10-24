// import styled from "styled-components";

// export const FormContainer = styled.div`
//   background: #fff;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   margin-bottom: 20px;
// `;

// export const InputField = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 10px;
//   border-radius: 4px;
//   border: 1px solid #ccc;
//   font-size: 16px;
// `;

// export const SubmitButton = styled.button`
//   width: 100%;
//   padding: 10px;
//   background: #4caf50;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;

//   &:hover {
//     background: #45a049;
//   }
// `;

// export const PassengerContainer = styled.div`
//   background: #f9f9f9;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// `;

import styled from "styled-components";

export const FormContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #45a049;
  }
`;

export const PassengerContainer = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Popup/Modal Styles
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensures the modal is on top */
`;

export const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 400px; /* Set a width for the modal */
  max-width: 90%; /* Responsive width */
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #f44336; /* Red color for close button */
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #c62828; /* Darker red on hover */
  }
`;
