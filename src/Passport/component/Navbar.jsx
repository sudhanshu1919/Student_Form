import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components for custom styling
const NavBar = styled.nav`
  background-color: #0d1b2a;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavBrand = styled.div`
  font-size: 1.5rem;
  color: #e0e1dd;
  font-weight: bold;
  text-transform: uppercase;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: #e0e1dd;
  margin-right: 1rem;
  text-decoration: none;
  &:hover {
    color: #415a77;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 0.5rem;
    width: 100%;
    text-align: left;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #e0e1dd;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavCollapse = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    ${({ isOpen }) => (isOpen ? "display: flex;" : "display: none;")}
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <NavBar>
      <NavBrand>Shri Asket Travel Passport Form</NavBrand>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </Hamburger>

      <NavCollapse isOpen={isOpen}>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/freshpassport">Fresh Passport</NavLink>
          <NavLink to="/reissuepassport">Reissue Passport</NavLink>
        </NavLinks>
      </NavCollapse>
    </NavBar>
  );
}

export default Navbar;
