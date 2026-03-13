import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faBluesky } from '@fortawesome/free-brands-svg-icons';

/* ─── Keyframes ─── */

const fadeLeft = keyframes`
  from { opacity: 0; transform: translateX(-28px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const fadeRight = keyframes`
  from { opacity: 0; transform: translateX(28px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const floatPhoto = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-14px); }
`;

const pulseDot = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.4); opacity: 0.6; }
`;

/* ─── Page wrapper ─── */

const Page = styled.div`
  background: #ffffff;
  height: calc(100vh - 52px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

/* ─── Hero ─── */

const HeroSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 2.5rem 2rem 1.5rem;
  position: relative;
  overflow: hidden;
`;

/* Decorative gradient blobs — purely atmospheric */

const BlobA = styled.div`
  position: absolute;
  top: -120px;
  right: -80px;
  width: 680px;
  height: 680px;
  background: radial-gradient(circle, rgba(0, 113, 227, 0.09) 0%, rgba(52, 170, 220, 0.05) 45%, transparent 70%);
  border-radius: 50%;
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;
`;

const BlobB = styled.div`
  position: absolute;
  bottom: -100px;
  left: -120px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(175, 82, 222, 0.07) 0%, rgba(48, 209, 88, 0.04) 50%, transparent 70%);
  border-radius: 50%;
  filter: blur(50px);
  pointer-events: none;
  z-index: 0;
`;

/* ─── Two-column grid ─── */

const HeroGrid = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 3.5rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
`;

/* ─── Content side ─── */

const ContentSide = styled.div`
  animation: ${fadeLeft} 0.75s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background: rgba(48, 209, 88, 0.1);
  border: 1px solid rgba(48, 209, 88, 0.25);
  border-radius: 999px;
  padding: 0.35rem 0.85rem 0.35rem 0.65rem;
  margin-bottom: 1.5rem;
  font-size: 0.78rem;
  font-weight: 500;
  color: #1D8348;
  letter-spacing: 0.01em;

  @media (max-width: 780px) {
    display: inline-flex;
  }
`;

const LiveDot = styled.span`
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #30D158;
  flex-shrink: 0;
  animation: ${pulseDot} 2.2s ease-in-out infinite;
`;

const HeroName = styled.h1`
  font-size: clamp(2.9rem, 5.5vw, 5rem);
  font-weight: 800;
  color: #1D1D1F;
  letter-spacing: -0.05em;
  line-height: 0.96;
  margin: 0 0 1.1rem 0;
`;

const HeroRole = styled.p`
  font-size: 1.05rem;
  font-weight: 400;
  color: #86868B;
  letter-spacing: -0.01em;
  margin: 0 0 1.25rem 0;
  line-height: 1.5;
`;

const HeroBio = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: #3D3D3F;
  margin: 0 0 1.75rem 0;
  max-width: 480px;

  @media (max-width: 780px) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

/* Career track */

const CareerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 780px) {
    justify-content: center;
  }
`;

const CareerLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #C7C7CC;
  margin-right: 0.25rem;
`;

const CareerPill = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.28rem 0.75rem;
  border-radius: 999px;
  letter-spacing: -0.01em;
  background: ${({ $current }) => $current ? 'rgba(0, 113, 227, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  color: ${({ $current }) => $current ? '#0071E3' : '#6E6E73'};
  border: 1px solid ${({ $current }) => $current ? 'rgba(0, 113, 227, 0.2)' : 'transparent'};
`;

const CareerSep = styled.span`
  color: #C7C7CC;
  font-size: 0.85rem;
`;

/* Actions */

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 780px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background: #1D1D1F;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.78rem 1.6rem;
  border-radius: 980px;
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: all 0.22s ease;
  white-space: nowrap;

  &:hover {
    background: #3D3D3F;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  }
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
`;

const SocialIcon = styled.a`
  color: #86868B;
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 11px;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.07);
  transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #1D1D1F;
    background: rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  }
`;

/* ─── Photo side ─── */

const PhotoSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeRight} 0.75s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`;

const PhotoContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

/* Large gradient glow behind photo */
const PhotoGlow = styled.div`
  position: absolute;
  inset: -50px;
  background: radial-gradient(
    circle at center,
    rgba(0, 113, 227, 0.14) 0%,
    rgba(52, 170, 220, 0.08) 40%,
    rgba(175, 82, 222, 0.05) 65%,
    transparent 75%
  );
  border-radius: 50%;
  filter: blur(20px);
  pointer-events: none;
`;

const FloatingWrapper = styled.div`
  animation: ${floatPhoto} 7s ease-in-out infinite;
  position: relative;
  z-index: 1;
`;

/* Gradient ring wrapping the photo */
const PhotoRing = styled.div`
  padding: 3.5px;
  border-radius: 50%;
  background: linear-gradient(145deg, #0071E3 0%, #34AADC 40%, #30D158 100%);
  box-shadow: 0 28px 72px rgba(0, 0, 0, 0.18);
`;

