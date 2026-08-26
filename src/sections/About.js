import React from 'react';
import styled from 'styled-components';
import SectionHeading from '../components/SectionHeading';

const Section = styled.section`
  padding: 2rem 2rem 3.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 780px) {
    padding: 2rem 1.25rem 2.5rem;
  }
`;

const Inner = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Group = styled.div`
  margin-top: 2rem;

  &:first-of-type {
    margin-top: 1.5rem;
  }
`;

const GroupLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grayLine};
  margin: 0 0 0.85rem 0;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols || 4}, 1fr);
  gap: 1px;
  background: ${({ theme }) => theme.colors.border};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.card};
  overflow: hidden;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCell = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 1.1rem 1rem;
  text-align: center;
`;

const StatValue = styled.p`
  font-size: 1.35rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.ink};
  letter-spacing: -0.03em;
  margin: 0 0 0.3rem 0;
  line-height: 1;
`;

const StatLabel = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 500;
  margin: 0;
  line-height: 1.35;
`;

const scale = [
  { value: '22+', label: 'Years of Technology Leadership' },
  { value: '$4.2B', label: 'AWS Business Supported' },
  { value: '60K+', label: 'Workshop Users · 5M+ Page Views' },
  { value: '30K+', label: 'Customer Deployments' },
];

const businessImpact = [
  { value: '12', label: 'AWS Managed Service Launches' },
  { value: '$700M+', label: 'Enterprise Revenue Influenced' },
  { value: '70+', label: 'Published AWS Articles' },
  { value: '250K+', label: 'Annual Best Practices Guide Views' },
];

const community = [
  { value: '1,500+', label: 'Technical Professionals in Field Community' },
  { value: '25+', label: 'AWS Senior Leader Accolades' },
  { value: 'Author', label: 'Building Resilient Architectures on AWS' },
];

const About = () => (
  <Section id="about">
    <Inner>
      <SectionHeading
        eyebrow="About"
        title="Building at Scale"
        lead="Leading a worldwide technical organization at AWS supporting a $4.2B Cloud Operations business — designing platforms and tooling adopted by 60,000+ users and deployed in 30,000+ customer environments. Building and mentoring a Technical Field Community of 1,500+ technical professionals across the globe."
      />

      <Group>
        <GroupLabel>Scale</GroupLabel>
        <StatGrid>
          {scale.map((s) => (
            <StatCell key={s.label}>
              <StatValue>{s.value}</StatValue>
              <StatLabel>{s.label}</StatLabel>
            </StatCell>
          ))}
        </StatGrid>
      </Group>

      <Group>
        <GroupLabel>Business Impact</GroupLabel>
        <StatGrid>
          {businessImpact.map((s) => (
            <StatCell key={s.label}>
              <StatValue>{s.value}</StatValue>
              <StatLabel>{s.label}</StatLabel>
            </StatCell>
          ))}
        </StatGrid>
      </Group>

      <Group>
        <GroupLabel>Community &amp; Recognition</GroupLabel>
        <StatGrid $cols={3}>
          {community.map((s) => (
            <StatCell key={s.label}>
              <StatValue>{s.value}</StatValue>
              <StatLabel>{s.label}</StatLabel>
            </StatCell>
          ))}
        </StatGrid>
      </Group>
    </Inner>
  </Section>
);

export default About;
