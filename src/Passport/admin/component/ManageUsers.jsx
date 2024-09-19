import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const ManageUsersContainer = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
  color: #343a40;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const UserList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const UserItem = styled.li`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  margin: 0.5rem 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const UserDetails = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const PaymentButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
`;

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [paymentVerified, setPaymentVerified] = useState(false);

  useEffect(() => {
    // Fetch users from API
    axios.get("/api/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setPaymentVerified(false); // Reset payment verification
  };

  const handlePaymentVerification = () => {
    // Here you would verify the payment status
    // For now, we just set the payment as verified
    setPaymentVerified(true);
  };

  return (
    <ManageUsersContainer>
      <h1>Manage Users</h1>
      <UserList>
        {users.map((user) => (
          <UserItem key={user.id} onClick={() => handleUserClick(user)}>
            {user.name}
          </UserItem>
        ))}
      </UserList>

      {selectedUser && (
        <UserDetails>
          <h2>User Details</h2>
          <p>
            <strong>ID:</strong> {selectedUser.id}
          </p>
          <p>
            <strong>Name:</strong> {selectedUser.name}
          </p>
          <p>
            <strong>Email:</strong> {selectedUser.email}
          </p>
          {/* Add more user details as needed */}

          {!paymentVerified && (
            <PaymentButton onClick={handlePaymentVerification}>
              Verify Payment
            </PaymentButton>
          )}

          {paymentVerified && <p>Payment Verified</p>}
        </UserDetails>
      )}
    </ManageUsersContainer>
  );
};

export default ManageUsers;
