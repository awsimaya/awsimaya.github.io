import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 3.5rem 2rem 4rem;
  animation: ${fadeUp} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`;

/* ─── Intro Hero Block ─── */

const IntroBlock = styled.div`
  margin-bottom: 2.75rem;
`;

const IntroEyebrow = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0071E3;
  margin: 0 0 0.75rem 0;
`;

const IntroHeading = styled.h1`
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 800;
  color: #1D1D1F;
  letter-spacing: -0.04em;
  line-height: 1.08;
  margin: 0 0 1.25rem 0;
`;

const IntroLead = styled.p`
  font-size: 1.08rem;
  line-height: 1.8;
  color: #3D3D3F;
  max-width: 700px;
  margin: 0;
  font-weight: 400;
`;

/* ─── Stats Row ─── */

const StatsRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0;
  background: #F5F5F7;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  padding: 0;
  margin-bottom: 2.5rem;
  overflow: hidden;

  @media (max-width: 600px) {
    flex-direction: column;
    border-radius: 16px;
  }
`;

const StatItem = styled.div`
  flex: 1;
  padding: 1.75rem 1.5rem;
  text-align: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 20%;
    right: 0;
    width: 1px;
    height: 60%;
    background: rgba(0, 0, 0, 0.1);

    @media (max-width: 600px) {
      top: auto;
      bottom: 0;
      left: 20%;
      width: 60%;
      height: 1px;
    }
  }

  @media (max-width: 600px) {
    &:not(:last-child)::after {
      top: auto;
      right: auto;
      bottom: 0;
      left: 20%;
      width: 60%;
      height: 1px;
    }
  }
`;

const StatNum = styled.p`
  font-size: 2rem;
  font-weight: 800;
  color: #1D1D1F;
  letter-spacing: -0.04em;
  margin: 0 0 0.3rem 0;
  line-height: 1;
`;

const StatLabel = styled.p`
  font-size: 0.78rem;
  font-weight: 500;
  color: #86868B;
  margin: 0;
  line-height: 1.4;
`;

/* ─── Tabs ─── */

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'speaking', label: 'Speaking & Media' },
  { id: 'content', label: 'Content & Publications' },
  { id: 'recognition', label: 'Recognition & Career' },
];

const TabBar = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TabButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.7rem 1rem;
  font-size: 0.88rem;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  color: ${({ $active }) => ($active ? '#1D1D1F' : '#86868B')};
  white-space: nowrap;
  position: relative;
  transition: color 0.18s ease;
  letter-spacing: -0.01em;

  &:hover {
    color: #1D1D1F;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0.4rem;
    right: 0.4rem;
    bottom: -1px;
    height: 2px;
    border-radius: 1px;
    background: #0071E3;
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transition: opacity 0.18s ease;
  }
`;

/* ─── Flagship Initiatives ─── */

const InitiativesBlock = styled.div`
  margin-bottom: 0.5rem;
`;

const InitiativesEyebrow = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0071E3;
  margin: 0 0 0.6rem 0;
`;

const InitiativesTitle = styled.h2`
  font-size: 1.35rem;
  font-weight: 700;
  color: #1D1D1F;
  letter-spacing: -0.025em;
  margin: 0 0 1.25rem 0;
`;

const InitiativeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const InitiativeCard = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  padding: 1.1rem 1.25rem;
  text-decoration: none;
  color: #1D1D1F;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 113, 227, 0.25);
  }
`;

const InitiativeText = styled.div``;

const InitiativeCardTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1D1D1F;
  margin: 0 0 0.25rem 0;
  line-height: 1.35;
`;

const InitiativeCardMeta = styled.p`
  font-size: 0.78rem;
  color: #0071E3;
  font-weight: 500;
  margin: 0;
`;

const InitiativeArrow = styled.span`
  font-size: 1rem;
  color: #C7C7CC;
  flex-shrink: 0;
  transition: transform 0.2s ease, color 0.2s ease;

  ${InitiativeCard}:hover & {
    transform: translateX(3px);
    color: #0071E3;
  }
`;

/* ─── Section Primitives ─── */

const SectionLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0071E3;
  margin: 0 0 0.5rem 0;
`;

const Subtitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1D1D1F;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.025em;
  line-height: 1.2;
`;

const SectionDivider = styled.div`
  margin: 4rem 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.08), transparent);
