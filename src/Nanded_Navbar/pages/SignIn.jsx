import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Use the authentication context
import styled from "styled-components";

const SignIn = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Get the login function from context
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake login, in reality, you would authenticate the user here
    if (email === "test@test.com" && password === "password") {
      login(); // Call the login function
      navigate("/"); // Redirect to the homepage
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    // <SignInWrapper>
    //   <h2>Sign In</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div className="form-group">
    //       <label>Email</label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label>Password</label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <button type="submit" className="btn btn-primary mt-3">
    //       Sign In
    //     </button>
    //   </form>
    // </SignInWrapper>
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

const SignInWrapper = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export default SignIn;
