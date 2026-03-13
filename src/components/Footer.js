import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #F5F5F7;
  padding: 1.25rem 2rem;
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

const FooterText = styled.p`
  margin: 0;
  color: #86868B;
  font-size: 0.78rem;
  font-family: 'Pangolin', cursive !important;
  letter-spacing: 0.01em;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Vibe coded with Amazon Q Developer and GitHub Copilot
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
