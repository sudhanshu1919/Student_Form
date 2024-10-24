// import React, { useState } from "react";
// import { FormContainer, InputField, SubmitButton } from "./StyledComponents";

// const PassengerForm = ({ onAddPassenger }) => {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [date, setDate] = useState("");
//   const [travelClass, setTravelClass] = useState("AC First Class (1A)");
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [seatPreference, setSeatPreference] = useState("No Preference");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create passenger object and send it to parent
//     onAddPassenger({
//       from,
//       to,
//       date,
//       travelClass,
//       name,
//       age,
//       mobile,
//       seatPreference,
//     });

//     // Reset fields after adding
//     setName("");
//     setAge("");
//     setMobile("");
//   };

//   return (
//     <FormContainer>
//       <h3>Book Ticket</h3>
//       <form onSubmit={handleSubmit}>
//         <h4>Journey Details</h4>
//         <InputField
//           value={from}
//           onChange={(e) => setFrom(e.target.value)}
//           placeholder="From"
//           required
//         />
//         <InputField
//           value={to}
//           onChange={(e) => setTo(e.target.value)}
//           placeholder="To"
//           required
//         />
//         <InputField
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           placeholder="Date (DD/MM/YYYY)"
//           required
//         />
//         <InputField
//           as="select"
//           value={travelClass}
//           onChange={(e) => setTravelClass(e.target.value)}
//           required
//         >
//           <option value="AC First Class (1A)">AC First Class (1A)</option>
//           <option value="AC 2 Tier (2A)">AC 2 Tier (2A)</option>
//           <option value="AC 3 Tier (3A)">AC 3 Tier (3A)</option>
//           <option value="AC Chair Car (CC)">AC Chair Car (CC)</option>
//           <option value="Sleeper (SL)">Sleeper (SL)</option>
//           <option value="Second Sitting (2S)">Second Sitting (2S)</option>
//         </InputField>

//         <h4>Passenger Details</h4>
//         <InputField
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//           required
//         />
//         <InputField
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           placeholder="Age"
//           type="number"
//           required
//         />
//         <InputField
//           value={mobile}
//           onChange={(e) => setMobile(e.target.value)}
//           placeholder="Mobile Number"
//           type="tel"
//           required
//         />
//         <InputField
//           as="select"
//           value={seatPreference}
//           onChange={(e) => setSeatPreference(e.target.value)}
//           required
//         >
//           <option value="No Preference">No Preference</option>
//           <option value="Lower">Lower</option>
//           <option value="Middle">Middle</option>
//           <option value="Upper">Upper</option>
//           <option value="Side Lower">Side Lower</option>
//           <option value="Side Upper">Side Upper</option>
//         </InputField>

//         <SubmitButton type="submit">Add Passenger</SubmitButton>
//       </form>
//     </FormContainer>
//   );
// };

// export default PassengerForm;

import React, { useState } from "react";
import {
  FormContainer,
  InputField,
  SubmitButton,
  ModalOverlay,
  ModalContainer,
  CloseButton,
} from "./StyledComponents";

const PassengerForm = ({ onAddPassenger }) => {
  // State for form inputs
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [travelClass, setTravelClass] = useState("AC First Class (1A)");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [seatPreference, setSeatPreference] = useState("No Preference");

  // State for modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create passenger object and send it to parent
    onAddPassenger({
      from,
      to,
      date,
      travelClass,
      name,
      age,
      mobile,
      seatPreference,
    });

    // Reset fields after adding
    resetFields();
    setModalOpen(false); // Close modal after submission
  };

  // Function to reset fields
  const resetFields = () => {
    setFrom("");
    setTo("");
    setDate("");
    setTravelClass("AC First Class (1A)");
    setName("");
    setAge("");
    setMobile("");
    setSeatPreference("No Preference");
  };

  // Open and close modal handlers
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => {
    resetFields(); // Reset fields when modal closes
    setModalOpen(false);
  };

  return (
    <>
      <SubmitButton onClick={handleOpenModal}>Add Passenger</SubmitButton>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContainer>
            <CloseButton onClick={handleCloseModal}>✖</CloseButton>
            <h3>Book Ticket</h3>
            <form onSubmit={handleSubmit}>
              <h4>Journey Details</h4>
              <InputField
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="From"
                required
              />
              <InputField
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="To"
                required
              />
              <InputField
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <InputField
                as="select"
                value={travelClass}
                onChange={(e) => setTravelClass(e.target.value)}
                required
              >
                <option value="AC First Class (1A)">AC First Class (1A)</option>
                <option value="AC 2 Tier (2A)">AC 2 Tier (2A)</option>
                <option value="AC 3 Tier (3A)">AC 3 Tier (3A)</option>
                <option value="AC Chair Car (CC)">AC Chair Car (CC)</option>
                <option value="Sleeper (SL)">Sleeper (SL)</option>
                <option value="Second Sitting (2S)">Second Sitting (2S)</option>
              </InputField>

              <h4>Passenger Details</h4>
              <InputField
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
              <InputField
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
                type="number"
                required
              />
              <InputField
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Mobile Number"
                type="tel"
                required
              />
              <InputField
                as="select"
                value={seatPreference}
                onChange={(e) => setSeatPreference(e.target.value)}
                required
              >
                <option value="No Preference">No Preference</option>
                <option value="Lower">Lower</option>
                <option value="Middle">Middle</option>
                <option value="Upper">Upper</option>
                <option value="Side Lower">Side Lower</option>
                <option value="Side Upper">Side Upper</option>
              </InputField>

              <SubmitButton type="submit">Add Passenger</SubmitButton>
            </form>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};

export default PassengerForm;