`;

/* ─── AWS Cloud Operations Show Card ─── */

const ShowCard = styled.a`
  display: block;
  background: linear-gradient(145deg, #ffffff 60%, rgba(255, 59, 48, 0.04) 100%);
  border-radius: 18px;
  padding: 1.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.06);
  text-decoration: none;
  color: #1D1D1F;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.11);
    border-color: rgba(0, 0, 0, 0.11);
  }
`;

const PlayIcon = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 38px;
  height: 38px;
  background: #FF3B30;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 0.72rem;
  transition: all 0.28s ease;
  box-shadow: 0 2px 8px rgba(255, 59, 48, 0.3);

  ${ShowCard}:hover & {
    transform: scale(1.12);
    box-shadow: 0 4px 16px rgba(255, 59, 48, 0.45);
  }
`;

const ShowTitle = styled.h3`
  font-size: 1.05rem;
  margin: 0 0 0.6rem 0;
  font-weight: 600;
  color: #1D1D1F;
  padding-right: 3rem;
  letter-spacing: -0.01em;
`;

const ShowDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.65;
  color: #6E6E73;
  margin: 0 0 0.75rem 0;
`;

const ShowMeta = styled.p`
  font-size: 0.82rem;
  color: #FF3B30;
  font-weight: 500;
  margin: 0;
`;

/* ─── Card Grids ─── */

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

/* ─── Shared Activity Card ───
   Speaking, technical session, .NET, publication, and award cards all
   share identical structure/motion — only the tint and meta color vary. */

const ActivityCardBase = styled.a`
  display: block;
  background: linear-gradient(145deg, #ffffff 60%, ${({ $tint }) => $tint || 'rgba(0, 0, 0, 0.02)'} 100%);
  border-radius: 16px;
  padding: 1.35rem;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.055);
  text-decoration: none;
  color: #1D1D1F;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.11);
    border-color: rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 0.9rem;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  color: #1D1D1F;
  line-height: 1.4;
  letter-spacing: -0.01em;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CardMeta = styled.p`
  font-size: 0.82rem;
  font-weight: ${({ $bold }) => ($bold ? 600 : 500)};
  margin: 0 0 0.3rem 0;
  color: ${({ $color }) => $color || '#6E6E73'};

  &:last-child {
    margin-bottom: 0;
  }
`;

const CardDescription = styled.p`
  font-size: 0.82rem;
  color: #6E6E73;
  font-weight: 400;
  margin: 0;
  line-height: 1.5;
`;

const ActivityCard = ({ href, tint, children }) => (
  <ActivityCardBase
    as={href ? 'a' : 'div'}
    href={href}
    target={href ? '_blank' : undefined}
    rel={href ? 'noopener noreferrer' : undefined}
    $tint={tint}
  >
    {children}
  </ActivityCardBase>
);

const TINTS = {
  speaking: 'rgba(255, 159, 10, 0.04)',
  session: 'rgba(175, 82, 222, 0.04)',
  dotnet: 'rgba(52, 199, 89, 0.04)',
  publication: 'rgba(0, 113, 227, 0.04)',
  award: 'rgba(255, 214, 10, 0.05)',
};

/* ─── Career Milestone Cards ─── */

const MilestoneGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.25rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const MilestoneCard = styled.div`
  background: ${({ $accent }) => `linear-gradient(145deg, #ffffff 60%, ${$accent || 'rgba(0,0,0,0.02)'} 100%)`};
  border-radius: 16px;
  padding: 1.35rem;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.055);
`;

const MilestoneMetric = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ $color }) => $color || '#1D1D1F'};
  letter-spacing: -0.04em;
  margin: 0 0 0.35rem 0;
  line-height: 1;
`;

const MilestoneTitle = styled.h3`
  font-size: 0.9rem;
  margin: 0 0 0.45rem 0;
  font-weight: 600;
  color: #1D1D1F;
  line-height: 1.4;
  letter-spacing: -0.01em;
`;

const MilestoneDesc = styled.p`
  font-size: 0.82rem;
  color: #6E6E73;
  font-weight: 400;
  margin: 0;
  line-height: 1.55;
`;

/* ─── Collapsible Section ─── */

const CollapsibleSection = styled.div`
  margin-top: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  & > h2 {
    padding: 1.1rem 1.5rem;
    margin: 0;
    background: #F5F5F7;
    cursor: pointer;
    transition: background 0.18s ease;
    border-radius: 18px;

    &:hover {
      background: #EBEBED;
    }
  }
`;

