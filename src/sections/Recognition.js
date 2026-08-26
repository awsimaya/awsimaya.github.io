import React from 'react';
import styled from 'styled-components';
import SectionHeading from '../components/SectionHeading';

const Section = styled.section`
  padding: 2rem 2rem 4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 780px) {
    padding: 2rem 1.25rem 3rem;
  }
`;

const Inner = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const SubLabel = styled.p`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grayLine};
  margin: 2rem 0 1rem 0;

  &:first-child {
    margin-top: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.card};
  padding: 1.1rem 1.25rem;
`;

const CardTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
  margin: 0 0 0.4rem 0;
  line-height: 1.4;
`;

const CardDescription = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
  line-height: 1.5;
`;

const awards = [
  { title: 'AWS "Inspiration Award"', description: 'For mentoring worldwide technical architects to achieve exceptional results' },
  { title: '"Top Resolver" of Specialist Requests', description: 'Awarded at AWS in the years 2021 and 2022' },
  { title: '25+ Accolades from AWS Leaders', description: 'Recognized for contributions to key projects by senior technical employees and leaders' },
  { title: 'Accolades from Bill Gates', description: 'For my "Think Week" innovation paper about "Smart Advertisements in Television"' },
  { title: 'Award from Steve Ballmer', description: 'Received from Steve Ballmer for developing innovative tools in the largest Exchange migration project at Microsoft' },
  { title: 'CPE Champion Award', description: 'Awarded twice for high Customer Satisfaction at Microsoft' },
];

const biskMilestones = [
  { title: 'Enterprise Architecture Strategy', description: 'Reporting to the CTO, defined and executed the enterprise architecture strategy — standardizing tool selection, consolidating the technology footprint, and reducing operational complexity across the organization.' },
  { title: 'Salesforce Organization-Wide Rollout', description: 'Led technical evaluation and org-wide implementation of Salesforce, establishing data-driven processes for pipeline management and executive reporting up to the CEO.' },
  { title: 'Internet-Scale Cloud Platform Design', description: 'Led architects in designing AWS-based internet-scale systems for student application processing, payments, online ordering, and university partner integrations — including a cloud-based ESB and API Management layer.' },
  { title: 'Agile & DevOps Transformation', description: 'Led a full engineering culture shift from waterfall to Agile/DevOps — introducing CI/CD pipelines, code reviews, and sprint retrospectives. Mentored junior engineers into senior roles, building a self-sustaining engineering culture that outlasted individual contributors.' },
];

const msftMilestones = [
  { title: 'Global Technology Adoption Programs', description: 'Program managed 3 global TAPs for pre-release enterprise products — Windows Server, SQL Server, and SharePoint — across 15 countries and 150+ enterprise customers. Coordinated cross-functional teams of 18–20, influencing $2–3B in product revenue.' },
  { title: 'Largest Exchange Migration in Microsoft History', description: 'Lead developer for a 650,000-mailbox Exchange Online migration over 18 months. Built migration tooling so critical that the third-party vendor incorporated it into their official product. Received the "Big Team" Global Award from Steve Ballmer.' },
  { title: 'AT&T Mediaroom — Live & VoD Television', description: 'Designed deployment architecture for Microsoft Mediaroom across 6 major US cities, enabling AT&T television services for 500,000+ subscribers. Built automation tooling that reduced deployment errors by 45% and accelerated timelines by 60%.' },
  { title: 'Bill Gates Innovation Recognition', description: 'Selected from thousands of Microsoft employees for Bill Gates\' annual "Think Week" program. Proposed "Smart Advertisements in Television" — context-aware interactive ads on Mediaroom predating what is now commonplace on streaming platforms. Personally recognized by Bill Gates.' },
];

const Recognition = () => (
  <Section id="recognition">
    <Inner>
      <SectionHeading eyebrow="Honors & Career" title="Recognition & Milestones" />

      <SubLabel>Awards &amp; Recognition</SubLabel>
      <Grid>
        {awards.map((a) => (
          <Card key={a.title}>
            <CardTitle>{a.title}</CardTitle>
            <CardDescription>{a.description}</CardDescription>
          </Card>
        ))}
      </Grid>

      <SubLabel>Bisk Education · Engineering Leadership · 2015–2018</SubLabel>
      <Grid>
        {biskMilestones.map((m) => (
          <Card key={m.title}>
            <CardTitle>{m.title}</CardTitle>
            <CardDescription>{m.description}</CardDescription>
          </Card>
        ))}
      </Grid>

      <SubLabel>Microsoft · Technology Programs · 2006–2014</SubLabel>
      <Grid>
        {msftMilestones.map((m) => (
          <Card key={m.title}>
            <CardTitle>{m.title}</CardTitle>
            <CardDescription>{m.description}</CardDescription>
          </Card>
        ))}
      </Grid>
    </Inner>
  </Section>
);

export default Recognition;
