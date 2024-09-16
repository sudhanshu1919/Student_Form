import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBarPage from "./pages/NavBarPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <NavBarPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
