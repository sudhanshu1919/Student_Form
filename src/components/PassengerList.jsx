import React from "react";
import { PassengerContainer } from "./StyledComponents";

const PassengerList = ({ passengers }) => {
  return (
    <PassengerContainer>
      {passengers.length > 0 ? (
        passengers.map((passenger, index) => (
          <div key={index}>
            <p>
              <strong>From:</strong> {passenger.from} | <strong>To:</strong>
              {passenger.to} <br />
              <strong>Date:</strong> {passenger.date} | <strong>Class:</strong>
              {passenger.travelClass} <br />
              <strong>Name:</strong> {passenger.name} | <strong>Age:</strong>
              {passenger.age} | <strong>Mobile:</strong> {passenger.mobile}
              <br />
              <strong>Seat Preference:</strong> {passenger.seatPreference}
            </p>
            <hr />
          </div>
        ))
      ) : (
        <p>No passengers added yet.</p>
      )}
    </PassengerContainer>
  );
};

export default PassengerList;
