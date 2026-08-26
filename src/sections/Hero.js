import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faBluesky } from '@fortawesome/free-brands-svg-icons';

const Section = styled.section`
  padding: 4.5rem 2rem 3.5rem;

  @media (max-width: 780px) {
    padding: 3rem 1.25rem 2.5rem;
  }
`;

const Inner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 3.5rem;
  align-items: center;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const ContentSide = styled.div``;

const StatusBadge = styled.p`
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.bandBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 0.35rem 0.85rem;
  margin: 0 0 1.25rem 0;
`;

const Name = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.ink};
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin: 0 0 0.75rem 0;
`;

const Role = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0 0 1rem 0;
  line-height: 1.5;
`;

const Bio = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin: 0 0 1.5rem 0;
  max-width: 480px;

  @media (max-width: 780px) {
    max-width: 100%;
    margin: 0 auto 1.25rem;
  }
`;

const CareerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.75rem;

  @media (max-width: 780px) {
    justify-content: center;
  }
`;

const CareerLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grayLine};
  margin-right: 0.25rem;
`;

const CareerPill = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.28rem 0.75rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  letter-spacing: -0.01em;
  background: ${({ $current, theme }) => ($current ? 'rgba(0, 113, 227, 0.08)' : theme.colors.bandBackground)};
  color: ${({ $current, theme }) => ($current ? theme.colors.accentBlue : theme.colors.gray)};
`;

const CareerSep = styled.span`
  color: ${({ theme }) => theme.colors.grayLine};
  font-size: 0.85rem;
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 780px) {
    justify-content: center;
  }
`;

const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.ink};
  color: #ffffff;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.72rem 1.5rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  text-decoration: none;
  letter-spacing: -0.01em;

  &:hover {
    opacity: 0.85;
  }
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
    border-color: ${({ theme }) => theme.colors.grayLine};
  }
`;

const PhotoSide = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 780px) {
    order: -1;
  }
`;

const ProfileImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 780px) {
    width: 150px;
    height: 150px;
  }
`;

const Hero = () => (
  <Section id="top">
    <Inner>
      <ContentSide>
        <StatusBadge>Currently at Amazon Web Services</StatusBadge>

        <Name>Imaya Kumar Jagannathan</Name>

        <Role>Sr. Mgr, WW Specialist SA | Principal Specialist SA · AWS</Role>

        <Bio>
          Technology executive with 22+ years building scalable systems and
          leading AI-powered transformation at global scale. Currently leading
          a worldwide technical organization at AWS supporting a $4.2B business —
          published author, keynote speaker, and recognized thought leader.
        </Bio>

        <CareerRow>
          <CareerLabel>Career</CareerLabel>
          <CareerPill $current>AWS</CareerPill>
          <CareerSep>·</CareerSep>
          <CareerPill>Bisk Education</CareerPill>
          <CareerSep>·</CareerSep>
          <CareerPill>Microsoft</CareerPill>
          <CareerSep>·</CareerSep>
          <CareerPill>HP / Virtusa</CareerPill>
        </CareerRow>

        <ActionRow>
          <PrimaryLink href="#work">View My Work &rarr;</PrimaryLink>
          <SocialRow>
            <SocialIcon href="https://linkedin.com/in/imaya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialIcon>
            <SocialIcon href="https://github.com/awsimaya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </SocialIcon>
            <SocialIcon href="https://bsky.app/profile/imayakumar.com" target="_blank" rel="noopener noreferrer" aria-label="Bluesky">
              <FontAwesomeIcon icon={faBluesky} />
            </SocialIcon>
          </SocialRow>
        </ActionRow>
      </ContentSide>

      <PhotoSide>
        <ProfileImage src="/images/profile_imaya.jpg" alt="Imaya Kumar Jagannathan" />
      </PhotoSide>
    </Inner>
  </Section>
);

export default Hero;
