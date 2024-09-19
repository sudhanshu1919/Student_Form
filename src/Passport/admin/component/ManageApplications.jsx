import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const ManageApplicationsContainer = styled.div`
  /* Add styling here */
`;

const ManageApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch applications from API
    axios.get("/api/applications").then((response) => {
      setApplications(response.data);
    });
  }, []);

  return (
    <ManageApplicationsContainer>
      <h1>Manage Applications</h1>
      {/* Add functionality to list and manage applications */}
      <ul>
        {applications.map((application) => (
          <li key={application.id}>{application.name}</li>
        ))}
      </ul>
    </ManageApplicationsContainer>
  );
};

export default ManageApplications;
