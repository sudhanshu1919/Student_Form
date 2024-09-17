import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import { Link } from "react-router-dom";

// Color Scheme
const colors = {
  darkBlue: "#01161e",
  teal: "#124559",
  lightTeal: "#598392",
  lightGreen: "#aec3b0",
  paleGreen: "#eff6e0",
};

// Styled Components for custom elements
const NavLink = styled.a`
  color: ${colors.paleGreen};
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: ${colors.lightGreen};
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff; // Set background color to white
  border: 0.1px solid ${colors.darkBlue};
  list-style: none;
  padding: 0.5rem 1rem;
  display: none;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  min-width: 200px; // Ensure dropdown width is sufficient
`;

const DropdownItem = styled.li`
  margin: 0.5rem 0;

  &:hover > a {
    border-left: 3px solid ${colors.darkBlue}; // Left border color on hover
  }

  a {
    display: block;
    padding: 0.5rem;
    color: ${colors.darkBlue};
    text-decoration: none;

    &:hover {
      background-color: ${colors.lightGreen}; // Background color on hover
      color: ${colors.darkBlue};
    }
  }
`;

const NavItem = styled.li`
  position: relative;

  &:hover > ${Dropdown} {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }
`;

// Bootstrap Navbar integrated with custom hover dropdown and colors
const ResponsiveNavBar = ({ isAuthenticated, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          Nanded Services
        </a>

        {/* Hamburger for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          {/* Navigation Links */}
          <ul className="navbar-nav">
            {/* Home Link (Always visible) */}
            <NavItem className="nav-item">
              <NavLink className="nav-link" href="/">
                Home
              </NavLink>
            </NavItem>

            {/* Conditionally render these items only if authenticated */}
            {isAuthenticated && (
              <>
                {/* Dropdown for Services */}
                <NavItem className="nav-item dropdown">
                  <NavLink className="nav-link" href="/services">
                    Services
                  </NavLink>
                  <Dropdown className="dropdown-menu">
                    <DropdownItem>
                      <NavLink href="#">Health & Wellness</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">Education</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">Business Services</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">Home Services</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">Emergency Services</NavLink>
                    </DropdownItem>
                  </Dropdown>
                </NavItem>

                {/* Dropdown for Tourism */}
                <NavItem className="nav-item dropdown">
                  <NavLink className="nav-link" href="/tourism">
                    Tourism
                  </NavLink>
                  <Dropdown className="dropdown-menu">
                    <DropdownItem>
                      <NavLink href="#">Tourist Spots</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">Accommodation</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">Food</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">Restaurants</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">Transport Services</NavLink>
                    </DropdownItem>
                  </Dropdown>
                </NavItem>

                {/* Dropdown for Government Info */}
                <NavItem className="nav-item dropdown">
                  <NavLink className="nav-link" href="/government-info">
                    Government Info
                  </NavLink>
                  <Dropdown className="dropdown-menu">
                    <DropdownItem>
                      <NavLink href="#">Municipal Services</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">Forms & Documents</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="#">Govt Links</NavLink>
                    </DropdownItem>
                  </Dropdown>
                </NavItem>
              </>
            )}
          </ul>

          {/* Search Input and Buttons */}
          <form className="d-flex ms-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              style={{
                backgroundColor: colors.lightTeal,
                color: colors.paleGreen,
                border: `1px solid ${colors.darkBlue}`,
                borderRadius: "4px",
              }}
            />
            {isAuthenticated ? (
              <ButtonLink
                to="/"
                onClick={onLogout}
                className="btn btn-outline-light ms-2"
              >
                Sign Out
              </ButtonLink>
            ) : (
              <ButtonLink to="/signin" className="btn btn-outline-light ms-2">
                Sign In
              </ButtonLink>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  background-color: #007bff;
  border: 1px solid #007bff;
  border-radius: 0.25rem;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
    border-color: #004085;
    text-decoration: none;
  }
`;

export default ResponsiveNavBar;
