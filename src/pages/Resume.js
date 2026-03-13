import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 5rem 2rem 4rem;
  text-align: center;
  animation: ${fadeUp} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`;

const Label = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0071E3;
  margin: 0 0 0.6rem 0;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 800;
  color: #1D1D1F;
  margin: 0 0 1rem 0;
  letter-spacing: -0.04em;
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #86868B;
  margin: 0 0 2.5rem 0;
  line-height: 1.65;
  font-weight: 400;
`;

const ContactCard = styled.div`
  background: #F5F5F7;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactRow = styled.p`
  margin: 0;
  font-size: 0.98rem;
  color: #1D1D1F;
  line-height: 1.6;

  strong {
    font-weight: 600;
  }

  a {
    color: #0071E3;
    font-weight: 500;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.72;
      text-decoration: underline;
    }
  }
`;

const Resume = () => {
  return (
    <Section>
      <Label>Get in Touch</Label>
      <Title>Resume</Title>
      <Subtitle>
        Reach out via email or LinkedIn<br />to request the latest version.
      </Subtitle>
      <ContactCard>
        <ContactRow>
          <strong>Email</strong><br />
          imayakumar_at_outlook_dot_com
        </ContactRow>
        <ContactRow>
          <strong>LinkedIn</strong><br />
          <a href="https://www.linkedin.com/in/imaya" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/imaya
          </a>
        </ContactRow>
      </ContactCard>
    </Section>
  );
};

export default Resume;
