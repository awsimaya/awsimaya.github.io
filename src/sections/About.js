import React from 'react';
import styled from 'styled-components';
import SectionHeading from '../components/SectionHeading';

const Section = styled.section`
  padding: 2.5rem 2rem 4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 780px) {
    padding: 2.25rem 1.25rem 3rem;
  }
`;

const Inner = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

const Group = styled.div`
  margin-top: 2.75rem;
  padding-top: 1.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  &:first-of-type {
    margin-top: 2.25rem;
  }
`;

const GroupLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grayLight};
  margin: 0 0 1.5rem 0;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols || 4}, 1fr);
  gap: 2rem 1.75rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem 1.25rem;
  }
`;

const StatCell = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.grayLine};
  padding-left: 1.1rem;
`;

const StatValue = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: -0.02em;
  margin: 0 0 0.4rem 0;
  line-height: 1;
`;

const StatLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 400;
  margin: 0;
  line-height: 1.4;
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
