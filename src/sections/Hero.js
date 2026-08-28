import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faBluesky } from '@fortawesome/free-brands-svg-icons';

const Section = styled.section`
  padding: 5.5rem 2rem 4rem;

  @media (max-width: 780px) {
    padding: 3.5rem 1.25rem 2.75rem;
  }
`;

const Inner = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
`;

const ContentSide = styled.div``;

const StatusBadge = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0 0 1.5rem 0;

  &::before {
    content: '';
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 780px) {
    justify-content: center;
  }
`;

const Name = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.4rem, 5.4vw, 3.9rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin: 0 0 0.6rem 0;
`;

const Role = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  margin: 0 0 1.35rem 0;
  line-height: 1.5;
`;

const Bio = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin: 0 0 1.75rem 0;
  max-width: 500px;

  @media (max-width: 780px) {
    max-width: 100%;
    margin: 0 auto 1.5rem;
  }
`;

const CareerRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 2.25rem;
  font-family: ${({ theme }) => theme.fonts.body};

  @media (max-width: 780px) {
    justify-content: center;
  }
`;

const CareerLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grayLine};
  margin-right: 0.15rem;
`;

const CareerName = styled.span`
  font-size: 0.86rem;
  font-weight: ${({ $current }) => ($current ? '700' : '400')};
  color: ${({ $current, theme }) => ($current ? theme.colors.accent : theme.colors.gray)};
`;

const CareerSep = styled.span`
  color: ${({ theme }) => theme.colors.grayLine};
  font-size: 0.8rem;
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
  flex-wrap: wrap;

  @media (max-width: 780px) {
    justify-content: center;
  }
`;

const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.accent};
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  font-size: 0.88rem;
  padding: 0.8rem 1.6rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  text-decoration: none;
  letter-spacing: -0.005em;
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(31, 77, 58, 0.22);
  }
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.18s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const PhotoSide = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 780px) {
    order: -1;
  }
`;

const PhotoFrame = styled.div`
  position: relative;
  width: 240px;
  height: 240px;

  &::before {
    content: '';
    position: absolute;
    top: -18px;
    left: -18px;
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: 50%;
    z-index: 0;
  }

  @media (max-width: 780px) {
    width: 160px;
    height: 160px;

    &::before {
      top: -12px;
      left: -12px;
    }
  }
`;

const ProfileImage = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  box-shadow: 0 20px 40px rgba(26, 26, 24, 0.14);
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
          <CareerName $current>AWS</CareerName>
          <CareerSep>&rarr;</CareerSep>
          <CareerName>Bisk Education</CareerName>
          <CareerSep>&rarr;</CareerSep>
          <CareerName>Microsoft</CareerName>
          <CareerSep>&rarr;</CareerSep>
          <CareerName>HP / Virtusa</CareerName>
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
        <PhotoFrame>
          <ProfileImage src="/images/profile_imaya.jpg" alt="Imaya Kumar Jagannathan" />
        </PhotoFrame>
      </PhotoSide>
    </Inner>
  </Section>
);

export default Hero;
