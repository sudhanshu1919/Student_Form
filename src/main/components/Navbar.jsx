import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ login }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Container>
      {!isLogin ? (
        <Menu>
          <div>
            <StyledLink to="/home">Home</StyledLink>
          </div>
          <div>
            <StyledLink to="/Resume">Cretae Resume</StyledLink>
          </div>
        </Menu>
      ) : (
        <Btn>
          <button onClick={() => navigate(login ? "/login" : "/SignUp")}>
            {login ? "Login" : "Create Account"}
          </button>
        </Btn>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 5px 5px hsla(0, 0%, 71%, 0.5);
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Btn = styled.div``;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 30px;
  font-family: "Noto Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings: "wdth" 100;
`;

export default Navbar;
