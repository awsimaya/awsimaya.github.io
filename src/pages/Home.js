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

  /* Desktop: lock to one screen, no scroll */
  @media (min-width: 781px) {
    height: calc(100vh - 52px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* Mobile: natural height, allow scroll */
  @media (max-width: 780px) {
    min-height: calc(100vh - 52px);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
`;

/* ─── Hero ─── */

const HeroSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 2.5rem 2rem 1.5rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 780px) {
    padding: 2rem 1.25rem 1.5rem;
    align-items: flex-start;
  }
`;

/* Decorative gradient blobs */

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
    gap: 1.5rem;
    text-align: center;
  }
`;

/* ─── Content side ─── */

const ContentSide = styled.div`
  animation: ${fadeLeft} 0.75s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  @media (max-width: 780px) {
    animation: ${fadeUp} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    order: 2;
  }
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background: rgba(48, 209, 88, 0.1);
  border: 1px solid rgba(48, 209, 88, 0.25);
  border-radius: 999px;
  padding: 0.35rem 0.85rem 0.35rem 0.65rem;
  margin-bottom: 1.25rem;
  font-size: 0.78rem;
  font-weight: 500;
  color: #1D8348;
  letter-spacing: 0.01em;
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
  font-size: clamp(2.4rem, 5.5vw, 5rem);
  font-weight: 800;
  color: #1D1D1F;
  letter-spacing: -0.05em;
  line-height: 0.96;
  margin: 0 0 0.9rem 0;

  @media (max-width: 780px) {
    font-size: clamp(2.1rem, 8vw, 2.8rem);
    line-height: 1;
    margin: 0 0 0.75rem 0;
  }
`;

const HeroRole = styled.p`
  font-size: 1.05rem;
  font-weight: 400;
  color: #86868B;
  letter-spacing: -0.01em;
  margin: 0 0 1rem 0;
  line-height: 1.5;

  @media (max-width: 780px) {
    font-size: 0.95rem;
    margin: 0 0 0.85rem 0;
  }
`;

const HeroBio = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: #3D3D3F;
  margin: 0 0 1.5rem 0;
  max-width: 480px;

  @media (max-width: 780px) {
    font-size: 0.92rem;
    max-width: 100%;
    margin: 0 auto 1.25rem;
    line-height: 1.65;
  }
`;

/* Career track */

const CareerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.75rem;

  @media (max-width: 780px) {
    justify-content: center;
    margin-bottom: 1.25rem;
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

  @media (max-width: 780px) {
    animation: ${fadeUp} 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    order: 1;
  }
`;

const PhotoContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

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

  @media (max-width: 780px) {
    animation: none;
  }
`;

const PhotoRing = styled.div`
  padding: 3.5px;
  border-radius: 50%;
  background: linear-gradient(145deg, #0071E3 0%, #34AADC 40%, #30D158 100%);
  box-shadow: 0 28px 72px rgba(0, 0, 0, 0.18);

  @media (max-width: 780px) {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.14);
  }
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
    width: 160px;
    height: 160px;
    border-width: 3px;
  }
`;

/* ─── Credentials strip ─── */

const CredStrip = styled.div`
  background: #F5F5F7;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: center;
  animation: ${fadeUp} 0.8s 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
`;

const CredInner = styled.div`
  max-width: 960px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CredCell = styled.div`
  padding: 1.25rem 0.75rem;
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

  @media (max-width: 780px) {
    padding: 1.1rem 0.75rem;

    /* Hide the right-side vertical divider on even cells (right column) */
    &:nth-child(even)::after {
      display: none;
    }

    /* Add bottom border between rows, except last two cells */
    &:not(:nth-last-child(-n+2)) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.07);
    }
  }
`;

const CredValue = styled.p`
  font-size: 1.15rem;
  font-weight: 800;
  color: #1D1D1F;
  letter-spacing: -0.03em;
  margin: 0 0 0.25rem 0;
  line-height: 1;
`;

const CredLabel = styled.p`
  font-size: 0.68rem;
  color: #86868B;
  font-weight: 500;
  margin: 0;
  line-height: 1.35;
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
              Sr. Manager, Worldwide Specialist SA &amp; Principal Architect · AWS
            </HeroRole>

            <HeroBio>
              Technology executive with 22+ years building scalable systems and
              leading AI-powered transformation at global scale. Currently leading
              a worldwide technical organization at AWS supporting a $4.2B business —
              published author, keynote speaker, and recognized thought leader.
            </HeroBio>

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
            <CredValue>22+</CredValue>
            <CredLabel>Years of Technology Leadership</CredLabel>
          </CredCell>
          <CredCell>
            <CredValue>$4.2B</CredValue>
            <CredLabel>AWS Business Supported</CredLabel>
          </CredCell>
          <CredCell>
            <CredValue>60K+</CredValue>
            <CredLabel>Workshop Users Worldwide</CredLabel>
          </CredCell>
          <CredCell>
            <CredValue>30K+</CredValue>
            <CredLabel>Customer Deployments</CredLabel>
          </CredCell>
          <CredCell>
            <CredValue>12</CredValue>
            <CredLabel>AWS Managed Service Launches</CredLabel>
          </CredCell>
          <CredCell>
            <CredValue>$700M+</CredValue>
            <CredLabel>Enterprise Revenue Influenced</CredLabel>
          </CredCell>
          <CredCell>
            <CredValue>70+</CredValue>
            <CredLabel>Published AWS Articles</CredLabel>
          </CredCell>
          <CredCell>
            <CredValue>Author</CredValue>
            <CredLabel>Building Resilient Architectures</CredLabel>
          </CredCell>
        </CredInner>
      </CredStrip>
    </Page>
  );
};

export default Home;
