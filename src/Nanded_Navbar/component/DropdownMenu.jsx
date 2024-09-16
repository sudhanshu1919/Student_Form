// import React from "react";
// import styled from "styled-components";
// import colors from "../colors"; // Import colors

// const Dropdown = styled.ul`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   background-color: #ffffff; // Set background color to white
//   border: 0.1px solid ${colors.darkBlue};
//   list-style: none;
//   padding: 0.5rem 1rem;
//   display: none;
//   opacity: 0;
//   transform: translateY(-10px);
//   transition: all 0.3s ease-in-out;
//   z-index: 1000;
//   min-width: 200px; // Ensure dropdown width is sufficient
// `;

// const DropdownItem = styled.li`
//   margin: 0.5rem 0;

//   &:hover > a {
//     border-left: 3px solid ${colors.darkBlue}; // Left border color on hover
//   }

//   a {
//     display: block;
//     padding: 0.5rem;
//     color: ${colors.darkBlue};
//     text-decoration: none;

//     &:hover {
//       background-color: ${colors.lightGreen}; // Background color on hover
//       color: ${colors.darkBlue};
//     }
//   }
// `;

// const DropdownMenu = ({ items }) => {
//   return (
//     <Dropdown className="dropdown-menu">
//       {items.map((item, index) => (
//         <DropdownItem key={index}>
//           <a href={item.href}>{item.label}</a>
//         </DropdownItem>
//       ))}
//     </Dropdown>
//   );
// };

// export default DropdownMenu;

import React from "react";
import styled from "styled-components";
import colors from "../colors"; // Ensure correct path

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border: 0.1px solid ${colors.darkBlue};
  list-style: none;
  padding: 0.5rem 1rem;
  display: none;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  min-width: 200px;
`;

const DropdownItem = styled.li`
  margin: 0.5rem 0;

  &:hover > a {
    border-left: 3px solid ${colors.darkBlue};
  }

  a {
    display: block;
    padding: 0.5rem;
    color: ${colors.darkBlue};
    text-decoration: none;

    &:hover {
      background-color: ${colors.lightGreen};
      color: ${colors.darkBlue};
    }
  }
`;

const DropdownMenu = ({ items }) => {
  return (
    <Dropdown className="dropdown-menu">
      {items.map((item, index) => (
        <DropdownItem key={index}>
          <a href={item.href}>{item.label}</a>
        </DropdownItem>
      ))}
    </Dropdown>
  );
};

export default DropdownMenu;
