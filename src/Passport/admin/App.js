import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import ManageUsers from "./component/ManageUsers";
import ManageApplications from "./component/ManageApplications";
import Settings from "./component/Settings";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  font-family: "Roboto", sans-serif;
`;

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/manage-applications" element={<ManageApplications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