const ProfileImage = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  border: 4px solid #ffffff;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.025);
  }

  @media (max-width: 780px) {
    width: 220px;
    height: 220px;
  }
`;

/* ─── Credentials strip ─── */

const CredStrip = styled.div`
  background: #F5F5F7;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
  padding: 0;
  display: flex;
  justify-content: center;
  animation: ${fadeUp} 0.8s 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
`;

const CredInner = styled.div`
  max-width: 960px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CredCell = styled.div`
  padding: 1.5rem 0.75rem;
  text-align: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 22%;
    right: 0;
    width: 1px;
    height: 56%;
    background: rgba(0, 0, 0, 0.09);
  }

  @media (max-width: 760px) {
    &:nth-child(3)::after {
      display: none;
    }
    &:nth-child(1), &:nth-child(2), &:nth-child(3) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    }
  }

  @media (max-width: 480px) {
    &:nth-child(2)::after {
      display: none;
    }
    &:nth-child(odd) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    }
  }
`;

const CredValue = styled.p`
  font-size: 1.3rem;
  font-weight: 800;
  color: #1D1D1F;
  letter-spacing: -0.04em;
  margin: 0 0 0.3rem 0;
  line-height: 1;
`;

const CredLabel = styled.p`
  font-size: 0.75rem;
  color: #86868B;
  font-weight: 500;
  margin: 0;
  line-height: 1.4;
`;

const Home = () => {
  return (
    <Page>
      <HeroSection>
        <BlobA />
        <BlobB />

        <HeroGrid>
          {/* ── Left: Content ── */}
          <ContentSide>
            <StatusBadge>
              <LiveDot />
              Currently at Amazon Web Services
            </StatusBadge>

            <HeroName>
              Imaya Kumar<br />Jagannathan
            </HeroName>

            <HeroRole>
              Specialist Solutions Architect Leader · AWS
            </HeroRole>

            <HeroBio>
              Technology leader, author, and aviation enthusiast building
              the future of cloud observability — leading a global team
              of Specialist Solutions Architects at scale.
            </HeroBio>

            <CareerRow>
              <CareerLabel>Career</CareerLabel>
              <CareerPill $current>AWS</CareerPill>
              <CareerSep>·</CareerSep>
              <CareerPill>Microsoft</CareerPill>
              <CareerSep>·</CareerSep>
              <CareerPill>Virtusa</CareerPill>
            </CareerRow>

            <ActionRow>
              <PrimaryButton to="/activities">View My Work →</PrimaryButton>
              <SocialRow>
                <SocialIcon
                  href="https://linkedin.com/in/imaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </SocialIcon>
                <SocialIcon
                  href="https://github.com/awsimaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </SocialIcon>
                <SocialIcon
                  href="https://bsky.app/profile/imayakumar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bluesky"
                >
                  <FontAwesomeIcon icon={faBluesky} />
                </SocialIcon>
              </SocialRow>
            </ActionRow>
          </ContentSide>

          {/* ── Right: Photo ── */}
          <PhotoSide>
            <PhotoContainer>
              <PhotoGlow />
              <FloatingWrapper>
                <PhotoRing>
                  <ProfileImage
                    src="/images/profile_imaya.jpg"
                    alt="Imaya Kumar Jagannathan"
                  />
                </PhotoRing>
              </FloatingWrapper>
            </PhotoContainer>
          </PhotoSide>
        </HeroGrid>
      </HeroSection>

      {/* ── Credentials strip ── */}
      <CredStrip>
        <CredInner>
          <CredCell>
            <CredValue>Mentor</CredValue>
            <CredLabel>Obsessed with People development</CredLabel>
          </CredCell>
          <CredCell>
            <CredValue>40+</CredValue>
            <CredLabel>Public Speaking Engagements</CredLabel>
          </CredCell>
          <CredCell>
            <CredValue>14</CredValue>
            <CredLabel>Product Launches</CredLabel>
          </CredCell>
          <CredCell>
            <CredValue>$2B+</CredValue>
            <CredLabel>Sales Opportunity Growth</CredLabel>
          </CredCell>
          <CredCell>
            <CredValue>70+</CredValue>
            <CredLabel>Published AWS Articles</CredLabel>
          </CredCell>
          <CredCell>
            <CredValue>Global</CredValue>
            <CredLabel>SA Leadership Team</CredLabel>
          </CredCell>
          <CredCell>
            <CredValue>Author</CredValue>
            <CredLabel>Building Resilient Architectures</CredLabel>
          </CredCell>
          <CredCell>
            <CredValue>Transformation</CredValue>
            <CredLabel>Engineering - Director</CredLabel>
          </CredCell>

        </CredInner>
      </CredStrip>
    </Page>
  );
};

export default Home;
