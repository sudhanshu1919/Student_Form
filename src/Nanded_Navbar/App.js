import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveNavBar from "./ResponsiveNavBar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { AuthProvider } from "./AuthContext"; // Import the AuthProvider

function App() {
  return (
    <AuthProvider>
      <Router>
        <ResponsiveNavBar />
        <Routes>
          {/* Define routes for Sign In and Login pages */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          {/* Add a default route or a Home route if necessary */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
