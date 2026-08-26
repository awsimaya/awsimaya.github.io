import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faBluesky } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.bandBackground};
  padding: 1.5rem 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

const FooterInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.grayLight};
  font-size: 0.78rem;
  letter-spacing: 0.01em;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.grayLight};
  font-size: 1rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.grayLight};
  font-size: 0.78rem;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }
`;

const FooterAnchor = styled.a`
  color: ${({ theme }) => theme.colors.grayLight};
  font-size: 0.78rem;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterInner>
        <Copyright>© {year} Imaya Kumar Jagannathan</Copyright>
        <FooterLinks>
          <FooterAnchor href="#top">Back to top</FooterAnchor>
          <FooterLink to="/resume">Resume</FooterLink>
          <SocialLinks>
            <SocialLink href="https://linkedin.com/in/imaya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialLink>
            <SocialLink href="https://github.com/awsimaya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </SocialLink>
            <SocialLink href="https://bsky.app/profile/imayakumar.com" target="_blank" rel="noopener noreferrer" aria-label="Bluesky">
              <FontAwesomeIcon icon={faBluesky} />
            </SocialLink>
          </SocialLinks>
        </FooterLinks>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
