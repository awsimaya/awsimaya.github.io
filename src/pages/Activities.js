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

/* ─── Speaking Engagements ─── */

const SpeakingCard = styled.a`
  display: block;
  background: linear-gradient(145deg, #ffffff 60%, rgba(255, 159, 10, 0.04) 100%);
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

const EventTitle = styled.h3`
  font-size: 0.9rem;
  margin: 0 0 0.55rem 0;
  font-weight: 600;
  color: #1D1D1F;
  line-height: 1.4;
  letter-spacing: -0.01em;
`;

const EventDate = styled.p`
  font-size: 0.82rem;
  color: #6E6E73;
  margin: 0 0 0.3rem 0;
  font-weight: 500;
`;

const EventLocation = styled.p`
  font-size: 0.8rem;
  color: #FF9F0A;
  font-weight: 600;
  margin: 0;
`;

/* ─── Online Technical Sessions ─── */

const TechnicalSessionCard = styled.a`
  display: block;
  background: linear-gradient(145deg, #ffffff 60%, rgba(175, 82, 222, 0.04) 100%);
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

const TechnicalSessionTitle = styled.h3`
  font-size: 0.9rem;
  margin: 0 0 0.55rem 0;
  font-weight: 600;
  color: #1D1D1F;
  line-height: 1.4;
  letter-spacing: -0.01em;
`;

const TechnicalSessionDate = styled.p`
  font-size: 0.82rem;
  color: #AF52DE;
  font-weight: 500;
  margin: 0;
`;

/* ─── .NET Cards ─── */

const DotNetCard = styled.a`
  display: block;
  background: linear-gradient(145deg, #ffffff 60%, rgba(52, 199, 89, 0.04) 100%);
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

const DotNetCardTitle = styled.h3`
  font-size: 0.9rem;
  margin: 0;
  font-weight: 600;
  color: #1D1D1F;
  line-height: 1.4;
  letter-spacing: -0.01em;
`;

/* ─── Publications ─── */

const PublicationCard = styled.a`
  display: block;
  background: linear-gradient(145deg, #ffffff 60%, rgba(0, 113, 227, 0.04) 100%);
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

const PublicationTitle = styled.h3`
  font-size: 0.9rem;
  margin: 0 0 0.55rem 0;
  font-weight: 600;
  color: #1D1D1F;
  line-height: 1.4;
  letter-spacing: -0.01em;
`;

const PublicationSource = styled.p`
  font-size: 0.82rem;
  color: #0071E3;
  font-weight: 500;
  margin: 0;
`;

/* ─── Awards ─── */

const AwardCard = styled.a`
  display: block;
  background: linear-gradient(145deg, #ffffff 60%, rgba(255, 214, 10, 0.05) 100%);
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

const AwardTitle = styled.h3`
  font-size: 0.9rem;
  margin: 0 0 0.55rem 0;
  font-weight: 600;
  color: #1D1D1F;
  line-height: 1.4;
  letter-spacing: -0.01em;
`;

const AwardDescription = styled.p`
  font-size: 0.82rem;
  color: #6E6E73;
  font-weight: 400;
  margin: 0;
  line-height: 1.5;
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
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Container>

      {/* ── Intro Hero ── */}
      <IntroBlock>
        <IntroEyebrow>Global Technology Leadership · AWS</IntroEyebrow>
        <IntroHeading>Building the Future of<br />Cloud Observability</IntroHeading>
        <IntroLead>
          Leading a global team of Specialist Solutions Architects at AWS, I build
          and mentor worldwide technical leaders who deliver enterprise-grade architectural
          guidance — enabling millions of users to optimize cloud operations at scale.
        </IntroLead>
      </IntroBlock>

      {/* ── Impact Stats ── */}
      <StatsRow>
        <StatItem>
          <StatNum>700K+</StatNum>
          <StatLabel>Workshop users per year</StatLabel>
        </StatItem>
        <StatItem>
          <StatNum>70+</StatNum>
          <StatLabel>Published AWS articles</StatLabel>
        </StatItem>
        <StatItem>
          <StatNum>Global</StatNum>
          <StatLabel>Team of SA leaders</StatLabel>
        </StatItem>
        <StatItem>
          <StatNum>25+</StatNum>
          <StatLabel>AWS leader accolades</StatLabel>
        </StatItem>
      </StatsRow>

      {/* ── Flagship Initiatives ── */}
      <InitiativesBlock>
        <InitiativesEyebrow>Open Source &amp; Community</InitiativesEyebrow>
        <InitiativesTitle>Flagship Initiatives</InitiativesTitle>
        <InitiativeGrid>
          <InitiativeCard href="https://observability.workshop.aws/" target="_blank" rel="noopener noreferrer">
            <InitiativeText>
              <InitiativeCardTitle>AWS Observability Workshop</InitiativeCardTitle>
              <InitiativeCardMeta>700,000+ learners annually</InitiativeCardMeta>
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
              <InitiativeCardMeta>Terraform &amp; CDK · Amazon EKS native</InitiativeCardMeta>
            </InitiativeText>
            <InitiativeArrow>›</InitiativeArrow>
          </InitiativeCard>
        </InitiativeGrid>
      </InitiativesBlock>

      <SectionDivider />

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
        <ShowMeta>Livestream every other Thursday at 2:00 PM ET · Hosted by Imaya Kumar Jagannathan &amp; Team</ShowMeta>
      </ShowCard>

      <SectionDivider />

      <SectionLabel>Global Conferences</SectionLabel>
      <Subtitle>Speaking Engagements</Subtitle>

      {/* First Row */}
      <CardGrid>
        <SpeakingCard href="https://www.youtube.com/watch?v=Z-eo1FMhksg" target="_blank" rel="noopener noreferrer">
          <EventTitle>Behind the scenes: How AWS drives operational excellence &amp; reliability</EventTitle>
          <EventDate>AWS re:Invent 2025</EventDate>
          <EventLocation>Las Vegas, NV</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://www.youtube.com/watch?v=2h1oaiyQ-oU" target="_blank" rel="noopener noreferrer">
          <EventTitle>Best practices for end-to-end digital experience monitoring</EventTitle>
          <EventDate>AWS re:Invent 2024</EventDate>
          <EventLocation>Las Vegas, NV</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://www.youtube.com/watch?v=ziyTvW_jkxI" target="_blank" rel="noopener noreferrer">
          <EventTitle>Operating with AWS open source observability</EventTitle>
          <EventDate>AWS re:Invent 2023</EventDate>
          <EventLocation>Las Vegas, NV</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://www.linkedin.com/posts/imaya_fidelity-aws-observability-activity-7090013116192751616-NecF" target="_blank" rel="noopener noreferrer">
          <EventTitle>Fidelity's observability platform for telemetry</EventTitle>
          <EventDate>AWS Summit 2023</EventDate>
          <EventLocation>New York</EventLocation>
        </SpeakingCard>
      </CardGrid>

      {/* Second Row */}
      <CardGrid>
        <SpeakingCard href="https://youtu.be/pVTjCTXwk2I?t=6122" target="_blank" rel="noopener noreferrer">
          <EventTitle>Monitoring Amazon EMR on EKS workloads using Amazon Managed Service for Prometheus</EventTitle>
          <EventDate>AWS Summit 2023</EventDate>
          <EventLocation>Washington DC</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://youtu.be/LGD52z0LxAA?t=18048" target="_blank" rel="noopener noreferrer">
          <EventTitle>Operating Open Telemetry Collector for Scale and Resiliency</EventTitle>
          <EventDate>KubeCon 2023</EventDate>
          <EventLocation>Amsterdam, Netherlands</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://www.youtube.com/watch?v=2IJPpdp9xU0&t=591s&pp=ygUYYXdzIHJlaW52ZW50IGltYXlhIGt1bWFy" target="_blank" rel="noopener noreferrer">
          <EventTitle>Observability the Open Source Way</EventTitle>
          <EventDate>AWS re:Invent 2022</EventDate>
          <EventLocation>Las Vegas, NV</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://www.youtube.com/watch?v=or7uFFyHIX0" target="_blank" rel="noopener noreferrer">
          <EventTitle>Full-stack observability and application monitoring with AWS</EventTitle>
          <EventDate>AWS Summit 2022</EventDate>
          <EventLocation>San Francisco, CA</EventLocation>
        </SpeakingCard>
      </CardGrid>

      {/* Third Row */}
      <CardGrid>
        <SpeakingCard href="https://www.youtube.com/watch?v=GSHtAn5pTO8" target="_blank" rel="noopener noreferrer">
          <EventTitle>Implementing observability for .NET apps on AWS</EventTitle>
          <EventDate>AWS re:Invent 2021</EventDate>
          <EventLocation>Las Vegas, NV</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://www.youtube.com/watch?v=MZ-4HzOC_ac&t=25191s" target="_blank" rel="noopener noreferrer">
          <EventTitle>Launching Amazon Managed Service for Prometheus</EventTitle>
          <EventDate>KubeCon EU 2021</EventDate>
          <EventLocation>Virtual</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://www.youtube.com/watch?v=iyHzC6DhRVw&t=1618s" target="_blank" rel="noopener noreferrer">
          <EventTitle>Observability the Open Source Way</EventTitle>
          <EventDate>AWS re:Invent 2021</EventDate>
          <EventLocation>Las Vegas, NV</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://www.youtube.com/watch?v=_d_9xCfVBTM" target="_blank" rel="noopener noreferrer">
          <EventTitle>Increase availability with AWS observability solutions</EventTitle>
          <EventDate>AWS re:Invent 2020</EventDate>
          <EventLocation>Las Vegas, NV</EventLocation>
        </SpeakingCard>
      </CardGrid>

      <CardGrid>
        <SpeakingCard href="https://d1.awsstatic.com/events/reinvent/2019/REPEAT_3_Monitoring_modern_apps_Containers,_microservices,_and_more_MGT308-R3.pdf" target="_blank" rel="noopener noreferrer">
          <EventTitle>Monitoring modern apps: Containers, microservices, and more</EventTitle>
          <EventDate>AWS re:Invent 2019</EventDate>
          <EventLocation>Las Vegas, NV</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://www.youtube.com/watch?v=75p2ete1Cqo" target="_blank" rel="noopener noreferrer">
          <EventTitle>Thomson Reuters: How It Hosted NET App on ECS Using Windows Containers</EventTitle>
          <EventDate>AWS re:Invent 2018</EventDate>
          <EventLocation>Las Vegas, NV</EventLocation>
        </SpeakingCard>
      </CardGrid>

      <SectionDivider />

      <SectionLabel>Webinars &amp; Online Events</SectionLabel>
      <Subtitle>Online Technical Sessions</Subtitle>

      {/* First Row */}
      <CardGrid>
        <TechnicalSessionCard href="https://www.youtube.com/watch?v=F6V4vscvOeY&t=114s" target="_blank" rel="noopener noreferrer">
          <TechnicalSessionTitle>CDK Observability Accelerator Deep Dive</TechnicalSessionTitle>
          <TechnicalSessionDate>Containers from the Couch 2023</TechnicalSessionDate>
        </TechnicalSessionCard>

        <TechnicalSessionCard href="https://www.youtube.com/watch?v=gTXACKl4GiI" target="_blank" rel="noopener noreferrer">
          <TechnicalSessionTitle>AWS Observability and Nobl9: A Journey to Optimize the Metrics Stack</TechnicalSessionTitle>
          <TechnicalSessionDate>Nobl9 Webinar</TechnicalSessionDate>
        </TechnicalSessionCard>

        <TechnicalSessionCard href="https://youtu.be/7jMtbCDOIqw?t=854" target="_blank" rel="noopener noreferrer">
          <TechnicalSessionTitle>Launching EKS Observability Accelerator</TechnicalSessionTitle>
          <TechnicalSessionDate>Containers from the Couch 2022</TechnicalSessionDate>
        </TechnicalSessionCard>

        <TechnicalSessionCard href="https://www.youtube.com/watch?v=FXBZUtrld3k&t=1285s" target="_blank" rel="noopener noreferrer">
          <TechnicalSessionTitle>Accelerating Adoption of AWS Open-Source Observability Services</TechnicalSessionTitle>
          <TechnicalSessionDate>AWS Online Tech Talks 2022</TechnicalSessionDate>
        </TechnicalSessionCard>
      </CardGrid>

      {/* Second Row */}
      <CardGrid>
        <TechnicalSessionCard href="https://www.youtube.com/watch?v=FXBZUtrld3k&t=1285s" target="_blank" rel="noopener noreferrer">
          <TechnicalSessionTitle>Accelerating Adoption of AWS Open-Source Observability Services</TechnicalSessionTitle>
          <TechnicalSessionDate>AWS Online Tech Talks 2022</TechnicalSessionDate>
        </TechnicalSessionCard>

        <TechnicalSessionCard href="https://www.youtube.com/watch?v=YlupF_OAGIg" target="_blank" rel="noopener noreferrer">
          <TechnicalSessionTitle>Implementing Observability with Amazon Managed Open Source Services</TechnicalSessionTitle>
          <TechnicalSessionDate>AWS Online Tech Talk 2021</TechnicalSessionDate>
        </TechnicalSessionCard>

        <TechnicalSessionCard href="https://youtu.be/KZVemZLExnw?t=1050" target="_blank" rel="noopener noreferrer">
          <TechnicalSessionTitle>Launching Prometheus metrics support for Container Insights</TechnicalSessionTitle>
          <TechnicalSessionDate>Containers from the Couch 2021</TechnicalSessionDate>
        </TechnicalSessionCard>

        <TechnicalSessionCard href="https://www.youtube.com/watch?v=Bh71xBQe92I&t=1575s" target="_blank" rel="noopener noreferrer">
          <TechnicalSessionTitle>Monitoring container workloads with Amazon Managed Service for Prometheus and Grafana</TechnicalSessionTitle>
          <TechnicalSessionDate>Containers from the Couch 2021</TechnicalSessionDate>
        </TechnicalSessionCard>
      </CardGrid>

      <SectionDivider />

      <SectionLabel>Developer Content</SectionLabel>
      <Subtitle>.NET Development on AWS - Videos</Subtitle>

      <CardGrid>
        <DotNetCard href="https://www.youtube.com/watch?v=EF1NES9BX8c" target="_blank" rel="noopener noreferrer">
          <DotNetCardTitle>Using AWS Lambda Layers in .NET</DotNetCardTitle>
        </DotNetCard>

        <DotNetCard href="https://www.youtube.com/watch?v=-6k-TFV3M8o" target="_blank" rel="noopener noreferrer">
          <DotNetCardTitle>.NET, IoT, and Lambda</DotNetCardTitle>
        </DotNetCard>

        <DotNetCard href="https://www.youtube.com/watch?v=yBmxRdB--4Q" target="_blank" rel="noopener noreferrer">
          <DotNetCardTitle>Amazon Translate Service through .NET</DotNetCardTitle>
        </DotNetCard>

        <DotNetCard href="https://www.youtube.com/watch?v=Q1RWpB2juKI" target="_blank" rel="noopener noreferrer">
          <DotNetCardTitle>Perform Sentiment Analysis on a Text</DotNetCardTitle>
        </DotNetCard>
      </CardGrid>

      <SectionDivider />

      <SectionLabel>Editorial &amp; Press</SectionLabel>
      <Subtitle>Publications and General Public Conferences</Subtitle>

      <ArticleGrid>
        <PublicationCard href="https://thenewstack.io/no-more-fomo-efficiency-in-slo-driven-monitoring/" target="_blank" rel="noopener noreferrer">
          <PublicationTitle>SLO driven monitoring</PublicationTitle>
          <PublicationSource>The NewStack</PublicationSource>
        </PublicationCard>

        <PublicationCard href="https://www.dataversity.net/observability-maturity-model-a-framework-to-enhance-monitoring-and-observability-practices/" target="_blank" rel="noopener noreferrer">
          <PublicationTitle>Observability Maturity Model: A Framework to Enhance Monitoring and Observability Practices</PublicationTitle>
          <PublicationSource>Dataversity</PublicationSource>
        </PublicationCard>

        <PublicationCard href="https://techstrong.tv/videos/interviews/sloconf-kit-merker-nobl9" target="_blank" rel="noopener noreferrer">
          <PublicationTitle>Panel discussion on SLO monitoring</PublicationTitle>
          <PublicationSource>Techstrong.tv</PublicationSource>
        </PublicationCard>

        <PublicationCard href="https://www.youtube.com/watch?v=Yq3A85qHtnc" target="_blank" rel="noopener noreferrer">
          <PublicationTitle>FOMO vs SLO driven monitoring</PublicationTitle>
          <PublicationSource>SLO Conf</PublicationSource>
        </PublicationCard>

        <PublicationCard href="https://hopin.com/events/developerweek-global-cloud-2021#speakers" target="_blank" rel="noopener noreferrer">
          <PublicationTitle>Observability in the Cloud</PublicationTitle>
          <PublicationSource>Developerweek conference</PublicationSource>
        </PublicationCard>
      </ArticleGrid>

      <SectionDivider />

      <SectionLabel>Honors</SectionLabel>
      <Subtitle>Recognitions and Awards</Subtitle>

      <CardGrid>
        <AwardCard>
          <AwardTitle>AWS "Inspiration Award"</AwardTitle>
          <AwardDescription>For mentoring worldwide technical architects to achieve exceptional results</AwardDescription>
        </AwardCard>

        <AwardCard>
          <AwardTitle>"Top Resolver" of Specialist Requests</AwardTitle>
          <AwardDescription>Awarded at AWS in the years 2021 and 2022</AwardDescription>
        </AwardCard>

        <AwardCard>
          <AwardTitle>25+ Accolades from AWS Leaders</AwardTitle>
          <AwardDescription>Recognized for contributions to key projects by senior technical employees and leaders</AwardDescription>
        </AwardCard>

        <AwardCard>
          <AwardTitle>Accolades from Bill Gates</AwardTitle>
          <AwardDescription>For my "Think Week" innovation paper about "Smart Advertisements in Television"</AwardDescription>
        </AwardCard>

        <AwardCard>
          <AwardTitle>Award from Steve Ballmer</AwardTitle>
          <AwardDescription>Received from Steve Ballmer for developing innovative tools in the largest Exchange migration project at Microsoft</AwardDescription>
        </AwardCard>

        <AwardCard>
          <AwardTitle>CPE Champion Award</AwardTitle>
          <AwardDescription>Awarded twice for high Customer Satisfaction at Microsoft</AwardDescription>
        </AwardCard>
      </CardGrid>

      <SectionDivider />

      {/* Collapsible Section */}
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
