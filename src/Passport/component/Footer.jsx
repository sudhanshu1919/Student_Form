import React from "react";
import styled from "styled-components";

// Styled Components for Footer
const FooterContainer = styled.footer`
  background-color: #0d1b2a;
  color: #e0e1dd;
  padding: 1rem 0;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FooterText = styled.p`
  margin: 0;
  padding: 0.5rem;
  color: #e0e1dd;

  & > span {
    color: #415a77;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        Design by <span>Sudhanshu Gaikwad</span>
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;
