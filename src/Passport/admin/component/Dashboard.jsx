import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as XLSX from "xlsx";
import axios from "axios";

// Styled Components
const DashboardContainer = styled.div`
  text-align: center;
`;

const SectionButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  margin: 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContentContainer = styled.div`
  margin-top: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;

  th,
  td {
    border: 1px solid #ddd;
    padding: 0.75rem;
    text-align: left;
  }

  th {
    background-color: #007bff;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
`;

const DownloadButton = styled.button`
  background-color: #28a745;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

// Main Component
const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (
      selectedSection === "Fresh Passport" ||
      selectedSection === "Re-issue Passport" ||
      selectedSection === "Payment"
    ) {
      // Fetch data from the local JSON file
      axios
        .get(`/data/${selectedSection.replace(/ /g, "_").toLowerCase()}.json`)
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [selectedSection]);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setSelectedUser(null); // Clear selected user when changing sections
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleDownload = () => {
    const data = users.map((user) => ({
      ID: user.id,
      Name: user.name,
      Email: user.email,
      Contact: user.contact, // Assuming contact is part of user data
      PaymentStatus: user.paymentStatus, // Assuming paymentStatus is part of user data
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");

    XLSX.writeFile(wb, `Users_${selectedSection.replace(/ /g, "_")}.xlsx`);
  };

  return (
    <DashboardContainer>
      <h1>Admin Dashboard</h1>
      <p>
        Welcome to the admin panel. Here you can manage users, applications, and
        settings.
      </p>

      <SectionButton onClick={() => handleSectionClick("Fresh Passport")}>
        Fresh Passport
      </SectionButton>
      <SectionButton onClick={() => handleSectionClick("Re-issue Passport")}>
        Re-issue Passport
      </SectionButton>
      <SectionButton onClick={() => handleSectionClick("Payment")}>
        Payment
      </SectionButton>

      {selectedSection && (
        <DownloadButton onClick={handleDownload}>
          Download {selectedSection} Users
        </DownloadButton>
      )}

      <ContentContainer>
        {selectedSection && selectedSection !== "Payment" && (
          <>
            <h2>{selectedSection} Users</h2>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} onClick={() => handleUserClick(user)}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>View</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}

        {selectedUser && (
          <div>
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
            <p>
              <strong>Contact:</strong> {selectedUser.contact}
            </p>
            <p>
              <strong>Payment Status:</strong> {selectedUser.paymentStatus}
            </p>
          </div>
        )}

        {selectedSection === "Payment" && (
          <div>
            <h2>Payment Section</h2>
            {/* Add payment-related content here */}
          </div>
        )}
      </ContentContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