const CollapsibleContent = styled.div`
  padding: 1.5rem;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background: #FAFAFA;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 0 0 18px 18px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.35rem 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const LinkItem = styled.li`
  a {
    color: #0071E3;
    font-size: 0.9rem;
    text-decoration: none;
    font-weight: 400;
    transition: opacity 0.18s ease;

    &:hover {
      opacity: 0.72;
      text-decoration: underline;
    }
  }
`;

const Activities = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Container>

      {/* ── Intro Hero ── */}
      <IntroBlock>
        <IntroEyebrow>22+ Years of Technology Leadership</IntroEyebrow>
        <IntroHeading>Work, Impact &amp;<br />Achievements</IntroHeading>
        <IntroLead>
          Leading a worldwide technical organization at AWS supporting a $4.2B Cloud Operations
          business — designing platforms and tooling adopted by 60,000+ users and deployed in
          30,000+ customer environments. Building and mentoring a Technical Field Community
          of 1,500+ technical professionals across the globe.
        </IntroLead>
      </IntroBlock>

      {/* ── Impact Stats ── */}
      <StatsRow>
        <StatItem>
          <StatNum>60K+</StatNum>
          <StatLabel>Workshop users · 5M+ page views</StatLabel>
        </StatItem>
        <StatItem>
          <StatNum>250K+</StatNum>
          <StatLabel>Annual best practices guide views</StatLabel>
        </StatItem>
        <StatItem>
          <StatNum>1,500+</StatNum>
          <StatLabel>Technical professionals in field community</StatLabel>
        </StatItem>
        <StatItem>
          <StatNum>25+</StatNum>
          <StatLabel>AWS senior leader accolades</StatLabel>
        </StatItem>
      </StatsRow>

      {/* ── Tabs ── */}
      <TabBar role="tablist" aria-label="Activities categories">
        {TABS.map((tab) => (
          <TabButton
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            $active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabBar>

      {/* ── Overview tab ── */}
      {activeTab === 'overview' && (
        <InitiativesBlock>
          <InitiativesEyebrow>Open Source &amp; Community</InitiativesEyebrow>
          <InitiativesTitle>Flagship Initiatives</InitiativesTitle>
          <InitiativeGrid>
            <InitiativeCard href="https://observability.workshop.aws/" target="_blank" rel="noopener noreferrer">
              <InitiativeText>
                <InitiativeCardTitle>AWS Observability Workshop</InitiativeCardTitle>
                <InitiativeCardMeta>60,000+ users · 5M+ page views · 75+ contributors</InitiativeCardMeta>
              </InitiativeText>
              <InitiativeArrow>›</InitiativeArrow>
            </InitiativeCard>

            <InitiativeCard href="https://aws-observability.github.io/observability-best-practices/" target="_blank" rel="noopener noreferrer">
              <InitiativeText>
                <InitiativeCardTitle>AWS Observability Best Practices Guide</InitiativeCardTitle>
                <InitiativeCardMeta>Community-maintained · Global team</InitiativeCardMeta>
              </InitiativeText>
              <InitiativeArrow>›</InitiativeArrow>
            </InitiativeCard>

            <InitiativeCard href="https://aws-samples.github.io/cloud-operations-best-practices/" target="_blank" rel="noopener noreferrer">
              <InitiativeText>
                <InitiativeCardTitle>AWS Cloud Operations Best Practices Guide</InitiativeCardTitle>
                <InitiativeCardMeta>Maintained by a distributed SA team</InitiativeCardMeta>
              </InitiativeText>
              <InitiativeArrow>›</InitiativeArrow>
            </InitiativeCard>

            <InitiativeCard href="https://aws-observability.github.io/terraform-aws-observability-accelerator/" target="_blank" rel="noopener noreferrer">
              <InitiativeText>
                <InitiativeCardTitle>AWS Observability Accelerators</InitiativeCardTitle>
                <InitiativeCardMeta>Terraform &amp; CDK · Amazon EKS native · 30K+ deployments</InitiativeCardMeta>
              </InitiativeText>
              <InitiativeArrow>›</InitiativeArrow>
            </InitiativeCard>

            <InitiativeCard href="https://aws-observability.github.io/observability-best-practices/maturity-model/" target="_blank" rel="noopener noreferrer">
              <InitiativeText>
                <InitiativeCardTitle>AWS Observability Maturity Model</InitiativeCardTitle>
                <InitiativeCardMeta>Core framework for 4 GTM initiatives · Customer success guide</InitiativeCardMeta>
              </InitiativeText>
              <InitiativeArrow>›</InitiativeArrow>
            </InitiativeCard>
          </InitiativeGrid>
        </InitiativesBlock>
      )}

      {/* ── Speaking & Media tab ── */}
      {activeTab === 'speaking' && (
        <>
          <SectionLabel>Media</SectionLabel>
          <Subtitle>AWS Cloud Operations Show</Subtitle>

          <ShowCard href="https://www.youtube.com/playlist?list=PLehXSATXjcQHj8bPSf0uZuQBoxJ7a7ag7" target="_blank" rel="noopener noreferrer">
            <PlayIcon>
              <FontAwesomeIcon icon={faPlay} />
            </PlayIcon>
            <ShowTitle>AWS Cloud Operations Show</ShowTitle>
            <ShowDescription>
              Join me for the AWS Cloud Operations Show where we dive deep into best practices, new features, and expert tips for managing and optimizing your AWS infrastructure.
            </ShowDescription>
            <ShowMeta>Bi-weekly livestream · 25,000+ views · Hosted by Imaya Kumar Jagannathan &amp; Team</ShowMeta>
          </ShowCard>

          <SectionDivider />

          <SectionLabel>Global Conferences</SectionLabel>
          <Subtitle>Speaking Engagements</Subtitle>

          <CardGrid>
            <ActivityCard href="https://www.linkedin.com/posts/imaya_observability-awssummit-aws-activity-7479163067075964929-xhxc" tint={TINTS.speaking}>
              <CardTitle>Intelligent Observability: From Complexity to Clarity</CardTitle>
              <CardMeta>AWS Summit 2026</CardMeta>
              <CardMeta $color="#FF9F0A" $bold>Washington, D.C.</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=Z-eo1FMhksg" tint={TINTS.speaking}>
              <CardTitle>Behind the scenes: How AWS drives operational excellence &amp; reliability</CardTitle>
              <CardMeta>AWS re:Invent 2025</CardMeta>
              <CardMeta $color="#FF9F0A" $bold>Las Vegas, NV</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=2h1oaiyQ-oU" tint={TINTS.speaking}>
              <CardTitle>Best practices for end-to-end digital experience monitoring</CardTitle>
              <CardMeta>AWS re:Invent 2024</CardMeta>
              <CardMeta $color="#FF9F0A" $bold>Las Vegas, NV</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=ziyTvW_jkxI" tint={TINTS.speaking}>
              <CardTitle>Operating with AWS open source observability</CardTitle>
              <CardMeta>AWS re:Invent 2023</CardMeta>
              <CardMeta $color="#FF9F0A" $bold>Las Vegas, NV</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://www.linkedin.com/posts/imaya_fidelity-aws-observability-activity-7090013116192751616-NecF" tint={TINTS.speaking}>
              <CardTitle>Fidelity's observability platform for telemetry</CardTitle>
              <CardMeta>AWS Summit 2023</CardMeta>
              <CardMeta $color="#FF9F0A" $bold>New York</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://youtu.be/pVTjCTXwk2I?t=6122" tint={TINTS.speaking}>
              <CardTitle>Monitoring Amazon EMR on EKS workloads using Amazon Managed Service for Prometheus</CardTitle>
              <CardMeta>AWS Summit 2023</CardMeta>
              <CardMeta $color="#FF9F0A" $bold>Washington, D.C.</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://youtu.be/LGD52z0LxAA?t=18048" tint={TINTS.speaking}>
              <CardTitle>Operating Open Telemetry Collector for Scale and Resiliency</CardTitle>
              <CardMeta>KubeCon 2023</CardMeta>
              <CardMeta $color="#FF9F0A" $bold>Amsterdam, Netherlands</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=2IJPpdp9xU0&t=591s&pp=ygUYYXdzIHJlaW52ZW50IGltYXlhIGt1bWFy" tint={TINTS.speaking}>
              <CardTitle>Observability the Open Source Way</CardTitle>
              <CardMeta>AWS re:Invent 2022</CardMeta>
              <CardMeta $color="#FF9F0A" $bold>Las Vegas, NV</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=or7uFFyHIX0" tint={TINTS.speaking}>
              <CardTitle>Full-stack observability and application monitoring with AWS</CardTitle>
              <CardMeta>AWS Summit 2022</CardMeta>
              <CardMeta $color="#FF9F0A" $bold>San Francisco, CA</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=GSHtAn5pTO8" tint={TINTS.speaking}>
              <CardTitle>Implementing observability for .NET apps on AWS</CardTitle>
              <CardMeta>AWS re:Invent 2021</CardMeta>
              <CardMeta $color="#FF9F0A" $bold>Las Vegas, NV</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=MZ-4HzOC_ac&t=25191s" tint={TINTS.speaking}>
              <CardTitle>Launching Amazon Managed Service for Prometheus</CardTitle>
              <CardMeta>KubeCon EU 2021</CardMeta>
              <CardMeta $color="#FF9F0A" $bold>Virtual</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=iyHzC6DhRVw&t=1618s" tint={TINTS.speaking}>
              <CardTitle>Observability the Open Source Way</CardTitle>
              <CardMeta>AWS re:Invent 2021</CardMeta>
              <CardMeta $color="#FF9F0A" $bold>Las Vegas, NV</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=_d_9xCfVBTM" tint={TINTS.speaking}>
              <CardTitle>Increase availability with AWS observability solutions</CardTitle>
              <CardMeta>AWS re:Invent 2020</CardMeta>
              <CardMeta $color="#FF9F0A" $bold>Las Vegas, NV</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://d1.awsstatic.com/events/reinvent/2019/REPEAT_3_Monitoring_modern_apps_Containers,_microservices,_and_more_MGT308-R3.pdf" tint={TINTS.speaking}>
              <CardTitle>Monitoring modern apps: Containers, microservices, and more</CardTitle>
              <CardMeta>AWS re:Invent 2019</CardMeta>
              <CardMeta $color="#FF9F0A" $bold>Las Vegas, NV</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=75p2ete1Cqo" tint={TINTS.speaking}>
              <CardTitle>Thomson Reuters: How It Hosted NET App on ECS Using Windows Containers</CardTitle>
              <CardMeta>AWS re:Invent 2018</CardMeta>
              <CardMeta $color="#FF9F0A" $bold>Las Vegas, NV</CardMeta>
            </ActivityCard>
          </CardGrid>

          <SectionDivider />

          <SectionLabel>Webinars &amp; Online Events</SectionLabel>
          <Subtitle>Online Technical Sessions</Subtitle>

          <CardGrid>
            <ActivityCard href="https://www.youtube.com/watch?v=F6V4vscvOeY&t=114s" tint={TINTS.session}>
              <CardTitle>CDK Observability Accelerator Deep Dive</CardTitle>
              <CardMeta $color="#AF52DE">Containers from the Couch 2023</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=gTXACKl4GiI" tint={TINTS.session}>
              <CardTitle>AWS Observability and Nobl9: A Journey to Optimize the Metrics Stack</CardTitle>
              <CardMeta $color="#AF52DE">Nobl9 Webinar</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://youtu.be/7jMtbCDOIqw?t=854" tint={TINTS.session}>
              <CardTitle>Launching EKS Observability Accelerator</CardTitle>
              <CardMeta $color="#AF52DE">Containers from the Couch 2022</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=FXBZUtrld3k&t=1285s" tint={TINTS.session}>
              <CardTitle>Accelerating Adoption of AWS Open-Source Observability Services</CardTitle>
              <CardMeta $color="#AF52DE">AWS Online Tech Talks 2022</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=YlupF_OAGIg" tint={TINTS.session}>
              <CardTitle>Implementing Observability with Amazon Managed Open Source Services</CardTitle>
              <CardMeta $color="#AF52DE">AWS Online Tech Talk 2021</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://youtu.be/KZVemZLExnw?t=1050" tint={TINTS.session}>
              <CardTitle>Launching Prometheus metrics support for Container Insights</CardTitle>
              <CardMeta $color="#AF52DE">Containers from the Couch 2021</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=Bh71xBQe92I&t=1575s" tint={TINTS.session}>
              <CardTitle>Monitoring container workloads with Amazon Managed Service for Prometheus and Grafana</CardTitle>
              <CardMeta $color="#AF52DE">Containers from the Couch 2021</CardMeta>
            </ActivityCard>
          </CardGrid>
        </>
      )}

      {/* ── Content & Publications tab ── */}
      {activeTab === 'content' && (
        <>
          <SectionLabel>Developer Content</SectionLabel>
          <Subtitle>.NET Development on AWS - Videos</Subtitle>

          <CardGrid>
            <ActivityCard href="https://www.youtube.com/watch?v=EF1NES9BX8c" tint={TINTS.dotnet}>
              <CardTitle>Using AWS Lambda Layers in .NET</CardTitle>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=-6k-TFV3M8o" tint={TINTS.dotnet}>
              <CardTitle>.NET, IoT, and Lambda</CardTitle>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=yBmxRdB--4Q" tint={TINTS.dotnet}>
              <CardTitle>Amazon Translate Service through .NET</CardTitle>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=Q1RWpB2juKI" tint={TINTS.dotnet}>
              <CardTitle>Perform Sentiment Analysis on a Text</CardTitle>
            </ActivityCard>
          </CardGrid>

          <SectionDivider />

          <SectionLabel>Editorial &amp; Press</SectionLabel>
          <Subtitle>Publications and General Public Conferences</Subtitle>

          <ArticleGrid>
            <ActivityCard href="https://thenewstack.io/no-more-fomo-efficiency-in-slo-driven-monitoring/" tint={TINTS.publication}>
              <CardTitle>SLO driven monitoring</CardTitle>
              <CardMeta $color="#0071E3">The NewStack</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://www.dataversity.net/observability-maturity-model-a-framework-to-enhance-monitoring-and-observability-practices/" tint={TINTS.publication}>
              <CardTitle>Observability Maturity Model: A Framework to Enhance Monitoring and Observability Practices</CardTitle>
              <CardMeta $color="#0071E3">Dataversity</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://techstrong.tv/videos/interviews/sloconf-kit-merker-nobl9" tint={TINTS.publication}>
              <CardTitle>Panel discussion on SLO monitoring</CardTitle>
              <CardMeta $color="#0071E3">Techstrong.tv</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://www.youtube.com/watch?v=Yq3A85qHtnc" tint={TINTS.publication}>
              <CardTitle>FOMO vs SLO driven monitoring</CardTitle>
              <CardMeta $color="#0071E3">SLO Conf</CardMeta>
            </ActivityCard>

            <ActivityCard href="https://hopin.com/events/developerweek-global-cloud-2021#speakers" tint={TINTS.publication}>
              <CardTitle>Observability in the Cloud</CardTitle>
              <CardMeta $color="#0071E3">Developerweek conference</CardMeta>
            </ActivityCard>
          </ArticleGrid>
        </>
      )}

      {/* ── Recognition & Career tab ── */}
      {activeTab === 'recognition' && (
        <>
          <SectionLabel>Honors</SectionLabel>
          <Subtitle>Recognitions and Awards</Subtitle>

          <CardGrid>
            <ActivityCard tint={TINTS.award}>
              <CardTitle>AWS "Inspiration Award"</CardTitle>
              <CardDescription>For mentoring worldwide technical architects to achieve exceptional results</CardDescription>
            </ActivityCard>

            <ActivityCard tint={TINTS.award}>
              <CardTitle>"Top Resolver" of Specialist Requests</CardTitle>
              <CardDescription>Awarded at AWS in the years 2021 and 2022</CardDescription>
            </ActivityCard>

            <ActivityCard tint={TINTS.award}>
              <CardTitle>25+ Accolades from AWS Leaders</CardTitle>
              <CardDescription>Recognized for contributions to key projects by senior technical employees and leaders</CardDescription>
            </ActivityCard>

            <ActivityCard tint={TINTS.award}>
              <CardTitle>Accolades from Bill Gates</CardTitle>
              <CardDescription>For my "Think Week" innovation paper about "Smart Advertisements in Television"</CardDescription>
            </ActivityCard>

            <ActivityCard tint={TINTS.award}>
              <CardTitle>Award from Steve Ballmer</CardTitle>
              <CardDescription>Received from Steve Ballmer for developing innovative tools in the largest Exchange migration project at Microsoft</CardDescription>
            </ActivityCard>

            <ActivityCard tint={TINTS.award}>
              <CardTitle>CPE Champion Award</CardTitle>
              <CardDescription>Awarded twice for high Customer Satisfaction at Microsoft</CardDescription>
            </ActivityCard>
          </CardGrid>

          <SectionDivider />

          <SectionLabel>Engineering Leadership · 2015–2018</SectionLabel>
          <Subtitle>Bisk Education</Subtitle>

          <MilestoneGrid>
            <MilestoneCard $accent="rgba(52, 199, 89, 0.05)">
              <MilestoneTitle>Enterprise Architecture Strategy</MilestoneTitle>
              <MilestoneDesc>Reporting to the CTO, defined and executed the enterprise architecture strategy — standardizing tool selection, consolidating the technology footprint, and reducing operational complexity across the organization.</MilestoneDesc>
            </MilestoneCard>

            <MilestoneCard $accent="rgba(52, 199, 89, 0.05)">
              <MilestoneTitle>Salesforce Organization-Wide Rollout</MilestoneTitle>
              <MilestoneDesc>Led technical evaluation and org-wide implementation of Salesforce, establishing data-driven processes for pipeline management and executive reporting up to the CEO.</MilestoneDesc>
            </MilestoneCard>

            <MilestoneCard $accent="rgba(52, 199, 89, 0.05)">
              <MilestoneTitle>Internet-Scale Cloud Platform Design</MilestoneTitle>
              <MilestoneDesc>Led architects in designing AWS-based internet-scale systems for student application processing, payments, online ordering, and university partner integrations — including a cloud-based ESB and API Management layer.</MilestoneDesc>
            </MilestoneCard>

            <MilestoneCard $accent="rgba(52, 199, 89, 0.05)">
              <MilestoneTitle>Agile &amp; DevOps Transformation</MilestoneTitle>
              <MilestoneDesc>Led a full engineering culture shift from waterfall to Agile/DevOps — introducing CI/CD pipelines, code reviews, and sprint retrospectives. Mentored junior engineers into senior roles, building a self-sustaining engineering culture that outlasted individual contributors.</MilestoneDesc>
            </MilestoneCard>
          </MilestoneGrid>

          <SectionDivider />

          <SectionLabel>Technology Programs · 2006–2014</SectionLabel>
          <Subtitle>Microsoft</Subtitle>

          <MilestoneGrid>
            <MilestoneCard $accent="rgba(0, 120, 212, 0.05)">
              <MilestoneMetric $color="#0078D4">$2–3B</MilestoneMetric>
              <MilestoneTitle>Global Technology Adoption Programs</MilestoneTitle>
              <MilestoneDesc>Program managed 3 global TAPs for pre-release enterprise products — Windows Server, SQL Server, and SharePoint — across 15 countries and 150+ enterprise customers. Coordinated cross-functional teams of 18–20 spanning engineering, marketing, and GTM, influencing $2–3B in product revenue.</MilestoneDesc>
            </MilestoneCard>

            <MilestoneCard $accent="rgba(0, 120, 212, 0.05)">
              <MilestoneMetric $color="#0078D4">650K</MilestoneMetric>
              <MilestoneTitle>Largest Exchange Migration in Microsoft History</MilestoneTitle>
              <MilestoneDesc>Lead developer for a 650,000-mailbox Exchange Online migration over 18 months. Built migration tooling so critical that the third-party vendor incorporated it into their official product. Received the "Big Team" Global Award from Steve Ballmer.</MilestoneDesc>
            </MilestoneCard>

            <MilestoneCard $accent="rgba(0, 120, 212, 0.05)">
              <MilestoneMetric $color="#0078D4">500K+</MilestoneMetric>
              <MilestoneTitle>AT&amp;T Mediaroom — Live &amp; VoD Television</MilestoneTitle>
              <MilestoneDesc>Designed deployment architecture for Microsoft Mediaroom across 6 major US cities, enabling AT&amp;T television services for 500,000+ subscribers. Built automation tooling that reduced deployment errors by 45% and accelerated timelines by 60%.</MilestoneDesc>
            </MilestoneCard>

            <MilestoneCard $accent="rgba(0, 120, 212, 0.05)">
              <MilestoneMetric $color="#0078D4">Think Week</MilestoneMetric>
              <MilestoneTitle>Bill Gates Innovation Recognition</MilestoneTitle>
              <MilestoneDesc>Selected from thousands of Microsoft employees for Bill Gates' annual "Think Week" program. Proposed "Smart Advertisements in Television" — context-aware interactive ads on Mediaroom predating what is now commonplace on streaming platforms. Personally recognized by Bill Gates.</MilestoneDesc>
            </MilestoneCard>
          </MilestoneGrid>
        </>
      )}

      <SectionDivider />

      {/* ── Press mentions — always visible regardless of active tab ── */}
      <CollapsibleSection>
        <Subtitle onClick={toggleCollapse} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Mentions on 3rd Party Websites
          <span style={{ fontSize: '0.85rem', color: '#86868B', fontWeight: 400 }}>{isCollapsed ? '▲' : '▼'}</span>
        </Subtitle>
        <CollapsibleContent isOpen={isCollapsed}>
          <LinkList>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-newsletter-171-4o49" target="_blank" rel="noopener noreferrer">AWS Open Source Newsletter #171</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-news-and-updates-111-1dj3" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #111</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-news-and-updates-no-20-hd3" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #20</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-newsletter-146-26bh" target="_blank" rel="noopener noreferrer">AWS Open Source Newsletter #146</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-newsletter-133-ocf" target="_blank" rel="noopener noreferrer">AWS Open Source Newsletter #133</a></LinkItem>
            <LinkItem><a href="https://dev.to/094459/aws-open-source-news-and-updates-127-56n9" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #127</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-news-and-updates-94-3o90" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #94</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-news-and-updates-84-4c4e" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #84</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-news-and-updates-73-1fh7" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #73</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-news-and-updates-72-lj9" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #72</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-news-and-updates-70-5bj2" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #70</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-news-and-updates-65-27bk" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #65</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-news-and-updates-62-ib9" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #62</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-news-and-updates-58-p8g" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #58</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-news-and-updates-no-49-514c" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #49</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-news-and-updates-no-40-4ea" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #40</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-news-and-updates-no-39-1hp3" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #39</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-news-and-updates-80-477e" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #80</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-news-and-updates-113-16a4" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #113</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-news-and-updates-55-21eh" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #55</a></LinkItem>
            <LinkItem><a href="https://dev.to/aws/aws-open-source-news-and-updates-5145" target="_blank" rel="noopener noreferrer">AWS Open Source News and Updates #5145</a></LinkItem>
            <LinkItem><a href="https://o11y.news/2022-05-09/" target="_blank" rel="noopener noreferrer">Observability News - May 9, 2022</a></LinkItem>
            <LinkItem><a href="https://o11y.news/2021-03-01/#amg-using-identity-providers" target="_blank" rel="noopener noreferrer">Observability News - March 1, 2021</a></LinkItem>
            <LinkItem><a href="https://o11y.news/2022-05-23/#eks-observability" target="_blank" rel="noopener noreferrer">Observability News - May 23, 2022</a></LinkItem>
            <LinkItem><a href="https://o11y.news/2021-10-04/#managed-prometheus" target="_blank" rel="noopener noreferrer">Observability News - October 4, 2021</a></LinkItem>
            <LinkItem><a href="https://o11y.news/2022-12-26/#opentelemetry-for-eks" target="_blank" rel="noopener noreferrer">Observability News - December 26, 2022</a></LinkItem>
            <LinkItem><a href="https://o11y.news/2021-04-26/#aws-observability-workshop" target="_blank" rel="noopener noreferrer">Observability News - April 26, 2021</a></LinkItem>
            <LinkItem><a href="https://o11y.news/2021-04-19/#managed-grafana-goes-public" target="_blank" rel="noopener noreferrer">Observability News - April 19, 2021</a></LinkItem>
            <LinkItem><a href="https://o11y.news/2022-07-18/#slo-monitoring" target="_blank" rel="noopener noreferrer">Observability News - July 18, 2022</a></LinkItem>
            <LinkItem><a href="https://o11y.news/2021-12-20/#new-managed-grafana-features" target="_blank" rel="noopener noreferrer">Observability News - December 20, 2021</a></LinkItem>
            <LinkItem><a href="https://o11y.news/2021-09-06/#amazon-managed-grafana-is-ga" target="_blank" rel="noopener noreferrer">Observability News - September 6, 2021</a></LinkItem>
            <LinkItem><a href="https://o11y.news/2021-12-27/#open-source-o11y" target="_blank" rel="noopener noreferrer">Observability News - December 27, 2021</a></LinkItem>
            <LinkItem><a href="https://o11y.news/2021-06-21/#on-prem-metrics-for-amp" target="_blank" rel="noopener noreferrer">Observability News - June 21, 2021</a></LinkItem>
            <LinkItem><a href="https://o11y.news/2021-06-14/#amg-for-hybrid-envs" target="_blank" rel="noopener noreferrer">Observability News - June 14, 2021</a></LinkItem>
            <LinkItem><a href="https://o11y.news/2021-05-24/#open-source-o11y-at-aws" target="_blank" rel="noopener noreferrer">Observability News - May 24, 2021</a></LinkItem>
          </LinkList>
        </CollapsibleContent>
      </CollapsibleSection>
    </Container>
  );
};

export default Activities;
