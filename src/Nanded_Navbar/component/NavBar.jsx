import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownMenu from "./DropdownMenu";
import colors from "../colors"; // Import colors

const NavLink = styled.a`
  color: ${colors.paleGreen};
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: ${colors.lightGreen};
  }
`;

const NavItem = styled.li`
  position: relative;

  &:hover > ${DropdownMenu} {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }
`;

const NavBar = () => {
  const servicesMenu = [
    { href: "#", label: "Health & Wellness" },
    { href: "#", label: "Education" },
    { href: "#", label: "Business Services" },
    { href: "#", label: "Home Services" },
    { href: "#", label: "Emergency Services" },
  ];

  const tourismMenu = [
    { href: "#", label: "Tourist Spots" },
    { href: "#", label: "Accommodation" },
    { href: "#", label: "Food" },
    { href: "#", label: "Restaurants" },
    { href: "#", label: "Transport Services" },
  ];

  const governmentInfoMenu = [
    { href: "#", label: "Municipal Services" },
    { href: "#", label: "Forms & Documents" },
    { href: "#", label: "Govt Links" },
  ];

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
            <NavItem className="nav-item">
              <NavLink className="nav-link" href="/">
                Home
              </NavLink>
            </NavItem>

            <NavItem className="nav-item dropdown">
              <NavLink className="nav-link" href="/services">
                Services
              </NavLink>
              <DropdownMenu items={servicesMenu} />
            </NavItem>

            <NavItem className="nav-item dropdown">
              <NavLink className="nav-link" href="/tourism">
                Tourism
              </NavLink>
              <DropdownMenu items={tourismMenu} />
            </NavItem>

            <NavItem className="nav-item dropdown">
              <NavLink className="nav-link" href="/government-info">
                Government Info
              </NavLink>
              <DropdownMenu items={governmentInfoMenu} />
            </NavItem>
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
            <button className="btn btn-outline-light ms-2" type="button">
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
