import React, { useState } from "react";
import PassengerForm from "../components/PassengerForm";
import PassengerList from "../components/PassengerList";

const Popup = () => {
  const [passengers, setPassengers] = useState([]);

  const handleAddPassenger = (passenger) => {
    if (passengers.length < 4) {
      setPassengers([...passengers, passenger]);
    } else {
      alert("You can only add up to 4 passengers.");
    }
  };

  return (
    <div>
      <h2>IRCTC Auto-Fill Assistant</h2>
      <PassengerForm onAddPassenger={handleAddPassenger} />
      <PassengerList passengers={passengers} />
    </div>
  );
};

export default Popup;
