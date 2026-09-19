import React from 'react';
import styled from 'styled-components';
import SectionHeading from '../components/SectionHeading';
import { Placeholder, PlaceholderBlock } from '../components/Placeholder';

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

const Narrative = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.inkSoft};
  max-width: 720px;
  margin: 0 0 1.1rem 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const MilestoneGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.5rem;
  row-gap: 1.75rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const MilestoneRow = styled.div`
  padding: 1.1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const MilestoneTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.02rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
  margin: 0 0 0.4rem 0;
  line-height: 1.4;
`;

const MilestoneDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.86rem;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
  line-height: 1.6;
`;

const organization = [
  { value: <Placeholder>ADD #</Placeholder>, label: 'Direct Reports' },
  { value: <Placeholder>ADD #</Placeholder>, label: 'People-Managers Led' },
  { value: '1,500+', label: 'Global Technical Field Community (virtual org)' },
  { value: <Placeholder>ADD #</Placeholder>, label: 'Countries / Regions Covered' },
];

const businessOwnership = [
  { value: <Placeholder>ADD $</Placeholder>, label: 'Annual Budget / Opex Owned' },
  { value: '$700M+', label: 'Enterprise Revenue Influenced' },
  { value: '35+', label: 'Enterprise Accounts — Executive Technical Authority' },
  { value: <Placeholder>ADD</Placeholder>, label: 'P&L / Cost-Center Ownership' },
];

const talent = [
  { value: <Placeholder>ADD #</Placeholder>, label: 'Hires Led' },
  { value: <Placeholder>ADD #</Placeholder>, label: 'Promotions Driven' },
  { value: <Placeholder>ADD %</Placeholder>, label: 'Team Retention Rate' },
  { value: <Placeholder>ADD #</Placeholder>, label: 'Managers Developed / Promoted' },
];

const milestones = [
  {
    title: <Placeholder>Add: an org-scaling or restructuring story</Placeholder>,
    description: 'What changed, why you drove it, and the measurable outcome — headcount growth, a reorg, a new operating model rollout, etc.',
  },
  {
    title: <Placeholder>Add: an executive/board-level initiative</Placeholder>,
    description: 'A strategy you set or presented at the VP/exec level — a budget ask, a roadmap pivot, an org design proposal.',
  },
  {
    title: <Placeholder>Add: a talent or culture initiative</Placeholder>,
    description: 'A leadership-pipeline, hiring-surge, or culture-change effort you personally drove, and its result.',
  },
  {
    title: <Placeholder>Add: a cross-org or M&A / vendor initiative (if applicable)</Placeholder>,
    description: 'Delete this row if it doesn’t apply — otherwise, describe scope and outcome.',
  },
];

const Leadership = () => (
  <Section id="leadership">
    <Inner>
      <SectionHeading
        eyebrow="Leadership"
        title="Building & Leading Organizations"
        lead="Established the operating model for a worldwide technical organization — goal setting, strategic project prioritization, performance evaluation, hiring, and talent development — partnering with engineering, product, policy, and operations stakeholders across AWS."
      />

      <Group>
        <GroupLabel>Organization</GroupLabel>
        <StatGrid>
          {organization.map((s) => (
            <StatCell key={s.label}>
              <StatValue>{s.value}</StatValue>
              <StatLabel>{s.label}</StatLabel>
            </StatCell>
          ))}
        </StatGrid>
      </Group>

      <Group>
        <GroupLabel>Budget &amp; Business Ownership</GroupLabel>
        <StatGrid>
          {businessOwnership.map((s) => (
            <StatCell key={s.label}>
              <StatValue>{s.value}</StatValue>
              <StatLabel>{s.label}</StatLabel>
            </StatCell>
          ))}
        </StatGrid>
      </Group>

      <Group>
        <GroupLabel>Talent &amp; Culture</GroupLabel>
        <StatGrid>
          {talent.map((s) => (
            <StatCell key={s.label}>
              <StatValue>{s.value}</StatValue>
              <StatLabel>{s.label}</StatLabel>
            </StatCell>
          ))}
        </StatGrid>
      </Group>

      <Group>
        <GroupLabel>Executive Stakeholder Engagement</GroupLabel>
        <Narrative>
          Serve as executive technical authority across 35+ enterprise accounts, engaging directly with
          CTOs, CIOs, VPs of Engineering, and Directors to shape technical strategy and drive adoption.
        </Narrative>
        <PlaceholderBlock>
          Add specific examples: board/exec presentations you delivered, budget proposals you owned, or
          cross-org strategy you personally set.
        </PlaceholderBlock>
      </Group>

      <Group>
        <GroupLabel>Organizational Leadership Milestones</GroupLabel>
        <MilestoneGrid>
          {milestones.map((m, i) => (
            <MilestoneRow key={i}>
              <MilestoneTitle>{m.title}</MilestoneTitle>
              <MilestoneDescription>{m.description}</MilestoneDescription>
            </MilestoneRow>
          ))}
        </MilestoneGrid>
      </Group>
    </Inner>
  </Section>
);

export default Leadership;
